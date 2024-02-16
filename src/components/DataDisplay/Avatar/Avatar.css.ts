import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const avatar = recipe({
  base: sprinkles({
    borderRadius: "full",
    backgroundColor: "gray",
    overflow: "hidden",
    color: "textSecondary",
  }),
  variants: {
    size: {
      xs: sprinkles({
        width: "10",
        height: "10",
      }),
      sm: sprinkles({
        width: "20",
        height: "20",
      }),
      md: sprinkles({
        width: "30",
        height: "30",
      }),
      lg: sprinkles({
        width: "40",
        height: "40",
      }),
      xl: sprinkles({
        width: "52",
        height: "52",
      }),
      "2xl": sprinkles({
        width: "64",
        height: "64",
      }),
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export const image = sprinkles({ width: "full", height: "full" });

export const fallback = sprinkles({
  width: "full",
  height: "full",
  fontSize: "8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export type AvartarVariants = RecipeVariants<typeof avatar>;
