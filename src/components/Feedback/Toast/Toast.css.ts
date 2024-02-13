import { vars } from "@/css/vars.css";
import { keyframes } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

const slideTop = keyframes({
  "0%": {
    WebkitTransform: "translateY(20px)",
    transform: "translateY(20px)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

export const wrap = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    position: "fixed",
  },
  variants: {
    position: {
      top: {
        top: 10,
        left: "50%",
        transform: "translate(-50%, 0)",
      },
      topLeft: {
        top: 10,
        left: 10,
      },
      topRight: {
        top: 10,
        right: 10,
      },
      bottom: {
        bottom: 10,
        left: "50%",
        transform: "translate(-50%, 0)",
      },
      bottomLeft: {
        bottom: 10,
        left: 10,
      },
      bottomRight: {
        bottom: 10,
        right: 10,
      },
    },
  },
  defaultVariants: {
    position: "topRight",
  },
});

export const toast = recipe({
  base: {
    opacity: 50,
    borderRadius: vars.radii.lg,
    padding: "10px 20px",
    animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  variants: {
    status: {
      success: {
        background: "lightgreen",
      },
      error: {
        background: "red",
      },
      loading: {
        background: "blue",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    status: "success",
  },
});

export type ToastVariants = RecipeVariants<typeof toast>;
