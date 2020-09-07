﻿// -----------------------------------------------------------------------------
// Fur 是 .NET 5 平台下极易入门、极速开发的 Web 应用框架。
// Copyright © 2020 Fur, Baiqian Co.,Ltd.
//
// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 源码地址：https://gitee.com/monksoul/Fur
// 开源协议：Apache-2.0（http://www.apache.org/licenses/LICENSE-2.0）
// -----------------------------------------------------------------------------

using Fur.Extensions;
using Mapster;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Fur.DatabaseAccessor.Extensions.DatabaseFacade
{
    /// <summary>
    /// 数据库数据转换拓展
    /// </summary>
    public static class DbDataConvertExtensions
    {
        /// <summary>
        /// 将 DataTable 转 List 集合
        /// </summary>
        /// <typeparam name="T">返回值类型</typeparam>
        /// <param name="dataTable">DataTable</param>
        /// <returns>List<T></returns>
        public static List<T> ToList<T>(this DataTable dataTable)
        {
            return dataTable.ToList(typeof(List<T>)) as List<T>;
        }

        /// <summary>
        /// 将 DataTable 转 List 集合
        /// </summary>
        /// <typeparam name="T">返回值类型</typeparam>
        /// <param name="dataTable">DataTable</param>
        /// <returns>List<T></returns>
        public static async Task<List<T>> ToListAsync<T>(this DataTable dataTable)
        {
            var list = await dataTable.ToListAsync(typeof(List<T>));
            return list as List<T>;
        }

        /// <summary>
        /// 将 DataTable 转 特定类型
        /// </summary>
        /// <param name="dataTable">DataTable</param>
        /// <param name="returnType">返回值类型</param>
        /// <returns>object</returns>
        public static object ToList(this DataTable dataTable, Type returnType)
        {
            var isGenericType = returnType.IsGenericType;
            // 获取类型真实返回类型
            var underlyingType = isGenericType ? returnType.GenericTypeArguments.First() : returnType;

            var list = new List<object>();

            // 将 DataTable 转为行集合
            var dataRows = dataTable.AsEnumerable();

            // 如果是基元类型
            if (underlyingType.IsRichPrimitive())
            {
                // 遍历所有行
                foreach (var dataRow in dataRows)
                {
                    // 只取第一列数据
                    var firstColumnValue = dataRow[0];
                    // 转换成目标类型数据
                    var destValue = firstColumnValue.Adapt(firstColumnValue.GetType(), underlyingType);
                    // 添加到集合中
                    list.Add(destValue);
                }
            }
            else
            {
                // 获取所有的数据列和类公开实例属性
                var dataColumns = dataTable.Columns;
                var properties = underlyingType.GetProperties(BindingFlags.Public | BindingFlags.Instance);

                // 遍历所有行
                foreach (var dataRow in dataRows)
                {
                    var model = Activator.CreateInstance(underlyingType);

                    // 遍历所有属性并一一赋值
                    foreach (var property in properties)
                    {
                        // 如果属性贴了 [NotMapped]，则跳过映射
                        if (property.IsDefined(typeof(NotMappedAttribute), true)) continue;

                        // 获取属性对应的真实列名
                        var columnName = property.Name;
                        if (property.IsDefined(typeof(ColumnAttribute), true))
                        {
                            var columnAttribute = property.GetCustomAttribute<ColumnAttribute>(true);
                            if (!string.IsNullOrEmpty(columnAttribute.Name)) columnName = columnAttribute.Name;
                        }

                        // 如果 DataTable 不包含该列名，则跳过
                        if (!dataColumns.Contains(columnName)) continue;

                        // 获取列值
                        var columnValue = dataRow[columnName];
                        // 如果列值未空，则跳过
                        if (columnValue == DBNull.Value) continue;

                        // 转换成目标类型数据
                        var destValue = columnValue.Adapt(columnValue.GetType(), underlyingType);
                        property.SetValue(model, destValue);
                    }

                    // 添加到集合中
                    list.Add(model);
                }
            }

            return isGenericType ? list : list.FirstOrDefault();
        }

        /// <summary>
        /// 将 DataTable 转 特定类型
        /// </summary>
        /// <param name="dataTable">DataTable</param>
        /// <param name="returnType">返回值类型</param>
        /// <returns>object</returns>
        public static Task<object> ToListAsync(this DataTable dataTable, Type returnType)
        {
            return Task.FromResult(dataTable.ToList(returnType));
        }

        /// <summary>
        /// 将 DataSet 转 特定类型
        /// </summary>
        /// <param name="dataSet">DataSet</param>
        /// <param name="returnTypes">特定类型集合</param>
        /// <returns>object</returns>
        public static Task<object> ToListAsync(this DataSet dataSet, params Type[] returnTypes)
        {
            return Task.FromResult(dataSet.ToList(returnTypes));
        }

        /// <summary>
        /// 将 DataSet 转 特定类型
        /// </summary>
        /// <param name="dataSet">DataSet</param>
        /// <param name="returnTypes">特定类型集合</param>
        /// <returns>object</returns>
        public static object ToList(this DataSet dataSet, params Type[] returnTypes)
        {
            if (returnTypes == null || returnTypes.Length == 0) return default;

            // 获取所有的 DataTable
            var dataTables = dataSet.Tables;

            // 处理 8 个结果集
            if (returnTypes.Length >= 8)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]), dataTables[6].ToList(returnTypes[6]), dataTables[7].ToList(returnTypes[7]));
            }
            // 处理 7 个结果集
            else if (returnTypes.Length == 7)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]), dataTables[6].ToList(returnTypes[6]));
            }
            // 处理 6 个结果集
            else if (returnTypes.Length == 6)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]));
            }
            // 处理 5 个结果集
            else if (returnTypes.Length == 5)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]));
            }
            // 处理 4 个结果集
            else if (returnTypes.Length == 4)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]));
            }
            // 处理 3 个结果集
            else if (returnTypes.Length == 3)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]));
            }
            // 处理 2 个结果集
            else if (returnTypes.Length == 2)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]));
            }
            // 处理 1 个结果集
            else
            {
                return (dataTables[0].ToList(returnTypes[0]));
            }
        }
    }
}