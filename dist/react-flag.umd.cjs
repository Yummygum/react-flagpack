(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("react/jsx-runtime"),require("flagpack-core")):typeof define=="function"&&define.amd?define(["react/jsx-runtime","flagpack-core"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.FlagLibrary=r(e.jsxRuntime,e.flagpackCore))})(this,function(e,r){"use strict";"use client"function n(s){return s.default.src!==void 0}function u(s){return s.default!==void 0}return({code:s="NL",size:i="l",gradient:d="",hasBorder:a=!0,hasDropShadow:c=!1,hasBorderRadius:f=!0,className:o})=>{const t=r.imageUrl(r.isoToCountryCode(s).toUpperCase(),i.toLowerCase());return console.log(t),e.jsx("div",{className:`flag ${d} size-${i} ${a?"border":""} ${c?"drop-shadow":""} ${f?"border-radius":""} ${o?o.replace(/\s\s+/g," ").trim():""}`,children:n(t)?e.jsx("img",{src:t.default.src}):u(t)?e.jsx("img",{src:t.default}):e.jsx("img",{src:t})})}});
