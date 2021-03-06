## 安装淘宝源地址
```bash
npm config set registry=https://registry.npm.taobao.org
```
## 使用npm config命令设置npm官网源地址：
```bash
npm config set registry=http://registry.npmjs.org
```
## 安装node
```bash
# 1
 sudo yum -y install wget
#------出错解决
# yum 安装出错--"Couldn't resolve host 'mirrors.aliyun.com'"

# 修改dns
vi /etc/sysconfig/network-scripts/ifcfg-eth0

DNS1=8.8.8.8
DNS2=8.8.4.4

# 重启network 服务
service network restart
# 安装成功
#-----------出错解决end
# 2. 下载nodejs二进制包
sudo wget https://nodejs.org/dist/v10.14.2/node-v10.14.2-linux-x64.tar.xz
# 3. 解压
sudo tar -xvJf node-v10.14.2-linux-x64.tar.xz

# 4. 移动
sudo mv node-v10.14.2-linux-x64 /usr/local/nodejs

# 5. 刷新权限
source /etc/profile

# 6. 测试是否安装成功
node  -v
# 或者
npm -v
```

## 安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装指定版本的gulp
```bash
npm install --save-dev gulp@3.9.1

```

## node版本管理 nvm 和 n 的区别

都是node的版本管理工具。

n是一个npm包，nvm是一个独立的软件
n支持windows，nvm不支持windows，可以使用nvmw或者nvm-windows
n切换node版本时，node全局模块不受影响；nvm切换node版本时，所有的全局模块需要重新安装，并且需要手动指定node的路径

> http://taobaofed.org/blog/2015/11/17/nvm-or-n/

## n 安装

```bash
npm install -g n # 安装n
sudo n 10.13.0 # 切换版本

```
* 如果node升级有问题，可以使用tnvm 此为淘宝node管理器

```bash
# 1. 先安装tvm
wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash
# 等待完成后，输入
export METHOD=script
# 添加环境变量，在输入
source .bashrc
# 2. 安装Nodejs
# 先查看服务器上有哪些版本的nodejs可以安装，输入

tnvm ls-remote node
# 然后选择一个版本进行安装
tnvm install node-v7.0.0
# 等待安装完成。通过命令
tnvm use node-v7.0.0
# 将node切换为7.0.0的版本，输入
node -v
```
## 当清node_modules 出现某一些包错误时候，查不到原因时候，可以适当的清除缓存试试。删掉重新安装

```bash
rm -rf node_modules
npm cache clean
npm install
```
## n安装node新增版本10.15.0
```bash
sudo n 10.15.0
```
## n切换node版本
* 使用`n`,有本地安装的node版本列表，上下箭头选中，之后按`enter`

## npm install 报错时 先降级node，再升级node版本就行

1.降级node版本
```bash
sudo n 6.3
```
2.降级node后npm正常可用了，先升级npm版本
```bash
sudo npm install npm -g

```
3.再次升级node版本
```bash
sudo n 10.13.0
```
4.至此npm恢复正常

## npm link && npm unlink 取消
在需要全局link的情况下，在需要全局的模块执行npm link
```bash
npm link
```
将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试

## npx
npm 从5.2版开始，增加了 npx 命令。

Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。

```bash
$ npm install -g npx
```
### 调用项目安装的模块
npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。

```bash
$ npm install -D mocha
```
一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。

```bash
# 项目的根目录下执行
$ node-modules/.bin/mocha --version
```
npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。

```bash
$ npx mocha --version
```
npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。

```bash
# 等同于 ls
$ npx ls
```
注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。

### 避免全局安装模块
除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

```bash
$ npx create-react-app my-react-app
```
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。

下载全局模块时，npx 允许指定版本。

```bash
$ npx uglify-js@3.1.0 main.js -o ./dist/main.js
```
上面代码指定使用 3.1.0 版本的uglify-js压缩脚本。

注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。

```bash
$ npx http-server
```
--no-install 参数和--ignore-existing 参数
如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install参数。如果本地不存在该模块，就会报错。

```bash
$ npx --no-install http-server
```
反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。

```bash
$ npx --ignore-existing create-react-app my-react-app
```
使用不同版本的 node
利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。

```bash
$ npx node@0.12.8 -v
v0.12.8
```
上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。

某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。

-p 参数
-p参数用于指定 npx 所要安装的模块，所以上一节的命令可以写成下面这样。

```bash
$ npx -p node@0.12.8 node -v 
v0.12.8
```
上面命令先指定安装node@0.12.8，然后再执行node -v命令。

-p参数对于需要安装多个模块的场景很有用。

```bash
$ npx -p lolcatjs -p cowsay [command]
```
-c 参数
如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。

```bash
$ npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'
```
# 报错
上面代码中，cowsay hello | lolcatjs执行时会报错，原因是第一项cowsay由 npx 解释，而第二项命令localcatjs由 Shell 解释，但是lolcatjs并没有全局安装，所以报错。

-c参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。

```bash
$ npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
```
-c参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。

```bash
$ npm run env | grep npm_
```
-c参数可以把这些 npm 的环境变量带入 npx 命令。

```bash
$ npx -c 'echo "$npm_package_name"'
```
上面代码会输出当前项目的项目名。

执行 GitHub 源码
npx 还可以执行 GitHub 上面的模块源码。

```bash
# 执行 Gist 代码
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
# 执行仓库代码
$ npx github:piuccio/cowsay hello
```
注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。
> http://www.ruanyifeng.com/blog/2019/02/npx.html