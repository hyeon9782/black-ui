import { sprinkles } from "@/css/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";

export const switcher = recipe({
  base: sprinkles({
    borderStyle: "solid",
    borderWidth: "px",
    borderColor: "gray",
    borderRadius: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }),
  variants: {
    mode: {
      light: sprinkles({
        backgroundColor: "white",
      }),
      dark: sprinkles({
        backgroundColor: "black",
      }),
    },
    size: {
      sm: sprinkles({
        width: "8",
        height: "8",
        fontSize: "1",
      }),
      md: sprinkles({
        width: "12",
        height: "12",
        fontSize: "4",
      }),
      lg: sprinkles({
        width: "16",
        height: "16",
        fontSize: "8",
      }),
    },
  },
  defaultVariants: {
    mode: "light",
    size: "lg",
  },
});
