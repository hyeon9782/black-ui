import { vars } from "@/css/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const slider = recipe({
  base: {
    // position: "relative",
    // top: 0,
    appearance: "none",
  },
  variants: {},
});

export const track = recipe({
  base: {
    position: "relative",
    top: "0px",
  },
});

export const filledTrack = recipe({
  base: {
    borderRadius: vars.radii.md,
    position: "absolute",
    top: "0px",
  },
  variants: {
    size: {
      xs: {
        height: 4,
      },
      sm: {
        height: 6,
      },
      md: {
        height: 8,
      },
      lg: {
        height: 10,
      },
    },
    color: {
      black: {
        backgroundColor: "black",
      },
      red: {
        backgroundColor: "red",
      },
      blue: {
        backgroundColor: "blue",
      },
      green: {
        backgroundColor: "green",
      },
    },
  },
});
