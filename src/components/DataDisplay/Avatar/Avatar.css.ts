import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const avatar = recipe({
  base: {
    borderRadius: vars.radii.full,
    backgroundColor: "gray",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        width: 50,
        height: 50,
      },
      sm: {
        width: 100,
        height: 100,
      },
      md: {
        width: 150,
        height: 150,
      },
      lg: {
        width: 200,
        height: 200,
      },
      xl: {
        width: 250,
        height: 250,
      },
      "2xl": {
        width: 300,
        height: 300,
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export const image = style({
  width: "100%",
  height: "100%",
});

export const fallback = style({
  backgroundColor: "gray",
  width: "100%",
  height: "100%",
  color: "black",
  fontSize: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export type AvartarVariants = RecipeVariants<typeof avatar>;
