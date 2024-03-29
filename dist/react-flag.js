"use client";
import { jsx as o } from "react/jsx-runtime";
import { imageUrl as d, isoToCountryCode as c } from "flagpack-core";
function n(e) {
  return e.default.src !== void 0;
}
function f(e) {
  return e.default !== void 0;
}
const g = ({
  code: e = "NL",
  size: t = "l",
  gradient: a = "",
  hasBorder: i = !0,
  hasDropShadow: l = !1,
  hasBorderRadius: u = !0,
  className: s
}) => {
  const r = d(c(e).toUpperCase(), t.toLowerCase());
  return console.log(r), /* @__PURE__ */ o(
    "div",
    {
      className: `flag ${a} size-${t} ${i ? "border" : ""} ${l ? "drop-shadow" : ""} ${u ? "border-radius" : ""} ${s ? s.replace(/\s\s+/g, " ").trim() : ""}`,
      children: n(r) ? /* @__PURE__ */ o("img", { src: r.default.src }) : f(r) ? /* @__PURE__ */ o("img", { src: r.default }) : /* @__PURE__ */ o("img", { src: r })
    }
  );
}, $ = g;
export {
  $ as default
};
