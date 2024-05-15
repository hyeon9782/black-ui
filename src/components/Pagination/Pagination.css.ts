import { sprinkles } from "@/css/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";

export const pagination = recipe({
  base: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

export const paginationItem = recipe({
  base: {
    padding: 10,
  },
});

export const button = recipe({
  base: {},
  variants: {
    isDisabled: {
      true: {},
      false: {},
    },
  },
});
