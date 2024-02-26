import { progressBar, toastSlide } from "@/css/animation.css";
import { sprinkles } from "@/css/sprinkles.css";
import { vars } from "@/css/vars.css";
import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = recipe({
  base: sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    position: "fixed",
  }),
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
    color: "white",
    fontWeight: "bold",
    opacity: 50,
    borderRadius: vars.radii.md,
    padding: "10px",
    animation: `${toastSlide} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  variants: {
    status: {
      success: sprinkles({
        backgroundColor: "statusSuccess",
      }),
      warning: sprinkles({
        backgroundColor: "statusWarning",
      }),
      danger: sprinkles({
        backgroundColor: "statusDanger",
      }),
      info: sprinkles({
        backgroundColor: "statusInfo",
      }),
    },
  },
  defaultVariants: {
    status: "success",
  },
});

export const titleBox = sprinkles({
  fontSize: "2",
});

export const descriptionBox = sprinkles({
  fontSize: "0",
});

export const icon = sprinkles({
  display: "flex",
  alignItems: "center",
  fontSize: "10",
});

export const time = createVar();

export const progress = style({
  position: "absolute",
  left: 0,
  bottom: 0,
  height: 5,
  backgroundColor: vars.colors.opacityWhite400,
  animation: `${progressBar} ${time} linear`,
});

export type ToastVariants = RecipeVariants<typeof toast>;

export type ListVariants = RecipeVariants<typeof wrap>;
