System.register("chunks:///_virtual/AudioCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts"],(function(t){var i,r,e,o,n,u,c,a,l,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,r=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,u=t._decorator,c=t.AudioClip,a=t.AudioSource,l=t.Component},function(t){p=t.Data}],execute:function(){var s,f,d,y,S,h,A;n._RF.push({},"0380b2NOmtLpZBjFAEEZCnC","AudioCtrl",void 0);var b=u.ccclass,C=u.property;t("AudioSrc",function(t){return t[t.HIT=0]="HIT",t[t.ITEM=1]="ITEM",t[t.POINT=2]="POINT",t[t.SWOOSH=3]="SWOOSH",t}({})),t("AudioCtrl",(s=b("AudioCtrl"),f=C(c),d=C(a),s((h=i((S=function(t){function i(){for(var i,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return i=t.call.apply(t,[this].concat(n))||this,e(i,"clips",h,o(i)),e(i,"audioSource",A,o(i)),i}return r(i,t),i.prototype.play=function(t){if(!p.mute){var i=this.clips[t];this.audioSource.playOneShot(i)}},i}(l)).prototype,"clips",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=i(S.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=S))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/Base64.ts",["cc"],(function(e){var r;return{setters:[function(e){r=e.cclegacy}],execute:function(){r._RF.push({},"006f5wN1KNKqqJZISJB/61h","Base64",void 0);for(var t=[],n=[],o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,a=o.length;c<a;++c)t[c]=o[c],n[o.charCodeAt(c)]=c;n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63;e("encode",(function(e){return u((new TextEncoder).encode(e))})),e("decode",(function(e){return(new TextDecoder).decode(h(e))}));var u=e("atob",(function(e){for(var r,n=e.length,o=n%3,c=[],a=16383,u=0,h=n-o;u<h;u+=a)c.push(d(e,u,u+a>h?h:u+a));return 1===o?(r=e[n-1],c.push(t[r>>2]+t[r<<4&63]+"==")):2===o&&(r=(e[n-2]<<8)+e[n-1],c.push(t[r>>10]+t[r>>4&63]+t[r<<2&63]+"=")),c.join("")})),h=e("btoa",(function(e){var r,t=function(e){var r=e.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");-1===t&&(t=r);return[t,t===r?0:4-t%4]}(e),o=t[0],c=t[1],a=new Uint8Array(function(e,r,t){return 3*(r+t)/4-t}(0,o,c)),u=0,h=c>0?o-4:o,d=0;for(d=0;d<h;d+=4)r=n[e.charCodeAt(d)]<<18|n[e.charCodeAt(d+1)]<<12|n[e.charCodeAt(d+2)]<<6|n[e.charCodeAt(d+3)],a[u++]=r>>16&255,a[u++]=r>>8&255,a[u++]=255&r;return 2===c&&(r=n[e.charCodeAt(d)]<<2|n[e.charCodeAt(d+1)]>>4,a[u++]=255&r),1===c&&(r=n[e.charCodeAt(d)]<<10|n[e.charCodeAt(d+1)]<<4|n[e.charCodeAt(d+2)]>>2,a[u++]=r>>8&255,a[u++]=255&r),a}));function d(e,r,n){for(var o,c,a=[],u=r;u<n;u+=3)o=(e[u]<<16&16711680)+(e[u+1]<<8&65280)+(255&e[u+2]),a.push(t[(c=o)>>18&63]+t[c>>12&63]+t[c>>6&63]+t[63&c]);return a.join("")}r._RF.pop()}}}));

