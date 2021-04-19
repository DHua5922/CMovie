(this.webpackJsonpcmovie=this.webpackJsonpcmovie||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),o=n.n(r),i=(n(81),n(82),n(83),n(17)),u=n(21),s=n(14),p=n.n(s),j=n(28),b=n(29),d=n(24),l=n.n(d),v={getConfiguration:function(){return l.a.get("/3/configuration?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd"))},getTopRatedMovies:function(){return l.a.get("/3/movie/top_rated?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd","&language=en-US&page=1"))},getPopularMovies:function(){return l.a.get("/3/movie/popular?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd","&language=en-US&page=1"))},getNowPlayingMovies:function(){return l.a.get("/3/movie/now_playing?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd","&language=en-US&page=1"))},searchMovies:function(e){return l.a.get("/3/search/movie?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd","&language=en-US&query=").concat(e,"&page=1"))}};function f(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){n||function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getConfiguration();case 2:t=e.sent,a(t.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n}function O(e,t){var n=e.backdrop_sizes,c=e.base_url,a=t.backdrop_path;return Object(i.a)(Object(i.a)({},t),{},{backdrop_path:c+n[n.length-1]+a,hasImage:!!a})}var h,m,x=n(66),g=n.n(x),w=(n(114),n(27)),y=n.n(w),k=n(4),P=y.a.div(h||(h=Object(u.a)(["\n    shadow-md\n    cursor-pointer\n"]))),S=y.a.div(m||(m=Object(u.a)(["\n    text-center\n"])));var _=function(e){var t=e.title,n=e.backdrop_path,c=e.onClick;return Object(k.jsxs)(P,{onClick:c,children:[Object(k.jsx)("img",{src:n,alt:""}),Object(k.jsx)(S,{children:t})]})},C=n(9),I="UPDATE_SEARCH_INPUT",M="CLOSE_POPUP",N="OPEN_POPUP",E={openPopup:function(e){return{type:N,payload:e}},closePopup:function(){return{type:M}}};var R,T=function(e){var t=e.movies,n=f(),c=Object(C.b)();return n&&Object(k.jsx)(g.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},children:t.map((function(e,t){var a=O(n,e);return Object(k.jsx)("div",{className:"my-2 mx-3",children:Object(k.jsx)(_,Object(i.a)(Object(i.a)({},a),{},{onClick:function(){return c(E.openPopup(a))}}))},t)}))})},U=y.a.div(R||(R=Object(u.a)(["\n    text-3xl\n    pb-3\n"])));var F=function(e){var t=e.title,n=void 0===t?"":t,c=e.movies;return Object(k.jsxs)("div",{className:"pt-3",children:[Object(k.jsx)(U,{children:n}),Object(k.jsx)(T,{movies:c})]})},q=n(50);var B,H=function(){return Object(k.jsx)(q.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(k.jsx)(q.a.Brand,{href:"/CMovie",children:"CMovie"})})},D=n(138),L={updateSearchInput:function(e){return{type:I,payload:e}}},A=n(7),J=y.a.input(B||(B=Object(u.a)(["\n    focus:border-0\n    w-full\n    focus:outline-none\n    shadow-md\n    rounded-3xl\n    px-4\n    py-2\n"])));function z(){var e=Object(A.f)(),t=Object(C.c)((function(e){return e.searchReducer})).input;return function(n){n.preventDefault(),e.push("/search?query=".concat(t))}}var G=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.searchReducer})).input;return Object(k.jsx)(D.a,{onSubmit:z(),children:Object(k.jsx)(J,{placeholder:"Search movies...",onChange:function(t){return e(L.updateSearchInput(t.target.value))},value:t})})},K=n(73),Q=n(137);var V=function(e){var t=e.show,n=e.onHide,c=e.movieInfo,a=e.hasImage,r=c.title,o=c.backdrop_path,i=c.overview;return Object(k.jsxs)(Q.a,{show:t,onHide:n,centered:!0,children:[Object(k.jsx)(Q.a.Header,{closeButton:!0,children:Object(k.jsx)(Q.a.Title,{children:r})}),Object(k.jsxs)(Q.a.Body,{children:[Object(k.jsx)("img",{className:a?"pb-3":"pb-0",src:o,alt:""}),Object(k.jsx)("div",{children:i})]})]})},W=n(70);var X,Y=function(e){var t=e.title;return Object(k.jsx)(W.a,{children:Object(k.jsx)("title",{children:t})})},Z=K.a.div(X||(X=Object(u.a)(["\n    padding: 30px 8vw;\n"])));var $=function(e){return function(t){var n=t.title,c=Object(C.b)(),a=Object(C.c)((function(e){return e.popupReducer})),r=a.movieInfo,o=a.show;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y,{title:n}),Object(k.jsx)(H,{}),Object(k.jsxs)(Z,{children:[Object(k.jsx)(G,{}),Object(k.jsx)(e,{})]}),Object(k.jsx)(V,{show:o,onHide:function(){return c(E.closePopup())},movieInfo:r,hasImage:r.hasImage})]})}};function ee(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){n||function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getTopRatedMovies();case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n}function te(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){n||function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getPopularMovies();case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n}function ne(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){n||function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getNowPlayingMovies();case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n}function ce(){var e=[{title:"Top Movies",movies:ee()},{title:"Popular Movies",movies:te()},{title:"Now Playing",movies:ne()}];return Object(k.jsx)("div",{className:"px-8 pt-2",children:e.map((function(e){return Object(k.jsx)(k.Fragment,{children:e.movies&&Object(k.jsx)(F,Object(i.a)({},e))})}))})}var ae=function(){var e=$(ce);return Object(k.jsx)(e,{title:"CMovie"})},re=n(45),oe=n(49),ie=n.n(oe),ue=n(136),se=n(68);function pe(){var e=ie.a.parse(window.location.search).query,t=Object(C.b)();t(L.updateSearchInput(e));var n=function(e){var t=Object(c.useState)(null),n=Object(b.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){a||function(){var t=Object(j.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.searchMovies(e);case 2:n=t.sent,r(n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[a,e]),a}(e),a=f();return Object(k.jsx)(ue.a,{className:"px-12",children:a&&n&&n.map((function(e,n){var c=O(a,e);return Object(k.jsx)(se.a,{xs:"12",sm:"6",md:"4",lg:"3",className:"p-4",children:Object(k.jsx)(_,Object(i.a)(Object(i.a)({},c),{},{onClick:function(){return t(E.openPopup(c))}}))},n)}))})}var je=function(){var e=$(pe),t=ie.a.parse(window.location.search).query;return Object(k.jsx)(e,{title:"".concat(t," - ").concat("CMovie")})};var be=function(){return Object(k.jsx)(re.a,{basename:"/CMovie",children:Object(k.jsxs)(A.c,{children:[Object(k.jsx)(A.a,{exact:!0,path:"/",component:ae}),Object(k.jsx)(A.a,{path:"/search",component:je})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};l.a.interceptors.request.use((function(e){return e.url="https://api.themoviedb.org"+e.url,e}),(function(e){return Promise.reject(e)}));var le=n(31),ve={input:""};var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===I?{input:c}:e},Oe={show:!1,movieInfo:{title:"",backdrop_path:"",overview:""}};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type;return n===M?{show:!1,movieInfo:e.movieInfo}:n===N?{show:!0,movieInfo:t.payload}:e},me=Object(le.b)({searchReducer:fe,popupReducer:he}),xe=Object(le.c)(me);o.a.render(Object(k.jsxs)(a.a.StrictMode,{children:[Object(k.jsx)(C.a,{store:xe,children:Object(k.jsx)(be,{})}),","]}),document.getElementById("root")),de()},81:function(e,t,n){},82:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.fa883b2f.chunk.js.map