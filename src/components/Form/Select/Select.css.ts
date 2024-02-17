import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const select = recipe({
  base: sprinkles({
    display: "flex",
    fontWeight: "normal",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "none",
    width: "full",
    backgroundColor: "white",
    color: "textPlaceholder",
    outline: "none",
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
      sm: sprinkles({ fontSize: "1", height: "8" }),
      md: sprinkles({ fontSize: "2", height: "10" }),
      lg: sprinkles({ fontSize: "3", height: "12" }),
    },
    variant: {
      outline: sprinkles({
        borderStyle: "solid",
        borderWidth: "px",
        borderColor: "gray300",
        borderRadius: "md",
        paddingX: "4",
        outline: {
          focus: "Highlight",
        },
      }),
      filled: sprinkles({
        backgroundColor: "gray",
        paddingX: "4",
        borderRadius: "md",
        outline: {
          focus: "Highlight",
        },
      }),
      flushed: sprinkles({
        borderStyle: "solid",
        borderColor: "gray",
        borderWidth: "0",
        borderBottomWidth: "px",
        padding: "0",
        paddingRight: "4",
        outline: {
          focus: "Highlight",
        },
      }),
      unstyled: sprinkles({
        padding: "0",
        paddingRight: "4",
        outline: {
          focus: "Highlight",
        },
      }),
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  },
});

export const selectOption = recipe({
  base: sprinkles({
    display: "flex",
    fontWeight: "normal",
    alignItems: "center",
  }),
  variants: {
    size: {
      xs: sprinkles({
        fontSize: "0",
        height: "6",
      }),
      sm: sprinkles({ fontSize: "1", height: "8" }),
      md: sprinkles({ fontSize: "2", height: "10" }),
      lg: sprinkles({ fontSize: "3", height: "12" }),
    },
    variant: {
      outline: sprinkles({
        paddingX: "4",
        paddingY: "1",
      }),
      filled: sprinkles({
        paddingX: "4",
        paddingY: "1",
      }),
      flushed: sprinkles({ padding: "1" }),
      unstyled: sprinkles({ padding: "1" }),
    },
    selected: {
      true: sprinkles({
        backgroundColor: "blueTertiary",
        color: "white",
      }),
      false: {},
    },
  },
  defaultVariants: {
    variant: "outline",
    selected: false,
    size: "md",
  },
});

export type SelectVariants = RecipeVariants<typeof select>;
