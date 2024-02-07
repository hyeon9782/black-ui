import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const tabs = recipe({
  base: {},
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    variant: {
      unstyled: {},
    },
  },
  defaultVariants: {
    size: "md",
    variant: "unstyled",
  },
});

export const tabList = recipe({
  base: {
    display: "flex",
  },
  variants: {
    align: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export const tab = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    cursor: "pointer",
  },
  variants: {
    size: {
      sm: {
        fontSize: "0.875rem",
        padding: "0.25rem 1rem",
      },
      md: {
        fontSize: "1rem",
        padding: "0.5rem 1rem",
      },
      lg: {
        fontSize: "1.125rem",
        padding: "0.75rem 1rem",
      },
    },
    isFitted: {
      true: {
        width: `100%`,
      },
      false: {},
    },
    selected: {
      true: {
        color: "#2b6cb0",
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    isFitted: false,
    selected: false,
  },
});

export const panel = recipe({
  base: {
    padding: "1rem",
  },
  variants: {
    selected: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export type TabsVariants = RecipeVariants<typeof tabs>;

export type TabVariants = RecipeVariants<typeof tab>;

export type TabListVariants = RecipeVariants<typeof tabList>;
