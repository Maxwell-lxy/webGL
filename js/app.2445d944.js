(function(t){function e(e){for(var n,a,s=e[0],u=e[1],l=e[2],c=0,f=[];c<s.length;c++)a=s[c],i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dcb739c9"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t),o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,r[1](a)}i[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var h=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a=r("2877"),s={},u=Object(a["a"])(s,i,o,!1,null,null,null),l=u.exports,c=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{attrs:{id:"webgl",width:"400",height:"400",tabindex:"1"},on:{keydown:t.onKeydown,mousedown:t.onMousedown,mousemove:t.onMousemove,mouseup:t.onMouseup}},[t._v('\n        Please use a browser that supports "canvas"\n    ')]),r("p",[t._v("1)⬅➡⬆⬇: 调整角度")]),r("p",[t._v("2)zwcv: 调整手掌、手指角度")]),r("p",[t._v("3)鼠标拖拽旋转")]),r("p",[t._v("4)选中手臂改变颜色")])])},f=[];r("ac6a"),r("34ef"),r("63d9");function g(t){var e=t.gl,r=t.type,n=t.source,i=e.createShader(e[r]);return e.shaderSource(i,n),e.compileShader(i),i}function m(t){var e=t.gl,r=t.vSource,n=t.fSource,i=g({type:"VERTEX_SHADER",source:r,gl:e}),o=g({type:"FRAGMENT_SHADER",source:n,gl:e}),a=e.createProgram();return e.attachShader(a,i),e.attachShader(a,o),e.linkProgram(a),e.useProgram(a),a}function v(t){var e=t.x,r=t.y,n=t.canvas,i=n.getBoundingClientRect();return e=(e-i.left-n.width/2)/(n.width/2),r=(n.height/2-(r-i.top))/(n.height/2),{x:e,y:r}}function d(t){var e=t.x,r=t.y,n=t.canvas,i=n.getBoundingClientRect();return{x:e-i.left,y:i.bottom-r}}function _(t){var e=t.gl,r=t.vertices,n=t.program,i=t.verticesInfo,o=t.indices;e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),i.forEach(function(t){var r=t.attrVar,i=t.size,o=t.stride,a=t.offset,s=e.getAttribLocation(n,r);e.vertexAttribPointer(s,i,e.FLOAT,!1,o,a),e.enableVertexAttribArray(s)}),o&&(e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW))}function p(t){var e=new Float32Array(3);t.forEach(function(t,r){e[r]=t}),this.elements=e}p.prototype.normalize=function(){var t=this.elements,e=Math.sqrt(t.reduce(function(t,e){return t+Math.pow(e,2)},0));return e?1===e?this:(e=1/e,t.forEach(function(r,n){return t[n]*=e}),this):(t.forEach(function(e,r){return t[r]=0}),this)};var x=r("75fc"),y=r("d225"),w=r("b0b4"),M=function(){function t(e){if(Object(y["a"])(this,t),e){var r=e.elements;this.elements=new Float32Array(Object(x["a"])(r))}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return Object(w["a"])(t,[{key:"setRotate",value:function(t,e,r,n){var i,o,a,s,u,l,c,h,f,g,m,v,d=t*Math.PI/180;return i=Math.sin(d),o=Math.cos(d),0!==e&&0===r&&0===n?(e<0&&(i=-i),v=[1,0,0,0,0,o,i,0,0,-i,o,0,0,0,0,1]):0===e&&0!==r&&0===n?(r<0&&(i=-i),v=[o,0,-i,0,0,1,0,0,i,0,o,0,0,0,0,1]):0===e&&0===r&&0!==n?(n<0&&(i=-i),v=[o,i,0,0,-i,o,0,0,0,0,1,0,0,0,0,1]):(a=Math.sqrt(e*e+r*r+n*n),1!==a&&(s=1/a,e*=s,r*=s,n*=s),u=1-o,l=e*r,c=r*n,h=n*e,f=e*i,g=r*i,m=n*i,v=[e*e*u+o,l*u+m,h*u-g,0,l*u-m,r*r*u+o,c*u+f,0,h*u+g,c*u-f,n*n*u+o,0,0,0,0,1]),this.elements=new Float32Array(v),this}},{key:"rotate",value:function(e,r,n,i){return this.concat((new t).setRotate(e,r,n,i))}},{key:"concat",value:function(t){var e,r,n,i,o,a,s,u;if(r=this.elements,n=this.elements,i=t.elements,r===i)for(i=new Float32Array(16),e=0;e<16;++e)i[e]=r[e];for(e=0;e<4;e++)o=n[e],a=n[e+4],s=n[e+8],u=n[e+12],r[e]=o*i[0]+a*i[1]+s*i[2]+u*i[3],r[e+4]=o*i[4]+a*i[5]+s*i[6]+u*i[7],r[e+8]=o*i[8]+a*i[9]+s*i[10]+u*i[11],r[e+12]=o*i[12]+a*i[13]+s*i[14]+u*i[15];return this}},{key:"multiply",value:function(t){return this.concat(t)}},{key:"setTranslate",value:function(t,e,r){return this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1]),this}},{key:"translate",value:function(t,e,r){var n=this.elements;return this.elements=new Float32Array([n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],n[9],n[10],n[11],n[12]+n[0]*t+n[4]*e+n[8]*r,n[13]+n[1]*t+n[5]*e+n[9]*r,n[14]+n[2]*t+n[6]*e+n[10]*r,n[15]+n[3]*t+n[7]*e+n[11]*r]),this}},{key:"setScale",value:function(t,e,r){return this.elements=new Float32Array([t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1]),this}},{key:"scale",value:function(t,e,r){var n=this.elements;return n[0]*=t,n[4]*=e,n[8]*=r,n[1]*=t,n[5]*=e,n[9]*=r,n[2]*=t,n[6]*=e,n[10]*=r,n[3]*=t,n[7]*=e,n[11]*=r,this}},{key:"setLookAt",value:function(t,e,r,n,i,o,a,s,u){var l,c,h,f,g,m,v,d,_,p,x,y;return c=n-t,h=i-e,f=o-r,g=1/Math.sqrt(c*c+h*h+f*f),c*=g,h*=g,f*=g,m=h*u-f*s,v=f*a-c*u,d=c*s-h*a,_=1/Math.sqrt(m*m+v*v+d*d),m*=_,v*=_,d*=_,p=v*f-d*h,x=d*c-m*f,y=m*h-v*c,l=this.elements,l[0]=m,l[1]=p,l[2]=-c,l[3]=0,l[4]=v,l[5]=x,l[6]=-h,l[7]=0,l[8]=d,l[9]=y,l[10]=-f,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,this.translate(-t,-e,-r)}},{key:"lookAt",value:function(e,r,n,i,o,a,s,u,l){return this.concat((new t).setLookAt(e,r,n,i,o,a,s,u,l))}},{key:"setOrtho",value:function(t,e,r,n,i,o){var a,s,u,l;if(t===e||r===n||i===o)throw"null frustum";return s=1/(e-t),u=1/(n-r),l=1/(o-i),a=this.elements,a[0]=2*s,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2*l,a[11]=0,a[12]=-(e+t)*s,a[13]=-(n+r)*u,a[14]=-(o+i)*l,a[15]=1,this}},{key:"setPerspective",value:function(t,e,r,n){var i,o,a,s;if(r===n||0===e)throw"null frustum";if(r<=0)throw"near <= 0";if(n<=0)throw"far <= 0";if(t=Math.PI*t/180/2,a=Math.sin(t),0===a)throw"null frustum";return o=1/(n-r),s=Math.cos(t)/a,i=this.elements,i[0]=s/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-(n+r)*o,i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*r*n*o,i[15]=0,this}},{key:"perspective",value:function(e,r,n,i){return this.concat((new t).setPerspective(e,r,n,i))}},{key:"set",value:function(t){var e,r,n;if(r=t.elements,n=this.elements,r!==n){for(e=0;e<16;++e)n[e]=r[e];return this}}},{key:"transpose",value:function(){var t,e;return t=this.elements,e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}},{key:"setInverseOf",value:function(t){var e,r,n,i,o;if(r=t.elements,n=this.elements,i=new Float32Array(16),i[0]=r[5]*r[10]*r[15]-r[5]*r[11]*r[14]-r[9]*r[6]*r[15]+r[9]*r[7]*r[14]+r[13]*r[6]*r[11]-r[13]*r[7]*r[10],i[4]=-r[4]*r[10]*r[15]+r[4]*r[11]*r[14]+r[8]*r[6]*r[15]-r[8]*r[7]*r[14]-r[12]*r[6]*r[11]+r[12]*r[7]*r[10],i[8]=r[4]*r[9]*r[15]-r[4]*r[11]*r[13]-r[8]*r[5]*r[15]+r[8]*r[7]*r[13]+r[12]*r[5]*r[11]-r[12]*r[7]*r[9],i[12]=-r[4]*r[9]*r[14]+r[4]*r[10]*r[13]+r[8]*r[5]*r[14]-r[8]*r[6]*r[13]-r[12]*r[5]*r[10]+r[12]*r[6]*r[9],i[1]=-r[1]*r[10]*r[15]+r[1]*r[11]*r[14]+r[9]*r[2]*r[15]-r[9]*r[3]*r[14]-r[13]*r[2]*r[11]+r[13]*r[3]*r[10],i[5]=r[0]*r[10]*r[15]-r[0]*r[11]*r[14]-r[8]*r[2]*r[15]+r[8]*r[3]*r[14]+r[12]*r[2]*r[11]-r[12]*r[3]*r[10],i[9]=-r[0]*r[9]*r[15]+r[0]*r[11]*r[13]+r[8]*r[1]*r[15]-r[8]*r[3]*r[13]-r[12]*r[1]*r[11]+r[12]*r[3]*r[9],i[13]=r[0]*r[9]*r[14]-r[0]*r[10]*r[13]-r[8]*r[1]*r[14]+r[8]*r[2]*r[13]+r[12]*r[1]*r[10]-r[12]*r[2]*r[9],i[2]=r[1]*r[6]*r[15]-r[1]*r[7]*r[14]-r[5]*r[2]*r[15]+r[5]*r[3]*r[14]+r[13]*r[2]*r[7]-r[13]*r[3]*r[6],i[6]=-r[0]*r[6]*r[15]+r[0]*r[7]*r[14]+r[4]*r[2]*r[15]-r[4]*r[3]*r[14]-r[12]*r[2]*r[7]+r[12]*r[3]*r[6],i[10]=r[0]*r[5]*r[15]-r[0]*r[7]*r[13]-r[4]*r[1]*r[15]+r[4]*r[3]*r[13]+r[12]*r[1]*r[7]-r[12]*r[3]*r[5],i[14]=-r[0]*r[5]*r[14]+r[0]*r[6]*r[13]+r[4]*r[1]*r[14]-r[4]*r[2]*r[13]-r[12]*r[1]*r[6]+r[12]*r[2]*r[5],i[3]=-r[1]*r[6]*r[11]+r[1]*r[7]*r[10]+r[5]*r[2]*r[11]-r[5]*r[3]*r[10]-r[9]*r[2]*r[7]+r[9]*r[3]*r[6],i[7]=r[0]*r[6]*r[11]-r[0]*r[7]*r[10]-r[4]*r[2]*r[11]+r[4]*r[3]*r[10]+r[8]*r[2]*r[7]-r[8]*r[3]*r[6],i[11]=-r[0]*r[5]*r[11]+r[0]*r[7]*r[9]+r[4]*r[1]*r[11]-r[4]*r[3]*r[9]-r[8]*r[1]*r[7]+r[8]*r[3]*r[5],i[15]=r[0]*r[5]*r[10]-r[0]*r[6]*r[9]-r[4]*r[1]*r[10]+r[4]*r[2]*r[9]+r[8]*r[1]*r[6]-r[8]*r[2]*r[5],o=r[0]*i[0]+r[1]*i[4]+r[2]*i[8]+r[3]*i[12],0===o)return this;for(o=1/o,e=0;e<16;e++)n[e]=i[e]*o;return this}}]),t}(),A={data:function(){return{lookAt:{eye:{x:20,y:10,z:30},look:{x:0,y:0,z:0},up:{x:0,y:1,z:0}},canvas:null,gl:null,g_points:[],program:null,shape:null,VSHADER_SOURCE:"uniform mat4 u_MvpMatrix;\nuniform mat4 u_ModelMatrix;\nuniform mat4 u_NormalMatrix;\nattribute vec4 a_Normal;\nuniform vec3 u_LightColor;\nuniform vec3 u_LightDirection;\nuniform vec3 u_LightPosition;\nuniform vec3 u_AmbientLight;\nattribute vec4 a_Position;\nattribute float a_PointSize;\nattribute vec4 a_Color;\nvarying vec4 v_Color;\nuniform bool u_Clicked;\nvarying vec3 v_Normal;\nvarying vec3 v_Position;\nvoid main() {\ngl_Position = u_MvpMatrix * a_Position;\ngl_PointSize = a_PointSize;\n vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));\n vec4 vertexPosition = u_ModelMatrix * a_Position;\n vec3 lightDirection = normalize(u_LightPosition - vec3(vertexPosition));\n float nDotL = max(dot(lightDirection, normal), 0.0);\n vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;\n vec3 ambient = u_AmbientLight * a_Color.rgb;\n if (u_Clicked) {\n   v_Color = vec4(1.0, 0.0, 0.0, 1.0);\n } else {\n   v_Color = vec4(diffuse + ambient, a_Color.a);\n }\n}\n",FSHADER_SOURCE:"precision mediump float;\nvarying vec4 v_Color;\nvoid main() {\n  gl_FragColor = v_Color;\n}\n",g_mvpMatrix:new M,g_normalMatrix:new M,g_modelMatrix:new M,viewProjMatrix:new M,armPro:{},ANGLE_STEP:3,g_arm1Angle:-90,g_joint1Angle:0,g_joint2Angle:0,g_joint3Angle:0,g_matrixStack:[],angle:{x:0,y:0},dragging:!1,mousedown:{x:null,y:null}}},methods:{setArmsColorByRandom:function(){for(var t=[Math.random(),Math.random(),Math.random()],e=[],r=this.program,n=this.gl,i=Float32Array.BYTES_PER_ELEMENT,o=0;o<24;o++)e.push.apply(e,t);_({gl:n,program:r,vertices:new Float32Array(e),verticesInfo:[{attrVar:"a_Color",size:3,stride:3*i,offset:0}]})},checkLocInArms:function(t){var e=t.x,r=t.y,n=!1,i=this.armPro.u_Clicked,o=this.gl,a=this.canvas,s=d({x:e,y:r,canvas:a});o.uniform1i(i,1),this.draw();var u=new Uint8Array(4);return o.readPixels(s.x,s.y,1,1,o.RGBA,o.UNSIGNED_BYTE,u),255===u[0]&&(n=!0),o.uniform1i(i,0),n},onMousedown:function(t){var e=t.clientX,r=t.clientY,n=t.target,i=n.getBoundingClientRect(),o=i.left,a=i.right,s=i.top,u=i.bottom,l=this.mousedown;o<=e&&e<a&&s<=r&&r<u&&(this.dragging=!0,l.x=e,l.y=r,this.checkLocInArms({x:e,y:r})&&this.setArmsColorByRandom())},onMousemove:function(t){var e=t.clientX,r=t.clientY,n=this.mousedown,i=this.dragging,o=this.canvas,a=this.angle;if(i){var s=100/o.height,u=s*(e-n.x),l=s*(r-n.y);a.x+=u,a.y+=l,n.x=e,n.y=r}},onMouseup:function(){this.dragging=!1},onKeydown:function(t){var e=t.which,r=this.g_joint1Angle,n=this.ANGLE_STEP,i=this.g_arm1Angle,o=this.g_joint2Angle,a=this.g_joint3Angle;switch(e){case 38:r<135&&(this.g_joint1Angle+=n);break;case 40:r>-135&&(this.g_joint1Angle-=n);break;case 39:this.g_arm1Angle=(i+n)%360;break;case 37:this.g_arm1Angle=(i-n)%360;break;case 90:this.g_joint2Angle=(o+n)%360;break;case 88:this.g_joint2Angle=(o-n)%360;break;case 86:a<60&&(this.g_joint3Angle=(a+n)%360);break;case 67:a>-60&&(this.g_joint3Angle=(a-n)%360);break;default:return}this.draw()},drawArms:function(){var t=this.gl,e=this.program,r=this.canvas,n=this.viewProjMatrix,i=t.getUniformLocation(e,"u_MvpMatrix"),o=t.getUniformLocation(e,"u_LightColor"),a=t.getUniformLocation(e,"u_LightDirection"),s=t.getUniformLocation(e,"u_AmbientLight"),u=t.getUniformLocation(e,"u_NormalMatrix"),l=t.getUniformLocation(e,"u_ModelMatrix"),c=t.getUniformLocation(e,"u_LightPosition"),h=t.getUniformLocation(e,"u_Clicked");this.armPro={u_MvpMatrix:i,u_LightColor:o,u_LightDirection:a,u_AmbientLight:s,u_NormalMatrix:u,u_ModelMatrix:l,u_LightPosition:c,u_Clicked:h};var f=Float32Array.BYTES_PER_ELEMENT,g=[.5,1,.5,-.5,1,.5,-.5,0,.5,.5,0,.5,.5,1,.5,.5,0,.5,.5,0,-.5,.5,1,-.5,.5,1,.5,.5,1,-.5,-.5,1,-.5,-.5,1,.5,-.5,1,.5,-.5,1,-.5,-.5,0,-.5,-.5,0,.5,-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5,.5,0,-.5,-.5,0,-.5,-.5,1,-.5,.5,1,-.5],m=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),v=g.reduce(function(t,e,r,n){return 0!==r&&r%3!==0||t.push(e,n[r+1],n[r+2],1,.4,0,m[r],m[r+1],m[r+2]),t},[]),d=new Float32Array(v),x=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),y=this.lookAt,w=y.eye,M=y.look,A=y.up;_({gl:t,program:e,vertices:d,indices:x,verticesInfo:[{attrVar:"a_Position",size:3,stride:9*f,offset:0},{attrVar:"a_Color",size:3,stride:9*f,offset:3*f},{attrVar:"a_Normal",size:3,stride:9*f,offset:6*f}]}),t.uniform1i(h,0),t.uniform3f(o,1,1,1),t.uniform3f(c,0,3,4);var b=new p([.5,3,4]);b.normalize(),t.uniform3fv(a,b.elements),t.uniform3f(s,.2,.2,.2),n.setPerspective(50,r.width/r.height,1,1e3),n.lookAt(w.x,w.y,w.z,M.x,M.y,M.z,A.x,A.y,A.z),this.draw()},draw:function(){var t=this.gl,e=this.g_arm1Angle,r=this.g_joint1Angle,n=this.g_joint2Angle,i=this.g_matrixStack,o=this.g_joint3Angle,a=this.angle;t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);var s=2;this.g_modelMatrix.setTranslate(0,-12,0),this.g_modelMatrix.rotate(a.y,1,0,0),this.g_modelMatrix.rotate(a.x,0,1,0),this.drawBox({width:10,height:s,depth:10});var u=10;this.g_modelMatrix.translate(0,s,0),this.g_modelMatrix.rotate(e,0,1,0),this.drawBox({width:3,height:u,depth:3});var l=10;this.g_modelMatrix.translate(0,u,0),this.g_modelMatrix.rotate(r,0,0,1),this.drawBox({width:4,height:l,depth:4});var c=2;this.g_modelMatrix.translate(0,l,0),this.g_modelMatrix.rotate(n,0,1,0),this.drawBox({width:2,height:c,depth:6}),this.g_modelMatrix.translate(0,c,0),i.push(new M(this.g_modelMatrix)),this.g_modelMatrix.translate(0,0,2),this.g_modelMatrix.rotate(o,1,0,0),this.drawBox({width:1,height:2,depth:1}),this.g_modelMatrix=i.pop(),this.g_modelMatrix.translate(0,0,-2),this.g_modelMatrix.rotate(-o,1,0,0),this.drawBox({width:1,height:2,depth:1}),requestAnimationFrame(this.draw)},drawBox:function(t){var e=t.width,r=t.height,n=t.depth,i=this.gl,o=this.g_mvpMatrix,a=this.g_normalMatrix,s=this.g_modelMatrix,u=this.viewProjMatrix,l=this.g_matrixStack,c=this.armPro,h=c.u_MvpMatrix,f=c.u_NormalMatrix,g=c.u_ModelMatrix;l.push(new M(s)),s.scale(e,r,n),i.uniformMatrix4fv(g,!1,s.elements),o.set(u).multiply(s),i.uniformMatrix4fv(h,!1,o.elements),a.setInverseOf(s),a.transpose(),i.uniformMatrix4fv(f,!1,a.elements),i.drawElements(i.TRIANGLES,36,i.UNSIGNED_BYTE,0),this.g_modelMatrix=l.pop()},init:function(){var t=this.VSHADER_SOURCE,e=this.FSHADER_SOURCE;this.canvas=document.getElementById("webgl"),this.canvas.focus(),this.gl=this.canvas.getContext("webgl");var r=this.gl;this.program=m({gl:r,vSource:t,fSource:e});var n=r.getAttribLocation(this.program,"a_PointSize"),i=r.getUniformLocation(this.program,"u_FragColor");r.vertexAttrib1f(n,10),r.uniform4f(i,0,1,0,1),r.clearColor(0,0,0,1),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT)},addPoint:function(t){var e=this.canvas,r=this.g_points,n=this.gl,i=this.program,o=t.clientX,a=t.clientY,s=v({x:o,y:a,canvas:e}),u=n.getAttribLocation(i,"a_Position");s.color=[Math.random(),Math.random(),Math.random(),1],r.push(s),n.clear(n.COLOR_BUFFER_BIT),r.forEach(function(t){var e=t.x,r=t.y,o=t.color,a=n.getUniformLocation(i,"u_FragColor");n.vertexAttrib3f(u,e,r,0),n.uniform4fv(a,o),n.drawArrays(n.POINTS,0,1)})}},mounted:function(){this.init(),this.drawArms()}},b=A,E=Object(a["a"])(b,h,f,!1,null,null,null),P=E.exports;n["a"].use(c["a"]);var k=new c["a"]({routes:[{path:"/",name:"home",component:P},{path:"/NVMC",name:"NVMC",component:function(){return r.e("about").then(r.bind(null,"cb28"))}}]}),L=r("2f62");n["a"].use(L["a"]);var R=new L["a"].Store({state:{},mutations:{},actions:{}});r("78a7");n["a"].config.productionTip=!1,new n["a"]({router:k,store:R,render:function(t){return t(l)}}).$mount("#app")},"78a7":function(t,e,r){}});
//# sourceMappingURL=app.2445d944.js.map