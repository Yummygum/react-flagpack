import { jsx as e } from "react/jsx-runtime";
const d = ({
  code: a = "NL",
  size: r = "l",
  gradient: l = "",
  hasBorder: o = !0,
  hasDropShadow: t = !1,
  hasBorderRadius: $ = !0,
  className: s
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `flag ${l} size-${r} ${o ? "border" : ""} ${t ? "drop-shadow" : ""} ${$ ? "border-radius" : ""} ${s ? s.replace(/\s\s+/g, " ").trim() : ""}`,
    children: /* @__PURE__ */ e("img", { src: `/flags/${r}/${a}.svg` })
  }
), i = d;
export {
  i as default
};
