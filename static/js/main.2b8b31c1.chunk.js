(this.webpackJsonpcmovie=this.webpackJsonpcmovie||[]).push([[0],{37:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),i=n.n(c),o=(n(37),n(6)),u=n(32),s=n(7),d=n.n(s),f=n(5),v=n.n(f),b=n(9),j=n(10),p=n(8),g=n.n(p),l={getConfiguration:function(){return g.a.get("/3/configuration?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd"))},getTopRatedMovies:function(){return g.a.get("/3/movie/top_rated?api_key=".concat("e1dc213ccbcaa6eadb77075160fe39dd","&language=en-US&page=1"))}};var h,m=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){n||function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getConfiguration();case 2:t=e.sent,a(t.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n},O=n(2),x=d.a.img(h||(h=Object(o.a)(["\n    h-60\n"])));var k,w,T=function(e){var t=e.movies,n=e.itemsToShow,r=void 0===n?6:n,a=e.itemPadding,c=void 0===a?20:a,i=m();return i&&Object(O.jsx)(u.a,{isRTL:!0,itemsToShow:r,itemPadding:[c],children:t.map((function(e,t){var n=i.base_url,r=i.backdrop_sizes;return Object(O.jsx)(x,{src:n+r[r.length-1]+e.backdrop_path},t)}))})},S=d.a.div(k||(k=Object(o.a)(["\n    px-12\n"]))),_=d.a.div(w||(w=Object(o.a)(["\n    text-3xl\n"])));var y=function(e){var t=e.title,n=void 0===t?"":t,r=e.movies;return Object(O.jsxs)(S,{children:[Object(O.jsx)(_,{children:n}),Object(O.jsx)(T,{movies:r})]})};var C=function(){var e=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){n||function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getTopRatedMovies();case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),n}();return Object(O.jsx)(O.Fragment,{children:e&&Object(O.jsx)(y,{title:"Top Movies",movies:e})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};g.a.interceptors.request.use((function(e){return e.url="https://api.themoviedb.org"+e.url,e}),(function(e){return Promise.reject(e)})),i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),F()}},[[74,1,2]]]);
//# sourceMappingURL=main.2b8b31c1.chunk.js.map