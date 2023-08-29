/* Author: Artem Sapegin, http://sapegin.me, 2016 */
!function(a){"function"==typeof define&&define.amd?define([],a):a()}(function(){"use strict";function a(a){function b(a){return e[f]=a,"↑"+f++ +"↓"}f=0,e=[];for(var c=0;c<h.length;c++)a=a.replace(h[c],b);return a}function b(a){return a=a.replace(i,function(a,b){return e[b]}),f=0,e=[],a}function c(c){c=a(c);for(var d=0;d<g.length;d++){var e=g[d];c=c.replace(e[0],e[1])}return c=b(c),c=c.replace(/\=("[^\"]*")/g,"←=→←str:$1→")}function d(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/←([^:→]+)→/g,"←gray:$1→").replace(/←(\w+):([^→]+)→/g,'<span class="hl-$1">$2</span>')}var e,f,g=[[/<(\/?)([\w]+)([^>]*)>/g,"←<$1→←tag:$2→$3←>→"],[/ ([\-\w]+)/g," ←attr:$1→"]],h=[/"([^"]+)"/gm],i=/↑(\d+)↓/g;return window.htmlhl=function(a){return d(c(a))}}),function(){function o(){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},b=/&(?!#?\w+;)|<|>|"|'|\//g;return function(c){return c?c.toString().replace(b,function(b){return a[b]||b}):c}}function p(b,a,f){return("string"==typeof a?a:a.toString()).replace(b.define||h,function(g,e,c,i){return 0===e.indexOf("def.")&&(e=e.substring(4)),e in f||(":"===c?f[e]=i:eval("def['"+e+"']="+i)),""}).replace(b.use||h,function(g,e){var c=eval(e);return c?p(b,c,f):c})}function l(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var j={version:"0.2.0",templateSettings:{evaluate:/\{\{([\s\S]+?)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1},template:void 0,compile:void 0},m=function(){return this||(0,eval)("this")}();"undefined"!=typeof module&&module.exports?module.exports=j:"function"==typeof define&&define.amd?define(function(){return j}):m.doT=j,m.encodeHTML=o();var q={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},h=/$^/;j.template=function(a,b,c){b=b||j.templateSettings;var d,e,f=b.append?q.append:q.split,g=0;if(b.use||b.define){var i=m.def;m.def=c||{},a=p(b,a,m.def),m.def=i}a=("var out='"+(b.strip?a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||h,function(a,b){return f.start+l(b)+f.end}).replace(b.encode||h,function(a,b){return d=!0,f.startencode+l(b)+f.end}).replace(b.conditional||h,function(a,b,c){return b?c?"';}else if("+l(c)+"){out+='":"';}else{out+='":c?"';if("+l(c)+"){out+='":"';}out+='"}).replace(b.iterate||h,function(a,b,c,d){return b?(g+=1,e=d||"i"+g,b=l(b),"';var arr"+g+"="+b+";if(arr"+g+"){var "+c+","+e+"=-1,l"+g+"=arr"+g+".length-1;while("+e+"<l"+g+"){"+c+"=arr"+g+"["+e+"+=1];out+='"):"';} } out+='"}).replace(b.evaluate||h,function(a,b){return"';"+l(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|}|^|{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|}|^|{)out\+=''\+/g,"$1out+="),d&&b.selfcontained&&(a="var encodeHTML=("+o.toString()+"());"+a);try{return new Function(b.varname,a)}catch(b){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+a),b}},j.compile=function(a,b){return j.template(a,null,b)}}();var JSZip=function(a,b){this.files={},this.root="",a&&this.load(a,b)};JSZip.signature={LOCAL_FILE_HEADER:"PK",CENTRAL_FILE_HEADER:"PK",CENTRAL_DIRECTORY_END:"PK",ZIP64_CENTRAL_DIRECTORY_LOCATOR:"PK",ZIP64_CENTRAL_DIRECTORY_END:"PK",DATA_DESCRIPTOR:"PK\b"},JSZip.defaults={base64:!1,binary:!1,dir:!1,date:null},JSZip.prototype=function(){var a=function(a,b,c){this.name=a,this.data=b,this.options=c};a.prototype={asText:function(){return this.options.binary?JSZip.prototype.utf8decode(this.data):this.data},asBinary:function(){return this.options.binary?this.data:JSZip.prototype.utf8encode(this.data)}};var b=function(a,b){var c,d="";for(c=0;c<b;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},c=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},d=function(a){return a=a||{},a.base64===!0&&null==a.binary&&(a.binary=!0),a=c(a,JSZip.defaults),a.date=a.date||new Date,a},e=function(a,b,c){var e=f(a);return e&&g.call(this,e),c=d(c),this.files[a]={name:a,data:b,options:c}},f=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},g=function(a){if("/"!=a.slice(-1)&&(a+="/"),!this.files[a]){var b=f(a);b&&g.call(this,b),e.call(this,a,"",{dir:!0})}return this.files[a]},h=function(a,c,d){var e,f,g=c!==a.name,h=a.data,i=a.options;e=i.date.getHours(),e<<=6,e|=i.date.getMinutes(),e<<=5,e|=i.date.getSeconds()/2,f=i.date.getFullYear()-1980,f<<=4,f|=i.date.getMonth()+1,f<<=5,f|=i.date.getDate(),i.base64===!0&&(h=JSZipBase64.decode(h)),i.binary===!1&&(h=this.utf8encode(h));var j=JSZip.compressions[d],k=j.compress(h),l="";return l+="\n\0",l+=g?"\0\b":"\0\0",l+=j.magic,l+=b(e,2),l+=b(f,2),l+=b(this.crc32(h),4),l+=b(k.length,4),l+=b(h.length,4),l+=b(c.length,2),l+="\0\0",{header:l,compressedData:k}};return{load:function(a,b){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(b){var d,e,f,g,h=[];for(d in this.files)f=this.files[d],g=new a(f.name,f.data,c(f.options)),e=d.slice(this.root.length,d.length),d.slice(0,this.root.length)===this.root&&b(e,g)&&h.push(g);return h},file:function(a,b,c){if(1===arguments.length){if(a instanceof RegExp){var d=a;return this.filter(function(a,b){return!b.options.dir&&d.test(a)})}return this.filter(function(b,c){return!c.options.dir&&b===a})[0]||null}return a=this.root+a,e.call(this,a,b,c),this},folder:function(a){if(!a)throw new Error("folder : wrong argument");if(a instanceof RegExp)return this.filter(function(b,c){return c.options.dir&&a.test(b)});var b=this.root+a,c=g.call(this,b),d=this.clone();return d.root=c.name,d},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b)if(b.options.dir)for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];else delete this.files[a];return this},generate:function(a){a=c(a||{},{base64:!0,compression:"STORE"});var d=a.compression.toUpperCase(),e=[],f=[],g=0;if(!JSZip.compressions[d])throw d+" is not a valid compression method !";for(var i in this.files)if(this.files.hasOwnProperty(i)){var j=this.files[i],k=this.utf8encode(j.name),l="",m="",n=h.call(this,j,k,d);l=JSZip.signature.LOCAL_FILE_HEADER+n.header+k+n.compressedData,m=JSZip.signature.CENTRAL_FILE_HEADER+"\0"+n.header+"\0\0\0\0\0\0"+(this.files[i].dir===!0?"\0\0\0":"\0\0\0\0")+b(g,4)+k,g+=l.length,f.push(l),e.push(m)}var o=f.join(""),p=e.join(""),q="";q=JSZip.signature.CENTRAL_DIRECTORY_END+"\0\0\0\0"+b(f.length,2)+b(f.length,2)+b(p.length,4)+b(o.length,4)+"\0\0";var r=o+p+q;return a.base64?JSZipBase64.encode(r):r},crc32:function(a,b){if(""===a||"undefined"==typeof a)return 0;var c="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";"undefined"==typeof b&&(b=0);var d=0,e=0;b^=-1;for(var f=0,g=a.length;f<g;f++)e=255&(b^a.charCodeAt(f)),d="0x"+c.substr(9*e,8),b=b>>>8^d;return b^-1},clone:function(){var a=new JSZip;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a},utf8encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):d>127&&d<2048?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},utf8decode:function(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),d<128?(b+=String.fromCharCode(d),c++):d>191&&d<224?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}}}(),JSZip.compressions={STORE:{magic:"\0\0",compress:function(a){return a},uncompress:function(a){return a}}};var JSZipBase64=function(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(b,c){for(var d,e,f,g,h,i,j,k="",l=0;l<b.length;)d=b.charCodeAt(l++),e=b.charCodeAt(l++),f=b.charCodeAt(l++),g=d>>2,h=(3&d)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k=k+a.charAt(g)+a.charAt(h)+a.charAt(i)+a.charAt(j);return k},decode:function(b,c){var d,e,f,g,h,i,j,k="",l=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<b.length;)g=a.indexOf(b.charAt(l++)),h=a.indexOf(b.charAt(l++)),i=a.indexOf(b.charAt(l++)),j=a.indexOf(b.charAt(l++)),d=g<<2|h>>4,e=(15&h)<<4|i>>2,f=(3&i)<<6|j,k+=String.fromCharCode(d),64!=i&&(k+=String.fromCharCode(e)),64!=j&&(k+=String.fromCharCode(f));return k}}}();if(!JSZip)throw"JSZip not defined";!function(){var a=32768,b=0,c=1,d=2,e=6,f=!0,g=32768,h=64,i=8192,j=2*a,k=3,l=258,m=16,n=8192,o=13;n>g&&alert("error: zip_INBUFSIZ is too small"),a<<1>1<<m&&alert("error: zip_WSIZE is too large"),o>m-1&&alert("error: zip_HASH_BITS is too large"),(o<8||258!=l)&&alert("error: Code too clever");var p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra=n,sa=1<<o,ta=sa-1,ua=a-1,va=0,wa=4096,xa=l+k+1,ya=a-xa,za=1,Aa=15,Ba=7,Ca=29,Da=256,Ea=256,Fa=Da+1+Ca,Ga=30,Ha=19,Ia=16,Ja=17,Ka=18,La=2*Fa+1,Ma=parseInt((o+k-1)/k),Na=null,Oa=function(){this.fc=0,this.dl=0},Pa=function(){this.dyn_tree=null,this.static_tree=null,this.extra_bits=null,this.extra_base=0,this.elems=0,this.max_length=0,this.max_code=0},Qa=function(a,b,c,d){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d},Ra=function(){this.next=null,this.len=0,this.ptr=new Array(i),this.off=0},Sa=new Array(0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0),Ta=new Array(0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13),Ua=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7),Va=new Array(16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15),Wa=new Array(new Qa(0,0,0,0),new Qa(4,4,8,4),new Qa(4,5,16,8),new Qa(4,6,32,32),new Qa(4,4,16,16),new Qa(8,16,32,32),new Qa(8,16,128,128),new Qa(8,32,128,256),new Qa(32,128,258,1024),new Qa(32,258,258,4096)),Xa=function(a){var b;if(a?a<1?a=1:a>9&&(a=9):a=e,P=a,s=!1,L=!1,null==Na){for(p=q=r=null,Na=new Array(i),w=new Array(j),x=new Array(ra),y=new Array(g+h),z=new Array(1<<m),S=new Array(La),b=0;b<La;b++)S[b]=new Oa;for(T=new Array(2*Ga+1),b=0;b<2*Ga+1;b++)T[b]=new Oa;for(U=new Array(Fa+2),b=0;b<Fa+2;b++)U[b]=new Oa;for(V=new Array(Ga),b=0;b<Ga;b++)V[b]=new Oa;for(W=new Array(2*Ha+1),b=0;b<2*Ha+1;b++)W[b]=new Oa;X=new Pa,Y=new Pa,Z=new Pa,$=new Array(Aa+1),_=new Array(2*Fa+1),ca=new Array(2*Fa+1),da=new Array(l-k+1),ea=new Array(512),fa=new Array(Ca),ga=new Array(Ga),ha=new Array(parseInt(n/8))}},Ya=function(a){a.next=p,p=a},Za=function(){var a;return null!=p?(a=p,p=p.next):a=new Ra,a.next=null,a.len=a.off=0,a},$a=function(b){return z[a+b]},_a=function(b,c){return z[a+b]=c},ab=function(a){Na[u+t++]=a,u+t==i&&Gb()},bb=function(a){a&=65535,u+t<i-2?(Na[u+t++]=255&a,Na[u+t++]=a>>>8):(ab(255&a),ab(a>>>8))},cb=function(){D=(D<<Ma^255&w[J+k-1])&ta,E=$a(D),z[J&ua]=E,_a(D,J)},db=function(a,b){Db(b[a].fc,b[a].dl)},eb=function(a){return 255&(a<256?ea[a]:ea[256+(a>>7)])},fb=function(a,b,c){return a[b].fc<a[c].fc||a[b].fc==a[c].fc&&ca[b]<=ca[c]},gb=function(a,b,c){var d;for(d=0;d<c&&qa<pa.length;d++)a[b+d]=255&pa.charCodeAt(qa++);return d},hb=function(){var b;for(b=0;b<sa;b++)z[a+b]=0;if(O=Wa[P].max_lazy,Q=Wa[P].good_length,f||(R=Wa[P].nice_length),N=Wa[P].max_chain,J=0,C=0,M=gb(w,0,2*a),M<=0)return L=!0,void(M=0);for(L=!1;M<xa&&!L;)jb();for(D=0,b=0;b<k-1;b++)D=(D<<Ma^255&w[b])&ta},ib=function(a){var b,c,d=N,e=J,g=I,h=J>ya?J-ya:va,i=J+l,j=w[e+g-1],k=w[e+g];I>=Q&&(d>>=2);do if(b=a,w[b+g]==k&&w[b+g-1]==j&&w[b]==w[e]&&w[++b]==w[e+1]){e+=2,b++;do;while(w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&e<i);if(c=l-(i-e),e=i-l,c>g){if(K=a,g=c,f){if(c>=l)break}else if(c>=R)break;j=w[e+g-1],k=w[e+g]}}while((a=z[a&ua])>h&&0!=--d);return g},jb=function(){var b,c,d=j-M-J;if(d==-1)d--;else if(J>=a+ya){for(b=0;b<a;b++)w[b]=w[b+a];for(K-=a,J-=a,C-=a,b=0;b<sa;b++)c=$a(b),_a(b,c>=a?c-a:va);for(b=0;b<a;b++)c=z[b],z[b]=c>=a?c-a:va;d+=a}L||(b=gb(w,J+M,d),b<=0?L=!0:M+=b)},kb=function(){for(;0!=M&&null==q;){var a;if(cb(),E!=va&&J-E<=ya&&(H=ib(E),H>M&&(H=M)),H>=k)if(a=Ab(J-K,H-k),M-=H,H<=O){H--;do J++,cb();while(0!=--H);J++}else J+=H,H=0,D=255&w[J],D=(D<<Ma^255&w[J+1])&ta;else a=Ab(0,255&w[J]),M--,J++;for(a&&(zb(0),C=J);M<xa&&!L;)jb()}},lb=function(){for(;0!=M&&null==q;){if(cb(),I=H,F=K,H=k-1,E!=va&&I<O&&J-E<=ya&&(H=ib(E),H>M&&(H=M),H==k&&J-K>wa&&H--),I>=k&&H<=I){var a;a=Ab(J-1-F,I-k),M-=I-1,I-=2;do J++,cb();while(0!=--I);G=0,H=k-1,J++,a&&(zb(0),C=J)}else 0!=G?(Ab(0,255&w[J-1])&&(zb(0),C=J),J++,M--):(G=1,J++,M--);for(;M<xa&&!L;)jb()}},mb=function(){L||(A=0,B=0,pb(),hb(),q=null,t=0,u=0,P<=3?(I=k-1,H=0):(H=k-1,G=0),v=!1)},nb=function(a,b,c){var d;return s||(mb(),s=!0,0!=M)?(d=ob(a,b,c))==c?c:v?d:(P<=3?kb():lb(),0==M&&(0!=G&&Ab(0,255&w[J-1]),zb(1),v=!0),d+ob(a,d+b,c-d)):(v=!0,0)},ob=function(a,b,c){var d,e,f;for(d=0;null!=q&&d<c;){for(e=c-d,e>q.len&&(e=q.len),f=0;f<e;f++)a[b+d+f]=q.ptr[q.off+f];if(q.off+=e,q.len-=e,d+=e,0==q.len){var g;g=q,q=q.next,Ya(g)}}if(d==c)return d;if(u<t){for(e=c-d,e>t-u&&(e=t-u),f=0;f<e;f++)a[b+d+f]=Na[u+f];u+=e,d+=e,t==u&&(t=u=0)}return d},pb=function(){var a,b,c,d,e;if(0==V[0].dl){for(X.dyn_tree=S,X.static_tree=U,X.extra_bits=Sa,X.extra_base=Da+1,X.elems=Fa,X.max_length=Aa,X.max_code=0,Y.dyn_tree=T,Y.static_tree=V,Y.extra_bits=Ta,Y.extra_base=0,Y.elems=Ga,Y.max_length=Aa,Y.max_code=0,Z.dyn_tree=W,Z.static_tree=null,Z.extra_bits=Ua,Z.extra_base=0,Z.elems=Ha,Z.max_length=Ba,Z.max_code=0,c=0,d=0;d<Ca-1;d++)for(fa[d]=c,a=0;a<1<<Sa[d];a++)da[c++]=d;for(da[c-1]=d,e=0,d=0;d<16;d++)for(ga[d]=e,a=0;a<1<<Ta[d];a++)ea[e++]=d;for(e>>=7;d<Ga;d++)for(ga[d]=e<<7,a=0;a<1<<Ta[d]-7;a++)ea[256+e++]=d;for(b=0;b<=Aa;b++)$[b]=0;for(a=0;a<=143;)U[a++].dl=8,$[8]++;for(;a<=255;)U[a++].dl=9,$[9]++;for(;a<=279;)U[a++].dl=7,$[7]++;for(;a<=287;)U[a++].dl=8,$[8]++;for(tb(U,Fa+1),a=0;a<Ga;a++)V[a].dl=5,V[a].fc=Eb(a,5);qb()}},qb=function(){var a;for(a=0;a<Fa;a++)S[a].fc=0;for(a=0;a<Ga;a++)T[a].fc=0;for(a=0;a<Ha;a++)W[a].fc=0;S[Ea].fc=1,na=oa=0,ia=ja=ka=0,la=0,ma=1},rb=function(a,b){for(var c=_[b],d=b<<1;d<=aa&&(d<aa&&fb(a,_[d+1],_[d])&&d++,!fb(a,c,_[d]));)_[b]=_[d],b=d,d<<=1;_[b]=c},sb=function(a){var b,c,d,e,f,g,h=a.dyn_tree,i=a.extra_bits,j=a.extra_base,k=a.max_code,l=a.max_length,m=a.static_tree,n=0;for(e=0;e<=Aa;e++)$[e]=0;for(h[_[ba]].dl=0,b=ba+1;b<La;b++)c=_[b],e=h[h[c].dl].dl+1,e>l&&(e=l,n++),h[c].dl=e,c>k||($[e]++,f=0,c>=j&&(f=i[c-j]),g=h[c].fc,na+=g*(e+f),null!=m&&(oa+=g*(m[c].dl+f)));if(0!=n){do{for(e=l-1;0==$[e];)e--;$[e]--,$[e+1]+=2,$[l]--,n-=2}while(n>0);for(e=l;0!=e;e--)for(c=$[e];0!=c;)d=_[--b],d>k||(h[d].dl!=e&&(na+=(e-h[d].dl)*h[d].fc,h[d].fc=e),c--)}},tb=function(a,b){var c,d,e=new Array(Aa+1),f=0;for(c=1;c<=Aa;c++)f=f+$[c-1]<<1,e[c]=f;for(d=0;d<=b;d++){var g=a[d].dl;0!=g&&(a[d].fc=Eb(e[g]++,g))}},ub=function(a){var b,c,d=a.dyn_tree,e=a.static_tree,f=a.elems,g=-1,h=f;for(aa=0,ba=La,b=0;b<f;b++)0!=d[b].fc?(_[++aa]=g=b,ca[b]=0):d[b].dl=0;for(;aa<2;){var i=_[++aa]=g<2?++g:0;d[i].fc=1,ca[i]=0,na--,null!=e&&(oa-=e[i].dl)}for(a.max_code=g,b=aa>>1;b>=1;b--)rb(d,b);do b=_[za],_[za]=_[aa--],rb(d,za),c=_[za],_[--ba]=b,_[--ba]=c,d[h].fc=d[b].fc+d[c].fc,ca[b]>ca[c]+1?ca[h]=ca[b]:ca[h]=ca[c]+1,d[b].dl=d[c].dl=h,_[za]=h++,rb(d,za);while(aa>=2);_[--ba]=_[za],sb(a),tb(d,g)},vb=function(a,b){var c,d,e=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),a[b+1].dl=65535,c=0;c<=b;c++)d=f,f=a[c+1].dl,++g<h&&d==f||(g<i?W[d].fc+=g:0!=d?(d!=e&&W[d].fc++,W[Ia].fc++):g<=10?W[Ja].fc++:W[Ka].fc++,g=0,e=d,0==f?(h=138,i=3):d==f?(h=6,i=3):(h=7,i=4))},wb=function(a,b){var c,d,e=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),c=0;c<=b;c++)if(d=f,f=a[c+1].dl,!(++g<h&&d==f)){if(g<i){do db(d,W);while(0!=--g)}else 0!=d?(d!=e&&(db(d,W),g--),db(Ia,W),Db(g-3,2)):g<=10?(db(Ja,W),Db(g-3,3)):(db(Ka,W),Db(g-11,7));g=0,e=d,0==f?(h=138,i=3):d==f?(h=6,i=3):(h=7,i=4)}},xb=function(){var a;for(vb(S,X.max_code),vb(T,Y.max_code),ub(Z),a=Ha-1;a>=3&&0==W[Va[a]].dl;a--);return na+=3*(a+1)+5+5+4,a},yb=function(a,b,c){var d;for(Db(a-257,5),Db(b-1,5),Db(c-4,4),d=0;d<c;d++)Db(W[Va[d]].dl,3);wb(S,a-1),wb(T,b-1)},zb=function(a){var e,f,g,h;if(h=J-C,ha[ka]=la,ub(X),ub(Y),g=xb(),e=na+3+7>>3,f=oa+3+7>>3,f<=e&&(e=f),h+4<=e&&C>=0){var i;for(Db((b<<1)+a,3),Fb(),bb(h),bb(~h),i=0;i<h;i++)ab(w[C+i])}else f==e?(Db((c<<1)+a,3),Bb(U,V)):(Db((d<<1)+a,3),yb(X.max_code+1,Y.max_code+1,g+1),Bb(S,T));qb(),0!=a&&Fb()},Ab=function(a,b){if(y[ia++]=b,0==a?S[b].fc++:(a--,S[da[b]+Da+1].fc++,T[eb(a)].fc++,x[ja++]=a,la|=ma),ma<<=1,0==(7&ia)&&(ha[ka++]=la,la=0,ma=1),P>2&&0==(4095&ia)){var c,d=8*ia,e=J-C;for(c=0;c<Ga;c++)d+=T[c].fc*(5+Ta[c]);if(d>>=3,ja<parseInt(ia/2)&&d<parseInt(e/2))return!0}return ia==n-1||ja==ra},Bb=function(a,b){var c,d,e,f,g=0,h=0,i=0,j=0;if(0!=ia)do 0==(7&g)&&(j=ha[i++]),d=255&y[g++],0==(1&j)?db(d,a):(e=da[d],db(e+Da+1,a),f=Sa[e],0!=f&&(d-=fa[e],Db(d,f)),c=x[h++],e=eb(c),db(e,b),f=Ta[e],0!=f&&(c-=ga[e],Db(c,f))),j>>=1;while(g<ia);db(Ea,a)},Cb=16,Db=function(a,b){B>Cb-b?(A|=a<<B,bb(A),A=a>>Cb-B,B+=b-Cb):(A|=a<<B,B+=b)},Eb=function(a,b){var c=0;do c|=1&a,a>>=1,c<<=1;while(--b>0);return c>>1},Fb=function(){B>8?bb(A):B>0&&ab(A),A=0,B=0},Gb=function(){if(0!=t){var a,b;for(a=Za(),null==q?q=r=a:r=r.next=a,a.len=t-u,b=0;b<a.len;b++)a.ptr[b]=Na[u+b];t=u=0}},Hb=function(a,b){var c,d;pa=a,qa=0,"undefined"==typeof b&&(b=e),Xa(b);for(var f=new Array(1024),g=[];(c=nb(f,0,f.length))>0;){var h=new Array(c);for(d=0;d<c;d++)h[d]=String.fromCharCode(f[d]);g[g.length]=h.join("")}return pa=null,g.join("")};JSZip.compressions.DEFLATE?JSZip.compressions.DEFLATE.compress=Hb:JSZip.compressions.DEFLATE={magic:"\b\0",compress:Hb}}(),this.JSON||(this.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;c<f;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;c<f;c+=1)d=rep[c],"string"==typeof d&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;d<c;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,!b||"function"==typeof b||"object"==typeof b&&"number"==typeof b.length)return str("",{"":a});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){function a(){try{return i in g&&g[i]}catch(a){return!1}}function b(){try{return j in g&&g[j]&&g[j][g.location.hostname]}catch(a){return!1}}function c(a){return function(){var b=Array.prototype.slice.call(arguments,0);b.unshift(e),l.appendChild(e),e.addBehavior("#default#userData"),e.load(i);var c=a.apply(f,b);return l.removeChild(e),c}}function d(a){return a.replace(n,"___")}var e,f={},g=window,h=g.document,i="localStorage",j="globalStorage",k="__storejs__";if(f.disabled=!1,f.set=function(a,b){},f.get=function(a){},f.remove=function(a){},f.clear=function(){},f.transact=function(a,b,c){var d=f.get(a);null==c&&(c=b,b=null),"undefined"==typeof d&&(d=b||{}),c(d),f.set(a,d)},f.getAll=function(){},f.serialize=function(a){return JSON.stringify(a)},f.deserialize=function(a){if("string"==typeof a)try{return JSON.parse(a)}catch(b){return a||void 0}},a())e=g[i],f.set=function(a,b){return void 0===b?f.remove(a):(e.setItem(a,f.serialize(b)),b)},f.get=function(a){return f.deserialize(e.getItem(a))},f.remove=function(a){e.removeItem(a)},f.clear=function(){e.clear()},f.getAll=function(){for(var a={},b=0;b<e.length;++b){var c=e.key(b);a[c]=f.get(c)}return a};else if(b())e=g[j][g.location.hostname],f.set=function(a,b){return void 0===b?f.remove(a):(e[a]=f.serialize(b),b)},f.get=function(a){return f.deserialize(e[a]&&e[a].value)},f.remove=function(a){delete e[a]},f.clear=function(){for(var a in e)delete e[a]},f.getAll=function(){for(var a={},b=0;b<e.length;++b){var c=e.key(b);a[c]=f.get(c)}return a};else if(h.documentElement.addBehavior){var l,m;try{m=new ActiveXObject("htmlfile"),m.open(),m.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'),m.close(),l=m.w.frames[0].document,e=l.createElement("div")}catch(a){e=h.createElement("div"),l=h.body}var n=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");f.set=c(function(a,b,c){return b=d(b),void 0===c?f.remove(b):(a.setAttribute(b,f.serialize(c)),a.save(i),c)}),f.get=c(function(a,b){return b=d(b),f.deserialize(a.getAttribute(b))}),f.remove=c(function(a,b){b=d(b),a.removeAttribute(b),a.save(i)}),f.clear=c(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(i);for(var c,d=0;c=b[d];d++)a.removeAttribute(c.name);a.save(i)}),f.getAll=c(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(i);for(var c,d={},e=0;c=b[e];++e)d[c]=f.get(c);return d})}try{f.set(k,k),f.get(k)!=k&&(f.disabled=!0),f.remove(k)}catch(a){f.disabled=!0}f.enabled=!f.disabled,"undefined"!=typeof module&&"function"!=typeof module?module.exports=f:"function"==typeof define&&define.amd?define(f):this.store=f}(),function(a){"use strict";a.Transitions={_names:{transition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend"},_parseTimes:function(a){for(var b,c=a.split(/,\s*/),d=0;d<c.length;d++)b=c[d],c[d]=parseFloat(b),b.match(/\ds/)&&(c[d]=1e3*c[d]);return c},getEvent:function(){var a=!1;for(var b in this._names)if("undefined"!=typeof document.body.style[b]){a=this._names[b];break}return this.getEvent=function(){return a},a},animFrame:function(a){var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;return b?this.animFrame=function(a){return b.call(window,a)}:this.animFrame=function(a){return setTimeout(a,10)},this.animFrame(a)},isSupported:function(){return this.getEvent()!==!1}},a.extend(a.fn,{afterTransition:function(b,c){if("undefined"==typeof c&&(c=b,b=1),!a.Transitions.isSupported()){for(var d=0;d<this.length;d++)c.call(this[d],{type:"aftertransition",elapsedTime:0,propertyName:"",currentTarget:this[d]});return this}for(var d=0;d<this.length;d++){var e=a(this[d]),f=e.css("transition-property").split(/,\s*/),g=e.css("transition-duration"),h=e.css("transition-delay");g=a.Transitions._parseTimes(g),h=a.Transitions._parseTimes(h);for(var i,j,k,l,m,n=0;n<f.length;n++)i=f[n],j=g[1==g.length?0:n],k=h[1==h.length?0:n],l=k+j*b,m=j*b/1e3,function(b,d,e,f){setTimeout(function(){a.Transitions.animFrame(function(){c.call(b[0],{type:"aftertransition",elapsedTime:f,propertyName:d,currentTarget:b[0]})})},e)}(e,i,l,m)}return this},transitionEnd:function(b){for(var c=0;c<this.length;c++)this[c].addEventListener(a.Transitions.getEvent(),function(a){b.call(this,a)});return this}})}.call(this,jQuery),"undefined"==typeof window.DEBUG&&(window.DEBUG=!0),function(a,b,c,d){"use strict";function e(a){return(a||document).querySelectorAll("[data-component]")}if(document.querySelectorAll){var f,g=a.tamia={},h={},i="_tamia-yep";if(g.initComponents=function(a,c){var g;c===d?g=f||(f=e()):(g=e(c),a=h);for(var j=0,k=g.length;j<k;j++){var l=g[j],m=l.getAttribute("data-component"),n=a[m];if(n&&!l.hasAttribute(i)){var o=!0;if("__tamia_cmpnt__"in n)o=new n(l).initializable;else if("function"==typeof n)o=n(l);else if(b)for(var p in n){var q=n[p],r=b(l);b.isArray(q)?r[p].apply(r,q):r[p](q)}o!==!1&&l.setAttribute(i,"yes")}}for(var s in a)h[s]=a[s]},b){var j=b(document),k="is-hidden",l="is-transit",m="appeared.tamia",n="disappeared.tamia";g.registerEvents=function(a){var b=$.map(a,o).join(" ");j.on(b,function(b){a[b.type](b.target)})};var o=function(a,b){return b+".tamia"},p={};p.init=function(a){g.initComponents(d,a)},p.appear=function(a){if(a=$(a),c&&c.csstransitions){if(a.hasClass(l)&&!a.hasClass(k))return;a.addClass(l),setTimeout(function(){a.removeClass(k),a.afterTransition(function(){a.removeClass(l),a.trigger(m)})},0)}else a.removeClass(k),a.trigger(m)},p.disappear=function(a){if(a=$(a),c&&c.csstransitions){if(a.hasClass(l)&&a.hasClass(k))return;a.addClass(l),a.addClass(k),a.afterTransition(function(){a.removeClass(l),a.trigger(n)})}else a.addClass(k),a.trigger(n)},p.toggle=function(a){a=$(a),a.hasClass(k)?p.appear(a):p.disappear(a)},g.registerEvents(p),j.on("click","[data-fire]",function(a){var c=b(a.currentTarget),e=c.data(),f=e.target&&b(e.target)||c.closest(e.closest),g=e.attrs;f.trigger(e.fire,g?g.split(/[;, ]/):d),a.preventDefault()})}}}(window,window.jQuery,window.Modernizr),function(a){"use strict";function b(a,b){return b=b||100,function(){a.debouncing||(a.debouncing=!0),clearTimeout(a.debounceTimeout);var c=Array.prototype.slice.apply(arguments);return a.debounceTimeout=setTimeout(function(){a.lastReturnVal=a.apply(window,c),a.debouncing=!1},b),a.lastReturnVal}}function c(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d(a){for(var b=["url","title","twitter_via","twitter_related","pinterest_media"],d=0;d<b.length;d++){var e=b[d];a[e]=c(a[e])}return a}function e(a,b){jQuery.each(b,function(b,c){var d=a.find('[name="'+b+'"]'),e=d.attr("type");switch(e){case"checkbox":d.prop("checked",!!c);break;case"radio":d.filter('[value="'+c+'"]').prop("checked",!0);break;default:d.val(c)}})}function f(a){return a.replace(/\n[\n\t]*\n/g,"\n").replace(/ {2,}/g," ")}function g(a){return htmlhl(a.replace(/\\\//g,"/"))}function h(b){var c=i(),d=new JSZip;d.file("index.html",r(o));for(var e in c)d.file(e,c[e]);var f=d.generate();if(t){var g=a("#download-proxy"),h=g.find('[name="content"]');return h.val(f),g.submit(),!1}a(b.target).attr("href","data:application/zip;base64,"+f)}function i(){var a={};for(var b in q)a[k(b)]=j(b);return a}function j(b){var c=q[b],d=k(c.url);return c.files||(c.files={}),c.files[d]||a.ajax(d,{async:!1,dataType:"html"}).then(function(a){c.files[d]=a}),c.files[d]}function k(a){return a.replace("{skin}",n)}a.extend(doT.templateSettings,{strip:!1,varname:"$"});var l=a("html").attr("lang"),m=["flat","classic","birman"],n="classic",o={lang:l,jquery_ver:jQuery.fn.jquery,footer:a("#index_footer_tmpl").html(),html:"",skin:n},p="127.0.0.1"===location.hostname?"":"/",q={"social-likes.min.js":{url:p+"src/social-likes.min.js"},"social-likes_{skin}.css":{url:p+"src/social-likes_{skin}.css"}},r=doT.template(a("#index_tmpl").html().replace(/\\\//g,"/")),s="#ponies"===location.hash,t=!0;a.fn.serializeObject=function(){var b={},c=this.serializeArray();return a.each(c,function(){void 0!==b[this.name]?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""}),b},tamia.initComponents({builder:function(c){function i(){var a=k.serialize();if(a!==j){var b=d(k.serializeObject());b.experimental=s,r.toggleClass("is-hidden","1"!==b.site_twitter),t.toggleClass("is-hidden","1"!==b.site_pinterest),u.toggleClass("is-hidden","flat"!==b.skin);var c=f(w(b));q.html(g(v(b)+c)),x(c,b),o.html=c,o.skin=b.skin,j=a}}var j,k=a(c),p=a(".js-preview"),q=a(".js-code"),r=k.find(".js-twitter-extra"),t=k.find(".js-pinterest-extra"),u=k.find(".js-light"),v=doT.template(a("#prepend_tmpl").html()),w=doT.template(a("#build_tmpl").html()),x=b(function(b,c){
n=c.skin,a.each(m,function(b,c){a("#styles_"+c).prop("disabled",c!==n)}),p.attr("class",p.attr("class").replace(/(preview_)\w+/,"$1"+c.type)),p.html(b),p.find(".social-likes").socialLikes(),k.find(".js-experimental").toggleClass("is-hidden",!s),store.set(l,{skin:n,type:c.type,counters:!!c.counters,light:!!c.light,title:c.title,url:c.url,site_facebook:!!c.site_facebook,site_mailru:!!c.site_mailru,site_odnoklassniki:!!c.site_odnoklassniki,site_plusone:!!c.site_plusone,site_twitter:!!c.site_twitter,site_pinterest:!!c.site_pinterest,site_vkontakte:!!c.site_vkontakte,twitter_related:c.twitter_related,twitter_via:c.twitter_via,pinterest_media:c.pinterest_media})}),y=function(){var a=store.get(l);a&&e(k,a)};y(),k.on("change input","input",i),i(),k.submit(function(){return!1}),a(".js-download").click(h)}})}(jQuery);