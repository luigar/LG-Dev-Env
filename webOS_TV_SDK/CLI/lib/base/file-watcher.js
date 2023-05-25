const chokidar=require("chokidar"),path=require("path"),fs=require("fs"),npmlog=require("npmlog"),luna=require("./luna"),errHndl=require("./error-handler");
(function(){const b=npmlog;b.heading="fileWatcher";b.level="warn";let h=!1;const l={log:b,watch:function(d){b.verbose("file-watcher#watch()");const a=d.hostedurl,e=this._startWatcher(a);e.on("all",(c,f)=>{b.verbose("file-watcher#watch():",c,f);".reloadignore"===path.basename(f)?e.close().then(()=>{b.verbose("file-watcher#watch():","ignoreListFile changed");this.watch(d)}):this._launch(d,function(g){g&&(console.log("Failed to relaunch Ares Hosted App"),b.error(g.toString()),b.verbose(g.stack))})});
e.on("error",c=>{b.error(`Watcher error: ${c}`)});process.on("SIGINT",function(){e.close().then(()=>{b.verbose("file-watcher#watch():","SIGINT is detected, watcher close",a)})})},_startWatcher:function(d){const a=this._readIgnoreList(d);b.verbose("file-watcher#_startWatcher():","ignored",a);return chokidar.watch(d,{ignored:a,ignoreInitial:!0})},_readIgnoreList:function(d){var a=path.join(d,".reloadignore");b.verbose("file-watcher#_readIgnoreList():",a);if(fs.existsSync(a))try{const e=fs.readFileSync(a,
"utf-8");b.silly("file-watcher#_readIgnoreList():","fs.readFileSync:",e);const c=e.split(/\r?\n/);for(a=0;a<c.length;a++)""===c[a]?(c.splice(a,1),a--):c[a]&&!path.isAbsolute(c[a])&&0!==c[a].indexOf("**")&&(c[a]=path.join(d,c[a]));return c}catch(e){return b.error(e),[]}else return[]},_launch:function(d,a){if(!h){h=!0;var e=d.session.getDevice().lunaAddr.launch,c=e.returnValue.split(".");luna.send(d,e,{id:d.appId,subscribe:!1,params:{}},function(f,g){b.silly("file-watcher#_launch():","Relaunch lineObj:",
f);for(let k=1;k<c.length;k++)f=f[c[k]];f?(b.verbose("file-watcher#_launch():","Relaunch success"),h=!1,g(null)):(b.verbose("file-watcher#_launch():","Relaunch failure"),h=!1,g(errHndl.getErrMsg("INVALID_OBJECT")))},a)}}};"undefined"!==typeof module&&module.exports&&(module.exports=l)})();
