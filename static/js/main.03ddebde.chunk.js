(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{115:function(e,t,s){},116:function(e,t,s){},135:function(e,t,s){},142:function(e,t,s){},143:function(e,t,s){},144:function(e,t,s){},146:function(e,t,s){},147:function(e,t,s){},148:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(14),i=s.n(n),l=(s(115),s(116),s(18)),o=s(8),j=s(7),r=s(16),d=s.n(r),b=(s(135),s(78)),h=s.n(b),p=s(53),u=s.n(p),m=s(84),O=s.n(m),x=s(85),v=s.n(x),f=s(86),g=s.n(f),y=s(186),N=s(1);var I=function(e){var t=e.isCollapsed,s=e.setIsCollapsed,a=Object(c.useState)([]),n=Object(o.a)(a,2),i=n[0],j=n[1],r=Object(c.useState)([]),b=Object(o.a)(r,2),p=b[0],m=b[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),I=f[0],S=f[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){j(e.data.items),m(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(N.jsxs)("div",{className:"header",children:[Object(N.jsxs)("div",{className:"header-left",children:[Object(N.jsx)("button",{onClick:function(){s(!t)},children:Object(N.jsx)(h.a,{className:"header-icons"})}),Object(N.jsx)(l.b,{to:"/",children:Object(N.jsx)("img",{className:"header-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png",alt:"Youtube-logo"})})]}),Object(N.jsxs)("div",{className:"header-input",children:[Object(N.jsxs)("div",{className:"search-box",children:[Object(N.jsx)("input",{onInput:function(e){var t=e.target.value.toLowerCase(),s=p.filter((function(e){return"".concat(e.snippet.channelTitle).split("")[0].toLowerCase().includes(t)}));j(s),S(t)},placeholder:"Search",type:"text"}),Object(N.jsx)(l.b,{to:"/search/".concat(I),children:Object(N.jsx)(u.a,{className:"header-input-button"})})]}),I?Object(N.jsx)("ul",{className:"search-list",children:i.slice(0,10).map((function(e){return Object(N.jsx)(l.b,{to:"/search/".concat(e.snippet.channelTitle),children:Object(N.jsx)("li",{children:e.snippet.channelTitle})},Math.random())}))}):""]}),Object(N.jsxs)("div",{className:"header-icons",children:[Object(N.jsx)(O.a,{className:"header-icon"}),Object(N.jsx)(v.a,{className:"header-icon"}),Object(N.jsx)(g.a,{className:"header-icon"}),Object(N.jsx)(y.a,{className:"header-icon"})]})]})};s(77);var S=function(e){var t=e.selected,s=e.Icon,c=e.title;return Object(N.jsxs)("div",{className:"sidebarRow ".concat(t&&"selected"),children:[Object(N.jsx)(s,{className:"sidebarRow-icon"}),Object(N.jsx)("h2",{className:"sidebarRow-title",children:c})]})},C=s(54),E=s.n(C),k=s(55),w=s.n(k),T=s(56),P=s.n(T),z=s(57),L=s.n(z),R=s(88),A=s.n(R),F=s(89),J=s.n(F),M=s(90),U=s.n(M),X=s(58),Q=s.n(X),Z=s(91),H=s.n(Z),B=s(65),V=s.n(B),q=s(87),D=s.n(q);var Y=function(e){var t=e.isExpanded,s=e.setIsExpanded;return Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsx)(S,{Icon:V.a,title:"Hindi"}),Object(N.jsx)(S,{Icon:V.a,title:"Punjabi"}),Object(N.jsx)("button",{onClick:function(){t&&s(!1)},children:Object(N.jsx)(S,{Icon:D.a,title:"Show Less"})})]})};var K=function(e){e.pathName;var t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],n=s[1];return Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsx)(l.b,{to:"/",children:Object(N.jsx)(S,{selected:!0,Icon:E.a,title:"Home"})}),Object(N.jsx)(S,{Icon:w.a,title:"Explore"}),Object(N.jsx)(S,{Icon:P.a,title:"Subscriptions"}),Object(N.jsx)("hr",{}),Object(N.jsx)(S,{Icon:L.a,title:"Library"}),Object(N.jsx)(S,{Icon:A.a,title:"History"}),Object(N.jsx)(S,{Icon:J.a,title:"Your Videos"}),Object(N.jsx)(S,{Icon:U.a,title:"Watch Later"}),Object(N.jsx)(S,{Icon:Q.a,title:"Liked Videos"}),a?"":Object(N.jsx)("button",{onClick:function(){a||n(!0)},children:Object(N.jsx)(S,{Icon:H.a,title:"Show More"})}),a?Object(N.jsx)(Y,{isExpanded:a,setIsExpanded:n}):"",Object(N.jsx)("hr",{})]})};var _=function(e){var t=e.Icon,s=e.title;return Object(N.jsxs)("div",{className:"sidebarMinRow",children:[Object(N.jsx)(t,{}),Object(N.jsx)("p",{children:s})]})};var W=function(){return Object(N.jsxs)("div",{className:"Sidebar-min",children:[Object(N.jsx)(_,{Icon:E.a,title:"Home"}),Object(N.jsx)(_,{Icon:w.a,title:"Explore"}),Object(N.jsx)(_,{Icon:P.a,title:"Subscription"}),Object(N.jsx)(_,{Icon:L.a,title:"Library"})]})};s(142);var G=function(e){var t=e.isCollapsed,s=e.image,a=e.title,n=e.channel,i=e.views,l=e.timestamp,j=e.channelId,r=Object(c.useState)([]),b=Object(o.a)(r,2),h=b[0],p=b[1],u="";return Object(c.useEffect)((function(){j&&d.a.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(j,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){p(e.data.items)})).catch((function(e){console.log(e)}))}),[j]),h.forEach((function(e){e.snippet.thumbnails.high.url&&(u=e.snippet.thumbnails.high.url)})),Object(N.jsxs)("div",{className:t?"video-Card":"videoCard",children:[Object(N.jsx)("img",{className:t?"video-Card-thumbnail":"videoCard-thumbnail",src:s,alt:a}),Object(N.jsxs)("div",{className:"video-info",children:[Object(N.jsx)(y.a,{className:"video-avatar",alt:n,src:u}),Object(N.jsxs)("div",{className:"video-text",children:[Object(N.jsx)("h4",{children:a}),Object(N.jsx)("p",{children:n}),Object(N.jsxs)("p",{children:[i," views \u2022 ",l," ago"]})]})]})]})};var $=function(e){var t=e.isCollapsed,s=Object(c.useState)([]),a=Object(o.a)(s,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){i(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(N.jsx)("div",{className:t?"recommended-Videos":"recommendedVideos",children:Object(N.jsx)("div",{className:"recommended-videos",children:n.map((function(e){return Object(N.jsx)(l.b,{to:"/video/".concat(e.id),children:Object(N.jsx)(G,{isCollapsed:t,image:e.snippet.thumbnails.high.url,title:e.snippet.title,views:"55M",timestamp:"2 years",channelImage:"",channel:e.snippet.channelTitle,channelId:e.snippet.channelId})},Math.random())}))})})},ee=(s(143),s(93)),te=s.n(ee),se=s(92),ce=s.n(se);var ae=function(e){var t=e.views,s=e.description,a=e.timestamp,n=e.channel,i=e.title,l=e.image,j=e.channelId,r=Object(c.useState)([]),b=Object(o.a)(r,2),h=b[0],p=b[1],u="";return Object(c.useEffect)((function(){j&&d.a.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(j,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){p(e.data.items)})).catch((function(e){console.log(e)}))}),[j]),h.forEach((function(e){e.snippet.thumbnails.high.url&&(u=e.snippet.thumbnails.high.url)})),Object(N.jsxs)("div",{className:"videoRow",children:[Object(N.jsx)("img",{src:l,alt:n}),Object(N.jsxs)("div",{className:"videoRow-text",children:[Object(N.jsx)("h3",{children:i.slice(0,60)}),Object(N.jsxs)("p",{className:"videoRow-headline",children:[t," views \u2022 ",a," ago"]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(y.a,{className:"channelImage",src:u}),Object(N.jsxs)("h5",{children:[n," ",Object(N.jsx)(ce.a,{fontSize:"small"})]})]}),Object(N.jsx)("p",{className:"videoRow-headline",children:s})]})]})};var ne=function(e){var t=e.isCollapsed,s=e.pathName,a=Object(c.useState)([]),n=Object(o.a)(a,2),i=n[0],j=n[1],r=s.trim();return Object(c.useEffect)((function(){r&&d.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=".concat(r,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){j(e.data.items)})).catch((function(e){console.log(e)}))}),[r]),Object(N.jsxs)("div",{className:t?"search-Page":"searchPage",children:[Object(N.jsxs)("div",{className:"searchPage-filter",children:[Object(N.jsx)(te.a,{}),Object(N.jsx)("h2",{children:"FILTERS"})]}),Object(N.jsx)("hr",{}),i.map((function(e){return Object(N.jsx)(l.b,{to:"/video/".concat(e.id.videoId),children:Object(N.jsx)(ae,{views:"3M",description:e.snippet.description,timestamp:"3 days",channel:e.snippet.channelTitle,title:e.snippet.title,image:e.snippet.thumbnails.high.url,channelId:e.snippet.channelId},Math.random())},Math.random())}))]})},ie=(s(144),s(181));var le=function(e){var t=e.channelTitle,s=e.channelId,a=Object(c.useState)([]),n=Object(o.a)(a,2),i=n[0],l=n[1],j="";return Object(c.useEffect)((function(){s&&d.a.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(s,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){l(e.data.items)})).catch((function(e){console.log(e)}))}),[s]),i.forEach((function(e){e.snippet.thumbnails.high.url&&(j=e.snippet.thumbnails.high.url)})),Object(N.jsxs)("div",{className:"channel-title",children:[Object(N.jsxs)("div",{className:"channel-section",children:[Object(N.jsx)(y.a,{className:"video-Avatar",src:j}),Object(N.jsxs)("div",{className:"name",children:[Object(N.jsx)("h4",{children:t}),Object(N.jsx)("p",{children:"4.26M subscribers"})]})]}),Object(N.jsx)(ie.a,{className:"subscribeButton",variant:"contained",children:"Subscribe"})]})};var oe=function(e){var t=e.videoImage,s=e.title,c=e.channelTitle;return Object(N.jsxs)("div",{className:"suggestion-videos",children:[Object(N.jsx)("img",{className:"Svideo-image",src:t,alt:c}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("h5",{children:[s.slice(0,32)," ..."]}),Object(N.jsx)("p",{children:c}),Object(N.jsx)("p",{children:"64K views \u2022 2 months ago"})]})]})},je=s(94),re=s.n(je),de=s(96),be=s.n(de),he=s(95),pe=s.n(he),ue=s(59),me=s.n(ue);var Oe=function(e){var t=e.title,s=e.tags;return Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)("div",{className:"tags",children:s.map((function(e){return Object(N.jsxs)("p",{children:["#",e]},Math.random())}))}),Object(N.jsx)("h4",{children:t}),Object(N.jsxs)("div",{className:"title-section",children:[Object(N.jsx)("p",{children:"67,048 views \u2022 18-Jan-2020"}),Object(N.jsxs)("div",{className:"video-icons",children:[Object(N.jsx)(Q.a,{className:"video-icon"}),Object(N.jsx)("h5",{children:"LIKE"}),Object(N.jsx)(re.a,{className:"video-icon"}),Object(N.jsx)("h5",{children:"DISLIKE"}),Object(N.jsx)(pe.a,{className:"video-icon"}),Object(N.jsx)("h5",{children:"SHARE"}),Object(N.jsx)(be.a,{className:"video-icon"}),Object(N.jsx)("h5",{children:"SAVE"}),Object(N.jsx)(me.a,{className:"video-icon"})]})]})]})};var xe=function(e){var t=e.profileImage,s=e.authorName,c=e.text;return e.likes,Object(N.jsxs)("div",{className:"commentCard",children:[Object(N.jsx)(y.a,{className:"profile-image",src:t}),Object(N.jsxs)("div",{className:"text",children:[Object(N.jsx)("h5",{children:s}),Object(N.jsx)("p",{children:c})]})]})},ve=s(185),fe=s(97),ge=s.n(fe);var ye=function(e){var t=e.channelTitle,s=e.description,a=e.title,n=e.tags,i=e.videoId,l=e.channelId,j=Object(c.useState)([]),r=Object(o.a)(j,2),b=r[0],h=r[1],p=Object(c.useState)([]),u=Object(o.a)(p,2),m=u[0],O=u[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){h(e.data.items)})).catch((function(e){console.log(e)})),i&&d.a.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&textFormat=plainText&videoId=".concat(i,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){O(e.data.items)})).catch((function(e){console.log(e)}))}),[i]),Object(N.jsxs)("div",{className:"video-page",children:[Object(N.jsxs)("div",{className:"video-section",children:[Object(N.jsx)("iframe",{id:"player",type:"text/html",width:"950",height:"530",src:"https://www.youtube.com/embed/".concat(i,"?enablejsapi=1&origin=http://example.com"),frameBorder:"0",title:"myFrame"}),Object(N.jsx)(Oe,{title:a,tags:n}),Object(N.jsx)("hr",{}),Object(N.jsx)(le,{channelTitle:t,channelId:l}),Object(N.jsx)("div",{className:"description",children:Object(N.jsx)("p",{children:s.slice(0,310)})}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"sort-comments",children:[Object(N.jsx)("p",{children:"48,548 comments"}),Object(N.jsx)(ge.a,{className:"sort-icon"}),Object(N.jsx)("h5",{children:"SORT BY"})]}),Object(N.jsxs)("div",{className:"comment-area",children:[Object(N.jsx)(y.a,{src:""}),Object(N.jsx)(ve.a,{className:"textfield",id:"standard-basic",label:"Add a public comment",variant:"standard"})]}),Object(N.jsx)("div",{className:"comment-section",children:m.map((function(e){return Object(N.jsx)(xe,{profileImage:e.snippet.topLevelComment.snippet.authorProfileImageUrl,authorName:e.snippet.topLevelComment.snippet.authorDisplayName,text:e.snippet.topLevelComment.snippet.textOriginal,likes:e.snippet.likeCount},Math.random())}))})]}),Object(N.jsx)("div",{className:"suggestion-section",children:b.map((function(e){return Object(N.jsx)(oe,{videoImage:e.snippet.thumbnails.high.url,title:e.snippet.title,channelTitle:e.snippet.channelTitle},Math.random())}))})]})};var Ne=function(){return Object(N.jsx)("div",{})},Ie=(s(146),s(66)),Se=s.n(Ie),Ce=s(184),Ee=s(188),ke=s(101),we=s.n(ke),Te=s(102),Pe=s.n(Te),ze=s(98),Le=s.n(ze),Re=s(99),Ae=s.n(Re),Fe=s(100),Je=s.n(Fe);var Me=function(e){var t=e.videoImage,s=e.channelTitle,c=e.title;return Object(N.jsxs)("div",{className:"list",children:[Object(N.jsxs)("div",{className:"playlist-video-row",children:[Object(N.jsx)("img",{src:t,alt:s}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{children:c.slice(0,60)}),Object(N.jsx)("p",{children:s})]})]}),Object(N.jsx)("hr",{})]})};var Ue=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(o.a)(n,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=45&playlistId=PLLhj5zqbwUGDKSy1SHMamkyAqquLVmXyn&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){j(e.data.items)}))}),[]),Object(N.jsxs)("div",{className:"playlist-page",children:[Object(N.jsxs)("div",{className:"playlist",children:[Object(N.jsx)("img",{src:"https://i.ytimg.com/vi/DTcl4rbSnho/maxresdefault.jpg",alt:"Hindi"}),Object(N.jsxs)("div",{className:"playlist-name",children:[Object(N.jsx)("h4",{children:"Hindi"}),Object(N.jsx)(Se.a,{})]}),Object(N.jsx)("p",{children:"45 videos \u2022 67 views"}),Object(N.jsxs)(Ce.a,{value:s,onChange:function(e){a(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[Object(N.jsx)(Ee.a,{value:"",children:Object(N.jsxs)("em",{children:[Object(N.jsx)(Le.a,{})," Public"]})}),Object(N.jsxs)(Ee.a,{value:10,children:[Object(N.jsx)(Ae.a,{})," Unlisted"]}),Object(N.jsxs)(Ee.a,{value:20,children:[Object(N.jsx)(Je.a,{})," Private"]})]}),Object(N.jsxs)("div",{className:"playlist-icons",children:[Object(N.jsx)(we.a,{className:"p-icons"}),Object(N.jsx)(Pe.a,{className:"p-icons"}),Object(N.jsx)(me.a,{className:"p-icons"})]}),Object(N.jsxs)("div",{className:"playlist-description",children:[Object(N.jsx)("p",{children:"A few melodious Bollywood songs"}),Object(N.jsx)(Se.a,{})]}),Object(N.jsx)("hr",{})]}),Object(N.jsx)("div",{className:"playlist-videos",children:l.slice(4,40).map((function(e){return Object(N.jsx)(Me,{videoImage:e.snippet.thumbnails.high.url,channelTitle:e.snippet.videoOwnerChannelTitle,title:e.snippet.title})}))})]})};s(147);var Xe=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(o.a)(n,2),j=i[0],r=i[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),p=h[0],m=h[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){a(e.data.items),r(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(N.jsx)("div",{className:"test-container",children:Object(N.jsxs)("div",{className:"top-header",children:[Object(N.jsxs)("div",{className:"search-box",children:[Object(N.jsx)("input",{onInput:function(e){var t=e.target.value.toLowerCase(),s=j.filter((function(e){return"".concat(e.snippet.channelTitle).toLowerCase().includes(t)}));a(s),m(t)},placeholder:"Search",type:"text"}),Object(N.jsx)(l.b,{to:"/search/".concat(p),children:Object(N.jsx)(u.a,{className:"header-input-button"})})]}),Object(N.jsx)("ul",{className:"search-list",children:s.slice(0,10).map((function(e){return Object(N.jsx)(l.b,{to:"/search/".concat(e.snippet.channelTitle),children:Object(N.jsx)("li",{className:"filters",children:e.snippet.channelTitle})},Math.random())}))})]})})};var Qe=function(e){var t=e.isCollapsed;return Object(N.jsx)($,{isCollapsed:t})},Ze=function(){var e,t,s,a=Object(c.useState)(!1),n=Object(o.a)(a,2),i=n[0],l=n[1],r=Object(c.useState)([]),b=Object(o.a)(r,2),h=b[0],p=b[1],u=Object(c.useState)([]),m=Object(o.a)(u,2),O=m[0],x=m[1],v="",f="",g="",y=[],S=Object(j.e)(),C=S.pathname,E=C.trim();return Object(c.useEffect)((function(){C.includes("/video")&&d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){p(e.data.items)})).catch((function(e){console.log(e)})),C.includes("/search")&&d.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=".concat(E,"&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk")).then((function(e){x(e.data.items)})).catch((function(e){console.log(e)}))}),[E,C]),h.forEach((function(c){S.pathname.includes(c.id)&&(e=c.snippet.title,t=c.snippet.channelTitle,s=c.snippet.thumbnails.maxres?c.snippet.thumbnails.maxres.url:c.snippet.thumbnails.high.url,v=c.snippet.description,c.snippet.tags&&(y=c.snippet.tags.slice(0,3)),f=c.id,g=c.snippet.channelId)})),O.forEach((function(c){S.pathname.includes(c.id.videoId)&&(e=c.snippet.title,t=c.snippet.channelTitle,s=c.snippet.thumbnails.maxres?c.snippet.thumbnails.maxres.url:c.snippet.thumbnails.high.url,v=c.snippet.description,c.snippet.tags&&(y=c.snippet.tags.slice(0,3)),f=c.id.videoId,g=c.snippet.channelId)})),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(I,{isCollapsed:i,setIsCollapsed:l}),Object(N.jsxs)("div",{className:"app-page",children:[S.pathname.includes("/video")?i?Object(N.jsx)(K,{}):Object(N.jsx)(Ne,{}):i?Object(N.jsx)(W,{}):Object(N.jsx)(K,{}),Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:"/",element:Object(N.jsx)(Qe,{isCollapsed:i})}),Object(N.jsx)(j.a,{path:"/search/:searchTerm",element:Object(N.jsx)(ne,{isCollapsed:i,pathName:C})}),Object(N.jsx)(j.a,{path:"/video/:videoTerm",element:Object(N.jsx)(ye,{videoImage:s,channelTitle:t,description:v,title:e,tags:y,videoId:f,channelId:g})}),Object(N.jsx)(j.a,{path:"/playlist",element:Object(N.jsx)(Ue,{})}),Object(N.jsx)(j.a,{path:"/fetch",element:Object(N.jsx)(Xe,{})})]})]})]})};var He=function(){return Object(N.jsx)(l.a,{children:Object(N.jsx)(Ze,{})})},Be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,189)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(He,{})}),document.getElementById("root")),Be()},77:function(e,t,s){}},[[148,1,2]]]);
//# sourceMappingURL=main.03ddebde.chunk.js.map