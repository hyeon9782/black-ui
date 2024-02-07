import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrap = style({
  position: "relative",
});

export const content = recipe({
  base: {
    padding: 10,
    position: "absolute",
    backgroundColor: "white",
    width: "20rem",
    border: "1px solid lightgray",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    wordWrap: "break-word",
    boxSizing: "border-box",
    color: "#2D3748",
    zIndex: 1,
  },
  variants: {
    isVisible: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
  compoundVariants: [],
});

export const close = style({
  position: "absolute",
  top: 10,
  right: 10,
});

export const arrow = style({
  width: "8px",
  height: "8px",
  position: "absolute",
  transform: "rotate(45deg)",
  left: "50%",
  top: -5,
  borderWidth: "1px 0 0 1px",
  borderStyle: "solid",
  borderColor: "#E2E8F0",
  backgroundColor: "white",
});
