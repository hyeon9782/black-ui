import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const label = recipe({
  variants: {
    size: {
      xs: sprinkles({
        zoom: 0.5,
      }),
      sm: sprinkles({
        zoom: 1,
      }),
      md: sprinkles({
        zoom: 2,
      }),
      lg: sprinkles({
        zoom: 3,
      }),
    },
  },
});

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
    color: {
      green: sprinkles({
        backgroundColor: {
          checked: "greenSecondary",
        },
      }),
      blue: sprinkles({
        backgroundColor: {
          checked: "blueSecondary",
        },
      }),
      red: sprinkles({
        backgroundColor: {
          checked: "redSecondary",
        },
      }),
      orange: sprinkles({
        backgroundColor: {
          checked: "orangeSecondary",
        },
      }),
      black: sprinkles({
        backgroundColor: {
          checked: "black",
        },
      }),
    },
  },
});

export type SwitchVariants = RecipeVariants<typeof customSwitch>;

export type LabelVariants = RecipeVariants<typeof label>;
