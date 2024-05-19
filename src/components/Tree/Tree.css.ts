import { recipe } from "@vanilla-extract/recipes";

export const tree = recipe({
  base: {
    margin: 0,
    padding: 0,
  },
  variants: {},
});

export const item = recipe({
  base: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  variants: {},
});
