import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = sprinkles({
  display: "flex",
  gap: "3",
});

export const field = recipe({
  base: sprinkles({
    borderStyle: "solid",
    borderWidth: "px",
    borderColor: "gray",
    borderRadius: "lg",
    textAlign: "center",
    cursor: {
      base: "pointer",
      disabled: "not-allowed",
    },
    opacity: {
      base: "1",
      disabled: "0.5",
    },
  }),
  variants: {
    size: {
      xs: sprinkles({
        width: "8",
        height: "8",
        fontSize: "1",
      }),
      sm: sprinkles({
        width: "10",
        height: "10",
        fontSize: "2",
      }),
      md: sprinkles({
        width: "12",
        height: "12",
        fontSize: "3",
      }),
      lg: sprinkles({
        width: "14",
        height: "14",
        fontSize: "4",
      }),
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type FieldVariants = RecipeVariants<typeof field>;
