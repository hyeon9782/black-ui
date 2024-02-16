import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";
import { sprinkles } from "@/css/sprinkles.css";

export const input = recipe({
  base: {
    backgroundColor: vars.colors.white,
    outline: "none",
    width: "100%",
    border: "none",
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
  },
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
      // outline: sprinkles({
      //   borderColor: "gray",
      //   borderWidth: "px",
      //   borderStyle: "solid",
      //   borderRadius: "md",
      //   paddingX: "4",
      //   paddingY: "0",
      // }),
      // filled: sprinkles({
      //   backgroundColor: "gray",
      //   borderRadius: "md",
      //   paddingX: "4",
      //   paddingY: "0",
      //   borderStyle: "none",
      // }),
      // flushed: sprinkles({
      //   borderTopWidth: "0",
      //   borderLeftWidth: "0",
      //   borderRightWidth: "0",
      //   borderBottomWidth: "px",
      //   borderColor: "gray",
      //   paddingBottom: "4",
      //   borderStyle: "solid",
      // }),
      outline: {
        border: "1px solid #E2E8F0",
        borderRadius: "5px",
        padding: "0 16px",
        "&:focus": {
          outline: "2px solid blue",
        },
      },
      filled: {
        backgroundColor: "#E2E8F0",
        padding: "0 16px",
        borderRadius: "5px",
        "&:focus": {
          outline: "2px solid blue",
        },
      },
      flushed: {
        borderBottom: "1px solid #E2E8F0",
        padding: "0 16px 0 0",
      },
      unstyled: {
        padding: "0 16px 0 0",
      },
    },
    isReadOnly: {
      true: {
        backgroundColor: vars.colors.gray,
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export type InputVariants = RecipeVariants<typeof input>;
