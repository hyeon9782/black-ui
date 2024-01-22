import { vars } from "@/css/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrap = recipe({
  base: {
    display: "flex",
    gap: 10,
  },
});

export const field = recipe({
  base: {
    border: "1px solid lightgray",
    borderRadius: vars.radii.lg,
    textAlign: "center",
  },
  variants: {
    size: {
      xs: {
        width: 24,
        height: 24,
        fontSize: 12,
      },
      sm: {
        width: 32,
        height: 32,
        fontSize: 16,
      },
      md: {
        width: 40,
        height: 40,
        fontSize: 20,
      },
      lg: {
        width: 48,
        height: 48,
        fontSize: 24,
      },
    },
  },
});
