﻿// 麻省理工学院许可证
//
// 版权所有 (c) 2020-2023 百小僧，百签科技（广东）有限公司
//
// 特此免费授予获得本软件及其相关文档文件（以下简称“软件”）副本的任何人以处理本软件的权利，
// 包括但不限于使用、复制、修改、合并、发布、分发、再许可、销售软件的副本，
// 以及允许拥有软件副本的个人进行上述行为，但须遵守以下条件：
//
// 在所有副本或重要部分的软件中必须包括上述版权声明和本许可声明。
//
// 软件按“原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于对适销性、适用性和非侵权的保证。
// 在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，
// 无论是因合同、侵权或其他方式引起的，与软件或其使用或其他交易有关。

namespace Furion.DependencyInjection.AspNetCore;

/// <summary>
/// 控制器激活器
/// </summary>
/// <remarks>实现基于属性或字段注入服务</remarks>
internal sealed class AutowiredControllerActivator : IControllerActivator
{
    /// <inheritdoc cref="ITypeActivatorCache"/>
    private readonly ITypeActivatorCache _typeActivatorCache;

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="typeActivatorCache"><see cref="ITypeActivatorCache"/></param>
    public AutowiredControllerActivator(ITypeActivatorCache typeActivatorCache)
    {
        _typeActivatorCache = typeActivatorCache;
    }

    /// <inheritdoc />
    public object Create(ControllerContext controllerContext)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(controllerContext);
        if (controllerContext.ActionDescriptor == null)
        {
            throw new ArgumentException(string.Format("The '{0}' property of '{1}' must not be null."
                , nameof(ControllerContext.ActionDescriptor)
                , nameof(ControllerContext)));
        }

        // 获取控制器类型
        var controllerTypeInfo = controllerContext.ActionDescriptor!.ControllerTypeInfo
            ?? throw new ArgumentException(string.Format("The '{0}' property of '{1}' must not be null."
                , nameof(controllerContext.ActionDescriptor.ControllerTypeInfo)
                , nameof(ControllerContext.ActionDescriptor)));

        // 创建控制器实例
        var serviceProvider = controllerContext.HttpContext.RequestServices;
        var controllerInstance = _typeActivatorCache.CreateInstance<object>(serviceProvider, controllerTypeInfo.AsType());

        // 属性和字段注入服务
        Autowried(controllerInstance, controllerTypeInfo, serviceProvider);

        return controllerInstance;
    }

    /// <inheritdoc />
    public void Release(ControllerContext context, object controller)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(context);
        ArgumentNullException.ThrowIfNull(controller);

        // 释放对象
        if (controller is IDisposable disposable)
        {
            disposable.Dispose();
        }
    }

    /// <inheritdoc />
    public ValueTask ReleaseAsync(ControllerContext context, object controller)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(context);
        ArgumentNullException.ThrowIfNull(controller);

        // 释放对象
        if (controller is IAsyncDisposable asyncDisposable)
        {
            return asyncDisposable.DisposeAsync();
        }

        Release(context, controller);
        return default;
    }

    /// <summary>
    /// 属性和字段注入服务
    /// </summary>
    /// <param name="controllerInstance">控制器实例</param>
    /// <param name="controllerTypeInfo">控制器类型</param>
    /// <param name="serviceProvider"><see cref="IServiceProvider"/></param>
    internal static void Autowried(object controllerInstance, TypeInfo controllerTypeInfo, IServiceProvider serviceProvider)
    {
        // 检查服务
        var serviceProviderIsService = serviceProvider.GetRequiredService<IServiceProviderIsService>();

        // 属性和字段注入
        AutowriedProperties(controllerInstance, controllerTypeInfo, serviceProvider, serviceProviderIsService);
        AutowriedFields(controllerInstance, controllerTypeInfo, serviceProvider, serviceProviderIsService);
    }

    /// <summary>
    /// 属性注入服务
    /// </summary>
    /// <param name="controllerInstance">控制器实例</param>
    /// <param name="controllerTypeInfo">控制器类型</param>
    /// <param name="serviceProvider"><see cref="IServiceProvider"/></param>
    /// <param name="serviceProviderIsService"><see cref="IServiceProviderIsService"/></param>
    internal static void AutowriedProperties(object controllerInstance
        , TypeInfo controllerTypeInfo
        , IServiceProvider serviceProvider
        , IServiceProviderIsService serviceProviderIsService)
    {
        // 查找所有可注入的属性集合
        var properties = controllerTypeInfo.GetProperties(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.DeclaredOnly)
            .Where(property => property.CanWrite
                && property.IsDefined(typeof(AutowiredAttribute), false)
                && serviceProviderIsService.IsService(property.PropertyType))
            .ToList();

        // 空检查
        if (properties.Count == 0)
        {
            return;
        }

        foreach (var property in properties)
        {
            // 注入服务
            property.SetValue(controllerInstance, serviceProvider.GetRequiredService(property.PropertyType));
        }

        properties.Clear();
    }

    /// <summary>
    /// 字段注入服务
    /// </summary>
    /// <param name="controllerInstance">控制器实例</param>
    /// <param name="controllerTypeInfo">控制器类型</param>
    /// <param name="serviceProvider"><see cref="IServiceProvider"/></param>
    /// <param name="serviceProviderIsService"><see cref="IServiceProviderIsService"/></param>
    internal static void AutowriedFields(object controllerInstance
        , TypeInfo controllerTypeInfo
        , IServiceProvider serviceProvider
        , IServiceProviderIsService serviceProviderIsService)
    {
        // 查找所有可注入的字段集合
        var fields = controllerTypeInfo.GetFields(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.DeclaredOnly)
            .Where(field => !field.IsInitOnly
                && field.IsDefined(typeof(AutowiredAttribute), false)
                && serviceProviderIsService.IsService(field.FieldType))
            .ToList();

        // 空检查
        if (fields.Count == 0)
        {
            return;
        }

        foreach (var field in fields)
        {
            // 注入服务
            field.SetValue(controllerInstance, serviceProvider.GetRequiredService(field.FieldType));
        }

        fields.Clear();
    }
}