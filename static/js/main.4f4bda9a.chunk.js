(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{100:function(e,t,s){},119:function(e,t,s){},126:function(e,t,s){},127:function(e,t,s){},128:function(e,t,s){},130:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(10),n=s.n(i),l=(s(99),s(100),s(22)),o=s(16),j=s(6),r=s(23),d=s.n(r),b=(s(119),s(69)),h=s.n(b),m=s(75),p=s.n(m),u=s(76),x=s.n(u),O=s(77),v=s.n(O),f=s(78),g=s.n(f),N=s(163),I=s(1);var y=function(e){var t=e.isCollapsed,s=e.setIsCollapsed,a=Object(c.useState)(""),i=Object(o.a)(a,2),n=i[0],j=i[1];return Object(I.jsxs)("div",{className:"header",children:[Object(I.jsxs)("div",{className:"header-left",children:[Object(I.jsx)("button",{onClick:function(){s(!t)},children:Object(I.jsx)(h.a,{className:"header-icons"})}),Object(I.jsx)(l.b,{to:"/",children:Object(I.jsx)("img",{className:"header-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Youtube-logo"})}),Object(I.jsx)("h2",{children:"YouTube"})]}),Object(I.jsxs)("div",{className:"header-input",children:[Object(I.jsx)("input",{onChange:function(e){j(e.target.value)},value:n,placeholder:"Search",type:"text"}),Object(I.jsx)(l.b,{to:"/search/".concat(n),children:Object(I.jsx)(p.a,{className:"header-input-button"})})]}),Object(I.jsxs)("div",{className:"header-icons",children:[Object(I.jsx)(x.a,{className:"header-icon"}),Object(I.jsx)(v.a,{className:"header-icon"}),Object(I.jsx)(g.a,{className:"header-icon"}),Object(I.jsx)(N.a,{className:"header-icon"})]})]})};s(68);var C=function(e){var t=e.selected,s=e.Icon,c=e.title;return Object(I.jsxs)("div",{className:"sidebarRow ".concat(t&&"selected"),children:[Object(I.jsx)(s,{className:"sidebarRow-icon"}),Object(I.jsx)("h2",{className:"sidebarRow-title",children:c})]})},S=s(47),T=s.n(S),k=s(48),w=s.n(k),R=s(49),E=s.n(R),P=s(50),L=s.n(P),M=s(79),z=s.n(M),A=s(80),F=s.n(A),U=s(81),Y=s.n(U),K=s(51),V=s.n(K),X=s(82),J=s.n(X);var B=function(){return Object(I.jsxs)("div",{className:"sidebar",children:[Object(I.jsx)(l.b,{to:"/",children:Object(I.jsx)(C,{selected:!0,Icon:T.a,title:"Home"})}),Object(I.jsx)(C,{Icon:w.a,title:"Explore"}),Object(I.jsx)(C,{Icon:E.a,title:"Subscriptions"}),Object(I.jsx)("hr",{}),Object(I.jsx)(C,{Icon:L.a,title:"Library"}),Object(I.jsx)(C,{Icon:z.a,title:"History"}),Object(I.jsx)(C,{Icon:F.a,title:"Your Videos"}),Object(I.jsx)(C,{Icon:Y.a,title:"Watch Later"}),Object(I.jsx)(C,{Icon:V.a,title:"Liked Videos"}),Object(I.jsx)(C,{Icon:J.a,title:"Show More"}),Object(I.jsx)("hr",{})]})};var Q=function(e){var t=e.Icon,s=e.title;return Object(I.jsxs)("div",{className:"sidebarMinRow",children:[Object(I.jsx)(t,{}),Object(I.jsx)("p",{children:s})]})};var W=function(){return Object(I.jsxs)("div",{className:"Sidebar-min",children:[Object(I.jsx)(Q,{Icon:T.a,title:"Home"}),Object(I.jsx)(Q,{Icon:w.a,title:"Explore"}),Object(I.jsx)(Q,{Icon:E.a,title:"Subscription"}),Object(I.jsx)(Q,{Icon:L.a,title:"Library"})]})};s(126);var Z=function(e){var t=e.isCollapsed,s=e.image,c=e.title,a=e.channel,i=e.views,n=e.timestamp,l=e.channelImage;return Object(I.jsxs)("div",{className:t?"video-Card":"videoCard",children:[Object(I.jsx)("img",{className:t?"video-Card-thumbnail":"videoCard-thumbnail",src:s,alt:c}),Object(I.jsxs)("div",{className:"video-info",children:[Object(I.jsx)(N.a,{className:"video-avatar",alt:a,src:l}),Object(I.jsxs)("div",{className:"video-text",children:[Object(I.jsx)("h4",{children:c}),Object(I.jsx)("p",{children:a}),Object(I.jsxs)("p",{children:[i," views \u2022 ",n," ago"]})]})]})]})};var _=function(e){var t=e.isCollapsed,s=Object(c.useState)([]),a=Object(o.a)(s,2),i=a[0],n=a[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){n(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(I.jsx)("div",{className:t?"recommended-Videos":"recommendedVideos",children:Object(I.jsx)("div",{className:"recommended-videos",children:i.map((function(e){return Object(I.jsx)(l.b,{to:"/video/".concat(e.id),children:Object(I.jsx)(Z,{isCollapsed:t,image:e.snippet.thumbnails.high.url,title:e.snippet.title,views:"55M",timestamp:"2 years",channelImage:"",channel:e.snippet.channelTitle})},Math.random())}))})})},H=(s(127),s(83)),D=s.n(H),q=s(162),G=s(52),$=s.n(G);var ee=function(e){var t=e.image,s=e.channel,c=e.verified,a=e.subs,i=e.noOfVideos,n=e.description;return Object(I.jsxs)("div",{className:"channelRow",children:[Object(I.jsx)(N.a,{className:"channelRow-logo",alt:s,src:t}),Object(I.jsxs)("div",{className:"channelRow-text",children:[Object(I.jsxs)("h3",{children:[s,"  ",c&&Object(I.jsx)($.a,{fontSize:"small"})]}),Object(I.jsxs)("p",{children:[a," subsribers \u2022 ",i," videos"]}),Object(I.jsx)("p",{children:n})]}),Object(I.jsx)(q.a,{className:"subscribeButton",variant:"contained",children:"Subscribe"})]})};var te=function(e){var t=e.views,s=e.description,c=e.timestamp,a=e.channel,i=e.title,n=e.image,l=e.channelImage;return Object(I.jsxs)("div",{className:"videoRow",children:[Object(I.jsx)("img",{src:n,alt:a}),Object(I.jsxs)("div",{className:"videoRow-text",children:[Object(I.jsx)("h3",{children:i}),Object(I.jsxs)("p",{className:"videoRow-headline",children:[t," views \u2022 ",c," ago"]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(N.a,{className:"channelImage",src:l}),Object(I.jsxs)("h5",{children:[a," ",Object(I.jsx)($.a,{fontSize:"small"})]})]}),Object(I.jsx)("p",{className:"videoRow-headline",children:s})]})]})};var se=function(e){var t=e.isCollapsed,s=(e.pathName,Object(c.useState)([])),a=Object(o.a)(s,2),i=a[0],n=a[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=the%20prophec&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){console.log(e),n(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(I.jsxs)("div",{className:t?"search-Page":"searchPage",children:[Object(I.jsxs)("div",{className:"searchPage-filter",children:[Object(I.jsx)(D.a,{}),Object(I.jsx)("h2",{children:"FILTERS"})]}),Object(I.jsx)("hr",{}),Object(I.jsx)(ee,{image:"https://yt3.ggpht.com/cWcaoomTkp5YMbMA9v7eNU42Lna4lYk7gidKzUA7K0bP5WL3WIgvT-oV1hxdXfsZoSKXBkr84Q=s900-c-k-c0x00ffffff-no-rj",channel:"The PropheC",verified:!0,subs:"558K",noOfVideos:56,description:"The Official Youtube Channel of The PropheC"}),Object(I.jsx)("hr",{}),i.map((function(e){return Object(I.jsx)(te,{views:"3M",description:e.snippet.description,timestamp:"3 days",channel:e.snippet.channelTitle,title:e.snippet.title,image:e.snippet.thumbnails.high.url,channelImage:"https://yt3.ggpht.com/cWcaoomTkp5YMbMA9v7eNU42Lna4lYk7gidKzUA7K0bP5WL3WIgvT-oV1hxdXfsZoSKXBkr84Q=s900-c-k-c0x00ffffff-no-rj"},Math.random())}))]})};s(128);var ce=function(e){var t=e.channelTitle;return Object(I.jsxs)("div",{className:"channel-title",children:[Object(I.jsxs)("div",{className:"channel-section",children:[Object(I.jsx)(N.a,{className:"video-Avatar",src:""}),Object(I.jsxs)("div",{className:"name",children:[Object(I.jsx)("h4",{children:t}),Object(I.jsx)("p",{children:"4.26M subscribers"})]})]}),Object(I.jsx)(q.a,{className:"subscribeButton",variant:"contained",children:"Subscribe"})]})};var ae=function(e){var t=e.videoImage,s=e.title,c=e.channelTitle;return Object(I.jsxs)("div",{className:"suggestion-videos",children:[Object(I.jsx)("img",{src:t,alt:c}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h5",{children:s.slice(0,50)}),Object(I.jsx)("p",{children:c}),Object(I.jsx)("p",{children:"64K views \u2022 2 months ago"})]})]})},ie=s(84),ne=s.n(ie),le=s(86),oe=s.n(le),je=s(85),re=s.n(je),de=s(87),be=s.n(de);var he=function(e){var t=e.title,s=e.tags;return Object(I.jsxs)("div",{className:"title",children:[Object(I.jsx)("div",{className:"tags",children:s.map((function(e){return Object(I.jsxs)("p",{children:["#",e]},Math.random())}))}),Object(I.jsx)("h4",{children:t}),Object(I.jsxs)("div",{className:"title-section",children:[Object(I.jsx)("p",{children:"67,048 views \u2022 18-Jan-2020"}),Object(I.jsxs)("div",{className:"video-icons",children:[Object(I.jsx)(V.a,{className:"video-icon"}),Object(I.jsx)("h5",{children:"LIKE"}),Object(I.jsx)(ne.a,{className:"video-icon"}),Object(I.jsx)("h5",{children:"DISLIKE"}),Object(I.jsx)(re.a,{className:"video-icon"}),Object(I.jsx)("h5",{children:"SHARE"}),Object(I.jsx)(oe.a,{className:"video-icon"}),Object(I.jsx)("h5",{children:"SAVE"}),Object(I.jsx)(be.a,{className:"video-icon"})]})]})]})};var me=function(e){var t=e.profileImage,s=e.authorName,c=e.text;return e.likes,Object(I.jsxs)("div",{className:"commentCard",children:[Object(I.jsx)(N.a,{className:"profile-image",src:t}),Object(I.jsxs)("div",{className:"text",children:[Object(I.jsx)("h5",{children:s}),Object(I.jsx)("p",{children:c})]})]})},pe=s(161),ue=s(88),xe=s.n(ue);var Oe=function(e){var t=e.videoImage,s=e.channelTitle,a=e.description,i=e.title,n=e.tags,l=Object(c.useState)([]),j=Object(o.a)(l,2),r=j[0],b=j[1],h=Object(c.useState)([]),m=Object(o.a)(h,2),p=m[0],u=m[1];return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){b(e.data.items)})).catch((function(e){console.log(e)})),d.a.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&order=relevance&textFormat=plainText&videoId=5HVoUNiSee8&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){u(e.data.items)})).catch((function(e){console.log(e)}))}),[]),Object(I.jsxs)("div",{className:"video-page",children:[Object(I.jsxs)("div",{className:"video-section",children:[Object(I.jsx)("img",{className:"video-image",src:t,alt:s}),Object(I.jsx)(he,{title:i,tags:n}),Object(I.jsx)("hr",{}),Object(I.jsx)(ce,{channelTitle:s,description:a}),Object(I.jsx)("div",{className:"description",children:Object(I.jsx)("p",{children:a.slice(0,310)})}),Object(I.jsx)("hr",{}),Object(I.jsxs)("div",{className:"sort-comments",children:[Object(I.jsx)("p",{children:"48,548 comments"}),Object(I.jsx)(xe.a,{className:"sort-icon"}),Object(I.jsx)("h5",{children:"SORT BY"})]}),Object(I.jsxs)("div",{className:"comment-area",children:[Object(I.jsx)(N.a,{src:""}),Object(I.jsx)(pe.a,{className:"textfield",id:"standard-basic",label:"Add a public comment",variant:"standard"})]}),Object(I.jsx)("div",{className:"comment-section",children:p.map((function(e){return Object(I.jsx)(me,{profileImage:e.snippet.topLevelComment.snippet.authorProfileImageUrl,authorName:e.snippet.topLevelComment.snippet.authorDisplayName,text:e.snippet.topLevelComment.snippet.textOriginal,likes:e.snippet.likeCount},Math.random())}))})]}),Object(I.jsx)("div",{className:"suggestion-section",children:r.map((function(e){return Object(I.jsx)(ae,{videoImage:e.snippet.thumbnails.high.url,title:e.snippet.title,channelTitle:e.snippet.channelTitle},Math.random())}))})]})};var ve=function(){return Object(I.jsx)("div",{})};var fe=function(e){var t=e.isCollapsed;return Object(I.jsx)(_,{isCollapsed:t})},ge=function(){var e,t,s,a=Object(c.useState)(!1),i=Object(o.a)(a,2),n=i[0],l=i[1],r=Object(c.useState)([]),b=Object(o.a)(r,2),h=b[0],m=b[1],p="",u=[],x=Object(j.e)(),O=x.pathname;return Object(c.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk").then((function(e){m(e.data.items)})).catch((function(e){console.log(e)}))}),[]),h.forEach((function(c){x.pathname.includes(c.id)&&(e=c.snippet.title,t=c.snippet.channelTitle,s=c.snippet.thumbnails.maxres?c.snippet.thumbnails.maxres.url:c.snippet.thumbnails.high.url,p=c.snippet.description,c.snippet.tags&&(u=c.snippet.tags.slice(0,3)))})),Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(y,{isCollapsed:n,setIsCollapsed:l}),Object(I.jsxs)("div",{className:"app-page",children:[x.pathname.includes("/video")?n?Object(I.jsx)(B,{}):Object(I.jsx)(ve,{}):n?Object(I.jsx)(W,{}):Object(I.jsx)(B,{}),Object(I.jsxs)(j.c,{children:[Object(I.jsx)(j.a,{path:"/",element:Object(I.jsx)(fe,{isCollapsed:n})}),Object(I.jsx)(j.a,{path:"/search/:searchTerm",element:Object(I.jsx)(se,{isCollapsed:n,pathName:O})}),Object(I.jsx)(j.a,{path:"/video/:videoTerm",element:Object(I.jsx)(Oe,{videoImage:s,channelTitle:t,description:p,title:e,tags:u})})]})]})]})};var Ne=function(){return Object(I.jsx)(l.a,{children:Object(I.jsx)(ge,{})})},Ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,165)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(Ne,{})}),document.getElementById("root")),Ie()},68:function(e,t,s){},99:function(e,t,s){}},[[130,1,2]]]);
//# sourceMappingURL=main.4f4bda9a.chunk.js.map