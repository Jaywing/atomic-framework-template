webpackJsonp([0],{338:function(t,e,i){var s={"./":125,"./LoadImage":341,"./LoadImage.js":341,"./ResImg":343,"./ResImg.js":343,"./Sticky":344,"./Sticky.js":344,"./Switcher":345,"./Switcher.js":345,"./Toggle":346,"./Toggle.js":346,"./Validate":347,"./Validate.js":347,"./index":125,"./index.js":125};function n(t){return i(r(t))}function r(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id=338},339:function(t,e,i){"use strict";var s=i(348),n=i.n(s);e.a=class{constructor(t,e,i={},s={}){this.el=t,this.name=e,this.uid=e+"_"+n.a.generate(),this.settings=Object.assign(s,i),window.jwAtomic.modules[this.uid]={type:"async",element:this.el,details:this.settings},this.el.hasAttribute("id")||this.el.setAttribute("id",this.uid),this.init()}init(){console.log(`${this.name} has initialised`)}addModDetail(t,e){window.jwAtomic.modules[this.uid].details[t]=e}}},340:function(t,e,i){"use strict";var s,n,r,o=i(350),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){r=!1}function l(t){if(t){if(t!==s){if(t.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,i){return e!==i.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));s=t,c()}}else s!==a&&(s=a,c())}function h(){return r||(r=function(){s||l(a);for(var t,e=s.split(""),i=[],n=o.nextValue();e.length>0;)n=o.nextValue(),t=Math.floor(n*e.length),i.push(e.splice(t,1)[0]);return i.join("")}())}t.exports={characters:function(t){return l(t),s},seed:function(t){o.seed(t),n!==t&&(c(),n=t)},lookup:function(t){return h()[t]},shuffled:h}},341:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=i(356),r=i.n(n),o=i(126),a=i.n(o);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,s);const s={};this.settings.isLoaded=!1}init(){this.shouldILoadImage(),window.addEventListener("resize",a()(()=>{this.shouldILoadImage()},250)),window.addEventListener("scroll",a()(()=>{this.shouldILoadImage()},250)),console.log("Load image has initialised")}shouldILoadImage(){const t=this.el.querySelector("img.LoadImage"),e=this.settings.bp,i=this.settings.url;t&&!this.settings.isLoaded&&r.a.viewportW()>=e&&r.a.inViewport(t,100)&&setTimeout(()=>{this.loadImage(t,i)},0)}loadImage(t,e){const i=new Image,s=this;this.settings.alt&&(t.alt=this.settings.alt),i.onload=function(){t.src=this.src,s.el.classList.add("ImageLoaded"),s.settings.isLoaded=!0},i.src=e}}},342:function(t,e,i){"use strict";var s=i(351);t.exports=function(t,e){for(var i,n=0,r="";!i;)r+=t(e>>4*n&15|s()),i=e<Math.pow(16,n+1),n++;return r}},343:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=i(357);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,{threshold:0,normal:"data-resimg-normal",retina:"data-resimg-retina",srcset:"data-resimg-srcset"})}init(){const t=Object(n.a)({normal:this.settings.normal,retina:this.settings.retina,srcset:this.settings.srcset,threshold:this.settings.threshold});t.update().check().handlers(!0),console.log(t),console.log(`${this.name} has initialised`)}}},344:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=i(358),r=i.n(n);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,{offsetTop:0,bpStart:"gtBase",stickyItem:"Sticky-item",stickyClass:"is-sticky"})}init(){new r.a(".Sticky-item").update(),console.log(`${this.name} has initialised`)}}},345:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=i(360);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,{activeIndex:0,activeClass:"is-active",target:null,hash:!1,hide:!1,event:"click"})}setHashIndex(){let t=this.tabIds.indexOf(location.hash);if(void 0===this.activeIndex&&t<0)return this.activeIndex=0,void(this.hash=this.tabIds[0]);t>=0&&(this.activeIndex=t,this.hash=location.hash)}addAriaTabs(){this.el.setAttribute("role","tablist"),[].slice.call(this.el.children).map(function(t){let e;t.hasAttribute("href")?e=t:(t.setAttribute("role","presentation"),t.querySelector("[href]")&&(e=t.querySelector("[href]")))}),this.targets.map(function(t){t.setAttribute("role","tab-panel"),t.setAttribute("aria-labelledby",`tab-${t.getAttribute("id")}`)})}normaliseTargets(){var t;t=null===this.settings.target?[Object(n.a)(this.el,"nextSibling")]:"string"==typeof this.settings.target?[this.settings.target]:this.settings.target,this.targets=t.map(function(t){return"string"==typeof t&&(t=document.querySelector(t)),t.panes=[].slice.call(t.children),t})}validateTargets(){let t=this.items.length,e=!0;return this.targets.map(function(i){i.panes?i.panes.length<t&&(e=!1):e=!1}),e}init(){const t=this,e=this.el.querySelectorAll("[href]");if(this.items=Array.from(e),this.tabIds=this.items.map(function(t){return t.getAttribute("href")}),this.targets=[],this.normaliseTargets(),!this.validateTargets())return console.warn("Switcher aborted: The target element does not pass validation rules"),void this.el.setAttribute("hidden",!0);this.settings.hash?this.setHashIndex():this.activeIndex=this.settings.activeIndex,this.settings.hide&&this.addAriaTabs();const i=function(e){e.preventDefault();const i=[].slice.call(t.el.children);i.indexOf(e.target)>-1?t.activeIndex=i.indexOf(e.target):i.indexOf(e.target.parentNode)>-1&&(t.activeIndex=i.indexOf(e.target.parentNode)),t.activateItem()},s=function(){t.setHashIndex(),t.activateItem()};this.settings.hash?window.addEventListener("hashchange",s,!1):this.el.addEventListener("click",i),this.activateItem(this.activeIndex),console.log(`${this.name} has initialised`)}activateItem(){let t=0;const e=this.settings.activeClass,i=this;this.items.map(function(s){t!==i.activeIndex?(s.classList.remove(e),s.setAttribute("aria-selected",!1)):(s.classList.add(e),s.setAttribute("aria-selected",!0)),t++}),this.targets.map(function(t){let s=0;t.panes.map(function(t){s!==i.activeIndex?i.settings.hide?t.setAttribute("hidden",!0):t.classList.remove(e):i.settings.hide?t.removeAttribute("hidden"):t.classList.add(e),s++})})}}},346:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=i(361),r=i.n(n);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,{once:!1,activeClass:"is-active",target:"",event:"click",hide:!1})}init(){const t=this;if(""===this.settings.target)this.self=!0,this.settings.target=[this.el],this.el.setAttribute("aria-pressed",this.el.classList.contains(this.settings.activeClass));else{this.self=!1;let t=this.settings.target;"string"==typeof t&&(this.settings.target="parent"===t?[this.el.parentNode]:[this.settings.target])}let e;r()(this.settings.target,t=>{const i=this.settings.target.indexOf(t),s="string"==typeof t?document.querySelector(t):t;e=this.settings.hide?!s.hasAttribute("hidden"):s.classList.contains(this.settings.activeClass),window.jwAtomic.modules[this.uid].details.target[i]=s}),this.addModDetail("self",this.self),this.addModDetail("active",e);const i=()=>{if(this.settings.once&&this.el.removeEventListener("click",i),this.self)return this.doToggle(this.el,t.settings.target[0]),void this.el.setAttribute("aria-pressed",t.el.classList.contains(this.settings.activeClass));const e=this.settings.target;for(let t=0,i=e.length;t<i;t++){let i="string"==typeof e[t]?document.querySelector(e[t]):e[t];i&&this.doToggle(i,this.el)}};this.el.addEventListener("click",i),console.log(`${this.name} has initialised`)}doToggle(t,e){if(t){if(this.settings.hide)return void(t.hasAttribute("hidden")?(t.removeAttribute("hidden"),window.jwAtomic.modules[e.getAttribute("id")].details.active=!0):(t.setAttribute("hidden",!0),window.jwAtomic.modules[e.getAttribute("id")].details.active=!1));t.classList.toggle(this.settings.activeClass),window.jwAtomic.modules[e.getAttribute("id")].details.active=t.classList.contains(this.settings.activeClass)}}}},347:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(339);e.default=class extends s.a{constructor(t,e,i){super(t,e,i,{messages:{valueMissing:"Please fill out this field",typeMismatch:"Please use the correct input type",tooShort:"Please lengthen this text to *value* characters or more",tooLong:"Please shorten this text to *value* or less",badInput:"Please enter a number",stepMismatch:"Please enter a valid value",rangeOverflow:"Please select a value that is no more than *value*",rangeUnderflow:"Please select a value that is no less than *value*",patternMismatch:"Please match the requested format"},customMessages:{email:"Please enter a valid email address",url:"Please enter a valid URL",generic:"The value you entered for this field is invalid"},errorClasses:{field:"Form-input--danger",message:"Panel Panel--error"}}),this.blurHandler=this.blurHandler.bind(this)}hasError(t){if(t.disabled||"file"===t.type||"reset"===t.type||"button"===t.type||"submit"===t.type)return;const e=t.validity,i=this.settings.messages,s=this.settings.customMessages;if(!e.valid)for(let n in i)if(e[n]){if(t.hasAttribute("title"))return t.getAttribute("title");if("typeMismatch"===n){if("email"===t.type)return s[t.type];if("url"===t.type)return s[t.type]}return"tooShort"===n?i[n].replace("*value*",t.getAttribute("minLength")):"tooLong"===n?i[n].replace("*value*",t.getAttribute("maxLength")):"rangeOverflow"===n?i[n].replace("*value*",t.getAttribute("max")):"rangeUnderflow"===n?i[n].replace("*value*",t.getAttribute("min")):i[n]?i[n]:s.generic}}showError(t,e){if(t.classList.add(this.settings.errorClasses.field),"radio"===t.type&&t.name){let e=document.getElementsByName(t.name);if(e.length>0)for(let i=0;i<e.length;i++)t=e[e.length-1]}const i=t.id||t.name;if(!i)return;const s="error-for-"+i;let n=this.el.querySelector("#"+s);if(!n){let e;(n=document.createElement("div")).className=this.settings.errorClasses.message,n.id=s,"radio"!==t.type&&"checkbox"!==t.type||(e=this.el.querySelector(`label[for="${i}"]`)||t.parentNode)&&e.parentNode.insertBefore(n,e.nextSibling),e||t.parentNode.insertBefore(n,t.nextSibling)}t.setAttribute("aria-describedby",s),n.innerHTML=e,n.style.display="block",n.style.visibility="visible"}removeError(t){if(t.classList.remove(this.settings.errorClasses.field),t.removeAttribute("aria-describedby"),"radio"===t.type&&t.name){let e=document.getElementsByName(t.name);e.length>0&&(t=e[e.length-1])}const e=t.id||t.name;if(!e)return;const i="error-for-"+e;var s=this.el.querySelector("#"+i);s&&(s.innerHTML="",s.style.display="none",s.style.visibility="hidden")}setNoValidate(t=!1){t?this.el.removeAttribute("novalidate"):this.el.setAttribute("novalidate",!0)}blurHandler(t){const e=this.hasError(t.target);e?this.showError(t.target,e):this.removeError(t.target)}submitHandler(t){let e,i;const s=this.el.elements;for(let t=0;t<s.length;t++)(e=this.hasError(s[t]))&&(this.showError(s[t],e),i||(i=s[t]));i&&(t.preventDefault(),i.focus())}init(){this.setNoValidate(),this.el.addEventListener("blur",t=>{this.blurHandler(t)},!0),this.el.addEventListener("submit",t=>{this.submitHandler(t)},!1),console.log(`${this.name} has initialised`)}}},348:function(t,e,i){"use strict";t.exports=i(349)},349:function(t,e,i){"use strict";var s=i(340),n=(i(342),i(352)),r=i(353),o=i(354),a=i(355)||0;function c(){return r(a)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return s.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&s.characters(t),s.shuffled()},t.exports.decode=n,t.exports.isValid=o},350:function(t,e,i){"use strict";var s=1;t.exports={nextValue:function(){return(s=(9301*s+49297)%233280)/233280},seed:function(t){s=t}}},351:function(t,e,i){"use strict";var s="object"==typeof window&&(window.crypto||window.msCrypto);t.exports=function(){if(!s||!s.getRandomValues)return 48&Math.floor(256*Math.random());var t=new Uint8Array(1);return s.getRandomValues(t),48&t[0]}},352:function(t,e,i){"use strict";var s=i(340);t.exports=function(t){var e=s.shuffled();return{version:15&e.indexOf(t.substr(0,1)),worker:15&e.indexOf(t.substr(1,1))}}},353:function(t,e,i){"use strict";var s,n,r=i(342),o=i(340),a=1459707606518,c=6;t.exports=function(t){var e="",i=Math.floor(.001*(Date.now()-a));return i===n?s++:(s=0,n=i),e+=r(o.lookup,c),e+=r(o.lookup,t),s>0&&(e+=r(o.lookup,s)),e+=r(o.lookup,i)}},354:function(t,e,i){"use strict";var s=i(340);t.exports=function(t){if(!t||"string"!=typeof t||t.length<6)return!1;for(var e=s.characters(),i=t.length,n=0;n<i;n++)if(-1===e.indexOf(t[n]))return!1;return!0}},355:function(t,e,i){"use strict";t.exports=0},356:function(t,e){var i,s;i=this,s=function(){var t={},e="undefined"!=typeof window&&window,i="undefined"!=typeof document&&document,s=i&&i.documentElement,n=e.matchMedia||e.msMatchMedia,r=n?function(t){return!!n.call(e,t).matches}:function(){return!1},o=t.viewportW=function(){var t=s.clientWidth,i=e.innerWidth;return t<i?i:t},a=t.viewportH=function(){var t=s.clientHeight,i=e.innerHeight;return t<i?i:t};function c(){return{width:o(),height:a()}}function l(t,e){return!(!(t=t&&!t.nodeType?t[0]:t)||1!==t.nodeType)&&function(t,e){var i={};return e=+e||0,i.width=(i.right=t.right+e)-(i.left=t.left-e),i.height=(i.bottom=t.bottom+e)-(i.top=t.top-e),i}(t.getBoundingClientRect(),e)}return t.mq=r,t.matchMedia=n?function(){return n.apply(e,arguments)}:function(){return{}},t.viewport=c,t.scrollX=function(){return e.pageXOffset||s.scrollLeft},t.scrollY=function(){return e.pageYOffset||s.scrollTop},t.rectangle=l,t.aspect=function(t){var e=(t=null==t?c():1===t.nodeType?l(t):t).height,i=t.width;return e="function"==typeof e?e.call(t):e,(i="function"==typeof i?i.call(t):i)/e},t.inX=function(t,e){var i=l(t,e);return!!i&&i.right>=0&&i.left<=o()},t.inY=function(t,e){var i=l(t,e);return!!i&&i.bottom>=0&&i.top<=a()},t.inViewport=function(t,e){var i=l(t,e);return!!i&&i.bottom>=0&&i.right>=0&&i.top<=a()&&i.left<=o()},t},void 0!==t&&t.exports?t.exports=s():i.verge=s()},357:function(t,e,i){"use strict";var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=h(),i=void 0,n=void 0,r=void 0,o={normal:t.normal||"data-normal",retina:t.retina||"data-retina",srcset:t.srcset||"data-srcset",threshold:t.threshold||0},a=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),c=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.create(null);function i(t,i){return e[t]=e[t]||[],e[t].push(i),this}function n(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i?e[t].splice(e[t].indexOf(i),1):delete e[t],this}return s({},t,{on:i,once:function(t,e){return e._once=!0,i(t,e),this},off:n,emit:function(t){for(var i=this,s=arguments.length,r=Array(s>1?s-1:0),o=1;o<s;o++)r[o-1]=arguments[o];var a=e[t]&&e[t].slice();return a&&a.forEach(function(e){e._once&&n(t,e),e.apply(i,r)}),this}})}({handlers:function(t){var e=t?"addEventListener":"removeEventListener";return["scroll","resize"].forEach(function(t){return window[e](t,u)}),this},check:f,update:p});return l;function h(){return window.scrollY||window.pageYOffset}function u(){e=h(),i||(window.requestAnimationFrame(function(){return f()}),i=!0)}function d(t){var i=e,s=i+r,n=function(t){return t.getBoundingClientRect().top+e}(t),a=n+t.offsetHeight,c=o.threshold/100*r;return a>=i-c&&n<=s+c}function f(){return r=window.innerHeight,n.forEach(function(t){return d(t)&&function(t){if(l.emit("src:before",t),a&&t.hasAttribute(o.srcset))t.setAttribute("srcset",t.getAttribute(o.srcset));else{var e=c>1&&t.getAttribute(o.retina);t.setAttribute("src",e||t.getAttribute(o.normal))}l.emit("src:after",t),[o.normal,o.retina,o.srcset].forEach(function(e){return t.removeAttribute(e)}),p()}(t)}),i=!1,this}function p(){return n=Array.prototype.slice.call(document.querySelectorAll("["+o.normal+"]")),this}}},358:function(t,e,i){var s=i(359);t.exports=s},359:function(t,e,i){var s,n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selector=e,this.elements=[],this.version="1.2.0",this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options={wrap:i.wrap||!1,marginTop:i.marginTop||0,stickyFor:i.stickyFor||0,stickyClass:i.stickyClass||null,stickyContainer:i.stickyContainer||"body"},this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}return t.prototype.run=function(){var t=this,e=setInterval(function(){if("complete"===document.readyState){clearInterval(e);var i=document.querySelectorAll(t.selector);t.forEach(i,function(e){return t.renderElement(e)})}},10)},t.prototype.renderElement=function(t){var e=this;t.sticky={},t.sticky.active=!1,t.sticky.marginTop=parseInt(t.getAttribute("data-margin-top"))||this.options.marginTop,t.sticky.stickyFor=parseInt(t.getAttribute("data-sticky-for"))||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=this.options.stickyContainer,t.sticky.container=this.getStickyContainer(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect=this.getRectangle(t),"img"===t.tagName.toLowerCase()&&(t.onload=function(){return t.sticky.rect=e.getRectangle(t)}),t.sticky.wrap&&this.wrapElement(t),this.activate(t)},t.prototype.wrapElement=function(t){t.insertAdjacentHTML("beforebegin","<span></span>"),t.previousSibling.appendChild(t)},t.prototype.activate=function(t){t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active&&(t.sticky.active=!0),this.elements.indexOf(t)<0&&this.elements.push(t),t.sticky.resizeEvent||(this.initResizeEvents(t),t.sticky.resizeEvent=!0),t.sticky.scrollEvent||(this.initScrollEvents(t),t.sticky.scrollEvent=!0),this.setPosition(t)},t.prototype.initResizeEvents=function(t){var e=this;t.sticky.resizeListener=function(){return e.onResizeEvents(t)},window.addEventListener("resize",t.sticky.resizeListener)},t.prototype.destroyResizeEvents=function(t){window.removeEventListener("resize",t.sticky.resizeListener)},t.prototype.onResizeEvents=function(t){this.vp=this.getViewportSize(),t.sticky.rect=this.getRectangle(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),this.setPosition(t)},t.prototype.initScrollEvents=function(t){var e=this;t.sticky.scrollListener=function(){return e.onScrollEvents(t)},window.addEventListener("scroll",t.sticky.scrollListener)},t.prototype.destroyScrollEvents=function(t){window.removeEventListener("scroll",t.sticky.scrollListener)},t.prototype.onScrollEvents=function(t){t.sticky.active&&this.setPosition(t)},t.prototype.setPosition=function(t){this.css(t,{position:"",width:"",top:"",left:""}),this.vp.height<t.sticky.rect.height||!t.sticky.active||(t.sticky.rect.width||(t.sticky.rect=this.getRectangle(t)),t.sticky.wrap&&this.css(t.parentNode,{display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px"}),0===t.sticky.rect.top&&t.sticky.container===this.body?this.css(t,{position:"fixed",top:t.sticky.rect.top+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px"}):this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(this.css(t,{position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px"}),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height)+"px"})):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),this.css(t,{top:t.sticky.marginTop+"px"}))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.wrap&&this.css(t.parentNode,{display:"",width:"",height:""})))},t.prototype.update=function(){var t=this;this.forEach(this.elements,function(e){e.sticky.rect=t.getRectangle(e),e.sticky.container.rect=t.getRectangle(e.sticky.container),t.activate(e),t.setPosition(e)})},t.prototype.destroy=function(){var t=this;this.forEach(this.elements,function(e){t.destroyResizeEvents(e),t.destroyScrollEvents(e),delete e.sticky})},t.prototype.getStickyContainer=function(t){for(var e=t.parentNode;!e.hasAttribute("data-sticky-container")&&!e.parentNode.querySelector(t.sticky.stickyContainer)&&e!==this.body;)e=e.parentNode;return e},t.prototype.getRectangle=function(t){this.css(t,{position:"",width:"",top:"",left:""});var e=Math.max(t.offsetWidth,t.clientWidth,t.scrollWidth),i=Math.max(t.offsetHeight,t.clientHeight,t.scrollHeight),s=0,n=0;do{s+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:s,left:n,width:e,height:i}},t.prototype.getViewportSize=function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},t.prototype.updateScrollTopPosition=function(){this.scrollTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0)||0},t.prototype.forEach=function(t,e){for(var i=0,s=t.length;i<s;i++)e(t[i])},t.prototype.css=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style[i]=e[i])},t}();s=n,t.exports=s},360:function(t,e,i){"use strict";e.a=function(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}},361:function(t,e){t.exports=function(t,e){for(let i=0,s=t.length;i<s;i++)e(t[i])}}});