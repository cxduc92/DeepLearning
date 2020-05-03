
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"184",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function c(d,e,c){var b=function(a){return(a=a.replace(\/^\\\/[a-z]{2}-[a-z]{2}\/i,\"\"))?a:\"\/\"},m=function(a,b){var d=a.split(\/[\u0026;]\/),f=[],g=\"\";if(\"\"===a)return\"\";for(a=0;a\u003Cd.length;a++){var k=d[a].split(\"\\x3d\"),c=k[0];k=k[1];include=!0;for(var e=0;e\u003Cb.length;e++){var h;(h=c.toLowerCase()===b[e].toLowerCase())||(h=\/(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/,h=h.test(c));h\u0026\u0026(include=!1)}include\u0026\u0026\nf.push({name:c,value:k})}for(a=0;a\u003Cf.length;a++)g+=f[a].name,g+=\"\\x3d\",g+=f[a].value,a!==f.length-1\u0026\u0026(g+=\"\\x26\");return\"?\"+g};b=b(d);var l=b.split(\"?\");d=l[0];b=1\u003Cl.length?b.replace(d,\"\").substring(1):\"\";e=m(b,e);b=d+e;return b=b.replace(\/([a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+(@|%40|%2540)[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+\\.[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^*\\(\\)]+)\/gi,c)}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",1],8,16],",d=document.location.pathname+document.location.search;return c(d,a,b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",2],
      "vtp_name":"page.canonicalPathName"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",1],8,16],";return c(",["escape",["macro",4],8,16],",a,b)})();"]
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return function(b){try{a\u0026\u0026b.set(\"dimension\"+String(a),b.get(\"clientId\"))}catch(c){console.log(c)}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subsection"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){referrer=document.referrer;return referrer.replace(\/=([^\u0026]+@[^\\.]+)\\.\/g,\"\\x3dxxx@xxx.\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a=a.getTimezoneOffset()\/60})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";if(a=a.match(\/^\\\/[a-z]{2}-[a-z]{2}\/))return a[0].split(\"\/\")[1]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",20],
      "vtp_defaultValue":"English",
      "vtp_map":["list",["map","key","fr-fr","value","French"],["map","key","zh-cn","value","Chinese"],["map","key","de-de","value","Dutch"],["map","key","ja-jp","value","Japanese"],["map","key","ko-kr","value","Korean"],["map","key","pt-br","value","Portuguese"],["map","key","es-es","value","Spanish"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=1004,b=756;return window.innerWidth\u003Ea?\"desktop\":window.innerWidth\u003Eb?\"tablet\":\"mobile\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.ars_userId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",23],8,16],")return\"ars_userId-\"+",["escape",["macro",23],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",24],
      "vtp_name":"user.amg_userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.loginStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.uID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.sID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.subscriberStatus"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"CN_xid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.registrationSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());if(void 0!=urlParams.get(\"user_id\")||null!=urlParams.get(\"user_id\"))return urlParams.get(\"user_id\");if(void 0!=urlParams.get(\"cndid\")||null!=urlParams.get(\"cndid\"))return urlParams.get(\"cndid\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.monthlyVisitCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contributor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentLength"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.display"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.uniqueContentCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.monthlyContentCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publishDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.modifiedDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.keywords"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"web",
      "vtp_name":"content.dataSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.campaignName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.circCampaignId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.internalCampaignId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.certified_mrc_data"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.paymentMethod"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003C",["escape",["macro",50],8,16],".indexOf(\"sub\")?\"sub\":-1\u003C",["escape",["macro",50],8,16],".indexOf(\"free\")?\"not paywalled\":\"paywalled\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",51],
      "vtp_name":"user.accessPaywall"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.syndicatorUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.canonical"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.embeddedMedia"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search.facets"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search.searchTerms"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.appVersion"
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",61],8,16],",b=a.split(\".\"),c=\".cdn.ampproject.org .co.ao .co.bw .co.cr .co.id .co.il .co.in .co.jp .co.ke .co.kr .co.ma .co.mz .co.nz .co.th .co.uk .co.ve .co.za .co.zm .co.zw .com.af .com.ag .com.ar .com.au .com.bd .com.bh .com.bn .com.br .com.bz .com.cn .com.co .com.cy .com.do .com.ec .com.eg .com.gh .com.gi .com.gt .com.hk .com.jm .com.kh .com.kw .com.lb .com.ly .com.mm .com.mt .com.mx .com.my .com.na .com.ng .com.ni .com.np .com.pa .com.pe .com.pg .com.ph .com.pk .com.pr .com.py .com.sa .com.sg .com.sv .com.tr .com.tw .com.ua .com.uy .com.vc .com.vn .elle.se .fefe.de .net.au .go.com\".split(\" \");\nif((new RegExp(c.join(\"|\"))).test(a))return a;if(\"\"!=a)return b[b.length-2]+\".\"+b[b.length-1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){queryString=document.location.search;return queryString.replace(\/=([^\u0026]+@[^\\.]+)\\.\/g,\"\\x3dxxx@xxx.\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){fullUrl=document.location.href;return fullUrl.replace(\/=([^\u0026]+@[^\\.]+)\\.\/g,\"\\x3dxxx@xxx.\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"AMCV_F7093025512D2B690A490D44%40AdobeOrg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],";if(a)return a=a.split(\"|\"),a[a.indexOf(\"MCMID\")+1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){referrer=",["escape",["macro",4],8,16],";return referrer.replace(\/=([^\u0026]+@[^\\.]+)\\.\/g,\"\\x3dxxx@xxx.\")})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mbid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.pageValue"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"HEARST.circ.digital_account_number"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_social-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_mailing\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_test\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_brand\")})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"esrc",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return!0===b?\"Adblock Enabled - \"+b:\"Adblock Enabled - false\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.wordCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"dmd-sid"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.hasBuyButtons"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"CN_segments"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"segment1\",\"segment2\"],a=",["escape",["macro",82],8,16],".split(\"|\");return a=a.filter(function(a){return b.includes(a)})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"usr_bkt_eva\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.pageTypeProperties"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",85],8,16],",b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return 768\u003C=b?(pageTypePropertiesArray=a.split(\"|\"),readMoreFlagIndex=pageTypePropertiesArray.indexOf(\"readMoreFlag\"),pageTypePropertiesArray.splice(readMoreFlagIndex,1),pageTypePropertiesArray):",["escape",["macro",85],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return hj.globals.get(\"userId\").split(\"-\").shift()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"DL - paywallSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subsection2"
    },{
      "function":"__c",
      "vtp_value":"UA-31997-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","page","value",["macro",3]],["map","fieldName","referrer","value",["macro",5]],["map","fieldName","customTask","value",["macro",7]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",9]],["map","index","3","group",["macro",10]],["map","index","4","group",["macro",11]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]],["map","index","2","dimension",["macro",13]],["map","index","4","dimension",["macro",14]],["map","index","6","dimension",["macro",15]],["map","index","7","dimension",["macro",16]],["map","index","8","dimension",["macro",17]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]],["map","index","11","dimension",["macro",22]],["map","index","5","dimension",["macro",25]],["map","index","12","dimension",["macro",26]],["map","index","18","dimension",["macro",27]],["map","index","19","dimension",["macro",28]],["map","index","20","dimension",["macro",29]],["map","index","21","dimension",["macro",30]],["map","index","22","dimension",["macro",31]],["map","index","23","dimension",["macro",32]],["map","index","24","dimension",["macro",33]],["map","index","25","dimension",["macro",34]],["map","index","26","dimension",["macro",35]],["map","index","27","dimension",["macro",36]],["map","index","28","dimension",["macro",37]],["map","index","29","dimension",["macro",38]],["map","index","30","dimension",["macro",39]],["map","index","31","dimension",["macro",40]],["map","index","32","dimension",["macro",41]],["map","index","34","dimension",["macro",42]],["map","index","35","dimension",["macro",43]],["map","index","36","dimension",["macro",44]],["map","index","40","dimension",["macro",45]],["map","index","41","dimension",["macro",46]],["map","index","42","dimension",["macro",47]],["map","index","43","dimension",["macro",48]],["map","index","44","dimension",["macro",49]],["map","index","39","dimension",["macro",52]],["map","index","58","dimension",["macro",53]],["map","index","61","dimension",["macro",54]],["map","index","62","dimension",["macro",55]],["map","index","63","dimension",["macro",56]],["map","index","64","dimension",["macro",57]],["map","index","66","dimension",["macro",58]],["map","index","67","dimension",["macro",59]],["map","index","72","dimension",["macro",60]],["map","index","59","dimension",["macro",62]],["map","index","65","dimension",["macro",63]],["map","index","92","dimension",["macro",64]],["map","index","93","dimension",["macro",10]],["map","index","94","dimension",["macro",11]],["map","index","97","dimension",["macro",66]],["map","index","103","dimension",["macro",67]],["map","index","99","dimension",["macro",68]],["map","index","98","dimension",["macro",8]],["map","index","38","dimension",["macro",69]],["map","index","52","dimension",["macro",70]],["map","index","55","dimension",["macro",71]],["map","index","104","dimension",["macro",72]],["map","index","105","dimension",["macro",73]],["map","index","106","dimension",["macro",74]],["map","index","107","dimension",["macro",75]],["map","index","109","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","111","dimension",["macro",78]],["map","index","112","dimension",["macro",79]],["map","index","113","dimension",["macro",80]],["map","index","114","dimension",["macro",81]],["map","index","115","dimension",["macro",83]],["map","index","116","dimension",["macro",84]],["map","index","117","dimension",["macro",86]],["map","index","118","dimension",["macro",87]],["map","index","120","dimension",["macro",88]],["map","index","121","dimension",["macro",89]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","recirc.*click","value","14"],["map","key","video-start","value","15"],["map","key","barrier-half","value","16"],["map","key","barrier-full","value","17"],["map","key","newsletter-signup-complete|BounceX Submission","value","18"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","barrier-full","value","full barrier appeared"],["map","key","barrier-half","value","half barrier appeared"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.option"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorDescription"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","embedded-link-click","value","embedded link click"],["map","key","in-view-click-rec-content-inline","value","rec content inline in-view click"],["map","key","in-view-click-rec-content","value","rec content in-view click"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clickURL"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","embedded-link-click","value","GA - Event - Inline Embedded Link Click"],["map","key","in-view-click-rec-content-inline","value","GA - Event - Inline Embedded Link Click"],["map","key","in-view-click-rec-content","value","GA - Event - Inline Embedded Link Click"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","login-attempt","value","0"],["map","key","login-fail","value","1"],["map","key","login-complete","value","1"],["map","key","logout-click","value","0"],["map","key","forgot-password","value","0"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"failureReason"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","login-attempt","value","attempt"],["map","key","login-fail","value",["template","fail - ",["macro",107]]],["map","key","login-complete","value","complete"],["map","key","logout-click","value","logout"],["map","key","forgot-password","value","forgot password"],["map","key","forgot-password-reset-request","value","forgot-password-reset-request"],["map","key","forgot-password-reset-successful","value","forgot-password-reset-successful"],["map","key","forgot-password-reset-email-follow","value","forgot-password-reset-email-follow"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginSource"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","login-attempt","value",["macro",109]],["map","key","login-fail","value",["macro",109]],["map","key","login-complete","value",["macro",109]],["map","key","logout-click","value",["macro",92]],["map","key","forgot-password","value",["macro",92]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",95],8,16],"||\"(gtm not set)\";return a.replace(\"mailto:\",\"\")})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","newsletter-signup-attempt","value","attempt"],["map","key","newsletter-signup-failure","value",["template","fail: ",["macro",107]]],["map","key","newsletter-signup-complete","value","complete"],["map","key","paywall-bar-newsletter-signup-complete","value","complete"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletter.newsletterId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",113],
      "vtp_name":"newsletterId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",97],8,16],"!==",["escape",["macro",95],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","registration-start","value","0"],["map","key","registration-attempt","value","0"],["map","key","registration-fail","value","1"],["map","key","registration-complete","value","1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","registration-start","value","start"],["map","key","registration-attempt","value","attempt"],["map","key","registration-fail","value",["template","fail: ",["macro",107]]],["map","key","registration-complete","value","complete"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signUpSource"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","registration-start","value",["macro",92]],["map","key","registration-attempt","value",["macro",118]],["map","key","registration-fail","value",["macro",118]],["map","key","registration-complete","value",["macro",118]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","social-follow-start","value","follow start"],["map","key","social-share-start","value","share start"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","video-ad-call","value","true"],["map","key","video-ad-view","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","video-ad-call","value","ad call"],["map","key","video-ad-view","value","ad view"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAdPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoSeason"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLength"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPlayerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPlaylist"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoProducer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoViewsInVisit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPlayMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAdLength"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoBrand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoOandOFlag"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","video-loaded","value","true"],["map","key","video-start","value","true"],["map","key","video-progress","value","true"],["map","key","video-complete","value","true"],["map","key","video-full-screen","value","true"],["map","key","video-scrub","value","true"],["map","key","video-share","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",80],
      "vtp_defaultValue":"1",
      "vtp_map":["list",["map","key","video-scrub","value","0"],["map","key","video-share","value","0"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoSecondsWatched"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","video-progress","value",["macro",141]],["map","key","video-complete","value",["macro",141]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoShareType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPercent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"progress: \"+",["escape",["macro",144],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"scrub: \"+",["escape",["macro",144],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","video-loaded","value","loaded"],["map","key","video-start","value","start"],["map","key","video-complete","value","complete"],["map","key","video-full-screen","value","full-screen"],["map","key","video-share","value",["template","share ",["macro",143]]],["map","key","video-progress","value",["macro",145]],["map","key","video-scrub","value",["macro",146]]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","product-click","value","click"],["map","key","product-detail-view","value","detail"],["map","key","add-to-cart","value","add"],["map","key","remove-from-cart","value","remove"],["map","key","checkout-step","value","checkout"],["map","key","transaction","value","purchase"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",150],8,16],",d=void 0;if(c){var a=",["escape",["macro",151],8,16],";if(c[a]){d={};d[a]=c[a];var e=d[a];a=c[a].products;if(Array.isArray(a))for(var b=0;b\u003Ca.length;b++)a[b].dimension96\u0026\u0026(a[b].dimension100=a[b].dimension96),a[b].dimension94\u0026\u0026(a[b].dimension101=a[b].dimension94),a[b].dimension95\u0026\u0026(a[b].dimension102=a[b].dimension95),delete a[b].dimension96,delete a[b].dimension94,delete a[b].dimension95;e.products=a;d.impressions=c.impressions;d.promoView=c.promoView}}return{ecommerce:d}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",98],
      "vtp_map":["list",["map","key","1","value","Checkout Load"],["map","key","2","value","Account Sign-in"],["map","key","3","value","Billing\/Shipping Address"],["map","key","4","value","Payment Entry"],["map","key","5","value","Place Order Click"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.name"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"OptanonConsent"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","bouncex impression","value","1"],["map","key","bouncex submission","value","0"],["map","key","bouncex click","value","0"],["map","key","bouncex close","value","0"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bouncex-action"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",80],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"0",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","recirc.*impression","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"interstitial_reel.reel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"interstitial_reel.image"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"recirc-curation"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","recirc-.*interstitial_reel-impression","value",["template","reel: ",["macro",164]]],["map","key","recirc-.*interstitial_reel-scroll","value",["template","reel: ",["macro",164],"; image: ",["macro",165]]],["map","key","recirc-.*interstitial_reel-click","value",["template","reel: ",["macro",164],"; image: ",["macro",165]]],["map","key","recirc-endof-click","value",["macro",166]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","account-create-one","value","start"],["map","key","account-signup-attempt","value","attempt"],["map","key","account-signup-fail","value",["template","fail: ",["macro",107]]],["map","key","account-signup-success","value","complete"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",80],
      "vtp_map":["list",["map","key","account-create-one","value",["macro",92]],["map","key","account-signup-attempt","value",["macro",118]],["map","key","account-signup-fail","value",["macro",118]],["map","key","account-signup-success","value",["macro",118]]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gallery-item-number"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",80],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"0",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","outbrain.*impression","value","1"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b){b=b||",["escape",["macro",172],8,16],";b.closest||(Element.prototype.closest=function(b){var c,a=this;for([\"matches\",\"webkitMatchesSelector\",\"mozMatchesSelector\",\"msMatchesSelector\",\"oMatchesSelector\"].some(function(a){return\"function\"==typeof document.body[a]?(c=a,!0):!1});null!==a.parentNode;){if(a\u0026\u00261===a.nodeType\u0026\u0026a[c](b))return a;a=a.parentNode}});return b.closest(d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"article-body\",c=\"gallery-body\",a=\"data-attribute-verso-pattern\";return ",["escape",["macro",173],8,16],"(\"[\"+a+\"]\").getAttribute(a)==b||",["escape",["macro",173],8,16],"(\"[\"+a+\"]\").getAttribute(a)==c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!!",["escape",["macro",173],8,16],"('[class*\\x3d\"recirc-most-popular\"],[class*\\x3d\"mobile-gallery-recirc\"],[data-buy-button\\x3d\"true\"],[class*\\x3d\"external-link product-embed\"]')})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){clickUrlClean=-1\u003C",["escape",["macro",95],8,16],".search(\"\/\/\")?",["escape",["macro",95],8,16],".split(\"\/\/\")[1]:",["escape",["macro",95],8,16],";return clickUrlClean.split(\"\/\")[0]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",176],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*arstechnica.com.*","value","internal"],["map","key","^(?!.*(.*arstechnica\\.com.*|undefined|not set|null)).*$","value","external"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"componentPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletter.newsletterPosition"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],"(\"[data-offer-url]\").getAttribute(\"data-offer-url\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",180],8,16],"?",["escape",["macro",180],8,16],":",["escape",["macro",95],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerInterval"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerEventNumber"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){seconds=",["escape",["macro",182],8,16],"*",["escape",["macro",183],8,16],"\/1E3;return Math.floor(seconds)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"alertName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"alertText"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",185],8,16],"\u0026\u0026\"\"!=",["escape",["macro",185],8,16],"?",["escape",["macro",185],8,16],":",["escape",["macro",186],8,16],"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",92],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\\/sponsored\\\/.*","value","true"],["map","key",".*\\\/sponsors\\\/.*","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.infinityId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":["macro",61],
      "vtp_map":["list",["map","key","m.facebook.com","value","facebook"],["map","key","t.co","value","t"],["map","key","from.flipboard.com","value","flipboard"],["map","key","news.google.com","value","google"],["map","key","newyorker.com","value","newyorker"],["map","key","instagram.com","value","instagram"],["map","key","vogue.com","value","vogue"],["map","key","www-vanityfair-com.cdn.ampproject.org","value","ampproject"],["map","key","facebook.com","value","facebook"],["map","key","www-self-com.cdn.ampproject.org","value","ampproject"],["map","key","pinterest.com","value","pinterest"],["map","key","www-epicurious-com.cdn.ampproject.org","value","ampproject"],["map","key","www-allure-com.cdn.ampproject.org","value","ampproject"],["map","key","googleapis.com","value","googleapis"],["map","key","vanityfair.com","value","vanityfair"],["map","key","www-bonappetit-com.cdn.ampproject.org","value","ampproject"],["map","key","arstechnica.com","value","arstechnica"],["map","key","www-vogue-com.cdn.ampproject.org","value","ampproject"],["map","key","www-newyorker-com.cdn.ampproject.org","value","ampproject"],["map","key","yahoo.com","value","yahoo"],["map","key","www-gq-com.cdn.ampproject.org","value","ampproject"],["map","key","wired.com","value","wired"],["map","key","www-teenvogue-com.cdn.ampproject.org","value","ampproject"],["map","key","bonappetit.com","value","bonappetit"],["map","key","getpocket.com","value","getpocket"],["map","key","gq.com","value","gq"],["map","key","smartnews.com","value","smartnews"],["map","key","www-wired-com.cdn.ampproject.org","value","ampproject"],["map","key","epicurious.com","value","epicurious"],["map","key","pitchfork-com.cdn.ampproject.org","value","ampproject"],["map","key","www-golfdigest-com.cdn.ampproject.org","value","ampproject"],["map","key","www-glamour-com.cdn.ampproject.org","value","ampproject"],["map","key","golfdigest.com","value","golfdigest"],["map","key","www-brides-com.cdn.ampproject.org","value","ampproject"],["map","key","drudgereport.com","value","drudgereport"],["map","key","allure.com","value","allure"],["map","key","architecturaldigest.com","value","architecturaldigest"],["map","key","pitchfork.com","value","pitchfork"],["map","key","reddit.com","value","reddit"],["map","key","teenvogue.com","value","teenvogue"],["map","key","l.instagram.com","value","instagram"],["map","key","glamour.com","value","glamour"],["map","key","cntraveler.com","value","cntraveler"],["map","key","self.com","value","self"],["map","key","www-cntraveler-com.cdn.ampproject.org","value","ampproject"],["map","key","brides.com","value","brides"],["map","key","l.facebook.com","value","facebook"],["map","key","linkedin.com","value","linkedin"],["map","key","duckduckgo.com","value","duckduckgo"],["map","key","www-architecturaldigest-com.cdn.ampproject.org","value","ampproject"],["map","key","www-wmagazine-com.cdn.ampproject.org","value","ampproject"],["map","key","msn.com","value","msn"],["map","key","news.ycombinator.com","value","ycombinator"],["map","key","account.newyorker.com","value","newyorker"],["map","key","wmagazine.com","value","wmagazine"],["map","key","lm.facebook.com","value","facebook"],["map","key","flipboard.com","value","flipboard"],["map","key","arstechnica-com.cdn.ampproject.org","value","ampproject"],["map","key","start.att.net","value","att"],["map","key","en.wikipedia.org","value","wikipedia"],["map","key","nutritiondata.self.com","value","self"],["map","key","realclearpolitics.com","value","realclearpolitics"],["map","key","traffic.outbrain.com","value","outbrain"],["map","key","digg.com","value","digg"],["map","key","t.umblr.com","value","umblr"],["map","key","zergnet.com","value","zergnet"],["map","key","youtube.com","value","youtube"],["map","key","old.reddit.com","value","reddit"],["map","key","de.axelspringer.yana.zeropage","value","axelspringer"],["map","key","en.m.wikipedia.org","value","wikipedia"],["map","key","nativeapp.toutiao.com","value","toutiao"],["map","key","likeshop.me","value","likeshop"],["map","key","cupofjo.com","value","cupofjo"],["map","key","tpc.googlesyndication.com","value","googlesyndication"],["map","key","longform.org","value","longform"],["map","key","zen.yandex.com","value","yandex"],["map","key","buzzfeed.com","value","buzzfeed"],["map","key","outlook.live.com","value","live"],["map","key","news.url.google.com","value","google"],["map","key","subscribe.newyorker.com","value","newyorker"],["map","key","feedly.com","value","feedly"],["map","key","mail.google.com","value","google"],["map","key","them.us","value","them"],["map","key","theguardian.com","value","theguardian"],["map","key","beautybox.allure.com","value","allure"],["map","key","bleacherreport.com","value","bleacherreport"],["map","key","swoon-theodysseyonline-com.cdn.ampproject.org","value","ampproject"],["map","key","video.newyorker.com","value","newyorker"],["map","key","rottentomatoes.com","value","rottentomatoes"],["map","key","r.search.aol.com","value","aol"],["map","key","google.com","value","google"],["map","key","deadspin.com","value","deadspin"],["map","key","news360.com","value","news360"],["map","key","laineygossip.com","value","laineygossip"],["map","key","mail.yahoo.com","value","yahoo"],["map","key","ecosia.org","value","ecosia"],["map","key","wpcomwidgets.com","value","wpcomwidgets"],["map","key","paid.outbrain.com","value","outbrain"],["map","key","jezebel.com","value","jezebel"],["map","key","plus.url.google.com","value","google"],["map","key","theringer.com","value","theringer"],["map","key","pjmedia.com","value","pjmedia"],["map","key","twitter.com","value","twitter"],["map","key","subscribe.condenastdigital.com","value","condenastdigital"],["map","key","businessinsider.com","value","businessinsider"],["map","key","subscribe.allure.com","value","allure"],["map","key","video.vogue.com","value","vogue"],["map","key","subscribe.vogue.com","value","vogue"],["map","key","projects.bonappetit.com","value","bonappetit"],["map","key","theatlantic.com","value","theatlantic"],["map","key","search.xfinity.com","value","xfinity"],["map","key","int.search.tb.ask.com","value","ask"],["map","key","classroom.google.com","value","google"],["map","key","pinterest.co.uk","value","pinterest"],["map","key","washingtonpost.com","value","washingtonpost"],["map","key","pinterest.ca","value","pinterest"],["map","key","play.google.com","value","google"],["map","key","paypal.com","value","paypal"],["map","key","vox.com","value","vox"],["map","key","translate.googleusercontent.com","value","googleusercontent"],["map","key","askamanager.org","value","askamanager"],["map","key","subscribe.wired.com","value","wired"],["map","key","gofugyourself.com","value","gofugyourself"],["map","key","aax-us-east.amazon-adsystem.com","value","amazon-adsystem"],["map","key","lifehacker.com","value","lifehacker"],["map","key","lennyletter.com","value","lennyletter"],["map","key","search.tb.ask.com","value","ask"],["map","key","c.newsnow.co.uk","value","newsnow"],["map","key","realclearscience.com","value","realclearscience"],["map","key","slashdot.org","value","slashdot"],["map","key","subscribe.vanityfair.com","value","vanityfair"],["map","key","m.eonline.com","value","eonline"],["map","key","buzzfeednews.com","value","buzzfeednews"],["map","key","thecut.com","value","thecut"],["map","key","sports.yahoo.com","value","yahoo"],["map","key","ca.yahoo.com","value","yahoo"],["map","key","metafilter.com","value","metafilter"],["map","key","slate.com","value","slate"],["map","key","ca.search.yahoo.com","value","yahoo"],["map","key","adsjob4u.com","value","adsjob4u"],["map","key","video.vanityfair.com","value","vanityfair"],["map","key","metacritic.com","value","metacritic"],["map","key","marginalrevolution.com","value","marginalrevolution"],["map","key","video.gq.com","value","gq"],["map","key","cn.bing.com","value","bing"],["map","key","searchencrypt.com","value","searchencrypt"],["map","key","video.bonappetit.com","value","bonappetit"],["map","key","apple.news","value","apple"],["map","key","subscribe.architecturaldigest.com","value","architecturaldigest"],["map","key","longreads.com","value","longreads"],["map","key","news.opera-api.com","value","opera-api"],["map","key","huffingtonpost.com","value","huffingtonpost"],["map","key","adequateman.deadspin.com","value","deadspin"],["map","key","people.com","value","people"],["map","key","dailymail.co.uk","value","dailymail"],["map","key","rawstory.com","value","rawstory"],["map","key","w1.buysub.com","value","buysub"],["map","key","blog.fefe.de","value","fefe"],["map","key","vulture.com","value","vulture"],["map","key","cupcakesandcashmere.com","value","cupcakesandcashmere"],["map","key","disq.us","value","disq"],["map","key","medium.com","value","medium"],["map","key","twistedsifter.com","value","twistedsifter"],["map","key","aldaily.com","value","aldaily"],["map","key","myadsjob.com","value","myadsjob"],["map","key","dagbladet.no","value","dagbladet"],["map","key","my.yahoo.com","value","yahoo"],["map","key","centurylink.net","value","centurylink"],["map","key","www2.smartbrief.com","value","smartbrief"],["map","key","pinterest.com.au","value","pinterest"],["map","key","elconfidencial.com","value","elconfidencial"],["map","key","yandex.ru","value","yandex"],["map","key","video.golfdigest.com","value","golfdigest"],["map","key","out.newsfusion.com","value","newsfusion"],["map","key","nakedcapitalism.com","value","nakedcapitalism"],["map","key","cnn.com","value","cnn"],["map","key","us.search.yahoo.com","value","yahoo"],["map","key","foxnews.com","value","foxnews"],["map","key","finance.yahoo.com","value","yahoo"],["map","key","uk.search.yahoo.com","value","yahoo"],["map","key","money.cnn.com","value","cnn"],["map","key","bbc.com","value","bbc"],["map","key","theverge.com","value","theverge"],["map","key","search.pch.com","value","pch"],["map","key","thezoereport.com","value","thezoereport"],["map","key","amp-businessinsider-com.cdn.ampproject.org","value","ampproject"],["map","key","cdn-af.op-mobile.opera.com","value","opera"],["map","key","account.bonappetit.com","value","bonappetit"],["map","key","subscribe.cntraveler.com","value","cntraveler"],["map","key","gothamist.com","value","gothamist"],["map","key","thebiglead.com","value","thebiglead"],["map","key","quora.com","value","quora"],["map","key","redirect.viglink.com","value","viglink"],["map","key","video.glamour.com","value","glamour"],["map","key","talkingpointsmemo.com","value","talkingpointsmemo"],["map","key","ritholtz.com","value","ritholtz"],["map","key","player.cnevids.com","value","cnevids"],["map","key","away.vk.com","value","vk"],["map","key","cnbc.com","value","cnbc"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",61],8,16],";if(a!=",["escape",["macro",190],8,16],")return ",["escape",["macro",190],8,16],";if(\"\"==a)\"No Referrer\";else{var b=a.split(\".\");if(2==b.length)return a;a=b.pop();b=b.pop();return b=b+\".\"+a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003C",["escape",["macro",188],8,16],".indexOf(\";\"))return ",["escape",["macro",188],8,16],".split(\";\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_medium\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"utm_campaign\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003C",["escape",["macro",188],8,16],".indexOf(\";\"))return ",["escape",["macro",188],8,16],".split(\";\")[1]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",97],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","teenvogue.com","value","stats2.teenvogue.com"],["map","key","wired.com","value","stats.wired.com"],["map","key","pitchfork.com","value","stats2.pitchfork.com"],["map","key","them.us","value","stats2.them.us"],["map","key","thescene.com","value","stats2.thescene.com"],["map","key","arstechnica.com","value","stats2.arstechnica.com"],["map","key","epicurious.com","value","stats.epicurious.com"],["map","key","architecturaldigest.com","value","stats2.architecturaldigest.com"],["map","key","wmagazine.com","value","stats2.wmagazine.com"],["map","key","cntraveler.com","value","stats2.cntraveler.com"],["map","key","allure.com","value","stats2.allure.com"],["map","key","gq.com","value","stats2.gq.com"],["map","key","self.com","value","stats2.self.com"],["map","key","brides.com","value","stats2.brides.com"],["map","key","glamour.com","value","stats2.glamour.com"],["map","key","vanityfair.com","value","stats2.vanityfair.com"],["map","key","golfdigest.com","value","stats2.golfdigest.com"],["map","key","newyorker.com","value","stats2.newyorker.com"],["map","key","vogue.com","value","stats2.vogue.com"],["map","key","bonappetit.com","value","stats2.bonappetit.com"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",97],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","teenvogue.com","value","sstats.teenvogue.com"],["map","key","wired.com","value","sstats.wired.com"],["map","key","pitchfork.com","value","sstats.pitchfork.com"],["map","key","them.us","value","sstats.them.us"],["map","key","thescene.com","value","sstats.thescene.com"],["map","key","arstechnica.com","value","sstats.arstechnica.com"],["map","key","epicurious.com","value","sstats.epicurious.com"],["map","key","architecturaldigest.com","value","sstats.architecturaldigest.com"],["map","key","wmagazine.com","value","sstats.wmagazine.com"],["map","key","cntraveler.com","value","sstats.cntraveler.com"],["map","key","allure.com","value","sstats.allure.com"],["map","key","gq.com","value","sstats2.gq.com"],["map","key","self.com","value","sstats.self.com"],["map","key","brides.com","value","sstats.brides.com"],["map","key","glamour.com","value","sstats2.glamour.com"],["map","key","vanityfair.com","value","sstats.vanityfair.com"],["map","key","golfdigest.com","value","sstats.golfdigest.com"],["map","key","newyorker.com","value","sstats.newyorker.com"],["map","key","vogue.com","value","sstats.vogue.com"],["map","key","bonappetit.com","value","sstats.bonappetit.com"]]
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",198],8,16],"\u0026\u0026!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"aam_uuid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],"(\"[data-offer-retailer]\").getAttribute(\"data-offer-retailer\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.pageTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCallback"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing.condeNastId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.pageAssets"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"registrationSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.mdw_cnd_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.monthlyVisits"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",61],8,16],";if(\"\"==a)return\"No Referrer\";a=a.split(\".\");a.pop();a.pop();return 0==a.length?\"No Subdomain\":a=a.join(\".\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=location.search.indexOf(\"mbid\\x3d\")?",["escape",["macro",68],8,16],":\"not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"hasha\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){urlParams=new URLSearchParams(window.location.search.toLowerCase());return myParam=urlParams.get(\"hashb\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gallery-item-name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gallery-item-file"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],"(\"[data-buy-button]\").getAttribute(\"data-buy-button\");return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__html",
      "priority":1000,
      "metadata":["map"],
      "teardown_tags":["list",["tag",101,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n\n Adobe Visitor API for JavaScript version: 3.3.0\n Copyright 2018 Adobe, Inc. All Rights Reserved\n More info available at https:\/\/marketing.adobe.com\/resources\/help\/en_US\/mcvid\/\n*\/\nvar e=function(){function ba(){return{callbacks:{},add:function(c,d){this.callbacks[c]=this.callbacks[c]||[];var g=this.callbacks[c].push(d)-1;return function(){this.callbacks[c].splice(g,1)}},execute:function(c,d){if(this.callbacks[c]){d=void 0===d?[]:d;d=d instanceof Array?d:[d];try{for(;this.callbacks[c].length;){var g=this.callbacks[c].shift();\"function\"==typeof g?g.apply(null,d):g instanceof Array\u0026\u0026g[1].apply(g[0],d)}delete this.callbacks[c]}catch(b){}}},executeAll:function(c,d){(d||c\u0026\u0026!z.isObjectEmpty(c))\u0026\u0026\nObject.keys(this.callbacks).forEach(function(g){var b=void 0!==c[g]?c[g]:\"\";this.execute(g,b)},this)},hasCallbacks:function(){return!!Object.keys(this.callbacks).length}}}function F(c,d){if(c===d)return 0;var g=c.toString().split(\".\"),b=d.toString().split(\".\");a:{var h=g.concat(b);for(var n=\/^\\d+$\/,a=0,m=h.length;a\u003Cm;a++)if(!n.test(h[a])){h=!1;break a}h=!0}if(h){h=g;for(n=b;h.length\u003Cn.length;)h.push(\"0\");for(;n.length\u003Ch.length;)n.push(\"0\");a:{for(h=0;h\u003Cg.length;h++){n=parseInt(g[h],10);a=parseInt(b[h],\n10);if(n\u003Ea){b=1;break a}if(a\u003En){b=-1;break a}}b=0}}else b=NaN;return b}var l=\"undefined\"!=typeof window?window:\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:{};Object.assign=Object.assign||function(c){for(var d,g,b=1;b\u003Carguments.length;++b)for(d in g=arguments[b],g)Object.prototype.hasOwnProperty.call(g,d)\u0026\u0026(c[d]=g[d]);return c};var H={HANDSHAKE:\"HANDSHAKE\",GETSTATE:\"GETSTATE\",PARENTSTATE:\"PARENTSTATE\"},ca={MCMID:\"MCMID\",MCAID:\"MCAID\",MCAAMB:\"MCAAMB\",MCAAMLH:\"MCAAMLH\",MCOPTOUT:\"MCOPTOUT\",\nCUSTOMERIDS:\"CUSTOMERIDS\"},L={MCMID:\"getMarketingCloudVisitorID\",MCAID:\"getAnalyticsVisitorID\",MCAAMB:\"getAudienceManagerBlob\",MCAAMLH:\"getAudienceManagerLocationHint\",MCOPTOUT:\"getOptOut\"},da={CUSTOMERIDS:\"getCustomerIDs\"},ea={MCMID:\"getMarketingCloudVisitorID\",MCAAMB:\"getAudienceManagerBlob\",MCAAMLH:\"getAudienceManagerLocationHint\",MCOPTOUT:\"getOptOut\",MCAID:\"getAnalyticsVisitorID\",CUSTOMERIDS:\"getCustomerIDs\"},fa={MC:\"MCMID\",A:\"MCAID\",AAM:\"MCAAMB\"},M={MCMID:\"MCMID\",MCOPTOUT:\"MCOPTOUT\",MCAID:\"MCAID\",\nMCAAMLH:\"MCAAMLH\",MCAAMB:\"MCAAMB\"},ha={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},ia={GLOBAL:\"global\"},ja=M,ka=ha,la=ia,I=ca,ma=function(c){function d(){}function g(b,g){var h=this;return function(){var a=c(0,I.MCMID),b={};return b[I.MCMID]=a,h.setStateAndPublish(b),g(a),a}}this.getMarketingCloudVisitorID=function(b){b=b||d;var c=this.findField(I.MCMID,b);b=g.call(this,I.MCMID,b);return void 0!==c?c:b()}},na=H,O=L,P=da,oa=function(){function c(){}function d(b,c){var a=this;return function(){return a.callbackRegistry.add(b,\nc),a.messageParent(na.GETSTATE),\"\"}}function g(b){this[O[b]]=function(g){g=g||c;var a=this.findField(b,g);g=d.call(this,b,g);return void 0!==a?a:g()}}function b(b){this[P[b]]=function(){return this.findField(b,c)||{}}}Object.keys(O).forEach(g,this);Object.keys(P).forEach(b,this)},Q=L,pa=function(){Object.keys(Q).forEach(function(c){this[Q[c]]=function(d){this.callbackRegistry.add(c,d)}},this)},z=function(c,d){return d={exports:{}},c(d,d.exports),d.exports}(function(c,d){d.isObjectEmpty=function(c){return c===\nObject(c)\u0026\u00260===Object.keys(c).length};d.isValueEmpty=function(c){return\"\"===c||d.isObjectEmpty(c)};d.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var c=7;4\u003Cc;c--){var b=document.createElement(\"div\");if(b.innerHTML=\"\\x3c!--[if IE \"+c+\"]\\x3e\\x3cspan\\x3e\\x3c\/span\\x3e\\x3c![endif]--\\x3e\",b.getElementsByTagName(\"span\").length)return c}return null};d.encodeAndBuildRequest=function(c,b){return c.map(encodeURIComponent).join(b)};d.isObject=function(c){return null!==c\u0026\u0026\n\"object\"==typeof c\u0026\u0026!1===Array.isArray(c)}}),qa=(z.isObjectEmpty,z.isValueEmpty,z.getIeVersion,z.encodeAndBuildRequest,z.isObject,ba),ra=H,sa={0:\"prefix\",1:\"orgID\",2:\"state\"},R=function(c,d){this.parse=function(c){try{var b={};return c.data.split(\"|\").forEach(function(c,g){void 0!==c\u0026\u0026(b[sa[g]]=2!==g?c:JSON.parse(c))}),b}catch(h){}};this.isInvalid=function(g){var b=this.parse(g);if(!b||2\u003EObject.keys(b).length)return!0;var h=c!==b.orgID;g=!d||g.origin!==d;b=-1===Object.keys(ra).indexOf(b.prefix);return h||\ng||b};this.send=function(g,b,h){b=b+\"|\"+c;h\u0026\u0026h===Object(h)\u0026\u0026(b+=\"|\"+JSON.stringify(h));try{g.postMessage(b,d)}catch(n){}}},S=H,ta=function(c,d,g,b){function h(a){Object.assign(k.state,a);k.callbackRegistry.executeAll(k.state)}function n(a){w.isInvalid(a)||(B=!1,a=w.parse(a),k.setStateAndPublish(a.state))}function a(a){!B\u0026\u0026q\u0026\u0026(B=!0,w.send(b,a))}function m(){Object.assign(k,new ma(g._generateID));k.getMarketingCloudVisitorID();k.callbackRegistry.executeAll(k.state,!0);l.removeEventListener(\"message\",\nx)}function x(b){w.isInvalid(b)||(b=w.parse(b),B=!1,l.clearTimeout(k._handshakeTimeout),l.removeEventListener(\"message\",x),Object.assign(k,new oa(k)),l.addEventListener(\"message\",n),k.setStateAndPublish(b.state),k.callbackRegistry.hasCallbacks()\u0026\u0026a(S.GETSTATE))}function v(){function a(a){0!==a.indexOf(\"_\")\u0026\u0026\"function\"==typeof g[a]\u0026\u0026(k[a]=function(){})}Object.keys(g).forEach(a);k.getSupplementalDataID=g.getSupplementalDataID}var k=this,q=d.whitelistParentDomain;k.state={};k.version=g.version;k.marketingCloudOrgID=\nc;k.cookieDomain=g.cookieDomain||\"\";k._instanceType=\"child\";var B=!1,w=new R(c,q);k.callbackRegistry=qa();k.init=function(){l.s_c_in||(l.s_c_il=[],l.s_c_in=0);k._c=\"Visitor\";k._il=l.s_c_il;k._in=l.s_c_in;k._il[k._in]=k;l.s_c_in++;v();Object.assign(k,new pa(k));q\u0026\u0026postMessage?(l.addEventListener(\"message\",x),a(S.HANDSHAKE),k._handshakeTimeout=setTimeout(m,250)):m()};k.findField=function(a,b){if(k.state[a])return b(k.state[a]),k.state[a]};k.messageParent=a;k.setStateAndPublish=h},J=H,T=ea,ua=L,va=fa,\nwa=function(c,d){function g(){var a={};return Object.keys(T).forEach(function(b){var g=T[b];g=c[g]();z.isValueEmpty(g)||(a[b]=g)}),a}function b(){var a=[];return c._loading\u0026\u0026Object.keys(c._loading).forEach(function(b){c._loading[b]\u0026\u0026(b=va[b],a.push(b))}),a.length?a:null}function h(a){return function q(g){(g=b())?(g=ua[g[0]],c[g](q,!0)):a()}}function n(a){m(a);var b=J.HANDSHAKE,c=g();d.send(a,b,c)}function a(a){h(function(){var b=a,c=J.PARENTSTATE,h=g();d.send(b,c,h)})()}function m(a){function b(b){g.call(c,\nb);d.send(a,J.PARENTSTATE,{CUSTOMERIDS:c.getCustomerIDs()})}var g=c.setCustomerIDs;c.setCustomerIDs=b}return function(b){d.isInvalid(b)||(d.parse(b).prefix===J.HANDSHAKE?n:a)(b.source)}},xa=function(c,d){function g(a){return function(c){b[a]=c;h++;h===n\u0026\u0026d(b)}}var b={},h=0,n=Object.keys(c).length;Object.keys(c).forEach(function(a){var b=c[a];if(b.fn){var h=b.args||[];h.unshift(g(a));b.fn.apply(b.context||null,h)}})},ya=function(c){var d;if(!c\u0026\u0026l.location\u0026\u0026(c=l.location.hostname),d=c)if(\/^[0-9.]+$\/.test(d))d=\n\"\";else{c=\",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,\";\nvar g=d.split(\".\"),b=g.length-1,h=b-1;if(1\u003Cb\u0026\u00262\u003E=g[b].length\u0026\u0026(2===g[b-1].length||0\u003Ec.indexOf(\",\"+g[b]+\",\"))\u0026\u0026h--,0\u003Ch)for(d=\"\";b\u003E=h;)d=g[b]+(d?\".\":\"\")+d,b--}return d},U={compare:F,isLessThan:function(c,d){return 0\u003EF(c,d)},areVersionsDifferent:function(c,d){return 0!==F(c,d)},isGreaterThan:function(c,d){return 0\u003CF(c,d)},isEqual:function(c,d){return 0===F(c,d)}},V=!!l.postMessage,N={postMessage:function(c,d,g){var b=1;d\u0026\u0026(V?g.postMessage(c,d.replace(\/([^:]+:\\\/\\\/[^\\\/]+).*\/,\"$1\")):d\u0026\u0026(g.location=d.replace(\/#.*$\/,\n\"\")+\"#\"+ +new Date+b++ +\"\\x26\"+c))},receiveMessage:function(c,d){var g;try{V\u0026\u0026(c\u0026\u0026(g=function(b){if(\"string\"==typeof d\u0026\u0026b.origin!==d||\"[object Function]\"===Object.prototype.toString.call(d)\u0026\u0026!1===d(b.origin))return!1;c(b)}),l.addEventListener?l[c?\"addEventListener\":\"removeEventListener\"](\"message\",g):l[c?\"attachEvent\":\"detachEvent\"](\"onmessage\",g))}catch(b){}}},za=function(c){var d=\"0123456789\",g=\"\",b=\"\",h=8,n=10,a=10;if(1==c){d+=\"ABCDEF\";for(c=0;16\u003Ec;c++){var m=Math.floor(Math.random()*h);g+=d.substring(m,\nm+1);m=Math.floor(Math.random()*h);b+=d.substring(m,m+1);h=16}return g+\"-\"+b}for(c=0;19\u003Ec;c++)m=Math.floor(Math.random()*n),g+=d.substring(m,m+1),0===c\u0026\u00269==m?n=3:(1==c||2==c)\u0026\u002610!=n\u0026\u00262\u003Em?n=10:2\u003Cc\u0026\u0026(n=10),m=Math.floor(Math.random()*a),b+=d.substring(m,m+1),0===c\u0026\u00269==m?a=3:(1==c||2==c)\u0026\u002610!=a\u0026\u00262\u003Em?a=10:2\u003Cc\u0026\u0026(a=10);return g+b},Aa=function(c,d){return{corsMetadata:function(){var c=\"none\",b=!0;return\"undefined\"!=typeof XMLHttpRequest\u0026\u0026XMLHttpRequest===Object(XMLHttpRequest)\u0026\u0026(\"withCredentials\"in new XMLHttpRequest?\nc=\"XMLHttpRequest\":\"undefined\"!=typeof XDomainRequest\u0026\u0026XDomainRequest===Object(XDomainRequest)\u0026\u0026(b=!1),0\u003CObject.prototype.toString.call(l.HTMLElement).indexOf(\"Constructor\")\u0026\u0026(b=!1)),{corsType:c,corsCookiesEnabled:b}}(),getCORSInstance:function(){return\"none\"===this.corsMetadata.corsType?null:new l[this.corsMetadata.corsType]},fireCORS:function(g,b,h){var d=this;b\u0026\u0026(g.loadErrorHandler=b);try{var a=this.getCORSInstance();a.open(\"get\",g.corsUrl+\"\\x26ts\\x3d\"+(new Date).getTime(),!0);\"XMLHttpRequest\"===\nthis.corsMetadata.corsType\u0026\u0026(a.withCredentials=!0,a.timeout=c.loadTimeout,a.setRequestHeader(\"Content-Type\",\"application\/x-www-form-urlencoded\"),a.onreadystatechange=function(){if(4===this.readyState\u0026\u0026200===this.status)a:{var a;try{if((a=JSON.parse(this.responseText))!==Object(a)){d.handleCORSError(g,null,\"Response is not JSON\");break a}}catch(q){d.handleCORSError(g,q,\"Error parsing response as JSON\");break a}try{for(var b=g.callback,c=l,h=0;h\u003Cb.length;h++)c=c[b[h]];c(a)}catch(q){d.handleCORSError(g,\nq,\"Error forming callback function\")}}});a.onerror=function(a){d.handleCORSError(g,a,\"onerror\")};a.ontimeout=function(a){d.handleCORSError(g,a,\"ontimeout\")};a.send();c._log.requests.push(g.corsUrl)}catch(m){this.handleCORSError(g,m,\"try-catch\")}},handleCORSError:function(g,b,h){c.CORSErrors.push({corsData:g,error:b,description:h});g.loadErrorHandler\u0026\u0026(\"ontimeout\"===h?g.loadErrorHandler(!0):g.loadErrorHandler(!1))}}},G=!!l.postMessage,Ba=1,W=864E5,X=\"adobe_mc\",Y=\"adobe_mc_sdid\",K=\/^[0-9a-fA-F\\-]+$\/,\nCa=5,Z=\/vVersion\\|((\\d+\\.)?(\\d+\\.)?(\\*|\\d+))(?=$|\\|)\/,Da=function(c,d){var g=l.document;return{THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(b){if(\"string\"==typeof b)return b=b.split(\"\/\"),b[0]+\"\/\/\"+b[2]},subdomain:null,url:null,getUrl:function(){var b,h=\"http:\/\/fast.\",d=\"?d_nsid\\x3d\"+c.idSyncContainerID+\"#\"+encodeURIComponent(g.location.origin);return this.subdomain||(this.subdomain=\"nosubdomainreturned\"),c.loadSSL\u0026\u0026(h=c.idSyncSSLUseAkamai?\n\"https:\/\/fast.\":\"https:\/\/\"),b=h+this.subdomain+\".demdex.net\/dest5.html\"+d,this.iframeHost=this.getIframeHost(b),this.id=\"destination_publishing_iframe_\"+this.subdomain+\"_\"+c.idSyncContainerID,b},checkDPIframeSrc:function(){var b=\"?d_nsid\\x3d\"+c.idSyncContainerID+\"#\"+encodeURIComponent(g.location.href);\"string\"==typeof c.dpIframeSrc\u0026\u0026c.dpIframeSrc.length\u0026\u0026(this.id=\"destination_publishing_iframe_\"+(c._subdomain||this.subdomain||(new Date).getTime())+\"_\"+c.idSyncContainerID,this.iframeHost=this.getIframeHost(c.dpIframeSrc),\nthis.url=c.dpIframeSrc+b)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:G?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,\nreadyToAttachIframePreliminary:function(){return!(c.idSyncDisableSyncs||c.disableIdSyncs||c.idSyncDisable3rdPartySyncing||c.disableThirdPartyCookies||c.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()\u0026\u0026(this.doAttachIframe||c._doAttachIframe)\u0026\u0026(this.subdomain\u0026\u0026\"nosubdomainreturned\"!==this.subdomain||c._subdomain)\u0026\u0026this.url\u0026\u0026!this.startedAttachingIframe},attachIframe:function(){function b(){a=g.createElement(\"iframe\");a.sandbox=\"allow-scripts allow-same-origin\";\na.title=\"Adobe ID Syncing iFrame\";a.id=d.id;a.name=d.id+\"_name\";a.style.cssText=\"display: none; width: 0; height: 0;\";a.src=d.url;d.newIframeCreated=!0;c();g.body.appendChild(a)}function c(b){a.addEventListener(\"load\",function(){a.className=\"aamIframeLoaded\";d.iframeHasLoaded=!0;d.fireIframeLoadedCallbacks(b);d.requestToProcess()})}this.startedAttachingIframe=!0;var d=this,a=g.getElementById(this.id);a?\"IFRAME\"!==a.nodeName?(this.id+=\"_2\",this.iframeIdChanged=!0,b()):(this.newIframeCreated=!1,\"aamIframeLoaded\"!==\na.className?(this.originalIframeHasLoadedAlready=!1,c(\"The destination publishing iframe already exists from a different library, but hadn't loaded yet.\")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=a,this.fireIframeLoadedCallbacks(\"The destination publishing iframe already exists from a different library, and had loaded alresady.\"),this.requestToProcess())):b();this.iframe=a},fireIframeLoadedCallbacks:function(b){this.iframeLoadedCallbacks.forEach(function(c){\"function\"==\ntypeof c\u0026\u0026c({message:b||\"The destination publishing iframe was attached and loaded successfully.\"})});this.iframeLoadedCallbacks=[]},requestToProcess:function(b){function g(){a.jsonForComparison.push(b);a.jsonWaiting.push(b);a.processSyncOnPage(b)}var d,a=this;if(b===Object(b)\u0026\u0026b.ibs)if(d=JSON.stringify(b.ibs||[]),this.jsonForComparison.length){var m,l,v=!1;var k=0;for(m=this.jsonForComparison.length;k\u003Cm;k++)if(l=this.jsonForComparison[k],d===JSON.stringify(l.ibs||[])){v=!0;break}v?this.jsonDuplicates.push(b):\ng()}else g();(this.receivedThirdPartyCookiesNotification||!G||this.iframeHasLoaded)\u0026\u0026this.jsonWaiting.length\u0026\u0026(d=this.jsonWaiting.shift(),this.process(d),this.requestToProcess());c.idSyncDisableSyncs||c.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=G?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(b,\ng){var d=c._getField(\"MCAAMLH\"),a=b.d_region||b.dcs_region;return d?a\u0026\u0026(c._setFieldExpire(\"MCAAMLH\",g),c._setField(\"MCAAMLH\",a),parseInt(d,10)!==a\u0026\u0026(this.regionChanged=!0,this.timesRegionChanged++,c._setField(\"MCSYNCSOP\",\"\"),c._setField(\"MCSYNCS\",\"\"),d=a)):(d=a)\u0026\u0026(c._setFieldExpire(\"MCAAMLH\",g),c._setField(\"MCAAMLH\",d)),d||(d=\"\"),d},processSyncOnPage:function(b){var c,d;if((c=b.ibs)\u0026\u0026c instanceof Array\u0026\u0026(d=c.length))for(b=0;b\u003Cd;b++){var a=c[b];a.syncOnPage\u0026\u0026this.checkFirstPartyCookie(a,\"\",\"syncOnPage\")}},\nprocess:function(b){var c,d,a,g=encodeURIComponent,l=!1;if((c=b.ibs)\u0026\u0026c instanceof Array\u0026\u0026(d=c.length))for(l=!0,a=0;a\u003Cd;a++){var v=c[a];var k=[g(\"ibs\"),g(v.id||\"\"),g(v.tag||\"\"),z.encodeAndBuildRequest(v.url||[],\",\"),g(v.ttl||\"\"),\"\",\"\",v.fireURLSync?\"true\":\"false\"];v.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(k.join(\"|\")):v.fireURLSync\u0026\u0026this.checkFirstPartyCookie(v,k.join(\"|\")))}l\u0026\u0026this.jsonProcessed.push(b)},checkFirstPartyCookie:function(b,d,g){var a=(g=\"syncOnPage\"===g)?\"MCSYNCSOP\":\n\"MCSYNCS\";c._readVisitor();var h,n,l=c._getField(a),k=!1,q=!1,B=Math.ceil((new Date).getTime()\/W);l?(h=l.split(\"*\"),n=this.pruneSyncData(h,b.id,B),k=n.dataPresent,q=n.dataValid,k\u0026\u0026q||this.fireSync(g,b,d,h,a,B)):(h=[],this.fireSync(g,b,d,h,a,B))},pruneSyncData:function(b,c,d){var a,g=!1,h=!1;for(a=0;a\u003Cb.length;a++){var n=b[a];var k=parseInt(n.split(\"-\")[1],10);n.match(\"^\"+c+\"-\")?(g=!0,d\u003Ck?h=!0:(b.splice(a,1),a--)):d\u003E=k\u0026\u0026(b.splice(a,1),a--)}return{dataPresent:g,dataValid:h}},manageSyncsSize:function(b){if(b.join(\"*\").length\u003E\nthis.MAX_SYNCS_LENGTH)for(b.sort(function(b,c){return parseInt(b.split(\"-\")[1],10)-parseInt(c.split(\"-\")[1],10)});b.join(\"*\").length\u003Ethis.MAX_SYNCS_LENGTH;)b.shift()},fireSync:function(b,d,g,a,m,l){var h=this;if(b){if(\"img\"===d.tag){var k=d.url,n=c.loadSSL?\"https:\":\"http:\";b=0;for(g=k.length;b\u003Cg;b++){a=k[b];var x=\/^\\\/\\\/\/.test(a);var w=new Image;w.addEventListener(\"load\",function(a,b,d,g){return function(){h.onPagePixels[a]=null;c._readVisitor();var k=c._getField(m);var n=[];if(k){k=k.split(\"*\");var l;\nvar q=0;for(l=k.length;q\u003Cl;q++){var f=k[q];f.match(\"^\"+b.id+\"-\")||n.push(f)}}h.setSyncTrackingData(n,b,d,g)}}(this.onPagePixels.length,d,m,l));w.src=(x?n:\"\")+a;this.onPagePixels.push(w)}}}else this.addMessage(g),this.setSyncTrackingData(a,d,m,l)},addMessage:function(b){var d=encodeURIComponent;d=d(c._enableErrorReporting?\"---destpub-debug---\":\"---destpub---\");this.messages.push((G?\"\":d)+b)},setSyncTrackingData:function(b,d,g,a){b.push(d.id+\"-\"+(a+Math.ceil(d.ttl\/60\/24)));this.manageSyncsSize(b);c._setField(g,\nb.join(\"*\"))},sendMessages:function(){var b,c=this,d=\"\",a=encodeURIComponent;this.regionChanged\u0026\u0026(d=a(\"---destpub-clear-dextp---\"),this.regionChanged=!1);this.messages.length?G?(b=d+a(\"---destpub-combined---\")+this.messages.join(\"%01\"),this.postMessage(b),this.messages=[],this.sendingMessages=!1):(b=this.messages.shift(),this.postMessage(d+b),setTimeout(function(){c.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(b){N.postMessage(b,this.url,this.iframe.contentWindow);\nthis.messagesPosted.push(b)},receiveMessage:function(b){var c,d=\/^---destpub-to-parent---\/;\"string\"==typeof b\u0026\u0026d.test(b)\u0026\u0026(c=b.replace(d,\"\").split(\"|\"),\"canSetThirdPartyCookies\"===c[0]\u0026\u0026(this.canSetThirdPartyCookies=\"true\"===c[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(b))},processIDCallData:function(b){(null==this.url||b.subdomain\u0026\u0026\"nosubdomainreturned\"===this.subdomain)\u0026\u0026(\"string\"==typeof c._subdomain\u0026\u0026c._subdomain.length?this.subdomain=\nc._subdomain:this.subdomain=b.subdomain||\"\",this.url=this.getUrl());b.ibs instanceof Array\u0026\u0026b.ibs.length\u0026\u0026(this.doAttachIframe=!0);this.readyToAttachIframe()\u0026\u0026(c.idSyncAttachIframeOnWindowLoad?(d.windowLoaded||\"complete\"===g.readyState||\"loaded\"===g.readyState)\u0026\u0026this.attachIframe():this.attachIframeASAP());\"function\"==typeof c.idSyncIDCallResult?c.idSyncIDCallResult(b):this.requestToProcess(b);\"function\"==typeof c.idSyncAfterIDCallResult\u0026\u0026c.idSyncAfterIDCallResult(b)},canMakeSyncIDCall:function(b,\nd){return c._forceSyncIDCall||!b||d-b\u003EBa},attachIframeASAP:function(){function b(){c.startedAttachingIframe||(g.body?c.attachIframe():setTimeout(b,30))}var c=this;b()}}},aa={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},disableThirdPartyCalls:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},\nidSyncSSLUseAkamai:{},isCoopSafe:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},overwriteCrossDomainMCIDAndAID:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}};M={getConfigNames:function(){return Object.keys(aa)},getConfigs:function(){return aa}};var y=function(c,d,g){function b(f){var b=f;return function(f){f=\nf||m.location.href;try{var r=a._extractParamFromUri(f,b);if(r)return t.parsePipeDelimetedKeyValues(r)}catch(Fa){}}}function h(f){f=f||{};a._supplementalDataIDCurrent=f.supplementalDataIDCurrent||\"\";a._supplementalDataIDCurrentConsumed=f.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=f.supplementalDataIDLast||\"\";a._supplementalDataIDLastConsumed=f.supplementalDataIDLastConsumed||{}}function n(a){function f(a,f){var r=f[0],b=f[1];if(null!=b\u0026\u0026b!==D){var c=a;a=r=(c=c?c+=\"|\":c,c+(r+\"\\x3d\"+\nencodeURIComponent(b)))}return a}a=a.reduce(f,\"\");return function(a){var f=t.getTimestampInSeconds();return a=a?a+=\"|\":a,a+(\"TS\\x3d\"+f)}(a)}if(!g||g.split(\"\").reverse().join(\"\")!==c)throw Error(\"Please use `Visitor.getInstance` to instantiate Visitor.\");var a=this;a.version=\"3.3.0\";var m=l,x=m.Visitor;x.version=a.version;x.AuthState=ka;x.OptOut=la;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c=\"Visitor\";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a._instanceType=\"regular\";a._log={requests:[]};\na.marketingCloudOrgID=c;a.cookieName=\"AMCV_\"+c;a.sessionCookieName=\"AMCVS_\"+c;a.cookieDomain=ya();a.cookieDomain===m.location.hostname\u0026\u0026(a.cookieDomain=\"\");a.loadSSL=0\u003C=m.location.protocol.toLowerCase().indexOf(\"https\");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer=\"dpm.demdex.net\";a.sdidParamExpiry=30;var v=m.document,k=null,q=\"MCMID\",B=\"MCIDTS\",w=\"A\",u=\"MCAID\",y=\"AAM\",C=\"MCAAMB\",D=\"NONE\",F=Aa(a);a.FIELDS=ja;a.cookieRead=function(a){a=encodeURIComponent(a);var f=\n(\";\"+v.cookie).split(\" \").join(\";\"),b=f.indexOf(\";\"+a+\"\\x3d\"),c=0\u003Eb?b:f.indexOf(\";\",b+1);return 0\u003Eb?\"\":decodeURIComponent(f.substring(b+2+a.length,0\u003Ec?f.length:c))};a.cookieWrite=function(f,b,c){var r,p=a.cookieLifetime,d=\"\";(b=\"\"+b,p=p?(\"\"+p).toUpperCase():\"\",c\u0026\u0026\"SESSION\"!==p\u0026\u0026\"NONE\"!==p)?(r=\"\"!==b?parseInt(p||0,10):-60)?(c=new Date,c.setTime(c.getTime()+1E3*r)):1===c\u0026\u0026(c=new Date,r=c.getYear(),c.setYear(r+2+(1900\u003Er?1900:0))):c=0;return f\u0026\u0026\"NONE\"!==p?(a.configs\u0026\u0026a.configs.secureCookie\u0026\u0026\"https:\"===\nlocation.protocol\u0026\u0026(d=\"Secure\"),v.cookie=encodeURIComponent(f)+\"\\x3d\"+encodeURIComponent(b)+\"; path\\x3d\/;\"+(c?\" expires\\x3d\"+c.toGMTString()+\";\":\"\")+(a.cookieDomain?\" domain\\x3d\"+a.cookieDomain+\";\":\"\")+d,a.cookieRead(f)===b):0};a.resetState=function(f){f?a._mergeServerState(f):h()};a._isAllowedDone=!1;a._isAllowedFlag=!1;a.isAllowed=function(){return a._isAllowedDone||(a._isAllowedDone=!0,(a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,\"T\",1))\u0026\u0026(a._isAllowedFlag=!0)),a._isAllowedFlag};a.setMarketingCloudVisitorID=\nfunction(f){a._setMarketingCloudFields(f)};a._use1stPartyMarketingCloudServer=!1;a.getMarketingCloudVisitorID=function(f,b){if(a.isAllowed()){a.marketingCloudServer\u0026\u00260\u003Ea.marketingCloudServer.indexOf(\".demdex.net\")\u0026\u0026(a._use1stPartyMarketingCloudServer=!0);var c=a._getAudienceManagerURLData(\"_setMarketingCloudFields\"),p=c.url;return a._getRemoteField(q,p,f,b,c)}return\"\"};a.getVisitorValues=function(f,b){var c={MCMID:{fn:a.getMarketingCloudVisitorID,args:[!0],context:a},MCOPTOUT:{fn:a.isOptedOut,args:[void 0,\n!0],context:a},MCAID:{fn:a.getAnalyticsVisitorID,args:[!0],context:a},MCAAMLH:{fn:a.getAudienceManagerLocationHint,args:[!0],context:a},MCAAMB:{fn:a.getAudienceManagerBlob,args:[!0],context:a}};c=b\u0026\u0026b.length?t.pluck(c,b):c;xa(c,f)};a._currentCustomerIDs={};a._customerIDsHashChanged=!1;a._newCustomerIDsHash=\"\";a.setCustomerIDs=function(f){function c(){a._customerIDsHashChanged=!1}if(a.isAllowed()\u0026\u0026f){if(!z.isObject(f)||z.isObjectEmpty(f))return!1;a._readVisitor();var b,d;for(b in f)if(!Object.prototype[b]\u0026\u0026\n(d=f[b]))if(\"object\"==typeof d){var g={};d.id\u0026\u0026(g.id=d.id);void 0!=d.authState\u0026\u0026(g.authState=d.authState);a._currentCustomerIDs[b]=g}else a._currentCustomerIDs[b]={id:d};f=a.getCustomerIDs();g=a._getField(\"MCCIDH\");var h=\"\";g||(g=0);for(b in f)!Object.prototype[b]\u0026\u0026(d=f[b],h+=(h?\"|\":\"\")+b+\"|\"+(d.id?d.id:\"\")+(d.authState?d.authState:\"\"));a._newCustomerIDsHash=String(a._hash(h));a._newCustomerIDsHash!==g\u0026\u0026(a._customerIDsHashChanged=!0,a._mapCustomerIDs(c))}};a.getCustomerIDs=function(){a._readVisitor();\nvar f,b,c={};for(f in a._currentCustomerIDs)!Object.prototype[f]\u0026\u0026(b=a._currentCustomerIDs[f],c[f]||(c[f]={}),b.id\u0026\u0026(c[f].id=b.id),void 0!=b.authState?c[f].authState=b.authState:c[f].authState=x.AuthState.UNKNOWN);return c};a.setAnalyticsVisitorID=function(f){a._setAnalyticsFields(f)};a.getAnalyticsVisitorID=function(f,b,c){if(!t.isTrackingServerPopulated()\u0026\u0026!c)return a._callCallback(f,[\"\"]),\"\";if(a.isAllowed()){var p=\"\";if(c||(p=a.getMarketingCloudVisitorID(function(c){a.getAnalyticsVisitorID(f,\n!0)})),p||c){var r=c?a.marketingCloudServer:a.trackingServer,d=\"\";a.loadSSL\u0026\u0026(c?a.marketingCloudServerSecure\u0026\u0026(r=a.marketingCloudServerSecure):a.trackingServerSecure\u0026\u0026(r=a.trackingServerSecure));var g={};if(r){r=\"http\"+(a.loadSSL?\"s\":\"\")+\":\/\/\"+r+\"\/id\";p=\"d_visid_ver\\x3d\"+a.version+\"\\x26mcorgid\\x3d\"+encodeURIComponent(a.marketingCloudOrgID)+(p?\"\\x26mid\\x3d\"+encodeURIComponent(p):\"\")+(a.idSyncDisable3rdPartySyncing||a.disableThirdPartyCookies?\"\\x26d_coppa\\x3dtrue\":\"\");var h=[\"s_c_il\",a._in,\"_set\"+(c?\n\"MarketingCloud\":\"Analytics\")+\"Fields\"];d=r+\"?\"+p+\"\\x26callback\\x3ds_c_il%5B\"+a._in+\"%5D._set\"+(c?\"MarketingCloud\":\"Analytics\")+\"Fields\";g.corsUrl=r+\"?\"+p;g.callback=h}return g.url=d,a._getRemoteField(c?q:u,d,f,b,g)}}return\"\"};a.getAudienceManagerLocationHint=function(f,c){if(a.isAllowed()\u0026\u0026a.getMarketingCloudVisitorID(function(b){a.getAudienceManagerLocationHint(f,!0)})){var b=a._getField(u);if(!b\u0026\u0026t.isTrackingServerPopulated()\u0026\u0026(b=a.getAnalyticsVisitorID(function(b){a.getAudienceManagerLocationHint(f,\n!0)})),b||!t.isTrackingServerPopulated()){b=a._getAudienceManagerURLData();var p=b.url;return a._getRemoteField(\"MCAAMLH\",p,f,c,b)}}return\"\"};a.getLocationHint=a.getAudienceManagerLocationHint;a.getAudienceManagerBlob=function(f,b){if(a.isAllowed()\u0026\u0026a.getMarketingCloudVisitorID(function(b){a.getAudienceManagerBlob(f,!0)})){var c=a._getField(u);if(!c\u0026\u0026t.isTrackingServerPopulated()\u0026\u0026(c=a.getAnalyticsVisitorID(function(b){a.getAudienceManagerBlob(f,!0)})),c||!t.isTrackingServerPopulated()){c=a._getAudienceManagerURLData();\nvar p=c.url;return a._customerIDsHashChanged\u0026\u0026a._setFieldExpire(C,-1),a._getRemoteField(C,p,f,b,c)}}return\"\"};a._supplementalDataIDCurrent=\"\";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast=\"\";a._supplementalDataIDLastConsumed={};a.getSupplementalDataID=function(f,b){a._supplementalDataIDCurrent||b||(a._supplementalDataIDCurrent=a._generateID(1));var c=a._supplementalDataIDCurrent;return a._supplementalDataIDLast\u0026\u0026!a._supplementalDataIDLastConsumed[f]?(c=a._supplementalDataIDLast,\na._supplementalDataIDLastConsumed[f]=!0):c\u0026\u0026(a._supplementalDataIDCurrentConsumed[f]\u0026\u0026(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=c=b?\"\":a._generateID(1),a._supplementalDataIDCurrentConsumed={}),c\u0026\u0026(a._supplementalDataIDCurrentConsumed[f]=!0)),c};a.getOptOut=function(f,c){if(a.isAllowed()){var b=a._getAudienceManagerURLData(\"_setMarketingCloudFields\"),p=b.url;return a._getRemoteField(\"MCOPTOUT\",\np,f,c,b)}return\"\"};a.isOptedOut=function(f,b,c){return a.isAllowed()?(b||(b=x.OptOut.GLOBAL),(c=a.getOptOut(function(c){c=c===x.OptOut.GLOBAL||0\u003C=c.indexOf(b);a._callCallback(f,[c])},c))?c===x.OptOut.GLOBAL||0\u003C=c.indexOf(b):null):!1};a._fields=null;a._fieldsExpired=null;a._hash=function(a){var f,c=0;if(a)for(f=0;f\u003Ca.length;f++){var b=a.charCodeAt(f);c=(c\u003C\u003C5)-c+b;c\u0026=c}return c};a._generateID=za;a._generateLocalMID=function(){var f=a._generateID(0);return E.isClientSideMarketingCloudVisitorID=!0,f};\na._callbackList=null;a._callCallback=function(a,c){try{\"function\"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(r){}};a._registerCallback=function(f,c){c\u0026\u0026(null==a._callbackList\u0026\u0026(a._callbackList={}),void 0==a._callbackList[f]\u0026\u0026(a._callbackList[f]=[]),a._callbackList[f].push(c))};a._callAllCallbacks=function(f,c){if(null!=a._callbackList){var b=a._callbackList[f];if(b)for(;0\u003Cb.length;)a._callCallback(b.shift(),c)}};a._addQuerystringParam=function(a,c,b,d){c=encodeURIComponent(c)+\"\\x3d\"+encodeURIComponent(b);\nb=t.parseHash(a);a=t.hashlessUrl(a);if(-1===a.indexOf(\"?\"))return a+\"?\"+c+b;var f=a.split(\"?\");a=f[0]+\"?\";f=f[1];return a+t.addQueryParamAtLocation(f,c,d)+b};a._extractParamFromUri=function(a,c){var f=new RegExp(\"[\\\\?\\x26#]\"+c+\"\\x3d([^\\x26#]*)\");if((f=f.exec(a))\u0026\u0026f.length)return decodeURIComponent(f[1])};a._parseAdobeMcFromUrl=b(X);a._parseAdobeMcSdidFromUrl=b(Y);a._attemptToPopulateSdidFromUrl=function(f){f=a._parseAdobeMcSdidFromUrl(f);var b=1E9;f\u0026\u0026f.TS\u0026\u0026(b=t.getTimestampInSeconds()-f.TS);f\u0026\u0026f.SDID\u0026\u0026\nf.MCORGID===c\u0026\u0026b\u003Ca.sdidParamExpiry\u0026\u0026(a._supplementalDataIDCurrent=f.SDID,a._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)};a._attemptToPopulateIdsFromUrl=function(){var f=a._parseAdobeMcFromUrl();if(f\u0026\u0026f.TS){var b=t.getTimestampInSeconds();b-=f.TS;if(!(Math.floor(b\/60)\u003ECa||f.MCORGID!==c)){b=f[q];var d=a.setMarketingCloudVisitorID;b\u0026\u0026b.match(K)\u0026\u0026d(b);a._setFieldExpire(C,-1);f=f[u];b=a.setAnalyticsVisitorID;f\u0026\u0026f.match(K)\u0026\u0026b(f)}}};a._mergeServerState=function(f){if(f)try{if(f=function(a){return t.isObject(a)?\na:JSON.parse(a)}(f),f[a.marketingCloudOrgID]){var c=f[a.marketingCloudOrgID];!function(f){t.isObject(f)\u0026\u0026a.setCustomerIDs(f)}(c.customerIDs);h(c.sdid)}}catch(r){throw Error(\"`serverState` has an invalid format.\");}};a._timeout=null;a._loadData=function(f,c,b,d){a._addQuerystringParam(c,\"d_fieldgroup\",f,1);d.url=a._addQuerystringParam(d.url,\"d_fieldgroup\",f,1);d.corsUrl=a._addQuerystringParam(d.corsUrl,\"d_fieldgroup\",f,1);E.fieldGroupObj[f]=!0;d===Object(d)\u0026\u0026d.corsUrl\u0026\u0026\"XMLHttpRequest\"===F.corsMetadata.corsType\u0026\u0026\nF.fireCORS(d,b,f)};a._clearTimeout=function(f){null!=a._timeout\u0026\u0026a._timeout[f]\u0026\u0026(clearTimeout(a._timeout[f]),a._timeout[f]=0)};a._settingsDigest=0;a._getSettingsDigest=function(){if(!a._settingsDigest){var f=a.version;a.audienceManagerServer\u0026\u0026(f+=\"|\"+a.audienceManagerServer);a.audienceManagerServerSecure\u0026\u0026(f+=\"|\"+a.audienceManagerServerSecure);a._settingsDigest=a._hash(f)}return a._settingsDigest};a._readVisitorDone=!1;a._readVisitor=function(){if(!a._readVisitorDone){a._readVisitorDone=!0;var f,\nc,b;var d=a._getSettingsDigest();var g=!1,h=a.cookieRead(a.cookieName),k=new Date;if(null==a._fields\u0026\u0026(a._fields={}),h\u0026\u0026\"T\"!==h)for(h=h.split(\"|\"),h[0].match(\/^[\\-0-9]+$\/)\u0026\u0026(parseInt(h[0],10)!==d\u0026\u0026(g=!0),h.shift()),1==h.length%2\u0026\u0026h.pop(),f=0;f\u003Ch.length;f+=2){d=h[f].split(\"-\");var l=d[0];var m=h[f+1];1\u003Cd.length?(c=parseInt(d[1],10),b=0\u003Cd[1].indexOf(\"s\")):(c=0,b=!1);g\u0026\u0026(\"MCCIDH\"===l\u0026\u0026(m=\"\"),0\u003Cc\u0026\u0026(c=k.getTime()\/1E3-60));l\u0026\u0026m\u0026\u0026(a._setField(l,m,1),0\u003Cc\u0026\u0026(a._fields[\"expire\"+l]=c+(b?\"s\":\"\"),(k.getTime()\u003E=\n1E3*c||b\u0026\u0026!a.cookieRead(a.sessionCookieName))\u0026\u0026(a._fieldsExpired||(a._fieldsExpired={}),a._fieldsExpired[l]=!0)))}!a._getField(u)\u0026\u0026t.isTrackingServerPopulated()\u0026\u0026(h=a.cookieRead(\"s_vi\"))\u0026\u0026(h=h.split(\"|\"),1\u003Ch.length\u0026\u00260\u003C=h[0].indexOf(\"v1\")\u0026\u0026(m=h[1],f=m.indexOf(\"[\"),0\u003C=f\u0026\u0026(m=m.substring(0,f)),m\u0026\u0026m.match(K)\u0026\u0026a._setField(u,m)))}};a._appendVersionTo=function(f){var c=\"vVersion|\"+a.version,b=f?a._getCookieVersion(f):null;return b?U.areVersionsDifferent(b,a.version)\u0026\u0026(f=f.replace(Z,c)):f+=(f?\"|\":\"\")+c,f};\na._writeVisitor=function(){var f,c,b=a._getSettingsDigest();for(f in a._fields)!Object.prototype[f]\u0026\u0026a._fields[f]\u0026\u0026\"expire\"!==f.substring(0,6)\u0026\u0026(c=a._fields[f],b+=(b?\"|\":\"\")+f+(a._fields[\"expire\"+f]?\"-\"+a._fields[\"expire\"+f]:\"\")+\"|\"+c);b=a._appendVersionTo(b);a.cookieWrite(a.cookieName,b,1)};a._getField=function(f,c){return null==a._fields||!c\u0026\u0026a._fieldsExpired\u0026\u0026a._fieldsExpired[f]?null:a._fields[f]};a._setField=function(c,b,d){null==a._fields\u0026\u0026(a._fields={});a._fields[c]=b;d||a._writeVisitor()};\na._getFieldList=function(c,b){var f=a._getField(c,b);return f?f.split(\"*\"):null};a._setFieldList=function(c,b,d){a._setField(c,b?b.join(\"*\"):\"\",d)};a._getFieldMap=function(c,b){var f=a._getFieldList(c,b);if(f){var d,g={};for(d=0;d\u003Cf.length;d+=2)g[f[d]]=f[d+1];return g}return null};a._setFieldMap=function(c,b,d){var f,g=null;if(b)for(f in g=[],b)!Object.prototype[f]\u0026\u0026(g.push(f),g.push(b[f]));a._setFieldList(c,g,d)};a._setFieldExpire=function(c,b,d){var f=new Date;f.setTime(f.getTime()+1E3*b);null==\na._fields\u0026\u0026(a._fields={});a._fields[\"expire\"+c]=Math.floor(f.getTime()\/1E3)+(d?\"s\":\"\");0\u003Eb?(a._fieldsExpired||(a._fieldsExpired={}),a._fieldsExpired[c]=!0):a._fieldsExpired\u0026\u0026(a._fieldsExpired[c]=!1);d\u0026\u0026(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,\"1\"))};a._findVisitorID=function(a){return a\u0026\u0026(\"object\"==typeof a\u0026\u0026(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:\"\"+a),a\u0026\u0026\"NOTARGET\"===(a=a.toUpperCase())\u0026\u0026(a=D),a\u0026\u0026(a===D||a.match(K))||(a=\"\")),a};a._setFields=\nfunction(c,b){if(a._clearTimeout(c),null!=a._loading\u0026\u0026(a._loading[c]=!1),E.fieldGroupObj[c]\u0026\u0026E.setState(c,!1),\"MC\"===c){!0!==E.isClientSideMarketingCloudVisitorID\u0026\u0026(E.isClientSideMarketingCloudVisitorID=!1);var f=a._getField(q);if(!f||a.overwriteCrossDomainMCIDAndAID){if(!(f=\"object\"==typeof b\u0026\u0026b.mid?b.mid:a._findVisitorID(b))){if(a._use1stPartyMarketingCloudServer\u0026\u0026!a.tried1stPartyMarketingCloudServer)return a.tried1stPartyMarketingCloudServer=!0,void a.getAnalyticsVisitorID(null,!1,!0);f=a._generateLocalMID()}a._setField(q,\nf)}f\u0026\u0026f!==D||(f=\"\");\"object\"==typeof b\u0026\u0026((b.d_region||b.dcs_region||b.d_blob||b.blob)\u0026\u0026a._setFields(y,b),a._use1stPartyMarketingCloudServer\u0026\u0026b.mid\u0026\u0026a._setFields(w,{id:b.id}));a._callAllCallbacks(q,[f])}if(c===y\u0026\u0026\"object\"==typeof b){f=604800;void 0!=b.id_sync_ttl\u0026\u0026b.id_sync_ttl\u0026\u0026(f=parseInt(b.id_sync_ttl,10));var d=A.getRegionAndCheckIfChanged(b,f);a._callAllCallbacks(\"MCAAMLH\",[d]);d=a._getField(C);(b.d_blob||b.blob)\u0026\u0026(d=b.d_blob,d||(d=b.blob),a._setFieldExpire(C,f),a._setField(C,d));d||(d=\"\");a._callAllCallbacks(C,\n[d]);!b.error_msg\u0026\u0026a._newCustomerIDsHash\u0026\u0026a._setField(\"MCCIDH\",a._newCustomerIDsHash)}c===w\u0026\u0026((f=a._getField(u))\u0026\u0026!a.overwriteCrossDomainMCIDAndAID||(f=a._findVisitorID(b),f?f!==D\u0026\u0026a._setFieldExpire(C,-1):f=D,a._setField(u,f)),f\u0026\u0026f!==D||(f=\"\"),a._callAllCallbacks(u,[f]));a.idSyncDisableSyncs||a.disableIdSyncs?A.idCallNotProcesssed=!0:(A.idCallNotProcesssed=!1,f={},f.ibs=b.ibs,f.subdomain=b.subdomain,A.processIDCallData(f));if(b===Object(b)){var g,h;a.isAllowed()\u0026\u0026(g=a._getField(\"MCOPTOUT\"));g||(g=\nD,b.d_optout\u0026\u0026b.d_optout instanceof Array\u0026\u0026(g=b.d_optout.join(\",\")),h=parseInt(b.d_ottl,10),isNaN(h)\u0026\u0026(h=7200),a._setFieldExpire(\"MCOPTOUT\",h,!0),a._setField(\"MCOPTOUT\",g));a._callAllCallbacks(\"MCOPTOUT\",[g])}};a._loading=null;a._getRemoteField=function(b,c,d,g,h){var f,p=\"\",r=t.isFirstPartyAnalyticsVisitorIDCall(b),k={MCAAMLH:!0,MCAAMB:!0};if(a.isAllowed())if(a._readVisitor(),p=a._getField(b,!0===k[b]),!(!p||a._fieldsExpired\u0026\u0026a._fieldsExpired[b])||a.disableThirdPartyCalls\u0026\u0026!r)p||(b===q?(a._registerCallback(b,\nd),p=a._generateLocalMID(),a.setMarketingCloudVisitorID(p)):b===u?(a._registerCallback(b,d),p=\"\",a.setAnalyticsVisitorID(p)):(p=\"\",g=!0));else if(b===q||\"MCOPTOUT\"===b?f=\"MC\":\"MCAAMLH\"===b||b===C?f=y:b===u\u0026\u0026(f=w),f)return!c||null!=a._loading\u0026\u0026a._loading[f]||(null==a._loading\u0026\u0026(a._loading={}),a._loading[f]=!0,a._loadData(f,c,function(c){a._getField(b)||(c\u0026\u0026E.setState(f,!0),c=\"\",b===q?c=a._generateLocalMID():f===y\u0026\u0026(c={error_msg:\"timeout\"}),a._setFields(f,c))},h)),a._registerCallback(b,d),p||(c||a._setFields(f,\n{id:D}),\"\");return b!==q\u0026\u0026b!==u||p!==D||(p=\"\",g=!0),d\u0026\u0026g\u0026\u0026a._callCallback(d,[p]),p};a._setMarketingCloudFields=function(b){a._readVisitor();a._setFields(\"MC\",b)};a._mapCustomerIDs=function(b){a.getAudienceManagerBlob(b,!0)};a._setAnalyticsFields=function(b){a._readVisitor();a._setFields(w,b)};a._setAudienceManagerFields=function(b){a._readVisitor();a._setFields(y,b)};a._getAudienceManagerURLData=function(b){var c=a.audienceManagerServer,f=\"\",d=a._getField(q),g=a._getField(C,!0),h=a._getField(u);h=\nh\u0026\u0026h!==D?\"\\x26d_cid_ic\\x3dAVID%01\"+encodeURIComponent(h):\"\";if(a.loadSSL\u0026\u0026a.audienceManagerServerSecure\u0026\u0026(c=a.audienceManagerServerSecure),c){var m,l,n=a.getCustomerIDs();if(n)for(m in n)!Object.prototype[m]\u0026\u0026(l=n[m],h+=\"\\x26d_cid_ic\\x3d\"+encodeURIComponent(m)+\"%01\"+encodeURIComponent(l.id?l.id:\"\")+(l.authState?\"%01\"+l.authState:\"\"));b||(b=\"_setAudienceManagerFields\");c=\"http\"+(a.loadSSL?\"s\":\"\")+\":\/\/\"+c+\"\/id\";d=\"d_visid_ver\\x3d\"+a.version+\"\\x26d_rtbd\\x3djson\\x26d_ver\\x3d2\"+(!d\u0026\u0026a._use1stPartyMarketingCloudServer?\n\"\\x26d_verify\\x3d1\":\"\")+\"\\x26d_orgid\\x3d\"+encodeURIComponent(a.marketingCloudOrgID)+\"\\x26d_nsid\\x3d\"+(a.idSyncContainerID||0)+(d?\"\\x26d_mid\\x3d\"+encodeURIComponent(d):\"\")+(a.idSyncDisable3rdPartySyncing||a.disableThirdPartyCookies?\"\\x26d_coppa\\x3dtrue\":\"\")+(!0===k?\"\\x26d_coop_safe\\x3d1\":!1===k?\"\\x26d_coop_unsafe\\x3d1\":\"\")+(g?\"\\x26d_blob\\x3d\"+encodeURIComponent(g):\"\")+h;g=[\"s_c_il\",a._in,b];return f=c+\"?\"+d+\"\\x26d_cb\\x3ds_c_il%5B\"+a._in+\"%5D.\"+b,{url:f,corsUrl:c+\"?\"+d,callback:g}}return{url:f}};a.appendVisitorIDsTo=\nfunction(b){try{var c=[[q,a._getField(q)],[u,a._getField(u)],[\"MCORGID\",a.marketingCloudOrgID]];return a._addQuerystringParam(b,X,n(c))}catch(r){return b}};a.appendSupplementalDataIDTo=function(b,c){if(!(c=c||a.getSupplementalDataID(t.generateRandomString(),!0)))return b;try{var f=n([[\"SDID\",c],[\"MCORGID\",a.marketingCloudOrgID]]);return a._addQuerystringParam(b,Y,f)}catch(Ea){return b}};var t={parseHash:function(a){var b=a.indexOf(\"#\");return 0\u003Cb?a.substr(b):\"\"},hashlessUrl:function(a){var b=a.indexOf(\"#\");\nreturn 0\u003Cb?a.substr(0,b):a},addQueryParamAtLocation:function(a,b,c){a=a.split(\"\\x26\");return c=null!=c?c:a.length,a.splice(c,0,b),a.join(\"\\x26\")},isFirstPartyAnalyticsVisitorIDCall:function(b,c,d){if(b!==u)return!1;var f;return c||(c=a.trackingServer),d||(d=a.trackingServerSecure),!(\"string\"!=typeof(f=a.loadSSL?d:c)||!f.length)\u0026\u00260\u003Ef.indexOf(\"2o7.net\")\u0026\u00260\u003Ef.indexOf(\"omtrdc.net\")},isObject:function(a){return!(!a||a!==Object(a))},removeCookie:function(b){document.cookie=encodeURIComponent(b)+\"\\x3d; Path\\x3d\/; Expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\"+\n(a.cookieDomain?\" domain\\x3d\"+a.cookieDomain+\";\":\"\")},isTrackingServerPopulated:function(){return!!a.trackingServer||!!a.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()\/1E3)},parsePipeDelimetedKeyValues:function(a){return a.split(\"|\").reduce(function(a,b){var c=b.split(\"\\x3d\");return a[c[0]]=decodeURIComponent(c[1]),a},{})},generateRandomString:function(a){a=a||5;for(var b=\"\",c=\"abcdefghijklmnopqrstuvwxyz0123456789\";a--;)b+=c[Math.floor(Math.random()*\nc.length)];return b},parseBoolean:function(a){return\"true\"===a||\"false\"!==a\u0026\u0026null},replaceMethodsWithFunction:function(a,b){for(var c in a)a.hasOwnProperty(c)\u0026\u0026\"function\"==typeof a[c]\u0026\u0026(a[c]=b);return a},pluck:function(a,b){return b.reduce(function(b,c){return a[c]\u0026\u0026(b[c]=a[c]),b},Object.create(null))}};a._helpers=t;var A=Da(a,x);a._destinationPublishing=A;a.timeoutMetricsLog=[];var E={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,\nfieldGroupObj:{},setState:function(a,b){switch(a){case \"MC\":!1===b?!0!==this.MCIDCallTimedOut\u0026\u0026(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=b;break;case w:!1===b?!0!==this.AnalyticsIDCallTimedOut\u0026\u0026(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=b;break;case y:!1===b?!0!==this.AAMIDCallTimedOut\u0026\u0026(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=b}}};a.isClientSideMarketingCloudVisitorID=function(){return E.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return E.MCIDCallTimedOut};\na.AnalyticsIDCallTimedOut=function(){return E.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return E.AAMIDCallTimedOut};a.idSyncGetOnPageSyncInfo=function(){return a._readVisitor(),a._getField(\"MCSYNCSOP\")};a.idSyncByURL=function(b){var c=b||{};var f=c.minutesToLive,d=\"\";c=((a.idSyncDisableSyncs||a.disableIdSyncs)\u0026\u0026(d=d||\"Error: id syncs have been disabled\"),\"string\"==typeof c.dpid\u0026\u0026c.dpid.length||(d=d||\"Error: config.dpid is empty\"),\"string\"==typeof c.url\u0026\u0026c.url.length||(d=d||\"Error: config.url is empty\"),\nvoid 0===f?f=20160:(f=parseInt(f,10),(isNaN(f)||0\u003E=f)\u0026\u0026(d=d||\"Error: config.minutesToLive needs to be a positive number\")),{error:d,ttl:f});if(c.error)return c.error;var g,h;f=b.url;d=encodeURIComponent;var k=A;return f=f.replace(\/^https:\/,\"\").replace(\/^http:\/,\"\"),g=z.encodeAndBuildRequest([\"\",b.dpid,b.dpuuid||\"\"],\",\"),h=[\"ibs\",d(b.dpid),\"img\",d(f),c.ttl,\"\",g],k.addMessage(h.join(\"|\")),k.requestToProcess(),\"Successfully queued\"};a.idSyncByDataSource=function(b){return b===Object(b)\u0026\u0026\"string\"==typeof b.dpuuid\u0026\u0026\nb.dpuuid.length?(b.url=\"\/\/dpm.demdex.net\/ibs:dpid\\x3d\"+b.dpid+\"\\x26dpuuid\\x3d\"+b.dpuuid,a.idSyncByURL(b)):\"Error: config or config.dpuuid is empty\"};a.publishDestinations=function(b,c,d){if(d=\"function\"==typeof d?d:function(){},\"string\"!=typeof b||!b.length)return void d({error:\"subdomain is not a populated string.\"});if(!(c instanceof Array\u0026\u0026c.length))return void d({error:\"messages is not a populated array.\"});var f=A;if(!f.readyToAttachIframePreliminary())return void d({error:\"The destination publishing iframe is disabled in the Visitor library.\"});\nvar g=!1;if(c.forEach(function(a){\"string\"==typeof a\u0026\u0026a.length\u0026\u0026(f.addMessage(a),g=!0)}),!g)return void d({error:\"None of the messages are populated strings.\"});f.iframe?(d({message:\"The destination publishing iframe is already attached and loaded.\"}),f.requestToProcess()):!a.subdomain\u0026\u0026a._getField(q)?(f.subdomain=b,f.doAttachIframe=!0,f.url=f.getUrl(),f.readyToAttachIframe()?(f.iframeLoadedCallbacks.push(function(a){d({message:\"Attempted to attach and load the destination publishing iframe through this API call. Result: \"+\n(a.message||\"no result\")})}),f.attachIframe()):d({error:\"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.\"})):f.iframeLoadedCallbacks.push(function(a){d({message:\"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: \"+(a.message||\"no result\")})})};a._getCookieVersion=function(b){b=b||a.cookieRead(a.cookieName);return(b=Z.exec(b))\u0026\u00261\u003Cb.length?b[1]:null};a._resetAmcvCookie=function(b){var c=\na._getCookieVersion();c\u0026\u0026!U.isLessThan(c,b)||t.removeCookie(a.cookieName)};a.setAsCoopSafe=function(){k=!0};a.setAsCoopUnsafe=function(){k=!1};a.init=function(){!function(){if(d\u0026\u0026\"object\"==typeof d){a.configs=Object.create(null);for(var b in d)!Object.prototype[b]\u0026\u0026(a[b]=d[b],a.configs[b]=d[b]);a.idSyncContainerID=a.idSyncContainerID||0;k=\"boolean\"==typeof a.isCoopSafe?a.isCoopSafe:t.parseBoolean(a.isCoopSafe);a.resetBeforeVersion\u0026\u0026a._resetAmcvCookie(a.resetBeforeVersion);a._attemptToPopulateIdsFromUrl();\na._attemptToPopulateSdidFromUrl();a._readVisitor();b=a._getField(B);var c=Math.ceil((new Date).getTime()\/W);a.idSyncDisableSyncs||a.disableIdSyncs||!A.canMakeSyncIDCall(b,c)||(a._setFieldExpire(C,-1),a._setField(B,c));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a._mergeServerState(a.serverState)}else a._attemptToPopulateIdsFromUrl(),a._attemptToPopulateSdidFromUrl()}();(function(){if(!a.idSyncDisableSyncs\u0026\u0026!a.disableIdSyncs){A.checkDPIframeSrc();m.addEventListener(\"load\",\nfunction(){x.windowLoaded=!0;var a=A;a.readyToAttachIframe()\u0026\u0026a.attachIframe()});try{N.receiveMessage(function(a){A.receiveMessage(a.data)},A.iframeHost)}catch(f){}}})();(function(){a.whitelistIframeDomains\u0026\u0026G\u0026\u0026(a.whitelistIframeDomains=a.whitelistIframeDomains instanceof Array?a.whitelistIframeDomains:[a.whitelistIframeDomains],a.whitelistIframeDomains.forEach(function(b){var d=new R(c,b);d=wa(a,d);N.receiveMessage(d,b)}))})()}};return y.getInstance=function(c,d){if(!c)throw Error(\"Visitor requires Adobe Marketing Cloud Org ID.\");\n0\u003Ec.indexOf(\"@\")\u0026\u0026(c+=\"@AdobeOrg\");var g=function(){var a=l.s_c_il;if(a)for(var b=0;b\u003Ca.length;b++){var d=a[b];if(d\u0026\u0026\"Visitor\"===d._c\u0026\u0026d.marketingCloudOrgID===c)return d}}();if(g)return g;g=c;var b=g.split(\"\").reverse().join(\"\");g=new y(c,null,b);d===Object(d)\u0026\u0026d.cookieDomain\u0026\u0026(g.cookieDomain=d.cookieDomain);l.s_c_il.splice(--l.s_c_in,1);var h=z.getIeVersion();if(\"number\"==typeof h\u0026\u002610\u003Eh)return g._helpers.replaceMethodsWithFunction(g,function(){});try{var n=l.self!==l.parent}catch(a){n=!0}n=n\u0026\u0026!function(a){return a.cookieWrite(\"TEST_AMCV_COOKIE\",\n\"T\",1),\"T\"===a.cookieRead(\"TEST_AMCV_COOKIE\")\u0026\u0026(a._helpers.removeCookie(\"TEST_AMCV_COOKIE\"),!0)}(g)\u0026\u0026l.parent?new ta(c,d,g,l.parent):new y(c,d,b);return g=null,n.init(),n},function(){function c(){y.windowLoaded=!0}l.addEventListener?l.addEventListener(\"load\",c):l.attachEvent\u0026\u0026l.attachEvent(\"onload\",c);y.codeLoadEnd=(new Date).getTime()}(),y.config=M,l.Visitor=y,y}(),visitor=Visitor.getInstance(\"F7093025512D2B690A490D44@AdobeOrg\",{trackingServer:",["escape",["macro",196],8,16],",trackingServerSecure:",["escape",["macro",197],8,16],"});\n",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~ HTML - Adobe Visitor API - AAM trackingServer:\",",["escape",["macro",196],8,16],");",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~ HTML - Adobe Visitor API - window.Visitor:\",window.Visitor,Date.now());",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~ HTML - Adobe Visitor API - window.visitor:\",window.visitor,Date.now());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["template","error 404: ",["macro",92]],
      "vtp_eventLabel":["macro",4],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - 404 Error Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["template","error 500: ",["macro",92]],
      "vtp_eventLabel":["macro",4],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - 500 Error Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"barrier",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",93],"metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Barrier Appeared"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"comment posted",
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Comment Posted"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["template",["macro",97],"\/",["macro",95]],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Downloads - Download Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"checkout option",
      "vtp_eventLabel":["template",["macro",98],": ",["macro",99]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Checkout Options"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"product impression",
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Product Impression"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"promotion click",
      "vtp_eventLabel":["template",["macro",100]," - ",["macro",101]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Promotion Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"promotion impressions",
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Promotion Impression"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",102],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Error"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",103],
      "vtp_eventLabel":["template","to: ",["macro",104]],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",105]],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"link subscription",
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Link Subscription"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",106],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",108],
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Login"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"mailto",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",111],
      "vtp_eventLabel":["template","from: ",["macro",92]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Mailto Link Click - Mailto Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"newsletter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",93],"metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"signup",
      "vtp_eventLabel":["macro",112],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Newsletter Sign-up"],["map","index","46","dimension",["macro",114]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"app store link",
      "vtp_eventLabel":["macro",95],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Outbound Link Click - App Store Links"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"general link",
      "vtp_eventLabel":["template","to: ",["macro",95]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Outbound Link Click - General Links"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"social link",
      "vtp_eventLabel":["template","to: ",["macro",95]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Outbound Link Click - Social Links"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",119],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Registration"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric",["macro",120]]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",121],
      "vtp_eventLabel":["template","results = ",["macro",120]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Site Search"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",122],
      "vtp_eventLabel":["macro",123],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Social Network Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","21","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_dimension":["list",["map","index","13","dimension","Tag Name: GA - Pageview - Core Pageview - All Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",125],
      "vtp_eventLabel":["macro",126],
      "vtp_dimension":["list",["map","index","13","dimension","GA Event - Video Ad"],["map","index","76","dimension",["template",["macro",127],"|",["macro",128],"|",["macro",129],"|",["macro",130]]],["map","index","77","dimension",["macro",131]],["map","index","78","dimension",["macro",132]],["map","index","79","dimension",["macro",133]],["map","index","80","dimension",["macro",134]],["map","index","82","dimension",["macro",127]],["map","index","83","dimension",["macro",128]],["map","index","84","dimension",["macro",130]],["map","index","85","dimension",["macro",129]],["map","index","86","dimension",["macro",135]],["map","index","81","dimension",["macro",136]],["map","index","90","dimension",["macro",137]],["map","index","91","dimension",["macro",138]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":30
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",140],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric",["macro",142]],["map","index",["macro",93],"metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",147],
      "vtp_eventLabel":["template",["macro",127],"|",["macro",128],"|",["macro",129],"|",["macro",130]],
      "vtp_dimension":["list",["map","index","13","dimension","GA Event - Video Engagement"],["map","index","76","dimension",["template",["macro",127],"|",["macro",128],"|",["macro",129],"|",["macro",130]]],["map","index","77","dimension",["macro",131]],["map","index","78","dimension",["macro",132]],["map","index","79","dimension",["macro",133]],["map","index","80","dimension",["macro",134]],["map","index","82","dimension",["macro",127]],["map","index","83","dimension",["macro",128]],["map","index","84","dimension",["macro",130]],["map","index","85","dimension",["macro",129]],["map","index","86","dimension",["macro",135]],["map","index","90","dimension",["macro",137]],["map","index","91","dimension",["macro",138]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["template","click class: ",["macro",148]],
      "vtp_eventLabel":["template","click text: ",["macro",149]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Catch All Clicks"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"loaded",
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Paywall Loaded"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"checkout step",
      "vtp_eventLabel":["template",["macro",98],": ",["macro",153]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Checkout Steps"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"transaction",
      "vtp_eventLabel":["macro",154],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Transaction"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_fieldsToSet":["list",["map","fieldName","13","value","GA - Event - EE - Remove From Cart"]],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"remove from cart",
      "vtp_eventLabel":["template",["macro",155],": ",["macro",156]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"add to cart",
      "vtp_eventLabel":["template",["macro",155],": ",["macro",156]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Add to Cart"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"product detail view",
      "vtp_eventLabel":["template",["macro",155],": ",["macro",156]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Product Detail View"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",152],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"product click",
      "vtp_eventLabel":["template",["macro",155],": ",["macro",156]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - EE - Product Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"subscriptions",
      "vtp_eventLabel":["template","click ID: ",["macro",157]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - In-House Subscription Banner Clicks"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"subscriptions",
      "vtp_eventLabel":["template","click ID: ",["macro",157]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - In-House Subscription Banner Impressions"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__csm",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_clientId":"6035094",
      "tag_id":54
    },{
      "function":"__qcm",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_pcode":"p-Jjy-Cyr1NZGRz",
      "vtp_labels":["template","Culture.Ars Technica.",["macro",10],".",["macro",11]],
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"privacy mode",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"privacy mode  - true",
      "vtp_eventLabel":"privacy mode  - true",
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Privacy Mode Event"],["map","index","110","dimension","Privacy Mode - true"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"vertical scroll tracking",
      "vtp_eventLabel":["template","scroll: ",["macro",160]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Vertical Scroll Tracking"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",161],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"bouncex",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",93],"metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_eventLabel":["macro",162],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - BounceX Events"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/condenast.demdex.net\/event?d_sid=14104286",
      "tag_id":79
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",163],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"recirc",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",93],"metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_eventLabel":["macro",167],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Recirc Events"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o1o49",
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",168],
      "vtp_eventLabel":["macro",169],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Account Events"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"gallery tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"gallery ad view",
      "vtp_eventLabel":["macro",80],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Gallery Ad View"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"gallery tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","13","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"embedded gallery view",
      "vtp_eventLabel":["macro",170],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Embedded Gallery View"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",171],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbrain",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Outbrain Events"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["template",["macro",177]," inline link click"],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Inline Link Click"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","19","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"buy button clicks",
      "vtp_eventLabel":["template","click text: ",["macro",149]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Buy Button Clicks"],["map","index","96","dimension",["macro",95]],["map","index","119","dimension",["macro",178]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"hamburger menu events",
      "vtp_eventLabel":["macro",80],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Hamburger Menu Events"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"read more clicks",
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Read More - Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"newsletter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"in-view",
      "vtp_eventLabel":["macro",179],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Newsletter In-view"],["map","index","46","dimension",["macro",114]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","20","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"affiliate link clicks",
      "vtp_eventLabel":["template","click text: ",["macro",149]],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Affiliate Link Clicks"],["map","index","96","dimension",["macro",181]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"timer tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"timer tracking - seconds",
      "vtp_eventLabel":["macro",184],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - 15 Second Intervals"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":326
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","21","metric","1"]],
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"tags pages: more stories clicks",
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Tags Pages - More Stories Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":332
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"recirc",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"recirc-article-bottom-click",
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Article Bottom Recirc Link Click"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":334
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Article Interaction Clicks"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":336
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"alert events",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_eventLabel":["macro",187],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Alert Events"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":349
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"data visualization tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",80],
      "vtp_dimension":["list",["map","index","13","dimension","GA - Event - Data Visualization Events"],["map","index","96","dimension",["macro",95]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":354
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_31",
      "tag_id":355
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_32",
      "tag_id":356
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_33",
      "tag_id":357
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_39",
      "tag_id":358
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_40",
      "tag_id":359
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_41",
      "tag_id":360
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"8819567_135",
      "vtp_enableTriggerStartOption":true,
      "tag_id":361
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_218",
      "tag_id":362
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_219",
      "tag_id":363
    },{
      "function":"__cl",
      "tag_id":364
    },{
      "function":"__cl",
      "tag_id":365
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_300",
      "tag_id":366
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"4",
      "vtp_uniqueTriggerId":"8819567_324",
      "tag_id":367
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"4",
      "vtp_uniqueTriggerId":"8819567_325",
      "tag_id":368
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_333",
      "tag_id":369
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8819567_340",
      "tag_id":370
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getVisitNumCustom(e){function q(c){var b=new Date;b.setHours(0);b.setMinutes(0);b.setSeconds(0);if(\"m\"==c){c=b.getMonth();var a=b.getFullYear();c=new Date(a,c+1,0);c=c.getDate();d=c-b.getDate()+1}else d=\"w\"==c?7-b.getDay():1;b.setDate(b.getDate()+d);return b}function n(c,b){c=(b=document.cookie.match(\"(^|;)\\\\s*\"+c+\"\\\\s*\\x3d\\\\s*([^;]+)\"))?b.pop():\"\";return decodeURIComponent(c)}function g(c,b,a){a=a?\"; expires\\x3d\"+a.toGMTString():\"\";document.cookie=c+\"\\x3d\"+encodeURIComponent(b)+a+\"; path\\x3d\/\"}\nvar a=new Date,r,l=a.getTime(),m=\"CN_visits_\"+e,k=\"CN_in_visit_\"+e;e=q(e);var p=e.getTime();a.setTime(p);if(e=n(m))var h=e.indexOf(\"\\x26vn\\x3d\"),f=e.substring(h+4,e.length);if(r=n(k))return f?(a.setTime(l+18E5),g(k,\"true\",a),f):\"unknown visit number\";if(f)return f++,h=e.substring(0,h),a.setTime(h),g(m,h+\"\\x26vn\\x3d\"+f,a),a.setTime(l+18E5),g(k,\"true\",a),f;g(m,p+\"\\x26vn\\x3d1\",a);a.setTime(l+18E5);g(k,\"true\",a);return 1}window.dataLayer=window.dataLayer||[];window.dataLayer.push({user:{monthlyVisitCount:getVisitNumCustom(\"m\")}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"96cc6d73eeadca5c51a196378f9bf3d1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",92,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a.createElement(\"script\");a.src=\"\/\/tag.bounceexchange.com\/2806\/i.js\";a.async=!0;window.top.document.head.appendChild(a)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__adIq_Config={pageName:",["escape",["macro",10],8,16],",siteId:\"Ars Technica\",creativeId:",["escape",["macro",189],8,16],",placement:",["escape",["macro",191],8,16],"};\n(function(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/d.turn.com\/r\/dd\/id\/L21rdC84MTYvY2lkLzI4NTk1MjExL3QvMA\/kv\/PageName\\x3d\"+__adIq_Config.pageName+\",SiteID\\x3d\"+__adIq_Config.siteId+\",CampaignID\\x3d1802C,Channel\\x3dwebsite,CreativeID\\x3d\"+__adIq_Config.creativeId;(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.SparrowCache?window.sparrow.track(\"general\",\"pageview\",{}):void 0;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){var a=[[\"allure.com\",\"allure\"],[\"architecturaldigest.com\",\"architectural-digest\"],[\"arstechnica.com\",\"ars-technica\"],[\"bonappetit.com\",\"bon-appetit\"],[\"brides.com\",\"brides\"],[\"cntraveler.com\",\"conde-nast-traveler\"],[\"details.com\",\"details\"],[\"epicurious.com\",\"epicurious\"],[\"glamour.com\",\"glamour\"],[\"golfdigest.com\",\"golf-digest\"],[\"gq.com\",\"gq\"],[\"newyorker.com\",\"the-new-yorker\"],[\"self.com\",\"self\"],[\"style.com\",\"style\"],[\"teenvogue.com\",\"teen-vogue\"],[\"thescene.com\",\"the-scene\"],\n[\"vanityfair.com\",\"vanity-fair\"],[\"vogue.com\",\"vogue\"],[\"wired.com\",\"wired\"],[\"wmagazine.com\",\"w-magazine\"],[\"localhost\",\"LOC\"],[\".\",\"FIX\"],[\"\",\"FILE\"]].filter(e);return a[0][1]}function e(a){a=a[0];return-1!==document.location.hostname.indexOf(a)}var f=function(a,b){function c(a,b){var c=!1;var d=document.createElement(\"script\");d.type=\"text\/javascript\";d.src=a;d.onload=d.onreadystatechange=function(){c||this.readyState\u0026\u0026\"complete\"!=this.readyState||(c=!0,b?b():!0)};a=document.getElementsByTagName(\"script\")[0];\na.parentNode.insertBefore(d,a)}return c(\"\/\/pixel.condenastdigital.com\/config\/\"+a+\".config.js\",function(){c(\"\/\/pixel.condenastdigital.com\/sparrow.min.js\",function(){b\u0026\u0026b()})}),!0},g=function(){new Sparrow({develop:!0,title:b(),origin:b(),campaign:\"cmSubscribe\",infinityID:!0,capturedCookies:[{cookie_key:\"amg_user_partner\",sparrow_key:\"cnid\"}],capturedQueryParams:[\"mbid\",\"CNDID\",\"intcid\",\"pos_name\",\"source\"],events:[{type:[\"click\"],selector:\"a\"},{type:[\"scroll\",\"pageview\",\"timespent\"],selector:\"window\"}],\nmeta:{dim1:HEARST.circ.campaignName||\"\",dim2:HEARST.circ.campaignId||\"\",dim3:HEARST.circ.digital_account_number||\"\",dim4:HEARST.circ.transId||\"\",dim5:HEARST.circ.keycode||\"\",dim6:HEARST.circ.up||\"\"}})};f(b(),g)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function D(){for(var a=[8],c=1;1\u003E=c;c++)a.push(8+c),a.push(8-c);a=a[Math.floor(Math.random()*a.length)];return{b:a,a:0==Math.floor(Math.random()*a)}}function k(a){var c=a=a.replace(\":\",\"\");try{for(var d=0;100\u003Ed\u0026\u0026(a=decodeURIComponent(a),c!=a)\u0026\u0026!a.match(\/^http(s)?:\/);d++)c=a}catch(H){}return a.replace(\/(^\\s+|\\s+$)\/g,\"\")}try{var y=function(a,c,d,b){return a[c]===b\u0026\u00260===d||a[d]===b\u0026\u00260===c};if(!location||!location.hostname||!location.pathname)return!1;var e=document.location.hostname.replace(\/^www\\.\/,\n\"\"),q=function(){for(var a,c=document.getElementsByTagName(\"meta\"),d,b=0,e=c.length;b\u003Ce;b++)if(d=c[b],\"og:title\"===d.getAttribute(\"property\")){a=d.getAttribute(\"content\");break}a||(a=document.title||\"Untitled\");return a}(),b={};b=function(a,c,b){a.l1=c;a.l2=b;a.l3=\"__page__\";a.l4=\"-\";return a}(b,e,q);var l=(new Date).getTime(),m=Math.floor(Math.random()*Math.pow(10,12));var n=D();var r=n.a?n.b:0;b.zmoatab_cm=r;b.t=l;b.de=m;b.zMoatAB_SNPT=!0;var t=r?r:1;var z=n?n.a?!0:!1:!0;e=[];var u=(new Date).getTime().toString(35),\nv=[k(b.l1),k(b.l2),k(b.l3),k(b.l4)].join(\":\");q=\/zct[a-z0-9]+\/i;var f=\"\",g;for(g in b)b.hasOwnProperty(g)\u0026\u0026g.match(q)\u0026\u0026(f+=\"\\x26\"+g+\"\\x3d\"+b[g]);var A=document.referrer.match(\/^([^:]{2,}:\\\/\\\/[^\\\/]*)\/),p=A?A[1]:document.referrer,w=[\"e\\x3d17\",\"d\\x3d\"+encodeURIComponent(v),\"de\\x3d\"+m,\"t\\x3d\"+l,\"i\\x3dCONDENASTCONTENT1\",\"cm\\x3d\"+t,String(\"j\\x3d\"+encodeURIComponent(p)+f),\"mp\\x3d1\",\"ac\\x3d1\",\"pl\\x3d1\",\"bq\\x3d10\",\"vc\\x3d2\"];u=\"https:\/\/wefzaajzxdrz-a.akamaihd.net\/\"+u+\".gif?\";var x=function(a){for(var c=\"\",\nb=0;b\u003Ca.length;b++)c+=(0===b?\"\":\"\\x26\")+a[b];return c}(function(a){for(var b=0;b\u003Ca.length;b++){var d=Math.floor(Math.random()*(a.length-b)+b),e=a[b],f=y(a,b,d,w[1]);y(a,b,d,w[0])||f?b--:(a[b]=a[d],a[d]=e)}return a}(w));x=u+x+\"\\x26cs\\x3d0\";var E=\"https:\/\/px.moatads.com\/pixel.gif?e\\x3d17\\x26d\\x3d\"+encodeURIComponent(v)+\"\\x26de\\x3d\"+m+\"\\x26t\\x3d\"+l+\"\\x26i\\x3dCONDENASTCONTENT1\\x26cm\\x3d\"+t+\"\\x26j\\x3d\"+encodeURIComponent(p)+f+\"\\x26mp\\x3d0\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0\",\nF=\"https:\/\/px.moatads.com\/pixel.gif?e\\x3d17\\x26d\\x3d\"+encodeURIComponent(v)+\"\\x26de\\x3d\"+m+\"\\x26t\\x3d\"+l+\"\\x26i\\x3dCONDENASTCONTENT1\\x26cm\\x3d\"+t+\"\\x26j\\x3d\"+encodeURIComponent(p)+f+\"\\x26ku\\x3d1\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0\";z\u0026\u0026((new Image).src=x,(new Image).src=E);for(var B in b)e.push(B+\"\\x3d\"+encodeURIComponent(b[B]));e=e.join(\"\\x26\");e+=\"\\x26vc\\x3d2\";var h=document.createElement(\"script\");h.type=\"text\/javascript\";h.async=!0;z\u0026\u0026(h.onerror=function(){(new Image).src=\nF});var C=document.getElementsByTagName(\"script\")[0];C.parentNode.insertBefore(h,C);h.src=\"https:\/\/z.moatads.com\/condenastcontent443087103444\/moatcontent.js#zMoatAdvertiser\\x3d",["escape",["macro",192],7],"\\x26zMoatBrand\\x3dArsTechnica\\x26zMoatUTMMedium\\x3d",["escape",["macro",193],7],"\\x26zMoatUTMCampaign\\x3d",["escape",["macro",194],7],"\\x26zMoatCampaignID\\x3d",["escape",["macro",195],7],"\\x26zMoatContentId\\x3d",["escape",["macro",35],7],"\\x26\"+e}catch(a){try{var G=\"\/\/pixel.moatads.com\/pixel.gif?e\\x3d24\\x26d\\x3ddata%3Adata%3Adata%3Adata\\x26i\\x3dMOATCONTENTABSNIPPET1\"+\nf+\"\\x26vc\\x3d2\\x26ac\\x3d1\\x26k\\x3d\"+encodeURIComponent(a)+\"\\x26j\\x3d\"+encodeURIComponent(p)+\"\\x26cs\\x3d\"+(new Date).getTime();(new Image).src=G}catch(c){}}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/a.ad.gt\/api\/v1\/u\/matches\/57\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar b=navigator.userAgent,h=3;\nif(window.webkitRequestFileSystem)webkitRequestFileSystem(TEMPORARY,1,function(){dataLayer.push({event:\"privacy-mode-false\"})},function(){dataLayer.push({event:\"privacy-mode-true\"})});else if(-1\u003Cb.indexOf(\"Firefox\")\u0026\u0026window.indexedDB)b=indexedDB.open(\"test\"),b.onsuccess=function(){dataLayer.push({event:\"privacy-mode-false\"})},b.onerror=function(){dataLayer.push({event:\"privacy-mode-true\"})};else if(-1\u003Cb.indexOf(\"Edge\")||(h=\/(?:MSIE|rv:)\\s?([\\d\\.]+)\/.exec(b))\u0026\u002610\u003C=parseInt(h[1],10))privacyMode=!window.indexedDB,\ndataLayer.push({event:\"privacy-mode-\"+privacyMode.toString()});else if(-1\u003Cb.indexOf(\"Safari\")\u0026\u0026window.localStorage)try{privateMode=!openDatabase(null,null,null,null),localStorage.setItem(\"test\",1),localStorage.removeItem(\"test\"),dataLayer.push({event:\"privacy-mode-false\"})}catch(a){dataLayer.push({event:\"privacy-mode-true\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",98,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._aam_dataLayer=window.google_tag_manager[",["escape",["macro",12],8,16],"].dataLayer.get({split:function(){return[]}});a._aam_dataLayer.mcmid=",["escape",["macro",66],8,16],";",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~_aam_dataLayer\",_aam_dataLayer,Date.now())})(window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"434737\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=434737\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,e,f,c,a,d){b[c]=b[c]||{init:function(){(b[c].q=b[c].q||[]).push(arguments)},ready:function(b){\"function\"==typeof b\u0026\u0026(a.onload=a.onreadystatechange=function(){if(!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,d.parentNode\u0026\u0026a.parentNode\u0026\u0026d.parentNode.removeChild(a),b\u0026\u0026b()})}};b[c].d=1*new Date;a=e.createElement(f);d=e.getElementsByTagName(f)[0];a.async=1;a.src=\"\/\/www.medtargetsystem.com\/javascript\/beacon.js?v2.5.12\";d.parentNode.insertBefore(a,d)})(window,\ndocument,\"script\",\"AIM\");AIM.init(\"119-556-B0E9F642\");AIM.ready(function(){AIM.ondetect(function(b){})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"228464857488266\");\nfbq(\"track\",\"PageView\",{SiteSection:",["escape",["macro",10],8,16],",SubSection:",["escape",["macro",11],8,16],",PageTags:",["escape",["macro",43],8,16],",Brand:\"Pitchfork\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=228464857488266\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"228464857488266\");window._4d\u0026\u0026window._4d.user\u0026\u0026window._4d.user.sg\u0026\u0026fbq(\"trackCustom\",\"Spire-Studio-Segment\",{code:window._4d.user.allSegs.join(\",\")});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"da17f2f6-35e0-46e3-b2ec-3f325753384d\",{user_email:\"__INSERT_USER_EMAIL__\"});snaptr(\"track\",\"da17f2f6-35e0-46e3-b2ec-3f325753384d\",\"PAGE_VIEW\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1187698});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1187698\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1187698\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction addPixel(a,b){var c=new Image;c.src=\"https:\/\/pixel.tapad.com\/idsync\/ex\/receive?partner_id\\x3d\"+a+\"\\x26partner_device_id\\x3d\"+b}addPixel(\"ADB\",",["escape",["macro",200],8,16],");addPixel(\"648\",",["escape",["macro",30],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"https:\/\/cdn.cookielaw.org\/scripttemplates\/otSDKStub.js\" type=\"text\/javascript\" charset=\"UTF-8\" data-domain-script=\"b10882a1-8446-4e7d-bfb2-ce2c770ad910\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Efunction OptanonWrapper(){if(document){var a=document.getElementById(\"ot-sdk-btn\");a\u0026\u0026a.classList.add(\"ot-sdk-btn--visible\")}window.dataLayer.push({event:\"OneTrustGroupsUpdated\"});window.cnBus\u0026\u0026window.cnBus.emit\u0026\u0026window.cnBus.emit(\"onetrust.OneTrustGroupsUpdated\")};\u003C\/script\u003E\n\n\n\u003Cscript\u003E(function(){var a=document.createElement(\"script\");a.setAttribute(\"src\",\"https:\/\/cdn.cookielaw.org\/opt-out\/otCCPAiab.js\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"charset\",\"UTF-8\");a.setAttribute(\"ccpa-opt-out-ids\",\"C0004\",\"C0005\");a.setAttribute(\"ccpa-opt-out-geo\",\"ca\");a.setAttribute(\"ccpa-opt-out-lspa\",\"false\");document.body.appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){window.googletag.pubads().addEventListener(\"slotRenderEnded\",function(a){if(!a.isEmpty){var b=a.advertiserId||\"programmatic\",c=a.campaignId||\"programmatic\";a=a.lineItemId||\"programmatic\";var d=new Image;d.src=\"https:\/\/pixel.quantserve.com\/pixel\/p-Jjy-Cyr1NZGRz.gif?labels\\x3d_campaign.media.Advertiser%20ID.\"+b+\".Campaign%20ID.\"+c+\".Line%20Item%20ID.\"+a}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__reach_config={pid:\"5317998ee79548395a000004\",url:\"https:\/\/",["escape",["macro",97],7],["escape",["macro",19],7],"\",date:\"",["escape",["macro",41],7],"\",article_id:",["escape",["macro",35],8,16],",tags:[\"sponsored::hpe\",\"sponsored\"],ignore_errors:!1};(function(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/d8rk54i4mohrb.cloudfront.net\/js\/reach.js\";(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:1632543,hjsv:6};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"https:\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"228464857488266\");fbq(\"trackCustom\",\"RetailerLinkClick\",{retailer:",["escape",["macro",201],8,16],",\"click type\":\"buy button\",brand:\"Ars Technica\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":342
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"amzn-assoc-ad-e6160dfa-32a7-4b0e-9675-d18902339f1e\"\u003E\u003C\/div\u003E\u003Cscript async data-gtmsrc=\"https:\/\/z-na.associates-amazon.com\/onetag\/v2?MarketPlace=US\u0026amp;instanceId=e6160dfa-32a7-4b0e-9675-d18902339f1e\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":343
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",99,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var userId=_aam_dataLayer.user.amg_userId;userId\u0026\u0026visitor.setCustomerIDs({dsamg:{id:userId,authState:1}})}catch(a){console.error(\"HTML - AAM ID Sync\",a)}",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - AAM ID Sync\",window.visitor);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!=typeof _aam_dataLayer\u0026\u0026(dilInstance.api.signals({c_document_referrer:document.referrer}),_aam_dataLayer.hasOwnProperty(\"content\")\u0026\u0026(dilInstance.api.signals(_aam_dataLayer.content,\"c_content_\"),",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - All - AAM DataLayer - Content\",_aam_dataLayer.content,Date.now())),_aam_dataLayer.hasOwnProperty(\"document\")\u0026\u0026(dilInstance.api.signals(_aam_dataLayer.document,\"c_document_\"),",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - All - AAM DataLayer - Document\",_aam_dataLayer.document,\nDate.now())),_aam_dataLayer.hasOwnProperty(\"marketing\")\u0026\u0026(dilInstance.api.signals(_aam_dataLayer.marketing,\"c_marketing_\"),",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - All - AAM DataLayer - marketing\",_aam_dataLayer.marketing,Date.now())),_aam_dataLayer.hasOwnProperty(\"page\")\u0026\u0026(dilInstance.api.signals(_aam_dataLayer.page,\"c_page_\"),",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - All - AAM DataLayer - page\",_aam_dataLayer.page,Date.now())),_aam_dataLayer.hasOwnProperty(\"search\")\u0026\u0026(dilInstance.api.signals(_aam_dataLayer.search,\n\"c_search_\"),",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - All - AAM DataLayer - search\",_aam_dataLayer.search,Date.now())));window._aam_spa?dilInstance.api.submit():window._aam_spa=!0;\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - 1.3 - AAM CUSTOM DIL - start\",Date.now());try{var dilInstance=DIL.create({partner:\"condenast\",uuidCookie:{name:\"aam_uuid\",days:30},visitorService:{namespace:\"F7093025512D2B690A490D44@AdobeOrg\"}})}catch(a){",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - 1.3 - AAM CUSTOM DIL - ERROR\",a,Date.now())}",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - 1.3 - AAM CUSTOM DIL - dilInstance:\",dilInstance,Date.now());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",100,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(u){function l(a){if(v[a])return v[a].exports;var b=v[a]={i:a,l:!1,exports:{}};return u[a].call(b.exports,b,b.exports,l),b.l=!0,b.exports}var v={};l.m=u;l.c=v;l.d=function(a,b,d){l.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:d})};l.r=function(a){\"undefined\"!=typeof Symbol\u0026\u0026Symbol.toStringTag\u0026\u0026Object.defineProperty(a,Symbol.toStringTag,{value:\"Module\"});Object.defineProperty(a,\"__esModule\",{value:!0})};l.t=function(a,b){if((1\u0026b\u0026\u0026(a=l(a)),8\u0026b)||4\u0026b\u0026\u0026\"object\"==typeof a\u0026\u0026a\u0026\u0026a.__esModule)return a;\nvar d=Object.create(null);if(l.r(d),Object.defineProperty(d,\"default\",{enumerable:!0,value:a}),2\u0026b\u0026\u0026\"string\"!=typeof a)for(var c in a)l.d(d,c,function(b){return a[b]}.bind(null,c));return d};l.n=function(a){var b=a\u0026\u0026a.__esModule?function(){return a[\"default\"]}:function(){return a};return l.d(b,\"a\",b),b};l.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};l.p=\"\";l(l.s=0)}([function(u,l,v){v.r(l);l=function(a,b,d){var c=\"\";b=b||\"Error caught in DIL module\/submodule: \";return a===Object(a)?\nc=b+(a.message||\"err has no message\"):(c=b+\"err is not a valid object\",a={}),a.message=c,d instanceof DIL\u0026\u0026(a.partner=d.api.getPartner()),DIL.errorModule.handleError(a),this.errorMessage=c,c};u={submitUniversalAnalytics:function(a,b,d){try{var c,g,e=a.getAll()[0],h=e[d||\"b\"].data.keys;a={};var k=0;for(c=h.length;k\u003Cc;k++){var m=h[k];void 0===(g=e.get(m))||\"function\"==typeof g||g===Object(g)||\/^_\/.test(m)||\/^\u0026\/.test(m)||(a[m]=g)}return b.api.signals(a,\"c_\").submit(),a}catch(z){return\"Caught error with message: \"+\nz.message}},dil:null,arr:null,tv:null,errorMessage:\"\",defaultTrackVars:[\"_setAccount\",\"_setCustomVar\",\"_addItem\",\"_addTrans\",\"_trackSocial\"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:l,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage=\"\";this.signals={};this.hasSignals=!1;var c={name:\"DIL GA Module Error\"},g=\"\";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(g=\"dilInstance is not a valid instance of DIL\",c.message=g,DIL.errorModule.handleError(c));\na instanceof Array\u0026\u0026a.length?this.arr=a:(g=\"gaArray is not an array or is empty\",c.message=g,DIL.errorModule.handleError(c));this.tv=this.constructTrackVars(d);this.errorMessage=g}catch(e){this.handle(e,\"DIL.modules.GA.init() caught error with message \",this.dil)}finally{return this}},constructTrackVars:function(a){var b,d,c,g,e=[];if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){var h={};var k=0;for(d=(g=this.defaultTrackVars).length;k\u003Cd;k++)h[g[k]]=!0;this.defaultTrackVarsObj=h}else h=\nthis.defaultTrackVarsObj;if(a===Object(a)){if((b=a.names)instanceof Array\u0026\u0026(d=b.length))for(k=0;k\u003Cd;k++)\"string\"==typeof(c=b[k])\u0026\u0026c.length\u0026\u0026c in h\u0026\u0026e.push(c);if(e.length)return e}return this.defaultTrackVars},constructGAObj:function(a){var b,d,c,g={},e=a instanceof Array?a:this.arr;a=0;for(b=e.length;a\u003Cb;a++)if((d=e[a])instanceof Array\u0026\u0026d.length){var h=d=[],k=e[a];h instanceof Array\u0026\u0026k instanceof Array\u0026\u0026Array.prototype.push.apply(h,k);\"string\"==typeof(c=d.shift())\u0026\u0026c.length\u0026\u0026(g[c]instanceof Array||\n(g[c]=[]),g[c].push(d))}return g},addToSignals:function(a,b){return\"string\"==typeof a\u0026\u0026\"\"!==a\u0026\u0026null!=b\u0026\u0026\"\"!==b\u0026\u0026(this.signals[a]instanceof Array||(this.signals[a]=[]),this.signals[a].push(b),this.hasSignals=!0,!0)},constructSignals:function(){var a,b,d,c,g=this.constructGAObj(),e={_setAccount:function(a){this.addToSignals(\"c_accountId\",a)},_setCustomVar:function(a,b,c){\"string\"==typeof b\u0026\u0026b.length\u0026\u0026this.addToSignals(\"c_\"+b,c)},_addItem:function(a,b,c,d,g,e){this.addToSignals(\"c_itemOrderId\",a);this.addToSignals(\"c_itemSku\",\nb);this.addToSignals(\"c_itemName\",c);this.addToSignals(\"c_itemCategory\",d);this.addToSignals(\"c_itemPrice\",g);this.addToSignals(\"c_itemQuantity\",e)},_addTrans:function(a,b,c,d,g,e,h,k){this.addToSignals(\"c_transOrderId\",a);this.addToSignals(\"c_transAffiliation\",b);this.addToSignals(\"c_transTotal\",c);this.addToSignals(\"c_transTax\",d);this.addToSignals(\"c_transShipping\",g);this.addToSignals(\"c_transCity\",e);this.addToSignals(\"c_transState\",h);this.addToSignals(\"c_transCountry\",k)},_trackSocial:function(a,\nb,c,d){this.addToSignals(\"c_socialNetwork\",a);this.addToSignals(\"c_socialAction\",b);this.addToSignals(\"c_socialTarget\",c);this.addToSignals(\"c_socialPagePath\",d)}},h=this.tv;var k=0;for(a=h.length;k\u003Ca;k++)if(b=h[k],g.hasOwnProperty(b)\u0026\u0026e.hasOwnProperty(b)\u0026\u0026(c=g[b])instanceof Array){var m=0;for(d=c.length;m\u003Cd;m++)e[b].apply(this,c[m])}},submit:function(){try{return\"\"!==this.errorMessage?this.errorMessage:(this.constructSignals(),this.hasSignals?(this.dil.api.signals(this.signals).submit(),\"Signals sent: \"+\nthis.dil.helpers.convertObjectToKeyValuePairs(this.signals,\"\\x3d\",!0)+this.dil.log):\"No signals present\")}catch(a){return this.handle(a,\"DIL.modules.GA.submit() caught error with message \",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:\"\",handle:l,callback:null,v:function(){return!1},init:function(a,b,d){try{this.callback=this.dil=null,this.errorMessage=\"\",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(b)?b:\"aam_ga\",\nthis.delimiter=this.v(d)?d:\"|\"):this.handle({message:\"dilInstance is not a valid instance of DIL\"},\"DIL.modules.GA.Stuffer.init() error: \")}catch(c){this.handle(c,\"DIL.modules.GA.Stuffer.init() caught error with message \",this.dil)}finally{return this}},process:function(a){var b,d,c,g,e,h,k,m,z=!1,l=1;if(a===Object(a)\u0026\u0026(b=a.stuff)\u0026\u0026b instanceof Array\u0026\u0026(d=b.length))for(a=0;a\u003Cd;a++)if((c=b[a])\u0026\u0026c===Object(c)\u0026\u0026(g=c.cn,e=c.cv,g===this.cookieName\u0026\u0026this.v(e))){z=!0;break}if(z){b=e.split(this.delimiter);\nvoid 0===window._gaq\u0026\u0026(window._gaq=[]);c=window._gaq;a=0;for(d=b.length;a\u003Cd\u0026\u0026(k=(h=b[a].split(\"\\x3d\"))[0],m=h[1],this.v(k)\u0026\u0026this.v(m)\u0026\u0026c.push([\"_setCustomVar\",l++,k,m,1]),!(l\u003Ethis.LIMIT));a++);this.errorMessage=1\u003Cl?\"No errors - stuffing successful\":\"No valid values to stuff\"}else this.errorMessage=\"Cookie name and value not found in json\";if(\"function\"==typeof this.callback)return this.callback()},submit:function(){try{var a=this;return\"\"!==this.errorMessage?this.errorMessage:(this.dil.api.afterResult(function(b){a.process(b)}).submit(),\n\"DIL.modules.GA.Stuffer.submit() successful\")}catch(b){return this.handle(b,\"DIL.modules.GA.Stuffer.submit() caught error with message \",this.dil)}}}};l={dil:null,handle:l,init:function(a,b,d,c){try{var g=this,e={name:\"DIL Site Catalyst Module Error\"},h=function(a){return e.message=a,DIL.errorModule.handleError(e),a};return(this.options=c===Object(c)?c:{},this.dil=null,b instanceof DIL)?(this.dil=b,e.partner=b.api.getPartner(),a!==Object(a))?h(\"siteCatalystReportingSuite is not an object\"):(window.AppMeasurement_Module_DIL=\na.m_DIL=function(a){var b=\"function\"==typeof a.m_i?a.m_i(\"DIL\"):this;if(b!==Object(b))return h(\"m is not an object\");b.trackVars=g.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=this,d=\",\"+c.trackVars+\",\",e=c.s;var k=[];var m=[];var l={},v=!1;if(e!==Object(e))return h(\"Error in m._t function: s is not an object\");if(c.d){if(\"function\"==typeof e.foreachVar)e.foreachVar(function(a,b){void 0!==b\u0026\u0026(l[a]=b,v=!0)},c.trackVars);else{if(!(e.va_t instanceof Array))return h(\"Error in m._t function: s.va_t is not an array\");\nif(e.lightProfileID?(a=e.lightTrackVars)\u0026\u0026(a=\",\"+a+\",\"+e.vl_mr+\",\"):(e.pe||e.linkType)\u0026\u0026(a=e.linkTrackVars,e.pe\u0026\u0026e[b=e.pe.substring(0,1).toUpperCase()+e.pe.substring(1)]\u0026\u0026(a=e[b].trackVars),a\u0026\u0026(a=\",\"+a+\",\"+e.vl_l+\",\"+e.vl_l2+\",\")),a){b=0;for(k=a.split(\",\");b\u003Ck.length;b++)0\u003C=d.indexOf(\",\"+k[b]+\",\")\u0026\u0026m.push(k[b]);m.length\u0026\u0026(d=\",\"+m.join(\",\")+\",\")}k=0;for(m=e.va_t.length;k\u003Cm;k++)a=e.va_t[k],0\u003C=d.indexOf(\",\"+a+\",\")\u0026\u0026void 0!==e[a]\u0026\u0026null!==e[a]\u0026\u0026\"\"!==e[a]\u0026\u0026(l[a]=e[a],v=!0)}g.includeContextData(e,l).store_populated\u0026\u0026\n(v=!0);v\u0026\u0026c.d.api.signals(l,\"c_\").submit()}}},a.loadModule(\"DIL\"),a.DIL.d=b,e.message?e.message:\"DIL.modules.siteCatalyst.init() completed with no errors\"):h(\"dilInstance is not a valid instance of DIL\")}catch(k){return this.handle(k,\"DIL.modules.siteCatalyst.init() caught error with message \",this.dil)}},constructTrackVars:function(a){var b,d,c,g,e,h,k,m=[];if(a===Object(a)){if((b=a.names)instanceof Array\u0026\u0026(g=b.length))for(c=0;c\u003Cg;c++)\"string\"==typeof(e=b[c])\u0026\u0026e.length\u0026\u0026m.push(e);if((d=a.iteratedNames)instanceof\nArray\u0026\u0026(g=d.length))for(c=0;c\u003Cg;c++)if((h=d[c])===Object(h)\u0026\u0026(e=h.name,k=parseInt(h.maxIndex,10),\"string\"==typeof e\u0026\u0026e.length\u0026\u0026!isNaN(k)\u0026\u00260\u003C=k))for(a=0;a\u003C=k;a++)m.push(e+a);if(m.length)return m.join(\",\")}return this.constructTrackVars({names:\"pageName channel campaign products events pe pev1 pev2 pev3\".split(\" \"),iteratedNames:[{name:\"prop\",maxIndex:75},{name:\"eVar\",maxIndex:250}]})},includeContextData:function(a,b){var d={},c=!1;if(a.contextData===Object(a.contextData)){var g,e,h,k=a.contextData,\nm=this.options.replaceContextDataPeriodsWith,l=this.options.filterFromContextVariables,v={};if(\"string\"==typeof m\u0026\u0026m.length||(m=\"_\"),l instanceof Array){var D=0;for(g=l.length;D\u003Cg;D++){var u=l[D];this.dil.validators.isPopulatedString(u)\u0026\u0026(v[u]=!0)}}for(e in k)k.hasOwnProperty(e)\u0026\u0026!v[e]\u0026\u0026((h=k[e])||\"number\"==typeof h)\u0026\u0026(b[e=(\"contextData.\"+e).replace(\/\\.\/g,m)]=h,c=!0)}return d.store_populated=c,d}};\"function\"!=typeof window.DIL\u0026\u0026(window.DIL=function(a,b){var d,c,g=[];a!==Object(a)\u0026\u0026(a={});var e=a.partner;\nvar h=a.containerNSID;var k=a.mappings;var m=a.uuidCookie;var l=!0===a.enableErrorReporting;var v=a.visitorService;var u=a.declaredId;var J=!0===a.delayAllUntilWindowLoad;var K=void 0===a.secureDataCollection||!0===a.secureDataCollection;var y=\"boolean\"==typeof a.isCoopSafe?a.isCoopSafe:null;var L=!0===a.disableDefaultRequest;var G=a.afterResultForDefaultRequest;var M=a.visitorConstructor;var N=!0===a.disableCORS;var H=!0===a.ignoreHardDependencyOnVisitorAPI;l\u0026\u0026DIL.errorModule.activate();H\u0026\u0026g.push(\"Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.\");\nl=!0===window._dil_unit_tests;if((d=b)\u0026\u0026g.push(d+\"\"),!e||\"string\"!=typeof e)return u={name:\"error\",message:d=\"DIL partner is invalid or not specified in initConfig\",filename:\"dil.js\"},DIL.errorModule.handleError(u),Error(d);if(d=\"DIL containerNSID is invalid or not specified in initConfig, setting to default of 0\",(h||\"number\"==typeof h)\u0026\u0026(h=parseInt(h,10),!isNaN(h)\u0026\u00260\u003C=h\u0026\u0026(d=\"\")),d\u0026\u0026(h=0,g.push(d),d=\"\"),(c=DIL.getDil(e,h))instanceof DIL\u0026\u0026c.api.getPartner()===e\u0026\u0026c.api.getContainerNSID()===h)return c;\nif(!(this instanceof DIL))return new DIL(a,\"DIL was not instantiated with the 'new' operator, returning a valid instance with partner \\x3d \"+e+\" and containerNSID \\x3d \"+h);DIL.registerDil(this,e,h);var A={IS_HTTPS:K||\"https:\"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var f=7;4\u003Cf;f--){var a=document.createElement(\"div\");if(a.innerHTML=\"\\x3c!--[if IE \"+f+\"]\\x3e\\x3cspan\\x3e\\x3c\/span\\x3e\\x3c![endif]--\\x3e\",\na.getElementsByTagName(\"span\").length)return f}return null}()};A.IS_IE_LESS_THAN_10=\"number\"==typeof A.IE_VERSION\u0026\u002610\u003EA.IE_VERSION;var E={stuffed:{}},n={},r={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:h+\"\",d_rtbd:\"json\",d_jsonv:DIL.jsonVersion+\n\"\",d_dst:\"1\"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3E4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:\"no VisitorAPI\",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(f){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var a,b,c,e,d,g=this,k=v;if(\"function\"==typeof f\u0026\u0026\"function\"==typeof f.getInstance){if(k!==Object(k)||!(a=k.namespace)||\n\"string\"!=typeof a)throw this.releaseType=\"no namespace\",Error(\"DIL.create() needs the initConfig property `visitorService`:{namespace:'\\x3cExperience Cloud Org ID\\x3e'}\");if((b=f.getInstance(a,{idSyncContainerID:h}))===Object(b)\u0026\u0026b instanceof f\u0026\u0026\"function\"==typeof b.isAllowed\u0026\u0026\"function\"==typeof b.getMarketingCloudVisitorID\u0026\u0026\"function\"==typeof b.getCustomerIDs\u0026\u0026\"function\"==typeof b.isOptedOut\u0026\u0026\"function\"==typeof b.publishDestinations)return this.VisitorAPI=f,b.isAllowed()?(this.instance=b,c=function(f){\"VisitorAPI\"!==\ng.releaseType\u0026\u0026(g.mid=f,g.releaseType=\"VisitorAPI\",g.releaseRequests())},\"string\"==typeof(e=b.getMarketingCloudVisitorID(c))\u0026\u0026e.length?void c(e):void setTimeout(function(){\"VisitorAPI\"!==g.releaseType\u0026\u0026(g.releaseType=\"timeout\",g.releaseRequests())},this.getLoadTimeout())):(this.releaseType=\"VisitorAPI is not allowed to write cookies\",void this.releaseRequests());throw this.releaseType=\"invalid instance\",d=\"Invalid Visitor instance.\",b===Object(b)\u0026\u0026\"function\"!=typeof b.publishDestinations\u0026\u0026(d+=\" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3+ .\"),\nError(d);}throw this.noVisitorAPI=!0,Error(\"Visitor does not exist.\");}}catch(O){if(!H)throw Error(\"Error in processing Visitor API, which is a hard dependency for DIL v8.0+: \"+O.message);this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;r.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var f=t.isPopulatedString,a=this.getMarketingCloudVisitorID();return f(this.mid)\u0026\u0026this.mid===\na||(this.mid=a),f(this.mid)?\"d_mid\\x3d\"+this.mid+\"\\x26\":\"\"},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(f){if(f===Object(f)){var a,b,c=\"\",e=[],d=[];for(a in f)f.hasOwnProperty(a)\u0026\u0026(d[0]=a,(b=f[a])===Object(b)\u0026\u0026(d[1]=b.id||\"\",d[2]=b.authState||0,e.push(d),d=[]));if(a=e.length)for(f=0;f\u003Ca;f++)c+=\"\\x26d_cid_ic\\x3d\"+w.encodeAndBuildRequest(e[f],\"%01\");return c}return\"\"},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,\nthis.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;r.registerRequest()},getLoadTimeout:function(){var a=this.instance;if(a){if(\"function\"==typeof a.getLoadTimeout)return a.getLoadTimeout();if(void 0!==a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(a,\nb){var f=t.isPopulatedString,c=encodeURIComponent;if(a===Object(a)\u0026\u0026f(b)){var q=a.dpid,d=a.dpuuid,e=null;if(f(q)\u0026\u0026f(d))return e=c(q)+\"$\"+c(d),!0===this.declaredIdCombos[e]?\"setDeclaredId: combo exists for type '\"+b+\"'\":(this.declaredIdCombos[e]=!0,this.declaredId[b]={dpid:q,dpuuid:d},\"setDeclaredId: succeeded for type '\"+b+\"'\")}return\"setDeclaredId: failed for type '\"+b+\"'\"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,b=this.declaredId.init,c=encodeURIComponent,d=\"\";return null!==\na?d=\"\\x26d_dpid\\x3d\"+c(a.dpid)+\"\\x26d_dpuuid\\x3d\"+c(a.dpuuid):null!==b\u0026\u0026(d=\"\\x26d_dpid\\x3d\"+c(b.dpid)+\"\\x26d_dpuuid\\x3d\"+c(b.dpuuid)),d}},registerRequest:function(a){var f,b=this.firingQueue;a===Object(a)\u0026\u0026b.push(a);this.firing||!b.length||J\u0026\u0026!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack\u0026\u0026!this.adms.isOptedOut\u0026\u0026this.adms.isOptedOutCallbackCalled\u0026\u0026(this.adms.isOptedOutCallbackCalled=!1,(f=b.shift()).src=f.src.replace(\/demdex.net\\\/event\\?d_nsid=\/,\n\"demdex.net\/event?\"+this.adms.getMIDQueryString()+\"d_nsid\\x3d\"),t.isPopulatedString(f.corsPostData)\u0026\u0026(f.corsPostData=f.corsPostData.replace(\/^d_nsid=\/,this.adms.getMIDQueryString()+\"d_nsid\\x3d\")),x.fireRequest(f),this.firstRequestHasFired||\"script\"!==f.tag\u0026\u0026\"cors\"!==f.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(M||window.Visitor)},getCoopQueryString:function(){var a=\"\";return!0===y?a=\"\\x26d_coop_safe\\x3d1\":!1===y\u0026\u0026(a=\"\\x26d_coop_unsafe\\x3d1\"),a}},F={sendingMessages:!1,\nmessages:[],messagesPosted:[],messagesReceived:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],requestToProcess:function(a,b){function f(){d.jsonForComparison.push(a);d.jsonWaiting.push([a,b])}var c,d=this;if(a\u0026\u0026!t.isEmptyObject(a))if(c=JSON.stringify(a.dests||[]),this.jsonForComparison.length){var q,e,g=!1;var h=0;for(q=this.jsonForComparison.length;h\u003Cq;h++)if(e=this.jsonForComparison[h],c===JSON.stringify(e.dests||[])){g=!0;break}g?this.jsonDuplicates.push(a):f()}else f();\nthis.jsonWaiting.length\u0026\u0026(c=this.jsonWaiting.shift(),this.process(c[0],c[1]),this.requestToProcess());this.messages.length\u0026\u0026!this.sendingMessages\u0026\u0026this.sendMessages()},process:function(a,b){var f,c,d,e=encodeURIComponent;if(b===Object(b)\u0026\u0026w.encodeAndBuildRequest([\"\",b.dpid||\"\",b.dpuuid||\"\"],\",\"),(f=a.dests)\u0026\u0026f instanceof Array\u0026\u0026(c=f.length))for(d=0;d\u003Cc;d++){var q=f[d];q=[e(\"dests\"),e(q.id||\"\"),e(q.y||\"\"),e(q.c||\"\")];this.addMessage(q.join(\"|\"))}this.jsonProcessed.push(a)},addMessage:function(a){this.messages.push(a)},\nsendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,this.messages.length?(this.publishDestinations(this.messages),this.messages=[],this.sendingMessages=!1):this.sendingMessages=!1)},publishDestinations:function(a){var f=r.adms.instance;f\u0026\u0026\"function\"==typeof f.publishDestinations\u0026\u0026f.publishDestinations(e,a,function(a){g.push(\"visitor.publishDestinations() result: \"+(a.error||a.message))});Array.prototype.push.apply(this.messagesPosted,a)}},B={traits:function(a){return t.isValidPdata(a)\u0026\u0026\n(n.sids instanceof Array||(n.sids=[]),w.extendArray(n.sids,a)),this},pixels:function(a){return t.isValidPdata(a)\u0026\u0026(n.pdata instanceof Array||(n.pdata=[]),w.extendArray(n.pdata,a)),this},logs:function(a){return t.isValidLogdata(a)\u0026\u0026(n.logdata!==Object(n.logdata)\u0026\u0026(n.logdata={}),w.extendObject(n.logdata,a)),this},customQueryParams:function(a){return t.isEmptyObject(a)||w.extendObject(n,a,r.reservedKeys),this},signals:function(a,b){var f,c=a;if(!t.isEmptyObject(c)){if(b\u0026\u0026\"string\"==typeof b)for(f in c=\n{},a)a.hasOwnProperty(f)\u0026\u0026(c[b+f]=a[f]);w.extendObject(n,c,r.reservedKeys)}return this},declaredId:function(a){return r.declaredId.setDeclaredId(a,\"request\"),this},result:function(a){return\"function\"==typeof a\u0026\u0026(n.callback=a),this},afterResult:function(a){return\"function\"==typeof a\u0026\u0026(n.postCallbackFn=a),this},useImageRequest:function(){return n.useImageRequest=!0,this},clearData:function(){return n={},this},submit:function(){return x.submitRequest(n),n={},this},getPartner:function(){return e},getContainerNSID:function(){return h},\ngetEventLog:function(){return g},getState:function(){var b={},c={};return w.extendObject(b,r,{registerRequest:!0}),w.extendObject(c,F,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:a,pendingRequest:n,otherRequestInfo:b,destinationPublishingInfo:c,log:g}},idSync:function(){throw Error(\"Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance\");},aamIdSync:function(){throw Error(\"Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance\");\n},passData:function(a){return t.isEmptyObject(a)?\"Error: json is empty or not an object\":(x.defaultCallback(a),a)},getPlatformParams:function(){return r.platformParams},getEventCallConfigParams:function(){var a,b=r,c=b.modStatsParams,d=b.platformParams;if(!c){for(a in c={},d)d.hasOwnProperty(a)\u0026\u0026!b.nonModStatsParams[a]\u0026\u0026(c[a.replace(\/^d_\/,\"\")]=d[a]);!0===y?c.coop_safe=1:!1===y\u0026\u0026(c.coop_unsafe=1);b.modStatsParams=c}return c},setAsCoopSafe:function(){return y=!0,this},setAsCoopUnsafe:function(){return y=\n!1,this}},x={corsMetadata:function(){var a=\"none\";return\"undefined\"!=typeof XMLHttpRequest\u0026\u0026XMLHttpRequest===Object(XMLHttpRequest)\u0026\u0026(\"withCredentials\"in new XMLHttpRequest?a=\"XMLHttpRequest\":(new Function(\"\/*@cc_on return \/^10\/.test(@_jscript_version) @*\/\"))()\u0026\u0026(a=\"XMLHttpRequest\")),{corsType:a}}(),getCORSInstance:function(){return\"none\"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(a){return r.registerRequest(x.createQueuedRequest(a)),!0},createQueuedRequest:function(a){var b,\nc,f,d,e,g=a.callback,h=\"img\";if(!t.isEmptyObject(k))for(f in k)k.hasOwnProperty(f)\u0026\u0026null!=(d=k[f])\u0026\u0026\"\"!==d\u0026\u0026(!(f in a)||d in a||d in r.reservedKeys||null==(e=a[f])||\"\"===e||(a[d]=e));return t.isValidPdata(a.sids)||(a.sids=[]),t.isValidPdata(a.pdata)||(a.pdata=[]),t.isValidLogdata(a.logdata)||(a.logdata={}),a.logdataArray=w.convertObjectToKeyValuePairs(a.logdata,\"\\x3d\",!0),a.logdataArray.push(\"_ts\\x3d\"+(new Date).getTime()),\"function\"!=typeof g\u0026\u0026(g=this.defaultCallback),b=this.makeRequestSrcData(a),\n(c=this.getCORSInstance())\u0026\u0026!0!==a.useImageRequest\u0026\u0026(h=\"cors\"),{tag:h,src:b.src,corsSrc:b.corsSrc,callbackFn:g,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,requestData:a,corsInstance:c,corsPostData:b.corsPostData}},defaultCallback:function(a,b){var c,f,d,e,q,g,h,k,l;if((c=a.stuff)\u0026\u0026c instanceof Array\u0026\u0026(f=c.length))for(d=0;d\u003Cf;d++)(e=c[d])\u0026\u0026e===Object(e)\u0026\u0026(q=e.cn,g=e.cv,void 0!==(h=e.ttl)\u0026\u0026\"\"!==h||(h=Math.floor(w.getMaxCookieExpiresInMinutes()\/60\/24)),k=e.dmn||\".\"+document.domain.replace(\/^www\\.\/,\n\"\"),l=e.type,q\u0026\u0026(g||\"number\"==typeof g)\u0026\u0026(\"var\"!==l\u0026\u0026(h=parseInt(h,10))\u0026\u0026!isNaN(h)\u0026\u0026w.setCookie(q,g,1440*h,\"\/\",k,!1),E.stuffed[q]=g));var n,p;c=a.uuid;t.isPopulatedString(c)\u0026\u0026(t.isEmptyObject(m)||(\"string\"==typeof(n=m.path)\u0026\u0026n.length||(n=\"\/\"),p=parseInt(m.days,10),isNaN(p)\u0026\u0026(p=100),w.setCookie(m.name||\"aam_did\",c,1440*p,n,m.domain||\".\"+document.domain.replace(\/^www\\.\/,\"\"),!0===m.secure)));r.abortRequests||F.requestToProcess(a,b)},makeRequestSrcData:function(a){a.sids=t.removeEmptyArrayValues(a.sids||\n[]);a.pdata=t.removeEmptyArrayValues(a.pdata||[]);var b=r,c=b.platformParams,f=w.encodeAndBuildRequest(a.sids,\",\"),d=w.encodeAndBuildRequest(a.pdata,\",\"),g=(a.logdataArray||[]).join(\"\\x26\");delete a.logdataArray;var h,k,l,m=A.IS_HTTPS?\"https:\/\/\":\"http:\/\/\",n=b.declaredId.getDeclaredIdQueryString(),v=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):\"\",p,u,y,x=[];for(p in a)if(!(p in b.reservedKeys)\u0026\u0026a.hasOwnProperty(p))if(u=a[p],p=encodeURIComponent(p),u instanceof Array){var z=\n0;for(y=u.length;z\u003Cy;z++)x.push(p+\"\\x3d\"+encodeURIComponent(u[z]))}else x.push(p+\"\\x3d\"+encodeURIComponent(u));a=x.length?\"\\x26\"+x.join(\"\\x26\"):\"\";b=\"d_nsid\\x3d\"+c.d_nsid+b.getCoopQueryString()+n+v+(f.length?\"\\x26d_sid\\x3d\"+f:\"\")+(d.length?\"\\x26d_px\\x3d\"+d:\"\")+(g.length?\"\\x26d_ld\\x3d\"+encodeURIComponent(g):\"\");c=\"\\x26d_rtbd\\x3d\"+c.d_rtbd+\"\\x26d_jsonv\\x3d\"+c.d_jsonv+\"\\x26d_dst\\x3d\"+c.d_dst;return l=k=(h=m+e+\".demdex.net\/event\")+\"?\"+b+c+a,2048\u003Ck.length\u0026\u0026(k=k.substring(0,2048).substring(0,k.lastIndexOf(\"\\x26\"))),\n{corsSrc:h+\"?_ts\\x3d\"+(new Date).getTime(),src:k,originalSrc:l,corsPostData:b+c+a,isDeclaredIdCall:\"\"!==n}},fireRequest:function(a){if(\"img\"===a.tag)this.fireImage(a);else{var b=r.declaredId;b=b.declaredId.request||b.declaredId.init||{};b={dpid:b.dpid||\"\",dpuuid:b.dpuuid||\"\"};this.fireCORS(a,b)}},fireImage:function(a){var b,c,f=r;f.abortRequests||(f.firing=!0,b=new Image(0,0),f.sent.push(a),b.onload=function(){f.firing=!1;f.fired.push(a);f.num_of_img_responses++;f.registerRequest()},c=function(b){d=\n\"imgAbortOrErrorHandler received the event of type \"+b.type;g.push(d);f.abortRequests=!0;f.firing=!1;f.errored.push(a);f.num_of_img_errors++;f.registerRequest()},b.addEventListener(\"error\",c),b.addEventListener(\"abort\",c),b.src=a.src)},fireCORS:function(a,b){var c=this,f=r,h=this.corsMetadata.corsType,k=a.corsSrc,q=a.corsInstance,l=a.corsPostData,m=a.postCallbackFn,n=\"function\"==typeof m;if(!f.abortRequests\u0026\u0026!N){f.firing=!0;try{q.open(\"post\",k,!0),\"XMLHttpRequest\"===h\u0026\u0026(q.withCredentials=!0,q.setRequestHeader(\"Content-Type\",\n\"application\/x-www-form-urlencoded\"),q.onreadystatechange=function(){if(4===this.readyState\u0026\u0026200===this.status)a:{var h;try{if((h=JSON.parse(this.responseText))!==Object(h)){c.handleCORSError(a,b,\"Response is not JSON\");break a}}catch(p){c.handleCORSError(a,b,\"Error parsing response as JSON\");break a}try{var k=a.callbackFn;f.firing=!1;f.fired.push(a);f.num_of_cors_responses++;k(h,b);n\u0026\u0026m(h,b)}catch(p){p.message=\"DIL handleCORSResponse caught error with message \"+p.message;d=p.message;g.push(d);p.filename=\np.filename||\"dil.js\";p.partner=e;DIL.errorModule.handleError(p);try{k({error:p.name+\"|\"+p.message},b),n\u0026\u0026m({error:p.name+\"|\"+p.message},b)}catch(R){}}finally{f.registerRequest()}}}),q.onerror=function(){c.handleCORSError(a,b,\"onerror\")},q.ontimeout=function(){c.handleCORSError(a,b,\"ontimeout\")},q.send(l)}catch(Q){this.handleCORSError(a,b,\"try-catch\")}f.sent.push(a);f.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){r.num_of_cors_errors++;r.corsErrorSources.push(c)},handleRequestError:function(a,\nb){var c=r;g.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},t={isValidPdata:function(a){return!!(a instanceof Array\u0026\u0026this.removeEmptyArrayValues(a).length)},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){var b,c,d=a.length,e=[];for(c=0;c\u003Cd;c++)void 0!==(b=a[c])\u0026\u0026null!==b\u0026\u0026\"\"!==b\u0026\u0026e.push(b);return e},isPopulatedString:function(a){return\"string\"==\ntypeof a\u0026\u0026a.length}},w={convertObjectToKeyValuePairs:function(a,b,c){var d,e,f=[];for(d in b||(b=\"\\x3d\"),a)a.hasOwnProperty(d)\u0026\u0026void 0!==(e=a[d])\u0026\u0026null!==e\u0026\u0026\"\"!==e\u0026\u0026f.push(d+b+(c?encodeURIComponent(e):e));return f},encodeAndBuildRequest:function(a,b){return a.map(function(a){return encodeURIComponent(a)}).join(b)},getCookie:function(a){var b,c,d=a+\"\\x3d\",e=document.cookie.split(\";\");a=0;for(b=e.length;a\u003Cb;a++){for(c=e[a];\" \"===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(d))return decodeURIComponent(c.substring(d.length,\nc.length))}return null},setCookie:function(a,b,c,d,e,g){var f=new Date;c\u0026\u0026(c*=6E4);document.cookie=a+\"\\x3d\"+encodeURIComponent(b)+(c?\";expires\\x3d\"+(new Date(f.getTime()+c)).toUTCString():\"\")+(d?\";path\\x3d\"+d:\"\")+(e?\";domain\\x3d\"+e:\"\")+(g?\";secure\":\"\")},extendArray:function(a,b){return a instanceof Array\u0026\u0026b instanceof Array\u0026\u0026(Array.prototype.push.apply(a,b),!0)},extendObject:function(a,b,c){var d;if(a===Object(a)\u0026\u0026b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!t.isEmptyObject(c)\u0026\u0026d in c||(a[d]=\nb[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return A.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(a,b){var c;if(a===Object(a)\u0026\u0026\"function\"==typeof b)for(c in a)a.hasOwnProperty(c)\u0026\u0026\"function\"==typeof a[c]\u0026\u0026(a[c]=b)}};\"error\"===e\u0026\u00260===h\u0026\u0026window.addEventListener(\"load\",function(){DIL.windowLoaded=!0});var I=!1,C=function(){I||(I=!0,r.registerRequest(),P())},P=function(){setTimeout(function(){L||r.firstRequestHasFired||(\"function\"==typeof G?B.afterResult(G).submit():\nB.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};c=document;\"error\"!==e\u0026\u0026(DIL.windowLoaded?C():\"complete\"!==c.readyState\u0026\u0026\"loaded\"!==c.readyState?window.addEventListener(\"load\",function(){DIL.windowLoaded=!0;C()}):(DIL.windowLoaded=!0,C()));r.declaredId.setDeclaredId(u,\"init\");r.processVisitorAPI();A.IS_IE_LESS_THAN_10\u0026\u0026w.replaceMethodsWithFunction(B,function(){return this});this.api=B;this.getStuffedVariable=function(a){var b=E.stuffed[a];return b||\"number\"==typeof b||(b=w.getCookie(a))||\"number\"==\ntypeof b||(b=\"\"),b};this.validators=t;this.helpers=w;this.constants=A;this.log=g;l\u0026\u0026(this.pendingRequest=n,this.requestController=r,this.destinationPublishing=F,this.requestProcs=x,this.variables=E,this.callWindowLoadFunctions=C)},DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)\u0026\u0026(this[b]=a[b])},DIL.extendStaticPropertiesAndMethods({version:\"8.0\",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName(\"script\")},\nwindowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded=\"function\"==typeof a?!!a():\"boolean\"!=typeof a||a},create:function(a){try{return new DIL(a)}catch(b){throw Error(\"Error in attempt to create DIL instance with DIL.create(): \"+b.message);}},registerDil:function(a,b,d){b=b+\"$\"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;return\"string\"!=typeof a\u0026\u0026(a=\"\"),b||(b=0),(d=a+\"$\"+b)in this.dils?this.dils[d]:Error(\"The DIL instance with partner \\x3d \"+a+\" and containerNSID \\x3d \"+\nb+\" was not found\")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):\"\"}}),DIL.errorModule=function(){var a=DIL.create({partner:\"error\",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return\"DIL error module has not been activated\";\nc!==Object(c)\u0026\u0026(c={});var g=c.name?(c.name+\"\").toLowerCase():\"\",e=g in b?b[g]:b.noerrortypedefined,h=[];c={name:g,filename:c.filename?c.filename+\"\":\"\",partner:c.partner?c.partner+\"\":\"no_partner\",site:c.site?c.site+\"\":document.location.href,message:c.message?c.message+\"\":\"\"};return h.push(e),a.api.pixels(h).logs(c).useImageRequest().submit(),\"DIL error report sent\"},pixelMap:b}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,b,d){var c=\"\";b=b||\"Error caught in DIL module\/submodule: \";\nreturn a===Object(a)?c=b+(a.message||\"err has no message\"):(c=b+\"err is not a valid object\",a={}),a.message=c,d instanceof DIL\u0026\u0026(a.partner=d.api.getPartner()),DIL.errorModule.handleError(a),this.errorMessage=c,c}}});window.DIL\u0026\u0026DIL.tools\u0026\u0026DIL.modules\u0026\u0026(DIL.tools.getMetaTags=function(){var a,b,d,c,g={},e=document.getElementsByTagName(\"meta\");var h=0;for(b=arguments.length;h\u003Cb;h++)if(null!==(d=arguments[h]))for(a=0;a\u003Ce.length;a++)if((c=e[a]).name===d){g[d]=c.content;break}return g},DIL.tools.decomposeURI=\nfunction(a){var b=document.createElement(\"a\");return b.href=a||document.referrer,{hash:b.hash,host:b.host.split(\":\").shift(),hostname:b.hostname,href:b.href,pathname:b.pathname.replace(\/^\\\/\/,\"\"),protocol:b.protocol,search:b.search,uriParams:function(a,c){return b.search.replace(\/^(\\\/|\\?)?|\\\/$\/g,\"\").split(\"\\x26\").map(function(b){b=b.split(\"\\x3d\");a[b.shift()]=b.shift()}),a}({})}},DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil(\"error\"),c=DIL.tools.decomposeURI(a||document.referrer),g=\"\",\ne=\"\",h={queryParam:\"q\"},k=[b===Object(b)?b:{},{hostPattern:\/aol\\.\/},{hostPattern:\/ask\\.\/},{hostPattern:\/bing\\.\/},{hostPattern:\/google\\.\/},{hostPattern:\/yahoo\\.\/,queryParam:\"p\"}];return(g=k.filter(function(a){return!(!a.hasOwnProperty(\"hostPattern\")||!c.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(h,g),e=h.queryPattern?(g=(\"\"+c.search).match(h.queryPattern))?g[1]:\"\":c.uriParams[h.queryParam],decodeURIComponent(e||\"\").replace(\/\\+|%20\/g,\" \"))}:\n{valid:!1,name:\"\",keywords:\"\"}},DIL.modules.GA=u,DIL.modules.siteCatalyst=l)}]);",["escape",["macro",199],8,16],"\u0026\u0026console.log(\"~HTML - 1.2 - Adobe DIL v8.0 - DIL:\",DIL,Date.now());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"error-404"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"error-500"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"barrier-full|barrier-half"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"comment-posted"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"\\.(abr|docx?|epub|gif|jpb|jpg|js|mp3|pdf|png|pptx?|psd|txt|vcf|wav|xlsx?|zip)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_40($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkout-option"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product-impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promotion-click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promotion-impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"error"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"embedded-link-click|in-view-click-rec-content-inline|in-view-click-rec-content"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"link-subscription"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"login-attempt|login-fail|login-complete|logout-click|forgot-password"
    },{
      "function":"_sw",
      "arg0":["macro",95],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_31($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"newsletter-signup-attempt|newsletter-signup-failure|newsletter-signup-complete"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"javascript"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"mailto"
    },{
      "function":"_sw",
      "arg0":["macro",95],
      "arg1":"#"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"{{Page Hostname}}"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"itunes.apple|play.google",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_32($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",115],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"facebook|twitter|pinterest|plus.google",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"arstechnica.com"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"^$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_41($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_33($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"registration-start|registration-attempt|registration-fail|registration-complete"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"site-search"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"social-follow-start|social-share-start"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"data-layer-loaded"
    },{
      "function":"_eq",
      "arg0":["macro",124],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",139],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_39($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"paywall-loaded"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkout-step"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"transaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"remove-from-cart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"add-to-cart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product-detail-view"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product-click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subscription-appeal-click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subscription-appeal-impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",158],
      "arg1":",C0004,"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_cn",
      "arg0":["macro",159],
      "arg1":"C0004:1"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"privacy-mode-true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_135($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^BounceX"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"BounceX Submission"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"newsletter-signup-complete"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^recirc-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^account-"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gallery-ad-view"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"embedded-gallery-view"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^outbrain-"
    },{
      "function":"_eq",
      "arg0":["macro",174],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"@arstechnica.com|@condenast.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",175],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"itm_content=(more-great-stories|footer-recirc)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_219($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"buy-button-click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^hamburger-menu-"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"article-read-more"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newsletter-in-view"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"\\.ebay\\.|1password\\.|airbnb\\.|allswellhome\\.|amazon-adsystem|amazon\\.com|amzn|amzn\\.to|anrdoezrs\\.net|apple\\.|apple\\.sjv|apps\\.apple\\.|avantlink|avantlink\\.com|awin1\\.com|backcountry\\.|bestbuy\\.|bhphotovideo\\.|birch\\.|blue-apron\\.|boka\\.|briogeo-hair\\.|casper\\.|click\\.linksynergy\\.com|cna\\.st|cuyana\\.|dell\\.|devacurl\\.|dpbolvw\\.net|eaze-wellness\\.|fave\\.co|flamingo\\.|freshly\\.|glossier\\.|go\\.redirectingat\\.com|go\\.skimresources\\.com|gobble\\.|gopjn\\.com|goto\\.target|goto\\.walmart|helix-sleep\\.|helixsleep\\.|jayson-home\\.|jdoqocy\\.com|kqzyfj\\.com|lenovo\\.|levis\\.|linksynergy|modaoperandi\\.com|moosejaw\\.|nectar\\.|oneplus\\.|paulachoiceusca\\.|pjtra\\.com|pntrac\\.com|pntrs\\.com|prf\\.hn|purple-carrot\\.|samsung\\.|saos\\.prf\\.|shareasale\\.com|shop-links\\.co|skimresources|store\\.google\\.|succulentstudios\\.|sun-basket-meal-delivery-purchase\\.|sunday-scaries\\.|surlatable\\.|target\\.|theragun\\.|thinkgeek\\.|ticketmaster\\.|tuftandneedle\\.|verizonwireless\\.|vinyl-me-please\\.|vrai-and-oro\\.|walmart\\.|winc\\.|vrai\\.|disneyplus\\.|itunes\\.apple\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_300($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_324($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_325($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"tags-more-stories"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"(^$|((^|,)8819567_333($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^article-.*-click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^alert-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^datavisualization-"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"true",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"subscribe"
    },{
      "function":"_cn",
      "arg0":["macro",158],
      "arg1":",C0003,"
    },{
      "function":"_cn",
      "arg0":["macro",159],
      "arg1":"C0003:1"
    },{
      "function":"_re",
      "arg0":["macro",97],
      "arg1":"(stag|localhost|stg(\\d*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"video."
    },{
      "function":"_cn",
      "arg0":["macro",92],
      "arg1":"bounce-exchange=false"
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"subscribe."
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"_nat_",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"\\\/subscribe\\\/offerForm",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"link.arstechnica.com"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"^list.*(?:[2-9]|\\d\\d\\d*|end)$|^slide.*(?:[2-9]|\\d\\d\\d*|end)$|^page.*(?:[2-9]|\\d\\d\\d*|end)$|^fancyslide.*(?:[2-9]|\\d\\d\\d*|end)$"
    },{
      "function":"_cn",
      "arg0":["macro",158],
      "arg1":",C0005,"
    },{
      "function":"_cn",
      "arg0":["macro",159],
      "arg1":"C0005:1"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":"everything-as-a-service-is-coming-but-were-not-there-quite-yet|can-artificial-intelligence-make-enterprise-hybrid-storage-better",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",158],
      "arg1":",C0002,"
    },{
      "function":"_cn",
      "arg0":["macro",159],
      "arg1":"C0002:1"
    }],
  "rules":[
    [["if",0],["add",1]],
    [["if",1],["add",2]],
    [["if",2],["add",3]],
    [["if",3],["add",4]],
    [["if",4,5,6],["add",5],["block",25]],
    [["if",7],["add",6]],
    [["if",8],["add",7]],
    [["if",9],["add",8]],
    [["if",10],["add",9]],
    [["if",11],["add",10]],
    [["if",12],["add",11]],
    [["if",13],["add",12]],
    [["if",14],["add",13]],
    [["if",5,15,16],["add",14],["block",25]],
    [["if",17],["add",15]],
    [["if",5,22,23],["unless",18,19,20,21],["add",16],["block",25]],
    [["if",5,24,28],["unless",4,18,19,20,22,25,26,27],["add",17]],
    [["if",5,25,29],["unless",18,19,20,21],["add",18],["block",25]],
    [["if",30],["add",19]],
    [["if",31],["add",20]],
    [["if",32],["add",21]],
    [["if",33],["add",22,36,78,83,0,84,87]],
    [["if",34,35],["add",23]],
    [["if",35,36],["add",24]],
    [["if",5,37],["add",25]],
    [["if",38],["add",26]],
    [["if",39],["add",27]],
    [["if",40],["add",28]],
    [["if",41],["add",29]],
    [["if",42],["add",30]],
    [["if",43],["add",31]],
    [["if",44],["add",32]],
    [["if",45],["add",33]],
    [["if",46],["add",34]],
    [["if",47],["add",35,42,75,76,77,82,0,85,86,89,91,92,93,95,97,59,60,61,62,63,64,66,67,68,69,70,73,74]],
    [["if",48,49],["add",35,36,42,78,81,82,0,84,85,86,87,88,90,91,93]],
    [["if",51],["add",37]],
    [["if",52,53],["add",38]],
    [["if",54],["add",39]],
    [["if",55],["add",40]],
    [["if",56],["add",40]],
    [["if",57],["add",41]],
    [["if",58],["add",43]],
    [["if",59],["add",44]],
    [["if",60],["add",45]],
    [["if",61],["add",46]],
    [["if",5,62,66],["unless",63,64,65],["add",47]],
    [["if",67],["add",48,96]],
    [["if",68],["add",49]],
    [["if",69],["add",50]],
    [["if",70],["add",51]],
    [["if",5,71,72],["add",52]],
    [["if",73,74],["add",53]],
    [["if",73,75],["add",53]],
    [["if",76],["add",54]],
    [["if",5,65,77],["add",55]],
    [["if",78],["add",56]],
    [["if",79],["add",57]],
    [["if",80],["add",58]],
    [["if",81],["add",65,88]],
    [["if",47,82],["add",71,81,90],["block",77,97]],
    [["if",47,83],["add",72]],
    [["if",49,84],["add",76,77]],
    [["if",33,93],["add",79]],
    [["if",47,89],["add",80]],
    [["if",49,94],["add",89]],
    [["if",47,96],["add",94]],
    [["if",49,96],["add",94]],
    [["if",49,97],["add",95]],
    [["if",47],["unless",50],["block",35,42,81,82,0,85,86,90,91,93]],
    [["if",33],["unless",50],["block",36,78,0,84,87,94]],
    [["if",55],["unless",50],["block",40]],
    [["if",56],["unless",50],["block",40]],
    [["if",47],["unless",85],["block",76,77]],
    [["if",47,86],["block",77,82]],
    [["if",47,87],["block",77]],
    [["if",47,88],["block",77]],
    [["if",47,89],["unless",90],["block",77]],
    [["if",49,89],["unless",90],["block",77]],
    [["if",49,82],["block",77]],
    [["if",49,88],["block",77]],
    [["if",49,86],["block",77,82]],
    [["if",49,87],["block",77]],
    [["if",49,89,91],["block",77]],
    [["if",47,89,91],["block",77]],
    [["if",47,92],["block",77,92]],
    [["if",49],["unless",82],["block",81,90]],
    [["if",81],["unless",50],["block",88]],
    [["if",47],["unless",95],["block",89]],
    [["if",49],["unless",48],["block",94]],
    [["if",47],["unless",98],["block",95]],
    [["if",67],["unless",48],["block",96]]]
},
"runtime":[[50,"__qcm",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","createQueue"]],[52,"d",["c","_qevents"]],["d",[8,"qacct",[16,[15,"a"],"pcode"],"labels",[30,[16,[15,"a"],"labels"],""],"source","gtm"]],["b","https://secure.quantserve.com/quant.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__qcm":{"access_globals":{"keys":[{"key":"_qevents","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/secure.quantserve.com\/quant.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__qcm","__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ja={Of:!0},ka={};try{ka.__proto__=ja;ha=ka.Of;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.m={};this.i=!1;this.s={}};sa.prototype.get=function(a){return this.m["dust."+a]};sa.prototype.set=function(a,b){this.i||(a="dust."+a,this.s.hasOwnProperty(a)||(this.m[a]=b))};sa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.s.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={hh:function(f){c=f},se:function(){c&&a(c,1)},jh:function(f){d=f},Ca:function(f){d&&a(d,f)},Gh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Gg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},mg:a};e.onFnConsume=e.hh;e.consumeFn=e.se;e.onStorageConsume=e.jh;e.consumeStorage=e.Ca;e.setMax=e.Gh;e.getConsumed=e.Gg;e.reset=e.reset;e.consume=e.mg;return e};var xa=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.s=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.s["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ca=function(a){var b=new xa(a.F,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var Da=function(){},Ea=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Fa=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Fa(a)||
!Fa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==String(a).toLowerCase()?
!1:!!a},Pa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];D(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.F=a;this.M=b};pa($a,sa);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof qa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.$b=function(){return new h(ta(this))};$a.prototype.a=function(a,b){a.F.se();return this.M.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ga(d)?ab(e,d):d};c.prototype.s=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){sa.call(this)};pa(db,sa);db.prototype.$b=function(){return new h(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof h?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},I=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=I(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=I(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof db){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:va(),w=new xa(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new db;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var mb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new $a(a,function(){return function(g){var k=Ca(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=bb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof qa||c instanceof $a||c instanceof h||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=va();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.s=function(a,b){var c=Ca(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new qa("break"),xb=new qa("continue"),yb=function(a,b){return this.a(a)+this.a(b)},zb=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var g=a.get(b);if(g instanceof $a){var k=tb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ca(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Hb=function(){return xb},
Ib=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Lb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Mb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof h||b instanceof $a)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=bb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);ya(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof h||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Wb=function(a,b){return this.a(a)!==this.a(b)},Xb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.s(d);if(e instanceof qa)return e},Yb=function(a,b){return this.a(a)<this.a(b)},Zb=function(a,b){return this.a(a)<=
this.a(b)},$b=function(a,b){return this.a(a)%this.a(b)},ac=function(a,b){return this.a(a)*this.a(b)},bc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof h||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.s(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.s(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Xb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.s(a,b)},zc=function(a){function b(e,f){var g=d.a,k=String(f);mb.hasOwnProperty(e)&&sb(g,k||e,mb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,yb);c(1,zb);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Lb);c(47,Nb);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Wb);c(22,Xb);c(23,Yb);c(24,Zb);c(25,$b);c(26,ac);c(27,
bc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};Gc[7]=function(a){return String(a).replace(Nc,Pc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.ad(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.og(d,k))}catch(x){b.Ke&&b.Ke(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=nd(a[n],b,c);jd&&(m=m||r===jd.Jb);d.push(r)}return jd&&m?jd.rg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ga(a[1])&&"macro"===a[1][0]&&jd.Tg(a))return jd.oh(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={xe:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),$h:a("debug_mode_metadata"),xa:a("function"),qf:a("instance_name"),uf:a("live_only"),wf:a("malware_disabled"),xf:a("metadata"),ai:a("original_vendor_template_id"),Bf:a("once_per_event"),Pd:a("once_per_load"),Xd:a("setup_tags"),Zd:a("tag_id"),$d:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.a=c};pa(sd,Error);function td(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};pa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Fa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Dd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Ed(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Dd(e,b,d,g);Dd(f,b,d,g)}}}};var Jd=function(a){var b=Fd.B,c=this;this.i=new Cd;this.a={};var d={},e=Ed(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});D(a,function(f,g){var k={};D(g,function(l,m){var n=Gd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Gd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Ph=Oa('');Nd.zg=Oa('');var Od=Md,Pd=Nd.zg,Qd=Nd.Ph;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ie,je=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.bg&&(l["fix_"+m]=!0),l.ze=l.ze||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var u=k.slice(p.length);if(u.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,S:p.S,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var u={};p[2].replace(e,function(v,w,x,y,B){var z=x||y||B||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=z;u[w]=A.textContent||A.innerText||z});return{tagName:p[1],S:u,Cb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var u=r[p]();return u?(u.type=u.type||p,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.ze&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ie=function(){return this[this.length-1]};v.cd=function(A){var F=this.Ie();return F&&F.tagName&&F.tagName.toUpperCase()===A.toUpperCase()};v.ng=
function(A){for(var F=0,G;G=this[F];F++)if(G.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.Cb=p.test(A.tagName)||A.Cb);return A},x=t,y=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(A){var F=A.tagName;"TR"===F.toUpperCase()&&v.cd("TABLE")?(k="<TBODY>"+k,z()):l.ji&&u.test(F)&&v.ng(F)?v.cd(F)?y():(k="</"+A.tagName+">"+k,z()):A.Cb||v.push(A)},endTag:function(A){v.Ie()?l.Bg&&!v.cd(A.tagName)?y():v.pop():l.Bg&&(x(),z())}},z=function(){var A=k,F=w(x());k=A;if(F&&
B[F.type])B[F.type](F)};t=function(){z();return w(x())}}();return{append:function(p){k+=p},vh:t,ri:function(p){for(var u;(u=t())&&(!p[u.type]||!1!==p[u.type](u)););},clear:function(){var p=k;k="";return p},si:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.vi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ui=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.o=b;a.J=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.S){var t=m.S[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Cb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ie=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,p){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(p,r[u],u)}function d(r,t,p){for(var u in r)r.hasOwnProperty(u)&&t.call(p,u,r[u])}function e(r,
t){d(t,function(p,u){r[p]=u});return r}function f(r,t){r=r||{};d(t,function(p,u){b(r[p])||(r[p]=u)});return r}function g(r){try{return m.call(r)}catch(p){var t=[];c(r,function(u){t.push(u)});return t}}var k={Sf:a,Tf:a,Uf:a,Vf:a,cg:a,dg:function(r){return r},done:a,error:function(r){throw r;},yh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,u,v){var w="data-ps-"+u;if(2===arguments.length){var x=p.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,u){var v=p.ownerDocument;e(this,{root:p,options:u,Db:v.defaultView||v.parentWindow,Sa:v,nc:ie("",{bg:!0}),Pc:[p],nd:"",od:v.createElement(p.nodeName),zb:[],Ia:[]});r(this.od,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var p;!this.Tb&&this.Ia.length;)p=this.Ia.shift(),"function"===typeof p?this.ig(p):this.xd(p)};t.prototype.ig=function(p){var u={type:"function",value:p.name||p.toString()};this.jd(u);p.call(this.Db,this.Sa);this.Pe(u)};
t.prototype.xd=function(p){this.nc.append(p);for(var u,v=[],w,x;(u=this.nc.vh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Vh(v);w&&this.Lg(u);x&&this.Mg(u)};t.prototype.Vh=function(p){var u=this.fg(p);u.me&&(u.Zc=this.nd+u.me,this.nd+=u.sh,this.od.innerHTML=u.Zc,this.Sh())};t.prototype.fg=function(p){var u=this.Pc.length,v=[],w=[],x=[];c(p,function(y){v.push(y.text);if(y.S){if(!/^noscript$/i.test(y.tagName)){var B=
u++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==y.S.id&&"ps-style"!==y.S.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+B+(y.Cb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{wi:p,raw:v.join(""),me:w.join(""),sh:x.join("")}};t.prototype.Sh=function(){for(var p,u=[this.od];b(p=u.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Pc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Pc[w].appendChild(p)}u.unshift.apply(u,g(p.childNodes))}};t.prototype.Lg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.src=p.S.src||p.S.bi;p.src&&this.zb.length?this.Tb=p:this.jd(p);var v=this;this.Uh(p,function(){v.Pe(p)})};t.prototype.Mg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.type=p.S.type||p.S.TYPE||"text/css";this.Wh(p);u&&this.write()};t.prototype.Wh=function(p){var u=this.hg(p);this.Qg(u);p.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=p.content:
u.appendChild(this.Sa.createTextNode(p.content)))};t.prototype.hg=function(p){var u=this.Sa.createElement(p.tagName);u.setAttribute("type",p.type);d(p.S,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Qg=function(p){this.xd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(p,u)};t.prototype.jd=function(p){p.kh=this.Ia;this.Ia=[];this.zb.unshift(p)};t.prototype.Pe=function(p){p!==this.zb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.zb.shift(),this.write.apply(this,p.kh),!this.zb.length&&this.Tb&&(this.jd(this.Tb),this.Tb=null))};t.prototype.Uh=function(p,u){var v=this.gg(p),w=this.Ih(v),x=this.options.Sf;p.src&&(v.src=p.src,this.Dh(v,w?x:function(){u();x()}));try{this.Pg(v),p.src&&!w||u()}catch(y){this.options.error(y),u()}};t.prototype.gg=function(p){var u=this.Sa.createElement(p.tagName);d(p.S,function(v,w){u.setAttribute(v,w)});p.content&&(u.text=p.content);return u};t.prototype.Pg=function(p){this.xd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(p,u)};t.prototype.Dh=function(p,u){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),u())},onerror:function(){var x={message:"remote script failed "+p.src};v();w(x);u()}})};t.prototype.Ih=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.yh&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),x;w&&(x=w[w.length-1],x.Tf(),w.stream=t.apply(null,w),x.Uf())}function t(w,x,y){function B(G){G=y.dg(G);v.write(G);y.Vf(G)}v=new n(w,y);v.id=p++;v.name=y.name||v.id;var z=w.ownerDocument,A={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return B(g(arguments).join(""))},writeln:function(){return B(g(arguments).join("")+"\n")}});var F=v.Db.onerror||a;v.Db.onerror=function(G,L,T){y.error({mi:G+
" - "+L+":"+T});F.apply(v.Db,arguments)};v.write(x,function(){e(z,A);v.Db.onerror=F;y.done();v=null;r()});return v}var p=0,u=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.li?w[0]:w;var B=[w,x,y];w.nh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};y.cg(B);u.push(B);v||r();return w.nh},{streams:{},oi:u,ei:n})}();je=l.postscribe}})();function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ea(e)?c.set(d,me(a+"_"+d,e)):(Fa(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){H(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){H(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){H(this.getName(),["message:?string"],arguments);};var ye=function(a,b){H(this.getName(),["min:!number","max:!number"],arguments);return Ia(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.ag.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-NLXNPCQ');a.set("version",'184');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof h?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Ee=function(a){return Na(lb(a,this.i))};var Fe=function(a){return Number(lb(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;H(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{Hg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hh:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){H(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ea(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var E=window,J=document,Me=navigator,Ne=J.currentScript&&J.currentScript.src,Oe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=J.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=J.getElementsByTagName("script")[0]||J.body||J.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||
J.body||J.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){E.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=J.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?J.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(J.querySelectorAll)try{var ff=J.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==J.documentElement&&(ef=!0)}catch(a){}var bf=ef;var Fd={},R=null,vf=Math.random();Fd.B="GTM-NLXNPCQ";Fd.Nb="4f0";var wf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},xf="www.googletagmanager.com/gtm.js";var yf=xf,zf=null,Af=null,Bf=null,Cf="//www.googletagmanager.com/a?id="+Fd.B+"&cv=184",Df={},Ef={},Ff=function(){var a=R.sequence||0;R.sequence=a+1;return a};var Gf={},Hf=function(a,b){Gf[a]=Gf[a]||[];Gf[a][b]=!0},If=function(a){for(var b=[],c=Gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Jf=function(){return"&tc="+fd.filter(function(a){return a}).length},Mf=function(){Kf||(Kf=E.setTimeout(Lf,500))},Lf=function(){Kf&&(E.clearTimeout(Kf),Kf=void 0);void 0===Nf||Of[Nf]&&!Pf&&!Qf||(Rf[Nf]||Sf.Vg()||0>=Tf--?(Hf("GTM",1),Rf[Nf]=!0):(Sf.wh(),Te(Uf()),Of[Nf]=!0,Vf=Wf=Qf=Pf=""))},Uf=function(){var a=Nf;if(void 0===a)return"";var b=If("GTM"),c=If("TAGGING");return[Xf,Of[a]?"":"&es=1",Yf[a],b?"&u="+b:"",c?"&ut="+c:"",Jf(),Pf,Qf,Wf,Vf,"&z=0"].join("")},Zf=function(){return[Cf,"&v=3&t=t",
"&pid="+Ia(),"&rv="+Fd.Nb].join("")},$f="0.005000">Math.random(),Xf=Zf(),ag=function(){Xf=Zf()},Of={},Pf="",Qf="",Vf="",Wf="",Nf=void 0,Yf={},Rf={},Kf=void 0,Sf=function(a,b){var c=0,d=0;return{Vg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},wh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Tf=1E3,bg=function(a,b){if($f&&!Rf[a]&&Nf!==a){Lf();Nf=a;Vf=Pf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Yf[a]="&e="+c+"&eid="+a;Mf()}},cg=function(a,b,c){if($f&&
!Rf[a]&&b){a!==Nf&&(Lf(),Nf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pf=Pf?Pf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;Vf=Vf?Vf+"."+k:"&ti="+k;Mf();2022<=Uf().length&&Lf()}},dg=function(a,b,c){if($f&&!Rf[a]){a!==Nf&&(Lf(),Nf=a);var d=c+b;Qf=
Qf?Qf+"."+d:"&epr="+d;Mf();2022<=Uf().length&&Lf()}};var eg={},fg=new Ja,gg={},hg={},kg={name:"dataLayer",set:function(a,b){I(Ya(a,b),gg);ig()},get:function(a){return jg(a,2)},reset:function(){fg=new Ja;gg={};ig()}},jg=function(a,b){if(2!=b){var c=fg.get(a);if($f){var d=lg(a);c!==d&&Hf("GTM",5)}return c}return lg(a)},lg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:mg(b)},mg=function(a){for(var b=gg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ng=function(a,b){hg.hasOwnProperty(a)||(fg.set(a,b),I(Ya(a,b),gg),ig())},ig=function(a){D(hg,function(b,c){fg.set(b,c);I(Ya(b,void 0),gg);I(Ya(b,c),gg);a&&delete hg[b]})},og=function(a,b,c){eg[a]=eg[a]||{};var d=1!==c?lg(b):fg.get(b);"array"===hb(d)||"object"===hb(d)?eg[a][b]=I(d):eg[a][b]=d},pg=function(a,b){if(eg[a])return eg[a][b]},qg=function(a,b){eg[a]&&delete eg[a][b]};var S={wa:"_ee",ci:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};S.Ge=[S.fa,S.cb,S.Hb];S.Je=[S.ia,S.Ib,S.eb];var tg=/[A-Z]+/,ug=/\s/,vg=function(a){if(q(a)&&(a=Qa(a),!ug.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},xg=function(a){for(var b={},c=0;c<a.length;++c){var d=vg(a[c]);d&&(b[d.id]=d)}wg(b);var e=[];D(b,function(f,g){e.push(g)});return e};
function wg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yg=function(){var a=!1;return a};var V=function(a,b,c,d){return(2===zg()||d||"http:"!=E.location.protocol?a:b)+c},zg=function(){var a=Re(),b;if(1===a)a:{var c=yf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Ng=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Og={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sg=function(a){var b=jg("gtm.whitelist");b&&Hf("GTM",9);var c=b&&Wa(Pa(b),Og),d=jg("gtm.blacklist");d||(d=jg("tagTypeBlacklist"))&&Hf("GTM",3);
d?Hf("GTM",8):d=[];Rg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Hf("GTM",2);var e=d&&Wa(Pa(d),Pg),f={};return function(g){var k=g&&g[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ef[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Hf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ka(e,l||[]);u&&Hf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ka(e,Qg));return f[k]=v}},Rg=function(){return Ng.test(E.location&&E.location.hostname)};var Tg={og:function(a,b){b[rd.Ed]&&"string"===typeof a&&(a=1==b[rd.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Gd)&&null===a&&(a=b[rd.Gd]);b.hasOwnProperty(rd.Id)&&void 0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Hd)&&!0===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Fd)&&!1===a&&(a=b[rd.Fd]);return a}};var Ug={active:!0,isWhitelisted:function(){return!0}},Vg=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Wg=function(){};var Xg=!1,Yg=0,Zg=[];function $g(a){if(!Xg){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xg=!0;for(var e=0;e<Zg.length;e++)O(Zg[e])}Zg.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function ah(){if(!Xg&&140>Yg){Yg++;try{J.documentElement.doScroll("left"),$g()}catch(a){E.setTimeout(ah,50)}}}var bh=function(a){Xg?a():Zg.push(a)};var ch={},eh={},fh=function(a,b,c,d){if(!eh[a]||wf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=I(d,e));e.id=c;e.status="timeout";return eh[a].tags.push(e)-1},gh=function(a,b,c,d){if(eh[a]){var e=eh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hh(a){for(var b=ch[a]||[],c=0;c<b.length;c++)b[c]();ch[a]={push:function(d){d(Fd.B,eh[a])}}}
var kh=function(a,b,c){eh[a]={tags:[]};Ea(b)&&ih(a,b);c&&E.setTimeout(function(){return hh(a)},Number(c));return jh(a)},ih=function(a,b){ch[a]=ch[a]||[];ch[a].push(Ta(function(){return O(function(){b(Fd.B,eh[a])})}))};function jh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&hh(a)})},Zf:function(){d=!0;b>=c&&hh(a)}}};var lh=function(){function a(d){return!Fa(d)||0>d?0:d}if(!R._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Fa(kg.get("gtm.start"))?kg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Af-b)}}};var ph={},qh=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},rh=!1;
var sh=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||Hf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}lh();return E[b]},th=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vh=function(a){},uh=function(){return E.GoogleAnalyticsObject||"ga"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Jh=function(){return!1},Kh=function(){var a={};return function(b,c,d){}};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var g=nd(e[rd.Xd],c,[]);if(g&&g.length){var k=g[0];f=Lh(k.index,{D:f,C:1===k.xe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.wf])k();else{var w=od(f,c,[]),x=fh(c.id,String(f[rd.xa]),Number(f[rd.Zd]),w[rd.xf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"5");gh(c.id,x,"success",A);g()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"6");gh(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;cg(c.id,f,"1");var B=function(){var A=Ra()-z;cg(c.id,f,"7");gh(c.id,x,"exception",A);y||(y=!0,k())};var z=Ra();try{md(w,c)}catch(A){B(A)}}}var f=fd[a],g=b.D,k=b.C,l=b.terminate;if(c.ad(f))return null;var m=nd(f[rd.$d],c,[]);if(m&&m.length){var n=m[0],r=Lh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.xe?l:r}if(f[rd.Pd]||f[rd.Bf]){var t=f[rd.Pd]?gd:c.Jh,p=g,u=k;if(!t[a]){e=Ta(e);var v=Nh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{D:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.xb[d]){var e=fd[d];var f=b.add();try{var g=Lh(d,{D:f,C:f,terminate:f},a,d);g?c.push({$e:d,Ue:pd(e),Xb:g}):(Rh(d,a),f())}catch(l){f()}}b.Zf();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Sh(a,b){var c,d=b.Ue,e=a.Ue;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.$e,k=b.$e;f=g>k?1:g<k?-1:0}return f}
function Rh(a,b){if(!$f)return;var c=function(d){var e=b.ad(fd[d])?"3":"4",f=nd(fd[d][rd.Xd],b,[]);f&&f.length&&c(f[0].index);cg(b.id,fd[d],e);var g=nd(fd[d][rd.$d],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}bg(a,b);var f=kh(a,d,e);og(a,"event",1);og(a,"ecommerce",1);og(a,"gtm");var g={id:a,name:b,ad:Sg(c),xb:[],Jh:[],Ke:function(){Hf("GTM",6)}};g.xb=Bd(g);var k=Th(g,f);"gtm.js"!==b&&"gtm.sync"!==b||vh(Fd.B);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=fd[l];if(m&&!wf[String(m[rd.xa])])return!0}return!1};var Wh=[];function Xh(){var a=Oe("google_tag_data",{});a.ics||(a.ics={entries:{},set:Yh,update:Zh,addListener:$h,notifyListeners:ai,active:!1});return a.ics}function Yh(a,b,c,d,e){var f=Xh();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function Zh(a,b){var c=Xh();c.active=!0;if(void 0!=b){var d=bi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(bi(a)!==d)for(var f=0;f<Wh.length;++f){var g=Wh[f];Ga(g.qe)&&-1!==g.qe.indexOf(a)&&(g.Te=!0)}}}function $h(a,b){Wh.push({qe:a,Cg:b})}function ai(){for(var a=0;a<Wh.length;++a){var b=Wh[a];if(b.Te){b.Te=!1;try{b.Cg.call()}catch(c){}}}}
var bi=function(a){var b=Xh().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ci=function(){return Xh().active},di=function(a,b){Xh().addListener(a,b)},ei=function(a,b){if(!1===bi(b)){var c=!1;di([b],function(){!c&&bi(b)&&(a(),c=!0)})}};var fi=[S.o,S.N],gi=function(a){for(var b=a.region,c=Ga(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<fi.length;e++){var f=fi[e],g=a[fi[e]],k=c[d];Xh().set(f,g,k,"DE","DE-BW")}},hi=function(a){for(var b=0;b<fi.length;b++){var c=fi[b],d=a[fi[b]];Xh().update(c,d)}Xh().notifyListeners()},ii=function(a){var b=bi(a);return void 0!=b?b:!0},ji=function(){for(var a=[],b=0;b<fi.length;b++){var c=bi(fi[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};var li=/^https?:\/\/www\.googletagmanager\.com/;function mi(){var a;return a}function oi(a,b){}
function ni(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function pi(){var a=!1;return a};var qi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.pe=void 0},ri=function(a){var b=new qi;b.eventModel=a;return b},si=function(a,b){a.targetConfig=b;return a},ti=function(a,b){a.containerConfig=b;return a},ui=function(a,b){a.a=b;return a},vi=function(a,b){a.globalConfig=b;return a},wi=function(a,b){a.D=b;return a},xi=function(a,b){a.C=b;return a};
qi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var yi=function(a){function b(e){D(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];D(c,function(e){d.push(e)});return d};function zi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ai={},Bi=function(a){return void 0==Ai[a]?!1:Ai[a]};var Di=function(a,b,c,d){return Ci(d)?zi(a,String(b||document.cookie),c):[]},Gi=function(a,b,c,d,e){if(Ci(e)){var f=Ei(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Fi(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Fi(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Hi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Di(b,f,!1,d).indexOf(c)}
var Li=function(a,b,c,d){function e(w,x,y){if(null==y)return delete k[x],w;k[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete k[x],w;k[x]=!0;return w+"; "+x}if(!Ci(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ii(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.dh);g=e(g,"samesite",
c.Ah);c.Eh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Ji(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Ki(u,c.path)&&Hi(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Ki(m,c.path)?!1:Hi(g,a,b,c.Ea)},Mi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Li(a,b,c)};
function Fi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ei(a,b,c){for(var d=[],e=Di(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ii=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ni=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Oi=/(^|\.)doubleclick\.net$/i,Ki=function(a,b){return Oi.test(document.location.hostname)||"/"===b&&Ni.test(a)},Ji=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Oi.test(e)||Ni.test(e)||a.push("none");
return a},Ci=function(a){if(!Bi("gtag_cs_api")||!a||!ci())return!0;var b=bi(a);return null==b?!0:!!b};var Pi=function(){for(var a=Me.userAgent+(J.cookie||"")+(J.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Si=function(a,b,c,d,e){var f=Qi(b);return Gi(a,f,Ri(c),d,e)},Ti=function(a,b,c,d){var e=""+Qi(c),f=Ri(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Qi=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ri=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ui(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Vi(){for(var a=Wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wi,Yi;function Zi(a){Wi=Wi||Xi();Yi=Yi||Vi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Wi[l],Wi[m],Wi[n],Wi[r])}return b.join("")}
function $i(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Yi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Wi=Wi||Xi();Yi=Yi||Vi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var aj;var ej=function(){var a=bj,b=cj,c=dj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ue(J,"mousedown",d);Ue(J,"keyup",d);Ue(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},fj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};dj().decorators.push(f)},gj=function(a,b,c){for(var d=dj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==J.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ua(e,g.callback())}}return e},dj=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var hj=/(.*?)\*(.*?)\*(.*)/,ij=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,jj=/^(?:www\.|m\.|amp\.)+/,kj=/([^?#]+)(\?[^#]*)?(#.*)?/;function lj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var nj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zi(String(d))))}var e=b.join("*");return["1",mj(e),e].join("*")},mj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=aj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}aj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^aj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},pj=function(){return function(a){var b=Eh(E.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=oj(d)||{};var e=Ch(b,"fragment").match(lj("_gl"));a.fragment=oj(e&&e[3]||"")||{}}},qj=function(){var a=pj(),b=dj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},oj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=hj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===mj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=$i(t[p+1]);return r}}}}catch(u){}};
function rj(a,b,c,d){function e(n){var r=n,t=lj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=kj.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function sj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=gj(b,1,c),e=gj(b,2,c),f=gj(b,3,c);if(Va(d)){var g=nj(d);c?tj("_gl",g,a):uj("_gl",g,a,!1)}if(!c&&Va(e)){var k=nj(e);uj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){uj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){tj(m,n,r);break a}}"string"==typeof r&&rj(m,n,r,void 0)}}
function uj(a,b,c,d){if(c.href){var e=rj(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function tj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=rj(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var bj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||sj(e,e.hostname)}}catch(g){}},cj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");sj(a,b)}}catch(c){}},vj=function(a,b,c,d){ej();fj(a,b,"fragment"===c?2:1,!!d,!1)},wj=function(a){ej();fj(a,[E.location.hostname],3,!0,!0)},xj=function(){var a=J.location.hostname,b=ij.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(jj,""),l=e.replace(jj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yj=function(a,b){return!1===a?!1:a||b||xj()};var zj=/^\w+$/,Aj=/^[\w-]+$/,Bj=/^~?[\w-]+$/,Cj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Dj=function(){if(!Bi("gtag_cs_api")||!ci())return!0;var a=bi("ad_storage");return null==a?!0:!!a},Ej=function(a){Dj()?a():ei(a,"ad_storage")};function Fj(a){return a&&"string"==typeof a&&a.match(zj)?a:"_gcl"}
var Hj=function(){var a=Eh(E.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Gj(b,c,d)},Gj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Aj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Bi("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Jj=function(a){var b=Hj();Ej(function(){return Ij(b,a)})};
function Ij(a,b,c){function d(m,n){var r=Kj(m,e);r&&(Mi(r,n,f),g=!0)}b=b||{};var e=Fj(b.prefix);c=c||Ra();var f=Ui(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.xi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Mj=function(a,b){var c=qj();Ej(function(){for(var d=Fj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Cj[f]){var g=Kj(f,d),k=c[g];if(k){var l=Math.min(Lj(k),Ra()),m;b:{for(var n=l,r=Di(g,J.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Lj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Ui(b,l,!0);p.Ea="ad_storage";Mi(g,k,p)}}}}Ij(Gj(c.gclid,c.gclsrc),b)})},Kj=function(a,b){var c=Cj[a];if(void 0!==c)return b+c},Lj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Nj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Oj=function(a,b,c,d,e){if(Ga(b)){var f=Fj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Kj(a[l],f);if(m){var n=Di(m,J.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Ej(function(){vj(g,b,c,d)})}},Pj=function(a){return a.filter(function(b){return Bj.test(b)})},Qj=function(a,b){for(var c=Fj(b.prefix),d={},e=0;e<a.length;e++)Cj[a[e]]&&(d[a[e]]=Cj[a[e]]);Ej(function(){D(d,function(f,g){var k=Di(c+g,J.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Lj(l),
n={};n[f]=[Nj(l)];Ij(n,b,m)}})})},Rj=function(){var a=["","aw.ds"],b=Hj(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&wj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})},Sj=function(){var a;if(Dj()){for(var b=[],c=J.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({td:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].td]||(g[b[k].td]=[]),g[b[k].td].push({timestamp:l[1],
Eg:l[2]}))}a=g}else a={};return a};function Tj(){var a=!1;return a}
function Uj(a){function b(l){var m;R.reported_gclid||(R.reported_gclid={});m=R.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;t("gclid",p);t("gclsrc",e);var u="https://www.google.com/pagead/landing?"+r.join("&");$e(u)}}var c=Hj(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),g=Tj();if(f||g){var k=""+Pi();b();}};var Vj;if(3===Fd.Nb.length)Vj="g";else{var Wj="G";Vj=Wj}
var Xj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vj,OPT:"o"},Yj=function(a){var b=Fd.B.split("-"),c=b[0].toUpperCase(),d=Xj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Fd.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Fd.Nb+e};var ik=["1"],jk={},nk=function(a){var b=kk(a.prefix);jk[b]||lk(b,a.path,a.domain)||(mk(b,Pi(),a),lk(b,a.path,a.domain))};function mk(a,b,c){var d=Ti(b,"1",c.domain,c.path),e=Ui(c);e.Ea="ad_storage";Mi(a,d,e)}function lk(a,b,c){var d=Si(a,b,c,ik,"ad_storage");d&&(jk[a]=d);return d}function kk(a){return(a||"_gcl")+"_au"};var ok=/^\d+\.fls\.doubleclick\.net$/;function pk(a){ii("ad_storage")?a():ei(a,"ad_storage")}function qk(a){var b=Eh(E.location.href),c=Ch(b,"host",!1);if(c&&c.match(ok)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function rk(a,b){if("aw"==a||"dc"==a){var c=qk("gcl"+a);if(c)return c.split(".")}var d=Fj(b);if(ii("ad_storage")&&"_gcl"==d){var e;e=Hj()[a]||[];if(0<e.length)return e}var f=Kj(a,d),g;if(f){var k=[];if(J.cookie){var l=Di(f,J.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Nj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Pj(k)}else g=k}else g=k}else g=[];return g}
var sk=function(){var a=qk("gac");if(a)return decodeURIComponent(a);var b=Sj(),c=[];D(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Eg);f=Pj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},tk=function(a,b){var c=Hj().dc||[];pk(function(){nk(b);var d=jk[kk(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;$e(l);e=f[g]=!0}}null==a&&(a=
e);if(a&&d){var m=kk(b.prefix),n=jk[m];n&&mk(m,n,b)}})};var ol={},pl=["G","GP"];ol.bf="";var ql=ol.bf.split(",");function rl(){var a=R;return a.gcq=a.gcq||new sl}
var tl=function(a,b,c){rl().register(a,b,c)},ul=function(a,b,c,d){rl().push("event",[b,a],c,d)},vl=function(a,b){rl().push("config",[a],b)},wl={},xl=function(a){return!0},yl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},zl=function(a,b,c,d,e){this.type=a;this.m=b;this.Z=c||"";
this.a=d;this.i=e},sl=function(){this.i={};this.m={};this.a=[]},Al=function(a,b){var c=vg(b);return a.i[c.containerId]=a.i[c.containerId]||new yl},Bl=function(a,b){if(b){var c=vg(b);if(c&&1===Al(a,b).status&&xl(c.prefix)){Al(a,b).status=2;var d={};$f&&(d.timeoutId=E.setTimeout(function(){Hf("GTM",38);Mf()},3E3));a.push("require",[d],c.containerId);wl[c.containerId]=Ra();if(yg()){}else{var f=encodeURIComponent(c.containerId),g=("http:"!=E.location.protocol?"https:":"http:")+"//www.googletagmanager.com";Qe(g+"/gtag/js?id="+
f+"&l=dataLayer&cx=c")}}}},Cl=function(a,b,c,d){if(d.Z){var e=Al(a,d.Z),f=e.m;if(f){var g=I(c),k=I(e.targetConfig[d.Z]),l=I(e.containerConfig),m=I(e.i),n=I(a.m),r=jg("gtm.uniqueEventId"),t=vg(d.Z).prefix,p=xi(wi(vi(ui(ti(si(ri(g),k),l),m),n),function(){dg(r,t,"2");}),function(){dg(r,t,"3");});try{dg(r,t,"1");
f(d.Z,b,d.m,p)}catch(u){dg(r,t,"4");}}}};
sl.prototype.register=function(a,b,c){if(3!==Al(this,a).status){Al(this,a).m=b;Al(this,a).status=3;c&&(Al(this,a).i=c);var d=vg(a),e=wl[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=jg("gtm.uniqueEventId"),l=g,m=Ra()-f;if($f&&!Rf[k]){k!==Nf&&(Lf(),Nf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Wf=Wf?Wf+","+n:"&cl="+n}delete wl[d.containerId]}this.flush()}};
sl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Bl(this,c);this.a.push(new zl(a,e,c,b,d));d||this.flush()};
sl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Al(this,c.Z).status&&!a)return;$f&&E.clearTimeout(c.a[0].timeoutId);break;case "set":D(c.a[0],function(l,m){I(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[S.oc];delete d[S.oc];var f=Al(this,c.Z),g=vg(c.Z),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.Z]={});f.a&&e||Cl(this,S.H,d,c);f.a=!0;delete d[S.wa];k?I(d,f.containerConfig):
I(d,f.targetConfig[c.Z]);break;case "event":Cl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Dl=function(a,b){return!0};var El=function(a,b){var c;H(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=E,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(lb(arguments[l],this.i));c=kb((0,this.i.M)(f,e,k),this.i);return c};var Fl=function(a){};var Gl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=E,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return kb(b,this.i)};var Hl=function(a,b){var c=null;H(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ae(this,"access_globals","readwrite",a);Ae(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ea(g))return null;if(g)return kb(g,this.i);var k;g=function(){if(!Ea(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return kb(c,this.i)};var Il=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ea(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,
this.i)};var Jl=function(a){var b;return b};var Kl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a,b){var c;return c};var Nl=function(a){var b="";return b};var Ol=function(a){var b="";return b};var Pl=function(a,b){};var Ql={},Rl=function(a,b,c,d){H(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Fa(e)},g=function(){c instanceof $a&&c.Fa(e)};if(!d){Qe(a,f,g);return}var k=d;Ql[k]?(Ql[k].onSuccess.push(f),Ql[k].onFailure.push(g)):(Ql[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ql[k].onSuccess,m=0;m<l.length;m++)O(l[m]);l.push=function(n){O(n);
return 0}},g=function(){for(var l=Ql[k].onFailure,m=0;m<l.length;m++)O(l[m]);Ql[k]=null},Qe(a,f,g));};var Sl=function(){return!1},Tl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Ul=function(){};var Vl={},Wl={};Vl.getItem=function(a){var b=null;return b};Vl.setItem=function(a,b){};
Vl.removeItem=function(a){};Vl.clear=function(){};var Xl=function(a,b){var c=!1;return c};var Yl=function(a,b,c){};var Zl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var $l=function(a,b,c){H(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.i),!0;return!1};var am=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var bm=function(a,b,c){var d=this;};var cm=function(a){var b;return b};function dm(a){}
function em(a,b){var c;return kb(c,this.i)}function fm(){var a="";return a}
function gm(){var a="";return a}
var Dc=function(){var a=new Ke;yg()?(a.add("injectHiddenIframe",Da),a.add("injectScript",Da)):(a.add("injectHiddenIframe",Pl),a.add("injectScript",Rl));var b=Yl;a.add("addEventCallback",dm);a.add("aliasInWindow",Dl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",El);a.add("callLater",Fl);a.add("copyFromDataLayer",
em);a.add("copyFromWindow",Gl);a.add("createQueue",Il);a.add("createArgumentsQueue",Hl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",Kl);a.add("getQueryParameters",Ll);a.add("getReferrerQueryParameters",Ml);a.add("getReferrerUrl",Nl);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Ol);a.add("logToConsole",Ul);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Xl);a.add("readCharacterSet",fm);a.add("readTitle",gm);a.add("sendPixel",b);a.add("setCookie",Zl);a.add("setInWindow",$l);a.add("sha256",bm);a.add("TestHelper",Le());a.add("getContainerVersion",Be);a.add("toBase64",cm,!("btoa"in E)),a.add("fromBase64",
Jl,!("atob"in E));a.add("localStorage",Tl,!Sl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function hm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;im();bd=function(e,f,g){jm(f);var k=new db;D(f,function(p,u){k.set(p,kb(u))});Bc.a.a.s=xd();var l={ag:Ld(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Jh()){var m=Kh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.s=void 0;t instanceof qa&&
"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Xb(d)}}function jm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ea(b)&&(a.gtmOnSuccess=function(){O(b)});Ea(c)&&(a.gtmOnFailure=function(){O(c)})}function im(){var a=Bc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}
function km(a){void 0!==a&&D(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ef[e]=Ef[e]||[];Ef[e].push(b)}})};var lm=["GP","G"],mm="G".split(/,/);mm.push("GF");mm.push("HA");var nm=!1;nm=!0;var om=null,pm={},qm={},rm;function sm(a,b){var c={event:a};b&&(c.eventModel=I(b),b[S.Fc]&&(c.eventCallback=b[S.Fc]),b[S.Ib]&&(c.eventTimeout=b[S.Ib]));return c}
var ym={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=sm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=I(a[1]):3==a.length&&q(a[1])&&(b={},jb(a[2])||Ga(a[2])?b[a[1]]=I(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var zm={policy:!0};var Am=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Cm=function(a){var b=Bm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Dm=!1,Em=[];function Fm(){if(!Dm){Dm=!0;for(var a=0;a<Em.length;a++)O(Em[a])}}var Gm=function(a){Dm?O(a):Em.push(a)};var Xm=function(a){if(Wm(a))return a;this.a=a};Xm.prototype.Kg=function(){return this.a};var Wm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Xm.prototype.getUntrustedUpdateValue=Xm.prototype.Kg;var Ym=[],Zm=!1,$m=function(a){return E["dataLayer"].push(a)},an=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function bn(a){var b=a._clear;D(a,function(f,g){"_clear"!==f&&(b&&ng(f,void 0),ng(f,g))});zf||(zf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ff(),a["gtm.uniqueEventId"]=d,ng("gtm.uniqueEventId",d));Bf=c;var e=cn(a);Bf=null;switch(c){case "gtm.init":Hf("GTM",19),e&&Hf("GTM",20)}return e}
function cn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Fd.B,c):Ug;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function dn(){for(var a=!1;!Zm&&0<Ym.length;){Zm=!0;delete gg.eventModel;ig();var b=Ym.shift();if(null!=b){var c=Wm(b);if(c){var d=b;b=Wm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=jg(g,1);if(Ga(k)||jb(k))k=I(k);hg[g]=k}}try{if(Ea(b))try{b.call(kg)}catch(u){}else if(Ga(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=jg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(La(b)){a:{if(b.length&&q(b[0])){var p=ym[b[0]];if(p&&(!c||!zm[b[0]])){b=p(b);break a}}b=void 0}if(!b){Zm=!1;continue}}a=bn(b)||a}}finally{c&&ig(!0)}}Zm=!1}return!a}function en(){var a=dn();try{Am(E["dataLayer"],Fd.B)}catch(b){}return a}
var gn=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Gm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<R.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Xm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ym.push.apply(Ym,d);if(300<
this.length)for(Hf("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return dn()&&g};Ym.push.apply(Ym,a.slice(0));fn()&&O(en)},fn=function(){var a=!0;return a};var hn={};hn.Jb=new String("undefined");
var jn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hn.Jb?b:a[d]);return c.join("")}};jn.prototype.toString=function(){return this.a("undefined")};jn.prototype.valueOf=jn.prototype.toString;hn.Kf=jn;hn.Nc={};hn.rg=function(a){return new jn(a)};var kn={};hn.xh=function(a,b){var c=Ff();kn[c]=[a,b];return c};hn.te=function(a){var b=a?0:1;return function(c){var d=kn[c];if(d&&"function"===typeof d[b])d[b]();kn[c]=void 0}};hn.Tg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};hn.oh=function(a){if(a===hn.Jb)return a;var b=Ff();hn.Nc[b]=a;return'google_tag_manager["'+Fd.B+'"].macro('+b+")"};hn.eh=function(a,b,c){a instanceof hn.Kf&&(a=a.a(hn.xh(b,c)),b=Da);return{Zc:a,D:b}};var ln=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mn=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},nn=function(a,b,c){mn(a)[b]=c},on=function(a,b,c,d){var e=mn(a),f=Sa(e,b,d);e[b]=c(f)},pn=function(a,b,c){var d=mn(a);return Sa(d,b,c)};var qn=["input","select","textarea"],rn=["button","hidden","image","reset","submit"],sn=function(a){var b=a.tagName.toLowerCase();return!Ha(qn,function(c){return c===b})||"input"===b&&Ha(rn,function(c){return c===a.type.toLowerCase()})?!1:!0},tn=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):Ze(a,["form"],100)},un=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(sn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vn=!!E.MutationObserver,wn=void 0,xn=function(a){if(!wn){var b=function(){var c=J.body;if(c)if(vn)(new MutationObserver(function(){for(var e=0;e<wn.length;e++)O(wn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<wn.length;e++)O(wn[e])}))})}};wn=[];J.body?b():O(b)}wn.push(a)};
var In=function(){var a=J.body,b=J.documentElement||a&&a.parentElement,c,d;if(J.compatMode&&"BackCompat"!==J.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Hf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Jn=function(a){var b=In(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Kn=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,null))}return!1};var Sn=E.clearTimeout,Tn=E.setTimeout,W=function(a,b,c){if(yg()){b&&O(b)}else return Qe(a,b,c)},Un=function(){return E.location.href},Vn=function(a){return Ch(Eh(a),"fragment")},Wn=function(a){return Dh(Eh(a))},Xn=function(a,b){return jg(a,b||2)},Yn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=$m(a)):d=$m(a);return d},Zn=function(a,b){E[a]=b},X=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},$n=function(a,b,c){return Di(a,b,void 0===c?!0:!!c)},ao=function(a,b){if(yg()){b&&O(b)}else Se(a,b)},bo=function(a){return!!pn(a,"init",!1)},co=function(a){nn(a,"init",!0)},eo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";W(V("https://","http://",c))},fo=function(a,b){var c=a[b];return c};
var go=hn.eh;var Do=new Ja;function Eo(a,b){function c(g){var k=Eh(g),l=Ch(k,"protocol"),m=Ch(k,"host",!0),n=Ch(k,"port"),r=Ch(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Fo(a){return Go(a)?1:0}
function Go(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Fo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Do.get(p);u||(u=new RegExp(c,t),Do.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Eo(b,
c)}return!1};var Ho=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Io={},Jo=encodeURI,Y=encodeURIComponent,Ko=Te;var Lo=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Mo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Io.Ug=function(){var a=!1;return a};var Zp=function(){var a=E.gaGlobal=E.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var jq=window,kq=document,lq=function(a){var b=jq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===jq["ga-disable-"+a])return!0;try{var c=jq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=zi("AMP_TOKEN",String(kq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return kq.getElementById("__gaOptOutExtension")?!0:!1};
var oq=function(a){D(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[S.ma]||{};D(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var sq=function(a,b,c){ul(b,c,a)},tq=function(a,b,c){ul(b,c,a,!0)},vq=function(a,b){};
function uq(a,b){}var Z={b:{}};
Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"184"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var F=Number(z[A]);if(isNaN(F))return[];n.test(z[A])||B.push(F)}return B}function c(){var y=0,B=0;return function(){var z=In(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{vg:y,wg:B}}}function d(){p=X("self");
u=p.document;v=u.scrollingElement||u.body&&u.body.parentNode;x=c()}function e(y,B,z,A){var F=l(B),G={},L;for(L in F){G.Ja=L;if(F.hasOwnProperty(G.Ja)){var T=Number(G.Ja);y<T||(Yn({event:"gtm.scrollDepth","gtm.scrollThreshold":T,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":F[G.Ja].join(",")}),on("sdl",B,function(ca){return function(ea){delete ea[ca.Ja];return ea}}(G),{}))}G={Ja:G.Ja}}}function f(){var y=x(),B=y.vg,z=y.wg,A=B/v.scrollWidth*100,F=z/v.scrollHeight*100;e(B,
"horiz.pix",r.Lb,t.Kd);e(A,"horiz.pct",r.Kb,t.Kd);e(z,"vert.pix",r.Lb,t.de);e(F,"vert.pct",r.Kb,t.de);nn("sdl","pending",!1)}function g(){var y=250,B=!1;u.scrollingElement&&u.documentElement&&p.addEventListener&&(y=50,B=!0);var z=0,A=!1,F=function(){A?z=Tn(F,y):(z=0,f(),bo("sdl")&&!a()&&(Ve(p,"scroll",G),Ve(p,"resize",G),nn("sdl","init",!1)));A=!1},G=function(){B&&x();z?A=!0:(z=Tn(F,y),nn("sdl","pending",!0))};return G}function k(y,B,z){if(B){var A=b(String(y));on("sdl",z,function(F){for(var G=0;G<
A.length;G++){var L=String(A[G]);F.hasOwnProperty(L)||(F[L]=[]);F[L].push(B)}return F},{})}}function l(y){return pn("sdl",y,{})}function m(y){O(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,F=y.vtp_verticalThresholdUnits,G=y.vtp_verticalThresholdsPixels,L=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Lb:k(z,B,"horiz.pix");break;case r.Kb:k(A,B,"horiz.pct")}switch(F){case r.Lb:k(G,B,"vert.pix");
break;case r.Kb:k(L,B,"vert.pct")}bo("sdl")?pn("sdl","pending")||(w||(d(),w=!0),O(function(){return f()})):(d(),w=!0,v&&(co("sdl"),nn("sdl","pending",!0),O(function(){f();if(a()){var T=g();Ue(p,"scroll",T);Ue(p,"resize",T)}else nn("sdl","init",!1)})))}var n=/^\s*$/,r={Kb:"PERCENT",Lb:"PIXELS"},t={de:"vertical",Kd:"horizontal"},p,u,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):Gm(function(){m(y)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(pg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Xn("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Wn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ln(c,"gtm.click");Yn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!bo("cl")){var c=X("document");Ue(c,"click",a,!0);co("cl")}O(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return $n(a.vtp_name,Xn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Xn("gtm.url",1);c=c||Un();var d=b[a("vtp_component")];if(!d||"URL"==d)return Wn(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Xn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.dd&&b.fd>=b.dd)b.$c&&X("self").clearInterval(b.$c);else{b.fd++;var c=(new Date).getTime();Yn({event:b.ja,"gtm.timerId":b.$c,"gtm.timerEventNumber":b.fd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.dd,"gtm.timerStartTime":b.Ze,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ze,"gtm.triggers":b.Nh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ja:b.vtp_eventName,fd:0,interval:Number(b.vtp_interval),dd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Nh:String(b.vtp_uniqueTriggerId||"0"),Ze:(new Date).getTime()};c.$c=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;I(Mo(n.vtp_fieldsToSet,"fieldName","value"),f);I(Mo(n.vtp_contentGroup,"index","group"),g);I(Mo(n.vtp_dimension,"index","dimension"),k);I(Mo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=I(n);d=I(d,r)}I(Mo(d.vtp_fieldsToSet,"fieldName","value"),f);I(Mo(d.vtp_contentGroup,
"index","group"),g);I(Mo(d.vtp_dimension,"index","dimension"),k);I(Mo(d.vtp_metric,"index","metric"),l);var t=sh(d.vtp_functionName);if(Ea(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Ff(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(P){var K=[].slice.call(arguments,0);K[0]=p+K[0];t.apply(window,K)},y=function(P,K){return void 0===K?K:P(K)},B=function(P,K){if(K)for(var Aa in K)K.hasOwnProperty(Aa)&&x("set",P+Aa,K[Aa])},z=function(){var P=function(zq,vk,Aq){if(!jb(vk))return!1;for(var Hd=Sa(Object(vk),Aq,[]),dh=0;Hd&&dh<Hd.length;dh++)x(zq,Hd[dh]);return!!Hd&&0<Hd.length},K;if(d.vtp_useEcommerceDataLayer){var Aa=!1;Aa||(K=Xn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!jb(K))return;K=Object(K);var cc=Sa(f,"currencyCode",K.currencyCode);void 0!==cc&&x("set","&cu",cc);P("ec:addImpression",K,"impressions");if(P("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){x("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ma=
"detail checkout checkout_option click add remove purchase refund".split(" "),nb="refund purchase remove checkout checkout_option add click detail".split(" "),ob=0;ob<Ma.length;ob++){var Ab=K[Ma[ob]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Ma[ob],Ab.actionField);if($f)for(var Ob=0;Ob<nb.length;Ob++){var Uc=K[nb[Ob]];if(Uc){Uc!==Ab&&Hf("GTM",13);break}}break}}},A=function(P,K,Aa){var cc=0;if(P)for(var Ma in P)if(P.hasOwnProperty(Ma)&&
(Aa&&v[Ma]||!Aa&&void 0===v[Ma])){var nb=w[Ma]?Oa(P[Ma]):P[Ma];"anonymizeIp"!=Ma||nb||(nb=void 0);K[Ma]=nb;cc++}return cc},F={name:u};A(f,F,!0);t("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",Yj(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,K){void 0!==d[K]&&x("set",P,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",g);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require",
"linkid","linkid.js");x("set","hitCallback",function(){var P=f&&f.hitCallback;Ea(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};A(L,T,!1);x("send",
T);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var za=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:wa})}L?x("send","pageview",L):x("send","pageview");}if(!a){var Ba=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var pb=V("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);W(pb,
function(){var P=qh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else O(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(he(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Fd.B})}();


Z.b.aev=["google"],function(){function a(p,u){var v=pg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var x=p+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(p,w);if(B&&(y=v(B),n[x]=y,r.push(x),35<r.length)){var z=r.shift();delete n[z]}}return y}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Un());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Lo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ch(Eh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)sn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=Eh(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Ch(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var G=p.vtp_attribute,L=a(u,"element");F=L&&We(L,G)||v||""}return F;case "MD":var T=p.vtp_mdValue,ca=b(u,"MD",En);return T&&ca?Hn(ca,
T)||v:ca||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=I(b),d=c;d[rd.xa]=null;d[rd.qf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();

Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Mo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){O(g)}}}var b=function(d,e,f){bh(function(){var g,k=R;k.postscribe||(k.postscribe=je);g=k.postscribe;var l={done:e},m=J.createElement("div");m.style.display="none";m.style.visibility="hidden";J.body.appendChild(m);try{g(m,d,l)}catch(n){O(f)}})};var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=go(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Zc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(J.body,Ye(g),k,e)()}else Tn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ye('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ko(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Sg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ze(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=pn("lcl",k?"nv.mwt":"mwt",0),m;m=k?pn("lcl","nv.ids",[]):pn("lcl","ids",[]);if(m.length){var n=ln(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(fo(g,"rel")||""),t=!!Ha(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Hf("GTM",36);var p=X((fo(g,"target")||"_self").substring(1)),u=!0;if(Yn(n,an(function(){var v;if(v=u&&p){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Sg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=fo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Yn(n,function(){},l||2E3);return!0}}};Ue(c,"click",e,!1);Ue(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=fo(d,"href"),g=f.indexOf("#"),k=fo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Wn(f),m=Wn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};on("lcl","mwt",k,0);e||on("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};on("lcl","ids",l,[]);e||on("lcl","nv.ids",l,[]);bo("lcl")||(a(),co("lcl"));O(c.vtp_gtmOnSuccess)})}();



Z.b.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.g="csm";Z.__csm.h=!0;Z.__csm.priorityOverride=0})(function(a){var b=X("document");Ko(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+Y(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=new Date,g=(e||"").split("&");e="";for(var k=0;k<g.length;k++)if(g[k]){var l=g[k].match(/([^=]*)=?(.*)/);e+="&"+Y(l[1])+"="+Y(l[2])}return V("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
Y(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.ii||"")+"&c8="+Y(b.title||"")+e+"&c7="+Y(b.URL)+"&c9="+Y(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),g=0;g<f.length;g++){var k=f[g].indexOf("comScore");0<=k&&(d=unescape(f[g].substring(k+8)))}return d}())));var c=function(){var d=V("https://sb","http://b",".scorecardresearch.com/c2/"+Y(a.vtp_clientId)+"/cs.js");W(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():Ue(X("self"),"load",c)})}();var wq={};wq.macro=function(a){if(hn.Nc.hasOwnProperty(a))return hn.Nc[a]},wq.onHtmlSuccess=hn.te(!0),wq.onHtmlFailure=hn.te(!1);wq.dataLayer=kg;wq.callback=function(a){Df.hasOwnProperty(a)&&Ea(Df[a])&&Df[a]();delete Df[a]};function xq(){R[Fd.B]=wq;Ua(Ef,Z.b);jd=jd||hn;kd=Tg}
function yq(){Ai.gtm_3pds=!0;R=E.google_tag_manager=E.google_tag_manager||{};if(R[Fd.B]){var a=R.zones;a&&a.unregisterChild(Fd.B)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(r)}hd=Z;id=Fo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;hm();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");Ef[y]=w}km(v);xq();
gn();Xg=!1;Yg=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)$g();else{Ue(J,"DOMContentLoaded",$g);Ue(J,"readystatechange",$g);if(J.createEventObject&&J.documentElement.doScroll){var B=!0;try{B=!E.frameElement}catch(G){}B&&ah()}Ue(E,"load",$g)}Dm=!1;"complete"===J.readyState?Fm():Ue(E,"load",Fm);
a:{if(!$f)break a;E.setInterval(ag,864E5);}Af=(new Date).getTime();}}yq();

})()
