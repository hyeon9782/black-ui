import { vars } from "@/css/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const menu = recipe({
  base: {
    position: "relative",
  },
  variants: {},
});

export const button = recipe({
  base: {
    border: "none",
    borderRadius: "4px",
    userSelect: "none",
    position: "relative",
    padding: "0 1rem",
    color: "#1A202C",
    fontSize: "1rem",
    height: "2.5rem",
    fontWeight: "600",
    lineHeight: "1.2",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    minWidth: "2.5rem",
    outline: "none",
    selectors: {
      "&:focus": {
        backgroundColor: "gray",
      },
    },
  },
  variants: {
    variant: {
      button: {
        backgroundColor: "#EDF2F7",
      },
      none: {
        backgroundColor: "white",
      },
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

export const list = recipe({
  base: {
    minWidth: "13rem",
    backgroundColor: "white",
    borderRadius: "0.375rem",
    border: "1px solid #E2E8F0",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    outline: "transparent solid 2px",
    outlineOffset: "2px",
    padding: "0.5rem 0",
    position: "absolute",
    top: "3rem",
    left: 0,
    zIndex: 1,
  },
  variants: {
    isVisible: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const item = recipe({
  base: {
    color: "inherit",
    padding: "0.375rem 0.75rem",
    selectors: {
      //   "&:hover": {
      //     backgroundColor: "#EDF2F7",
      //   },
      //   "&:focus": {
      //     backgroundColor: "#EDF2F7",
      //     outline: "none",
      //   },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "#EDF2F7",
      },
      false: {},
    },
  },
});
