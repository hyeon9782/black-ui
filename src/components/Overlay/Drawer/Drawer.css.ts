import { keyframes, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

const slideLeft = keyframes({
  "0%": {
    WebkitTransform: "translateX(-250px)",
    transform: "translateX(-250px)",
  },
  "100%": {
    WebkitTransform: "translateX(0)",
    transform: "translateX(0)",
  },
});

const slideRight = keyframes({
  "0%": {
    WebkitTransform: "translateX(250px)",
    transform: "translateX(250px)",
  },
  "100%": {
    WebkitTransform: "translateX(0)",
    transform: "translateX(0)",
  },
});

const slideTop = keyframes({
  "0%": {
    WebkitTransform: "translateY(-250px)",
    transform: "translateY(-250px)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

const slideBottom = keyframes({
  "0%": {
    WebkitTransform: "translateY(250px)",
    transform: "translateY(250px)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

export const drawer = recipe({
  base: {},
  variants: {
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
  },
  variants: {
    placement: {
      top: {
        animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
      },
      right: {
        animation: `${slideRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
      },
      bottom: {
        animation: `${slideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
      },
      left: {
        animation: `${slideLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
      },
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
      variants: { placement: "right", isOpen: true },
      style: { right: 0, width: 250, height: "100%", top: 0 },
    },
    {
      variants: { placement: "bottom", isOpen: true },
      style: { bottom: 0, width: "100%", height: 250, left: 0 },
    },
    {
      variants: { placement: "top", isOpen: true },
      style: { top: 0, width: "100%", height: 250, left: 0 },
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
