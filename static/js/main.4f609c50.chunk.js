(this.webpackJsonpStockify=this.webpackJsonpStockify||[]).push([[0],{105:function(e,t,n){e.exports=n(176)},176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),l=n(37),c=n.n(l),i=n(51),u=n(13),m=n(14),h=n(16),b=n(15),p=n(17),d=n(43),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleOnChange=function(e){n.props.onChange(e)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-dark"},r.a.createElement(d.b,{className:"w-100",to:"/symbols"},r.a.createElement("input",{onChange:this.handleOnChange,type:"text",className:"text-dark w-100 rounded border-0 m-1 p-2 h5",placeholder:"Search for stocks"})))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.quote;return r.a.createElement("div",null,r.a.createElement("h5",null,e.companyName),r.a.createElement("span",{className:"badge badge-primary"},e.primaryExchange),r.a.createElement("strong",{className:"text-muted ml-2"},e.symbol),r.a.createElement("span",{className:"text-center h4 p-2"},e.latestPrice.toFixed(2)),r.a.createElement("span",{className:"text-center h5 p-2"},this.formatChangePercent()),r.a.createElement("span",{className:"text-center h6"},this.formatChange()))}},{key:"formatChangePercent",value:function(){var e=this.props.quote,t=e.changePercent>0?100*e.changePercent:-1*e.changePercent*100;return e.changePercent<0?r.a.createElement("span",{className:"text-danger"},t.toFixed(2)):r.a.createElement("span",{className:"text-success"},t.toFixed(2))}},{key:"formatChange",value:function(){var e=this.props.quote;return e.change<0?r.a.createElement("span",{className:"text-secondary"},"("+-1*e.change.toFixed(2)+"\u25bc)"):r.a.createElement("span",{className:"text-secondary"},"("+e.change.toFixed(2)+"\u25b2)")}}]),t}(a.Component),g=n(104),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).popupDelete=function(e){console.log("popup");n.setState({alert:r.a.createElement(g.a,{warning:!0,showCancel:!0,confirmBtnText:"Yes, delete it!",confirmBtnBsStyle:"danger",title:"Are you sure?",onConfirm:function(){return n.deleteStock(e)},onCancel:function(){return n.cancelDelete()}},"Do you want to delete ",e.symbol," from watchlist?")})},n.deleteStock=function(e){var t=JSON.parse(localStorage.getItem("symbols")),a=t.indexOf(e.symbol);t.splice(a,1),console.log(t),localStorage.setItem("symbols",JSON.stringify(t)),n.setState({alert:null}),n.fetchQuotes()},n.fetchQuotes=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({quotes:[]}),e.next=4,n.getWatchList().forEach((function(e){fetch(n.buildQuoteUrl(e)).then((function(e){return e.json()})).then(n.buildQuotesList).catch()}));case 4:return e.next=6,v(5e3);case 6:e.next=0;break;case 8:case"end":return e.stop()}}),e)}))),n.getWatchList=function(){var e=JSON.parse(localStorage.getItem("symbols"));return console.log(e),0===(e?e.length:0)&&(e=Array()),e},n.buildQuoteUrl=function(e){return x+"stock/"+e+"/quote"+C},n.buildQuote=function(e){n.setState({quote:e})},n.buildQuotesList=function(e){var t=n.state.quotes;t.push(e),n.setState({quotes:t})},n.state={quotes:[],alert:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"m-2 pt-300 list-group"},this.state.quotes.sort((function(e,t){return e.symbol.localeCompare(t.symbol)})).map((function(t){return r.a.createElement("li",{key:t.symbol,id:t.symbol,className:"list-group-item btn-light",onClick:function(){return e.popupDelete(t)}},r.a.createElement(f,{quote:t}))}))),this.state.alert)}},{key:"cancelDelete",value:function(){this.setState({alert:null})}},{key:"componentDidMount",value:function(){this.fetchQuotes()}}]),t}(a.Component),k=n(52),E=(n(115),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={symbol:n.props.symbol,name:n.props.name},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,this.state.symbol),r.a.createElement("h6",null,this.state.name))}}]),t}(a.Component)),S=n(75),j=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={symbols:n.props.symbols},n.handleSymbolClick=function(e){var t=JSON.parse(localStorage.getItem("symbols")),a=t?t.length:0;a>0?t.includes(e)||(t[a]=e):t=Array(e),localStorage.setItem("symbols",JSON.stringify(t)),n.handleBack()},n.handleBack=n.handleBack.bind(Object(k.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:""},r.a.createElement(S.a,{style:{width:"75%",height:"calc(100vh - 65px)"}},(function(t){var n=t.width,a=t.height;return r.a.createElement("ul",{className:"list-group"},r.a.createElement(S.b,{rowCount:e.state.symbols.length,width:n,height:a,rowHeight:84,rowRenderer:e.rowRenderer.bind(e),overscanRowCount:3}))})))}},{key:"rowRenderer",value:function(e){var t=this,n=e.key,a=e.index,o=(e.isScrolling,e.isVisible,e.style),s=this.state.symbols[a];return r.a.createElement("div",{onClick:function(){return t.handleSymbolClick(s.symbol)},className:"m-2 ",key:n,style:o},r.a.createElement("li",{className:"list-group-item btn-light",style:{width:"calc(100% - 15px)"}},r.a.createElement(E,{symbol:s.symbol,name:s.name})))}},{key:"handleBack",value:function(){this.props.history.goBack()}}]),t}(a.Component),w=n(28),x="https://cloud.iexapis.com/stable/",C="?token=pk_5e8577fd11eb4469be629c5e2de8023f",N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={symbols:[],symbolsFiltered:[],searchBox:""},n.fetchSymbols=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.buildSymbolsUrl());case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.length),n.buildSymbolsList(a),n.buildSymbolsFilteredList(a);case 9:case"end":return e.stop()}}),e)}))),n.buildSymbolsList=function(e){n.setState({symbols:e})},n.buildSymbolsUrl=function(){return x+"ref-data/symbols"+C},n.handleOnChange=function(e){var t=e.target.value.toLowerCase();n.setState({searchBox:e});var a=n.state.symbols.filter((function(e){return e.name.toLowerCase().includes(t)}));n.buildSymbolsFilteredList(a)},n.buildSymbolsFilteredList=function(e){n.setState({symbolsFiltered:e})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"pt-70"},r.a.createElement(y,{onChange:this.handleOnChange}),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/symbols",component:function(t){return r.a.createElement(j,Object.assign({},t,{symbols:e.state.symbolsFiltered}))}}),r.a.createElement(w.a,{path:"/",component:O}))))}},{key:"componentDidMount",value:function(){this.fetchSymbols()}},{key:"componentWillMount",value:function(){document.body.style.paddingTop="65px"}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.4f609c50.chunk.js.map