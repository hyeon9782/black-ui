import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const table = recipe({
  base: {
    borderRadius: vars.radii.md,
  },
  variants: {
    variant: {
      simple: {},
      filled: {},
      unstyled: {},
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export const tr = recipe({
  base: {},
  variants: {
    variant: {
      simple: {
        borderBottom: "1px solid lightgray",
      },
      filled: {
        backgroundColor: "lightgray",
        color: "white",
      },
      unstyled: {},
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export const td = style({
  padding: 10,
});

export const th = style({
  padding: 10,
  fontWeight: "bold",
});

export type TableVariants = RecipeVariants<typeof table>;
