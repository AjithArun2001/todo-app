(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{30:function(t,e,o){t.exports=o(58)},35:function(t,e,o){},58:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(27),c=o.n(r),l=o(16),i=o(5),s=o(6),d=o(7),u=o(8),p=o(10),m=o(1);o(35);function h(){return n.a.createElement("header",{style:f},n.a.createElement("h1",null,"TodoList"),n.a.createElement(p.b,{className:"link",to:"/"},"Home"),"  ","|","  ",n.a.createElement(p.b,{className:"link",to:"/about"},"About"))}var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),"  ",o,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x")))}}]),o}(a.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=b,g=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return n.a.createElement(y,{key:e.id,todo:e,delTodo:t.props.delTodo,markComplete:t.props.markComplete})}))}}]),o}(a.Component);function E(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a react crash course."))}var k=o(29),j=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={title:""},t.onChange=function(e){return t.setState(Object(k.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,style:{flex:"10",padding:"5px"},onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(a.Component),O=o(11),T=o.n(O),x=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={totalTodos:11,todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){t.setState({totalTodos:t.state.totalTodos+1}),T.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){e.data.id=t.state.totalTodos,t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(h,null),n.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{addTodo:t.addTodo}),n.a.createElement(g,{todos:t.state.todos,delTodo:t.delTodo,markComplete:t.markComplete}))}}),n.a.createElement(m.a,{path:"/about",component:E}))))}}]),o}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.68bb66a1.chunk.js.map