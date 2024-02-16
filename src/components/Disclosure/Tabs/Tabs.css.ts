import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const tabs = recipe({
  variants: {
    orientation: {
      vertical: sprinkles({
        display: "flex",
      }),
      horizontal: {},
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const tabList = recipe({
  base: sprinkles({
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
  }),
  variants: {
    align: {
      start: sprinkles({
        justifyContent: "flex-start",
      }),
      center: sprinkles({
        justifyContent: "center",
      }),
      end: sprinkles({
        justifyContent: "flex-end",
      }),
    },
    variant: {
      line: sprinkles({
        borderWidth: "0",
        borderColor: "gray",
        borderStyle: "solid",
        borderBottomWidth: "0.5",
      }),
      enclosed: sprinkles({
        borderWidth: "0",
        borderColor: "gray",
        borderStyle: "solid",
        borderBottomWidth: "px",
      }),
      "solid-rounded": {},
      "soft-rounded": {},
      unstyled: {},
    },
    orientation: {
      vertical: sprinkles({
        flexDirection: "column",
      }),
      horizontal: sprinkles({
        flexDirection: "row",
      }),
    },
  },
  defaultVariants: {
    align: "start",
    variant: "line",
    orientation: "horizontal",
  },
});

export const tab = recipe({
  base: sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "none",
    backgroundColor: "white",
    cursor: "pointer",
    boxSizing: "border-box",
  }),
  variants: {
    size: {
      sm: sprinkles({
        fontSize: "1",
        paddingX: "4",
        paddingY: "2",
      }),
      md: sprinkles({
        fontSize: "2",
        paddingX: "6",
        paddingY: "4",
      }),
      lg: sprinkles({
        fontSize: "3",
        paddingX: "8",
        paddingY: "6",
      }),
    },
    variant: {
      line: {},
      enclosed: {},
      "solid-rounded": sprinkles({ fontWeight: "bold" }),
      "soft-rounded": sprinkles({ fontWeight: "bold" }),
      unstyled: {},
    },
    isFitted: {
      true: sprinkles({ width: "full" }),
      false: {},
    },
    selected: {
      true: sprinkles({ color: "blueSecondary" }),
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: "line", selected: true },
      style: sprinkles({
        borderStyle: "solid",
        borderColor: "blueSecondary",
        borderWidth: "0",
        borderBottomWidth: "0.5",
        marginBottom: "-0.5",
      }),
    },
    {
      variants: { variant: "enclosed", selected: true },
      style: sprinkles({
        borderTopRadius: "md",
        borderTopWidth: "px",
        borderLeftWidth: "px",
        borderRightWidth: "px",
        borderStyle: "solid",
        borderColor: "gray",
        borderBottomWidth: "0",
        marginBottom: "-0.5",
      }),
    },
    {
      variants: { variant: "soft-rounded", selected: true },
      style: sprinkles({
        backgroundColor: "blueBackground",
        color: "blueSecondary",
        borderRadius: "full",
      }),
    },
    {
      variants: { variant: "solid-rounded", selected: true },
      style: sprinkles({
        backgroundColor: "blueSecondary",
        color: "textWhite",
        borderRadius: "full",
      }),
    },
  ],
  defaultVariants: {
    size: "sm",
    isFitted: false,
    selected: false,
    variant: "line",
  },
});

export const panel = recipe({
  base: sprinkles({
    padding: "4",
  }),
  variants: {
    selected: {
      true: sprinkles({
        display: "block",
      }),
      false: sprinkles({
        display: "none",
      }),
    },
  },
});

export type TabVariants = RecipeVariants<typeof tab>;

export type TabListVariants = RecipeVariants<typeof tabList>;
