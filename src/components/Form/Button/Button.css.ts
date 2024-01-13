import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";
import { vars } from "@/css/vars.css";

export const button = recipe({
  base: {
    alignSelf: "flex-start",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: vars.radii.lg,
  },
  variants: {
    size: {
      xs: sprinkles({ paddingX: "1", paddingY: "2" }),
      sm: sprinkles({ paddingX: "2", paddingY: "3" }),
      md: sprinkles({ paddingX: "4", paddingY: "5" }),
      lg: sprinkles({ paddingX: "5", paddingY: "6" }),
    },
    variant: {
      solid: {},
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
    },
    color: {
      black: {},
      red: {},
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: "solid", color: "black" },
      style: sprinkles({ backgroundColor: "black", color: "white" }),
    },
    {
      variants: { variant: "solid", color: "red" },
      style: sprinkles({ backgroundColor: "red", color: "white" }),
    },
    {
      variants: { variant: "outline", color: "black" },
      style: sprinkles({ backgroundColor: "white", color: "black" }),
    },
    {
      variants: { variant: "outline", color: "red" },
      style: sprinkles({ backgroundColor: "white", color: "red" }),
    },
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
