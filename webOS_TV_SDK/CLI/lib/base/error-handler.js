var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,e,c){if(b==Array.prototype||b==Object.prototype)return b;b[e]=c.value;return b};
$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<b.length;++e){var c=b[e];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,e){var c=$jscomp.propertyToPolyfillSymbol[e];if(null==c)return b[e];c=b[c];return void 0!==c?c:b[e]};$jscomp.polyfill=function(b,e,c,a){e&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,e,c,a):$jscomp.polyfillUnisolated(b,e,c,a))};
$jscomp.polyfillUnisolated=function(b,e,c,a){c=$jscomp.global;b=b.split(".");for(a=0;a<b.length-1;a++){var d=b[a];if(!(d in c))return;c=c[d]}b=b[b.length-1];a=c[b];e=e(a);e!=a&&null!=e&&$jscomp.defineProperty(c,b,{configurable:!0,writable:!0,value:e})};
$jscomp.polyfillIsolated=function(b,e,c,a){var d=b.split(".");b=1===d.length;a=d[0];a=!b&&a in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var g=0;g<d.length-1;g++){var f=d[g];if(!(f in a))return;a=a[f]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?a[d]:null;e=e(c);null!=e&&(b?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:e}):e!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[d]&&(c=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+c+"$"+d),$jscomp.defineProperty(a,$jscomp.propertyToPolyfillSymbol[d],{configurable:!0,writable:!0,value:e})))};$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(e,c){var a=this;a instanceof String&&(a=String(a));var d=a.length;c=c||0;for(0>c&&(c=Math.max(c+d,0));c<d;c++){var g=a[c];if(g===e||Object.is(g,e))return!0}return!1}},"es7","es3");const log=require("npmlog");
(function(){function b(a,d){a&&(this.heading="["+a+" failure]:");this.message=d;this.stack=Error().stack}const e={},c={'for category "/dev"':'Please enable "Developer Mode" on your device',"failed to extract ipk file":"Please check whether the ipk file is packaged by CLI or not","Failed to parse control":"Please check whether the ipk file is packaged by CLI or not","Failed to extract package":"Please check whether the ipk file is packaged by CLI or not","duplicate command":"Please wait and retry the command",
"update manifest file failed":"Please wait and retry the command","Cannnot install privileged app on developer mode":"Please change the app id (app id should not start with 'com.lge', 'com.webos', 'com.palm')","Cannnot remove privileged app on developer mode":"You cannot remove the privileged app whose app id start with 'com.lge', 'com.webos', 'com.palm'","unable to execute smack":"Please remove the app and install again",FAILED_REMOVE:"Please check app is installed to device by ares-install -l",
"Cannot find proper launchPoint":"The app is not installed. Please check the list by ares-install -l","was not found OR Unsupported Application Type":"The app is not installed. Please check the list of installed apps using ares-install -l","not exist":"The app is not installed. Please check the list by ares-install -l","Invalid appId specified":"The app is not installed. Please check the list by ares-install -l","is not running":"Please check the list of running apps using ares-launch -r","invalid parameters":"Invalid parameters are passed. Please check the parameters",
"app is locked":"The app is now installing/updating/deleting. Please try again later",EACCES:"Permission denied. Please check the directory permission",EADDRINUSE:"An attempt to bind a server to a local address failed. Please check the IP address or the port number",ECONNREFUSED:"Connection refused. Please check the device IP address or the port number",ECONNRESET:"Unable to connect to the device. Please check the device",ENOENT:"Please check if the path is valid",ENOTDIR:"Please check if the path is valid",
EROFS:"Please check if the path is valid",TIME_OUT:"Connection timed out. Please check the device IP address or the port number",NO_FREE_SPACE:"Installation failure. Please check if there is sufficient free space in the disk","Authentication failure":"ssh authentication failure. Please check the ssh connection info such as password, private key and username again","connect Unknown system":"Please check the device IP address or the port number","Unable to parse private key":"Wrong passphrase for ssh key. Please check passphrase again",
"Unable to request a pseudo-terminal":"Unable to open terminal (Target does not allow to open pty)",REQUIRED_FIELD:"Please input required field",INVALID_ID_RULE:"The app/pkg ID should consist of lowercase letters (a-z), numbers (0-9), plus (+) and minus (-) signs and periods (.)",INVALID_VERSION_RULE:"The app/pkg version number should consist of three non-negative integers, separated by dots.\nEach number cannot exceed 9 digits and cannot contain leading zeroes",NOT_EXCLUDE_APPINFO:"You cannot exclude the appinfo.json file",
NOT_RELATIVE_PATH_APPINFO:"The pathname must be relative to the directory where the appinfo.json file is located",NO_METAFILE:"No meta file (ex. appinfo.json, services.json) exists in the project directory",NO_COMPONENT_FILE:"There is no component file for webOS package. File:",NO_ACCOUNT:"Account directory is not supported. Please delete the 'account-templates.json' file.",OVER_APPCOUNT:"You can package only one application at once",NOT_WITH_RESOURCE:"You cannot package app/service with resource",
INVALID_APPID:"App ID must start with package ID",INVALID_SERVICEID:"Service ID must start with package ID",INVALID_RESOURCEID:"Resource ID must start with package ID",FAILED_MINIFY:"Failed to minify code. Please check the source code",INVALID_MAIN_FILE:"Failed to get executable file name from appinfo.json",INVALID_JSON_FORMAT:"Invalid JSON format",INVALID_ARGV:"Please check arguments",INVALID_INTERVAL:'Please use nonnegative integer value for the "time-interval" option',INVALID_TEMPLATE:"Invalid template name",
INVALID_FILE:"Invalid file",INVALID_VALUE:"Invalid value",INVALID_DEVICENAME:"Invalid device name. Do not use letters starting with '%' or '$'",INVALID_OBJECT:"Object format error",INVALID_MODE:"Please specify an option, either '--add' or '--modify'",INVALID_CSV_FORMAT:"Please change the file extension to .csv",INVALID_IP:"IP format error",INVALID_SINCE:"'--since' option must have integer in front of 'd|h|m|s' letters like \"1d1h1m1s\"",INVALID_FILTER:"FILTER is a series of TAG:LEVEL and LEVEL must be one of 'D, I, W, E, C, S' like \"*:W\"",
INVALID_LOG_OUTPUT:'\'--output\' option must be "time" or "process"',EMPTY_PROFILE:"Profile is empty",EMPTY_VALUE:"Please specify a value",EXISTING_VALUE:"The specified value already exists",EXISTING_FILETYPE_PATH:"A file with the same name at the specified location already exists",SUPPORT_ONLY_IPK:"Only .ipk file is supported. Please check the file extension",NOT_DIRTYPE_PATH:"The specified path is not a directory",NOT_EXIST_PATH:"The specified path does not exist",NOT_EXIST_SSHKEY_PASSWD:"Private key file or password does not exist",
NOT_SUPPORT_ENYO:"Enyo app packaging is not supported",NOT_SUPPORT_AUTHTYPE:"Not supported auth type",NOT_SUPPORT_RUNNINGLIST:"Not supported method to get running app information",NOT_SUPPORT_GDBSERVER:"Not supported gdbserver on webOS TV version under 3.0",NOT_SUPPORT_XZ:"xz file is not supported. Only .ipk file packaged with the CLI is supported",NOT_USE_WITH_OPTIONS:"Do not use together with options",USE_WITH_OPTIONS:"Use together with options",USE_PKGID_PKGINFO:"packageId must be provided by using either the '--pkgid' or the '--pkginfofile' option",
USE_GDB:"Please use GDB to debug a native serivce",NOT_IMPLEMENTED:"Not implemented",NOT_HANDLE_FILE:"Don't know how to handle",NOT_OVERWRITE_DIR:"Cannot overwrite the directory",UNMATCHED_DEVICE:"No matched device",UNMATCHED_VERSION:"No matched version",CANNOT_REMOVE_DEVICE:"Cannot remove the device",FAILED_CALL_LUNA:"luna-send command failed",FAILED_GET_PORT:"Failed to get Debug port",FAILED_GET_SVCPATH:"Failed to get service installation path",FAILED_GET_SSHKEY:"Failed to get ssh private key",
FAILED_TRANSMIT_FILE:"File transmission error. Please try again",FAILED_CREATE_DIR:"Cannot create directory in the destination path - permission denied",FAILED_REMOVE_PACKAGE:"No packages installed or removed",FAILED_FIND_SERVICE:"Failed to find a service with the specified name",FAILED_GET_APPINFO:"Failed to get appinfo.json",CONNECTED_MULTI_DEVICE:"Multiple devices are connected by novacom. Please specify the target name",SET_DEFAULT_MULTI_DEVICE:"Multiple devices are set to default target. Please reset device list",
NEED_ROOT_PERMISSION:"Unable to connect to the target device. root access required",MISSING_CALLBACK:"Missing completion callback",USING_WEBINSPECTOR:"Web Inspector is already connected with another browser. Please close the previous connection",UNKNOWN_OPERATOR:"Unknown operator",UNABLE_USE_SFTP:"Unable to use sftp"};e.getErrMsg=function(a,d,g,f){log.silly("error-handler#getErrMsg()","errKey:",a,", option:",d,", value:",g,", heading:",f);if(!a)return a;const h=a,k=[];if("object"===typeof h)f="syscall",
d=h.code,h.syscall||(f="ssh exec",d=h.message.trim()),f=new b(f,h.message.trim()),f.message&&k.push(f),a=d,d=h.path,f=g="";else if("FAILED_CALL_LUNA"===h&&f){a=e.getErrStr(h,d,g);if(!a)return h;f=new b(f,a);f.message&&k.push(f);a=d;f=g=d=""}if(a=e.getErrStr(a,d,g))d=new b(f,a),d.message&&k.push(d);return 0<k.length?k:h};e.getErrStr=function(a,d,g){log.silly("error-handler#getErrStr()","errKey:",a,", option:",d,", value:",g);if(!a)return a;let f;if("string"===typeof a)for(const h in c)if(a.toString()===
h||a.includes(h)){f=c[h];d&&(f=f+" <"+d+">");g&&(f=f+" : "+g);break}return f};b.prototype=Object.create(Error.prototype);b.prototype.heading="[Tips]:";"undefined"!==typeof module&&module.exports&&(module.exports=e)})();