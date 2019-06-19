(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{245:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"什么是-ssh-以及常见-ssh-用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssh-以及常见-ssh-用法","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 SSH 以及常见 ssh 用法")]),s._v(" "),t("blockquote",[t("p",[s._v("http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html")])]),s._v(" "),t("h2",{attrs:{id:"什么是-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 SSH ?")]),s._v(" "),t("p",[s._v("简单说，SSH 是一种网络协议，用于计算机之间的加密登录。")]),s._v(" "),t("p",[s._v("如果一个用户从本地计算机，使用 SSH 协议登录到另一台远程计算机，我们就可以认为，这种登录是安全的，即使被中途截获，密码也不会泄露。")]),s._v(" "),t("p",[s._v("最早的时候，互联网通信都是明文通信，一旦被截获，内容就暴露无疑。1995年，芬兰学者Tatu Ylonen设计了SSH协议，将登录信息全部加密，成为互联网安全的一个基本解决方案，迅速在全世界获得推广，目前已经成为Linux系统的标准配置。")]),s._v(" "),t("p",[s._v("SSH只是一种协议，存在多种实现，既有商业实现，也有开源实现。本文针对的实现是OpenSSH，它是自由软件，应用非常广泛。")]),s._v(" "),t("h2",{attrs:{id:"最基本的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最基本的用法","aria-hidden":"true"}},[s._v("#")]),s._v(" 最基本的用法")]),s._v(" "),t("p",[s._v("SSH 远程登录。假如你要以用户名 user， 登录远程主机host , 只要一条简单命令就可以了。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@host\n")])])]),t("p",[s._v("如果本地用户名与远程用户名一致，登录时可以省略用户名。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n")])])]),t("p",[s._v("SSH的默认端口是22，也就是说，你的登录请求会送进远程主机的22端口。使用p参数，可以修改这个端口。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p 2222 user@host //这条命令表示，ssh直接连接远程主机的2222端口。\n")])])]),t("h2",{attrs:{id:"中间人攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击","aria-hidden":"true"}},[s._v("#")]),s._v(" 中间人攻击")]),s._v(" "),t("p",[s._v("SSH之所以能够保证安全，原因在于它采用了公钥加密。")]),s._v(" "),t("p",[s._v("整个过程是这样的：（1）远程主机收到用户的登录请求，把自己的公钥发给用户。（2）用户使用这个公钥，将登录密码加密后，发送回来。（3）远程主机用自己的私钥，解密登录密码，如果密码正确，就同意用户登录。")]),s._v(" "),t("p",[s._v("这个过程本身是安全的，但是实施的时候存在一个风险：如果有人截获了登录请求，然后冒充远程主机，将伪造的公钥发给用户，那么用户很难辨别真伪。因为不像https协议，SSH协议的公钥是没有证书中心（CA）公证的，也就是说，都是自己签发的。")]),s._v(" "),t("p",[s._v('可以设想，如果攻击者插在用户与远程主机之间（比如在公共的wifi区域），用伪造的公钥，获取用户的登录密码。再用这个密码登录远程主机，那么SSH的安全机制就荡然无存了。这种风险就是著名的"中间人攻击"（Man-in-the-middle attack）。')]),s._v(" "),t("p",[s._v("SSH协议是如何应对的呢？")]),s._v(" "),t("h2",{attrs:{id:"口令登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#口令登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 口令登录")]),s._v(" "),t("p",[s._v("如果你是第一次登录对方主机，系统会出现下面的提示：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("　　$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@host\n\n　　The authenticity of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host (12.18.429.21)'")]),s._v(" can't be established.\n\n　　RSA key fingerprint is 98:2e:d7:e0:de:9f:ac:67:28:c2:42:2d:37:16:58:4d.\n\n　　Are you sure you want to "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v(" connecting "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?\n")])])]),t("p",[s._v("这段话的意思是，无法确认host主机的真实性，只知道它的公钥指纹，问你还想继续连接吗？")]),s._v(" "),t("p",[s._v('所谓"公钥指纹"，是指公钥长度较长（这里采用RSA算法，长达1024位），很难比对，所以对其进行MD5计算，将它变成一个128位的指纹。上例中是98:2e:d7:e0🇩🇪9f:ac:67:28:c2:42:2d:37:16:58:4d，再进行比较，就容易多了。')]),s._v(" "),t("p",[s._v("很自然的一个问题就是，用户怎么知道远程主机的公钥指纹应该是多少？回答是没有好办法，远程主机必须在自己的网站上贴出公钥指纹，以便用户自行核对。")]),s._v(" "),t("p",[s._v("假定经过风险衡量以后，用户决定接受这个远程主机的公钥。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("　　Are you sure you want to "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v(" connecting "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),t("p",[s._v("系统会出现一句提示，表示host主机已经得到认可。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("　　Warning: Permanently added "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host,12.18.429.21'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RSA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to the list of known hosts.\n")])])]),t("p",[s._v("然后，会要求输入密码。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("　　Password: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("enter password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("如果密码正确，就可以登录了。")]),s._v(" "),t("p",[s._v("当远程主机的公钥被接受以后，它就会被保存在文件$HOME/.ssh/known_hosts之中。下次再连接这台主机，系统就会认出它的公钥已经保存在本地了，从而跳过警告部分，直接提示输入密码。")]),s._v(" "),t("p",[s._v("每个SSH用户都有自己的known_hosts文件，此外系统也有一个这样的文件，通常是/etc/ssh/ssh_known_hosts，保存一些对所有用户都可信赖的远程主机的公钥。")]),s._v(" "),t("h2",{attrs:{id:"ssh客户端包含ssh连接命令和远程拷贝scp命令等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh客户端包含ssh连接命令和远程拷贝scp命令等","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH客户端包含ssh连接命令和远程拷贝scp命令等")])])}],!1,null,null,null);a.default=n.exports}}]);