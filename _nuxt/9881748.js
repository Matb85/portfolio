(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{247:function(t,o,e){var content=e(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("59f850b2",content,!0,{sourceMap:!1})},263:function(t,o,e){"use strict";e(247)},264:function(t,o,e){var r=e(53)(!1);r.push([t.i,".list-primary{--text-opacity:1;color:#e24f55;color:rgba(226,79,85,var(--text-opacity))}.list-info{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.list-success{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.list-warning{--text-opacity:1;color:#ed8936;color:rgba(237,137,54,var(--text-opacity))}.list-danger{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}",""]),t.exports=r},286:function(t,o,e){"use strict";e.r(o);e(31);var r={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},c=(e(263),e(2)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",t._l(t.items,(function(o,i){return e("div",{key:i,staticClass:"mt-3 flex"},[e("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[e(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(o)+"\n  ")])})),0)}),[],!1,null,null,null);o.default=component.exports}}]);