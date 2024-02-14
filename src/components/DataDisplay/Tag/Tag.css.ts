import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const tag = recipe({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: vars.radii.md,
    gap: 5,
    padding: "5px 10px",
    fontWeight: "bold",
  },
  variants: {
    color: {
      red: {},
      green: {},
      blue: {},
    },
    size: {},
    variant: {
      outline: {
        backgroundColor: "white",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      solid: {
        color: "white",
      },
      subtle: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "outline",
        color: "green",
      },
      style: {
        borderColor: "green",
        color: "green",
      },
    },
    {
      variants: {
        variant: "outline",
        color: "red",
      },
      style: {
        borderColor: "red",
        color: "red",
      },
    },
    {
      variants: {
        variant: "outline",
        color: "blue",
      },
      style: {
        borderColor: "blue",
        color: "blue",
      },
    },
    {
      variants: {
        variant: "solid",
        color: "green",
      },
      style: {
        backgroundColor: "green",
      },
    },
    {
      variants: {
        variant: "solid",
        color: "red",
      },
      style: {
        backgroundColor: "red",
      },
    },
    {
      variants: {
        variant: "solid",
        color: "blue",
      },
      style: {
        backgroundColor: "blue",
      },
    },
    {
      variants: {
        variant: "subtle",
        color: "green",
      },
      style: {
        backgroundColor: "lightgreen",
        color: "green",
      },
    },
    {
      variants: {
        variant: "subtle",
        color: "red",
      },
      style: {
        backgroundColor: "lightred",
        color: "red",
      },
    },
    {
      variants: {
        variant: "subtle",
        color: "blue",
      },
      style: {
        backgroundColor: "lightblue",
        color: "blue",
      },
    },
  ],
  defaultVariants: {
    color: "green",
    variant: "outline",
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
