(this.webpackJsonpprltaskd3=this.webpackJsonpprltaskd3||[]).push([[0],{109:function(t,e,a){"use strict";a.r(e),a.d(e,"history",(function(){return E}));var n=a(0),o=a.n(n),s=a(46),r=a.n(s),i=a(14),c=a(15),l=a(18),d=a(17),u=a(1),h=a(24),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),p=(a(86),a(87),a(43)),m=a(88),v=a(89);a(103);var y=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;Object(i.a)(this,a),console.log("LabJsWrapperconstructor"),n=e.call(this,t);var o=v.parse(n.props.location.search,{ignoreQueryPrefix:!0});return n.surveyUrl=o.survey_url,n.state={encryptedMetadata:o.id,sendingData:!1,link:void 0},m.isUndefined(n.state.encryptedMetadata)||n.addScript("/PRLtaskd3/external/lab.js",(function(){n.addScript("/PRLtaskd3/script.js")})),n}return Object(c.a)(a,[{key:"packageDataForExport",value:function(t){var e={};return console.log("packageDataForExport"),console.log(t),e.encrypted_metadata=this.state.encryptedMetadata,e.taskName=p.taskName,e.taskVersion=p.taskVersion,e.data=this.processLabJsData(t),JSON.stringify(e)}},{key:"processLabJsData",value:function(t){return t}},{key:"componentDidMount",value:function(){console.log("in componentdidmount");var t=this;window.addEventListener("message",(function(e){if("labjs.data"===e.data.type){var a=JSON.parse(e.data.json);if(f)return void(t.surveyUrl&&(console.log("in that.surveyUrl"),t.setState({link:t.surveyUrl})));t.setState({sendingData:!0}),t.saveTaskDataWithRetry(a,2)}}))}},{key:"saveTaskDataWithRetry",value:function(t,e){var a=this;console.log("new saveTaskData called"),Object(h.b)(a.state.encryptedMetadata,a.packageDataForExport(t)).then((function(){a.handleDataSaveSuccess()})).catch((function(n){e>1?setTimeout((function(){console.log("Retrying to save task data..."),a.saveTaskDataWithRetry(t,e-1)}),1e3):console.error("Failed to save task data after retries:",n)}))}},{key:"handleDataSaveSuccess",value:function(){var t=this;this.surveyUrl?this.setState({link:this.surveyUrl}):Object(h.a)(this.state.encryptedMetadata).then((function(e){return t.setState({link:e})}))}},{key:"addScript",value:function(t,e){var a=document.createElement("script");a.src=t,a.type="module",a.onreadystatechange=e,a.onload=e,document.head.appendChild(a)}},{key:"render",value:function(){return m.isUndefined(this.state.encryptedMetadata)?o.a.createElement("div",null,o.a.createElement("h2",null,"Something went wrong. Please try again.")):(m.isUndefined(this.state.link)||window.location.assign(this.state.link),o.a.createElement("div",null,o.a.createElement("div",{className:"container fullscreen","data-labjs-section":"main",style:{visibility:this.state.sendingData?"hidden":"visible"}},o.a.createElement("main",{className:"content-vertical-center content-horizontal-center"})),o.a.createElement("div",{className:"center",style:{visibility:this.state.sendingData?"visible":"hidden"}},o.a.createElement("h2",null,"Saving data... do not exit window"))))}}]),a}(n.Component),k=function(){return o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",exact:!0,component:y}))},g=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,null))}}]),a}(n.Component),b=a(23),w=a(3),E=Object(w.a)();console.log("render react"),r.a.render(o.a.createElement(b.a,{history:E,basename:"/PRLtaskd3"},o.a.createElement(g,null)),document.getElementById("root"))},24:function(t,e,a){"use strict";(function(t){a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a(55),o=a(83),s=a(43);function r(e,a){return new Promise((function(r,i){var c=o.stringify({encrypted_metadata:e,data:a}),l={hostname:s.awsLambda.saveTaskData.host,port:443,path:s.awsLambda.saveTaskData.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":t.byteLength(c)}},d=n.request(l,(function(t){t.setEncoding("utf8"),t.on("data",(function(){})),t.on("end",r)}));d.on("error",(function(t){s.debug&&(console.log("ERROR:"),console.log(t)),i(t)})),d.write(c),d.end()}))}function i(e){return new Promise((function(a,r){var i=o.stringify({encrypted_metadata:e}),c={hostname:s.awsLambda.fetchLink.host,port:443,path:s.awsLambda.fetchLink.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":t.byteLength(i)}},l=n.request(c,(function(t){t.setEncoding("utf8");var e="";t.on("data",(function(t){e+=t})),t.on("end",(function(){return a(e)}))}));l.on("error",(function(t){s.debug&&(console.log("ERROR:"),console.log(t)),r(t)})),l.write(i),l.end()}))}}).call(this,a(7).Buffer)},43:function(t){t.exports=JSON.parse('{"taskVersion":"1.0.0","taskName":"prltaskd3","debug":false,"awsLambda":{"saveTaskData":{"host":"de8cnjde61.execute-api.us-east-2.amazonaws.com","path":"/default/saveTaskData"},"fetchLink":{"host":"3pnzb6n9vf.execute-api.us-east-2.amazonaws.com","path":"/default/fetchLink"}}}')},48:function(t,e,a){t.exports=a(109)},58:function(t,e){},60:function(t,e){},81:function(t,e){},86:function(t,e,a){},87:function(t,e,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.afa78e27.chunk.js.map