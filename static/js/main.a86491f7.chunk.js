(this["webpackJsonpflipt-ed"]=this["webpackJsonpflipt-ed"]||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){},177:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var c,a,r,s,i=n(4),o=n(140),l=n.n(o),u=(n(167),n(8)),d=n(144),j=n(155),b=n(212),h=n(18),O=n(13),g=(n(168),n(23)),x=n.n(g),m=n(37),p=(n(170),n(69)),f=Object(h.gql)(c||(c=Object(p.a)(["\n  {\n    courses {\n      id  \n      name\n    }\n  }\n"]))),v=Object(h.gql)(a||(a=Object(p.a)(["\n  mutation AddCourse($name: String!){\n    addCourse(\n      name: $name\n    ){\n      name\n    }\n  }\n"]))),S=Object(h.gql)(r||(r=Object(p.a)(["\n  mutation DeleteCourse($id: String!){\n    deleteCourse(\n      id: $id\n    )\n  }\n"]))),k=Object(h.gql)(s||(s=Object(p.a)(["\n  query getTask($id: String!){\n    task(taskId: $id){\n      id\n      name\n      instructions\n      points\n      startAt\n      endAt\n      dueDate\n      parentMissionId\n      parentMissionIndex\n      objectiveId\n      pages {\n        blocks {\n          title\n          ... on ImageBlock {\n            imageUrl\n          }\n          ... on TextBlock {\n            contents\n            fontSize\n          }\n          ... on VideoBlock {\n            videoUrl\n          }        \n        }\n      }\n    }\n  }\n"]))),y=n(2);var C=function(){var e=Object(h.useQuery)(f),t=e.loading,n=e.error,c=e.data,a=e.refetch,r=Object(i.useState)(""),s=Object(u.a)(r,2),o=s[0],l=s[1],d=Object(h.useMutation)(v),j=Object(u.a)(d,1)[0],b=Object(h.useMutation)(S),O=Object(u.a)(b,1)[0],g=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{j({variables:{name:o}}).then((function(e){l(""),a(),alert("Course Created")}))}catch(n){console.error(n),alert("Error!")}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){console.log(e.target.attributes.courseid);try{O({variables:{id:e.target.attributes.courseid.value}}).then((function(e){a(),alert("Course Deleted")}))}catch(t){console.error(t),alert("Error!")}};return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"MY COURSES"}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"column",children:Object(y.jsx)("ul",{children:function(e,t,n){return e?Object(y.jsx)("p",{children:"Loading..."}):t?(console.log(t),Object(y.jsx)("p",{children:"Error :("})):n.courses.map((function(e){var t=e.id,n=e.name;return Object(y.jsx)("div",{className:"courseItem",children:Object(y.jsxs)("ul",{children:[n,Object(y.jsx)("button",{className:"deleteButton",courseid:t,onClick:p,children:"Delete"})]})},t)}))}(t,n,c)})}),Object(y.jsx)("div",{className:"column",children:Object(y.jsxs)("form",{onSubmit:g,children:[Object(y.jsx)("h3",{children:"Add Course"}),Object(y.jsx)("label",{className:"courseInput",children:" Name: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:o,onChange:function(e){return l(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"submitbutton",children:"Submit"})]})})]})]})},w=n(61);n(177);var N=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),r=Object(u.a)(a,2),s=r[0],o=r[1],l=Object(i.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(i.useState)([]),O=Object(u.a)(h,2),g=O[0],x=O[1],m=Object(i.useState)([]),p=Object(u.a)(m,2),f=p[0],v=p[1],S=Object(i.useState)(""),k=Object(u.a)(S,2),C=k[0],N=k[1],I=Object(i.useState)(""),A=Object(u.a)(I,2),T=A[0],G=A[1],B=Object(i.useState)(""),L=Object(u.a)(B,2),E=L[0],F=L[1],_=Object(i.useState)([{id:"0",name:"Goal 1",done:!1,starred:!1,goal:"Just do it.",duedate:"00/00/00",tags:["tag1","tag2"],owner:"testuser",assignee:"testuser",open:!1,subgoals:[{id:"0",name:"SubGoal 1",done:!1,goal:"Just do it.",duedate:"00/00/00"},{id:"1",name:"SubGoal 2",done:!0,goal:"Inspiring text",duedate:"00/00/00"},{id:"2",name:"SubGoal 3",done:!1,goal:"Yet another task",duedate:"00/00/00"}]},{id:"1",name:"Goal 2",done:!1,starred:!0,goal:"Just do it.",duedate:"00/00/00",tags:["tag2","tag3"],owner:"testuser",assignee:"testuser",open:!0,subgoals:[{id:"0",name:"SubGoal 1",done:!1,goal:"Just do it.",duedate:"00/00/00"},{id:"1",name:"SubGoal 2",done:!0,goal:"Inspiring text",duedate:"00/00/00"},{id:"2",name:"SubGoal 3",done:!1,goal:"Yet another task",duedate:"00/00/00"}]},{id:"2",name:"Goal 3",done:!1,starred:!1,goal:"Just do it.",duedate:"00/00/00",tags:["tag2","tag3"],owner:"testuser",assignee:"testuser",open:!0,subgoals:[{id:"0",name:"SubGoal 1",done:!1,goal:"Just do it.",duedate:"00/00/00"},{id:"1",name:"SubGoal 2",done:!1,goal:"Inspiring text",duedate:"00/00/00"},{id:"2",name:"SubGoal 3",done:!1,goal:"Yet another task",duedate:"00/00/00"}]}]),M=Object(u.a)(_,2),U=M[0],P=M[1],D=Object(i.useState)(H()),J=Object(u.a)(D,2),q=J[0],z=J[1],Y=Object(i.useState)(!1),R=Object(u.a)(Y,2),$=R[0],Q=R[1],V=function(e){e.preventDefault(),P([].concat(Object(w.a)(U),[{id:U.length,name:n,done:!1,starred:!1,goal:s,duedate:"00/00/00",tags:g,owner:"testuser",assignee:"testuser",open:!1,subgoals:f}])),U.push({id:U.length,name:n,done:!1,starred:!1,goal:s,duedate:"00/00/00",tags:g,owner:"testuser",assignee:"testuser",open:!1,subgoals:f}),c(""),o(""),x([]),v([]),z((function(){return H()})),Q(!1)};function H(){for(var e=new Set,t=0;t<U.length;t++)for(var n=0;n<U[t].tags.length;n++)e.add(U[t].tags[n]);return Array.from(e)}function W(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"button",className:"dropdownArrowButton",onClick:function(){return c(!n)},children:"v"}),Object(y.jsx)("br",{}),n?Object(y.jsx)(K,{}):null]})}function K(){return Object(y.jsx)("div",{children:q.map((function(e,t){return Object(y.jsx)("button",{type:"button",className:"dropdownItem",onClick:function(){return F(e)},children:e},t)}))})}function Z(){x(g.concat(j)),b("")}function X(){v([].concat(Object(w.a)(f),[{id:f.length,name:C,done:!1,goal:"n/a",duedate:T}])),N(""),G("")}function ee(e){return e.g.subgoals.map((function(t){return Object(y.jsx)(ae,{sg:t,goalId:e.g.id},t.id)}))}function te(e){return Object(y.jsxs)("div",{className:"goal",children:[Object(y.jsxs)("div",{className:"goalGrid",children:[Object(y.jsx)("button",{className:"arrowButton",onClick:function(){return t=e.g.id,U[t].open=!U[t].open,void P(Object(w.a)(U));var t},children:e.g.open?"v":">"}),Object(y.jsx)("h1",{children:e.g.name}),Object(y.jsx)("button",{className:"checkButton",courseid:e.g.id,onClick:function(){return t=e.g.id,U[t].starred=!U[t].starred,void P(Object(w.a)(U));var t},children:e.g.starred?"\u2b50":""})]}),e.g.open?Object(y.jsx)(ee,{g:e.g}):null]})}function ne(){return U.filter((function(e){var t=e.tags,n=e.starred;return(t.includes(E)||""===E)&&n})).map((function(e){return Object(y.jsx)(te,{g:e},e.id)}))}function ce(){return U.filter((function(e){var t=e.tags,n=e.starred;return(t.includes(E)||""===E)&&!n})).map((function(e){return Object(y.jsx)(te,{g:e},e.id)}))}function ae(e){return Object(y.jsxs)("div",{className:e.sg.done?"subGoalDone":"subGoal",children:[Object(y.jsx)("h1",{children:e.sg.name}),Object(y.jsx)("p",{children:"due: "+e.sg.duedate}),Object(y.jsx)("button",{className:"checkButton",courseid:e.sg.id,onClick:function(){return t=e.goalId,n=e.sg.id,U[t].subgoals[n].done=!U[t].subgoals[n].done,void P(Object(w.a)(U));var t,n},children:e.sg.done?"\u2705":""})]})}function re(){return Object(y.jsxs)("form",{"data-testid":"test2",className:"newGoalForm",onSubmit:V,children:[Object(y.jsx)("h3",{children:"Add Goal"}),Object(y.jsx)("label",{className:"textInput",children:" Name: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{className:"textInput",children:" Goal: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:s,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{className:"textInput",children:" Tag: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:j,onChange:function(e){return b(e.target.value)}}),Object(y.jsx)("button",{type:"button",onClick:Z,children:"add tag"}),Object(y.jsx)("div",{children:g.map((function(e,t){return Object(y.jsx)("p",{children:e},t)}))}),Object(y.jsx)("label",{className:"textInput",children:" Subgoal: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:C,onChange:function(e){return N(e.target.value)}}),Object(y.jsx)("label",{className:"textInput",children:" Due date: "}),Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:T,onChange:function(e){return G(e.target.value)}}),Object(y.jsx)("button",{type:"button",onClick:X,children:"add subgoal"}),Object(y.jsx)("div",{children:f.map((function(e,t){return Object(y.jsx)("p",{children:e.name},t)}))}),Object(y.jsx)("button",{type:"submit",className:"submitbutton",children:"Submit"})]})}function se(){return Object(y.jsxs)("div",{className:"mainContainer",children:[Object(y.jsx)("h1",{"data-testid":"test1",className:"pageTitle",children:"Goals"}),Object(y.jsx)("button",{type:"button",className:"newGoalButton",onClick:function(){return Q(!0)},children:"New Goal"}),Object(y.jsxs)("div",{className:"filterBar",children:[Object(y.jsx)("h3",{children:"Filter by tag:"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",value:E,onChange:function(e){return F(e.target.value)}}),Object(y.jsx)(W,{})]})]}),Object(y.jsx)(ne,{}),Object(y.jsx)(ce,{})]})}function ie(){return Object(y.jsx)("div",{className:"popupContainer",children:Object(y.jsxs)("div",{className:"newGoalForm",children:[Object(y.jsx)(re,{}),Object(y.jsx)("button",{type:"button",onClick:function(){return Q(!1)},children:"close"})]})})}return Object(y.jsx)("div",{className:"mainGoalsPage",children:$?Object(y.jsx)(ie,{},"form"):Object(y.jsx)(se,{},"goals")})};n(72);var I=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=(t[0],t[1]),c=function(e){n(e.target.value)},a=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Submitted!");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"MULTIPLE CHOICE QUIZ"}),Object(y.jsxs)("div",{className:"chunk",children:[Object(y.jsx)("h2",{children:"What is the meaning of life?"}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"radio",value:"A1",id:"A1",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A1",children:"Yes"}),Object(y.jsx)("input",{type:"radio",value:"A2",id:"A2",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A2",children:"No"}),Object(y.jsx)("input",{type:"radio",value:"A3",id:"A3",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A3",children:"Maybe"}),Object(y.jsx)("input",{type:"radio",value:"A4",id:"A4",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A4",children:"I don't know"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:a,children:"Submit"})})]})]})};var A=function(){var e,t=Object(i.useState)(""),n=Object(u.a)(t,2),c=(n[0],n[1]),a=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Submitted!");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"column",children:[Object(y.jsx)("h1",{children:"FILL-IN-THE-BLANK"}),Object(y.jsxs)("div",{className:"chunk",children:[Object(y.jsx)("h2",{children:"There are ___ Corners and ___ sides on a triangle. This is a ___."}),Object(y.jsxs)("form",{onSubmit:a,children:[Object(y.jsx)("ul",{children:(e=[{myname:"B1"},{myname:"B1"},{myname:"B1"}],e.map((function(e){var t=e.name;return Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:t,onChange:function(e){return c(e.target.value)}})})))}),Object(y.jsx)("button",{type:"submit",className:"submitbutton",children:"Submit"})]})]})]})};var T=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Submitted!");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"FREE RESPONSE"}),Object(y.jsxs)("div",{className:"chunk",children:[Object(y.jsx)("h2",{children:"Write an essay on Shakespeare"}),Object(y.jsxs)("form",{onSubmit:a,children:[Object(y.jsx)("input",{type:"text",id:"cname",name:"cname",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"submitbutton",children:"Submit"})]})]})]})};var G=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=(t[0],t[1]),c=function(e){n(e.target.value)},a=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Submitted!");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"MULTI-SELECT QUIZ"}),Object(y.jsxs)("div",{className:"chunk",children:[Object(y.jsx)("h2",{children:"What is the meaning of life?"}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"checkbox",value:"A1",id:"A1",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A1",children:"Yes"}),Object(y.jsx)("input",{type:"checkbox",value:"A2",id:"A2",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A2",children:"No"}),Object(y.jsx)("input",{type:"checkbox",value:"A3",id:"A3",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A3",children:"Maybe"}),Object(y.jsx)("input",{type:"checkbox",value:"A4",id:"A4",onChange:c,name:"answer"}),Object(y.jsx)("label",{for:"A4",children:"I don't know"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:a,children:"Submit"})})]})]})},B=n(143),L=n.n(B);var E=function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(L.a,{url:e.url})})};var F=function(e){return console.log(e.myurl),Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:e.myurl})})},_=(n(198),[{name:"Learning Target 1",completed:2,prog:2,untouched:1},{name:"Learning Target 2",completed:3,prog:1,untouched:0},{name:"Learning Target 3",completed:0,prog:0,untouched:5},{name:"Learning Target 4",completed:6,prog:8,untouched:3},{name:"Learning Target 5",completed:4,prog:0,untouched:0},{name:"Learning Target 6",completed:0,prog:2,untouched:7},{name:"Learning Target 7",completed:2,prog:8,untouched:2},{name:"Learning Target 8",completed:0,prog:2,untouched:0}]);function M(e,t){return{height:"5px",width:(e>5?e-5:e)+"px",color:t,backgroundColor:t,border:"1px solid white"}}function U(e){var t=200,n=e.completed+e.prog+e.untouched,c={width:t.toString()+"px",height:200..toString()+"px",margin:"8px"},a=M((t*(e.completed/n)).toString(),"green"),r=M((t*(e.prog/n)).toString(),"orange"),s=M((t*(e.untouched/n)).toString(),"red");return Object(y.jsxs)("div",{className:"learningtarget","data-testid":e.name,style:c,children:[Object(y.jsx)("h3",{children:e.name}),Object(y.jsx)("hr",{style:a}),Object(y.jsx)("hr",{style:r}),Object(y.jsx)("hr",{style:s})]})}function P(){var e=_.map((function(e){return Object(y.jsx)(U,{name:e.name,completed:e.completed,prog:e.prog,untouched:e.untouched},e.name)}));return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"GradeBook"}),Object(y.jsx)("div",{className:"gradescreen-grid",children:e})]})}function D(e){return Object(y.jsx)("div",{children:Object(y.jsx)("h3",{children:e.text})})}n(199);function J(e){var t=e.width?parseInt(e.width,10):700,n=e.height?parseInt(e.height,10):10,c=e.doneColor?e.doneColor:"blue",a=e.leftColor?e.leftColor:"gray",r=10;e.total?r=e.total.toString():console.warn("Total missing, default value of 10 being used");var s=r,i=1;e.done?i=e.done.toString():console.warn("Done missing, default value of 1 being used");var o=i,l={width:t.toString()+"px"};return Object(y.jsxs)("div",{className:"pbar",style:l,children:[function(){var e={color:c,backgroundColor:c,height:n.toString()+"px",width:(o/s*t).toString()+"px",border:"1px solid navy","border-top-left-radius":"10px","border-bottom-left-radius":"10px"};return Object(y.jsx)("hr",{style:e})}(),function(){var e={color:a,backgroundColor:a,height:n.toString()+"px",width:((s-o)/s*t).toString()+"px",border:"1px solid navy","border-top-right-radius":"10px","border-bottom-right-radius":"10px"};return Object(y.jsx)("hr",{style:e})}()]})}n(200);var q=function(){var e=Object(h.useQuery)(k,{variables:{id:"4f681550ba9"}}),t=e.loading,n=e.error,c=e.data,a=(e.refetch,Object(i.useState)(0)),r=Object(u.a)(a,2),s=r[0],o=r[1],l=Object(i.useState)(1),d=Object(u.a)(l,2),j=d[0],b=d[1];if(t)return Object(y.jsx)("div",{className:"tasks",children:Object(y.jsx)("p",{children:"Loading..."})});if(n)return console.log(n),Object(y.jsx)("div",{className:"tasks",children:Object(y.jsx)("p",{children:"Error!"})});var O=c.task.pages,g=c.task.name,x=O.length;function m(){if(s>0)return Object(y.jsx)("button",{onClick:function(){s>0&&(o(s-1),b(j-1))},children:"Prev Page"})}function p(){if(s<O.length-1)return Object(y.jsx)("button",{onClick:function(){s<O.length-1&&(o(s+1),b(j+1))},children:"Next Page"})}function f(){if(s===O.length-1)return Object(y.jsx)("button",{onClick:function(){alert("".concat(g," submitted."))},children:"Submit"})}return Object(y.jsxs)("div",{className:"tasks",children:[Object(y.jsxs)("div",{className:"header",children:[m(),Object(y.jsx)("h1",{children:g}),p(),f()]}),function(){var e=O[s];if(!e)return Object(y.jsx)("div",{});var t=[];return e.blocks.forEach((function(e){"TextBlock"===e.__typename?t.push(Object(y.jsx)(D,{text:e.contents})):"ImageBlock"===e.__typename?t.push(Object(y.jsx)(F,{myurl:e.imageUrl})):"VideoBlock"===e.__typename?t.push(Object(y.jsx)(E,{url:e.videoUrl})):(console.error("Invalid type or wrongly formatted input."),console.log(e))})),Object(y.jsx)("div",{className:"page",children:t})}(),Object(y.jsx)(J,{width:"700",height:"10",doneColor:"#4274F3",leftColor:"rgb(108, 108, 133)",total:x,done:j})]})},z="task";d.default.configure({Auth:{identityPoolId:"us-east-1:07057d76-612a-4045-8522-f38a759cf216",region:"us-east-1",userPoolId:"us-east-1_POfbbYTKF",userPoolWebClientId:"24sdf1brebo58s89ja0b63c51d",oauth:{domain:"flipted-ios-test.auth.us-east-1.amazoncognito.com",scope:["phone","email","profile","openid","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:3000/",redirectSignOut:"http://localhost:3000/",responseType:"token"}}});var Y=function(){var e=Object(i.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(O.f)(),r=new h.ApolloClient({uri:"https://knyio2nl7d.execute-api.us-east-1.amazonaws.com/dev/graphql",cache:new h.InMemoryCache,headers:{authorization:null==n?null:n.getJwtToken()}}),s=function(e){c(e),a.push({pathname:z})};return Object(i.useEffect)((function(){b.a.listen("auth",(function(e){var t=e.payload,n=t.event,r=t.data;switch(n){case"signIn":case"cognitoHostedUI":s(r.signInUserSession.getAccessToken()),console.log("Successful Sign In."),console.log(r);break;case"signUp":s(r.signInUserSession.getAccessToken()),console.log("user signed up");break;case"signOut":c(null),a.push({pathname:"/"});break;case"signIn_failure":console.log("Sign In Failure.");break;case"cognitoHostedUI_failure":console.log("Sign in failure",r)}})),j.a.currentSession().then((function(e){c(e.getAccessToken())})).catch((function(){return console.log("not signed in")}))}),[]),Object(y.jsxs)("div",{children:[Object(y.jsxs)("p",{className:"navbar",children:[Object(y.jsx)("p",{className:"title",children:"flipt.ED"}),null==n?Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:function(){return j.a.federatedSignIn()},children:"Sign In"})}):Object(y.jsxs)("div",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:function(){return j.a.signOut()},children:"Sign Out"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/goalsscreen",children:"Goals"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/mcquizscreen",children:"MC Quiz"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/FillBlank",children:"Fill-in-the-Blank"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/FreeResponse",children:"Free Response"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/MultiSelect",children:"Multi-Select"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/VideoScreen",children:"Video"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/ImageScreen",children:"Image"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/gradescreen",children:"Grades"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/task",children:"Task"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/coursescreen",children:"Courses"})})]})]}),Object(y.jsx)(h.ApolloProvider,{client:r,children:Object(y.jsx)("div",{children:Object(y.jsxs)(O.c,{children:[Object(y.jsx)(O.a,{component:function(){return n&&a.push(z),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){return j.a.federatedSignIn()},children:"Sign In"})})},exact:!0,path:"/"}),Object(y.jsx)(O.a,{component:C,exact:!0,path:"/coursescreen"}),Object(y.jsx)(O.a,{component:N,exact:!0,path:"/goalsscreen"}),Object(y.jsx)(O.a,{component:I,exact:!0,path:"/mcquizscreen"}),Object(y.jsx)(O.a,{component:A,exact:!0,path:"/FillBlank"}),Object(y.jsx)(O.a,{component:T,exact:!0,path:"/FreeResponse"}),Object(y.jsx)(O.a,{component:G,exact:!0,path:"/MultiSelect"}),Object(y.jsx)(O.a,{component:E,exact:!0,path:"/VideoScreen"}),Object(y.jsx)(O.a,{component:F,exact:!0,path:"/ImageScreen"}),Object(y.jsx)(O.a,{component:P,exact:!0,path:"/gradescreen"}),Object(y.jsx)(O.a,{component:q,exact:!0,path:"/task"})]})})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,279)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},$=n(100);l.a.render(Object(y.jsx)($.a,{children:Object(y.jsx)(Y,{})}),document.getElementById("root")),R()},72:function(e,t,n){}},[[252,1,2]]]);
//# sourceMappingURL=main.a86491f7.chunk.js.map