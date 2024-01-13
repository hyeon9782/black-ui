import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";

export const textarea = recipe({
  base: {
    border: "1px solid lightgray",
    borderRadius: vars.radii.md,
    padding: vars.space["2"],
  },
  variants: {
    size: {
      xs: {
        fontSize: vars.fonts.h6,
      },
      sm: {
        fontSize: vars.fonts.h5,
      },
      md: {
        fontSize: vars.fonts.h4,
      },
      lg: {
        fontSize: vars.fonts.h3,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
      false: {},
    },
  },
});

export type TextareaVariants = RecipeVariants<typeof textarea>;
