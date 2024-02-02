import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";

export const select = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    width: "100%",
    backgroundColor: "white",
    color: "gray",
    textAlign: "start",
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
        fontSize: "small",
      },
      sm: { fontSize: "medium" },
      md: { fontSize: "large" },
      lg: { fontSize: "x-large" },
    },
    variant: {
      outline: {
        border: "1px solid black",
      },
      unstyled: {},
      flushed: {
        borderBottom: "1px solid lightgray",
        paddingBottom: vars.space["1.5"],
      },
      filled: {
        backgroundColor: "lightgray",
      },
    },
  },
});

export const selectOption = recipe({
  base: {},
  variants: {
    selected: {
      true: {
        backgroundColor: "blue",
      },
      false: {},
    },
  },
});

export type SelectVariants = RecipeVariants<typeof select>;
