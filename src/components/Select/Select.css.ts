import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "../../css/vars.css";

export const select = recipe({
  base: {
    border: "none",
    width: "100%",
    backgroundColor: "white",
    color: "gray",
    textAlign: "start",
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

export const option = recipe({});

export type SelectVariants = RecipeVariants<typeof select>;
