(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=(a(15),a(9)),i=a(1),l=a(2),u=a(4),h=a(3),d=a(5),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.handleMoreClick=function(e){e.preventDefault(),a.setState({visible:!0})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.author,a=e.text,n=e.bigText,c=this.state.visible;return console.log("render",this),r.a.createElement("div",{className:"article"},r.a.createElement("p",{className:"news__author"},t,":"),r.a.createElement("p",{className:"news__text"},a),!c&&r.a.createElement("a",{href:"#sasa",className:"news__redMore",onClick:this.handleMoreClick},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),c&&r.a.createElement("p",{className:"news__big-text"},n))}}]),t}(r.a.Component),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderNews=function(){return a.props.data.length?a.props.data.map((function(e){return r.a.createElement(m,{key:e.id,data:e})})):r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0435\u0442")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"news"},this.renderNews(),e.length?r.a.createElement("strong",{onClick:this.handlerNewsCountClick},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439:  ",e.length):null)}}]),t}(r.a.Component),g=(a(16),a(8)),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",text:"",bigText:"",checked:!1},a.onInputChangeHandler=function(e){a.setState(Object(g.a)({},e.currentTarget.id,e.currentTarget.value))},a.onCheckboxChangeHandler=function(e){a.setState({checked:e.currentTarget.checked})},a.validate=function(){return!!(a.state.checked&&a.state.name.trim()&&a.state.text.trim())},a.onBtnClickHandler=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.text,c=t.bigText;console.log(n,r,c),a.props.onAddNews({id:+new Date,author:n,text:r,bigText:c})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"add"},r.a.createElement("input",{className:"add__author",name:"author",id:"name",type:"text",placeholder:"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f",value:this.state.name,onChange:this.onInputChangeHandler}),r.a.createElement("textarea",{className:"add__text",name:"text",id:"text",type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438",value:this.state.text,onChange:this.onInputChangeHandler}),r.a.createElement("textarea",{className:"add__text",name:"bigText",id:"bigText",type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",value:this.state.bigText,onChange:this.onInputChangeHandler}),r.a.createElement("label",{className:"add__label",htmlFor:"agree"},"\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438",r.a.createElement("input",{type:"checkbox",name:"agree",onChange:this.onCheckboxChangeHandler,id:"agree"})),r.a.createElement("button",{type:"button",className:"add__button",disabled:!this.validate(),onClick:this.onBtnClickHandler},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))}}]),t}(r.a.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={news:null,isLoading:!1},a.handleAddNews=function(e){var t=[e].concat(Object(o.a)(a.state.news));a.setState({news:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("http://localhost:3000/data/newsData.json").then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.setState({isLoading:!1,news:t})}),3e3)}))}},{key:"render",value:function(){return console.log(this.state.news),r.a.createElement("div",null,r.a.createElement(b,{onAddNews:this.handleAddNews}),r.a.createElement("h3",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),this.state.isLoading&&r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."),Array.isArray(this.state.news)&&r.a.createElement(p,{data:this.state.news}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(Array.isArray(t.news)){var a=t.news;return console.log(a),a.forEach((function(e){e.bigText.toLowerCase().includes("pubg")&&(e.bigText="\u0421\u041f\u0410\u041c")})),{news:a}}return null}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.abca41f0.chunk.js.map