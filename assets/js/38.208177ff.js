(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{202:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"使用tree生成目录结构-参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用tree生成目录结构-参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用tree生成目录结构 "),n("a",{attrs:{href:"https://blog.csdn.net/qq673318522/article/details/53713903",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("程序员经常会有需求，需要列出项目的结构树。Mac或者Linux下可以使用tree列出项目结构，如下图这种：")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("使用起来也非常简单。\nMac下可以使用brew install tree进行安装。安装后，在terminal中输入tree -a便可以查看某个文件夹下的所有文件。\n常用的命令\n当然了，我们的需求肯定不止列出所有文件这么简单。下面介绍几个常用的命令")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("更多命令的使用可以查看tree --help。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("    ├── build\n    ├── config\n    ├── docs\n    │   └── static\n    │       ├── css\n    │       └── js\n    ├── src\n    │   ├── assets\n    │   ├── components\n    │   ├── store\n    │   │   └── modules\n    │   └── views\n    │       ├── book\n    │       └── movie\n    └── static\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("p",[n("strong",[e._v("tree -d")]),e._v(" 只显示文件夹；")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("tree -L n")]),e._v(" 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3；")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("tree -I pattern")]),e._v(' 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"；')])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("tree > tree.md")]),e._v(' 将项目结构输出到tree.md这个文件。\n举个例子，如果我们要显示某个项目下3层的所有文件结构，同时又过滤node_modules文件夹，最后输出到tree.md，可以这么写\ntree -L 3 -I "node_modules"\n1\n结果为：')]),e._v(" "),n("pre",[n("code",[e._v("  .\n  ├── README.md\n  ├── build\n  │   ├── build.js\n  │   ├── check-versions.js\n  ├── config\n  │   ├── dev.env.js\n  │   ├── index.js\n  │   └── prod.env.js\n  ├── docs\n  │   ├── index.html\n  │   └── static\n  │       ├── css\n  │       └── js\n  ├── static\n  └── tree.md\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"chmod-x-sh-给执行权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod-x-sh-给执行权限","aria-hidden":"true"}},[this._v("#")]),this._v(" chmod +x  .sh 给执行权限")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"在pages粘贴不带格式的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在pages粘贴不带格式的内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 在pages粘贴不带格式的内容")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("Option+Shift+Command+V")])])}],!1,null,null,null);t.default=r.exports}}]);