getCookie=function(d){var f=document.cookie.split(";");for(var b=0;b<f.length;b++){var a=f[b].split("=");var c=decodeURIComponent(a[0].trim());var e=a.length>1?a[1]:"";if(c==d){return decodeURIComponent(e)}}return""};setCookie=function(c,d,a){var b=encodeURIComponent(c)+"="+encodeURIComponent(d);if(a&&a instanceof Date){a={expires:a}}if(a&&typeof a=="object"){if(a.expires){b+="; expires="+a.expires.toGMTString()}if(a.path){b+="; path="+a.path.toString()}if(a.domain){b+="; domain="+a.domain.toString()}if(a.secure){b+="; secure"}}document.cookie=b};removeCookie=function(b,a){if(!a){var a={}}a.expires=new Date();setCookie(b,"",a)};
