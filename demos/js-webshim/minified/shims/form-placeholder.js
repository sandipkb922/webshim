jQuery.webshims.ready("dom-extend",function(c,j,p,s,q){if(!Modernizr.input.placeholder){var k=j.cfg.forms.placeholderType=="over",l=function(d,a,b){if(!k&&d.type!="password"){if(b===false)b=c.attr(d,"value");d.value=b}a.box.removeClass("placeholder-visible")},h=function(d,a,b,e,g){if(!e){e=c.data(d,"placeHolder");if(!e)return}if(g=="focus"||!g&&d===document.activeElement){if(d.type=="password"||k||c(d).hasClass("placeholder-visible"))l(d,e,"")}else{if(a===false)a=c.attr(d,"value");if(a)l(d,e,a);else{if(b===
false)b=c.attr(d,"placeholder")||"";if(b&&!a){a=e;b=b;if(b===false)b=c.attr(d,"placeholder")||"";if(!k&&d.type!="password")d.value=b;a.box.addClass("placeholder-visible")}else l(d,e,a)}}},r=function(d){d=c(d);var a=d.attr("id"),b=!!(d.attr("title")||d.attr("aria-labeledby"));if(!b&&a)b=!!c('label[for="'+a+'"]',d[0].form)[0];return c(b?'<span class="placeholder-text"></span>':'<label for="'+(a||c.webshims.getID(d))+'" class="placeholder-text"></label>')},n=function(){var d={text:1,search:1,url:1,email:1,
password:1,tel:1};return{create:function(a){var b=c.data(a,"placeHolder");if(b)return b;b=c.data(a,"placeHolder",{text:r(a)});c(a).bind("focus.placeholder blur.placeholder",function(f){h(this,false,false,b,f.type)});a.form&&c(a.form).bind("reset.placeholder",function(f){setTimeout(function(){h(a,false,false,b,f.type)},0)});if(a.type=="password"||k){b.box=c(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').parent();b.text.insertAfter(a).bind("mousedown.placeholder",
function(){h(this,false,false,b,"focus");a.focus();return false});c.each(["Left","Top"],function(f,i){var m=(parseInt(c.curCSS(a,"padding"+i),10)||0)+Math.max(parseInt(c.curCSS(a,"margin"+i),10)||0,0)+(parseInt(c.curCSS(a,"border"+i+"Width"),10)||0);b.text.css("padding"+i,m)});c.curCSS(a,"lineHeight");var e={width:c(a).width(),height:c(a).height()},g=c.curCSS(a,"float");c.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(f,i){var m=c.curCSS(a,i);b.text.css(i)!=m&&b.text.css(i,m)});
e.width&&e.height&&b.text.css(e);g!=="none"&&b.box.addClass("placeholder-box-"+g)}else{e=function(f){if(c(a).hasClass("placeholder-visible")){l(a,b,"");f&&f.type=="submit"&&setTimeout(function(){f.isDefaultPrevented()&&h(a,false,false,b)},9)}};if(c.nodeName(b.text[0],"label"))b.text.hide()[c.browser.msie?"insertBefore":"insertAfter"](a);c(p).one("beforeunload",e);b.box=c(a);a.form&&c(a.form).submit(e)}return b},update:function(a,b){if(d[c.attr(a,"type")]||c.nodeName(a,"textarea")){var e=n.create(a);
e.text.text(b);h(a,false,b,e)}}}}();c.webshims.publicMethods={pHolder:n};["input","textarea"].forEach(function(d){j.defineNodeNameProperty(d,"placeholder",{set:function(a){j.contentAttr(this,"placeholder",a);n.update(this,a)},get:function(){return j.contentAttr(this,"placeholder")||""},content:true},true,true,"form-placeholder")});c.each(["input","textarea"],function(d,a){var b=j.defineNodeNameProperty(a,"value",{set:function(e){var g=j.contentAttr(this,"placeholder");g&&"value"in this&&h(this,e,
g);return b._supset.call(this,e)},get:function(){return c(this).hasClass("placeholder-visible")?"":b._supget.call(this)}})});var o=c.fn.val;c.fn.val=function(d){if(d!==q){this.each(d===""?function(){if(this.nodeType===1){var a=this.getAttribute("placeholder");if(c.nodeName(this,"select")||!a)o.call(c(this),"");else{a&&"value"in this&&h(this,d,a);if(this.type=="password"||k)o.call(c(this),"")}}}:function(){if(this.nodeType===1){var a=this.getAttribute("placeholder");a&&"value"in this&&h(this,d,a)}});
if(d==="")return this}else if(this[0]&&this[0].nodeType==1&&this.hasClass("placeholder-visible"))return"";return o.apply(this,arguments)};j.isReady("form-placeholder",true)}});
