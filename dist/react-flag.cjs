"use client";"use strict";const s=require("react/jsx-runtime"),i=require("flagpack-core");function n(r){return r.default.src!==void 0}function d(r){return r.default!==void 0}const g=({code:r="NL",size:t="l",gradient:u="",hasBorder:a=!0,hasDropShadow:c=!1,hasBorderRadius:l=!0,className:o})=>{const e=i.imageUrl(i.isoToCountryCode(r).toUpperCase(),t.toLowerCase());return console.log(e),s.jsx("div",{className:`flag ${u} size-${t} ${a?"border":""} ${c?"drop-shadow":""} ${l?"border-radius":""} ${o?o.replace(/\s\s+/g," ").trim():""}`,children:n(e)?s.jsx("img",{src:e.default.src}):d(e)?s.jsx("img",{src:e.default}):s.jsx("img",{src:e})})},f=g;module.exports=f;