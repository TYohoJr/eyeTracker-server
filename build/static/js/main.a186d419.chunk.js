(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(46)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),l=(n(33),n(5)),i=n(6),u=n(10),s=n(7),p=n(9),d=(n(34),n(35),n(8)),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.props.currentPageReducer.currentPage))}}]),t}(a.Component),m=Object(d.b)(function(e){return e})(h),b=n(16),g=n(14),C=n(3),f=(n(40),n(48)),E=n(49),y=n(50),O=n(51),j=n(52),D=(n(41),n(42),n(43),0),P=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.formInputsReducer.dotSpeed),this.timerID=setInterval(function(){D===e.props.formInputsReducer.dotNumber?(D=1,e.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)}),clearInterval(e.timerID)):(e.props.dispatch({type:"changeDotLocation",topPercent:Math.floor(89*Math.random()),leftPercent:Math.floor(89*Math.random())}),D++),console.log(e.props.dotPlacementReducer.topPercent)},1e3*this.props.formInputsReducer.dotSpeed)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{id:"RandomDot",style:{height:"30px",width:"30px",borderRadius:"50%",backgroundColor:this.props.formInputsReducer.extraDotColor,display:"inline-block",position:"fixed",top:this.props.dotPlacementReducer.topPercent,left:this.props.dotPlacementReducer.leftPercent}}))}}]),t}(a.Component),k=Object(d.b)(function(e){return e})(P),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("span",{id:"centerDot",style:{height:"30px",width:"30px",borderRadius:"50%",backgroundColor:this.props.formInputsReducer.centerDotColor,display:"inline-block",position:"fixed",top:"50%",left:"50%"}}))}}]),t}(a.Component),S=Object(d.b)(function(e){return e})(v),R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).onCenterDotColorChange=e.onCenterDotColorChange.bind(Object(C.a)(e)),e.onExtraDotColorChange=e.onExtraDotColorChange.bind(Object(C.a)(e)),e.onDotSpeedChange=e.onDotSpeedChange.bind(Object(C.a)(e)),e.onRunButton=e.onRunButton.bind(Object(C.a)(e)),e.onDotNumberChange=e.onDotNumberChange.bind(Object(C.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onCenterDotColorChange",value:function(e){this.props.dispatch({type:"changeCenterDotColor",centerDotColor:e.target.value})}},{key:"onExtraDotColorChange",value:function(e){this.props.dispatch({type:"changeExtraDotColor",extraDotColor:e.target.value})}},{key:"onDotSpeedChange",value:function(e){this.props.dispatch({type:"changeDotSpeed",dotSpeed:e.target.value})}},{key:"onDotNumberChange",value:function(e){this.props.dispatch({type:"changeDotNumber",dotNumber:e.target.value})}},{key:"onRunButton",value:function(e){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(S,null)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{id:"options-form"},r.a.createElement(E.a,null,r.a.createElement(y.a,{for:"centerDotColor"},"Center Dot Color: "),r.a.createElement(O.a,{type:"select",name:"centerDotColor",onChange:this.onCenterDotColorChange},r.a.createElement("option",null,"Black"),r.a.createElement("option",null,"Red"),r.a.createElement("option",null,"Blue"),r.a.createElement("option",null,"Green"))),r.a.createElement(E.a,null,r.a.createElement(y.a,{for:"extraDotColor"},"Extra Dot Color: "),r.a.createElement(O.a,{type:"select",name:"extraDotColor",onChange:this.onExtraDotColorChange},r.a.createElement("option",null,"Red"),r.a.createElement("option",null,"Black"),r.a.createElement("option",null,"Blue"),r.a.createElement("option",null,"Green"))),r.a.createElement(E.a,null,r.a.createElement(y.a,{for:"dotSpeed"},"Dot Speed(seconds) "),r.a.createElement(O.a,{type:"number",min:"1",max:"5",step:".1",placeholder:this.props.formInputsReducer.dotSpeed,onChange:this.onDotSpeedChange})),r.a.createElement(E.a,null,r.a.createElement(y.a,{for:"dotNumber"},"Number of Cycles "),r.a.createElement(O.a,{type:"number",min:"5",max:"30",step:"1",placeholder:this.props.formInputsReducer.dotNumber,onChange:this.onDotNumberChange})),r.a.createElement(j.a,{onClick:this.onRunButton},"Run")))}}]),t}(a.Component),x=Object(d.b)(function(e){return e})(R),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).staticDots=e.staticDots.bind(Object(C.a)(e)),e.pursuits=e.pursuits.bind(Object(C.a)(e)),e.saccades=e.saccades.bind(Object(C.a)(e)),e.combination=e.combination.bind(Object(C.a)(e)),e.randomSaccades=e.randomSaccades.bind(Object(C.a)(e)),e.antisaccades=e.antisaccades.bind(Object(C.a)(e)),e.opk=e.opk.bind(Object(C.a)(e)),e.hemistim=e.hemistim.bind(Object(C.a)(e)),e.memorySaccades=e.memorySaccades.bind(Object(C.a)(e)),e.gazeStability=e.gazeStability.bind(Object(C.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"staticDots",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"pursuits",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"saccades",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"combination",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"randomSaccades",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"antisaccades",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"opk",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"hemistim",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"memorySaccades",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"gazeStability",value:function(){this.props.dispatch({type:"changeCurrentPage",currentPage:r.a.createElement(x,null)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:this.staticDots},"Static Dots"),r.a.createElement("button",{onClick:this.pursuits},"Pursuits"),r.a.createElement("button",{onClick:this.saccades},"Saccades"),r.a.createElement("button",{onClick:this.combination},"Combination Saccades & Pursuits"),r.a.createElement("button",{onClick:this.randomSaccades},"Random Saccades"),r.a.createElement("button",{onClick:this.antisaccades},"Antisaccades"),r.a.createElement("button",{onClick:this.opk},"OPK"),r.a.createElement("button",{onClick:this.hemistim},"Hemistim"),r.a.createElement("button",{onClick:this.memorySaccades},"Memory Saccades"),r.a.createElement("button",{onClick:this.gazeStability},"Gaze Stability")))}}]),t}(a.Component),w=Object(d.b)(function(e){return e})(N),I=Object(b.b)({formInputsReducer:function(e,t){switch(e||(e={centerDotColor:"Black",extraDotColor:"Red",dotSpeed:1,dotNumber:5}),t.type){case"changeCenterDotColor":return Object(g.a)({},e,{centerDotColor:t.centerDotColor});case"changeExtraDotColor":return Object(g.a)({},e,{extraDotColor:t.extraDotColor});case"changeDotSpeed":return Object(g.a)({},e,{dotSpeed:Number(t.dotSpeed)});case"changeDotNumber":return Object(g.a)({},e,{dotNumber:Number(t.dotNumber)});default:return Object(g.a)({},e)}},currentPageReducer:function(e,t){switch(e||(e={currentPage:r.a.createElement(w,null)}),t.type){case"changeCurrentPage":return Object(g.a)({},e,{currentPage:t.currentPage});default:return Object(g.a)({},e)}},dotPlacementReducer:function(e,t){switch(e||(e={topPercent:"".concat(null,"%"),leftPercent:"".concat(null,"%")}),t.type){case"changeDotLocation":return Object(g.a)({},e,{topPercent:"".concat(t.topPercent,"%"),leftPercent:"".concat(t.leftPercent,"%")});default:return Object(g.a)({},e)}}}),B=Object(b.c)(I),M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:B},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a186d419.chunk.js.map