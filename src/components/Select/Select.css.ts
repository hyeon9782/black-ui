import { recipe } from "@vanilla-extract/recipes";

export const select = recipe({
  base: {},
  variants: {
    variant: {
      outline: {
        border: "1px solid black",
      },
    },
  },
});

export const option = recipe({});
