(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(14),n(9)),d=n(0);function k(){return(new Date).toUTCString().slice(-12,-4)}var h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:k()},t.timerID=void 0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=window.setInterval((function(){return t.tick()}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timerID&&window.clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:k()}),console.info(this.state.date)}},{key:"render",value:function(){var t=this.state.date,e=this.props.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(u.a.Component);function v(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){return t.rename()}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})}))}},{key:"componentWillUnmount",value:function(){Object(m.clearInterval)(this.timerId)}},{key:"rename",value:function(){this.setState({clockName:v()})}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(h,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1bf1182c.chunk.js.map