System.register("chunks:///_virtual/Data.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Base64.ts"],(function(e){var t,n,r,a;return{setters:[function(e){t=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){r=e.cclegacy},function(e){a=e.encode}],execute:function(){r._RF.push({},"e81702kz+hGfqwloSj7dGjG","Data",void 0);var s=e("Data",function(){function e(){}return e.init=function(){e.speed=200,e.isGameOver=!1},e.isLeadScore=function(){var e=t(n().mark((function e(t){var r,a,s,o,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://thesadspacesheep.web.app/api/rank_min",{method:"GET"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,o=(s=a).minScore,c=s.minScoreWeek,!(t>o||t>c)){e.next=10;break}return e.abrupt("return",!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),e.saveScore=function(){var e=t(n().mark((function e(t,r){var s,o,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=a("tsss"+t+3*(Math.pow(r,2)+r)),e.next=4,fetch("https://thesadspacesheep.web.app/api/rank",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,score:r,checksum:s})});case 4:return o=e.sent,e.next=7,o.json();case 7:c=e.sent,console.log(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),e}());s.speedDefault=200,s.speedBooster=1e3,s.speedSlow=50,s.speed=s.speedDefault,s.isGameOver=!1,s.highScore=0,s.mute=!1;e("random",(function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts","./Rocket.ts","./PipePool.ts","./ItemPool.ts","./AudioCtrl.ts"],(function(e){var t,i,n,o,r,a,s,l,u,c,p,f,h,d,b,m,y,g,v,S,P,w,k,T,x,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.asyncToGenerator,a=e.regeneratorRuntime},function(e){s=e.cclegacy,l=e._decorator,u=e.Label,c=e.Node,p=e.EditBox,f=e.Button,h=e.Prefab,d=e.input,b=e.Input,m=e.KeyCode,y=e.director,g=e.instantiate,v=e.Vec3,S=e.Component},function(e){P=e.Data},function(e){w=e.Rocket},function(e){k=e.PipePool},function(e){T=e.ItemPool},function(e){x=e.AudioCtrl,C=e.AudioSrc}],execute:function(){var B,z,I,L,O,D,A,G,N,E,R,H,K,_,M,W,j,F,U,J,V,Y,Z,q,Q,X,$,ee,te;s._RF.push({},"cbf33rL4jZAALSUWh8D8GsJ","GameScene",void 0);var ie=l.ccclass,ne=l.property;e("GameScene",(B=ie("GameScene"),z=ne(w),I=ne(k),L=ne(T),O=ne(u),D=ne(c),A=ne(u),G=ne(c),N=ne(p),E=ne(f),R=ne(f),H=ne(h),K=ne(h),_=ne(x),B((j=t((W=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"rocket",j,o(t)),n(t,"pipePool",F,o(t)),n(t,"itemPool",U,o(t)),n(t,"scoreLabel",J,o(t)),n(t,"resultNode",V,o(t)),n(t,"resultTitle",Y,o(t)),n(t,"leadScoreNode",Z,o(t)),n(t,"nicknameBox",q,o(t)),n(t,"againButton",Q,o(t)),n(t,"saveButton",X,o(t)),n(t,"fxCircle",$,o(t)),n(t,"fxTail",ee,o(t)),n(t,"audio",te,o(t)),t.score=0,t.booster=!1,t.speedBefore=P.speedDefault,t}i(t,e);var s=t.prototype;return s.onLoad=function(){P.init(),d.on(b.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(c.EventType.TOUCH_START,this.onTouchStart,this),this.againButton.node.once(f.EventType.CLICK,this.onAgain,this),this.saveButton.node.once(f.EventType.CLICK,this.onSave,this),this.rocket.node.on("hit",this.onHitRocket,this),this.pipePool.node.on("pass",this.onPassPipes,this)},s.start=function(){this.pipePool.addPipes()},s.gameOver=function(){var e=r(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.isGameOver=!0,this.rocket.stop(),this.resultNode.active=!0,this.audio.play(C.HIT),P.highScore=Math.max(this.score,P.highScore),this.resultTitle.string="HIGH SCORE: "+P.highScore.toString(),e.next=8,P.isLeadScore(this.score);case 8:if(!e.sent){e.next=10;break}this.leadScoreNode.active=!0;case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),s.fly=function(){P.isGameOver||(this.rocket.fly(),this.audio.play(C.SWOOSH))},s.onKeyDown=function(e){e.keyCode===m.SPACE&&this.fly()},s.onTouchStart=function(){this.fly()},s.onAgain=function(){y.loadScene("IntroScene")},s.onSave=function(){var e=r(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.leadScoreNode.active=!1,t=this.nicknameBox.string.trim()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,P.saveScore(t,this.score);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),s.onHitRocket=function(e){var t=this,i=e.tag;if(10===i||!this.booster)if(i<100)P.isGameOver||this.gameOver();else{var n=i-100;if(this.itemPool.clearItem(n),0===n)P.speed=Math.max(P.speedDefault,P.speed-P.speedSlow);else{this.booster=!0,this.speedBefore=P.speed,P.speed=P.speedBooster,this.scheduleOnce((function(){t.booster=!1,P.speed=t.speedBefore}),3);var o=g(this.fxTail);o.setPosition(new v),this.rocket.node.addChild(o)}var r=g(this.fxCircle);r.setPosition(new v),this.rocket.node.addChild(r),this.audio.play(C.ITEM)}},s.onPassPipes=function(){++this.score,this.scoreLabel.string=this.score.toString(),this.pipePool.addPipes(),P.speed+=10,this.audio.play(C.POINT),this.score%5==0&&this.itemPool.spawn()},t}(S)).prototype,"rocket",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(W.prototype,"pipePool",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(W.prototype,"itemPool",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(W.prototype,"scoreLabel",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(W.prototype,"resultNode",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(W.prototype,"resultTitle",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(W.prototype,"leadScoreNode",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(W.prototype,"nicknameBox",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(W.prototype,"againButton",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(W.prototype,"saveButton",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(W.prototype,"fxCircle",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(W.prototype,"fxTail",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(W.prototype,"audio",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=W))||M));s._RF.pop()}}}));

System.register("chunks:///_virtual/IntroScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts","./Rocket.ts"],(function(t){var n,e,o,i,r,u,l,a,c,s,p,f,m;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,u=t._decorator,l=t.Button,a=t.Sprite,c=t.AudioSource,s=t.director,p=t.Component},function(t){f=t.Data},function(t){m=t.Rocket}],execute:function(){var h,v,b,g,y,d,S,B,k,w,z,C,O,I,R,F,L;r._RF.push({},"01fb6wqlWlOEZGtzRZcZXwv","IntroScene",void 0);var T=u.ccclass,D=u.property;t("IntroScene",(h=T("IntroScene"),v=D(m),b=D(l),g=D(l),y=D(l),d=D(a),S=D(a),B=D(c),h((z=n((w=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];return n=t.call.apply(t,[this].concat(r))||this,o(n,"rocket",z,i(n)),o(n,"startButton",C,i(n)),o(n,"rankingButton",O,i(n)),o(n,"volumnButton",I,i(n)),o(n,"volumnOn",R,i(n)),o(n,"volumnOff",F,i(n)),o(n,"audio",L,i(n)),n}e(n,t);var r=n.prototype;return r.onLoad=function(){this.startButton.node.once(l.EventType.CLICK,this.onStart,this),this.rankingButton.node.once(l.EventType.CLICK,this.onRanking,this),this.volumnButton.node.on(l.EventType.CLICK,this.onVolumnToggle,this),this.volumnButton.getComponent(l).normalSprite=f.mute?this.volumnOff.spriteFrame:this.volumnOn.spriteFrame},r.start=function(){this.rocket.idle()},r.onStart=function(){s.loadScene("GameScene")},r.onRanking=function(){s.loadScene("RankingScene")},r.onVolumnToggle=function(){f.mute&&this.audio.play(),f.mute=!f.mute,this.volumnButton.getComponent(l).normalSprite=f.mute?this.volumnOff.spriteFrame:this.volumnOn.spriteFrame},n}(p)).prototype,"rocket",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(w.prototype,"startButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=n(w.prototype,"rankingButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=n(w.prototype,"volumnButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=n(w.prototype,"volumnOn",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(w.prototype,"volumnOff",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(w.prototype,"audio",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=w))||k));r._RF.pop()}}}));

System.register("chunks:///_virtual/ItemPool.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts"],(function(t){var e,i,o,n,r,a,s,c,u,l,h,p,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized,r=t.createForOfIteratorHelperLoose},function(t){a=t.cclegacy,s=t._decorator,c=t.Node,u=t.UITransform,l=t.Vec3,h=t.Component},function(t){p=t.random,d=t.Data}],execute:function(){var v,f,m,w,y;a._RF.push({},"55690W8vIpIGJqeNLdHljW7","ItemPool",void 0);var I=s.ccclass,P=s.property;t("ItemPool",(v=I("ItemPool"),f=P([c]),v((y=e((w=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"items",y,n(e)),e.width=0,e.itemWidth=100,e}i(e,t);var a=e.prototype;return a.onLoad=function(){this.width=this.node.getComponent(u).width;for(var t,e=r(this.items);!(t=e()).done;){t.value.active=!1}},a.spawn=function(){var t=this.items[p(0,1)];t.active||(t.active=!0,t.setPosition(new l(this.width+this.itemWidth,p(-300,300))))},a.clearItem=function(t){var e=this.items[t];this.scheduleOnce((function(){return e.active=!1}))},a.update=function(t){if(!d.isGameOver)for(var e,i=r(this.items);!(e=i()).done;){var o=e.value;if(o.active){var n=o.position,a=n.x,s=n.y;a-=d.speed*t,o.setPosition(new l(a,s)),a<-(this.width/2+this.itemWidth)&&(o.active=!1)}}},e}(h)).prototype,"items",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=w))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AudioCtrl.ts","./Base64.ts","./Data.ts","./GameScene.ts","./IntroScene.ts","./ItemPool.ts","./PipePool.ts","./Pipes.ts","./RankingScene.ts","./Rocket.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PipePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,t,i,r,n,p,a,s,l,c;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,p=e._decorator,a=e.Prefab,s=e.NodePool,l=e.instantiate,c=e.Component}],execute:function(){var u,f,P,h,d;n._RF.push({},"a0c50cHVU1DnJ1vGIdhZH8s","PipePool",void 0);var v=p.ccclass,y=p.property;e("PipePool",(u=v("PipePool"),f=y({type:a}),u((d=o((h=function(e){function o(){for(var o,t=arguments.length,n=new Array(t),p=0;p<t;p++)n[p]=arguments[p];return o=e.call.apply(e,[this].concat(n))||this,i(o,"prefabPipes",d,r(o)),o.pool=new s,o}t(o,e);var n=o.prototype;return n.onLoad=function(){for(var e=0;e<3;++e){var o=l(this.prefabPipes);this.pool.put(o)}},n.addPipes=function(){var e=this,o=this.pool.get();o&&(o=l(this.prefabPipes),this.pool.put(o)),this.node.addChild(o),o.on("pass",(function(){return e.node.emit("pass")}))},o}(c)).prototype,"prefabPipes",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=h))||P));n._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts"],(function(i){var e,t,n,s,o,p,r,a,h,d,c,l;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,n=i.initializerDefineProperty,s=i.assertThisInitialized},function(i){o=i.cclegacy,p=i._decorator,r=i.Node,a=i.UITransform,h=i.Vec3,d=i.Component},function(i){c=i.random,l=i.Data}],execute:function(){var u,f,y,P,v,w,m;o._RF.push({},"f4535Pf545Fpq+YHprG5ymE","Pipes",void 0);var W=p.ccclass,g=p.property;i("Pipes",(u=W("Pipes"),f=g({type:r}),y=g({type:r}),u((w=e((v=function(i){function e(){for(var e,t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return e=i.call.apply(i,[this].concat(o))||this,n(e,"pipeUp",w,s(e)),n(e,"pipeDown",m,s(e)),e.isPassed=!1,e.parentWidth=void 0,e.pipeWidth=void 0,e}t(e,i);var o=e.prototype;return o.onLoad=function(){this.parentWidth=this.node.parent.getComponent(a).width,this.pipeWidth=this.node.getComponent(a).width;var i=c(350,400),e=c(-290,290);this.pipeUp.setPosition(new h(0,e+i/2)),this.pipeDown.setPosition(new h(0,e-i/2)),this.node.setPosition(new h(this.parentWidth/2+this.pipeWidth/2,0))},o.update=function(i){if(!l.isGameOver){var e=this.node.position,t=e.x,n=e.y;t-=l.speed*i,this.node.setPosition(new h(t,n)),!this.isPassed&&t<-this.pipeWidth/2&&(this.isPassed=!0,this.node.emit("pass")),t<-(this.parentWidth/2+this.pipeWidth)&&this.destroy()}},e}(d)).prototype,"pipeUp",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=e(v.prototype,"pipeDown",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=v))||P));o._RF.pop()}}}));

System.register("chunks:///_virtual/RankingScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,o,i,r,a,c,u,l,s;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,o=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){r=n.cclegacy,a=n._decorator,c=n.Button,u=n.Label,l=n.director,s=n.Component}],execute:function(){var p,d,h,f,g,b,y;r._RF.push({},"89020RLa4RMZL7FzByZJbmC","RankingScene",void 0);var L=a.ccclass,m=a.property;n("RankingScene",(p=L("RankingScene"),d=m(c),h=m(u),p((b=e((g=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r))||this,o(e,"homeButton",b,i(e)),o(e,"loadingLabel",y,i(e)),e.dotCount=1,e}t(e,n);var r=e.prototype;return r.onLoad=function(){var n=this;this.homeButton.node.once(c.EventType.CLICK,this.onHome,this),this.schedule((function(){n.loadingLabel.string="Loading"+".".repeat(n.dotCount),++n.dotCount>3&&(n.dotCount=1)}),.5)},r.onHome=function(){l.loadScene("IntroScene")},e}(s)).prototype,"homeButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(g.prototype,"loadingLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=g))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/Rocket.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,i,e,s,r,c,a,p,l,h,d,u;return{setters:[function(t){n=t.inheritsLoose,o=t.createClass},function(t){i=t.cclegacy,e=t._decorator,s=t.Collider2D,r=t.Contact2DType,c=t.ERigidBody2DType,a=t.tween,p=t.Vec3,l=t.Tween,h=t.Animation,d=t.RigidBody2D,u=t.Component}],execute:function(){var y;i._RF.push({},"10144USUqBGnKQ7726/IVOr","Rocket",void 0);var g=e.ccclass;e.property,t("Rocket",g("Rocket")(y=function(t){function i(){for(var n,o=arguments.length,i=new Array(o),e=0;e<o;e++)i[e]=arguments[e];return(n=t.call.apply(t,[this].concat(i))||this).Fly={DURATION:.3,HEIGHT:100},n}n(i,t);var e=i.prototype;return e.onLoad=function(){this.getComponent(s).on(r.BEGIN_CONTACT,this.onContact,this)},e.onContact=function(t,n,o){this.node.emit("hit",n)},e.idle=function(){this.ani.play("idle"),this.rigid.type=c.Static},e.fly=function(){var t=this;this.ani.stop(),a(this.node.position).to(this.Fly.DURATION,new p(this.node.position.x,this.node.position.y+this.Fly.HEIGHT,0),{easing:"smooth",onUpdate:function(n){t.node&&(t.node.position=n)}}).start(),this.ani.play("fly")},e.stop=function(){this.rigid.gravityScale=0,this.rigid.sleep(),l.stopAllByTarget(this.node.position)},o(i,[{key:"ani",get:function(){return this.node.getComponent(h)}},{key:"rigid",get:function(){return this.node.getComponent(d)}}]),i}(u))||y);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});