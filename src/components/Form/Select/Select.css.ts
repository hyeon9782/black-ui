import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";

export const select = recipe({
  base: {
    display: "flex",
    fontWeight: vars.fontWeights.normal,
    alignItems: "center",
    justifyContent: "space-between",
    border: "none",
    width: "100%",
    backgroundColor: "white",
    color: "gray",
    outline: "none",
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
        fontSize: "0.75rem",
        height: "1.5rem",
      },
      sm: { fontSize: "0.875rem", height: "2rem" },
      md: { fontSize: "1rem", height: "2.5rem" },
      lg: { fontSize: "1.125rem", height: "3rem" },
    },
    variant: {
      outline: {
        border: "1px solid #E2E8F0",
        borderRadius: "5px",
        padding: "0 16px",
        "&:focus": {
          outline: "2px solid blue",
        },
      },
      filled: {
        backgroundColor: "#E2E8F0",
        padding: "0 16px",
        borderRadius: "5px",
        "&:focus": {
          outline: "2px solid blue",
        },
      },
      flushed: {
        borderBottom: "1px solid #E2E8F0",
        padding: "0 16px 0 0",
      },
      unstyled: {
        padding: "0 16px 0 0",
      },
    },
  },
});

export const selectOption = recipe({
  base: {
    display: "flex",
    fontWeight: vars.fontWeights.normal,
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        fontSize: "0.75rem",
        height: "1.5rem",
      },
      sm: { fontSize: "0.875rem", height: "2rem" },
      md: { fontSize: "1rem", height: "2.5rem" },
      lg: { fontSize: "1.125rem", height: "3rem" },
    },
    variant: {
      outline: {
        padding: "4px 16px",
      },
      filled: {
        padding: "4px 16px",
      },
      flushed: { padding: "4px 0" },
      unstyled: { padding: "4px 0" },
    },
    selected: {
      true: {
        backgroundColor: "blue",
        color: "white",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "outline",
    selected: false,
    size: "md",
  },
});

export type SelectVariants = RecipeVariants<typeof select>;
