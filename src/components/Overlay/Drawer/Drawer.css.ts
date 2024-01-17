import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const drawer = recipe({
  base: {},
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      full: {},
    },
    placement: {
      top: {},
      right: {},
      bottom: {},
      left: {},
    },
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const drawerContent = recipe({
  base: {
    position: "fixed",
    top: 0,
    left: "-250px",
    width: 250,
    height: "100%",
    backgroundColor: "white",
    transition: "left 0.3s",
    zIndex: 101,
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      full: {},
    },
    placement: {
      top: {},
      right: {},
      bottom: {},
      left: {},
    },
    isOpen: {
      true: {
        left: 0,
      },
      false: {
        left: "-250px",
      },
    },
  },
  compoundVariants: [
    {
      variants: { placement: "bottom", size: "lg" },
      style: {},
    },
  ],
});

export const drawerOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 100,
});

export type DrawerVariants = RecipeVariants<typeof drawer>;
