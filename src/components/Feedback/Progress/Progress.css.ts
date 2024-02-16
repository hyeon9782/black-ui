import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const progress = sprinkles({
  position: "relative",
  width: "full",
  backgroundColor: "gray",
});

export const inner = recipe({
  variants: {
    color: {
      blue: sprinkles({
        backgroundColor: "blueSecondary",
      }),
      green: sprinkles({
        backgroundColor: "greenSecondary",
      }),
      red: sprinkles({
        backgroundColor: "redSecondary",
      }),
      origin: sprinkles({
        backgroundColor: "orangeSecondary",
      }),
    },
    size: {
      sm: sprinkles({
        height: "2",
      }),
      md: sprinkles({
        height: "3",
      }),
      lg: sprinkles({
        height: "4",
      }),
    },
  },
  defaultVariants: {
    color: "blue",
    size: "sm",
  },
});

export type InnerVariants = RecipeVariants<typeof inner>;
