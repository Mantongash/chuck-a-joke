(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),a=n(4),s=n.n(a),i=(n(14),n(5)),h=n(6),j=n(2),u=n(8),l=n(7),d=(n(15),n(16),n.p+"static/media/Norris.9fed69a2.png");var k=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("img",{src:d,alt:"Chuck Norris Picture",className:"norris"}),Object(c.jsx)("h1",{className:"heading",children:"CHUCK a JOKE"}),Object(c.jsx)("p",{className:"subheading",children:"Filter Chuck Norris Jokes by category."})]})};n(17);var f=function(e){var t=e.joke;return Object(c.jsx)("div",{className:"randomJoke",children:Object(c.jsxs)("div",{className:"quotedJoke",children:[Object(c.jsx)("div",{className:"quotation"}),Object(c.jsx)("p",{className:"joke",children:t})]})})};n(18);var b=function(e){var t=e.category,n=e.handleClickCategory;return e.jokes,Object(c.jsx)("p",{className:"category",onClick:function(){return n(t)},children:t})};var g=function(e){var t=e.categories,n=e.handleClickCategory,o=e.jokes;return t.map((function(e,t){return Object(c.jsx)(b,{category:e,className:"category",handleClickCategory:n,jokes:o,tabIndex:t},t)}))};n(19);var O=function(e){var t=e.jokes;return Object(c.jsx)("p",{className:"jokes",children:t})};n(20);var m=function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["\xa9 2020 - Crafted with \u2665 by ",Object(c.jsx)("a",{href:"https://www.github.com/Mantongash",children:"Anthony Ng'ang'a"})]})})},v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={randomJoke:"",categories:[],jokes:""},c.fetchRandomQuote=c.fetchRandomQuote.bind(Object(j.a)(c)),c.fetchCategories=c.fetchCategories.bind(Object(j.a)(c)),c.fetchJokes=c.fetchJokes.bind(Object(j.a)(c)),c.handleClickCategory=c.handleClickCategory.bind(Object(j.a)(c)),c}return Object(h.a)(n,[{key:"fetchCategories",value:function(){var e=this;return fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){return e.setState({categories:t})}))}},{key:"fetchRandomQuote",value:function(){var e=this;return fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){return e.setState({randomJoke:t.value})}))}},{key:"fetchJokes",value:function(e){var t=this,n="https://api.chucknorris.io/jokes/random?category=".concat(e);return fetch(n).then((function(e){return e.json()})).then((function(e){return t.setState({jokes:e.value})}))}},{key:"handleClickCategory",value:function(e){this.fetchJokes(e),console.log(e)}},{key:"componentDidMount",value:function(){this.fetchRandomQuote(),this.fetchCategories(),this.fetchJokes("animal")}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(k,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(f,{joke:this.state.randomJoke}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{children:Object(c.jsx)(g,{categories:this.state.categories,handleClickCategory:this.handleClickCategory,jokes:this.state.jokes})}),Object(c.jsx)(O,{jokes:this.state.jokes})]})]}),Object(c.jsx)(m,{})]})}}]),n}(o.Component);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c86c27c4.chunk.js.map