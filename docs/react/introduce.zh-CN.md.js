webpackJsonp([47],{769:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=a(1),e=(t(p),a(2));t(e);n.exports={content:["article",["p",["code","antd-mobile"]," \u662f Ant Design \u7684\u79fb\u52a8\u89c4\u8303\u7684 React \u5b9e\u73b0\uff0c\u670d\u52a1\u4e8e\u8682\u8681\u53ca\u53e3\u7891\u65e0\u7ebf\u4e1a\u52a1\u3002"],["div",{"class":"pic-plus"},["img",{width:"160",src:"https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"],["p",["a",{title:null,href:"http://ant.design"},"Ant Design"]," \u5728\u4e2d\u540e\u53f0\u9886\u57df\u7684\u8015\u8018\u53d6\u5f97\u4e86\u5f88\u591a\u6210\u7ee9\uff0c\u4f7f\u5f97 Ant Design \u8bbe\u8ba1\u89c4\u8303\u548c React \u9010\u6e10\u6210\u4e3a\u8682\u8681\u91d1\u670d\u4e3b\u6d41\u7684\u524d\u7aef\u4ea7\u54c1\u5f00\u53d1\u6a21\u5f0f\uff0c\u4e5f\u53d7\u5230\u793e\u533a\u7684\u5e7f\u6cdb\u5173\u6ce8\u3002\u6211\u4eec\u6ca1\u6709\u6b62\u6b65\u4e8e\u6b64\uff0c\u4e00\u5e74\u540e\u63a8\u51fa\u4e86 Ant Design \u79fb\u52a8\u7aef\u89c4\u8303\u53ca\u5176\u5b9e\u73b0\u3002"],["p","\u968f\u7740\u8682\u8681\u91d1\u670d\u4e2d\u540e\u53f0\u7684\u79fb\u52a8\u7aef\u9700\u6c42\u589e\u591a\uff0c\u4e0d\u540c\u7684\u8bbe\u8ba1\u89c4\u8303\u53ca\u7814\u53d1\u65b9\u5f0f\uff0c\u7ed9\u8bbe\u8ba1\u8005\u548c\u5f00\u53d1\u8005\u5e26\u6765\u5927\u91cf\u7684\u91cd\u590d\u5de5\u4f5c\uff0c\u964d\u4f4e\u4e86\u4ea7\u54c1\u7684\u7814\u53d1\u6548\u7387\u3002"],["p","\u6211\u4eec\u5e0c\u671b\u4e3a\u8bbe\u8ba1\u8005\u548c\u5f00\u53d1\u8005\u63d0\u4f9b\u4e00\u5957\u7edf\u4e00\u7684\u8bbe\u8ba1\u89c4\u8303\uff0c\u53ef\u4ee5\u964d\u4f4e\u8bbe\u8ba1\u3001\u5f00\u53d1\u6210\u672c\uff0c\u51cf\u5c11\u6c9f\u901a\u8bef\u5dee\u3002\u4e0d\u540c\u4e8e\u5927\u591a\u6570\u8bbe\u8ba1\u89c4\u8303\uff0c\u6211\u4eec\u62bd\u8c61\u51fa\u901a\u7528\u7ec4\u4ef6\u7684\u57fa\u7840\u6837\u5f0f\u548c\u7ec4\u4ef6\u5c5e\u6027\uff0c\u4f7f\u5f97\u62d3\u5c55\u6027\u66f4\u5f3a\u3002\u57fa\u4e8e\u8fd9\u5957\u89c4\u8303\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u9875\u9762\uff0c\u63d0\u9ad8\u7814\u53d1\u6548\u7387\uff0c\u4e5f\u5e0c\u671b\u501f\u6b64\u63a8\u8fdb\u8682\u8681\u91d1\u670d\u5404\u5e94\u7528\u5411\u8bbe\u8ba1\u89c4\u8303\u5316\u7684\u65b9\u5411\u53d1\u5c55\u3002"],["p","\u5728\u5de5\u7a0b\u65b9\u9762\uff0c\u6211\u4eec\u7ee7\u7eed\u63a8\u8fdb\u548c\u53d1\u5c55 React \u5168\u5bb6\u6876\u6280\u672f\u6808\uff0c\u63a2\u7d22\u591a\u7aef\u540c\u6808\u3001\u53ef\u9884\u6d4b\u3001\u9ad8\u6548\u7684\u7814\u53d1\u6a21\u5f0f\u3002"],["h2","\u7279\u6027"],["ul",["li",["p","\u57fa\u4e8e Ant Design \u79fb\u52a8\u8bbe\u8ba1\u89c4\u8303\u3002"]],["li",["p","\u89c4\u5219\u5316\u7684\u89c6\u89c9\u6837\u5f0f\u914d\u7f6e\uff0c\u9002\u5e94\u5404\u7c7b\u4ea7\u54c1\u98ce\u683c\u3002"]],["li",["p","\u57fa\u4e8e React Native \u7684\u591a\u5e73\u53f0\u652f\u6301\u3002"]],["li",["p","\u4f7f\u7528 TypeScript \u5f00\u53d1\uff0c\u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u3002"]]],["h2","\u5b89\u88c5"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-mobile --save'},["code","$ npm install antd-mobile --save"]],["h2","\u4f7f\u7528"],["blockquote",["p","\u9047\u5230\u62a5\u9519\uff0c\u8bf7\u5148\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/56"},"\u793a\u4f8b\u811a\u624b\u67b6"]]],["p","Set webpack to resolve .web.js suffix"],["pre",{lang:null,highlighted:'resolve<span class="token punctuation">:</span> {\n  modulesDirectories<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'../node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'.web.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n}<span class="token punctuation">,</span>'},["code","resolve: {\n  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],\n  extensions: ['', '.web.js', '.js', '.json'],\n},"]],["p","\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\uff0c\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u6309\u9700\u52a0\u8f7d\uff0c\u63d2\u4ef6\u8bbe\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc</span>\n<span class="token punctuation">{</span><span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">// or webpack config file</span>\nwebpackConfig<span class="token punctuation">.</span>babel<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token string">\'css\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'// .babelrc\n{"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}\n// or webpack config file\nwebpackConfig.babel.plugins.push([\'import\', { libraryName: \'antd-mobile\', style: \'css\' }]);']],["h4","Web \u4f7f\u7528\u573a\u666f"],["p","\u9996\u5148\u9700\u8981\u5f15\u5165\u300e\u9ad8\u6e05\u65b9\u6848\u300f\u8bbe\u7f6e\uff1a\u5177\u4f53\u65b9\u6cd5\n\u89c1 wiki \u91cc ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"},"antd-mobile-0.8-\u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","// import js and css modularly, parsed by babel-plugin-import\nimport { Button } from 'antd-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]],["p","\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9898\uff1f",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md"},"\u89c1\u6b64\u6587\u6863"]],["h4","React-Native \u4f7f\u7528\u573a\u666f"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">HelloWorldApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'HelloWorldApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HelloWorldApp<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Button } from 'antd-mobile';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]],["blockquote",["p","\u66f4\u591a\u5e38\u89c1\u95ee\u9898\uff0c\u8bf7\u67e5\u770b ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki"},"wiki pages"]]],["h2","\u7248\u672c"],["ul",["li",["p","\u7a33\u5b9a\u7248\uff1a",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","\u5f00\u53d1\u7248\uff1a",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd-mobile.svg?tag=beta&style=flat-square",alt:"npm package"}]]]]],["h2","\u4f53\u79ef"],["ul",["li",["p","\u6784\u5efa\u540e\u603b\u4f53\u79ef\uff1a",["code","~110KB"]]],["li",["p","\u6309\u9700\u52a0\u8f7d\uff1a\u53ea\u9700\u5f15\u5165\u4e1a\u52a1\u4e2d\u9700\u8981\u7684\u7ec4\u4ef6\u5373\u53ef\uff0c\u672a import \u8fdb\u6765\u7684\u7ec4\u4ef6\u4e0d\u4f1a\u6253\u5305\u8fdb\u6765\u3002"]]],["h2","\u6d4f\u89c8\u5668\u652f\u6301"],["ul",["li",["p",["code","iOS"]]],["li",["p",["code","Android 4.0+"]]]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"/"},"\u9996\u9875"]]],["li",["p",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile/blob/master/development.md"},"\u5f00\u53d1\u6587\u6863"]]],["li",["p",["a",{title:null,href:"http://github.com/react-component"},"React \u6a21\u5757"]]]],["h2","\u8c01\u5728\u4f7f\u7528"],["ul",["li",["p","\u8682\u8681\u91d1\u670d"]],["li",["p","\u963f\u91cc\u5df4\u5df4"]],["li",["p","\u53e3\u7891"]]],["h2","\u6b22\u8fce\u53c2\u4e0e"],["p","\u6709\u4efb\u4f55\u5efa\u8bae\u6216\u610f\u89c1\u60a8\u53ef\u4ee5\u8fdb\u884c ",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile/issues"},"\u63d0\u95ee"],"\u3002"]],meta:{order:0,english:"Ant Design Mobile of React",filename:"docs/react/introduce.zh-CN.md"},toc:["ul",["li",["a",{href:"#\u7279\u6027"},"\u7279\u6027"]],["li",["a",{href:"#\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{href:"#\u4f7f\u7528"},"\u4f7f\u7528"]],["li",["a",{href:"#\u7248\u672c"},"\u7248\u672c"]],["li",["a",{href:"#\u4f53\u79ef"},"\u4f53\u79ef"]],["li",["a",{href:"#\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"]],["li",["a",{href:"#\u94fe\u63a5"},"\u94fe\u63a5"]],["li",["a",{href:"#\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"]],["li",["a",{href:"#\u6b22\u8fce\u53c2\u4e0e"},"\u6b22\u8fce\u53c2\u4e0e"]]]}}});