(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=(n(83),n(84),n.p+"static/media/logo192.269cb84d.png"),l=n(72),d=n(16),j=n(118),m=n(65),b=n.n(m),u=n(66),h=n.n(u),O=n(120),g=n(141),x=n(124),p=Object(j.a)((function(e){return{root:{position:"fixed",top:"7%",right:"2%",fontSize:"200%"},extendedIcon:{marginRight:e.spacing(1)}}})),v=function(e){var t=e.nomineeCount,n=e.toggleNominationDrawer,a=p();return Object(i.jsx)(O.a,{container:!0,justify:"flex-end",className:a.root,children:Object(i.jsx)(g.a,{title:"Your Nominations",children:Object(i.jsxs)(x.a,{variant:"extended",color:"secondary",size:"large","aria-label":"show nominations",onClick:function(){return n()},children:[t?Object(i.jsx)(h.a,{className:a.extendedIcon}):Object(i.jsx)(b.a,{spacing:3,className:a.extendedIcon}),t]})})})},f=n.p+"static/media/movie-placeholder.1f7599c3.png",N=n(67),y=n.n(N),F=n(125),C=n(126),S=n(127),D=n(51),w=n(128),I=n(129),k=Object(j.a)({listItem:{backgroundColor:"#1D1E21"},poster:{width:"10vh",height:"auto",marginRight:"1em"},title:{display:"inline",fontSize:"1.1em",lineHeight:"0.5px"},subtitle:{fontSize:"0.8em"},divider:{light:!0},button:{margin:"0 1em 0.2em 1em",borderRadius:"30px"}}),P=function(e){var t=e.movie,n=e.removeNominee,r=k(),o=Object(a.useState)(!1),s=Object(d.a)(o,2),l=s[0],j=s[1],m=t.Title,b=t.Year,u="N/A"!==t.Poster?t.Poster:f;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsxs)(F.a,{className:r.listItem,children:[Object(i.jsx)(C.a,{children:Object(i.jsx)("img",{alt:"".concat(m," Movie Poster"),src:u,className:r.poster})}),Object(i.jsx)(S.a,{primary:Object(i.jsx)(c.a.Fragment,{children:Object(i.jsx)(D.a,{component:"span",variant:"h6",className:r.title,color:"primary",children:m})}),secondary:Object(i.jsx)(c.a.Fragment,{children:Object(i.jsx)(D.a,{component:"span",variant:"body2",className:r.subtitle,color:"primary",children:b})})}),Object(i.jsx)(w.a,{id:t.imdbID,className:r.button,display:"inherit-inline",size:"medium",variant:"outlined",color:"secondary",onClick:function(){return function(e){j(!0),n(e)}(t)},disabled:l,endIcon:Object(i.jsx)(y.a,{children:"remove"}),children:l?"Removed":"Remove"})]}),Object(i.jsx)(I.a,{className:r.divider,variant:"inset",component:"li"})]})},T=n(130),B=n(138),M=Object(j.a)({list:{backgroundColor:"#1D1E21",width:"100%",height:"100%",maxWidth:"480px",listStyle:"none","& .MuiDrawer-paper ":{backgroundColor:"#1D1E21",fontFamily:"Broadway3D"},padding:"0% 2% 0% 0%"},heading:{display:"inline"},note:{padding:"0% 3% 1% 3%"}}),R=function(e){var t=e.nominees,n=e.removeNominee,a=e.toggleDrawer,r=e.isOpen,o=M(),s=t.length,l=Object(i.jsx)("div",{id:"nomination-list",className:o.list,children:Object(i.jsxs)(T.a,{children:[Object(i.jsx)(F.a,{children:Object(i.jsx)(S.a,{primary:Object(i.jsx)(c.a.Fragment,{children:Object(i.jsx)(D.a,{component:"span",variant:"h2",className:o.heading,color:"primary",children:"Your Nominations"})}),secondary:Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)(D.a,{component:"span",variant:"subtitle1",className:o.subheading,color:"primary",children:["\ud83c\udf1f ",s," / 5 Movie Nominations"]})})})}),s>0?t.map((function(e){return Object(i.jsx)(P,{movie:e,removeNominee:n},e.imdbID)})):Object(i.jsx)(D.a,{className:o.note,variant:"subtitles1",color:"primary",children:"You have not nominated any movies."})]})});return Object(i.jsx)("div",{id:"nomination-drawer",children:Object(i.jsx)(B.a,{anchor:"right",open:r,onClose:a,onOpen:a,children:l})})},z=n(73),E=n(140),Y=n(139);function A(e){return Object(i.jsx)(Y.a,Object(z.a)({elevation:6,variant:"filled"},e))}var H=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(e){"Close"===e.currentTarget.title&&c(!1)};return Object(i.jsx)("div",{className:"root",children:Object(i.jsx)(E.a,{open:n,onClose:r,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(i.jsxs)(A,{onClose:r,severity:"success",children:[Object(i.jsx)(D.a,{variant:"h5",gutterBottom:!0,children:"You have completed 5 nominations!"}),Object(i.jsx)(D.a,{variant:"body1",gutterBottom:!0,children:"Changed your mind? You can edit the list by removing selected nominees."})]})},"topcenter")})},W=n(132),G=function(e){var t=e.fetchMovies,n=Object(a.useState)(""),c=Object(d.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){t(r)}),[r]),Object(i.jsxs)(W.a,{id:"movie-search",maxWidth:"lg",children:[Object(i.jsx)("input",{id:"movie-search-bar",type:"text",value:r,onChange:function(e){var t=e.target.value;o(t)},placeholder:"Search Movie Here"}),r?Object(i.jsxs)("h2",{children:['Searching for "',r,'"']}):null]})},J=n(71),L=n(142),q=n(133),K=n(134),Q=n(135),U=n(136),V=Object(J.a)();V=Object(L.a)(V);var X=Object(j.a)((function(e){return{root:{backgroundColor:"#2d2d37"},media:{height:100,paddingBottom:"100%"},header:{padding:"10% 3% 0% 3%",height:80,maxWidth:1e3,color:"#eeeeee",display:"inline-grid",verticalAlign:"middle",justifyContent:"center"},movieTitle:{fontSize:"1.1em",lineHeight:"1"},button:{justifyContent:"center",marginBottom:10}}})),Z=function(e){var t=e.movie,n=e.disableBtn,a=e.btnContent,c=e.addNominee,r=X(),o="N/A"!==t.Poster?t.Poster:f;return Object(i.jsx)(O.a,{item:!0,md:3,sm:4,xs:6,children:Object(i.jsxs)(q.a,{className:r.root,children:[Object(i.jsx)(K.a,{className:r.media,image:o,title:t.Title}),Object(i.jsxs)(Q.a,{className:r.header,children:[Object(i.jsx)(D.a,{variant:"h6",className:r.movieTitle,children:t.Title}),Object(i.jsx)(D.a,{variant:"subtitle2",children:t.Year})]}),Object(i.jsx)(U.a,{className:r.button,children:Object(i.jsx)(w.a,{"aria-label":"add to nomination list",className:"nominate-btn",id:t.imdbID,size:"large",variant:"outlined",color:"secondary",onClick:function(){return c(t)},disabled:n,children:a})})]},t.imdbID)})},$=n(131),_=n(69),ee=n.n(_),te=n(70),ne=n.n(te),ie=n(68),ae=n.n(ie),ce=Object(j.a)((function(e){return{movieGrid:{width:"100%",height:"100%",justify:"center"}}})),re=function(e){var t=e.movies,n=e.totalResults,a=e.resultsPageNum,r=e.errorMsg,o=e.nominees,s=e.nominationFull,l=e.updatePageNum,d=e.addNominee,j=ce(),m=Math.ceil(n/10)||0,b=function(e){return!!o.find((function(t){return t.imdbID===e}))};return Object(i.jsx)(W.a,{"max-width":"lg",id:"movie-list",children:n>0?function(){var e=t.map((function(e){return Object(i.jsx)(Z,{movie:e,disableBtn:b(e.imdbID)||s,btnContent:b(e.imdbID)?"Nominated":"Nominate",addNominee:d},e.imdbID)})),r=Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(g.a,{title:"Previous Page",children:Object(i.jsx)("span",{children:Object(i.jsx)($.a,{className:"pagination-button","aria-label":"next",color:"primary",variant:"outlined",onClick:function(){return l(a-1)},disabled:a<=1,children:Object(i.jsx)(ee.a,{})})})}),Object(i.jsx)("i",{children:"Page ".concat(a," of ").concat(m)}),Object(i.jsx)(g.a,{title:"Next Page",children:Object(i.jsx)("span",{children:Object(i.jsx)($.a,{className:"pagination-button","aria-label":"previous",color:"primary",variant:"outlined",onClick:function(){return l(a+1)},disabled:a+1>m,children:Object(i.jsx)(ne.a,{})})})})]});return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(ae.a,{singular:"match",plural:"matches",count:n}),r,Object(i.jsx)(O.a,{container:!0,spacing:2,className:j.movieGrid,children:e}),r]})}():Object(i.jsxs)("i",{children:[r," Try searching your favorite movie!"]})})},oe="4ec7dca",se="https://www.omdbapi.com/?",le=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=(t[0],t[1],Object(a.useState)("")),c=Object(d.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(null),j=Object(d.a)(s,2),m=j[0],b=j[1],u=Object(a.useState)([]),h=Object(d.a)(u,2),O=h[0],g=h[1],x=Object(a.useState)(0),p=Object(d.a)(x,2),f=p[0],N=p[1],y=Object(a.useState)(1),F=Object(d.a)(y,2),C=F[0],S=F[1],D=Object(a.useState)(!1),w=Object(d.a)(D,2),I=w[0],k=w[1],P=Object(a.useState)([]),T=Object(d.a)(P,2),B=T[0],M=T[1],z=Object(a.useState)(!1),E=Object(d.a)(z,2),Y=E[0],A=E[1],J=B.length,L=function(e){e!==r&&S(1),b(null),g([]),N(0)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(L(e),!e)return!1;var n=se.concat("s=".concat(e),"&page=".concat(t),"&type=movie&apikey=".concat(oe));return fetch(n).then((function(e){return e.json()})).then((function(t){"True"===t.Response?(N(parseInt(t.totalResults)),g(t.Search),o(e)):b(t.Error)})),!0},K=function(){k(!I)};return Object(i.jsx)("div",{id:"main-container",children:Object(i.jsxs)(W.a,{"max-width":"lg",children:[Object(i.jsx)("h2",{children:"Nominate your favorite movies for The Shoppies Movie Awards! \ud83c\udfc6"}),Object(i.jsx)(v,{nomineeCount:J,toggleNominationDrawer:K}),Y?Object(i.jsx)(H,{}):null,I?Object(i.jsx)(R,{nominees:B,removeNominee:function(e){J-1<5&&A(!1),M((function(t){return t.filter((function(t){return t.imdbID!==e.imdbID}))}))},toggleDrawer:K,isOpen:I}):null,Object(i.jsx)(G,{fetchMovies:q}),Object(i.jsx)(re,{movies:O,totalResults:f,resultsPageNum:C,errorMsg:m,nominees:B,nominationFull:Y,updatePageNum:function(e){S(e),q(r,e)},addNominee:function(e){return!(J>=5)&&(J+1>=5&&A(!0),M((function(t){return[].concat(Object(l.a)(t),[e])})),!0)}})]})})};var de=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{id:"logo-img",alt:"movie thumbnail",src:s}),Object(i.jsx)("span",{children:"The Shoppies"})]}),Object(i.jsx)(le,{})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},me=n(137),be=Object(J.a)({palette:{primary:{light:"#FFFFFF",dark:"#cccccc",main:"#FFF"},secondary:{light:"#c8f277",main:"#95BF47",dark:"#64943E"},remove:{main:"#CF6679"},action:{disabled:"#696969",disabledBackground:"#696969"}},fontFamily:"Roboto"});o.a.render(Object(i.jsx)(me.a,{theme:be,children:Object(i.jsx)(de,{})}),document.getElementById("root")),je()}},[[91,1,2]]]);
//# sourceMappingURL=main.6478903e.chunk.js.map