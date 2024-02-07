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
    backgroundColor: "white",
    transition: "transform 400ms ease-in-out",
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
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { placement: "left", isOpen: true },
      style: { left: 0, width: 250, height: "100%", top: 0 },
    },
    {
      variants: { placement: "left", isOpen: false },
      style: { left: "-250px" },
    },
    {
      variants: { placement: "right", isOpen: true },
      style: { right: 0, width: 250, height: "100%", top: 0 },
    },
    {
      variants: { placement: "right", isOpen: false },
      style: { right: "-250px" },
    },
    {
      variants: { placement: "bottom", isOpen: true },
      style: { bottom: 0, width: "100%", height: 250, left: 0 },
    },
    {
      variants: { placement: "bottom", isOpen: false },
      style: { bottom: "-250px", left: 0 },
    },
    {
      variants: { placement: "top", isOpen: true },
      style: { top: 0, width: "100%", height: 250, left: 0 },
    },
    {
      variants: { placement: "top", isOpen: false },
      style: { top: "-250px", left: 0 },
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
});

export type DrawerVariants = RecipeVariants<typeof drawer>;
