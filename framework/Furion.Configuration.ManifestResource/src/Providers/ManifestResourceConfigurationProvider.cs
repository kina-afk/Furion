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

namespace Furion.Configuration;

/// <summary>
/// 嵌入资源配置提供器
/// </summary>
internal sealed class ManifestResourceConfigurationProvider : ConfigurationProvider
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="resources"><see cref="ManifestResourceConfigurationModel"/> 集合</param>
    public ManifestResourceConfigurationProvider(List<ManifestResourceConfigurationModel> resources)
    {
        Resources = resources;
    }

    /// <inheritdoc cref="ManifestResourceConfigurationModel" />
    private List<ManifestResourceConfigurationModel> Resources { get; }

    /// <inheritdoc />
    public override void Load()
    {
        // 创建配置文件内容解析器
        var fileConfigurationParser = new FileConfigurationParser();

        // 解析嵌入资源配置文件并生成字典集合
        Data = Resources.SelectMany(manifestResource => ParseResource(fileConfigurationParser, manifestResource))
                        .ToDictionary(u => u.Key, u => u.Value);

        Resources.Clear();
    }

    /// <summary>
    /// 解析嵌入资源配置文件并生成字典集合
    /// </summary>
    /// <param name="fileConfigurationParser"><see cref="FileConfigurationParser"/></param>
    /// <param name="manifestResource"><see cref="ManifestResourceConfigurationModel"/></param>
    /// <returns><see cref="Dictionary{TKey, TValue}"/></returns>
    internal static Dictionary<string, string?> ParseResource(FileConfigurationParser fileConfigurationParser, ManifestResourceConfigurationModel manifestResource)
    {
        // 读取嵌入资源内容流
        using var stream = manifestResource.Assembly.GetManifestResourceStream(manifestResource.ResourceName);
        if (stream is null)
        {
            return new();
        }

        // 解析嵌入资源配置文件并生成集合
        var keyValues = fileConfigurationParser.Parse(manifestResource.Extension, stream);
        if (keyValues is null || keyValues.Count == 0)
        {
            return new();
        }

        // 获取程序集名称
        var assemblyName = manifestResource.Assembly.GetName().Name;
        var data = new Dictionary<string, string?>();

        // 将 程序集名称:键 添加到集合中
        foreach (var (key, value) in keyValues)
        {
            data[$"{assemblyName}:{key}"] = value;
        }

        // 清空集合
        keyValues.Clear();

        // 输出调试事件
        Debugging.File("The embed resource `{0}` has been successfully added to the configuration.", manifestResource.ResourceName);

        return data;
    }
}