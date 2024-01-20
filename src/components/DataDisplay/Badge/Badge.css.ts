import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const badge = recipe({
  base: {},
  variants: {
    color: {},
    size: {},
    variant: {},
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
