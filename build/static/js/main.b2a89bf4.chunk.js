(this["webpackJsonpcity-walker"]=this["webpackJsonpcity-walker"]||[]).push([[0],{319:function(e,t,n){},325:function(e,t){},326:function(e,t){},334:function(e,t){},337:function(e,t){},338:function(e,t){},355:function(e,t,n){"use strict";n.r(t);var i,c,r=n(15),a=n(11),o=n.n(a),s=n(102),j=n.n(s),l=(n(319),n(5)),u=n.n(l),b=n(17),d=n(1),h=n(9),O=n(41),m=n(13),p=n(14),g=n(48),f=(n(24),n(285));function x(){return(x=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.a("BROWSER_FFT","18w"),e.next=3,i.ensureModelLoaded();case 3:c=i.wordLabels(),console.log(i.wordLabels());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){i.stopListening()}var y=n(361),S=n(356),w=n(6),M=n(59),P=n.p+"static/media/scene.4ff4455c.glb",k=n(360),I=n(364),L=n(359),A=function(e){var t=Object(a.useRef)(),n=window.innerWidth-8-.2*window.innerWidth;return Object(g.b)((function(i){var c=i.gl,r=i.scene,a=i.camera;c.autoClear=!0,c.setViewport(0,0,window.innerWidth,window.innerHeight),c.setScissor(0,0,window.innerWidth,window.innerHeight),c.setScissorTest(!0),c.render(r,a),c.autoClear=!1,c.clearDepth(),c.setViewport(n,8,.2*window.innerWidth,.2*window.innerHeight),c.setScissor(n,8,.2*window.innerWidth,.2*window.innerHeight),c.setScissorTest(!0),t.current.position.x=e.viewPosition.x,t.current.position.y=300,t.current.position.z=e.viewPosition.z,t.current.updateMatrixWorld(),t.current.updateProjectionMatrix(),c.render(r,t.current)}),1),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(L.a,{ref:t,zoom:4.5,rotation:[-90*Math.PI/180,0,0],left:-400,right:400,top:400,bottom:-400,far:500,near:250})})},T=n(69),C=0,E=0,G=0,D=Object(T.b)((function(e){return{position:e.position}}),null)((function(e){var t,n=Object(g.c)(M.a,P),i=Object(S.c)((function(){return{mass:6,args:[6,6,6],position:e.girlPosition}})),c=Object(w.a)(i,2),a=c[0],o=c[1];a.current&&(t=a.current.position);var s=e.position;return Object(g.b)((function(){switch(t.x>=s.x-10&&t.x<=s.x+10&&t.z>=s.z-10&&t.z<=s.z+10&&(e.stopListening(),e.changeWin(),e.changePlaying()),o.rotation.set(0,-90*Math.PI/180,0),e.action){case"right":(G+=10)>=10&&e.setAction("");break;case"left":(G-=10)<=-10&&e.setAction("");break;case"go":E=20,0===C&&(C+=5),e.setAction("");break;case"stop":G=0,E=0,C=0,e.setAction("")}o.velocity.set(G,-1,-E*C)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("mesh",{ref:a,frustumCulled:!1,children:[Object(r.jsx)(k.a,{fov:75,near:.1,position:[15,7.5,0],rotation:[0,90*Math.PI/180,0],makeDefault:!0}),Object(r.jsx)("primitive",{object:n.scene,scale:[5,5,5],rotation:[0,-65*Math.PI/180,0],position:[0,-7,0]}),Object(r.jsx)(I.a,{})]}),Object(r.jsx)(A,{viewPosition:t})]})})),W=n.p+"static/media/brad.37f02602.glb",R=n.p+"static/media/red.8d01e331.glb",z=n.p+"static/media/popstar.ca5a69ae.glb",N=n.p+"static/media/maria.56eb6240.glb",B=function(e){var t=Object(g.c)(M.a,W).scene,n=Object(g.c)(M.a,R).scene,i=Object(g.c)(M.a,z).scene,c=Object(g.c)(M.a,N).scene,a=Object(S.c)((function(){return{mass:1,args:[5,5,5],position:[0,0,180],rotation:[0,90*Math.PI/180,0]}})),o=Object(w.a)(a,2),s=o[0],j=(o[1],Object(S.c)((function(){return{mass:1,args:[3,5,3],position:[-4,10,140]}}))),l=Object(w.a)(j,2),u=l[0],b=(l[1],Object(S.c)((function(){return{mass:1,args:[5,7,5],position:[6,0,135],rotation:[0,280*Math.PI/180,0]}}))),d=Object(w.a)(b,2),h=d[0],O=(d[1],Object(S.c)((function(){return{mass:1,args:[5,5,5],position:[8,0,120],rotation:[0,-25*Math.PI/180,0]}}))),m=Object(w.a)(O,2),p=m[0];m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:s,children:Object(r.jsx)("primitive",{object:t,scale:[6,6,6]})}),Object(r.jsx)("mesh",{ref:u,children:Object(r.jsx)("primitive",{object:n,scale:[.9,.9,.9]})}),Object(r.jsx)("mesh",{ref:h,children:Object(r.jsx)("primitive",{object:i,position:[0,6,0],scale:[9,9,9]})}),Object(r.jsx)("mesh",{ref:p,children:Object(r.jsx)("primitive",{object:c,scale:[9,9,9]})})]})},F=n.p+"static/media/scene.f3c54604.glb",U=function(e){var t=Object(g.c)(M.a,F),n=Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[-8,2,-50]}})),i=Object(w.a)(n,2),c=i[0],a=(i[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[-8,2,-30],rotation:[0,-65*Math.PI/180,0]}}))),o=Object(w.a)(a,2),s=o[0],j=(o[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[0,2,-100],rotation:[0,-45*Math.PI/180,0]}}))),l=Object(w.a)(j,2),u=l[0],b=(l[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[5,2,-120],rotation:[0,-35*Math.PI/180,0]}}))),d=Object(w.a)(b,2),h=d[0],O=(d[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[-3,2,-130],rotation:[0,35*Math.PI/180,0]}}))),m=Object(w.a)(O,2),p=m[0],f=(m[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[-7,2,-110],rotation:[0,50*Math.PI/180,0]}}))),x=Object(w.a)(f,2),v=x[0],y=(x[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[8,2,-20],rotation:[0,50*Math.PI/180,0]}}))),P=Object(w.a)(y,2),k=P[0],I=(P[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[6,2,-10],rotation:[0,80*Math.PI/180,0]}}))),L=Object(w.a)(I,2),A=L[0],T=(L[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[8,2,-50],rotation:[0,-80*Math.PI/180,0]}}))),C=Object(w.a)(T,2),E=C[0],G=(C[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[10,2,-35],rotation:[0,-80*Math.PI/180,0]}}))),D=Object(w.a)(G,2),W=D[0],R=(D[1],Object(S.c)((function(){return{mass:1,args:[3,6,3],position:[0,2,-45],rotation:[0,-80*Math.PI/180,0]}}))),z=Object(w.a)(R,2),N=z[0];z[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:c,children:Object(r.jsx)("primitive",{object:t.scene,scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:s,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:u,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:h,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:p,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:v,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:k,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:A,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:E,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:W,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})}),Object(r.jsx)("mesh",{ref:N,children:Object(r.jsx)("primitive",{object:t.scene.clone(!0),scale:[7,7,7]})})]})},_=n.p+"static/media/aquarium.9803b940.glb",H=n.p+"static/media/eaterplant.e11c480a.glb",q=n.p+"static/media/fan.e2430716.glb",Y=n.p+"static/media/medplant.95182c89.glb",K=n.p+"static/media/juliette.5cc4f262.glb",J=function(e){var t=Object(g.c)(M.a,_).scene,n=Object(g.c)(M.a,H),i=Object(g.c)(M.a,q),c=Object(g.c)(M.a,Y),a=Object(g.c)(M.a,K),o=Object(S.c)((function(){return{mass:1,args:[7,3,7],position:[-5,0,-400],rotation:[0,90*Math.PI/180,0]}})),s=Object(w.a)(o,2),j=s[0],l=(s[1],Object(S.c)((function(){return{mass:1,args:[3,3,3],position:[-4,10,-350]}}))),u=Object(w.a)(l,2),b=u[0],d=(u[1],Object(S.c)((function(){return{mass:1,args:[3,3,3],position:[6,0,-380],rotation:[0,280*Math.PI/180,0]}}))),h=Object(w.a)(d,2),O=h[0],m=(h[1],Object(S.c)((function(){return{mass:1,args:[5,5,5],position:[8,0,-420],rotation:[0,-25*Math.PI/180,0]}}))),p=Object(w.a)(m,2),f=p[0],x=(p[1],Object(S.c)((function(){return{mass:1,args:[7,5,7],position:[8,0,-340],rotation:[0,-25*Math.PI/180,0]}}))),v=Object(w.a)(x,2),y=v[0];v[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:j,children:Object(r.jsx)("primitive",{object:t,scale:[.03,.03,.03]})}),Object(r.jsx)("mesh",{ref:b,children:Object(r.jsx)("primitive",{object:n.scene,scale:[.01,.01,.01]})}),Object(r.jsx)("mesh",{ref:O,children:Object(r.jsx)("primitive",{object:i.scene,position:[0,6,0],scale:[.2,.2,.2]})}),Object(r.jsx)("mesh",{ref:f,children:Object(r.jsx)("primitive",{object:c.scene,scale:[3,3,3]})}),Object(r.jsx)("mesh",{ref:y,children:Object(r.jsx)("primitive",{object:a.scene,scale:[.06,.06,.06]})})]})},V=n.p+"static/media/scene.b5528f99.glb",X=n.p+"static/media/scene.eac163ed.glb",Q=n.p+"static/media/scene.71d76fee.glb",Z=n.p+"static/media/spy.5e9e5a9e.glb",$=function(e){var t=Object(g.c)(M.a,V),n=Object(g.c)(M.a,X),i=Object(g.c)(M.a,Q),c=Object(g.c)(M.a,Z),a=Object(S.c)((function(){return{mass:3,args:[6,6,6],position:[-8,2,-512]}})),o=Object(w.a)(a,2),s=o[0],j=(o[1],Object(S.c)((function(){return{type:"Kinematic",args:[1,1,1],position:[-4,10,-513]}}))),l=Object(w.a)(j,2),u=l[0],b=(l[1],Object(S.c)((function(){return{mass:3,args:[6,9,6],position:[6,2,-513],rotation:[0,95*Math.PI/180,0]}}))),d=Object(w.a)(b,2),h=d[0],O=(d[1],Object(S.c)((function(){return{mass:3,args:[3,5,3],position:[8,0,-520],rotation:[0,-25*Math.PI/180,0]}}))),m=Object(w.a)(O,2),p=m[0];m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:s,children:Object(r.jsx)("primitive",{object:t.scene,scale:[.01,.01,.01]})}),Object(r.jsx)("mesh",{ref:u,children:Object(r.jsx)("primitive",{object:n.scene,scale:[3,3,3]})}),Object(r.jsx)("mesh",{ref:h,children:Object(r.jsx)("primitive",{object:i.scene,scale:[1,1,1]})}),Object(r.jsx)("mesh",{ref:p,children:Object(r.jsx)("primitive",{object:c.scene,scale:[.1,.1,.1]})})]})},ee=function(){return Object(r.jsxs)("mesh",{children:[Object(r.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:300})]})},te=n.p+"static/media/scene.364b28c1.glb",ne=function(e){var t=Object(g.c)(M.a,te).scene,n=Object(S.c)((function(){return{type:"Kinematic",args:[4.7,1.3,2],position:e.position,rotation:e.rotation}})),i=Object(w.a)(n,2),c=i[0];i[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("mesh",{ref:c,children:[Object(r.jsxs)("group",{dispose:null,children:[Object(r.jsx)("primitive",{object:t,scale:[.1,.1,.1]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-140],rotation:[0,180*Math.PI/180,0]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-380],rotation:[0,180*Math.PI/180,0]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-380]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-620],rotation:[0,180*Math.PI/180,0]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-620]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-860],rotation:[0,180*Math.PI/180,0]}),Object(r.jsx)("primitive",{object:t.clone(!0),scale:[.1,.1,.1],position:[e.position[0],e.position[1],e.position[2]-860]})]}),Object(r.jsx)("meshStandardMaterial",{wireframe:!0,attach:"material"})]})})},ie=n(45),ce=function(e){var t=Object(S.e)((function(){return Object(ie.a)({position:e.position,mass:0},e)})),n=Object(w.a)(t,1)[0];return Object(r.jsxs)("mesh",{ref:n,receiveShadow:!0,children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[45,1450]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:0})]})},re=function(e){var t=Object(S.e)((function(){return Object(ie.a)({rotation:e.rotation,position:e.position,mass:0},e)})),n=Object(w.a)(t,1)[0];return Object(r.jsxs)("mesh",{ref:n,children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[1400,20]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:0})]})},ae=function(e){var t=Object(S.e)((function(){return Object(ie.a)({rotation:e.rotation,position:e.position,mass:0},e)})),n=Object(w.a)(t,1)[0];return Object(r.jsxs)("mesh",{ref:n,children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:0})]})},oe="GET_POSITION",se={};var je=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).zoneRef=o.a.createRef(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getPosition(this.zoneRef.current.position)}},{key:"render",value:function(){return Object(r.jsxs)("mesh",{ref:this.zoneRef,position:[0,0,-650],children:[Object(r.jsx)("boxBufferGeometry",{attach:"geometry",args:[20,100,20]}),Object(r.jsx)("meshStandardMaterial",{wireframe:!1,attach:"material",color:"yellow",transparent:!0,opacity:.6})]})}}]),n}(o.a.Component),le=Object(T.b)(null,(function(e){return{getPosition:function(t){return e(function(e){return{type:oe,position:e}}(t))}}}))(je),ue=n(160),be=(n(348),n(349),n(350),"GET_GAMESTATE"),de="GAMESTATE_WIN",he="GAMESTATE_PLAYING",Oe="RESET_GAMESTATE",me="RESTART_GAME_STATE",pe={isPlaying:!1,hasWon:!1,isPaused:!1,courseCompleted:!1};var ge=n(23),fe=n(223);n(264),n(352);fe.a.initializeApp({apiKey:"AIzaSyCDIEz8pqLI9IAt5bgXYy90t7iw_zLtUEA",authDomain:"city-walker.firebaseapp.com",projectId:"city-walker",storageBucket:"city-walker.appspot.com",messagingSenderId:"234520776294",appId:"1:234520776294:web:0a9c644ab3eb85f06e67a7",measurementId:"G-NELH08XYYR"});var xe=fe.a.firestore().collection("leaderboard"),ve="GET_LEADERBOARD",ye="ADD_TO_LEADERBOARD",Se=[],we=function(e){return{type:ve,leaderboard:e}};var Me="UPDATE_TIME";var Pe=Object(ue.combineReducers)({gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return e;case de:return Object(ie.a)(Object(ie.a)({},e),{},{hasWon:t.hasWon});case he:return Object(ie.a)(Object(ie.a)({},e),{},{isPlaying:t.isPlaying});case Oe:return Object(ie.a)(Object(ie.a)({},e),{},{isPlaying:!0,hasWon:!1});case me:return pe;default:return e}},leaderboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return t.leaderboard;case ye:return[].concat(Object(ge.a)(e),[t.newRecord]);default:return e}},position:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return t.position;default:return e}},time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return t.time;default:return e}}}),ke=Object(ue.createStore)(Pe),Ie=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).resetGame=e.resetGame.bind(Object(O.a)(e)),e}return Object(h.a)(n,[{key:"resetGame",value:function(){this.props.restartGameState()}},{key:"render",value:function(){return Object(r.jsx)("button",{id:"restart-button",onClick:this.resetGame,children:"RESTART"})}}]),n}(o.a.Component),Le=Object(T.b)(null,(function(e){return{restartGameState:function(){return e({type:me})}}}))(Ie),Ae=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={action:"",endPosition:{}},i.voiceAction=i.voiceAction.bind(Object(O.a)(i)),i.updatePosition=i.updatePosition.bind(Object(O.a)(i)),i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){return x.apply(this,arguments)})().then((function(){return t=e.voiceAction,void i.listen((function(e){var n=e.scores;(n=Array.from(n).map((function(e,t){return{score:e,word:c[t]}}))).sort((function(e,t){return t.score-e.score}));var i=n[0].word;t(i)}),{includeSpectrogram:!0,probabilityThreshold:.9});var t}))}},{key:"voiceAction",value:function(e){this.setState({action:e}),console.log("voice command:",this.state.action)}},{key:"updatePosition",value:function(e){this.setState({endPosition:e})}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Le,{}),Object(r.jsxs)(g.a,{colorManagement:!0,shadowMap:!0,children:[Object(r.jsx)(y.a,{radius:100,depth:800,count:5e4}),Object(r.jsx)("hemisphereLight",{intensity:.5}),Object(r.jsx)("ambientLight",{intensity:.2}),Object(r.jsx)("spotLight",{castShadow:!0,penumbra:1,intensity:2,position:[150,300,-150],lookAt:[0,0,300],"shadow-mapSize-width":512,"shadow-mapSize-height":512,"shadow-camera-near":.1,"shadow-camera-far":500}),Object(r.jsxs)(S.a,{gravity:[0,-100,0],children:[Object(r.jsx)(ce,{rotation:[-Math.PI/2,0,0],position:[0,1,0]}),Object(r.jsx)(le,{store:ke}),Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(ee,{}),children:[Object(r.jsx)(D,{action:this.state.action,girlPosition:[0,0,150],stopListening:v,changeWin:this.props.changeWin,setAction:this.voiceAction,changePlaying:this.props.changePlaying,store:ke}),Object(r.jsx)(B,{}),Object(r.jsx)(J,{}),Object(r.jsx)(U,{}),Object(r.jsx)($,{})]}),Object(r.jsx)(ne,{rotation:[0,0,0],position:[0,0,140]}),Object(r.jsx)(ae,{position:[0,0,-800]}),Object(r.jsx)(re,{rotation:[0,-Math.PI/2,0],position:[15,0,-200]}),Object(r.jsx)(re,{rotation:[0,Math.PI/2,0],position:[-15,0,-200]})]})]})]})}}]),n}(o.a.Component),Te=n(363),Ce=n(362),Ee=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).formatScore=e.formatScore.bind(Object(O.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchLeaderboard(),console.log("Loading leaderboard")}},{key:"formatScore",value:function(e){if(e){var t,n,i,c=e;return t=Math.floor(c/60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),n=Math.floor(c-60*t).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),i=Math.floor(c%1*100).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"".concat(t,":").concat(n,":").concat(i)}return"00:00:00"}},{key:"render",value:function(){var e=this,t=this.props.leaderboard||[];return Object(r.jsx)(Te.a,{centered:!0,show:this.props.showModal,onHide:this.props.toggleLeaderboard,dialogClassName:"leaderboard-modal",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Midnight Train Leaderboard"}),Object(r.jsx)("div",{className:"table-shell",children:Object(r.jsxs)(Ce.a,{responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Course Time"})]})}),Object(r.jsx)("tbody",{children:t.map((function(t,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:t.name}),Object(r.jsx)("td",{children:Object(r.jsx)("i",{children:e.formatScore(t.score)})})]},t.idx)}))})]})}),Object(r.jsx)("button",{onClick:this.props.toggleLeaderboard,children:"Close Leaderboard"})]})})}}]),n}(o.a.Component),Ge=Object(T.b)((function(e){return{leaderboard:e.leaderboard}}),(function(e){return{fetchLeaderboard:function(){return e(function(){var e=Object(b.a)(u.a.mark((function e(t){var n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.orderBy("score").get();case 3:n=e.sent,i=n.docs.map((function(e){return e.data()})),t(we(i)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Ee),De=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).toggleSfx=new Audio("./sfx/toggle.mp3"),i.selectSfx=new Audio("./sfx/select.mp3"),i.state={showModal:!1},i.hoverSound=i.hoverSound.bind(Object(O.a)(i)),i.selectSound=i.selectSound.bind(Object(O.a)(i)),i.toggleLeaderboard=i.toggleLeaderboard.bind(Object(O.a)(i)),i}return Object(h.a)(n,[{key:"hoverSound",value:function(){this.toggleSfx.volume=.5,this.toggleSfx.play()}},{key:"selectSound",value:function(){this.selectSfx.volume=.5,this.selectSfx.play()}},{key:"toggleLeaderboard",value:function(){this.selectSound(),this.setState({showModal:!this.state.showModal})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h1",{children:"Midnight Train"})}),Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("h2",{children:"A voice-command driven 3D interactive simulation"}),Object(r.jsx)("p",{children:"Please ride responsibly."})]}),Object(r.jsxs)("div",{id:"button-row",children:[Object(r.jsx)("button",{id:"leaderboard-button",onMouseOver:this.hoverSound,onClick:this.toggleLeaderboard,children:"Leaderboard"}),this.state.showModal&&Object(r.jsx)(Ge,{showModal:this.state.showModal,toggleLeaderboard:this.toggleLeaderboard}),Object(r.jsx)("button",{id:"playButton",onMouseOver:function(){return e.hoverSound()},onClick:function(){return e.props.changePlaying(),e.selectSound()},children:"Ride"})]}),Object(r.jsx)("div",{className:"definition",children:Object(r.jsxs)("p",{children:["Midnight Train",Object(r.jsx)("br",{}),Object(r.jsx)("span",{id:"defnoun",children:"A train"})," : With no where to go and to go no where."]})})]})}}]),n}(o.a.Component),We=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).toggleSfx=new Audio("./sfx/toggle.mp3"),i.selectSfx=new Audio("./sfx/select.mp3"),i.state={name:"",showModal:!1,submitted:!1},i.submitScore=i.submitScore.bind(Object(O.a)(i)),i.handleChange=i.handleChange.bind(Object(O.a)(i)),i.resetGame=i.resetGame.bind(Object(O.a)(i)),i.toggleLeaderboard=i.toggleLeaderboard.bind(Object(O.a)(i)),i.hoverSound=i.hoverSound.bind(Object(O.a)(i)),i.selectSound=i.selectSound.bind(Object(O.a)(i)),i}return Object(h.a)(n,[{key:"hoverSound",value:function(){this.toggleSfx.volume=.5,this.toggleSfx.play()}},{key:"selectSound",value:function(){this.selectSfx.volume=.5,this.selectSfx.play()}},{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"submitScore",value:function(e){e.preventDefault(),this.selectSound(),this.props.addToLeaderboard({name:this.state.name,score:this.props.time}),this.setState({submitted:!0})}},{key:"resetGame",value:function(){this.selectSound(),this.props.resetGame()}},{key:"toggleLeaderboard",value:function(){this.selectSound(),this.setState({showModal:!this.state.showModal})}},{key:"render",value:function(){var e,t,n,i=this,c=this.props.time;return e=Math.floor(c/60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),t=Math.floor(c-60*e).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),n=Math.floor(c%1*100).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),c="".concat(e,":").concat(t,":").concat(n),Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h1",{children:"Course Complete"})}),Object(r.jsxs)("div",{className:"message",children:[Object(r.jsxs)("h2",{children:["Your time is ",Object(r.jsx)("strong",{children:c})]}),!this.state.submitted&&Object(r.jsx)("p",{children:"Add to leaderboard?"}),this.state.submitted?Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:Object(r.jsx)("strong",{children:"Score Submitted"})})}):Object(r.jsxs)("form",{id:"score-submission",onSubmit:function(e){return i.submitScore(e)},children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name"}),Object(r.jsxs)("div",{id:"score-input",children:[Object(r.jsx)("input",{required:!0,name:"name",placeholder:"ABC",type:"text",value:this.state.name,onChange:function(e){return i.handleChange(e)}}),Object(r.jsx)("button",{onMouseOver:this.hoverSound,type:"submit",children:"Submit"})]})]})]}),Object(r.jsxs)("div",{id:"button-row",children:[Object(r.jsx)("button",{id:"leaderboard-button",onMouseOver:this.hoverSound,onClick:this.toggleLeaderboard,children:"Leaderboard"}),this.state.showModal&&Object(r.jsx)(Ge,{showModal:this.state.showModal,toggleLeaderboard:this.toggleLeaderboard}),Object(r.jsx)("button",{id:"playButton",onMouseOver:this.hoverSound,onClick:this.resetGame,children:"Play again?"})]})]})}}]),n}(o.a.Component),Re=Object(T.b)((function(e){return{time:e.time,leaderboard:e.leaderboard,gameState:e.gameState}}),(function(e){return{addToLeaderboard:function(t){return e((n=t,function(){var e=Object(b.a)(u.a.mark((function e(t){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=xe.doc(),e.next=4,i.set(n);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var n},resetGame:function(){return e({type:Oe})}}}))(We),ze=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).timer=0,e.state={startTime:performance.now(),elapsedTime:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t,n,i,c=Math.floor(performance.now()-e.state.startTime)/1e3;e.setState({elapsedTime:c}),t=Math.floor(c/60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),n=Math.floor(c-60*t).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),i=Math.floor(c%1*100).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),document.getElementById("elapsed-time").innerHTML="".concat(t,":").concat(n,":").concat(i)}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"resetTime",value:function(){this.setState({startTime:performance.now()})}},{key:"render",value:function(){return this.props.updateTime(this.state.elapsedTime),Object(r.jsxs)("div",{id:"stopwatch",children:[Object(r.jsx)("div",{id:"elapsed-time"}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{id:"elapsed-label",children:"ELAPSED TIME"})]})}}]),n}(o.a.Component),Ne=Object(T.b)(null,(function(e){return{updateTime:function(t){return e(function(e){return{type:Me,time:e}}(t))}}}))(ze),Be=function(e){e.url;var t=function(e){var t=Object(a.useState)(new Audio("./music/E-Saggila-Aziza.wav")),n=Object(w.a)(t,1)[0],i=Object(a.useState)(!1),c=Object(w.a)(i,2),r=c[0],o=c[1];n.volume=.2,n.loop=!0;var s=function(){o(!r)};return Object(a.useEffect)((function(){r?n.play():n.pause()}),[r]),Object(a.useEffect)((function(){return window.addEventListener("click",(function e(t){s(),window.removeEventListener("click",e,!1)}),!1),n.addEventListener("ended",(function(){return o(!1)})),function(){n.removeEventListener("ended",(function(){return o(!1)}))}}),[]),[r,s]}(),n=Object(w.a)(t,2),i=n[0],c=n[1];return Object(r.jsxs)("div",{id:"audio-player",children:[Object(r.jsx)("button",{id:"audio-button",onClick:c,children:Object(r.jsx)("img",{src:"./icon/audio.png",alt:"play-audio-icon"})}),i&&Object(r.jsxs)("div",{id:"song-info",children:[Object(r.jsx)("h3",{children:"Aziza"}),Object(r.jsx)("h4",{children:"E-Saggila"})]})]})},Fe=function(e){return Object(r.jsx)("div",{id:"github",children:Object(r.jsx)("a",{href:"https://github.com/hannahrobot/city-walker",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"./icon/github.png",alt:"link-to-github-repo"})})})},Ue=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={showModal:!0},e.toggleInstructions=e.toggleInstructions.bind(Object(O.a)(e)),e}return Object(h.a)(n,[{key:"toggleInstructions",value:function(){this.setState((function(e){return{showModal:!e.showModal}}))}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{id:"instruction-button",onClick:this.toggleInstructions,children:"i"}),Object(r.jsxs)(Te.a,{centered:!0,show:this.state.showModal,onHide:this.toggleInstructions,dialogClassName:"instruction-modal",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Riding simulation requires use of device microphone"})}),Object(r.jsxs)("div",{className:"table-shell",children:[Object(r.jsx)("p",{children:"How to play: Navigate from your start position to the yellow end zone. Only clear, concise verbal commands will drive the car."}),Object(r.jsxs)(Ce.a,{responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Commands"}),Object(r.jsx)("th",{children:"Description"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Go"}),Object(r.jsx)("td",{children:"Move foreward"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Stop"}),Object(r.jsx)("td",{children:"Cease movement"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Left"}),Object(r.jsx)("td",{children:"Move left"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Right"}),Object(r.jsx)("td",{children:"Move right"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Screen click"}),Object(r.jsx)("td",{children:"Allows use of panning camera (cursor lock)"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"ESC Key"}),Object(r.jsx)("td",{children:"Camera Lock (show cursor)"})]})]})]}),Object(r.jsx)("p",{children:"Please Note: Game rendering is based on device GPU. Best performance of game will be dependent on device ability to render WebGL graphics."})]}),Object(r.jsx)("button",{onClick:this.toggleInstructions,children:"Close Instructions"})]})]})}}]),n}(o.a.Component),_e=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={granted:""},e.changePlaying=e.changePlaying.bind(Object(O.a)(e)),e.changeWin=e.changeWin.bind(Object(O.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"changePlaying",value:function(){var e=this.props.gameState;this.props.gameStatePlaying(!e.isPlaying)}},{key:"changeWin",value:function(){var e=this.props.gameState;this.props.gameStateWin(!e.hasWon)}},{key:"askPermission",value:function(){var e=this;return navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){e.getPermission().then((function(t){e.setState({granted:t.state})}))})).catch((function(){e.getPermission().then((function(t){e.setState({granted:t.state})}))}))}},{key:"getPermission",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.permissions.query({name:"microphone"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"renderSwitch",value:function(e){return this.props.gameState.hasWon&&!this.props.gameState.isPlaying?Object(r.jsx)(Re,{changeWin:this.changeWin,changePlaying:this.changePlaying}):this.props.gameState.isPlaying?Object(r.jsx)(Ae,{changeWin:this.changeWin,changePlaying:this.changePlaying}):Object(r.jsx)(De,{changePlaying:this.changePlaying})}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ue,{}),Object(r.jsx)(Be,{}),this.renderSwitch(this.state.granted),this.props.gameState.isPlaying?Object(r.jsx)(Ne,{}):Object(r.jsx)(Fe,{})]})}}]),n}(o.a.Component),He=Object(T.b)((function(e){return{gameState:e.gameState}}),(function(e){return{getGameState:function(){return e({type:be})},gameStateWin:function(t){return e(function(e){return{type:de,hasWon:e}}(t))},gameStatePlaying:function(t){return e(function(e){return{type:he,isPlaying:e}}(t))}}}))(_e),qe=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,365)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};j.a.render(Object(r.jsx)(T.a,{store:ke,children:Object(r.jsx)(He,{})}),document.getElementById("root")),qe()}},[[355,1,2]]]);
//# sourceMappingURL=main.b2a89bf4.chunk.js.map