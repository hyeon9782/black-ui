import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const container = sprinkles({
  maxWidth: "full",
});

export const table = recipe({
  base: [
    sprinkles({
      borderRadius: "md",
      width: "full",
    }),
    {
      boxSizing: "border-box",
      borderCollapse: "collapse",
    },
  ],
  variants: {
    variant: {
      simple: {},
      unstyled: {},
    },
    size: {
      sm: sprinkles({ fontSize: "1" }),
      md: sprinkles({ fontSize: "2" }),
      lg: sprinkles({ fontSize: "3" }),
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export const tr = recipe({
  base: {},
  variants: {
    variant: {
      simple: {
        borderBottom: "1px solid lightgray",
      },
      unstyled: {},
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export const td = recipe({
  base: sprinkles({ color: "textTertiary" }),
  variants: {
    size: {
      sm: sprinkles({
        fontSize: "1",
        paddingX: "2",
        paddingY: "1",
      }),
      md: sprinkles({
        fontSize: "2",
        paddingX: "3",
        paddingY: "2",
      }),
      lg: sprinkles({
        fontSize: "3",
        paddingX: "4",
        paddingY: "3",
      }),
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const th = recipe({
  base: sprinkles({ color: "textSecondary" }),
  variants: {
    size: {
      sm: sprinkles({
        fontSize: "1",
        paddingX: "2",
        paddingY: "1",
      }),
      md: sprinkles({
        fontSize: "2",
        paddingX: "3",
        paddingY: "2",
      }),
      lg: sprinkles({
        fontSize: "3",
        paddingX: "4",
        paddingY: "3",
      }),
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const caption = recipe({
  base: sprinkles({ color: "textSecondary" }),
  variants: {
    placement: {
      bottom: sprinkles({ captionSide: "bottom", marginTop: "2" }),
      top: sprinkles({ captionSide: "top", marginBottom: "2" }),
    },
    size: {
      sm: sprinkles({
        fontSize: "1",
      }),
      md: sprinkles({
        fontSize: "2",
      }),
      lg: sprinkles({
        fontSize: "3",
      }),
    },
  },
  defaultVariants: {
    placement: "bottom",
  },
});

export type TableCaptionVariants = RecipeVariants<typeof caption>;

export type TableVariants = RecipeVariants<typeof table>;

export type TableTrVariants = RecipeVariants<typeof tr>;
