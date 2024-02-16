import { sprinkles } from "@/css/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrap = sprinkles({
  position: "relative",
});

export const content = recipe({
  base: sprinkles({
    padding: "2",
    position: "absolute",
    backgroundColor: "white",
    width: "80",
    borderStyle: "solid",
    borderColor: "gray100",
    borderWidth: "px",
    borderRadius: "md",
    boxShadow: "md",
    wordWrap: "break-word",
    boxSizing: "border-box",
    color: "textSecondary",
    zIndex: 1,
  }),
  variants: {
    isVisible: {
      true: sprinkles({
        visibility: "visible",
      }),
      false: sprinkles({
        visibility: "hidden",
      }),
    },
  },
});

export const close = sprinkles({
  position: "absolute",
  top: "0.5",
  right: "0.5",
});

export const arrow = sprinkles({
  width: "2",
  height: "2",
  position: "absolute",
  transform: "rotate(45deg)",
  left: "half",
  top: "-1.5",
  borderTopWidth: "px",
  borderBottomWidth: "0",
  borderLeftWidth: "px",
  borderRightWidth: "0",
  borderStyle: "solid",
  borderColor: "gray200",
  backgroundColor: "white",
});
