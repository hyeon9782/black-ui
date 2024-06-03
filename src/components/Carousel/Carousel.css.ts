import { recipe } from "@vanilla-extract/recipes";

export const root = recipe({
  base: {
    position: "relative",
  },
  variants: {},
});

export const content = recipe({
  base: {
    display: "flex",
    gap: 10,
    padding: "0px 40px",
  },
  variants: {},
});

export const item = recipe({
  base: {},
  variants: {},
});

export const prev = recipe({
  base: {
    position: "absolute",
    top: "50%",
    left: 0,
  },
  variants: {},
});

export const next = recipe({
  base: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  variants: {},
});
