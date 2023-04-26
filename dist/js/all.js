/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement$1 = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement$1(object)) {
      return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
    }

    return null;
  };

  const isVisible = element => {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
      return elementIsVisible;
    }

    if (closedDetails !== element) {
      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }

      if (summary === null) {
        return false;
      }
    }

    return elementIsVisible;
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      callable = wrapFunction(callable);
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};

    for (const handlerKey of Object.keys(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }

      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

      for (const keyHandlers of Object.keys(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      let evt = new Event(event, {
        bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {})) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,

          get() {
            return value;
          }

        });
      }
    }

    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const elementMap = new Map();
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = isElement$1(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement$1(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = isElement$1(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const VERSION = '5.2.3';
  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();
    } // Getters


    static get Default() {
      return Default$c;
    }

    static get DefaultType() {
      return DefaultType$c;
    }

    static get NAME() {
      return NAME$d;
    } // Public


    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    } // Private


    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }

      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }

    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }

      this._handleSwipe();

      execute(this._config.endCallback);
    }

    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;

      if (!direction) {
        return;
      }

      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }

    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    } // Static


    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$c = 'carousel';
  const DATA_KEY$8 = 'bs.carousel';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
   * Class definition
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    } // Getters


    static get Default() {
      return Default$b;
    }

    static get DefaultType() {
      return DefaultType$b;
    }

    static get NAME() {
      return NAME$c;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }

    cycle() {
      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

      if (index > items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, items[index]);
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }

      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(this._directionToOrder(direction));
      }
    }

    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }

    _updateInterval() {
      const element = this._activeElement || this._getActive();

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }

    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }

      const activeElement = this._getActive();

      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {
        return;
      }

      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };

      const slideEvent = triggerEvent(EVENT_SLIDE);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());

      if (isCycling) {
        this.cycle();
      }
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }

    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }

    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }

    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }

    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }

    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (const elem of toggleList) {
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default$a;
    }

    static get DefaultType() {
      return DefaultType$a;
    }

    static get NAME() {
      return NAME$b;
    } // Public


    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);

      if (startEvent.defaultPrevented) {
        return;
      }

      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      for (const trigger of this._triggerArray) {
        const element = getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private


    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

      for (const element of children) {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    } // Static


    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Collapse);

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  const applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;

    if (uaData != null && uaData.brands) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }

    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }

    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }

    var _ref = isElement(element) ? getWindow(element) : window,
        visualViewport = _ref.visualViewport;

    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  const arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets,
        isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
        x = _offsets$x === void 0 ? 0 : _offsets$x,
        _offsets$y = offsets.y,
        y = _offsets$y === void 0 ? 0 : _offsets$y;

    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref4.x;
    y = _ref4.y;

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
        options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  const computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  const eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();

      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$strategy = _options.strategy,
        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  const flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  const hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  const offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  const popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var _offsetModifierState$;

      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _offsetModifierState$2;

      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _len = altAxis === 'y' ? 'height' : 'width';

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  const preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }
  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  const Popper = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    popperGenerator,
    detectOverflow,
    createPopperBase: createPopper$2,
    createPopper,
    createPopperLite: createPopper$1,
    top,
    bottom,
    right,
    left,
    auto,
    basePlacements,
    start,
    end,
    clippingParents,
    viewport,
    popper,
    reference,
    variationPlacements,
    placements,
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite,
    modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  }, Symbol.toStringTag, { value: 'Module' }));

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$9 = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
   * Class definition
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
      return Default$9;
    }

    static get DefaultType() {
      return DefaultType$9;
    }

    static get NAME() {
      return NAME$a;
    } // Public


    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._createPopper(); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _createPopper() {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement$1(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      this._popper = createPopper(referenceElement, this._menu, popperConfig);
    }

    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }

    _getPlacement() {
      const parentDropdown = this._parent;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }

      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        context._completeHide(relatedTarget);
      }
    }

    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
        return;
      }

      event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

        instance._selectMenuItem(event);

        return;
      }

      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    } // Public


    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        this._saveInitialAttribute(element, styleProperty);

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }

        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement$1(selector)) {
        callBack(selector);
        return;
      }

      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      const element = this._getElement();

      if (this._config.isAnimated) {
        reflow(element);
      }

      element.classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      const element = this._getElement();

      this._config.rootElement.append(element);

      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of

  };
  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    } // Getters


    static get Default() {
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

    static get NAME() {
      return NAME$8;
    } // Public


    activate() {
      if (this._isActive) {
        return;
      }

      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    } // Private


    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;

      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$6;
    }

    static get DefaultType() {
      return DefaultType$6;
    }

    static get NAME() {
      return NAME$7;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._isTransitioning = true;

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;
      this._isTransitioning = true;

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }

    dispose() {
      for (const htmlElement of [window, this._dialog]) {
        EventHandler.off(htmlElement, EVENT_KEY$4);
      }

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }

        if (this._config.keyboard) {
          event.preventDefault();
          this.hide();
          return;
        }

        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }

          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();

            return;
          }

          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);

      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }

      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    }); // avoid conflict when clicking modal toggler while another one is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }

    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * jQuery
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$5;
    }

    static get DefaultType() {
      return DefaultType$5;
    }

    static get NAME() {
      return NAME$6;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOWING$1);

      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }

        this._element.classList.add(CLASS_NAME_SHOW$3);

        this._element.classList.remove(CLASS_NAME_SHOWING$1);

        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.add(CLASS_NAME_HIDING);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    } // Private


    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value


      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (!this._config.keyboard) {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  /**
   * jQuery
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default$4;
    }

    static get DefaultType() {
      return DefaultType$4;
    }

    static get NAME() {
      return NAME$5;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (isElement$1(content)) {
        this._putElementInTemplate(getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element, config); // Private

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

      this.tip = null;

      this._setListeners();

      if (!this._config.selector) {
        this._fixTitle();
      }
    } // Getters


    static get Default() {
      return Default$3;
    }

    static get DefaultType() {
      return DefaultType$3;
    }

    static get NAME() {
      return NAME$4;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle() {
      if (!this._isEnabled) {
        return;
      }

      this._activeTrigger.click = !this._activeTrigger.click;

      if (this._isShown()) {
        this._leave();

        return;
      }

      this._enter();
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }

      this._disposePopper();

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      this._disposePopper();

      const tip = this._getTipElement();

      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

      const {
        container
      } = this._config;

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }

      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }

      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

        if (this._isHovered === false) {
          this._leave();
        }

        this._isHovered = false;
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

      if (hideEvent.defaultPrevented) {
        return;
      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (!this._isHovered) {
          this._disposePopper();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
      if (this._popper) {
        this._popper.update();
      }
    } // Protected


    _isWithContent() {
      return Boolean(this._getTitle());
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    } // Private


    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }

    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg.call(this._element) : arg;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();
          });
        }
      }

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility


      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

      this._isHovered = false;

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);

      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      }

      config.selector = false;
      config.trigger = 'manual'; // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`

      return config;
    }

    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }

      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * jQuery
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = { ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };
  /**
   * Class definition
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

    static get DefaultType() {
      return DefaultType$2;
    }

    static get NAME() {
      return NAME$3;
    } // Overrides


    _isWithContent() {
      return this._getTitle() || this._getContent();
    } // Private


    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * jQuery
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };
  /**
   * Class definition
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
    } // Getters


    static get Default() {
      return Default$1;
    }

    static get DefaultType() {
      return DefaultType$1;
    }

    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      this._initializeTargetsAndObservables();

      this._maybeEnableSmoothScroll();

      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }

      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }

    dispose() {
      this._observer.disconnect();

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only

      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
      }

      return config;
    }

    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      } // unregister any previous listeners


      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          } // Chrome 60 doesn't support `scrollTo`


          root.scrollTop = height;
        }
      });
    }

    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    } // The logic of selection


    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));
      };

      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;

          this._clearActiveClass(targetElement(entry));

          continue;
        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {
            return;
          }

          continue;
        } // if we are scrolling up, pick the smallest offsetTop


        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }

        const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

        if (isVisible(observableSection)) {
          this._targetLinks.set(anchor.hash, anchor);

          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }

    _process(target) {
      if (this._activeTarget === target) {
        return;
      }

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }

      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }

    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);

      if (!this._parent) {
        return; // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      } // Set up initial aria attributes


      this._setInitialAttributes(this._parent, this._getChildren());

      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    } // Getters


    static get NAME() {
      return NAME$1;
    } // Public


    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;

      if (this._elemIsActive(innerElem)) {
        return;
      } // Search for active tab on same parent to deactivate it


      const active = this._getActiveElem();

      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });

      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }

      this._deactivate(active, innerElem);

      this._activate(innerElem, active);
    } // Private


    _activate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      this._activate(getElementFromSelector(element)); // Search and activate/show the proper section


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }

        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();

      this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }

        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        return;
      }

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);

      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }

    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }

    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }

    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

      const outerElem = this._getOuterElement(child);

      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }

      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }

      this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


      this._setInitialAttributesOnTargetPanel(child);
    }

    _setInitialAttributesOnTargetPanel(child) {
      const target = getElementFromSelector(child);

      if (!target) {
        return;
      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
      }
    }

    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }

      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);

        if (element) {
          element.classList.toggle(className, open);
        }
      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute('aria-expanded', open);
    }

    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }

    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    } // Try to get the inner element (usually the .nav-link)


    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    } // Try to get the outer element (usually the .nav-item)


    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    Tab.getOrCreateInstance(this).show();
  });
  /**
   * Initialize on focus
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * Class definition
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this.isShown()) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    }

    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    } // Private


    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }

        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  enableDismissTrigger(Toast);
  /**
   * jQuery
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

}));
//# sourceMappingURL=bootstrap.bundle.js.map

function getCatalog () {
	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(response => response.json())
		.then(catalog => {

			// Штучно обрізаємо відповідь
			const catalogView = catalog.slice(0, 12);

			// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
			let listProducts = '';

			// Виводимо добавлені товари
			$.each(catalogView, function(index, product) {
				// console.log("product", product);


				// Наповнюємо змінну товарами
				listProducts += `<div class="card-product radius-4-px">
						<img class="img" alt="" src="img/1.jpg">
						<a href="product.html?id=${product.id}" class="title">${product.title}</a>
						<p class="info-text">Склад,ангари,офіс,магазин,нічний клуб,фастфуд,ресторан</p>
						<p class="price"><span class="big font-bold">${product.id}00</span> грн</span></p>
						<div class="btn btn-primary w-100 js-add-product" data-id="${product.id}" data-title="${product.title}" data-price="${product.id}00" data-img="1.jpg">Замовити</div>
					</div>`;
			});


			// Виводимо сформований список товарів в html
			$('.js-catalog-list').html(listProducts);

		})
		.catch(error => console.error(error));
}

getCatalog();
// Ключ, який відповідає ключу в localstorage
const cartKey = 'cartList';

// Корзина з добавленими товарами
const cart = getCart();


// Показати або приховати корзину
$('.js-show-cart').click(() => $('.js-cart-list').toggleClass("hide") );


// Зберігаємо корзину у localstorege 
function saveCart() {
	localStorage.setItem(cartKey, JSON.stringify(cart));
}

// Виводимо збережені товари корзини
function getCart() {
	let cartList = localStorage.getItem(cartKey);
	cartList = JSON.parse(cartList);
	return (Array.isArray(cartList)) ? cartList : [];
}

// Вивід товарів у корзину 
function viewProducts()
{
	// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
	let listProducts = '';
	
	// Перевіряємо чи є в нас масив з корзиною
	if(!Array.isArray(cart))
		return false;

	// Кількість товарів 
	let cartCount = cart.length;
	
	// Якщо немає товарів
	if(cartCount == 0) {

		// Ховаємо кількість товару
		$('.js-cart-summ').hide();

		// Виводити html корзина пуста
		listProducts = `<li class="no-result">
				<img src="img/empty-cart.png" alt="" class="no-result__img">
				<h3 class="no-result__title">Корзина пуста</h3>
			</li>`;

	// Якщо товари є 
	} else {

		// Показує кількість товару
		$('.js-cart-summ').show();

		// Показує кількість товарів у корзині
		$('.js-cart-summ').html(cartCount);
		
		// Виводимо добавлені товари
		$.each(cart, function(index, product) {
			
			// Наповнюємо змінну товарами
			listProducts += `<li class="cart-product">
								<div class="cart-product__img-wrap">
									<img src="img/${product.img}" alt="" class="cart-product__img">
								</div>
								<h3 class="cart-product__title">${product.title}</h3>
								<p class="cart-product__price">${product.price}</p>
								<div class="button-count">
							        <button class="button-count__btn button-count__btn-count" data-for="#input-count-${index}" data-type="minus">-</button>
							        <input type="text" value="1" class="button-count__input" id="input-count-${index}"/>
							        <button class="button-count__btn button-count__btn-count" data-for="#input-count-${index}" data-type="plus">+</button>
    							</div>
								<div class="btn btn-remove js-remove-product" data-index="${index}">x</div>
							</li>`;

		});

		// Добавляємо кнопку оформлення замовлення
		listProducts += `<a href="checkout.html" class="btn-247 btn-order">Оформити замовлення</a>`;
	}


	// Виводимо сформований список товарів в html
	$('.js-cart-list').html(listProducts);

	// Зберігаємо корзину
	saveCart();
}

viewProducts();


/**
 * Добавлення товару в корзину
 */
$(document).on('click', '.js-add-product', function(event)
{
	// Дістаємо кнопку на яку нажали
	const btn = $(this);

	// Формуємо данні про товар
	const newProduct = btn.data();
	
	// Перевіряємо чи такий товар був доданий
	if (cart.isAloowAddProduct(newProduct, 'title')) {

		// Добавляємо товар у масив
		cart.push(newProduct);
		
		// Виводимо всі товари у корзині
		viewProducts();
	}

});




/**
 * Видалення товару
 */
$(document).on('click', '.js-remove-product', function()
{	
	// Дістаємо ключ масиву
	const index = $(this).data('product-key');

	// Видаляємо товар з масиву доданих товарів
	cart.splice(index, 1);

	// Виводимо всі товари у корзині
	viewProducts();
});



// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.isAloowAddProduct) {
	Object.defineProperty(Array.prototype, 'isAloowAddProduct', {

		// Наша функція, яка буде шукати товар в масиві і повертати або true або false
		// Якщо товар є або його немає
		value: function(objProduct, searchKey = 'title') {

			// Перевіряємо чи objProduct є обєктом
			if(typeof objProduct === 'object') {

				// Відбираємо значення з обєкта
				const addTitle = objProduct[searchKey];	

				// Перевіряємо чи існує значення чи ні
				if(typeof addTitle === 'undefined') {
					
					// Повертаємо false, що товар добавляти не потрібно
					return false;

				} else {
					
					// Зберігаємо масив з яким будемо працювати
					const arrList = this;

					// Зберігає значення ітерації
					let arrTitle = '';

					// Переключалка чи добавляти товар чи ні
					let swithAddProduct = true;

					// перебтраємо весь масив щоб знайти дублікат
					arrList.forEach( function(element) {
						
						// Витягуємо по ключу searchKey його значення
						arrTitle = element[searchKey];

						// Порівнюмо значенння масиву зі значенням арумента обєкта
						if (arrTitle == addTitle) {
							swithAddProduct = false;
						}

					});

					// Товар добавляти не потрібно
					return swithAddProduct;
				}


			} else {
				// Аргумент не являється продуктом
				throw "Перший аргумент не являється обєктом продукту";
			}


			// Товар добавляти не потрібно
			return false;
		}

	});
}



