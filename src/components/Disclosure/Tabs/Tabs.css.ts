import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const tabs = recipe({
  base: {},
  variants: {
    orientation: {
      vertical: {
        display: "flex",
      },
      horizontal: {},
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const tabList = recipe({
  base: {
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
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
    variant: {
      line: {
        borderBottom: "2px solid lightgray",
      },
      enclosed: {
        borderBottom: "1px solid lightgray",
      },
      "solid-rounded": {},
      "soft-rounded": {},
      unstyled: {},
    },
    orientation: {
      vertical: {
        flexDirection: "column",
      },
      horizontal: {
        flexDirection: "row",
      },
    },
  },
  defaultVariants: {
    align: "start",
    variant: "line",
    orientation: "horizontal",
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
    boxSizing: "border-box",
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
    variant: {
      line: {},
      enclosed: {},
      "solid-rounded": { fontWeight: "600" },
      "soft-rounded": { fontWeight: "600" },
      unstyled: {},
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
  compoundVariants: [
    {
      variants: { variant: "line", selected: true },
      style: { borderBottom: "2px solid #2b6cb0", marginBottom: -2 },
    },
    {
      variants: { variant: "enclosed", selected: true },
      style: {
        borderRadius: "0.375rem 0.375rem 0 0 ",
        borderWidth: "1px 1px 0 1px",
        borderStyle: "solid",
        borderColor: "lightgray",
        borderBottom: "1px solid white",
        marginBottom: -1,
      },
    },
    {
      variants: { variant: "soft-rounded", selected: true },
      style: {
        backgroundColor: "rgb(190, 227, 248)",
        color: "rgb(44, 82, 130)",
        borderRadius: "9999px",
      },
    },
    {
      variants: { variant: "solid-rounded", selected: true },
      style: {
        backgroundColor: "#2b6cb0",
        color: "white",
        borderRadius: "9999px",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    isFitted: false,
    selected: false,
    variant: "line",
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

export type TabVariants = RecipeVariants<typeof tab>;

export type TabListVariants = RecipeVariants<typeof tabList>;
