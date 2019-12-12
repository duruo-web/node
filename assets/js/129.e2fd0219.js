(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{282:function(a,s,n){"use strict";n.r(s);var t=n(0),e=Object(t.a)({},function(){var a=this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"安装淘宝源地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装淘宝源地址","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装淘宝源地址")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("registry")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n")])])]),n("h2",{attrs:{id:"使用npm-config命令设置npm官网源地址："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用npm-config命令设置npm官网源地址：","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用npm config命令设置npm官网源地址：")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("registry")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://registry.npmjs.org\n")])])]),n("h2",{attrs:{id:"安装node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装node","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装node")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1")]),a._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#------出错解决")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum 安装出错--\"Couldn't resolve host 'mirrors.aliyun.com'\"")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改dns")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DNS1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DNS2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".4.4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启network 服务")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" network restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装成功")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-----------出错解决end")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 下载nodejs二进制包")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://nodejs.org/dist/v10.14.2/node-v10.14.2-linux-x64.tar.xz\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. 解压")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvJf node-v10.14.2-linux-x64.tar.xz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4. 移动")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" node-v10.14.2-linux-x64 /usr/local/nodejs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 5. 刷新权限")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 6. 测试是否安装成功")]),a._v("\nnode  -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" -v\n")])])]),n("h2",{attrs:{id:"安装cnpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装cnpm","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装cnpm")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g cnpm --registry"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n")])])]),n("h2",{attrs:{id:"安装指定版本的gulp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本的gulp","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装指定版本的gulp")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev gulp@3.9.1\n\n")])])]),n("h2",{attrs:{id:"node版本管理-nvm-和-n-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node版本管理-nvm-和-n-的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" node版本管理 nvm 和 n 的区别")]),a._v(" "),n("p",[a._v("都是node的版本管理工具。")]),a._v(" "),n("p",[a._v("n是一个npm包，nvm是一个独立的软件\nn支持windows，nvm不支持windows，可以使用nvmw或者nvm-windows\nn切换node版本时，node全局模块不受影响；nvm切换node版本时，所有的全局模块需要重新安装，并且需要手动指定node的路径")]),a._v(" "),n("blockquote",[n("p",[a._v("http://taobaofed.org/blog/2015/11/17/nvm-or-n/")])]),a._v(" "),n("h2",{attrs:{id:"n-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" n 安装")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g n "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装n")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" n "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.13")]),a._v(".0 "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换版本")]),a._v("\n\n")])])]),n("ul",[n("li",[a._v("如果node升级有问题，可以使用tnvm 此为淘宝node管理器")])]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 先安装tvm")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等待完成后，输入")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("METHOD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("script\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加环境变量，在输入")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" .bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 安装Nodejs")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先查看服务器上有哪些版本的nodejs可以安装，输入")]),a._v("\n\ntnvm ls-remote node\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 然后选择一个版本进行安装")]),a._v("\ntnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" node-v7.0.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等待安装完成。通过命令")]),a._v("\ntnvm use node-v7.0.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将node切换为7.0.0的版本，输入")]),a._v("\nnode -v\n")])])]),n("h2",{attrs:{id:"当清node-modules-出现某一些包错误时候，查不到原因时候，可以适当的清除缓存试试。删掉重新安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#当清node-modules-出现某一些包错误时候，查不到原因时候，可以适当的清除缓存试试。删掉重新安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 当清node_modules 出现某一些包错误时候，查不到原因时候，可以适当的清除缓存试试。删掉重新安装")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf node_modules\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" cache clean\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),n("h2",{attrs:{id:"npm-install-报错时-先降级node，再升级node版本就行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-报错时-先降级node，再升级node版本就行","aria-hidden":"true"}},[a._v("#")]),a._v(" npm install 报错时 先降级node，再升级node版本就行")]),a._v(" "),n("p",[a._v("1.降级node版本")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" n "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.3")]),a._v("\n")])])]),n("p",[a._v("2.降级node后npm正常可用了，先升级npm版本")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" -g\n\n")])])]),n("p",[a._v("3.再次升级node版本")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" n "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.13")]),a._v(".0\n")])])]),n("p",[a._v("4.至此npm恢复正常")]),a._v(" "),n("h2",{attrs:{id:"npm-link-npm-unlink-取消"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-link-npm-unlink-取消","aria-hidden":"true"}},[a._v("#")]),a._v(" npm link && npm unlink 取消")]),a._v(" "),n("p",[a._v("在需要全局link的情况下，在需要全局的模块执行npm link")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v("\n")])])]),n("p",[a._v("将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试")]),a._v(" "),n("h2",{attrs:{id:"npx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npx","aria-hidden":"true"}},[a._v("#")]),a._v(" npx")]),a._v(" "),n("p",[a._v("npm 从5.2版开始，增加了 npx 命令。")]),a._v(" "),n("p",[a._v("Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g npx\n")])])]),n("h3",{attrs:{id:"调用项目安装的模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用项目安装的模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 调用项目安装的模块")]),a._v(" "),n("p",[a._v("npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -D mocha\n")])])]),n("p",[a._v("一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 项目的根目录下执行")]),a._v("\n$ node-modules/.bin/mocha --version\n")])])]),n("p",[a._v("npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx mocha --version\n")])])]),n("p",[a._v("npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。")]),a._v(" "),n("p",[a._v("由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等同于 ls")]),a._v("\n$ npx "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),n("p",[a._v("注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。")]),a._v(" "),n("h3",{attrs:{id:"避免全局安装模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免全局安装模块")]),a._v(" "),n("p",[a._v("除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx create-react-app my-react-app\n")])])]),n("p",[a._v("上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。")]),a._v(" "),n("p",[a._v("下载全局模块时，npx 允许指定版本。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx uglify-js@3.1.0 main.js -o ./dist/main.js\n")])])]),n("p",[a._v("上面代码指定使用 3.1.0 版本的uglify-js压缩脚本。")]),a._v(" "),n("p",[a._v("注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx http-server\n")])])]),n("p",[a._v("--no-install 参数和--ignore-existing 参数\n如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install参数。如果本地不存在该模块，就会报错。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx --no-install http-server\n")])])]),n("p",[a._v("反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx --ignore-existing create-react-app my-react-app\n")])])]),n("p",[a._v("使用不同版本的 node\n利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx node@0.12.8 -v\nv0.12.8\n")])])]),n("p",[a._v("上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。")]),a._v(" "),n("p",[a._v("某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。")]),a._v(" "),n("p",[a._v("-p 参数\n-p参数用于指定 npx 所要安装的模块，所以上一节的命令可以写成下面这样。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx -p node@0.12.8 node -v \nv0.12.8\n")])])]),n("p",[a._v("上面命令先指定安装node@0.12.8，然后再执行node -v命令。")]),a._v(" "),n("p",[a._v("-p参数对于需要安装多个模块的场景很有用。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx -p lolcatjs -p cowsay "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),n("p",[a._v("-c 参数\n如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx -p lolcatjs -p cowsay "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cowsay hello | lolcatjs'")]),a._v("\n")])])]),n("h1",{attrs:{id:"报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错","aria-hidden":"true"}},[a._v("#")]),a._v(" 报错")]),a._v(" "),n("p",[a._v("上面代码中，cowsay hello | lolcatjs执行时会报错，原因是第一项cowsay由 npx 解释，而第二项命令localcatjs由 Shell 解释，但是lolcatjs并没有全局安装，所以报错。")]),a._v(" "),n("p",[a._v("-c参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx -p lolcatjs -p cowsay -c "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cowsay hello | lolcatjs'")]),a._v("\n")])])]),n("p",[a._v("-c参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" npm_\n")])])]),n("p",[a._v("-c参数可以把这些 npm 的环境变量带入 npx 命令。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ npx -c "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'echo \""),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$npm_package_name")]),a._v("\"'")]),a._v("\n")])])]),n("p",[a._v("上面代码会输出当前项目的项目名。")]),a._v(" "),n("p",[a._v("执行 GitHub 源码\nnpx 还可以执行 GitHub 上面的模块源码。")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 Gist 代码")]),a._v("\n$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行仓库代码")]),a._v("\n$ npx github:piuccio/cowsay hello\n")])])]),n("p",[a._v("注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。")]),a._v(" "),n("blockquote",[n("p",[a._v("http://www.ruanyifeng.com/blog/2019/02/npx.html")])])])}],!1,null,null,null);s.default=e.exports}}]);