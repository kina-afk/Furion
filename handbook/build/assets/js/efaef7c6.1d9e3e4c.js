"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1862],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"sqlsugar-old",title:"10.1. SqlSugar \u96c6\u6210",sidebar_label:"10.1. SqlSugar \u96c6\u6210"},s=void 0,d={unversionedId:"sqlsugar-old",id:"sqlsugar-old",title:"10.1. SqlSugar \u96c6\u6210",description:"\u5728 Furion \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 EFCore\uff0c\u5982\u679c\u4e0d\u4f7f\u7528 EFCore\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 Furion.Pure \u4ee3\u66ff Furion\uff0c\u8fd9\u6837\u53ef\u4ee5\u5ffd\u7565\u672c\u7ae0\u8282\u76f4\u63a5\u6309\u7167 SqlSugar \u5b98\u65b9\u6587\u6863\u4f7f\u7528\u3002",source:"@site/docs/sqlsugar-old.mdx",sourceDirName:".",slug:"/sqlsugar-old",permalink:"/furion/docs/sqlsugar-old",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/sqlsugar-old.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"sqlsugar-old",title:"10.1. SqlSugar \u96c6\u6210",sidebar_label:"10.1. SqlSugar \u96c6\u6210"}},p={},m=[{value:"10.1.1 \u5173\u4e8e SqlSugar",id:"1011-\u5173\u4e8e-sqlsugar",level:2},{value:"10.1.2 \u5982\u4f55\u96c6\u6210",id:"1012-\u5982\u4f55\u96c6\u6210",level:2},{value:"10.1.2.1 \u6ce8\u518c <code>SqlSugar</code> \u670d\u52a1",id:"10121-\u6ce8\u518c-sqlsugar-\u670d\u52a1",level:3},{value:"10.1.3 \u57fa\u672c\u4f7f\u7528",id:"1013-\u57fa\u672c\u4f7f\u7528",level:2},{value:"10.1.4 \u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b",id:"1014-\u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b",level:2},{value:"10.1.5 SqlSugarClient \u64cd\u4f5c\u793a\u4f8b",id:"1015-sqlsugarclient-\u64cd\u4f5c\u793a\u4f8b",level:2},{value:"10.1.5.1 \u57fa\u7840\u67e5\u8be2",id:"10151-\u57fa\u7840\u67e5\u8be2",level:3},{value:"10.1.5.2 \u8054\u8868\u67e5\u8be2",id:"10152-\u8054\u8868\u67e5\u8be2",level:3},{value:"10.1.5.3 \u5206\u9875\u67e5\u8be2",id:"10153-\u5206\u9875\u67e5\u8be2",level:3},{value:"10.1.5.4 \u63d2\u5165",id:"10154-\u63d2\u5165",level:3},{value:"10.1.5.5 \u66f4\u65b0",id:"10155-\u66f4\u65b0",level:3},{value:"10.1.5.6 \u5220\u9664",id:"10156-\u5220\u9664",level:3},{value:"10.1.6 Sql \u67e5\u8be2",id:"1016-sql-\u67e5\u8be2",level:2},{value:"10.1.7 \u6253\u5370 <code>sql</code> \u5230 <code>Swagger</code>",id:"1017-\u6253\u5370-sql-\u5230-swagger",level:2},{value:"10.1.8 <code>Oracle</code>\u6ce8\u610f\u4e8b\u9879",id:"1018-oracle\u6ce8\u610f\u4e8b\u9879",level:2},{value:"10.1.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1019-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6e29\u99a8\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"EFCore"),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion.Pure")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5ffd\u7565\u672c\u7ae0\u8282\u76f4\u63a5\u6309\u7167 ",(0,i.kt)("inlineCode",{parentName:"strong"},"SqlSugar")," \u5b98\u65b9\u6587\u6863\u4f7f\u7528"),"\u3002"))),(0,i.kt)("h2",{id:"1011-\u5173\u4e8e-sqlsugar"},"10.1.1 \u5173\u4e8e SqlSugar"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u662f .NET/C# \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\uff0c\u76ee\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuget")," \u603b\u4e0b\u8f7d\u7a81\u7834 700K\uff0cGithub \u5173\u6ce8\u91cf\u4e5f\u9ad8\u8fbe 3.2K\uff0c\u662f\u76ee\u524d\u5f53\u4e4b\u65e0\u6127\u7684\u56fd\u4ea7\u4f18\u79c0 ORM \u6846\u67b6\u4e4b\u4e00\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u5b98\u65b9\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"http://www.donet5.com/"},"http://www.donet5.com/")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u4e0e EF \u4f18\u52bf\uff1a \u6027\u80fd\u6bd4 EF \u66f4\u5feb\u3001\u8bed\u6cd5\u4e0a\u624b\u66f4\u5bb9\u6613"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u4e0e Dapper \u4f18\u52bf\uff1a SqlSugar \u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\uff0c\u6027\u80fd\u4e1d\u6beb\u4e0d\u900a\u8272\u4e8e Dapper\uff0c\u5e76\u4e14\u6279\u91cf\u64cd\u4f5c\u6027\u80fd\u66f4\u597d"),(0,i.kt)("h2",{id:"1012-\u5982\u4f55\u96c6\u6210"},"10.1.2 \u5982\u4f55\u96c6\u6210"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u62d3\u5c55\u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.SqlSugar"},"Furion.Extras.DatabaseAccessor.SqlSugar"),"\u3002"),(0,i.kt)("h3",{id:"10121-\u6ce8\u518c-sqlsugar-\u670d\u52a1"},"10.1.2.1 \u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"h3"},"SqlSugar")," \u670d\u52a1"),(0,i.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddSqlSugar(config)")," \u5373\u53ef\u3002\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// =====\u914d\u7f6e\u5355\u5e93=====\nservices.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n});\n\n// =====\u914d\u7f6e\u591a\u5e93=====\nList<ConnectionConfig> connectConfigList = new List<ConnectionConfig>();\n//\u6570\u636e\u5e931\nconnectConfigList.Add(new ConnectionConfig\n{\n    ConnectionString = "\u94fe\u63a5\u5b57\u7b26\u4e321",\n    DbType = DbType.MySql,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute,\n    ConfigId = "0",\n    AopEvents = new AopEvents\n    {\n        //\u591a\u5e93\u72b6\u6001\u4e0b\u6bcf\u4e2a\u5e93\u5fc5\u987b\u5355\u72ec\u7ed1\u5b9a\u6253\u5370\u4e8b\u4ef6\uff0c\u5426\u5219\u53ea\u4f1a\u6253\u5370\u7b2c\u4e00\u4e2a\u5e93\u7684sql\u65e5\u5fd7\n        OnLogExecuting = (sql, pars) =>\n        {\n            Console.WriteLine(SqlProfiler.ParameterFormat(sql, pars));\n            Console.WriteLine();\n        }\n    }\n});\n//\u6570\u636e\u5e932\nconnectConfigList.Add(new ConnectionConfig\n{\n    ConnectionString = "\u94fe\u63a5\u5b57\u7b26\u4e322",\n    DbType = DbType.MySql,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute,\n    ConfigId = "1",\n    AopEvents = new AopEvents\n    {\n        //\u591a\u5e93\u72b6\u6001\u4e0b\u6bcf\u4e2a\u5e93\u5fc5\u987b\u5355\u72ec\u7ed1\u5b9a\u6253\u5370\u4e8b\u4ef6\uff0c\u5426\u5219\u53ea\u4f1a\u6253\u5370\u7b2c\u4e00\u4e2a\u5e93\u7684sql\u65e5\u5fd7\n        OnLogExecuting = (sql, pars) =>\n        {\n            Console.WriteLine(SqlProfiler.ParameterFormat(sql, pars));\n            Console.WriteLine();\n        }\n    }\n});\nservices.AddSqlSugar(connectConfigList.ToArray());\n')),(0,i.kt)("p",null,"\u540c\u65f6\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u914d\u7f6e\uff0c\u5982\uff1a\nps\uff1a\u591a\u5e93\u72b6\u6001\u4e0b\u6bcf\u4e2a\u5e93\u5fc5\u987b\u5355\u72ec\u7ed1\u5b9a\u6253\u5370\u4e8b\u4ef6\uff0c\u5426\u5219\u53ea\u4f1a\u6253\u5370\u7b2c\u4e00\u4e2a\u5e93\u7684sql\u65e5\u5fd7\uff08\u53c2\u8003\u4e0a\u9762\u7684\u591a\u5e93\u914d\u7f6e\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddSqlSugar(connectConfigList.ToArray(),\ndb =>\n{\n    //\u5904\u7406\u65e5\u5fd7\u4e8b\u52a1\n    db.Aop.OnLogExecuting = (sql, pars) =>\n    {\n        Console.WriteLine(sql);\n        Console.WriteLine(string.Join(",", pars?.Select(it => it.ParameterName + ":" + it.Value)));\n        Console.WriteLine();\n        App.PrintToMiniProfiler("SqlSugar", "Info", sql + "\\r\\n" + db.Utilities.SerializeObject(pars.ToDictionary(it => it.ParameterName, it => it.Value)));\n    };\n});\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b89\u88c5\u62d3\u5c55\u5305\u4f4d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u5c06\u62d3\u5c55\u5305 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.SqlSugar")," \u5b89\u88c5\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\u3002"))),(0,i.kt)("h2",{id:"1013-\u57fa\u672c\u4f7f\u7528"},"10.1.3 \u57fa\u672c\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"ISqlSugarRepository")," \u63a5\u53e3\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,6}",showLineNumbers:!0,"":!0,"{1,6}":!0},"private readonly ISqlSugarRepository repository; // \u4ed3\u50a8\u5bf9\u8c61\uff1a\u5c01\u88c5\u7b80\u5355\u7684CRUD\nprivate readonly SqlSugarClient db; // \u6838\u5fc3\u5bf9\u8c61\uff1a\u62e5\u6709\u5b8c\u6574\u7684SqlSugar\u5168\u90e8\u529f\u80fd\npublic PersonService(ISqlSugarRepository sqlSugarRepository)\n{\n    repository = sqlSugarRepository;\n    db = repository.Context;    // \u63a8\u8350\u64cd\u4f5c\n}\n")),(0,i.kt)("h2",{id:"1014-\u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b"},"10.1.4 \u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ================== SqlSugarClient ================\n\n//\u67e5\u8be2\u529f\u80fd\nvar data1 =db.Queryable<Student>().First(it=>it.Id==1); //db.GetById(1);\n\nvar data2 = db.Queryable<Student>().ToList();// db.GetList();\n\n// ================== \u7b80\u5355\u4ed3\u50a8 ================\n\n//\u63d2\u5165\ndb.Insert(insertObj);\nvar id = db.InsertReturnIdentity(insertObj);\ndb.AsInsertable(insertObj).ExecuteCommand();\n\n//\u5220\u9664\ndb.Delete(insertObj);\ndb.Delete(it => it.Id == 1);\n\n//\u66f4\u65b0\ndb.Update(insertObj);\ndb.Update(it => new Order() { Name = "a", }, it => it.Id == 1);\n\n//\u5f02\u6b65\u65b9\u6cd5\u7528\u6cd5\ndb.Insert(insertObj);//\u540c\u6b65\ndb.InsertAsync(insertObj);//\u5f02\u6b65\n\n//\u5207\u6362\u4ed3\u50a8\nvar orderRespository=db.GetSimpleClient<Order>();\norderRespository.Insert(Order);\n')),(0,i.kt)("h2",{id:"1015-sqlsugarclient-\u64cd\u4f5c\u793a\u4f8b"},"10.1.5 SqlSugarClient \u64cd\u4f5c\u793a\u4f8b"),(0,i.kt)("h3",{id:"10151-\u57fa\u7840\u67e5\u8be2"},"10.1.5.1 \u57fa\u7840\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//\u67e5\u8be2\u6240\u6709\nvar getAll = db.Queryable<Student>().ToList();\n//\u67e5\u8be2\u524d10\nvar top10= db.Queryable<Student>().Take(10).ToList();\n//\u67e5\u8be2\u5355\u6761\nvar getFirst = db.Queryable<Student>().First(it=>it.Id==1);\n//with nolock\nvar getAllNoLock = db.Queryable<Student>().With(SqlWith.NoLock).ToList();\n//\u6839\u636e\u4e3b\u952e\u67e5\u8be2\nvar getByPrimaryKey = db.Queryable<Student>().InSingle(2);\n//\u67e5\u8be2\u603b\u548c\nvar sum = db.Queryable<Student>().Sum(it=>it.Id);\n//\u662f\u5426\u5b58\u5728\nvar isAny = db.Queryable<Student>().Where(it=>it.Id==-1).Any();\n//\u6a21\u7cca\u67e5\nvar list2 = db.Queryable<Order>().Where(it =>it.Name.Contains("jack")).ToList();\n')),(0,i.kt)("h3",{id:"10152-\u8054\u8868\u67e5\u8be2"},"10.1.5.2 \u8054\u8868\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var list = db.Queryable<Student, School>((st, sc) => new JoinQueryInfos(\n        JoinType.Left,st.SchoolId==sc.Id))\n      .Select((st,sc)=>new{Id=st.Id,Name=st.Name,SchoolName=sc.Name}).ToList();\n\n\u751f\u6210\u7684Sql\u5982\u4e0b:\nSELECT  [st].[ID] AS [id] ,\n          [st].[Name] AS [name] ,\n          [sc].[Name] AS [schoolName]  FROM [STudent] st\n          Left JOIN School sc ON ( [st].[SchoolId] =[sc].[Id])\n")),(0,i.kt)("h3",{id:"10153-\u5206\u9875\u67e5\u8be2"},"10.1.5.3 \u5206\u9875\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0}," int pageIndex = 1;\n int pageSize = 20;\n int totalCount=0;\n var page = db.Queryable<Student>().ToPageList(pageIndex, pageSize, ref totalCount);\n")),(0,i.kt)("p",null,"\u66f4\u591a\u67e5\u8be2\u7528\u6cd5 \uff1a ",(0,i.kt)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1185"},"http://www.donet5.com/Home/Doc?typeId=1185")),(0,i.kt)("h3",{id:"10154-\u63d2\u5165"},"10.1.5.4 \u63d2\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//\u53ef\u4ee5\u662f \u7c7b \u6216\u8005 List<\u7c7b>\ndb.Insertable(insertObj).ExecuteCommand();\n\n//\u63d2\u5165\u8fd4\u56de\u81ea\u589e\u5217\ndb.Insertable(insertObj).ExecuteReturnIdentity();\n\n//\u53ef\u4ee5\u662f Dictionary \u6216\u8005 List<Dictionary >\nvar dc= new Dictionary<string, object>();\n            dt.Add("name", "1");\n            dt.Add("CreateTime", null);\ndb.Insertable(dc).AS("student").ExecuteCommand();\n\n//DataTable\u63d2\u5165\nDictionary<string,object> dc= db.Utilities.DataTableToDictionary(dataTable);//\u8f6c\u6210\u5b57\u5178\u5c31\u53ef\u4ee5\u6309\u4e0a\u9762\u7684\u5b57\u5178\u66f4\u65b0\u4e86\ndb.Insertable(dc).AS("student").ExecuteReturnIdentity();\n\n//\u5b9e\u4f53\u53ef\u4ee5\u914d\u7f6e\u4e3b\u952e\u548c\u81ea\u589e\u5217\npublic class Student\n{\n    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]\n    public int Id { get; set; }\n    public int? SchoolId { get; set; }\n    public string Name { get; set; }\n}\n')),(0,i.kt)("p",null,"\u66f4\u591a\u63d2\u5165\u7528\u6cd5\uff1a ",(0,i.kt)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1193"},"http://www.donet5.com/Home/Doc?typeId=1193")),(0,i.kt)("h3",{id:"10155-\u66f4\u65b0"},"10.1.5.5 \u66f4\u65b0"),(0,i.kt)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u53c2\u8003\u63d2\u5165\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u4e3b\u952e\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//\u6839\u636e\u4e3b\u952e\u66f4\u65b0\u5355\u6761 \u53c2\u6570 Class\nvar result= db.Updateable(updateObj).ExecuteCommand();\n//\u4e0d\u66f4\u65b0 Name \u548cTestId\nvar result=db.Updateable(updateObj).IgnoreColumns(it => new { it.CreateTime,it.TestId }).ExecuteCommand()\n//\u53ea\u66f4\u65b0 Name \u548c CreateTime\nvar result=db.Updateable(updateObj).UpdateColumns(it => new { it.Name,it.CreateTime }).ExecuteCommand();\n//\u6839\u636e\u8868\u8fbe\u5f0f\u66f4\u65b0\nvar result71 = db.Updateable<Order>()\n              .SetColumns(it => it.Name == "a")\n              .SetColumnsIF(p!=null ,it => it.CreateTime == p.Value)//\u5f53p\u4e0d\u7b49\u4e8enull\u66f4\u65b0createtime\u5217\n            .Where(it => it.Id == 11).ExecuteCommand();\n')),(0,i.kt)("p",null,"\u66f4\u591a\u66f4\u65b0\u7528\u6cd5\uff1a ",(0,i.kt)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1191"},"http://www.donet5.com/Home/Doc?typeId=1191")),(0,i.kt)("h3",{id:"10156-\u5220\u9664"},"10.1.5.6 \u5220\u9664"),(0,i.kt)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u53c2\u8003\u63d2\u5165\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u4e3b\u952e\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"//\u6839\u636e\u5b9e\u4f53\u5220\u9664\ndb.Deleteable<Student>().Where(new Student() { Id = 1 }).ExecuteCommand();\n//\u6839\u636e\u4e3b\u952e\u5220\u9664\ndb.Deleteable<Student>().In(1).ExecuteCommand();\n//\u6839\u636e\u8868\u8fbe\u5f0f\u5220\u9664\ndb.Deleteable<Student>().Where(it => it.Id == 1).ExecuteCommand();\n")),(0,i.kt)("p",null,"\u66f4\u591a\u5220\u9664\u7528\u6cd5: ",(0,i.kt)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1195"},"http://www.donet5.com/Home/Doc?typeId=1195")),(0,i.kt)("h2",{id:"1016-sql-\u67e5\u8be2"},"10.1.6 Sql \u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//sql\u5206\u9875\nvar list = db.SqlQueryable<Student>("select * from student").ToPageList(1, 2,ref total);\n\n//\u539f\u751fSql\u7528\u6cd5\nvar dt=db.Ado.GetDataTable("select * from table where id=@id and name=@name",new List<SugarParameter>(){\n  new SugarParameter("@id",1),\n  new SugarParameter("@name",2)\n});\n//\u53c2\u65702\nvar dt=db.Ado.GetDataTable("select * from table where id=@id and name=@name",new{id=1,name=2});\n\n//\u5b58\u50a8\u8fc7\u7a0b\u7528\u6cd5\nvar nameP= new SugarParameter("@name", "\u5f20\u4e09");\nvar ageP= new SugarParameter("@age", null, true);//\u8bbe\u7f6e\u4e3aoutput\nvar dt = db.Ado.UseStoredProcedure().GetDataTable("sp_school",nameP,ageP);\n\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8fd4\u56de\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SqlQuery< T >"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u6240\u6709\u8fd4\u56de\u5b9e\u4f53\u96c6\u5408"),(0,i.kt)("td",{parentName:"tr",align:"center"},"List")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SqlQuery<T,T2>"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u53ef\u4ee5\u8fd4\u56de 2 \u4e2a\u7ed3\u679c\u96c6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuple<List, List>")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SqlQuerySingle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u7b2c\u4e00\u6761\u8bb0\u5f55"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDataTable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u6240\u6709"),(0,i.kt)("td",{parentName:"tr",align:"center"},"DataTable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDataReader"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8bfb\u53d6 DR \u9700\u8981\u624b\u52a8\u91ca\u653e DR"),(0,i.kt)("td",{parentName:"tr",align:"center"},"DataReader")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDataSetAll"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u591a\u4e2a\u7ed3\u679c\u96c6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"DataSet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ExecuteCommand"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8fd4\u56de\u53d7\u5f71\u54cd\u884c\u6570\uff0c\u4e00\u822c\u7528\u4e8e\u589e\u5220\u6539"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetScalar"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetString"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetInt"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetLong"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"long")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDouble"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDecimal"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Decimal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GetDateTime"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),(0,i.kt)("td",{parentName:"tr",align:"center"},"DateTime")))),(0,i.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"http://donet5.com/"},"SqlSugar \u5b98\u7f51"),"\u3002"),(0,i.kt)("h2",{id:"1017-\u6253\u5370-sql-\u5230-swagger"},"10.1.7 \u6253\u5370 ",(0,i.kt)("inlineCode",{parentName:"h2"},"sql")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Swagger")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n},\ndb =>\n{\n    db.Aop.OnLogExecuting = (sql, pars) =>\n    {\n        //\u65b9\u6cd5\u4e00\n        App.PrintToMiniProfiler("SqlSugar", "Info", sql + "\\r\\n" +string.Join(",", pars?.Select(it => it.ParameterName + ":" + it.Value)));\n\n        //\u65b9\u6cd5\u4e8c:Furion\u5bf9\u4e0a\u8ff0\u7528\u6cd5\u8fdb\u884c\u4e8c\u6b21\u5c01\u88c5 \u5efa\u8bae\u65b9\u5f0f Sql\u53c2\u6570\u4f1a\u76f4\u63a5\u5199\u5165\u5230\u751f\u6210Sql\u4e2d\n        App.PrintToMiniProfiler("SqlSugar","Info",SqlProfiler.ParameterFormat(sql,pars));\n    };\n});\n')),(0,i.kt)("h2",{id:"1018-oracle\u6ce8\u610f\u4e8b\u9879"},"10.1.8 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Oracle"),"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u6ce8\u610f .NET5 \u7528\u6237\u9700\u8981\u5728 API \u6216\u8005\u9879\u76ee\u89e3\u51b3\u65b9\u6848 ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\u52a0\u4ee5\u4e0b\u4e00\u884c\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"<PropertyGroup>\n   <TargetFramework>net5.0</TargetFramework>\n   <EnableUnsafeBinaryFormatterSerialization>true</EnableUnsafeBinaryFormatterSerialization>\n</PropertyGroup>\n")),(0,i.kt)("h2",{id:"1019-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.1.9 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0}}]);