"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[479],{210:function(n,e,t){t.d(e,{CK:function(){return s},Fg:function(){return p},tq:function(){return l},y_:function(){return h}});var r,a,c,o,i=t(168),u=t(444),f=t(87),p=(0,u.ZP)(f.rU)(r||(r=(0,i.Z)(["\n  display: inline-block;\n  padding: 4px 8px;\n\n  color: black;\n  background-color: #ecf1f4;\n  font-size: 24px;\n  text-decoration: none;\n\n  border-radius: 5px;\n  &:hover,\n  &:focus {\n    background-color: grey;\n    color: #fff;\n  }\n"]))),l=u.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 20px 0;\n"]))),s=u.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),h=u.ZP.p(o||(o=(0,i.Z)(["\n  font-weight: 700;\n"])))},479:function(n,e,t){t.r(e);var r=t(439),a=t(791),c=t(434),o=t(689),i=t(210),u=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],f=e[1],p=(0,o.UO)().id;return(0,a.useEffect)((function(){(0,c.Jh)(p).then((function(n){var e=n.data.results;return f(e)})).catch((function(n){return console.log(n.message)}))}),[p]),(0,u.jsx)(i.CK,{children:t.length?t.map((function(n){var e=n.author,t=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)(i.y_,{children:["Author: ",e]}),(0,u.jsx)("p",{children:t})]})})):(0,u.jsx)("h2",{children:"no reviews"})})}},434:function(n,e,t){t.d(e,{Jh:function(){return f},SY:function(){return o},_3:function(){return c},bp:function(){return u},qF:function(){return i}});var r=t(243),a={method:"GET",headers:{accept:"application/json"}};function c(){return(0,r.Z)("https://api.themoviedb.org/3/trending/all/day?api_key=819f545c7c1ea540af1ea0cb7410f83a",a)}function o(n){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=819f545c7c1ea540af1ea0cb7410f83a"),a)}function i(n){return(0,r.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=819f545c7c1ea540af1ea0cb7410f83a"),a)}function u(n){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US&api_key=819f545c7c1ea540af1ea0cb7410f83a"),a)}function f(n){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=819f545c7c1ea540af1ea0cb7410f83a"),a)}}}]);
//# sourceMappingURL=479.fe5cb3e4.chunk.js.map