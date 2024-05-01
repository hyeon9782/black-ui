import {
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
} from "@/css/animation.css";
import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const drawer = recipe({
  variants: {
    placement: {
      top: {},
      right: {},
      bottom: {},
      left: {},
    },
    isOpen: {
      true: sprinkles({
        display: "block",
      }),
      false: sprinkles({
        display: "none",
      }),
    },
  },
});

export const drawerContent = recipe({
  base: sprinkles({
    position: "fixed",
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }),
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
      style: sprinkles({ left: "0", width: "64", height: "full", top: "0" }),
    },
    {
      variants: { placement: "right", isOpen: true },
      style: sprinkles({
        right: "0",
        width: "64",
        height: "full",
        top: "0",
      }),
    },
    {
      variants: { placement: "bottom", isOpen: true },
      style: sprinkles({ bottom: "0", width: "full", height: "64", left: "0" }),
    },
    {
      variants: { placement: "top", isOpen: true },
      style: sprinkles({ top: "0", width: "full", height: "64", left: "0" }),
    },
  ],
  defaultVariants: {
    isOpen: false,
    placement: "right",
  },
});

export const drawerOverlay = sprinkles({
  position: "fixed",
  top: "0",
  left: "0",
  width: "full",
  height: "full",
  backgroundColor: "black",
  opacity: "0.5",
});

export const drawerHeader = sprinkles({
  padding: "5",
  borderBottomWidth: '0.5',
  borderStyle: "solid",
  borderWidth: "0",
  borderColor: "gray",
  fontSize: "6"
});

export const drawerBody = sprinkles({
  padding: "5"
});

export const drawerFooter = sprinkles({
  padding: "5",
  borderTopWidth: '0.5',
  borderStyle: "solid",
  borderWidth: "0",
  borderColor: "gray"
});

export type DrawerVariants = RecipeVariants<typeof drawer>;
