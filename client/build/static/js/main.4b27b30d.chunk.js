(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{104:function(e,t){},107:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(54),l=a.n(s),m=a(61),o=a(5),i=a(55),u=a.n(i),A=a(56),E=a.n(A),f=a(16),p=a.n(f),g=(a(107),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Lets Chat",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac"))),t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map(function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:p.a}))})))):null)}),d=a(57),v=a.n(d),h=(a(143),a(30)),N=a.n(h),j=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},N.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},N.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},b=(a(144),function(e){var t=e.messages,a=e.name;return r.a.createElement(v.a,{className:"messages"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(j,{message:e,name:a}))}))}),C=a(58),O=a.n(C),I=(a(145),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:p.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:O.a,alt:"close icon"}))))}),S=(a(146),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),x=(a(147),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(o.a)(a,2),l=s[0],i=s[1],A=Object(c.useState)(""),f=Object(o.a)(A,2),p=f[0],d=f[1],v=Object(c.useState)(""),h=Object(o.a)(v,2),N=h[0],j=h[1],C=Object(c.useState)(""),O=Object(o.a)(C,2),x=O[0],y=O[1],w=Object(c.useState)([]),k=Object(o.a)(w,2),B=k[0],R=k[1],M="https://sajesh-chat.herokuapp.com/";Object(c.useEffect)(function(){var e=u.a.parse(t.search),a=e.name,c=e.room;n=E()(M),d(c),i(a),n.emit("join",{name:a,room:c},function(e){e&&alert(e)})},[M,t.search]),Object(c.useEffect)(function(){n.on("message",function(e){R(function(t){return[].concat(Object(m.a)(t),[e])})}),n.on("roomData",function(e){var t=e.users;j(t)})},[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(I,{room:p}),r.a.createElement(b,{messages:B,name:l}),r.a.createElement(S,{message:x,setMessage:y,sendMessage:function(e){e.preventDefault(),x&&n.emit("sendMessage",x,function(){return y("")})}})),r.a.createElement(g,{users:N}))}),y=a(17);a(148);function w(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),m=l[0],i=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(y.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var k=a(6),B=function(){return r.a.createElement(y.a,null,r.a.createElement(k.a,{path:"/",exact:!0,component:w}),r.a.createElement(k.a,{path:"/chat",component:x}))};l.a.render(r.a.createElement(B,null),document.getElementById("root"))},16:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},58:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,t,a){e.exports=a(151)}},[[62,1,2]]]);
//# sourceMappingURL=main.4b27b30d.chunk.js.map