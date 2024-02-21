import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const menu = sprinkles({
  position: "relative",
});

export const button = recipe({
  base: sprinkles({
    borderStyle: "none",
    borderRadius: "lg",
    userSelect: "none",
    position: "relative",
    paddingX: "4",
    paddingY: "0",
    color: "textSecondary",
    fontSize: "2",
    height: "10",
    fontWeight: "bold",
    lineHeight: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    minWidth: "10",
    outline: "none",
  }),
  variants: {
    variant: {
      button: sprinkles({
        backgroundColor: {
          base: "gray100",
          focus: "gray300",
        },
      }),
      none: sprinkles({
        backgroundColor: "white",
      }),
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

export const list = recipe({
  base: sprinkles({
    minWidth: "52",
    backgroundColor: "white",
    borderRadius: "sm",
    boxShadow: "2xl",
    paddingX: "0",
    paddingY: "0.5",
    position: "absolute",
    top: "11",
    left: "0",
    zIndex: 1,
  }),
  variants: {
    isVisible: {
      true: sprinkles({
        display: "block",
      }),
      false: sprinkles({
        display: "none",
      }),
    },
  },
  defaultVariants: {
    isVisible: false,
  },
});

export const item = recipe({
  base: sprinkles({
    color: "textSecondary",
    paddingY: "1.5",
    paddingX: "3",
  }),
  variants: {
    selected: {
      true: sprinkles({
        backgroundColor: "gray100",
      }),
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type MenuVariants = RecipeVariants<typeof button>;
