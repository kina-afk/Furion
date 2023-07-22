﻿// 麻省理工学院许可证
//
// 版权所有 © 2020-2023 百小僧，百签科技（广东）有限公司
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

namespace Furion.Component.Tests;

public class ComponentInvokeContextTests
{
    [Fact]
    public void New_Invalid_Parameters()
    {
        Assert.Throws<ArgumentNullException>(() =>
        {
            var componentInvokeContext = new ComponentInvokeContext(null!, null!, null!);
        });

        Assert.Throws<ArgumentNullException>(() =>
        {
            var componentInvokeContext = new ComponentInvokeContext(new InvokeComponentClass1(), null!, null!);
        });

        Assert.Throws<ArgumentException>(() =>
        {
            var componentInvokeContext = new ComponentInvokeContext(new InvokeComponentClass1(), new ServiceComponentContext(Host.CreateApplicationBuilder()), string.Empty);
        });

        Assert.Throws<ArgumentException>(() =>
        {
            var componentInvokeContext = new ComponentInvokeContext(new InvokeComponentClass1(), new ServiceComponentContext(Host.CreateApplicationBuilder()), "");
        });
    }

    [Fact]
    public void New_ReturnOK()
    {
        var componentInvokeContext = new ComponentInvokeContext(new InvokeComponentClass1(), new ServiceComponentContext(Host.CreateApplicationBuilder()), nameof(InvokeComponentClass1.PreConfigureServices));

        Assert.NotNull(componentInvokeContext);
        Assert.NotNull(componentInvokeContext.Component);
        Assert.NotNull(componentInvokeContext.ComponentContext);
        Assert.Equal(nameof(InvokeComponentClass1.PreConfigureServices), componentInvokeContext.InvokeName);
    }

    [Fact]
    public void ToString_Output()
    {
        var componentInvokeContext = new ComponentInvokeContext(new InvokeComponentClass1(), new ServiceComponentContext(Host.CreateApplicationBuilder()), nameof(InvokeComponentClass1.PreConfigureServices));

        Assert.Equal("Furion.Component.Tests.InvokeComponentClass1.PreConfigureServices", componentInvokeContext.ToString());
    }
}