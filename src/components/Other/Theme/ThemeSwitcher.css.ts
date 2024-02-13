import { vars } from "@/css/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const switcher = recipe({
  base: {
    border: "1px solid lightgray",
    borderRadius: vars.radii.full,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  variants: {
    mode: {
      light: {
        backgroundColor: "white",
      },
      dark: {
        backgroundColor: "black",
      },
    },
    size: {
      sm: {
        width: "30px",
        height: "30px",
        fontSize: "1rem",
      },
      md: {
        width: "50px",
        height: "50px",
        fontSize: "1.5rem",
      },
      lg: {
        width: "70px",
        height: "70px",
        fontSize: "2rem",
      },
    },
  },
  defaultVariants: {
    mode: "light",
    size: "md",
  },
});
