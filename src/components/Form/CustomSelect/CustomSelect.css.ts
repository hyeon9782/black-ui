import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const selectRoot = sprinkles({
  width: "full",
  boxSizing: "border-box",
  minWidth: "40",
  position: "relative",
});

export const selectItem = recipe({
  base: sprinkles({
    paddingY: "0.75",
    paddingX: "0.5",
  }),
  variants: {
    selected: {
      true: sprinkles({
        backgroundColor: "blueTertiary",
      }),
      false: sprinkles({
        backgroundColor: "white",
      }),
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const selectTrigger = recipe({
  base: sprinkles({
    display: "flex",
    fontWeight: "normal",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "none",
    width: "full",
    backgroundColor: "white",
    color: "textPlaceholder",
    boxSizing: "border-box",
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
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export const selectLabel = recipe({
  base: sprinkles({
    paddingY: "0.75",
    paddingX: "0.5",
    fontWeight: "bold",
  }),
  variants: {},
  defaultVariants: {},
});

export const selectGroup = recipe({
  base: sprinkles({}),
  variants: {},
  defaultVariants: {},
});

export const selectContent = recipe({
  base: sprinkles({
    borderRadius: "md",
    borderWidth: "px",
    borderColor: "gray300",
    borderStyle: "solid",
    width: "full",
    padding: "0.5",
    position: "absolute",
    top: "11",
    boxSizing: "border-box",
    backgroundColor: "white",
    zIndex: 1,
  }),
  variants: {
    isOpen: {
      true: sprinkles({ display: "block" }),
      false: sprinkles({ display: "none" }),
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export type SelectVariants = RecipeVariants<typeof selectTrigger>;
