(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),s=a.n(i),u=(a(16),a(3)),c=a(4),l=a(6),o=a(5),d=a(7),m=a(1),h=a(9),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).createTasks=a.createTasks.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"createTasks",value:function(e){var t=this;return r.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key},e.text," - ",e.number)}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("ul",{className:"theList"},r.a.createElement(h.a,{duration:250,easing:"ease-out"},e))}}]),t}(n.Component),p=(a(18),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={items:[],inputNum:"",inputVal:""},a.addItem=a.addItem.bind(Object(m.a)(Object(m.a)(a))),a.deleteItem=a.deleteItem.bind(Object(m.a)(Object(m.a)(a))),a.addNumbers=a.addNumbers.bind(Object(m.a)(Object(m.a)(a))),a.onInputChange=a.onInputChange.bind(Object(m.a)(Object(m.a)(a))),a.handleTest=a.handleTest.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"addItem",value:function(){if(""!==this.state.inputVal){var e={text:this.state.inputVal,key:Date.now(),number:this.state.inputNum};this.setState(function(t){return{items:t.items.concat(e),inputVal:""}})}console.log(this.state.items)}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"addNumbers",value:function(e){for(var t=0,a=0;a<e.length;a++)t+=Number(e[a]);var n=t.toString();return n.length>1?this.addNumbers(n):n}},{key:"handleTest",value:function(e){var t={};t.a=t.i=t.j=t.q=t.y=1,t.b=t.k=t.r=2,t.c=t.g=t.l=t.s=3,t.d=t.m=t.t=4,t.e=t.h=t.n=t.x=5,t.u=t.v=t.w=6,t.o=t.z=7,t.f=t.p=8;var a=e.target.value.toLowerCase();if(13==e.keyCode||13==e.charCode){this.addItem(),a=(a=a.replace(/\s/g,"")).replace(/[^a-z]/gi,"");for(var n=0,r=0;r<a.length;r++)n+=t[a[r]];this.setState({inputVal:e.target.value,inputNum:this.addNumbers(n.toString())})}}},{key:"onInputChange",value:function(e){var t={};t.a=t.i=t.j=t.q=t.y=1,t.b=t.k=t.r=2,t.c=t.g=t.l=t.s=3,t.d=t.m=t.t=4,t.e=t.h=t.n=t.x=5,t.u=t.v=t.w=6,t.o=t.z=7,t.f=t.p=8;var a=e.target.value.toLowerCase();a=(a=a.replace(/\s/g,"")).replace(/[^a-z]/gi,"");for(var n=0,r=0;r<a.length;r++)n+=t[a[r]];this.setState({inputVal:e.target.value,inputNum:this.addNumbers(n.toString())})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"todoListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,this.state.inputNum),r.a.createElement("input",{value:this.state.inputVal.toUpperCase(),onChange:function(t){e.onInputChange(t)},onKeyPress:this.handleTest,placeholder:"enter name"}),r.a.createElement("button",{onClick:function(){return e.addItem()}},"add")),r.a.createElement(b,{entries:this.state.items,delete:this.deleteItem}))}}]),t}(n.Component)),v=document.querySelector("#container");s.a.render(r.a.createElement("div",null,r.a.createElement(p,null)),v)}},[[10,2,1]]]);
//# sourceMappingURL=main.55319d70.chunk.js.map