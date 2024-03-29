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
