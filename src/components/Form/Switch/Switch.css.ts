import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const customSwitch = recipe({
  base: {
    appearance: "none",
    position: "relative",
    display: "inline-block",
    background: "lightgray",
    height: "1.65rem",
    width: "2.75rem",
    verticalAlign: "middle",
    borderRadius: "2rem",
    boxShadow: "0px 1px 3px #0003 inset",
    transition: "0.25s linear background",
    "::before": {
      content: "",
      display: "block",
      width: "1.25rem",
      height: "1.25rem",
      background: "#fff",
      borderRadius: "1.2rem",
      position: "absolute",
      top: "0.2rem",
      left: "0.2rem",
      boxShadow: "0px 1px 3px #0003",
      transition: "0.25s linear transform",
      transform: "translateX(0rem)",
    },
    ":focus": {
      outlineColor: "transparent",
    },
    selectors: {
      "&:checked::before": {
        transform: "translateX(1rem)",
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
  },
  variants: {
    size: {
      xs: {
        zoom: 0.6,
      },
      sm: {
        zoom: 1,
      },
      md: {
        zoom: 1.4,
      },
      lg: {
        zoom: 1.8,
      },
    },
    color: {
      green: {
        ":checked": {
          background: "green",
        },
      },
      blue: {
        ":checked": {
          background: "blue",
        },
      },
    },
  },
});

export type SwitchVariants = RecipeVariants<typeof customSwitch>;
