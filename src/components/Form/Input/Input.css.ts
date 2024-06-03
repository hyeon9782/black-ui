import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const input = recipe({
  base: sprinkles({
    backgroundColor: "white",
    outline: "none",
    width: "full",
    borderStyle: "none",
    boxSizing: "border-box",
    cursor: {
      base: "pointer",
      disabled: "not-allowed",
    },
    opacity: {
      base: "1",
      disabled: "0.5",
    },
  }),
  variants: {
    size: {
      xs: sprinkles({
        fontSize: "0",
        height: "6",
      }),
      sm: sprinkles({
        fontSize: "1",
        height: "8",
      }),
      md: sprinkles({
        fontSize: "2",
        height: "10",
      }),
      lg: sprinkles({
        fontSize: "3",
        height: "12",
      }),
    },
    variant: {
      outline: sprinkles({
        borderColor: "gray",
        borderWidth: "px",
        borderStyle: "solid",
        borderRadius: "md",
        paddingX: "4",
        paddingY: "0",
        outline: {
          focus: "Highlight",
        },
      }),
      filled: sprinkles({
        backgroundColor: "gray",
        paddingX: "4",
        paddingY: "0",
        borderRadius: "md",
        outline: {
          focus: "Highlight",
        },
      }),
      flushed: sprinkles({
        borderStyle: "solid",
        borderWidth: "0",
        borderColor: "gray",
        borderBottomWidth: "px",
        padding: "0",
        paddingRight: "4",
      }),
      unstyled: sprinkles({
        padding: "0",
        paddingRight: "4",
      }),
    },
    isReadOnly: {
      true: sprinkles({
        backgroundColor: "gray",
      }),
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export type InputVariants = RecipeVariants<typeof input>;