// Вішаємо подію кліку на кнопку плюс.
$(document).on('click', '.button-count__btn-count', function()
{
	// Дістаємо тип кнопки
	const typeBtn = $(this).data('type');

	// Відбираємо id інпуту з яким будемо працювати (з data-for в кнопці)
	const inputID = $(this).data('for');

	// Відбираємо input
	const input = $(inputID);
	
	// Відбираємо цифру з input
	let value = input.val();
	

	if(typeBtn == 'plus'){

		// Добавляємо цифру 1 до input
		input.val(++value);
	} else {

		if (value > 1) {
			// Мінусуємо цифру з input
			input.val(--value);
		}
	}
});

// Маємо вивести замовлені товари з масиву cart в новий список, який відповідає іншій сторінці
function viewOrderProducts()
{
	// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
	let listProducts = '';

	// Кількість товарів 
	let cartCount = cart.length;
	
	// Якщо немає товарів
	if(cartCount != 0) {
		
		// Виводимо добавлені товари
		$.each(cart, function(index, product) {
			
			// Наповнюємо змінну товарами
			listProducts += `<div class="card-order-product">
				        		<img src="img/${product.img}" alt="" class="card-order-product__img">
				        		<h4 class="card-order-product__title">${product.title}</h4>
				        		<p class="card-order-product__price">
				        			<span class="card-order-product__price-label">Ціна:</span>
				        			<span class="card-order-product__price-value">${product.price}</span>
				        		</p>
				        	</div>`;

		});

		// // Добавляємо кнопку оформлення замовлення
		// listProducts += `<a href="checkout.html" class="btn-247 btn-order">Оформити замовлення</a>`;
	}


	// Виводимо сформований список товарів в html
	$('.js-list-order-products').html(listProducts);
	// Вішаємо подію кліку на кнопку плюс.

}

