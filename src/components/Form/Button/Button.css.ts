import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";
import { vars } from "@/css/vars.css";

export const button = recipe({
  base: {
    position: "relative",
    userSelect: "none",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "none",
    borderRadius: vars.radii.lg,
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      // "&:hover": {
      //   backgroundColor: "lightgreen",
      // },
      // "&:active": {
      //   backgroundColor: "#44FB00",
      // },
    },
  },
  variants: {
    size: {
      xs: {
        width: "80px",
        height: "50px",
      },
      sm: {
        width: "100px",
        height: "50px",
      },
      md: {
        width: "100px",
        height: "50px",
      },
      lg: {
        width: "100px",
        height: "50px",
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
          base: "brandTertiary",
          hover: "brandPrimary",
          active: "secondary",
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

export type ButtonVariants = RecipeVariants<typeof button>;
