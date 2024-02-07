import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = style({
  position: "relative",
  display: "inline-block",
  width: "fit-content",
  height: "fit-content",
  overflow: "visible",
});

export const tooltip = recipe({
  base: {
    position: "absolute",
    borderRadius: vars.radii.sm,
    padding: "5px 7px 5px 7px",
  },
  variants: {
    bg: {
      gray: {
        backgroundColor: "gray",
        color: "black",
      },
      black: {
        backgroundColor: "black",
        color: "white",
      },
    },
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
    placement: {
      // top: {
      //   top: "-100%",
      //   left: "50%",
      //   transform: "translate(-50%, 0)",
      // },
      // bottom: {
      //   bottom: "-100%",
      //   left: "50%",
      //   transform: "translate(-50%, 0)",
      // },
      // left: {
      //   top: "50%",
      //   left: "-100%",
      //   transform: "translate(50%, -50%)",
      // },
      // right: {
      //   top: "50%",
      //   left: "100%",
      //   transform: "translate(50%, -50%)",
      // },
    },
  },
  defaultVariants: {
    bg: "black",
    // placement: "right",
  },
});

export type TooltipVariants = RecipeVariants<typeof tooltip>;
