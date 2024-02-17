import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const textarea = recipe({
  base: sprinkles({
    borderColor: "gray",
    borderWidth: "px",
    borderStyle: "solid",
    color: "gray",
    cursor: {
      base: "auto",
      disabled: "not-allowed",
    },
    opacity: {
      base: "1",
      disabled: "0.5",
    },
    borderRadius: "md",
    padding: "2",
  }),
  variants: {
    size: {
      xs: sprinkles({
        fontSize: "0",
      }),
      sm: sprinkles({
        fontSize: "2",
      }),
      md: sprinkles({
        fontSize: "4",
      }),
      lg: sprinkles({
        fontSize: "6",
      }),
    },
  },
});

export type TextareaVariants = RecipeVariants<typeof textarea>;
