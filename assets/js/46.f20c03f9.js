(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{205:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("HTTP协议通常承载于TCP协议之上，有时也承载于TLS或SSL协议层之上，这个时候，就成了我们常说的HTTPS。 默认HTTP的端口号为80，HTTPS的端口号为443。 HTTP协议永远都是客户端发起请求，服务器回送响应。 这样就限制了使用HTTP协议，无法实现在客户端没有发起请求的时候，服务器将消息推送给客户端。 HTTP协议是一个无状态的协议，同一个客户端的这次请求和上次请求是没有对应关系。")]),t._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("p",[t._v("一次HTTP操作称为一个事务，其工作过程可分为四步：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。")])]),t._v(" "),a("li",[a("p",[t._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。")])]),t._v(" "),a("li",[a("p",[t._v("服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。")])]),t._v(" "),a("li",[a("p",[t._v("客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")])])]),t._v(" "),a("p",[t._v("如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。")]),t._v(" "),a("h3",{attrs:{id:"host头域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host头域","aria-hidden":"true"}},[t._v("#")]),t._v(" host头域")]),t._v(" "),a("p",[t._v("Host头域指定请求资源的Intenet主机和端口号，必须表示请求url的原始服务器或网关的位置。HTTP/1.1请求必须包含主机头域，否则系统会以400状态码返回。")]),t._v(" "),a("h3",{attrs:{id:"referer头域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referer头域","aria-hidden":"true"}},[t._v("#")]),t._v(" Referer头域")]),t._v(" "),a("p",[t._v("Referer头域允许客户端指定请求uri的源资源地址，这可以允许服务器生成回退链表，可用来登陆、优化cache等。他也允许废除的或错误的连接由于维护的目的被追踪。如果请求的uri没有自己的uri地址，Referer不能被发送。如果指定的是部分uri地址，则此地址应该是一个相对地址。")]),t._v(" "),a("h3",{attrs:{id:"user-agent头域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-agent头域","aria-hidden":"true"}},[t._v("#")]),t._v(" User-Agent头域")]),t._v(" "),a("p",[t._v("User-Agent头域的内容包含发出请求的用户信息。")]),t._v(" "),a("h3",{attrs:{id:"cache-control头域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control头域","aria-hidden":"true"}},[t._v("#")]),t._v(" Cache-Control头域")]),t._v(" "),a("p",[t._v("Cache-Control指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置Cache-Control并不会修改另一个消息处理过程中的缓存处理过程。")]),t._v(" "),a("p",[t._v("请求时的缓存指令包括no-cache、no-store、max-age、max-stale、min-fresh、only-if-cached， 响应消息中的指令包括public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age。")]),t._v(" "),a("h3",{attrs:{id:"date头域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date头域","aria-hidden":"true"}},[t._v("#")]),t._v(" Date头域")]),t._v(" "),a("p",[t._v("Date头域表示消息发送的时间，时间的描述格式由rfc822定义。")]),t._v(" "),a("h2",{attrs:{id:"http-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 1.0")]),t._v(" "),a("p",[t._v("HTTP 1.0规定浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，服务器完成请求处理后立即断开TCP连接，服务器不跟踪每个客户也不记录过去的请求。 显然，访问一个包含有许多图像的网页文件的整个过程包含了多次请求和响应，每次请求和响应都需要建立一个单独的连接，每次连接只是传输一个文档和图像，上一次和下一次请求完全分离。 即使图像文件都很小，但是客户端和服务器端每次建立和关闭连接却是一个相对比较费时的过程，并且会严重影响客户机和服务器的性能。")]),t._v(" "),a("h2",{attrs:{id:"http-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 1.1")]),t._v(" "),a("p",[t._v("为了克服HTTP 1.0的这个缺陷，HTTP 1.1支持持久连接，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟。一个包含有许多图像的网页文件的多个请求和应答可以在一个连接中传输，但每个单独的网页文件的请求和应答仍然需要使用各自的连接。 HTTP 1.1还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间。")]),t._v(" "),a("h2",{attrs:{id:"其他异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他异同","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他异同")]),t._v(" "),a("h3",{attrs:{id:"host请求头字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host请求头字段","aria-hidden":"true"}},[t._v("#")]),t._v(" Host请求头字段")]),t._v(" "),a("p",[t._v("由于HTTP 1.0不支持Host请求头字段，WEB浏览器无法使用主机头名来明确表示要访问服务器上的哪个WEB站点，这样就无法使用WEB服务器在同一个IP地址和端口号上配置多个虚拟WEB站点。 在HTTP 1.1中增加Host请求头字段后，WEB浏览器可以使用主机头名来明确表示要访问服务器上的哪个WEB站点，这才实现了在一台WEB服务器上可以在同一个IP地址和端口号上使用不同的主机名来创建多个虚拟WEB站点。")]),t._v(" "),a("h3",{attrs:{id:"connection请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection请求头")]),t._v(" "),a("p",[t._v("Connection请求头的值为Keep-Alive时，客户端通知服务器返回本次请求结果后保持连接； Connection请求头的值为close时，客户端通知服务器返回本次请求结果后关闭连接")]),t._v(" "),a("h3",{attrs:{id:"accept-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-language","aria-hidden":"true"}},[t._v("#")]),t._v(" Accept-Language")]),t._v(" "),a("p",[t._v("WEB服务器只要检查Accept-Language请求头中的信息，按照其中设置的国家语言的先后顺序，就知道应该返回哪种国家语言的网页文档给浏览器。 如果WEB服务器不能返回位于Accept-Language设置值前面的国家语言的网页文档时，WEB服务器将返回后面的国家语言的网页文档。 关于各个国家语言的名称信息，例如，中国是zh-cn，可以参阅RFC 1766，")]),t._v(" "),a("h3",{attrs:{id:"状态响应码100"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态响应码100","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态响应码100")]),t._v(" "),a("p",[t._v("允许客户端在发request消息body之前先用request header试探一下server，看server要不要接收request body，再决定要不要发request body。 客户端在Request头部中包含 "),a("code",[t._v("Expect: 100-continue")]),t._v(" Server看到之后呢如果回100 (Continue) 这个状态代码，客户端就继续发request body。这个是HTTP1.1才有的。 另外在HTTP/1.1中还增加了101、203、205等等性状态响应码")]),t._v(" "),a("h3",{attrs:{id:"请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),a("p",[t._v("HTTP1.1增加了OPTIONS, PUT, DELETE, TRACE, CONNECT这些Request方法.")]),t._v(" "),a("h2",{attrs:{id:"http的状态响应码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http的状态响应码","aria-hidden":"true"}},[t._v("#")]),t._v(" http的状态响应码")]),t._v(" "),a("h3",{attrs:{id:"_1-：请求收到，继续处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-：请求收到，继续处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 1**：请求收到，继续处理")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("100——客户必须继续发出请求\n\n101——客户要求服务器根据请求转换HTTP协议版本\n\n")])])]),a("h3",{attrs:{id:"_2-：操作成功收到，分析、接受"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-：操作成功收到，分析、接受","aria-hidden":"true"}},[t._v("#")]),t._v(" 2**：操作成功收到，分析、接受")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n200——交易成功\n\n201——提示知道新文件的URL\n\n202——接受和处理、但处理未完成\n\n203——返回信息不确定或不完整\n\n204——请求收到，但返回信息为空\n\n205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件\n\n206——服务器已经完成了部分用户的GET请求\n\n")])])]),a("h3",{attrs:{id:"_3-：完成此请求必须进一步处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-：完成此请求必须进一步处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 3**：完成此请求必须进一步处理")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n300——请求的资源可在多处得到\n\n301——删除请求数据\n\n302——在其他地址发现了请求数据\n\n303——建议客户访问其他URL或访问方式\n\n304——客户端已经执行了GET，但文件未变化  nginx设置一定的缓存时间，如果在缓存时间内去请求资源，直接返回304\n\n305——请求的资源必须从服务器指定的地址得到\n\n306——前一版本HTTP中使用的代码，现行版本中不再使用\n\n307——申明请求的资源临时性删除\n\n")])])]),a("h3",{attrs:{id:"_4-：请求包含一个错误语法或不能完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-：请求包含一个错误语法或不能完成","aria-hidden":"true"}},[t._v("#")]),t._v(" 4**：请求包含一个错误语法或不能完成")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n400——错误请求，如语法错误\n\n401——未授权\n\n    HTTP 401.1 - 未授权：登录失败\n\n    HTTP 401.2 - 未授权：服务器配置问题导致登录失败\n\n    HTTP 401.3 - ACL 禁止访问资源\n\n    HTTP 401.4 - 未授权：授权被筛选器拒绝\n\n    HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败\n\n402——保留有效ChargeTo头响应\n\n403——禁止访问\n\n    HTTP 403.1 禁止访问：禁止可执行访问\n\n    HTTP 403.2 - 禁止访问：禁止读访问\n\n    HTTP 403.3 - 禁止访问：禁止写访问\n\n    HTTP 403.4 - 禁止访问：要求 SSL\n\n    HTTP 403.5 - 禁止访问：要求 SSL 128\n\n    HTTP 403.6 - 禁止访问：IP 地址被拒绝\n\n    HTTP 403.7 - 禁止访问：要求客户证书\n\n    HTTP 403.8 - 禁止访问：禁止站点访问\n\n    HTTP 403.9 - 禁止访问：连接的用户过多\n\n    HTTP 403.10 - 禁止访问：配置无效\n\n    HTTP 403.11 - 禁止访问：密码更改\n\n    HTTP 403.12 - 禁止访问：映射器拒绝访问\n\n    HTTP 403.13 - 禁止访问：客户证书已被吊销\n\n    HTTP 403.15 - 禁止访问：客户访问许可过多\n\n    HTTP 403.16 - 禁止访问：客户证书不可信或者无效\n\n    HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效\n\n404——没有发现文件、查询或URl\n\n405——用户在Request-Line字段定义的方法不允许  请求的方法，服务端表示不支持\n\n406——根据用户发送的Accept拖，请求资源不可访问\n\n407——类似401，用户必须首先在代理服务器上得到授权\n\n408——客户端没有在用户指定的饿时间内完成请求\n\n409——对当前资源状态，请求不能完成\n\n410——服务器上不再有此资源且无进一步的参考地址\n\n411——服务器拒绝用户定义的Content-Length属性请求\n\n412——一个或多个请求头字段在当前请求中错误\n\n413——请求的资源大于服务器允许的大小\n\n414——请求的资源URL长于服务器允许的长度\n\n415——请求资源不支持请求项目格式\n\n416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段\n\n417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。\n\n")])])]),a("h3",{attrs:{id:"_5-：服务器执行一个完全有效请求失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-：服务器执行一个完全有效请求失败","aria-hidden":"true"}},[t._v("#")]),t._v(" 5**：服务器执行一个完全有效请求失败")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nHTTP 500 - 内部服务器错误\n\nHTTP 500.100 - 内部服务器错误 - ASP 错误\n\nHTTP 500-11 服务器关闭\n\nHTTP 500-12 应用程序重新启动\n\nHTTP 500-13 - 服务器太忙\n\nHTTP 500-14 - 应用程序无效\n\nHTTP 500-15 - 不允许请求 global.asa\n\nError 501 - 未实现\n\nHTTP 502 - 网关错误\n\nHTTP 504 - 请求超时\n")])])]),a("h2",{attrs:{id:"常用的请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的请求方式")]),t._v(" "),a("p",[t._v("常用的请求方式是GET和POST.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("GET方式:是以实体的方式得到由请求URI所指定资源的信息，如果请求URI只是一个数据产生过程，那么最终要在响应实体中返回的是处理过程的结果所指向的资源，而不是处理过程的描述。")])]),t._v(" "),a("li",[a("p",[t._v("POST方式:用来向目的服务器发出请求，要求它接受被附在请求后的实体，并把它当作请求队列中请求URI所指定资源的附加新子项.")])])]),t._v(" "),a("p",[t._v("从上面描述可以看出，Get是向服务器发索取数据的一种请求；而Post是向服务器提交数据的一种请求，要提交的数据位于信息头后面的实体中。")]),t._v(" "),a("p",[t._v("GET与POST方法有以下区别：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在客户端，Get方式在通过URL提交数据，数据在URL中可以看到；POST方式，数据放置在HTML HEADER内提交。")])]),t._v(" "),a("li",[a("p",[t._v("GET方式提交的数据最多只能有1024字节，而POST则没有此限制。")])]),t._v(" "),a("li",[a("p",[t._v("安全性问题。正如在（1）中提到，使用 Get 的时候，参数会显示在地址栏上，而 Post 不会。所以，如果这些数据是中文数据而且是非敏感数据，那么使用 get；如果用户输入的数据不是中文字符而且包含敏感数据，那么还是使用 post为好。")])])]),t._v(" "),a("h2",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),a("p",[t._v("HTTP最常见的请求头如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nAccept：浏览器可接受的MIME类型；\n\nAccept-Charset：浏览器可接受的字符集；\n\nAccept-Encoding：浏览器能够进行解码的数据编码方式，比如gzip。Servlet能够向支持gzip的浏览器返回经gzip编码的HTML页面。许多情形下这可以减少5到10倍的下载时间；\n\nAccept-Language：浏览器所希望的语言种类，当服务器能够提供一种以上的语言版本时要用到；\n\nAuthorization：授权信息，通常出现在对服务器发送的WWW-Authenticate头的应答中；\n\nConnection：表示是否需要持久连接。\n\nContent-Length：表示请求消息正文的长度；\n\nCookie：这是最重要的请求头信息之一；\n\nFrom：请求发送者的email地址，由一些特殊的Web客户程序使用，浏览器不会用到它；\n\nHost：初始URL中的主机和端口；\n\nIf-Modified-Since：只有当所请求的内容在指定的日期之后又经过修改才返回它，否则返回304“Not Modified”应答；\n\nPragma：指定“no-cache”值表示服务器必须返回一个刷新后的文档，即使它是代理服务器而且已经有了页面的本地拷贝；\n\nReferer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。\n\nUser-Agent：浏览器类型，如果Servlet返回的内容与浏览器类型有关则该值非常有用；\n\nUA-Pixels，UA-Color，UA-OS，UA-CPU：由某些版本的IE浏览器所发送的非标准的请求头，表示屏幕大小、颜色深度、操作系统和CPU类型。\n\n")])])]),a("h2",{attrs:{id:"响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应头","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),a("p",[t._v("HTTP最常见的响应头如下所示：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nAllow：服务器支持哪些请求方法（如GET、POST等）；\n\nContent-Encoding：文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。\n\nContent-Length：表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。\n\nContent-Type： 表示后面的文档属于什么MIME类型。\n\nDate：当前的GMT时间。\n\nExpires：指明应该在什么时候认为文档已经过期，从而不再缓存它。\n\nLast-Modified：文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。\n\nLocation：表示客户应当到哪里去提取文档。Location通常不是直接设置的，同时设置状态代码为302；\n\nRefresh：表示浏览器应该在多少时间之后刷新文档，以秒计。\n\n")])])]),a("h2",{attrs:{id:"实体头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体头","aria-hidden":"true"}},[t._v("#")]),t._v(" 实体头")]),t._v(" "),a("p",[t._v("实体头用做实体内容的元信息，描述了实体内容的属性，包括实体信息类型，长度，压缩方法，最后一次修改时间，数据有效性等。")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nAllow：GET,POST\n\nContent-Encoding：文档的编码（Encode）方法，例如：gzip\n\nContent-Language：内容的语言类型，例如：zh-cn；\n\nContent-Length：表示内容长度，eg：80\n\nContent-Location：表示客户应当到哪里去提取文档\n\nContent-MD5：MD5 实体的一种MD5摘要，用作校验和。发送方和接受方都计算MD5摘要，接受方将其计算的值与此头标中传递的值进行比较。\n\nContent-Range：随部分实体一同发送；标明被插入字节的低位与高位字节偏移，也标明此实体的总长度。Eg1：Content-Range: 1001-2000/5000，eg2：bytes 2543-4532/7898\n\nContent-Type：标明发送或者接收的实体的MIME类型。Eg：text/html; charset=GB2312       主类型/子类型；\n\nExpires：为0证明不缓存；\n\nLast-Modified：WEB 服务器认为对象的最后修改时间，比如文件的最后修改时间，动态页面的最后产生时间等等。\n\n")])])]),a("h2",{attrs:{id:"扩展头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展头","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展头")]),t._v(" "),a("p",[t._v("在HTTP消息中，也可以使用一些再HTTP1.1正式规范里没有定义的头字段，这些头字段统称为自定义的HTTP头或者扩展头，他们通常被当作是一种实体头处理。")]),t._v(" "),a("h2",{attrs:{id:"cookie和session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session","aria-hidden":"true"}},[t._v("#")]),t._v(" Cookie和Session")]),t._v(" "),a("p",[t._v("Cookie和Session都为了用来保存状态信息，都是保存客户端状态的机制，它们都是为了解决HTTP无状态的问题而所做的努力。")]),t._v(" "),a("p",[t._v("Session可以用Cookie来实现，也可以用URL回写的机制来实现。用Cookie来实现的Session可以认为是对Cookie更高级的应用。")]),t._v(" "),a("p",[t._v("Cookie和Session有以下明显的不同点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Cookie将状态保存在客户端，Session将状态保存在服务器端；")])]),t._v(" "),a("li",[a("p",[t._v("Cookies是服务器在本地机器上存储的小段文本并随每一个请求发送至同一个服务器。Cookie最早在RFC2109中实现，后续RFC2965做了增强。网络服务器用HTTP头向客户端发送cookies，在客户终端，浏览器解析这些cookies并将它们保存为一个本地文件，它会自动将同一服务器的任何请求缚上这些cookies。Session并没有在HTTP的协议中定义；")])]),t._v(" "),a("li",[a("p",[t._v("Session是针对每一个用户的，变量的值保存在服务器上，用一个sessionID来区分是哪个用户session变量,这个值是通过用户的浏览器在访问的时候返回给服务器，当客户禁用cookie时，这个值也可能设置为由get来返回给服务器；")])]),t._v(" "),a("li",[a("p",[t._v("就安全性来说：当你访问一个使用session 的站点，同时在自己机子上建立一个cookie，建议在服务器端的SESSION机制更安全些.因为它不会任意读取客户存储的信息。")])])]),t._v(" "),a("h2",{attrs:{id:"与cookie相关的http扩展头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与cookie相关的http扩展头","aria-hidden":"true"}},[t._v("#")]),t._v(" 与Cookie相关的HTTP扩展头")]),t._v(" "),a("p",[t._v("1）Cookie：客户端将服务器设置的Cookie返回到服务器；")]),t._v(" "),a("p",[t._v("2）Set-Cookie：服务器向客户端设置Cookie；")]),t._v(" "),a("p",[t._v("3）Cookie2 (RFC2965)）：客户端指示服务器支持Cookie的版本；")]),t._v(" "),a("p",[t._v("4）Set-Cookie2 (RFC2965)：服务器向客户端设置Cookie。")]),t._v(" "),a("h2",{attrs:{id:"与缓存相关的http扩展消息头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与缓存相关的http扩展消息头","aria-hidden":"true"}},[t._v("#")]),t._v(" 与缓存相关的HTTP扩展消息头")]),t._v(" "),a("h3",{attrs:{id:"缓存的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存的实现原理")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nExpires：指示响应内容过期的时间，格林威治时间GMT\n\nCache-Control：更细致的控制缓存的内容\n\nLast-Modified：响应中资源最后一次修改的时间\n\nETag：响应中资源的校验值，在服务器上某个时段是唯一标识的。\n\nDate：服务器的时间\n\nIf-Modified-Since：客户端存取的该资源最后一次修改的时间，同Last-Modified。\n\nf-None-Match：客户端存取的该资源的检验值，同ETag。\n\n")])])]),a("p",[t._v("WEB缓存(cache)位于Web服务器和客户端之间。")]),t._v(" "),a("p",[t._v("HTTP协议定义了相关的消息头来使WEB缓存尽可能好的工作。")]),t._v(" "),a("h3",{attrs:{id:"缓存的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存的优点")]),t._v(" "),a("p",[t._v("减少相应延迟：因为请求从缓存服务器（离客户端更近）而不是源服务器被相应，这个过程耗时更少，让web服务器看上去相应更快。")]),t._v(" "),a("p",[t._v("减少网络带宽消耗：当副本被重用时会减低客户端的带宽消耗；客户可以节省带宽费用，控制带宽的需求的增长并更易于管理。")]),t._v(" "),a("h3",{attrs:{id:"web缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" Web缓存机制")]),t._v(" "),a("p",[t._v("HTTP/1.1中缓存的目的是为了在很多情况下减少发送请求，同时在许多情况下可以不需要发送完整响应。")]),t._v(" "),a("p",[t._v("前者减少了网络回路的数量；HTTP利用一个“过期（expiration）”机制来为此目的。")]),t._v(" "),a("p",[t._v("后者减少了网络应用的带宽；HTTP用“验证（validation）”机制来为此目的。")]),t._v(" "),a("p",[t._v("HTTP定义了3种缓存机制：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Freshness：允许一个回应消息可以在源服务器不被重新检查，并且可以由服务器和客户端来控制。例如，Expires回应头给了一个文档不可用的时间。Cache-Control中的max-age标识指明了缓存的最长时间；")])]),t._v(" "),a("li",[a("p",[t._v("Validation：用来检查以一个缓存的回应是否仍然可用。例如，如果一个回应有一个Last-Modified回应头，缓存能够使用If-Modified-Since来判断是否已改变，以便判断根据情况发送请求；")])]),t._v(" "),a("li",[a("p",[t._v("Invalidation： 在另一个请求通过缓存的时候，常常有一个副作用。例如，如果一个URL关联到一个缓存回应，但是其后跟着POST、PUT和DELETE的请求的话，缓存就会过期。")])])]),t._v(" "),a("h2",{attrs:{id:"断点续传和多线程下载的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断点续传和多线程下载的实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 断点续传和多线程下载的实现原理")]),t._v(" "),a("p",[t._v("HTTP协议的GET方法，支持只请求某个资源的某一部分； 206 Partial Content 部分内容响应； Range 请求的资源范围； Content-Range 响应的资源范围； 连接断开重连时，客户端只请求该资源未下载的部分，而不是重新请求整个资源，来实现断点续传。")]),t._v(" "),a("h2",{attrs:{id:"https通信过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https通信过程","aria-hidden":"true"}},[t._v("#")]),t._v(" https通信过程")]),t._v(" "),a("p",[t._v("HTTPS（全称：Hypertext Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。 即HTTP下加入SSL层，HTTPS的安全基础是SSL")]),t._v(" "),a("p",[t._v("有两种基本的加解密算法类型：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对称加密：密钥只有一个，加密解密为同一个密码，且加解密速度快，典型的对称加密算法有DES、AES等；")])]),t._v(" "),a("li",[a("p",[t._v("非对称加密：密钥成对出现（且根据公钥无法推知私钥，根据私钥也无法推知公钥），加密解密使用不同密钥（公钥加密需要私钥解密，私钥加密需要公钥解密），相对对称加密速度较慢，典型的非对称加密算法有RSA、DSA等。")])])]),t._v(" "),a("p",[t._v("https通信的优点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("客户端产生的密钥只有客户端和服务器端能得到；")])]),t._v(" "),a("li",[a("p",[t._v("加密的数据只有客户端和服务器端才能得到明文；")])]),t._v(" "),a("li",[a("p",[t._v("客户端到服务端的通信是安全的。")])])]),t._v(" "),a("h2",{attrs:{id:"http代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http代理","aria-hidden":"true"}},[t._v("#")]),t._v(" http代理")]),t._v(" "),a("p",[t._v("代理服务器英文全称是Proxy Server，其功能就是代理网络用户去取得网络信息。形象的说：它是网络信息的中转站。")]),t._v(" "),a("p",[t._v("代理服务器是介于浏览器和Web服务器之间的一台服务器，有了它之后，浏览器不是直接到Web服务器去取回网页而是向代理服务器发出请求，Request信号会先送到代理服务器，由代理服务器来取回浏览器所需要的信息并传送给你的浏览器。")]),t._v(" "),a("p",[t._v("而且，大部分代理服务器都具有缓冲的功能，就好象一个大的Cache，它有很大的存储空间，它不断将新取得数据储存到它本机的存储器上，如果浏览器所请求的数据在它本机的存储器上已经存在而且是最新的，那么它就不重新从Web服务器取数据，而直接将存储器上的数据传送给用户的浏览器，这样就能显著提高浏览速度和效率。")]),t._v(" "),a("p",[t._v("更重要的是：Proxy Server(代理服务器)是Internet链路级网关所提供的一种重要的安全功能，它的工作主要在开放系统互联(OSI)模型的对话层。")]),t._v(" "),a("h3",{attrs:{id:"http代理服务器的主要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http代理服务器的主要功能","aria-hidden":"true"}},[t._v("#")]),t._v(" http代理服务器的主要功能")]),t._v(" "),a("p",[t._v("主要功能如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("突破自身IP访问限制，访问国外站点。如：教育网、169网等网络用户可以通过代理访问国外网站；")])]),t._v(" "),a("li",[a("p",[t._v("访问一些单位或团体内部资源，如某大学FTP(前提是该代理地址在该资源的允许访问范围之内)，使用教育网内地址段免费代理服务器，就可以用于对教育 网开放的各类FTP下载上传，以及各类资料查询共享等服务；")])]),t._v(" "),a("li",[a("p",[t._v("突破中国电信的IP封锁：中国电信用户有很多网站是被限制访问的，这种限制是人为的，不同Serve对地址的封锁是不同的。所以不能访问时可以换一个国 外的代理服务器试试；")])]),t._v(" "),a("li",[a("p",[t._v("提高访问速度：通常代理服务器都设置一个较大的硬盘缓冲区，当有外界的信息通过时，同时也将其保存到缓冲区中，当其他用户再访问相同的信息时， 则直接由缓冲区中取出信息，传给用户，以提高访问速度；")])]),t._v(" "),a("li",[a("p",[t._v("隐藏真实IP：上网者也可以通过这种方法隐藏自己的IP，免受攻击。")])])])])}],!1,null,null,null);e.default=r.exports}}]);