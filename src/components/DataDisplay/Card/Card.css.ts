import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: sprinkles({
    borderRadius: "md",
    display: "flex",
    boxSizing: "border-box",
  }),
  variants: {
    align: {
      center: sprinkles({
        alignItems: "center",
      }),
      start: sprinkles({
        alignItems: "flex-start",
      }),
      end: sprinkles({
        alignItems: "flex-end",
      }),
    },
    direction: {
      true: sprinkles({ flexDirection: "row" }),
      false: sprinkles({ flexDirection: "column" }),
    },
    justify: {
      center: sprinkles({
        justifyContent: "center",
      }),
      start: sprinkles({
        justifyContent: "flex-start",
      }),
      end: sprinkles({
        justifyContent: "flex-end",
      }),
    },
    size: {
      sm: sprinkles({
        padding: "3",
      }),
      md: sprinkles({
        padding: "5",
      }),
      lg: sprinkles({
        padding: "7",
      }),
    },
    variant: {
      elevated: sprinkles({
        boxShadow: "xs",
      }),
      outline: sprinkles({
        borderColor: "gray",
        borderWidth: "px",
        borderStyle: "solid",
      }),
      filled: sprinkles({
        backgroundColor: "gray",
      }),
      unstyled: {},
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "sm",
    align: "center",
    justify: "center",
    direction: false,
  },
});

export type CardVariants = RecipeVariants<typeof card>;
