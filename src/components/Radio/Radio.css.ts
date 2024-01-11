import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "../../css/vars.css";

export const radio = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "11px",
  },
  variants: {
    size: {
      xs: {
        zoom: 1,
      },
      sm: {
        zoom: 1.5,
      },
      md: {
        zoom: 2,
      },
      lg: {
        zoom: 3,
      },
    },
    color: {
      black: {
        accentColor: vars.colors.black,
      },
      red: {
        accentColor: vars.colors.red,
      },
    },
    disabled: {
      true: {
        opacity: "0.5",
      },
      false: {},
    },
  },
});

export type RadioVariants = RecipeVariants<typeof radio>;
