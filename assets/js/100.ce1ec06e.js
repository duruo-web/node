(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{299:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[t._v("#")]),t._v(" linux")]),t._v(" "),s("h2",{attrs:{id:"linux-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" linux 简介")]),t._v(" "),s("h3",{attrs:{id:"查看linux-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看linux-版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看Linux 版本")]),t._v(" "),s("ul",[s("li",[t._v("cat /etc/redhat-release（Linux查看版本当前操作系统发行版信息）")]),t._v(" "),s("li",[t._v("uname -a (Linux查看版本当前操作系统内核信息)")]),t._v(" "),s("li",[t._v("cat /proc/version（Linux查看当前操作系统版本信息）")]),t._v(" "),s("li",[t._v("getconf LONG_BIT（32bit/64bit）")])]),t._v(" "),s("h3",{attrs:{id:"根目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根目录结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 根目录结构")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("bin 该目录为命令文件目录，也成为二进制目录。包含来供系统管理员及普通用户使用的重要的linux命令和二进制（可执行）文件，包括shell解释器等")])]),t._v(" "),s("li",[s("p",[t._v("boot 该目录中存放系统的内核文件和引导装载程序文件，/boot/vmlinuz为linux的内核文件，以及/boot/gurb。建议单独分区，分区大小100m即可。")])]),t._v(" "),s("li",[s("p",[t._v("dev 设备（device）文件目录，存放linux系统下的设备文件，访问该目录下的某个文件，相当于访问某个设备，存放连接到计算机上的设备（终端、磁盘驱动器、光驱及网卡等）的对应文件，包括字符设备和块设备等，常用的是挂载光驱mount /dev/cdrom/mnt")])]),t._v(" "),s("li",[s("p",[t._v("etc 系统配置文件存放的目录，该目录存放系统的大部分配置文件和字母了，不建议在此目录下存放可执行文件，重要的配置文件有/etc/inittab、/etc/fstab、/etc/init.d、/etc/X11(X Window系统有关)、/etc/sysconfig（与网络有关）、/etc/xinetd.d修改配置文件之前记得备份。该目录下的文件由系统管理员来使用，普通用户对大部分文件由只读权限")])]),t._v(" "),s("li",[s("p",[t._v("home：系统默认的用户宿主目录，新增用户账号时，用户的宿主目录都存放在此目录下，~表示当前用户的宿主目录，~test表示用户test的宿主目录。建议单独分区，并设置较大的磁盘空间，方便用户存放数据。")])]),t._v(" "),s("li",[s("p",[t._v("lib：系统使用的函数库的目录，程序在执行过程中，需要调用一些额外的参数时需要函数库的协助，该目录下存放了各种编程语言库。典型的linux系统包含了C、C++和FORTRAN语言的库文件。/lib目录下的库映像文件可以用来启动系统并执行一些命令，目录/lib/modules包含了可加载的内核模块，/lib目录存放了所有重要的库文件，其他的库文件则大部分存放在/usr/lib目录下。\nmnt、media：主要用来临时挂载文件系统，为某些设备提供默认挂载点，如floppy，cdrom。这样当挂载了一个设备如光驱时，就可以通过访问目录/mnt/cdrom下的文件来访问相应的光驱上的文件了。")])]),t._v(" "),s("li",[s("p",[t._v("opt：给主机额外安装软件所摆放的目录。如：FC4使用的Fedora 社群开发软件，如果想要自行安装新的KDE 桌面软件，可以将该软件安装在该目录下。以前的 Linux 系统中，习惯放置在 /usr/local 目录下。")])]),t._v(" "),s("li",[s("p",[t._v("proc：此目录的数据都在内存中，如系统核心，外部设备，网络状态，由于数据都存放于内存中，所以不占用磁盘空间，比较重要的目录有/proc/cpuinfo、/proc/interrupts、/proc/dma、/proc/ioports、/proc/net/*等。")])]),t._v(" "),s("li",[s("p",[t._v("root：系统管理员root的宿主目录，系统第一个启动的分区为/，所以最好将/root和/放置在一个分区下")])]),t._v(" "),s("li",[s("p",[t._v("run：目录是说, 里面的东西是系统运行时需要的, 不能随便删除. 但是重启的时候应该抛弃. 下次系统运行时重新生成.")])]),t._v(" "),s("li",[s("p",[t._v('sbin：放置系统管理员使用的可执行命令，如fdisk、shutdown、mount等。与/bin不同的是，这几个目录是给系统管理员root使用的命令，一般用户只能"查看"而不能设置和使用。')])]),t._v(" "),s("li",[s("p",[t._v("srv：服务启动之后需要访问的数据目录，如www服务需要访问的网页数据存放在/srv/www内。")])]),t._v(" "),s("li",[s("p",[t._v("sys：文件系统是一个类似于proc文件系统的特殊文件系统，用于将系统中的设备组织成层次结构，并向用户模式程序提供详细的内核数据结构信息。")])]),t._v(" "),s("li",[s("p",[t._v("tmp：一般用户或正在执行的程序临时存放文件的目录,任何人都可以访问,重要数据不可放置在此目录下。")])]),t._v(" "),s("li",[s("p",[t._v("usr：应用程序存放目录，/usr/bin 存放应用程序， /usr/share 存放共享数据，/usr/lib 存放不能直接运行的，却是许多程序运行所必需的一些函数库文件，/usr/local 存放软件升级包，/usr/share/doc 系统说明文件存放目录。")])]),t._v(" "),s("li",[s("p",[t._v("var：放置系统执行过程中经常变化的文件，如随时更改的日志文件 /var/log。/var/log/message： 所有的登录文件存放目录。/var/spool/mail： 邮件存放的目录。 /var/run: 程序或服务启动后。建议单独分区，设置较大的磁盘空间。")])])]),t._v(" "),s("h3",{attrs:{id:"基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),s("ul",[s("li",[t._v("cd 进入目录")]),t._v(" "),s("li",[t._v("ls 查看目录")]),t._v(" "),s("li",[t._v("mkdir 创建目录")]),t._v(" "),s("li",[t._v("rm 删除")]),t._v(" "),s("li",[t._v("cp 复制")]),t._v(" "),s("li",[t._v("mv 移动/重命名")]),t._v(" "),s("li",[t._v("history 查看历史命令")]),t._v(" "),s("li",[t._v("grep 查找")]),t._v(" "),s("li",[t._v("vi/vim 编辑模式/命令行模式")]),t._v(" "),s("li",[t._v("scp： 跨IP传文件")]),t._v(" "),s("li",[t._v("文件解压缩： gz、zip。。。")])]),t._v(" "),s("h3",{attrs:{id:"用户切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户切换","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户切换")]),t._v(" "),s("ul",[s("li",[t._v("root 用户切换到用户 su uname")])]),t._v(" "),s("h2",{attrs:{id:"linux命令大全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux命令大全","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux命令大全")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("关机\troot用户关机\tpoweroff\t立刻关机\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -h now\t立刻关机\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -h "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("分钟后关机\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -h "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":00\t定时关机，18:00关机\n重启\troot用户重启\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("\t立刻重启\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -r now\t立刻重启\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("分钟后重启\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":00\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":00重启\n\t其中poweroff和reboot任意用户都可用，其余只能root用户使用\t\t\n\t\t\t\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("\t进入\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /\t进入根目录\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" 目录名\t进入该目录\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /a/b/c\t绝对路径进入a目录下的b中的c\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./b/c\t相对路径，相对当前目录进入c\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\t返回上一层目录\n\t\t/\t当前目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\t查看\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" 目录名\t显示当前目录下的文件\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l\t显示文件的详细信息\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -a\t查看当前目录下所有内容包括隐藏文件\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al\t查看当前目录下的所有内容包括隐藏文件的详细信息\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lrt\t显示文件的详细信息并按时间排序\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v("\t创建目录\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" 目录名（文件夹）\t新建目录\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p a/b/c\t新建多级目录\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /root/a/b/c\t绝对路径新建目录c\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ./d/f\t相对路径新建目录f\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v("\t创建文件\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" 文件名\t新建文件\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("\t删除\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r 文件名或目录名\t删除文件或目录，删除时有提示信息\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f 文件名\t强制删除，只能删除文件，不能删除目录，删除时无任何提示信息\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf 文件名或目录名\t强制删除文件或目录，删除时无任何提示信息\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 文件名\t删除文件\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v("\t拷贝\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" 文件 /目的地\t将文件拷贝到目的地\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".txt "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\t将1.txt复制到test目录下\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".txt "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\t将1.txt复制到当前目录上一层目录\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".txt /bin/df/\t将1.txt复制到bin下的df目录下\n\n    \n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v("\t移动\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" 文件名或目录名 /目的地\t剪切：将文件或目录移动到目的地\n\t重命名\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" 文件名或目录名 新名字\t改名\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" 文件名或目录名 /目的地/新名字\t移动并改名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("\t查询历史命令\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("\t查询历史命令\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v("\t查找\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" word 文件名\t查找文件中包含“word”字符串的信息\n查看文件\t查看文件内容    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" 文件名\t查看文件内容，正常查看\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tac")]),t._v(" 文件名\t到序查看文件内容\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" 文件名\t查看大文件内容，显示百分比，按回车逐行显示，按空格分页显示\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" 文件名\t查看文件，不显示文件百分比\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" 文件名\t查看文件的前几行内容"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("一般默认10行"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" 文件名\t查看文件的末尾几行内容"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("一般默认10行"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v("\t创建文件\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" 文件名\t新建文件（退出时需要保存）\n\t一般模式下操作\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("或home键\t回到当前行最前面\n                    shift+4或end键\t到当前行最后面\n                    gg\t回到第一行开头\n                    G\t到最后一行开头\n                    ngg或nG\t去哪一行。n表示第几行\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dd")]),t._v("\t删除光标所在行\n                    ndd\t删除n行，包含光标所在行\n                    yy\t复制一行\n                    nyy\t复制n行\n                    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("小写"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t粘贴到光标下一行\n                    P（大写）\t粘贴到光标上一行\n                    u\t撤销\n                    Ctrl+r\t反撤销\n                    /**\t查找某某\n                    n\t向下查找\n                    N\t向上查找\n\t命令行模式\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" nu\t显示行号\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" nonu\t取消显示行号\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"：1,'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v("/word1/word2/g （1表示第一行，"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v('表示最后一行）"')]),t._v("\t\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "从第一行到最后一行查找word1，并用word2全部替换"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"：8s/word1/word2/g (word1表示要被替换的字符, word2表示替换的字符)"')]),t._v("\t\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从第8行找word1,并用word2全部替换")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"：3,8s/word1/word2/g（g表示全部替换）"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "从第3行到第8行找word1,并用word2全部替换"')]),t._v("\n                r\t替换光标处字符\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("修改权限\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v("\t\n                格式： "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("775")]),t._v(" -R 其中-R表示全部\t\n                方式一：在上一级目录，例：chmod +x -R ./bin\n\n\t\t        d为目录\t\n                方式二：在当前目录，例： "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" -R \n\t\t        \n                r可读--4  w可写--2  x可执行--1\t\n                方式三：修改单个文件权限，例： "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" xx文件\n创建用户     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v("\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" 用户名\t\n创建组      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v("\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" 组名\t\n编译\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\t        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\t\n修改属主    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v("\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" R root （修改全部）\t\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R mysql var（修改var为属主为mysql）\t\n修改属组\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v(" -R 组名\t\n修改mysql密码\tmysqladmin -uroot -p password 新密码，旧密码为空时不用输入，若不修改密码则密码默认为空\t\t\n\t\t\t\n\t\t\t\n\t\t\t\nlinux压缩和解压缩命令大全\t\t\t\n住：fliename为压缩包名\t.tar\t解包:tar -zxvf filename.tar\t\n\t\t压缩:tar.-czvf filename.tar\t\n\t.gz\t解压1:hunzip filename.gz\t\n\t\t解压2:gzip -d filename.gz\t\n\t\t压缩：gzip filename\t\n\t.tar.gz和.tgz\t解压：tar -zxvf filename.tar.gz\t\n\t\t压缩:tar -zcvf filename.tar.gz Dirname\t\n\t.bz2\t解压1:bzip2 -d filename.bz2\t\n\t\t解压2:bunzip2 filename.bz2\t\n\t\t压缩:bzip -z filename\t\n\t.tar.bz2\t解压:tar -jxvf filename.tar.bz2 \t\n\t\t压缩:tar -jcvf filename.tar.bz2 Dirname\t\n\t.bz\t解压1：bzip2 -d filename.ba\t\n\t\t解压2:bunzip2 filename.bz\t\n\t\t压缩:未知\t\n\t.tar.bz\t解压：tar -jxvf filename.tar.bz\t\n\t\t压缩：未知\t\n\t.Z\t解压:uncompress filename.Z\t\n\t\t压缩:compress filename\t\n\t.tar.Z\t解压：tar -Zxvf filename.tar.Z\t\n\t\t压缩：tar -Zcvf filename.tar.Z Dirname\t\n\t.zip\t解压:unzip filename.zip\t\n\t\t压缩:zip filename.zip Dirname\t\n\t.rar\t解压:rar a filename.rar\t\n\t\t压缩:rar e filename.rar\t\n\n")])])]),s("p",[s("code",[t._v("ps -aux | grep emailcase")]),t._v(" 查看进程\n"),s("code",[t._v("kill 5565")]),t._v(" 杀进程，进入目录 "),s("code",[t._v("rm -rf .log")])]),t._v(" "),s("h2",{attrs:{id:"setsid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setsid","aria-hidden":"true"}},[t._v("#")]),t._v(" setsid")]),t._v(" "),s("blockquote",[s("p",[t._v("https://blog.csdn.net/sweetfather/article/details/79457261")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当进程是会话当领头进程时 setsid() 调用失败并返回（-1）；\nsetsid() 调用成功后，返回新的会话的ID，调用setid函数的进程成为新的会话的领头进程，并与其父进程的会话组和进程组脱离。")])]),t._v(" "),s("li",[s("p",[t._v("由于会话对控制终端的独占性，进程同事与控制终端脱离")])])]),t._v(" "),s("h2",{attrs:{id:"linux进程后台运行方法-nohup、setsid、-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux进程后台运行方法-nohup、setsid、-介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" linux进程后台运行方法 nohup、setsid、&介绍")]),t._v(" "),s("blockquote",[s("p",[t._v("https://www.jianshu.com/p/8958a20ce23d\n我们经常会碰到这样的问题，用 telnet/ssh 登录了远程的 Linux 服务器，运行了一些耗时较长的任务， 结果却由于网络的不稳定导致任务中途失败。如何让命令提交后不受本地关闭终端窗口/网络断开连接的干扰呢？下面举了一些例子， 您可以针对不同的场景选择不同的方式来处理这个问题。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("nohup/setsid/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("p",[t._v("场景：")]),t._v(" "),s("p",[t._v("如果只是临时有一个命令需要长时间运行，什么方法能最简便的保证它在后台稳定运行呢？")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("p",[t._v("我们知道，当用户注销（logout）或者网络断开时，终端会收到 HUP（hangup）信号从而关闭其所有子进程。因此，我们的解决办法就有两种途径：要么让进程忽略 HUP 信号，要么让进程运行在新的会话里从而成为不属于此终端的子进程。")]),t._v(" "),s("ol",[s("li",[t._v("nohup")])]),t._v(" "),s("p",[t._v("nohup 无疑是我们首先想到的办法。顾名思义，nohup 的用途就是让提交的命令忽略 hangup 信号。让我们先来看一下 nohup 的帮助信息：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("NOHUP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" User Commands NOHUP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nNAME\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" - run a "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" immune to hangups, with output to a non-tty\n\nSYNOPSIS\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" COMMAND "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" OPTION\n\nDESCRIPTION\nRun COMMAND, ignoring hangup signals.\n\n--help display this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n--version\noutput version information and exit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v('可见，nohup 的使用是十分方便的，只需在要处理的命令前加上 nohup 即可，标准输出和标准错误缺省会被重定向到 nohup.out 文件中。一般我们可在结尾加上"&"来将命令同时放入后台运行，也可用">filename 2>&1"来更改缺省的重定向文件名。')]),t._v(" "),s("p",[t._v("nohup 示例")]),t._v(" "),s("p",[t._v("[root@pvcent107 ~]# nohup ping www.ibm.com &\n[1] 3059\nnohup: appending output to `nohup.out'\n[root@pvcent107 ~]# ps -ef |grep 3059\nroot 3059 984 0 21:06 pts/3 00:00:00 ping www.ibm.com\nroot 3067 984 0 21:06 pts/3 00:00:00 grep 3059\n[root@pvcent107 ~]#\n2. setsid")]),t._v(" "),s("p",[t._v("nohup 无疑能通过忽略 HUP 信号来使我们的进程避免中途被中断，但如果我们换个角度思考，如果我们的进程不属于接受 HUP 信号的终端的子进程，那么自然也就不会受到 HUP 信号的影响了。setsid 就能帮助我们做到这一点。让我们先来看一下 setsid 的帮助信息：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("SETSID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Linux Programmer’s Manual SETSID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nNAME\nsetsid - run a program "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a new session\n\nSYNOPSIS\nsetsid program "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" arg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nDESCRIPTION\nsetsid runs a program "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a new session.\n")])])]),s("p",[t._v("可见 setsid 的使用也是非常方便的，也只需在要处理的命令前加上 setsid 即可。")]),t._v(" "),s("p",[t._v("setsid 示例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# setsid ping www.ibm.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ps -ef |grep www.ibm.com")]),t._v("\nroot "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31094")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 07:28 ? 00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" www.ibm.com\nroot "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31102")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29217")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 07:29 pts/4 00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" www.ibm.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),s("p",[t._v("值得注意的是，上例中我们的进程 ID(PID)为31094，而它的父 ID（PPID）为1（即为 init 进程 ID），并不是当前终端的进程 ID。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("&")])]),t._v(" "),s("p",[t._v("这里还有一个关于 subshell 的小技巧。我们知道，将一个或多个命令包含在“()”中就能让这些命令在子 shell 中运行中，从而扩展出很多有趣的功能，我们现在要讨论的就是其中之一。")]),t._v(" "),s("p",[t._v('当我们将"&"也放入“()”内之后，我们就会发现所提交的作业并不在作业列表中，也就是说，是无法通过jobs来查看的。让我们来看看为什么这样就能躲过 HUP 信号的影响吧。')]),t._v(" "),s("p",[t._v("subshell 示例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (ping www.ibm.com &)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ps -ef |grep www.ibm.com")]),t._v("\nroot "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16270")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":13 pts/4 00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" www.ibm.com\nroot "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16278")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15362")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":13 pts/4 00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" www.ibm.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pvcent107 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),s("p",[t._v("从上例中可以看出，新提交的进程的父ID（PPID）为1（init 进程的 PID），并不是当前终端的进程 ID。因此并不属于当前终端的子进程，从而也就不会受到当前终端的 HUP 信号的影响了。")])])}],!1,null,null,null);n.default=e.exports}}]);