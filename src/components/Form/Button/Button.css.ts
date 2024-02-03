import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";
import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";

export const button = recipe({
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    outline: "none",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
    verticalAlign: "middle",

    borderRadius: vars.radii.lg,
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
  },
  variants: {
    size: {
      xs: {
        padding: "0 0.5rem",
        height: "1.5rem",
        fontSize: "0.75rem",
      },
      sm: {
        padding: "0 0.75rem",
        height: "2rem",
        fontSize: "0.875rem",
      },
      md: {
        padding: "0 1rem",
        height: "2.5rem",
        fontSize: "1rem",
      },
      lg: {
        padding: "0 1.5rem",
        height: "3rem",
        fontSize: "1.125rem",
      },
    },
    variant: {
      solid: {
        color: "white",
      },
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
      ghost: {},
    },
    color: {
      black: {},
      red: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: "solid", color: "black" },
      style: sprinkles({
        backgroundColor: {
          base: "gray",
          hover: "black",
          active: "red",
          disabled: "gray",
        },
      }),
    },
    {
      variants: { variant: "solid", color: "red" },
      style: sprinkles({ backgroundColor: "red" }),
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
  defaultVariants: {
    size: "xs",
    variant: "solid",
    color: "red",
  },
});

export const content = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
});

export type ButtonVariants = RecipeVariants<typeof button>;