viewOrderProducts();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS0zLjYuNC5taW4uanMiLCJib290c3RyYXAuYnVuZGxlLmpzIiwiY2F0YWxvZy5qcyIsImNhcnQuanMiLCJjaGVja291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbjZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYzLjYuNCB8IChjKSBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHk9bi5oYXNPd25Qcm9wZXJ0eSxhPXkudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx2PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUuaXRlbX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNi40XCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49eS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6dn0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHkscyxjLHYsUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLGo9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxEPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsJD1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmdihlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXl8fCF5LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ2ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoQixcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB5ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB2ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5uYW1lc3BhY2VVUkksbj1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5jc3NIYXM9Y2UoZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEMucXVlcnlTZWxlY3RvcihcIjpoYXMoKiw6anFmYWtlKVwiKSwhMX1jYXRjaChlKXtyZXR1cm4hMH19KSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoQy5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUsudGVzdChDLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGQuZ2V0QnlJZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1TLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShTKS5sZW5ndGh9KSxkLmdldEJ5SWQ/KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIHQmJnQudmFsdWU9PT1ufX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZFKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHM9W10seT1bXSwoZC5xc2E9Sy50ZXN0KEMucXVlcnlTZWxlY3RvckFsbCkpJiYoY2UoZnVuY3Rpb24oZSl7dmFyIHQ7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrUytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK1MrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnkucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx5LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitTK1wiLV1cIikubGVuZ3RofHx5LnB1c2goXCJ+PVwiKSwodD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiXCIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aHx8eS5wdXNoKFwiXFxcXFtcIitNK1wiKm5hbWVcIitNK1wiKj1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHkucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrUytcIisqXCIpLmxlbmd0aHx8eS5wdXNoKFwiLiMuK1srfl1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiXFxcXFxcZlwiKSx5LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmeS5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx5LnB1c2goXCIsLio6XCIpfSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKGZ1bmN0aW9uKGUpe2QuZGlzY29ubmVjdGVkTWF0Y2g9Yy5jYWxsKGUsXCIqXCIpLGMuY2FsbChlLFwiW3MhPScnXTp4XCIpLHMucHVzaChcIiE9XCIsRil9KSxkLmNzc0hhc3x8eS5wdXNoKFwiOmhhc1wiKSx5PXkubGVuZ3RoJiZuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdj10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZSYmZS5kb2N1bWVudEVsZW1lbnR8fGUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LGo9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmdihwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmdihwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF5fHwheS50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSksdihlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZELmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChqKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKCQsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx5KXt2YXIgdj1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT15P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9diE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih2KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09eSk9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtTXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoQixcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnllKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp5ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6eWUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnllKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6eWUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtTXXx8KGVbU109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHksdixlKXtyZXR1cm4geSYmIXlbU10mJih5PUNlKHkpKSx2JiYhdltTXSYmKHY9Q2UodixlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/dnx8KGU/ZDpsfHx5KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx5KXtpPVRlKHAsdSkseShpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYodnx8ZCl7aWYodil7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7dihudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9dj9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx2P3YobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtTXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKEIsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHksdixtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHk9byxtPTA8KHY9aSkubGVuZ3RoLHg9MDx5Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IUUpO3doaWxlKHM9eVthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9dlthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUrdi5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ2ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnZlKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KFwiXCIpLnNvcnQoaikuam9pbihcIlwiKT09PVMsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtTLmZpbmQ9ZCxTLmV4cHI9ZC5zZWxlY3RvcnMsUy5leHByW1wiOlwiXT1TLmV4cHIucHNldWRvcyxTLnVuaXF1ZVNvcnQ9Uy51bmlxdWU9ZC51bmlxdWVTb3J0LFMudGV4dD1kLmdldFRleHQsUy5pc1hNTERvYz1kLmlzWE1MLFMuY29udGFpbnM9ZC5jb250YWlucyxTLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sUy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/UyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBELHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fEQsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixEPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtTLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49Uy5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fFMudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19Uy5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7Uy5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBTLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49Uy5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8Uy5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sUy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24ocil7Uy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPVMuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sUy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiAkKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCQpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwkKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7Uy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsJCksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCQpKTt2YXIgQj1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbilCKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTpCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LFMubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9TLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1FLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KFMuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKFMuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlTLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsUy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PVMuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx2LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix2Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIsdi5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB5ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/Uy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB2ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx2Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKVMubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rUy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPFMuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT15ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnZlKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB3ZSgpe3JldHVybiEwfWZ1bmN0aW9uIFRlKCl7cmV0dXJuITF9ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIEVlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KUVlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9VGU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBTZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbiYmbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksd2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXkuZXZlbnRzKXx8KHU9eS5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9eS5oYW5kbGUpfHwoYT15LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUyYmUy5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/Uy5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9YmUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPVMuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJlMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih5JiYodT15LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPWJlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx5LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHkuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PVMuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9Uy5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoUy5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPFMoaSx0aGlzKS5pbmRleChsKTpTLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoUy5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZTZSh0LFwiY2xpY2tcIix3ZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmU2UodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpUZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlRlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ITB9LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24odCxlKXtTLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFNlKHRoaXMsdCxDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyx0KSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFkuZ2V0KGUudGFyZ2V0LHQpfSxkZWxlZ2F0ZVR5cGU6ZX19KSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtTLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8Uy5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksUy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBFZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEVlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLFMoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPVRlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBrZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxBZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLE5lPS9eXFxzKjwhXFxbQ0RBVEFcXFt8XFxdXFxdPlxccyokL2c7ZnVuY3Rpb24gamUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBEZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTGUoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIEhlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYhdi5jaGVja0Nsb25lJiZBZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAoeWUoZSxcInNjcmlwdFwiKSxEZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEseWUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxxZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKE5lLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIE9lKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh5ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnZlKHllKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEodi5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9eWUoYykscj0wLGk9KG89eWUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHllKGUpLGE9YXx8eWUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylMZShvW3JdLGFbcl0pO2Vsc2UgTGUoZSxjKTtyZXR1cm4gMDwoYT15ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnZlKGEsIWYmJnllKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gT2UodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxqZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PWplKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHllKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYha2UudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHllKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEoeWUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFBlPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFJlPS9eLS0vLE1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sSWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LFdlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpLEZlPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIiwkZT1uZXcgUmVnRXhwKFwiXlwiK0ZlK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitGZStcIiskXCIsXCJnXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPVJlLnRlc3QodCksdT1lLnN0eWxlO3JldHVybihuPW58fE1lKGUpKSYmKGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdLHMmJmEmJihhPWEucmVwbGFjZSgkZSxcIiQxXCIpfHx2b2lkIDApLFwiXCIhPT1hfHxpZShlKXx8KGE9Uy5zdHlsZShlLHQpKSwhdi5waXhlbEJveFN0eWxlcygpJiZQZS50ZXN0KGEpJiZXZS50ZXN0KHQpJiYocj11LndpZHRoLGk9dS5taW5XaWR0aCxvPXUubWF4V2lkdGgsdS5taW5XaWR0aD11Lm1heFdpZHRoPXUud2lkdGg9YSxhPW4ud2lkdGgsdS53aWR0aD1yLHUubWluV2lkdGg9aSx1Lm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uIF9lKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixyZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT1lLnRvcCxzPTEyPT09dChlLm1hcmdpbkxlZnQpLGwuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dChsLm9mZnNldFdpZHRoLzMpLHJlLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHMsdT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbD1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGwuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHYuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsUy5leHRlbmQodix7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPUUuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLHQ9RS5jcmVhdGVFbGVtZW50KFwidHJcIiksbj1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcIix0LnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MXB4IHNvbGlkXCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLG4uc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscmUuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQodCkuYXBwZW5kQ2hpbGQobikscj1DLmdldENvbXB1dGVkU3R5bGUodCksYT1wYXJzZUludChyLmhlaWdodCwxMCkrcGFyc2VJbnQoci5ib3JkZXJUb3BXaWR0aCwxMCkrcGFyc2VJbnQoci5ib3JkZXJCb3R0b21XaWR0aCwxMCk9PT10Lm9mZnNldEhlaWdodCxyZS5yZW1vdmVDaGlsZChlKSksYX19KSl9KCk7dmFyIHplPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxVZT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsWGU9e307ZnVuY3Rpb24gVmUoZSl7dmFyIHQ9Uy5jc3NQcm9wc1tlXXx8WGVbZV07cmV0dXJuIHR8fChlIGluIFVlP2U6WGVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj16ZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPXplW25dK3QpaW4gVWUpcmV0dXJuIGV9KGUpfHxlKX12YXIgR2U9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFllPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIEplKGUsdCxuKXt2YXIgcj10ZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gS2UoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1TLmNzcyhlLG4rbmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1NZShlKSxpPSghdi5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9QmUoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZihQZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybighdi5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHwhdi5yZWxpYWJsZVRyRGltZW5zaW9ucygpJiZBKGUsXCJ0clwiKXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrS2UoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gZXQoZSx0LG4scixpKXtyZXR1cm4gbmV3IGV0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Uy5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1CZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVgodCksdT1SZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1WZShzKSksYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHYuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIFJlLnRlc3QodCl8fCh0PVZlKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7Uy5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFHZS50ZXN0KFMuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9aZShlLHUsbik6SWUoZSxZZSxmdW5jdGlvbigpe3JldHVybiBaZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPU1lKGUpLG89IXYuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PVMuY3NzKGUsdSkpLEplKDAsdCxzKX19fSksUy5jc3NIb29rcy5tYXJnaW5MZWZ0PV9lKHYucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChCZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1JZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxTLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PUplKX0pLFMuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPU1lKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPVMuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9TLnN0eWxlKGUsdCxuKTpTLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9Uy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PVMuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7Uy5meC5zdGVwW2UucHJvcF0/Uy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IVMuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1ZlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OlMuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sUy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LFMuZng9ZXQucHJvdG90eXBlLmluaXQsUy5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxTLmZ4LmludGVydmFsKSxTLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQ9dm9pZCAwfSksdHQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBsdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49bmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGN0KGUsdCxuKXtmb3IodmFyIHIsaT0oZnQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZnQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBmdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1mdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPVMuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXR0fHx1dCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6Uy5leHRlbmQoe30sZSksb3B0czpTLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6Uy5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTp0dHx8dXQoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPVMuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9Uy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHk9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9Uy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLFMucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxvdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXl8fHZvaWQgMD09PXlbcl0pY29udGludWU7Zz0hMH1kW3JdPXkmJnlbcl18fFMuc3R5bGUoZSxyKX1pZigodT0hUy5pc0VtcHR5T2JqZWN0KHQpKXx8IVMuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXkmJnkuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPVMuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihsZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9Uy5jc3MoZSxcImRpc3BsYXlcIiksbGUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwoeT9cImhpZGRlblwiaW4geSYmKGc9eS5oaWRkZW4pOnk9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYoeS5oaWRkZW49IWcpLGcmJmxlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpUy5zdHlsZShlLHIsZFtyXSl9KSksdT1jdChnP3lbcl06MCxyLHApLHIgaW4geXx8KHlbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZnQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmZ0LnByZWZpbHRlcnMucHVzaChlKX19KSxTLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9TLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBTLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIFMuZnguc3BlZWRzP3IuZHVyYXRpb249Uy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1TLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJlMuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxTLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1TLmlzRW1wdHlPYmplY3QodCksbz1TLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZnQodGhpcyxTLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1TLnRpbWVycyxyPVkuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJmF0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fFMuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1ZLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPVMudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxTLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLFMuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1TLmZuW3JdO1MuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSxTLmVhY2goe3NsaWRlRG93bjpsdChcInNob3dcIiksc2xpZGVVcDpsdChcImhpZGVcIiksc2xpZGVUb2dnbGU6bHQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe1MuZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksUy50aW1lcnM9W10sUy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49Uy50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8Uy5meC5zdG9wKCksdHQ9dm9pZCAwfSxTLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe1MudGltZXJzLnB1c2goZSksUy5meC5zdGFydCgpfSxTLmZ4LmludGVydmFsPTEzLFMuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxTLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxTLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxTLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9Uy5meCYmUy5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGl0PUUuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHJ0LnR5cGU9XCJjaGVja2JveFwiLHYuY2hlY2tPbj1cIlwiIT09cnQudmFsdWUsdi5vcHRTZWxlY3RlZD1pdC5zZWxlY3RlZCwocnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLHJ0LnR5cGU9XCJyYWRpb1wiLHYucmFkaW9WYWx1ZT1cInRcIj09PXJ0LnZhbHVlO3ZhciBwdCxkdD1TLmV4cHIuYXR0ckhhbmRsZTtTLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsUy5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9TLnByb3AoZSx0LG4pOigxPT09byYmUy5pc1hNTERvYyhlKXx8KGk9Uy5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KFMuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/cHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIFMucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9Uy5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF2LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChQKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxwdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/Uy5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sUy5lYWNoKFMuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWR0W3RdfHxTLmZpbmQuYXR0cjtkdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZHRbb10sZHRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxkdFtvXT1pKSxyfX0pO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB5dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1TLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsUy5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tTLnByb3BGaXhbZV18fGVdfSl9fSksUy5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwodD1TLnByb3BGaXhbdF18fHQsaT1TLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpodC50ZXN0KGUubm9kZU5hbWUpfHxndC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHYub3B0U2VsZWN0ZWR8fChTLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksUy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe1MucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxTLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOihlPW10KHQpKS5sZW5ndGg/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocj12dCh0aGlzKSxuPTE9PT10aGlzLm5vZGVUeXBlJiZcIiBcIit5dChyKStcIiBcIil7Zm9yKG89MDtvPGUubGVuZ3RoO28rKylpPWVbb10sbi5pbmRleE9mKFwiIFwiK2krXCIgXCIpPDAmJihuKz1pK1wiIFwiKTthPXl0KG4pLHIhPT1hJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fSk6dGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOmFyZ3VtZW50cy5sZW5ndGg/KGU9bXQodCkpLmxlbmd0aD90aGlzLmVhY2goZnVuY3Rpb24oKXtpZihyPXZ0KHRoaXMpLG49MT09PXRoaXMubm9kZVR5cGUmJlwiIFwiK3l0KHIpK1wiIFwiKXtmb3Iobz0wO288ZS5sZW5ndGg7bysrKXtpPWVbb107d2hpbGUoLTE8bi5pbmRleE9mKFwiIFwiK2krXCIgXCIpKW49bi5yZXBsYWNlKFwiIFwiK2krXCIgXCIsXCIgXCIpfWE9eXQobiksciE9PWEmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19KTp0aGlzOnRoaXMuYXR0cihcImNsYXNzXCIsXCJcIil9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKHQsbil7dmFyIGUscixpLG8sYT10eXBlb2YgdCxzPVwic3RyaW5nXCI9PT1hfHxBcnJheS5pc0FycmF5KHQpO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnRvZ2dsZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcyksbiksbil9KTpcImJvb2xlYW5cIj09dHlwZW9mIG4mJnM/bj90aGlzLmFkZENsYXNzKHQpOnRoaXMucmVtb3ZlQ2xhc3ModCk6KGU9bXQodCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocylmb3Iobz1TKHRoaXMpLGk9MDtpPGUubGVuZ3RoO2krKylyPWVbaV0sby5oYXNDbGFzcyhyKT9vLnJlbW92ZUNsYXNzKHIpOm8uYWRkQ2xhc3Mocik7ZWxzZSB2b2lkIDAhPT10JiZcImJvb2xlYW5cIiE9PWF8fCgocj12dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsciksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixyfHwhMT09PXQ/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSkpfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit5dCh2dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp5dChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0sdi5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx2LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD15LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD15LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx2LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0LG47aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7fXJldHVybiBuPXQmJnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXSx0JiYhbnx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIisobj9TLm1hcChuLmNoaWxkTm9kZXMsZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dENvbnRlbnR9KS5qb2luKFwiXFxuXCIpOmUpKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBqdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8U3QudGVzdChuKT9pKG4sdCk6anQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpanQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpanQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBEdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uICR0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gQnQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/QnQoQnQoZSxTLmFqYXhTZXR0aW5ncyksdCk6QnQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx5PVMuYWpheFNldHVwKHt9LHQpLHY9eS5jb250ZXh0fHx5LG09eS5jb250ZXh0JiYodi5ub2RlVHlwZXx8di5qcXVlcnkpP1Modik6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz15LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHkubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHkudXJsPSgoZXx8eS51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx5LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8eS5tZXRob2R8fHkudHlwZSx5LmRhdGFUeXBlcz0oeS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT15LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj15LnVybCxyLmhyZWY9ci5ocmVmLHkuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt5LmNyb3NzRG9tYWluPSEwfX1pZih5LmRhdGEmJnkucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB5LmRhdGEmJih5LmRhdGE9Uy5wYXJhbSh5LmRhdGEseS50cmFkaXRpb25hbCkpLCR0KFJ0LHksdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmeS5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIikseS50eXBlPXkudHlwZS50b1VwcGVyQ2FzZSgpLHkuaGFzQ29udGVudD0hT3QudGVzdCh5LnR5cGUpLGY9eS51cmwucmVwbGFjZShxdCxcIlwiKSx5Lmhhc0NvbnRlbnQ/eS5kYXRhJiZ5LnByb2Nlc3NEYXRhJiYwPT09KHkuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih5LmRhdGE9eS5kYXRhLnJlcGxhY2UoRHQsXCIrXCIpKToobz15LnVybC5zbGljZShmLmxlbmd0aCkseS5kYXRhJiYoeS5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHkuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikreS5kYXRhLGRlbGV0ZSB5LmRhdGEpLCExPT09eS5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx5LnVybD1mK28pLHkuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwoeS5kYXRhJiZ5Lmhhc0NvbnRlbnQmJiExIT09eS5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHkuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHkuZGF0YVR5cGVzWzBdJiZ5LmFjY2VwdHNbeS5kYXRhVHlwZXNbMF1dP3kuYWNjZXB0c1t5LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09eS5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp5LmFjY2VwdHNbXCIqXCJdKSx5LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGkseS5oZWFkZXJzW2ldKTtpZih5LmJlZm9yZVNlbmQmJighMT09PXkuYmVmb3JlU2VuZC5jYWxsKHYsVCx5KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh5LmNvbXBsZXRlKSxULmRvbmUoeS5zdWNjZXNzKSxULmZhaWwoeS5lcnJvciksYz0kdChNdCx5LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1QseV0pLGgpcmV0dXJuIFQ7eS5hc3luYyYmMDx5LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx5LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0oeSxULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIseS5kYXRhVHlwZXMpJiZTLmluQXJyYXkoXCJqc29uXCIseS5kYXRhVHlwZXMpPDAmJih5LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0oeSxzLFQsaSksaT8oeS5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoUy5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXkudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgodixbbyxsLFRdKTp4LnJlamVjdFdpdGgodixbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QseSxpP286YV0pLGIuZmlyZVdpdGgodixbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHldKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxTLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVModGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PVMuYWpheFNldHRpbmdzLnhocigpO3YuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQsdi5hamF4PXp0PSEhenQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYodi5jb3JzfHx6dCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KF90W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksUy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVXQsWHQ9W10sVnQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztTLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1YdC5wb3AoKXx8Uy5leHBhbmRvK1wiX1wiK0N0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLFMuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVnQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlZ0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVnQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oRXQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8Uy5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx2LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFV0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVV0LmNoaWxkTm9kZXMubGVuZ3RoKSxTLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwodi5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJlMobykucmVtb3ZlKCksUy5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxTLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPXl0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmUy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sUy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9Uy5jc3MoZSxcInBvc2l0aW9uXCIpLGM9UyhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPVMuY3NzKGUsXCJ0b3BcIiksdT1TLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixTLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTpjLmNzcyhmKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtTLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1TLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9Uy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1TLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Uy5jc3NIb29rc1tuXT1fZSh2LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PUJlKGUsbiksUGUudGVzdCh0KT9TKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe1MuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/Uy5jc3MoZSx0LGkpOlMuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLFMuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtTLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgR3Q9L15bXFxzXFx1RkVGRlxceEEwXSt8KFteXFxzXFx1RkVGRlxceEEwXSlbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIiQxXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVl0KSxTfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1TKSxTfSk7XG4iLCIvKiFcbiAgKiBCb290c3RyYXAgdjUuMi4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmJvb3RzdHJhcCA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9pbmRleC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xuICBjb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7XG4gIGNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnOyAvLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcblxuICBjb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBgJHtvYmplY3R9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH07XG4gIC8qKlxuICAgKiBQdWJsaWMgVXRpbCBBUElcbiAgICovXG5cblxuICBjb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICAgIGRvIHtcbiAgICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcblxuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpOyAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcblxuICAgICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcblxuXG4gICAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gaHJlZkF0dHJpYnV0ZS50cmltKCkgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcblxuICBjb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbDtcbiAgfTtcblxuICBjb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuXG5cbiAgICBsZXQge1xuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5XG4gICAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7IC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcblxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcblxuXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF07XG4gICAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUjtcbiAgfTtcblxuICBjb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcbiAgfTtcblxuICBjb25zdCBpc0VsZW1lbnQkMSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmplY3QgPSBvYmplY3RbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIGNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gICAgaWYgKGlzRWxlbWVudCQxKG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWlzRWxlbWVudCQxKGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJzsgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcblxuICAgIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKTtcblxuICAgIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGU7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKTtcblxuICAgICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICB9O1xuXG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuXG5cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcblxuXG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9O1xuXG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiAgLyoqXG4gICAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAgICovXG5cblxuICBjb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgfTtcblxuICBjb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgICByZXR1cm4gd2luZG93LmpRdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW107XG5cbiAgY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCc7XG5cbiAgY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgIGlmICgkKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRTtcbiAgICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXTtcbiAgICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG4gICAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW47XG5cbiAgICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZXhlY3V0ZSA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gICAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNTtcbiAgICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nO1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoe1xuICAgICAgdGFyZ2V0XG4gICAgfSkgPT4ge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSwgZW11bGF0ZWREdXJhdGlvbik7XG4gIH07XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAgICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICAgKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAgICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAgICovXG5cblxuICBjb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICAgIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudCk7IC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXTtcbiAgICB9XG5cbiAgICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xO1xuXG4gICAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV07XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qLztcbiAgY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovO1xuICBjb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvO1xuICBjb25zdCBldmVudFJlZ2lzdHJ5ID0ge307IC8vIEV2ZW50cyBzdG9yYWdlXG5cbiAgbGV0IHVpZEV2ZW50ID0gMTtcbiAgY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICAgIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbiAgfTtcbiAgY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNldXAnLCAnbW91c2Vkb3duJywgJ2NvbnRleHRtZW51JywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlbW92ZScsICdzZWxlY3RzdGFydCcsICdzZWxlY3RlbmQnLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdvcmllbnRhdGlvbmNoYW5nZScsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmxlYXZlJywgJ3BvaW50ZXJjYW5jZWwnLCAnZ2VzdHVyZXN0YXJ0JywgJ2dlc3R1cmVjaGFuZ2UnLCAnZ2VzdHVyZWVuZCcsICdmb2N1cycsICdibHVyJywgJ2NoYW5nZScsICdyZXNldCcsICdzZWxlY3QnLCAnc3VibWl0JywgJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnLCAnbG9hZCcsICd1bmxvYWQnLCAnYmVmb3JldW5sb2FkJywgJ3Jlc2l6ZScsICdtb3ZlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAncmVhZHlzdGF0ZWNoYW5nZScsICdlcnJvcicsICdhYm9ydCcsICdzY3JvbGwnXSk7XG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICovXG5cbiAgZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICAgIHJldHVybiB1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWAgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudWlkRXZlbnQgPSB1aWQ7XG4gICAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9O1xuICAgIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XG4gIH1cblxuICBmdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHtcbiAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgICAgZm9yIChsZXQge1xuICAgICAgICB0YXJnZXRcbiAgICAgIH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cykuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZyc7IC8vIHRvZG86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuXG4gICAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uO1xuICAgIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpO1xuXG4gICAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTsgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAgIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuXG4gICAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pO1xuICAgIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuXG4gICAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKTtcbiAgICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID8gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDogYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSk7XG4gICAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbDtcbiAgICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlO1xuICAgIGZuLm9uZU9mZiA9IG9uZU9mZjtcbiAgICBmbi51aWRFdmVudCA9IHVpZDtcbiAgICBoYW5kbGVyc1t1aWRdID0gZm47XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcik7XG5cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSk7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlcktleSBvZiBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XTtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gICAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICAgIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xuICAgIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50O1xuICB9XG5cbiAgY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbik7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpO1xuXG4gICAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrZXlIYW5kbGVycyBvZiBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpO1xuXG4gICAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXTtcbiAgICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KTtcbiAgICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudDtcbiAgICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGw7XG4gICAgICBsZXQgYnViYmxlcyA9IHRydWU7XG4gICAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlO1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKTtcbiAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KTtcbiAgICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBldnQgPSBuZXcgRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBldnQgPSBoeWRyYXRlT2JqKGV2dCwgYXJncyk7XG5cbiAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH1cblxuICB9O1xuXG4gIGZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSB8fCB7fSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9kYXRhLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuICBjb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCBEYXRhID0ge1xuICAgIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7IC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcblxuICAgICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgIH0sXG5cbiAgICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcbiAgICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpOyAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcblxuICAgICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBjb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApO1xuICAgIH0sXG5cbiAgICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKTtcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKTtcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9LFxuXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKTtcbiAgICB9XG5cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2NvbmZpZy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbmZpZyB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJyk7XG4gICAgfVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG5cbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9OyAvLyB0cnkgdG8gcGFyc2VcblxuICAgICAgcmV0dXJuIHsgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgICAgLi4uKGlzRWxlbWVudCQxKGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCQxKHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogYmFzZS1jb21wb25lbnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFZFUlNJT04gPSAnNS4yLjMnO1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcblxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuXG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCk7XG4gICAgfVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudCk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG5cbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyB0aGlzKGVsZW1lbnQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICAgIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gO1xuICAgIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRTtcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpOyAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuXG4gICAgICBpbnN0YW5jZVttZXRob2RdKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogYWxlcnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZiA9ICdhbGVydCc7XG4gIGNvbnN0IERBVEFfS0VZJGEgPSAnYnMuYWxlcnQnO1xuICBjb25zdCBFVkVOVF9LRVkkYiA9IGAuJHtEQVRBX0tFWSRhfWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkNSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDggPSAnc2hvdyc7XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGY7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICBjb25zdCBjbG9zZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0UpO1xuXG4gICAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcblxuICAgICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQ1KTtcblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGJ1dHRvbi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRlID0gJ2J1dHRvbic7XG4gIGNvbnN0IERBVEFfS0VZJDkgPSAnYnMuYnV0dG9uJztcbiAgY29uc3QgRVZFTlRfS0VZJGEgPSBgLiR7REFUQV9LRVkkOX1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNiA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQzID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJztcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNiA9IGBjbGljayR7RVZFTlRfS0VZJGF9JHtEQVRBX0FQSV9LRVkkNn1gO1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQzKSk7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1LCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1KTtcbiAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKTtcbiAgICBkYXRhLnRvZ2dsZSgpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpO1xuICAgIH0sXG5cbiAgICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICB9LFxuXG4gICAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9LFxuXG4gICAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuXG4gICAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuXG4gICAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlcyA9IFsnYScsICdidXR0b24nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2RldGFpbHMnLCAnW3RhYmluZGV4XScsICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKTtcbiAgICB9XG5cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL3N3aXBlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGQgPSAnc3dpcGUnO1xuICBjb25zdCBFVkVOVF9LRVkkOSA9ICcuYnMuc3dpcGUnO1xuICBjb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJztcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCc7XG4gIGNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuICBjb25zdCBEZWZhdWx0JGMgPSB7XG4gICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgbGVmdENhbGxiYWNrOiBudWxsLFxuICAgIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTd2lwZSBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KTtcblxuICAgICAgdGhpcy5faW5pdEV2ZW50cygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRjO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRkO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSQ5KTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKTtcblxuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIF9tb3ZlKGV2ZW50KSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/IDAgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVg7XG4gICAgfVxuXG4gICAgX2hhbmRsZVN3aXBlKCkge1xuICAgICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKTtcblxuICAgICAgaWYgKGFic0RlbHRhWCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVg7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuXG4gICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV4ZWN1dGUoZGlyZWN0aW9uID4gMCA/IHRoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrIDogdGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgX2luaXRFdmVudHMoKSB7XG4gICAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCk7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogY2Fyb3VzZWwuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYyA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IERBVEFfS0VZJDggPSAnYnMuY2Fyb3VzZWwnO1xuICBjb25zdCBFVkVOVF9LRVkkOCA9IGAuJHtEQVRBX0tFWSQ4fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZJDEgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZJDEgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG4gIGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG4gIGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuICBjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICBjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOJDEgPSBga2V5ZG93biR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiQxID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUkMSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQzID0gYGxvYWQke0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IGBjbGljayR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMiA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnO1xuICBjb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnO1xuICBjb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldic7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTTtcbiAgY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJztcbiAgY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgICBbQVJST1dfTEVGVF9LRVkkMV06IERJUkVDVElPTl9SSUdIVCxcbiAgICBbQVJST1dfUklHSFRfS0VZJDFdOiBESVJFQ1RJT05fTEVGVFxuICB9O1xuICBjb25zdCBEZWZhdWx0JGIgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgcmlkZTogZmFsc2UsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgd3JhcDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRiID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICB0b3VjaDogJ2Jvb2xlYW4nLFxuICAgIHdyYXA6ICdib29sZWFuJ1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRiO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGM7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgbmV4dCgpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuICAgIH1cblxuICAgIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGN5Y2xlKCkge1xuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jeWNsZSgpO1xuICAgIH1cblxuICAgIHRvKGluZGV4KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKCk7XG5cbiAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSk7XG5cbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcblxuICAgICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOJDEsIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiQxLCAoKSA9PiB0aGlzLnBhdXNlKCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSQxLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cblxuICAgICAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICAgIH07XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XTtcblxuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuXG4gICAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApO1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKTtcblxuICAgICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFQ7XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcCk7XG5cbiAgICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKTtcblxuICAgICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIC8vIHRvZG86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleCk7XG5cbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EO1xuICAgICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVY7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgIHJlZmxvdyhuZXh0RWxlbWVudCk7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG5cbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpO1xuICAgIH1cblxuICAgIF9nZXRBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2dldEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgfVxuXG4gICAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVDtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgZGF0YS50byhjb25maWcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ1LCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpO1xuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpO1xuXG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgICAgY2Fyb3VzZWwubmV4dCgpO1xuXG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwucHJldigpO1xuXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcblxuICAgIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogY29sbGFwc2UuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYiA9ICdjb2xsYXBzZSc7XG4gIGNvbnN0IERBVEFfS0VZJDcgPSAnYnMuY29sbGFwc2UnO1xuICBjb25zdCBFVkVOVF9LRVkkNyA9IGAuJHtEQVRBX0tFWSQ3fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ0ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNiA9IGBzaG93JHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ2ID0gYHNob3duJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9ISURFJDYgPSBgaGlkZSR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDYgPSBgaGlkZGVuJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0ID0gYGNsaWNrJHtFVkVOVF9LRVkkN30ke0RBVEFfQVBJX0tFWSQ0fWA7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ3ID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xuICBjb25zdCBDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiA9IGA6c2NvcGUgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0hPUklaT05UQUwgPSAnY29sbGFwc2UtaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFdJRFRIID0gJ3dpZHRoJztcbiAgY29uc3QgSEVJR0hUID0gJ2hlaWdodCc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSc7XG4gIGNvbnN0IERlZmF1bHQkYSA9IHtcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgdG9nZ2xlOiB0cnVlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJGEgPSB7XG4gICAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknLFxuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdG9nZ2xlTGlzdCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKS5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKCk7XG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0aGlzLl9pc1Nob3duKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRiO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXTsgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUykuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCkubWFwKGVsZW1lbnQgPT4gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgICAgdG9nZ2xlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDYpO1xuXG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuXG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0cnVlKTtcblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1ckNyk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDYpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gO1xuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGA7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDYpO1xuXG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGA7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XJDcpO1xuXG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDYpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cblxuICAgIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDcpO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuXG4gICAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFQ7XG4gICAgfVxuXG4gICAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudCk7IC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG5cbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH1cblxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICBjb25zdCBfY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2VsZWN0b3JFbGVtZW50cykge1xuICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgIH0pLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKTtcblxuICB2YXIgdG9wID0gJ3RvcCc7XG4gIHZhciBib3R0b20gPSAnYm90dG9tJztcbiAgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbiAgdmFyIGxlZnQgPSAnbGVmdCc7XG4gIHZhciBhdXRvID0gJ2F1dG8nO1xuICB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbiAgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbiAgdmFyIGVuZCA9ICdlbmQnO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG4gIHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG4gIHZhciBwb3BwZXIgPSAncG9wcGVyJztcbiAgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuICB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTtcbiAgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xuICB9LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbiAgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG4gIHZhciByZWFkID0gJ3JlYWQnO1xuICB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbiAgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG4gIHZhciBtYWluID0gJ21haW4nO1xuICB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuICB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuICB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuICB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbiAgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG4gIGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAgIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gICAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuICB9XG5cbiAgLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG4gIGZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gICAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXBwbHlTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGFwcGx5U3R5bGVzLFxuICAgIGVmZmVjdDogZWZmZWN0JDIsXG4gICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIH1cblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuICBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcykge1xuICAgICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICAgIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICAgIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICAgIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gICAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICAgIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gICAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdG9wOiB5LFxuICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbiAgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gICAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAgIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gICAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gICAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgICBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgfSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuICAvLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gICAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblxuICAgIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpO1xuXG4gICAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgICB9XG5cbiAgICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuICAvLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG4gIH1cbiAgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gICAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gaGFzaE1hcDtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gICAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiBwYWRkaW5nO1xuICAgIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gICAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICAgIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICAgIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAgIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICAgIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICAgIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICAgIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICAgIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICAgIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gICAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gICAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGFycm93JDEgPSB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGFycm93LFxuICAgIGVmZmVjdDogZWZmZWN0JDEsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuICB9XG5cbiAgdmFyIHVuc2V0U2lkZXMgPSB7XG4gICAgdG9wOiAnYXV0bycsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBsZWZ0OiAnYXV0bydcbiAgfTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbiAgLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbiAgLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbiAgZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICAgIHZhciB4ID0gX3JlZi54LFxuICAgICAgICB5ID0gX3JlZi55O1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICAgIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSkgOiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG5cbiAgICB4ID0gX3JlZjMueDtcbiAgICB5ID0gX3JlZjMueTtcbiAgICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgICB2YXIgc2lkZVggPSBsZWZ0O1xuICAgIHZhciBzaWRlWSA9IHRvcDtcbiAgICB2YXIgd2luID0gd2luZG93O1xuXG4gICAgaWYgKGFkYXB0aXZlKSB7XG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgICAgfVxuICAgICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gICAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmNC54O1xuICAgIHkgPSBfcmVmNC55O1xuXG4gICAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBjb21wdXRlU3R5bGVzJDEgPSB7XG4gICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgZm46IGNvbXB1dGVTdHlsZXMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgcGFzc2l2ZSA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICAgIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfVxuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnd3JpdGUnLFxuICAgIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICAgIGVmZmVjdDogZWZmZWN0LFxuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgdmFyIGhhc2gkMSA9IHtcbiAgICBsZWZ0OiAncmlnaHQnLFxuICAgIHJpZ2h0OiAnbGVmdCcsXG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc2ggPSB7XG4gICAgc3RhcnQ6ICdlbmQnLFxuICAgIGVuZDogJ3N0YXJ0J1xuICB9O1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAgIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAgIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgICAvLyBhbnl3YXkuXG4gICAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICAgIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgICB2YXIgeCA9IDA7XG4gICAgdmFyIHkgPSAwO1xuXG4gICAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICAgIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gICAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAgIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCksXG4gICAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICAgIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG4gIH1cblxuICAvKlxuICBnaXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xuICB1bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xuICB0bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG4gIHJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4gICovXG5cbiAgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgICBsaXN0ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gICAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gICAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgdG9wOiByZWN0LnksXG4gICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gICAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgICByZWN0LnkgPSByZWN0LnRvcDtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbiAgfSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuICAvLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbiAgLy8gYGluaXRpYWxgXG5cblxuICBmdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gICAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgICB9KTtcbiAgfSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4gIC8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICAgIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgICByZXR1cm4gYWNjUmVjdDtcbiAgICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICAgIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICByZXR1cm4gY2xpcHBpbmdSZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICAgIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICAgIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gICAgdmFyIG9mZnNldHM7XG5cbiAgICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgdG9wOlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBib3R0b206XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgcmlnaHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgICAgeTogY29tbW9uWVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBsZWZ0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGVuZDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICAgIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgICB9O1xuICAgIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICAgIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gICAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICAgIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gICAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gICAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gICAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICAgIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICAgIH0pIDogcGxhY2VtZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSk7XG4gICAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICB9KSkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gICAgfVxuXG4gICAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZmxpcCQxID0ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGZsaXAsXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgICBkYXRhOiB7XG4gICAgICBfc2tpcDogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gICAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICAgIH0pO1xuICAgIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gICAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gICAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gICAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9O1xuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBoaWRlJDEgPSB7XG4gICAgbmFtZTogJ2hpZGUnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICAgIGZuOiBoaWRlXG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gICAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgIH0pKSA6IG9mZnNldCxcbiAgICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gICAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgICB4OiBkaXN0YW5jZSxcbiAgICAgIHk6IHNraWRkaW5nXG4gICAgfSA6IHtcbiAgICAgIHg6IHNraWRkaW5nLFxuICAgICAgeTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICAgIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3Qgb2Zmc2V0JDEgPSB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgICBmbjogb2Zmc2V0XG4gIH07XG5cbiAgZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAgIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICAgIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAncmVhZCcsXG4gICAgZm46IHBvcHBlck9mZnNldHMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gICAgfSk7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICAgIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYWluQXhpczogMCxcbiAgICAgIGFsdEF4aXM6IDBcbiAgICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cblxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbiAgfSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4gIC8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG4gIGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICAgIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICAgIHZhciBzY3JvbGwgPSB7XG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfTtcbiAgICB2YXIgb2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gICAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICAgIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gICAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gICAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgICB9KSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgICB2YXIgcGVuZGluZztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgICAgfSkgOiBjdXJyZW50O1xuICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1vZGlmaWVyczogW10sXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbiAgfTtcblxuICBmdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIHN0eWxlczoge31cbiAgICAgIH07XG4gICAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG5cbiAgICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgICAgLy8gbG9naWMuXG4gICAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgICAvLyBvbmUuXG5cbiAgICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG4gIHZhciBjcmVhdGVQb3BwZXIkMiA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIHZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG4gIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICAgIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICBjb25zdCBQb3BwZXIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSgvKiNfX1BVUkVfXyovT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgcG9wcGVyR2VuZXJhdG9yLFxuICAgIGRldGVjdE92ZXJmbG93LFxuICAgIGNyZWF0ZVBvcHBlckJhc2U6IGNyZWF0ZVBvcHBlciQyLFxuICAgIGNyZWF0ZVBvcHBlcixcbiAgICBjcmVhdGVQb3BwZXJMaXRlOiBjcmVhdGVQb3BwZXIkMSxcbiAgICB0b3AsXG4gICAgYm90dG9tLFxuICAgIHJpZ2h0LFxuICAgIGxlZnQsXG4gICAgYXV0byxcbiAgICBiYXNlUGxhY2VtZW50cyxcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgY2xpcHBpbmdQYXJlbnRzLFxuICAgIHZpZXdwb3J0LFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgdmFyaWF0aW9uUGxhY2VtZW50cyxcbiAgICBwbGFjZW1lbnRzLFxuICAgIGJlZm9yZVJlYWQsXG4gICAgcmVhZCxcbiAgICBhZnRlclJlYWQsXG4gICAgYmVmb3JlTWFpbixcbiAgICBtYWluLFxuICAgIGFmdGVyTWFpbixcbiAgICBiZWZvcmVXcml0ZSxcbiAgICB3cml0ZSxcbiAgICBhZnRlcldyaXRlLFxuICAgIG1vZGlmaWVyUGhhc2VzLFxuICAgIGFwcGx5U3R5bGVzOiBhcHBseVN0eWxlcyQxLFxuICAgIGFycm93OiBhcnJvdyQxLFxuICAgIGNvbXB1dGVTdHlsZXM6IGNvbXB1dGVTdHlsZXMkMSxcbiAgICBldmVudExpc3RlbmVycyxcbiAgICBmbGlwOiBmbGlwJDEsXG4gICAgaGlkZTogaGlkZSQxLFxuICAgIG9mZnNldDogb2Zmc2V0JDEsXG4gICAgcG9wcGVyT2Zmc2V0czogcG9wcGVyT2Zmc2V0cyQxLFxuICAgIHByZXZlbnRPdmVyZmxvdzogcHJldmVudE92ZXJmbG93JDFcbiAgfSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogZHJvcGRvd24uanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYSA9ICdkcm9wZG93bic7XG4gIGNvbnN0IERBVEFfS0VZJDYgPSAnYnMuZHJvcGRvd24nO1xuICBjb25zdCBFVkVOVF9LRVkkNiA9IGAuJHtEQVRBX0tFWSQ2fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMiA9ICdFc2NhcGUnO1xuICBjb25zdCBUQUJfS0VZJDEgPSAnVGFiJztcbiAgY29uc3QgQVJST1dfVVBfS0VZJDEgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZJDEgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjsgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuICBjb25zdCBFVkVOVF9ISURFJDUgPSBgaGlkZSR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDUgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDUgPSBgc2hvdyR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNSA9IGBzaG93biR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMyA9IGBjbGljayR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDYgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzfS4ke0NMQVNTX05BTUVfU0hPVyQ2fWA7XG4gIGNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnO1xuICBjb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nO1xuICBjb25zdCBEZWZhdWx0JDkgPSB7XG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYycsXG4gICAgb2Zmc2V0OiBbMCwgMl0sXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkOSA9IHtcbiAgICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGRpc3BsYXk6ICdzdHJpbmcnLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlOyAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjIvZm9ybXMvaW5wdXQtZ3JvdXAvXG5cbiAgICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkOTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNSwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNSwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJyk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgfVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50JDEoY29uZmlnLnJlZmVyZW5jZSkgJiYgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRSRhLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50JDEodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCk7XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpO1xuICAgIH1cblxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICB9XG5cbiAgICBfZ2V0UGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnQ7XG5cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVI7XG4gICAgICB9IC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuXG5cbiAgICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJztcblxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1A7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NO1xuICAgIH1cblxuICAgIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGw7XG4gICAgfVxuXG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9OyAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG5cbiAgICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpOyAvLyB0b2RvOnY2IHJlbW92ZVxuXG4gICAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICAgIH07XG4gICAgfVxuXG4gICAgX3NlbGVjdE1lbnVJdGVtKHtcbiAgICAgIGtleSxcbiAgICAgIHRhcmdldFxuICAgIH0pIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpO1xuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcblxuXG4gICAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZJDEsICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpO1xuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZJDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvcGVuVG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04pO1xuXG4gICAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKTtcblxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG5cblxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSQxIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgLy8gSWYgbm90IGFuIFVQIHwgRE9XTiB8IEVTQ0FQRSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKTtcbiAgICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMjtcbiAgICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVkkMSwgQVJST1dfRE9XTl9LRVkkMV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcblxuICAgICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMi9mb3Jtcy9pbnB1dC1ncm91cC9cblxuICAgICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKVswXSB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbik7XG5cbiAgICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcblxuICAgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHtcbiAgICAgICAgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKCk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9zY3JvbGxCYXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJztcbiAgY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0JztcbiAgY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCc7XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcblxuICAgICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KCk7IC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcblxuXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpOyAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG5cblxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcblxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG5cbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORyk7XG5cbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORyk7XG5cbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTik7XG4gICAgfVxuXG4gICAgaXNPdmVyZmxvd2luZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcblxuICAgICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjayk7XG4gICAgfVxuXG4gICAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuXG4gICAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTsgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuICAgIH1cblxuICAgIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgICAgaWYgKGlzRWxlbWVudCQxKHNlbGVjdG9yKSkge1xuICAgICAgICBjYWxsQmFjayhzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgY2FsbEJhY2soc2VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvYmFja2Ryb3AuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOSA9ICdiYWNrZHJvcCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ0ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNSA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUUkOX1gO1xuICBjb25zdCBEZWZhdWx0JDggPSB7XG4gICAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gICAgaXNBbmltYXRlZDogZmFsc2UsXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gICAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG5cbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ4O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkODtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ5O1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHNob3coY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hcHBlbmQoKTtcblxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIHJlZmxvdyhlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ1KTtcblxuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ1KTtcblxuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTik7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2dldEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSQ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgX2FwcGVuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9mb2N1c3RyYXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOCA9ICdmb2N1c3RyYXAnO1xuICBjb25zdCBEQVRBX0tFWSQ1ID0gJ2JzLmZvY3VzdHJhcCc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ1ID0gYC4ke0RBVEFfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQyID0gYGZvY3VzaW4ke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVkkNX1gO1xuICBjb25zdCBUQUJfS0VZID0gJ1RhYic7XG4gIGNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJztcbiAgY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCc7XG4gIGNvbnN0IERlZmF1bHQkNyA9IHtcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2ZcblxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ3ID0ge1xuICAgIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICAgIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkODtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkkNSk7IC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuXG4gICAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4kMiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJhcEVsZW1lbnRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpO1xuXG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRyYXBFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogbW9kYWwuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNyA9ICdtb2RhbCc7XG4gIGNvbnN0IERBVEFfS0VZJDQgPSAnYnMubW9kYWwnO1xuICBjb25zdCBFVkVOVF9LRVkkNCA9IGAuJHtEQVRBX0tFWSQ0fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQyID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xuICBjb25zdCBFVkVOVF9ISURFJDQgPSBgaGlkZSR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQkMSA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNCA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNCA9IGBzaG93JHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ0ID0gYHNob3duJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9SRVNJWkUkMSA9IGByZXNpemUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyQxID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IGBjbGljayR7RVZFTlRfS0VZJDR9JHtEQVRBX0FQSV9LRVkkMn1gO1xuICBjb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNCA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiQxID0gJy5tb2RhbC5zaG93JztcbiAgY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5JztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIGNvbnN0IERlZmF1bHQkNiA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ2O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ3O1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cblxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ0LCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKCk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xuXG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblxuICAgICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBmb3IgKGNvbnN0IGh0bWxFbGVtZW50IG9mIFt3aW5kb3csIHRoaXMuX2RpYWxvZ10pIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZJDQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG5cbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG5cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSxcbiAgICAgICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKTtcblxuICAgICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cblxuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ0LCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUyQxLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFJDEsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTik7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpO1xuXG4gICAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQzKTtcbiAgICB9XG5cbiAgICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEJDEpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7IC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuXG4gICAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKTtcblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQyk7XG5cbiAgICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBpbml0aWFsT3ZlcmZsb3dZO1xuICAgICAgICB9LCB0aGlzLl9kaWFsb2cpO1xuICAgICAgfSwgdGhpcy5fZGlhbG9nKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgICAqL1xuXG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMDtcblxuICAgICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG5cbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XJDQsIHNob3dFdmVudCA9PiB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kNCwgKCkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cblxuICAgIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SJDEpO1xuXG4gICAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbCk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBvZmZjYW52YXMuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNiA9ICdvZmZjYW52YXMnO1xuICBjb25zdCBEQVRBX0tFWSQzID0gJ2JzLm9mZmNhbnZhcyc7XG4gIGNvbnN0IEVWRU5UX0tFWSQzID0gYC4ke0RBVEFfS0VZJDN9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQyID0gYGxvYWQke0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HJDEgPSAnc2hvd2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XJDMgPSBgc2hvdyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMyA9IGBzaG93biR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElERSQzID0gYGhpZGUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQzID0gYGhpZGRlbiR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSA9IGBjbGljayR7RVZFTlRfS0VZJDN9JHtEQVRBX0FQSV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSc7XG4gIGNvbnN0IERlZmF1bHQkNSA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzY3JvbGw6IGZhbHNlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDUgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNjcm9sbDogJ2Jvb2xlYW4nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCk7XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ1O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDY7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuXG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckMywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKTtcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HJDEpO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDMpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkckMSk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kMywge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDMpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmJsdXIoKTtcblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpO1xuXG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMywgQ0xBU1NfTkFNRV9ISURJTkcpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQzKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcblxuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcblxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9OyAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcblxuXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQxLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kMywgKCkgPT4ge1xuICAgICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7IC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDIsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KCk7XG4gICAgfVxuICB9KTtcbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvc2FuaXRpemVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXSk7XG4gIGNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAgICpcbiAgICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cblxuICBjb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZXxzbXMpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaTtcbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICAgKlxuICAgKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuXG4gIGNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pO1xuXG4gIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuXG5cbiAgICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKS5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBsaTogW10sXG4gICAgb2w6IFtdLFxuICAgIHA6IFtdLFxuICAgIHByZTogW10sXG4gICAgczogW10sXG4gICAgc21hbGw6IFtdLFxuICAgIHNwYW46IFtdLFxuICAgIHN1YjogW10sXG4gICAgc3VwOiBbXSxcbiAgICBzdHJvbmc6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXVxuICB9O1xuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gICAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuXG4gICAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJyk7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKTtcblxuICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ1ID0gJ1RlbXBsYXRlRmFjdG9yeSc7XG4gIGNvbnN0IERlZmF1bHQkNCA9IHtcbiAgICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gICAgY29udGVudDoge30sXG4gICAgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gICAgZXh0cmFDbGFzczogJycsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ0ID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgY29udGVudDogJ29iamVjdCcsXG4gICAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICAgIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDU7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG5cbiAgICBoYXNDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudCk7XG5cbiAgICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0geyAuLi50aGlzLl9jb25maWcuY29udGVudCxcbiAgICAgICAgLi4uY29udGVudFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvSHRtbCgpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtcblxuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXTtcblxuICAgICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKTtcblxuICAgICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfSAvLyBQcml2YXRlXG5cblxuICAgIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudCk7XG4gICAgfVxuXG4gICAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoe1xuICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgIGVudHJ5OiBjb250ZW50XG4gICAgICAgIH0sIERlZmF1bHRDb250ZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSk7XG5cbiAgICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpO1xuXG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VsZW1lbnQkMShjb250ZW50KSkge1xuICAgICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnO1xuICAgIH1cblxuICAgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKHRoaXMpIDogYXJnO1xuICAgIH1cblxuICAgIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHRvb2x0aXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNCA9ICd0b29sdGlwJztcbiAgY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMiA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJztcbiAgY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gO1xuICBjb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnO1xuICBjb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJztcbiAgY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cyc7XG4gIGNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snO1xuICBjb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnO1xuICBjb25zdCBFVkVOVF9ISURFJDIgPSAnaGlkZSc7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQyID0gJ2hpZGRlbic7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMiA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfU0hPV04kMiA9ICdzaG93bic7XG4gIGNvbnN0IEVWRU5UX0lOU0VSVEVEID0gJ2luc2VydGVkJztcbiAgY29uc3QgRVZFTlRfQ0xJQ0skMSA9ICdjbGljayc7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4kMSA9ICdmb2N1c2luJztcbiAgY29uc3QgRVZFTlRfRk9DVVNPVVQkMSA9ICdmb2N1c291dCc7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSAnbW91c2VlbnRlcic7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSAnbW91c2VsZWF2ZSc7XG4gIGNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCQzID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgKyAnPC9kaXY+JyxcbiAgICB0aXRsZTogJycsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQzID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7IC8vIFByaXZhdGVcblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGw7IC8vIFByb3RlY3RlZFxuXG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgICAgfVxuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ0O1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcigpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuXG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVyQyKSk7XG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAoc2hhZG93Um9vdCB8fCB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gdG9kbyB2NiByZW1vdmUgdGhpcyBPUiBtYWtlIGl0IG9wdGlvbmFsXG5cblxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuXG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9wcGVyID0gdGhpcy5fY3JlYXRlUG9wcGVyKHRpcCk7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMik7IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOJDIpKTtcblxuICAgICAgICBpZiAodGhpcy5faXNIb3ZlcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJREUkMikpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG5cbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQyKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGw7IC8vIGl0IGlzIGEgdHJpY2sgdG8gc3VwcG9ydCBtYW51YWwgdHJpZ2dlcmluZ1xuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURERU4kMikpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBQcm90ZWN0ZWRcblxuXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKTtcbiAgICB9XG5cbiAgICBfZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgICAgdGhpcy50aXAgPSB0aGlzLl9jcmVhdGVUaXBFbGVtZW50KHRoaXMuX25ld0NvbnRlbnQgfHwgdGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfVxuXG4gICAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpOyAvLyB0b2RvOiByZW1vdmUgdGhpcyBjaGVjayBvbiB2NlxuXG5cbiAgICAgIGlmICghdGlwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUkMiwgQ0xBU1NfTkFNRV9TSE9XJDIpOyAvLyB0b2RvOiBvbiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG5cbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApO1xuICAgICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO1xuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGlwO1xuICAgIH1cblxuICAgIHNldENvbnRlbnQoY29udGVudCkge1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuXG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkge1xuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG5ldyBUZW1wbGF0ZUZhY3RvcnkoeyAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgLy8gdGhlIGBjb250ZW50YCB2YXIgaGFzIHRvIGJlIGFmdGVyIGB0aGlzLl9jb25maWdgXG4gICAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBleHRyYUNsYXNzOiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5O1xuICAgIH1cblxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSkgfHwgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgfVxuXG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgIH1cblxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZVBvcHBlcih0aXApIHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLl9jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5fZWxlbWVudCkgOiB0aGlzLl9jb25maWcucGxhY2VtZW50O1xuICAgICAgY29uc3QgYXR0YWNobWVudCA9IEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSk7XG4gICAgfVxuXG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZy5jYWxsKHRoaXMuX2VsZW1lbnQpIDogYXJnO1xuICAgIH1cblxuICAgIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICAgIH07XG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRyaWdnZXJzKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0NMSUNLJDEpLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4kMSk7XG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVCQxKTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcblxuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlO1xuXG4gICAgICAgICAgICBjb250ZXh0Ll9lbnRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcblxuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgICAgICAgY29udGV4dC5fbGVhdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgX2ZpeFRpdGxlKCkge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpOyAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgIH1cblxuICAgIF9lbnRlcigpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkgfHwgdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH1cblxuICAgIF9sZWF2ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9XG5cbiAgICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpO1xuICAgIH1cblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGRhdGFBdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyaWJ1dGVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZyA9IHsgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH07XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuXG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgY29uc3QgY29uZmlnID0ge307XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuX2NvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLl9jb25maWdba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25maWcuc2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy50cmlnZ2VyID0gJ21hbnVhbCc7IC8vIEluIHRoZSBmdXR1cmUgY2FuIGJlIHJlcGxhY2VkIHdpdGg6XG4gICAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgdGhpcy50aXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHBvcG92ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMyA9ICdwb3BvdmVyJztcbiAgY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJztcbiAgY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5JztcbiAgY29uc3QgRGVmYXVsdCQyID0geyAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gICAgY29udGVudDogJycsXG4gICAgb2Zmc2V0OiBbMCwgOF0sXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICsgJzwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQyID0geyAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICAgIGNvbnRlbnQ6ICcobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMztcbiAgICB9IC8vIE92ZXJyaWRlc1xuXG5cbiAgICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgICB9O1xuICAgIH1cblxuICAgIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KTtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBQb3BvdmVyLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHNjcm9sbHNweS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQyID0gJ3Njcm9sbHNweSc7XG4gIGNvbnN0IERBVEFfS0VZJDIgPSAnYnMuc2Nyb2xsc3B5JztcbiAgY29uc3QgRVZFTlRfS0VZJDIgPSBgLiR7REFUQV9LRVkkMn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWSQyfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBgbG9hZCR7RVZFTlRfS0VZJDJ9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQxID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBEZWZhdWx0JDEgPSB7XG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gICAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDEgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsXG4gICAgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICAgIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICAgIHRhcmdldDogJ2VsZW1lbnQnLFxuICAgIHRocmVzaG9sZDogJ2FycmF5J1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7IC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcblxuICAgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWZyZXNoKCk7IC8vIGluaXRpYWxpemVcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMjtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpO1xuXG4gICAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpO1xuXG4gICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2VcbiAgICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHk7IC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcblxuICAgICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpbjtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKTtcblxuICAgICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3c7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3A7XG5cbiAgICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgICAgcm9vdC5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIHRvcDogaGVpZ2h0LFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG5cblxuICAgICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKTtcbiAgICB9IC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cblxuXG4gICAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApO1xuXG4gICAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcDtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3A7XG5cbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A7IC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuXG4gICAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgICAgYWN0aXZhdGUoZW50cnkpOyAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuXG4gICAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcblxuXG4gICAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgICBhY3RpdmF0ZShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldCk7XG5cbiAgICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShhbmNob3IuaGFzaCwgdGhpcy5fZWxlbWVudCk7IC8vIGVuc3VyZSB0aGF0IHRoZSBvYnNlcnZhYmxlU2VjdGlvbiBleGlzdHMgJiBpcyB2aXNpYmxlXG5cbiAgICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoYW5jaG9yLmhhc2gsIGFuY2hvcik7XG5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcHJvY2Vzcyh0YXJnZXQpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldCk7XG5cbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuXG4gICAgICB0aGlzLl9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KTtcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkUkMX1gLCBwYXJlbnQpO1xuXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSQxLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiB0YWIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMSA9ICd0YWInO1xuICBjb25zdCBEQVRBX0tFWSQxID0gJ2JzLnRhYic7XG4gIGNvbnN0IEVWRU5UX0tFWSQxID0gYC4ke0RBVEFfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfSElERSQxID0gYGhpZGUke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQxID0gYGhpZGRlbiR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyQxID0gYHNob3cke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDEgPSBgc2hvd24ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnO1xuICBjb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bic7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQxID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMSA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJzpub3QoLmRyb3Bkb3duLXRvZ2dsZSknO1xuICBjb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nOyAvLyB0b2RvOnY2OiBjb3VsZCBiZSBvbmx5IGB0YWJgXG5cbiAgY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYDtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKTtcblxuICAgICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB0b2RvOiBzaG91bGQgVGhyb3cgZXhjZXB0aW9uIG9uIHY2XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgICB9IC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuXG5cbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSk7XG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDE7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgc2hvdygpIHtcbiAgICAgIC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuXG5cbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKTtcblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID8gRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtXG4gICAgICB9KSA6IG51bGw7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1ckMSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBhY3RpdmVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSk7XG5cbiAgICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuXG4gICAgICB0aGlzLl9hY3RpdmF0ZShnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICBlbGVtZW50LmJsdXIoKTtcblxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZShnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuXG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICghW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKSwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpO1xuXG4gICAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoe1xuICAgICAgICAgIHByZXZlbnRTY3JvbGw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldENoaWxkcmVuKCkge1xuICAgICAgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0Jyk7XG5cbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZCk7XG5cbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKTtcblxuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKTtcblxuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpO1xuXG4gICAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpOyAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cblxuXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpO1xuICAgIH1cblxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpO1xuXG4gICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKTtcblxuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAjJHtjaGlsZC5pZH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKTtcbiAgICB9XG5cbiAgICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9IC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcblxuXG4gICAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSk7XG4gICAgfSAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG5cblxuICAgIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbTtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUYWIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHRvYXN0LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FID0gJ3RvYXN0JztcbiAgY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnO1xuICBjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJzsgLy8gQGRlcHJlY2F0ZWQgLSBrZXB0IGhlcmUgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuICBjb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJztcbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgICBkZWxheTogJ251bWJlcidcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYXV0b2hpZGU6IHRydWUsXG4gICAgZGVsYXk6IDUwMDBcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUU7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgc2hvdygpIHtcbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTik7XG5cbiAgICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuXG5cbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKTtcblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuXG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORyk7XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgfVxuXG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KTtcbiAgICB9XG5cbiAgICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICB9XG5cbiAgICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICBfY2xlYXJUaW1lb3V0KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGluZGV4LnVtZC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGluZGV4X3VtZCA9IHtcbiAgICBBbGVydCxcbiAgICBCdXR0b24sXG4gICAgQ2Fyb3VzZWwsXG4gICAgQ29sbGFwc2UsXG4gICAgRHJvcGRvd24sXG4gICAgTW9kYWwsXG4gICAgT2ZmY2FudmFzLFxuICAgIFBvcG92ZXIsXG4gICAgU2Nyb2xsU3B5LFxuICAgIFRhYixcbiAgICBUb2FzdCxcbiAgICBUb29sdGlwXG4gIH07XG5cbiAgcmV0dXJuIGluZGV4X3VtZDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcbiIsImZ1bmN0aW9uIGdldENhdGFsb2cgKCkge1xuXHRmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycpXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKGNhdGFsb2cgPT4ge1xuXG5cdFx0XHQvLyDQqNGC0YPRh9C90L4g0L7QsdGA0ZbQt9Cw0ZTQvNC+INCy0ZbQtNC/0L7QstGW0LTRjFxuXHRcdFx0Y29uc3QgY2F0YWxvZ1ZpZXcgPSBjYXRhbG9nLnNsaWNlKDAsIDEyKTtcblxuXHRcdFx0Ly8g0JfQvNGW0L3QvdCwINGP0LrQsCDQstGW0LTQv9C+0LLRltC00LDRlCDQt9CwINGB0L/QuNGB0L7QuiDQtNC+0LHQsNCy0LvQtdC90LjRhSDRgtC+0LLQsNGA0ZbQsiwg0Y/QutGWINC80Lgg0LHRg9C00LXQvNC+INCy0LjQstC+0LTQuNGC0Lhcblx0XHRcdGxldCBsaXN0UHJvZHVjdHMgPSAnJztcblxuXHRcdFx0Ly8g0JLQuNCy0L7QtNC40LzQviDQtNC+0LHQsNCy0LvQtdC90ZYg0YLQvtCy0LDRgNC4XG5cdFx0XHQkLmVhY2goY2F0YWxvZ1ZpZXcsIGZ1bmN0aW9uKGluZGV4LCBwcm9kdWN0KSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcblxuXG5cdFx0XHRcdC8vINCd0LDQv9C+0LLQvdGO0ZTQvNC+INC30LzRltC90L3RgyDRgtC+0LLQsNGA0LDQvNC4XG5cdFx0XHRcdGxpc3RQcm9kdWN0cyArPSBgPGRpdiBjbGFzcz1cImNhcmQtcHJvZHVjdCByYWRpdXMtNC1weFwiPlxuXHRcdFx0XHRcdFx0PGltZyBjbGFzcz1cImltZ1wiIGFsdD1cIlwiIHNyYz1cImltZy8xLmpwZ1wiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cInByb2R1Y3QuaHRtbD9pZD0ke3Byb2R1Y3QuaWR9XCIgY2xhc3M9XCJ0aXRsZVwiPiR7cHJvZHVjdC50aXRsZX08L2E+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImluZm8tdGV4dFwiPtCh0LrQu9Cw0LQs0LDQvdCz0LDRgNC4LNC+0YTRltGBLNC80LDQs9Cw0LfQuNC9LNC90ZbRh9C90LjQuSDQutC70YPQsSzRhNCw0YHRgtGE0YPQtCzRgNC10YHRgtC+0YDQsNC9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJwcmljZVwiPjxzcGFuIGNsYXNzPVwiYmlnIGZvbnQtYm9sZFwiPiR7cHJvZHVjdC5pZH0wMDwvc3Bhbj4g0LPRgNC9PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDAganMtYWRkLXByb2R1Y3RcIiBkYXRhLWlkPVwiJHtwcm9kdWN0LmlkfVwiIGRhdGEtdGl0bGU9XCIke3Byb2R1Y3QudGl0bGV9XCIgZGF0YS1wcmljZT1cIiR7cHJvZHVjdC5pZH0wMFwiIGRhdGEtaW1nPVwiMS5qcGdcIj7Ql9Cw0LzQvtCy0LjRgtC4PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+YDtcblx0XHRcdH0pO1xuXG5cblx0XHRcdC8vINCS0LjQstC+0LTQuNC80L4g0YHRhNC+0YDQvNC+0LLQsNC90LjQuSDRgdC/0LjRgdC+0Log0YLQvtCy0LDRgNGW0LIg0LIgaHRtbFxuXHRcdFx0JCgnLmpzLWNhdGFsb2ctbGlzdCcpLmh0bWwobGlzdFByb2R1Y3RzKTtcblxuXHRcdH0pXG5cdFx0LmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn1cblxuZ2V0Q2F0YWxvZygpOyIsIi8vINCa0LvRjtGHLCDRj9C60LjQuSDQstGW0LTQv9C+0LLRltC00LDRlCDQutC70Y7Rh9GDINCyIGxvY2Fsc3RvcmFnZVxuY29uc3QgY2FydEtleSA9ICdjYXJ0TGlzdCc7XG5cbi8vINCa0L7RgNC30LjQvdCwINC3INC00L7QsdCw0LLQu9C10L3QuNC80Lgg0YLQvtCy0LDRgNCw0LzQuFxuY29uc3QgY2FydCA9IGdldENhcnQoKTtcblxuXG4vLyDQn9C+0LrQsNC30LDRgtC4INCw0LHQviDQv9GA0LjRhdC+0LLQsNGC0Lgg0LrQvtGA0LfQuNC90YNcbiQoJy5qcy1zaG93LWNhcnQnKS5jbGljaygoKSA9PiAkKCcuanMtY2FydC1saXN0JykudG9nZ2xlQ2xhc3MoXCJoaWRlXCIpICk7XG5cblxuLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0LrQvtGA0LfQuNC90YMg0YMgbG9jYWxzdG9yZWdlIFxuZnVuY3Rpb24gc2F2ZUNhcnQoKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhcnRLZXksIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbn1cblxuLy8g0JLQuNCy0L7QtNC40LzQviDQt9Cx0LXRgNC10LbQtdC90ZYg0YLQvtCy0LDRgNC4INC60L7RgNC30LjQvdC4XG5mdW5jdGlvbiBnZXRDYXJ0KCkge1xuXHRsZXQgY2FydExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjYXJ0S2V5KTtcblx0Y2FydExpc3QgPSBKU09OLnBhcnNlKGNhcnRMaXN0KTtcblx0cmV0dXJuIChBcnJheS5pc0FycmF5KGNhcnRMaXN0KSkgPyBjYXJ0TGlzdCA6IFtdO1xufVxuXG4vLyDQktC40LLRltC0INGC0L7QstCw0YDRltCyINGDINC60L7RgNC30LjQvdGDIFxuZnVuY3Rpb24gdmlld1Byb2R1Y3RzKClcbntcblx0Ly8g0JfQvNGW0L3QvdCwINGP0LrQsCDQstGW0LTQv9C+0LLRltC00LDRlCDQt9CwINGB0L/QuNGB0L7QuiDQtNC+0LHQsNCy0LvQtdC90LjRhSDRgtC+0LLQsNGA0ZbQsiwg0Y/QutGWINC80Lgg0LHRg9C00LXQvNC+INCy0LjQstC+0LTQuNGC0Lhcblx0bGV0IGxpc3RQcm9kdWN0cyA9ICcnO1xuXHRcblx0Ly8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGUINCyINC90LDRgSDQvNCw0YHQuNCyINC3INC60L7RgNC30LjQvdC+0Y5cblx0aWYoIUFycmF5LmlzQXJyYXkoY2FydCkpXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgtC+0LLQsNGA0ZbQsiBcblx0bGV0IGNhcnRDb3VudCA9IGNhcnQubGVuZ3RoO1xuXHRcblx0Ly8g0K/QutGJ0L4g0L3QtdC80LDRlCDRgtC+0LLQsNGA0ZbQslxuXHRpZihjYXJ0Q291bnQgPT0gMCkge1xuXG5cdFx0Ly8g0KXQvtCy0LDRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGC0L7QstCw0YDRg1xuXHRcdCQoJy5qcy1jYXJ0LXN1bW0nKS5oaWRlKCk7XG5cblx0XHQvLyDQktC40LLQvtC00LjRgtC4IGh0bWwg0LrQvtGA0LfQuNC90LAg0L/Rg9GB0YLQsFxuXHRcdGxpc3RQcm9kdWN0cyA9IGA8bGkgY2xhc3M9XCJuby1yZXN1bHRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvZW1wdHktY2FydC5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cIm5vLXJlc3VsdF9faW1nXCI+XG5cdFx0XHRcdDxoMyBjbGFzcz1cIm5vLXJlc3VsdF9fdGl0bGVcIj7QmtC+0YDQt9C40L3QsCDQv9GD0YHRgtCwPC9oMz5cblx0XHRcdDwvbGk+YDtcblxuXHQvLyDQr9C60YnQviDRgtC+0LLQsNGA0Lgg0ZQgXG5cdH0gZWxzZSB7XG5cblx0XHQvLyDQn9C+0LrQsNC30YPRlCDQutGW0LvRjNC60ZbRgdGC0Ywg0YLQvtCy0LDRgNGDXG5cdFx0JCgnLmpzLWNhcnQtc3VtbScpLnNob3coKTtcblxuXHRcdC8vINCf0L7QutCw0LfRg9GUINC60ZbQu9GM0LrRltGB0YLRjCDRgtC+0LLQsNGA0ZbQsiDRgyDQutC+0YDQt9C40L3RllxuXHRcdCQoJy5qcy1jYXJ0LXN1bW0nKS5odG1sKGNhcnRDb3VudCk7XG5cdFx0XG5cdFx0Ly8g0JLQuNCy0L7QtNC40LzQviDQtNC+0LHQsNCy0LvQtdC90ZYg0YLQvtCy0LDRgNC4XG5cdFx0JC5lYWNoKGNhcnQsIGZ1bmN0aW9uKGluZGV4LCBwcm9kdWN0KSB7XG5cdFx0XHRcblx0XHRcdC8vINCd0LDQv9C+0LLQvdGO0ZTQvNC+INC30LzRltC90L3RgyDRgtC+0LLQsNGA0LDQvNC4XG5cdFx0XHRsaXN0UHJvZHVjdHMgKz0gYDxsaSBjbGFzcz1cImNhcnQtcHJvZHVjdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX2ltZy13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy8ke3Byb2R1Y3QuaW1nfVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FydC1wcm9kdWN0X19pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX3RpdGxlXCI+JHtwcm9kdWN0LnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX3ByaWNlXCI+JHtwcm9kdWN0LnByaWNlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvdW50XCI+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1jb3VudF9fYnRuIGJ1dHRvbi1jb3VudF9fYnRuLWNvdW50XCIgZGF0YS1mb3I9XCIjaW5wdXQtY291bnQtJHtpbmRleH1cIiBkYXRhLXR5cGU9XCJtaW51c1wiPi08L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjFcIiBjbGFzcz1cImJ1dHRvbi1jb3VudF9faW5wdXRcIiBpZD1cImlucHV0LWNvdW50LSR7aW5kZXh9XCIvPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tY291bnRfX2J0biBidXR0b24tY291bnRfX2J0bi1jb3VudFwiIGRhdGEtZm9yPVwiI2lucHV0LWNvdW50LSR7aW5kZXh9XCIgZGF0YS10eXBlPVwicGx1c1wiPis8L2J1dHRvbj5cbiAgICBcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG4gYnRuLXJlbW92ZSBqcy1yZW1vdmUtcHJvZHVjdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPng8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9saT5gO1xuXG5cdFx0fSk7XG5cblx0XHQvLyDQlNC+0LHQsNCy0LvRj9GU0LzQviDQutC90L7Qv9C60YMg0L7RhNC+0YDQvNC70LXQvdC90Y8g0LfQsNC80L7QstC70LXQvdC90Y9cblx0XHRsaXN0UHJvZHVjdHMgKz0gYDxhIGhyZWY9XCJjaGVja291dC5odG1sXCIgY2xhc3M9XCJidG4tMjQ3IGJ0bi1vcmRlclwiPtCe0YTQvtGA0LzQuNGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y88L2E+YDtcblx0fVxuXG5cblx0Ly8g0JLQuNCy0L7QtNC40LzQviDRgdGE0L7RgNC80L7QstCw0L3QuNC5INGB0L/QuNGB0L7QuiDRgtC+0LLQsNGA0ZbQsiDQsiBodG1sXG5cdCQoJy5qcy1jYXJ0LWxpc3QnKS5odG1sKGxpc3RQcm9kdWN0cyk7XG5cblx0Ly8g0JfQsdC10YDRltCz0LDRlNC80L4g0LrQvtGA0LfQuNC90YNcblx0c2F2ZUNhcnQoKTtcbn1cblxudmlld1Byb2R1Y3RzKCk7XG5cblxuLyoqXG4gKiDQlNC+0LHQsNCy0LvQtdC90L3RjyDRgtC+0LLQsNGA0YMg0LIg0LrQvtGA0LfQuNC90YNcbiAqL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1hZGQtcHJvZHVjdCcsIGZ1bmN0aW9uKGV2ZW50KVxue1xuXHQvLyDQlNGW0YHRgtCw0ZTQvNC+INC60L3QvtC/0LrRgyDQvdCwINGP0LrRgyDQvdCw0LbQsNC70Lhcblx0Y29uc3QgYnRuID0gJCh0aGlzKTtcblxuXHQvLyDQpNC+0YDQvNGD0ZTQvNC+INC00LDQvdC90ZYg0L/RgNC+INGC0L7QstCw0YBcblx0Y29uc3QgbmV3UHJvZHVjdCA9IGJ0bi5kYXRhKCk7XG5cdFxuXHQvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YLQsNC60LjQuSDRgtC+0LLQsNGAINCx0YPQsiDQtNC+0LTQsNC90LjQuVxuXHRpZiAoY2FydC5pc0Fsb293QWRkUHJvZHVjdChuZXdQcm9kdWN0LCAndGl0bGUnKSkge1xuXG5cdFx0Ly8g0JTQvtCx0LDQstC70Y/RlNC80L4g0YLQvtCy0LDRgCDRgyDQvNCw0YHQuNCyXG5cdFx0Y2FydC5wdXNoKG5ld1Byb2R1Y3QpO1xuXHRcdFxuXHRcdC8vINCS0LjQstC+0LTQuNC80L4g0LLRgdGWINGC0L7QstCw0YDQuCDRgyDQutC+0YDQt9C40L3RllxuXHRcdHZpZXdQcm9kdWN0cygpO1xuXHR9XG5cbn0pO1xuXG5cblxuXG4vKipcbiAqINCS0LjQtNCw0LvQtdC90L3RjyDRgtC+0LLQsNGA0YNcbiAqL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1yZW1vdmUtcHJvZHVjdCcsIGZ1bmN0aW9uKClcbntcdFxuXHQvLyDQlNGW0YHRgtCw0ZTQvNC+INC60LvRjtGHINC80LDRgdC40LLRg1xuXHRjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YSgncHJvZHVjdC1rZXknKTtcblxuXHQvLyDQktC40LTQsNC70Y/RlNC80L4g0YLQvtCy0LDRgCDQtyDQvNCw0YHQuNCy0YMg0LTQvtC00LDQvdC40YUg0YLQvtCy0LDRgNGW0LJcblx0Y2FydC5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdC8vINCS0LjQstC+0LTQuNC80L4g0LLRgdGWINGC0L7QstCw0YDQuCDRgyDQutC+0YDQt9C40L3RllxuXHR2aWV3UHJvZHVjdHMoKTtcbn0pO1xuXG5cblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pc0Fsb293QWRkUHJvZHVjdCkge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaXNBbG9vd0FkZFByb2R1Y3QnLCB7XG5cblx0XHQvLyDQndCw0YjQsCDRhNGD0L3QutGG0ZbRjywg0Y/QutCwINCx0YPQtNC1INGI0YPQutCw0YLQuCDRgtC+0LLQsNGAINCyINC80LDRgdC40LLRliDRliDQv9C+0LLQtdGA0YLQsNGC0Lgg0LDQsdC+IHRydWUg0LDQsdC+IGZhbHNlXG5cdFx0Ly8g0K/QutGJ0L4g0YLQvtCy0LDRgCDRlCDQsNCx0L4g0LnQvtCz0L4g0L3QtdC80LDRlFxuXHRcdHZhbHVlOiBmdW5jdGlvbihvYmpQcm9kdWN0LCBzZWFyY2hLZXkgPSAndGl0bGUnKSB7XG5cblx0XHRcdC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCBvYmpQcm9kdWN0INGUINC+0LHRlNC60YLQvtC8XG5cdFx0XHRpZih0eXBlb2Ygb2JqUHJvZHVjdCA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0XHQvLyDQktGW0LTQsdC40YDQsNGU0LzQviDQt9C90LDRh9C10L3QvdGPINC3INC+0LHRlNC60YLQsFxuXHRcdFx0XHRjb25zdCBhZGRUaXRsZSA9IG9ialByb2R1Y3Rbc2VhcmNoS2V5XTtcdFxuXG5cdFx0XHRcdC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRltGB0L3Rg9GUINC30L3QsNGH0LXQvdC90Y8g0YfQuCDQvdGWXG5cdFx0XHRcdGlmKHR5cGVvZiBhZGRUaXRsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDQn9C+0LLQtdGA0YLQsNGU0LzQviBmYWxzZSwg0YnQviDRgtC+0LLQsNGAINC00L7QsdCw0LLQu9GP0YLQuCDQvdC1INC/0L7RgtGA0ZbQsdC90L5cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQvNCw0YHQuNCyINC3INGP0LrQuNC8INCx0YPQtNC10LzQviDQv9GA0LDRhtGO0LLQsNGC0Lhcblx0XHRcdFx0XHRjb25zdCBhcnJMaXN0ID0gdGhpcztcblxuXHRcdFx0XHRcdC8vINCX0LHQtdGA0ZbQs9Cw0ZQg0LfQvdCw0YfQtdC90L3RjyDRltGC0LXRgNCw0YbRltGXXG5cdFx0XHRcdFx0bGV0IGFyclRpdGxlID0gJyc7XG5cblx0XHRcdFx0XHQvLyDQn9C10YDQtdC60LvRjtGH0LDQu9C60LAg0YfQuCDQtNC+0LHQsNCy0LvRj9GC0Lgg0YLQvtCy0LDRgCDRh9C4INC90ZZcblx0XHRcdFx0XHRsZXQgc3dpdGhBZGRQcm9kdWN0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdC8vINC/0LXRgNC10LHRgtGA0LDRlNC80L4g0LLQtdGB0Ywg0LzQsNGB0LjQsiDRidC+0LEg0LfQvdCw0LnRgtC4INC00YPQsdC70ZbQutCw0YJcblx0XHRcdFx0XHRhcnJMaXN0LmZvckVhY2goIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8g0JLQuNGC0Y/Qs9GD0ZTQvNC+INC/0L4g0LrQu9GO0YfRgyBzZWFyY2hLZXkg0LnQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xuXHRcdFx0XHRcdFx0YXJyVGl0bGUgPSBlbGVtZW50W3NlYXJjaEtleV07XG5cblx0XHRcdFx0XHRcdC8vINCf0L7RgNGW0LLQvdGO0LzQviDQt9C90LDRh9C10L3QvdC90Y8g0LzQsNGB0LjQstGDINC30ZYg0LfQvdCw0YfQtdC90L3Rj9C8INCw0YDRg9C80LXQvdGC0LAg0L7QsdGU0LrRgtCwXG5cdFx0XHRcdFx0XHRpZiAoYXJyVGl0bGUgPT0gYWRkVGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGhBZGRQcm9kdWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vINCi0L7QstCw0YAg0LTQvtCx0LDQstC70Y/RgtC4INC90LUg0L/QvtGC0YDRltCx0L3QvlxuXHRcdFx0XHRcdHJldHVybiBzd2l0aEFkZFByb2R1Y3Q7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyDQkNGA0LPRg9C80LXQvdGCINC90LUg0Y/QstC70Y/RlNGC0YzRgdGPINC/0YDQvtC00YPQutGC0L7QvFxuXHRcdFx0XHR0aHJvdyBcItCf0LXRgNGI0LjQuSDQsNGA0LPRg9C80LXQvdGCINC90LUg0Y/QstC70Y/RlNGC0YzRgdGPINC+0LHRlNC60YLQvtC8INC/0YDQvtC00YPQutGC0YNcIjtcblx0XHRcdH1cblxuXG5cdFx0XHQvLyDQotC+0LLQsNGAINC00L7QsdCw0LLQu9GP0YLQuCDQvdC1INC/0L7RgtGA0ZbQsdC90L5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0fSk7XG59XG5cblxuXG4vLyDQktGW0YjQsNGU0LzQviDQv9C+0LTRltGOINC60LvRltC60YMg0L3QsCDQutC90L7Qv9C60YMg0L/Qu9GO0YEuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ1dHRvbi1jb3VudF9fYnRuLWNvdW50JywgZnVuY3Rpb24oKVxue1xuXHQvLyDQlNGW0YHRgtCw0ZTQvNC+INGC0LjQvyDQutC90L7Qv9C60Lhcblx0Y29uc3QgdHlwZUJ0biA9ICQodGhpcykuZGF0YSgndHlwZScpO1xuXG5cdC8vINCS0ZbQtNCx0LjRgNCw0ZTQvNC+IGlkINGW0L3Qv9GD0YLRgyDQtyDRj9C60LjQvCDQsdGD0LTQtdC80L4g0L/RgNCw0YbRjtCy0LDRgtC4ICjQtyBkYXRhLWZvciDQsiDQutC90L7Qv9GG0ZYpXG5cdGNvbnN0IGlucHV0SUQgPSAkKHRoaXMpLmRhdGEoJ2ZvcicpO1xuXG5cdC8vINCS0ZbQtNCx0LjRgNCw0ZTQvNC+IGlucHV0XG5cdGNvbnN0IGlucHV0ID0gJChpbnB1dElEKTtcblx0XG5cdC8vINCS0ZbQtNCx0LjRgNCw0ZTQvNC+INGG0LjRhNGA0YMg0LcgaW5wdXRcblx0bGV0IHZhbHVlID0gaW5wdXQudmFsKCk7XG5cdFxuXG5cdGlmKHR5cGVCdG4gPT0gJ3BsdXMnKXtcblxuXHRcdC8vINCU0L7QsdCw0LLQu9GP0ZTQvNC+INGG0LjRhNGA0YMgMSDQtNC+IGlucHV0XG5cdFx0aW5wdXQudmFsKCsrdmFsdWUpO1xuXHR9IGVsc2Uge1xuXG5cdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0Ly8g0JzRltC90YPRgdGD0ZTQvNC+INGG0LjRhNGA0YMg0LcgaW5wdXRcblx0XHRcdGlucHV0LnZhbCgtLXZhbHVlKTtcblx0XHR9XG5cdH1cbn0pO1xuIiwiLy8g0JzQsNGU0LzQviDQstC40LLQtdGB0YLQuCDQt9Cw0LzQvtCy0LvQtdC90ZYg0YLQvtCy0LDRgNC4INC3INC80LDRgdC40LLRgyBjYXJ0INCyINC90L7QstC40Lkg0YHQv9C40YHQvtC6LCDRj9C60LjQuSDQstGW0LTQv9C+0LLRltC00LDRlCDRltC90YjRltC5INGB0YLQvtGA0ZbQvdGG0ZZcbmZ1bmN0aW9uIHZpZXdPcmRlclByb2R1Y3RzKClcbntcblx0Ly8g0JfQvNGW0L3QvdCwINGP0LrQsCDQstGW0LTQv9C+0LLRltC00LDRlCDQt9CwINGB0L/QuNGB0L7QuiDQtNC+0LHQsNCy0LvQtdC90LjRhSDRgtC+0LLQsNGA0ZbQsiwg0Y/QutGWINC80Lgg0LHRg9C00LXQvNC+INCy0LjQstC+0LTQuNGC0Lhcblx0bGV0IGxpc3RQcm9kdWN0cyA9ICcnO1xuXG5cdC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgtC+0LLQsNGA0ZbQsiBcblx0bGV0IGNhcnRDb3VudCA9IGNhcnQubGVuZ3RoO1xuXHRcblx0Ly8g0K/QutGJ0L4g0L3QtdC80LDRlCDRgtC+0LLQsNGA0ZbQslxuXHRpZihjYXJ0Q291bnQgIT0gMCkge1xuXHRcdFxuXHRcdC8vINCS0LjQstC+0LTQuNC80L4g0LTQvtCx0LDQstC70LXQvdGWINGC0L7QstCw0YDQuFxuXHRcdCQuZWFjaChjYXJ0LCBmdW5jdGlvbihpbmRleCwgcHJvZHVjdCkge1xuXHRcdFx0XG5cdFx0XHQvLyDQndCw0L/QvtCy0L3RjtGU0LzQviDQt9C80ZbQvdC90YMg0YLQvtCy0LDRgNCw0LzQuFxuXHRcdFx0bGlzdFByb2R1Y3RzICs9IGA8ZGl2IGNsYXNzPVwiY2FyZC1vcmRlci1wcm9kdWN0XCI+XG5cdFx0XHRcdCAgICAgICAgXHRcdDxpbWcgc3JjPVwiaW1nLyR7cHJvZHVjdC5pbWd9XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkLW9yZGVyLXByb2R1Y3RfX2ltZ1wiPlxuXHRcdFx0XHQgICAgICAgIFx0XHQ8aDQgY2xhc3M9XCJjYXJkLW9yZGVyLXByb2R1Y3RfX3RpdGxlXCI+JHtwcm9kdWN0LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdCAgICAgICAgXHRcdDxwIGNsYXNzPVwiY2FyZC1vcmRlci1wcm9kdWN0X19wcmljZVwiPlxuXHRcdFx0XHQgICAgICAgIFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC1vcmRlci1wcm9kdWN0X19wcmljZS1sYWJlbFwiPtCm0ZbQvdCwOjwvc3Bhbj5cblx0XHRcdFx0ICAgICAgICBcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtb3JkZXItcHJvZHVjdF9fcHJpY2UtdmFsdWVcIj4ke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuXHRcdFx0XHQgICAgICAgIFx0XHQ8L3A+XG5cdFx0XHRcdCAgICAgICAgXHQ8L2Rpdj5gO1xuXG5cdFx0fSk7XG5cblx0XHQvLyAvLyDQlNC+0LHQsNCy0LvRj9GU0LzQviDQutC90L7Qv9C60YMg0L7RhNC+0YDQvNC70LXQvdC90Y8g0LfQsNC80L7QstC70LXQvdC90Y9cblx0XHQvLyBsaXN0UHJvZHVjdHMgKz0gYDxhIGhyZWY9XCJjaGVja291dC5odG1sXCIgY2xhc3M9XCJidG4tMjQ3IGJ0bi1vcmRlclwiPtCe0YTQvtGA0LzQuNGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y88L2E+YDtcblx0fVxuXG5cblx0Ly8g0JLQuNCy0L7QtNC40LzQviDRgdGE0L7RgNC80L7QstCw0L3QuNC5INGB0L/QuNGB0L7QuiDRgtC+0LLQsNGA0ZbQsiDQsiBodG1sXG5cdCQoJy5qcy1saXN0LW9yZGVyLXByb2R1Y3RzJykuaHRtbChsaXN0UHJvZHVjdHMpO1xuXHQvLyDQktGW0YjQsNGU0LzQviDQv9C+0LTRltGOINC60LvRltC60YMg0L3QsCDQutC90L7Qv9C60YMg0L/Qu9GO0YEuXG5cbn1cblxudmlld09yZGVyUHJvZHVjdHMoKTtcbiJdfQ==
