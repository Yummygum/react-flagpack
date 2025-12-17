import { jsx as e } from "react/jsx-runtime";
const g = ({
  code: a = "NL",
  size: r = "l",
  gradient: $ = "",
  hasBorder: l = !0,
  hasDropShadow: o = !1,
  hasBorderRadius: t = !0,
  className: s,
  basePath: d = ""
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `flag ${$} size-${r} ${l ? "border" : ""} ${o ? "drop-shadow" : ""} ${t ? "border-radius" : ""} ${s ? s.replace(/\s\s+/g, " ").trim() : ""}`,
    children: /* @__PURE__ */ e("img", { src: `${d}/flags/${r}/${a}.svg` })
  }
), c = g;
export {
  c as default
};
