import { keyframes } from "@vanilla-extract/css";

export const backgroundPosition = keyframes({
  "0%": {
    backgroundPosition: "-200%",
  },
  "100%": {
    backgroundPosition: "200%",
  },
});

export const spinnerRotation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const slideLeft = keyframes({
  "0%": {
    WebkitTransform: "translateX(-16rem)",
    transform: "translateX(-16rem)",
  },
  "100%": {
    WebkitTransform: "translateX(0)",
    transform: "translateX(0)",
  },
});

export const slideRight = keyframes({
  "0%": {
    WebkitTransform: "translateX(16rem)",
    transform: "translateX(16rem)",
  },
  "100%": {
    WebkitTransform: "translateX(0)",
    transform: "translateX(0)",
  },
});

export const slideTop = keyframes({
  "0%": {
    WebkitTransform: "translateY(-16rem)",
    transform: "translateY(-16rem)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

export const slideBottom = keyframes({
  "0%": {
    WebkitTransform: "translateY(16rem)",
    transform: "translateY(16rem)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

export const scaleUp = keyframes({
  "0%": {
    WebkitTransform: "scale(0.5)",
    transform: "scale(0.5)",
  },
  "100%": {
    WebkitTransform: "scale(1)",
    transform: "scale(1)",
  },
});

export const toastSlide = keyframes({
  "0%": {
    WebkitTransform: "translateY(20px)",
    transform: "translateY(20px)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
});

export const progressBar = keyframes({
  "0%": { width: "100%" },
  "100%": { width: "0" },
});
