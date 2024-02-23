import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const close = recipe({
  base: [
    sprinkles({
      position: "absolute",
      backgroundColor: "white",
      borderStyle: "none",
      padding: "0",
    }),
    { top: 10, right: 10, backgroundColor: "inherit", color: "inherit" },
  ],
  variants: {
    size: {
      xs: sprinkles({
        fontSize: "0",
      }),
      sm: sprinkles({
        fontSize: "1",
      }),
      md: sprinkles({
        fontSize: "2",
      }),
      lg: sprinkles({
        fontSize: "3",
      }),
      xl: sprinkles({
        fontSize: "4",
      }),
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CloseButtonVariants = RecipeVariants<typeof close>;
