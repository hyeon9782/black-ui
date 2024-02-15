import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";
import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";

export const button = recipe({
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    outline: "none",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderRadius: vars.radii.lg,
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
        paddingX: "2",
        paddingY: "0",
        height: "6",
        fontSize: "0",
      }),
      sm: sprinkles({
        paddingX: "3",
        paddingY: "0",
        height: "8",
        fontSize: "1",
      }),
      md: sprinkles({
        paddingX: "4",
        paddingY: "0",
        height: "10",
        fontSize: "2",
      }),
      lg: sprinkles({
        paddingX: "6",
        paddingY: "0",
        height: "12",
        fontSize: "3",
      }),
    },
    variant: {
      solid: {
        color: "white",
      },
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
      ghost: {},
    },
    color: {
      gray: {},
      red: {},
      green: {},
      blue: {},
      orange: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: "solid", color: "gray" },
      style: sprinkles({
        backgroundColor: {
          base: "gray700",
          hover: "gray800",
          disabled: "gray",
        },
        color: "textPlaceholder",
      }),
    },
    {
      variants: { variant: "outline", color: "gray" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "gray100",
        },
        color: "gray800",
      }),
    },
    {
      variants: { variant: "ghost", color: "gray" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "gray100",
        },
        color: "gray800",
      }),
    },
    {
      variants: { variant: "solid", color: "blue" },
      style: sprinkles({
        backgroundColor: {
          base: "blueSecondary",
          hover: "bluePrimary",
        },
        color: "textPlaceholder",
      }),
    },
    {
      variants: { variant: "outline", color: "blue" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "blueBackground",
        },
        color: "bluePrimary",
      }),
    },
    {
      variants: { variant: "ghost", color: "blue" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "blueBackground",
        },
        color: "bluePrimary",
      }),
    },
    {
      variants: { variant: "solid", color: "green" },
      style: sprinkles({
        backgroundColor: {
          base: "greenSecondary",
          hover: "greenPrimary",
        },
        color: "textPlaceholder",
      }),
    },
    {
      variants: { variant: "outline", color: "green" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "greenBackground",
        },
        color: "greenPrimary",
      }),
    },
    {
      variants: { variant: "ghost", color: "green" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "greenBackground",
        },
        color: "greenPrimary",
      }),
    },
    {
      variants: { variant: "solid", color: "orange" },
      style: sprinkles({
        backgroundColor: {
          base: "orangeSecondary",
          hover: "orangePrimary",
        },
        color: "textPlaceholder",
      }),
    },
    {
      variants: { variant: "outline", color: "orange" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "orangeBackground",
        },
        color: "orangePrimary",
      }),
    },
    {
      variants: { variant: "ghost", color: "orange" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "orangeBackground",
        },
        color: "orangePrimary",
      }),
    },
    {
      variants: { variant: "solid", color: "red" },
      style: sprinkles({
        backgroundColor: {
          base: "redSecondary",
          hover: "redPrimary",
        },
        color: "textPlaceholder",
      }),
    },
    {
      variants: { variant: "outline", color: "red" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "redBackground",
        },
        color: "redPrimary",
      }),
    },
    {
      variants: { variant: "ghost", color: "red" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "redBackground",
        },
        color: "redPrimary",
      }),
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "gray",
  },
});

export const content = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
});

export type ButtonVariants = RecipeVariants<typeof button>;
