(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.flag{display:inline-block;overflow:hidden;position:relative;box-sizing:border-box}.flag.size-s{width:16px;height:12px}.flag.size-s.drop-shadow{box-shadow:0 0 1px .5px #0000001a}.flag.size-s.border-radius{border-radius:1px}.flag.size-s.border-radius.border:before{border-radius:1px}.flag.size-m{width:20px;height:15px}.flag.size-m.drop-shadow{box-shadow:0 1px 2px #0000001a}.flag.size-m.border-radius{border-radius:1.5px}.flag.size-m.border-radius.border:before{border-radius:1.5px}.flag.size-l{width:32px;height:24px}.flag.size-l.drop-shadow{box-shadow:0 2px 3px #0000001a}.flag.size-l.border-radius{border-radius:2px}.flag.size-l.border-radius.border:before{border-radius:2px}.flag.border:before{content:"";width:100%;height:100%;position:absolute;display:block;box-sizing:border-box;border:1px solid rgba(0,0,0,.5);mix-blend-mode:overlay}.flag.top-down:before{content:"";width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background-image:linear-gradient(0deg,#0000004d 2%,#ffffffb3)}.flag.real-linear:before{content:"";width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background-image:linear-gradient(45deg,#0003,#27272738 11%,#ffffff4d 27%,#0000003d 41%,#0000008c,#ffffff42,#00000045 74%,#ffffff4d)}.flag.real-circular:before{content:"";width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background:radial-gradient(50% 36%,#ffffff4d,#0000003d 11%,#0000008c 17%,#ffffff42,#0000002b 27%,#ffffff47 31%,#fff0 37%) center calc(50% - 8px) /600% 600%,radial-gradient(50% 123%,#ffffff4d 25%,#0000003d 48%,#0000008c 61%,#ffffff42 72%,#0000002b,#ffffff47 88%,#ffffff4d) center calc(50% - 8px) /600% 600%}.flag img{display:block;width:100%;height:100%;object-fit:cover}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
"use client";
import { jsx as s } from "react/jsx-runtime";
const d = ({
  code: a = "NL",
  size: r = "l",
  gradient: l = "",
  hasBorder: t = !0,
  hasDropShadow: o = !1,
  hasBorderRadius: $ = !0,
  className: e
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `flag ${l} size-${r} ${t ? "border" : ""} ${o ? "drop-shadow" : ""} ${$ ? "border-radius" : ""} ${e ? e.replace(/\s\s+/g, " ").trim() : ""}`,
    children: /* @__PURE__ */ s("img", { src: `/flags/${r}/${a}.svg` })
  }
), i = d;
export {
  i as default
};
