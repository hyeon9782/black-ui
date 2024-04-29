import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const button = recipe({
  base: sprinkles({
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    outline: "none",
    borderStyle: "none",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    borderRadius: "lg",
    cursor: {
      base: "pointer",
      disabled: "not-allowed",
    },
    opacity: {
      base: "1",
      disabled: "1",
    },
  }),
  variants: {
    disabled: {
      true: {
        backgroundColor: 'lightgray',
        ":hover": {
          backgroundColor: 'lightgray'
        }
      }
    },
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
      solid: sprinkles({
        color: "white",
      }),
      outline: sprinkles({
        borderStyle: "solid",
        borderWidth: "px",
      }),
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
        },
      }),
    },
    {
      variants: { variant: "outline", color: "gray" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "gray100",
        },
        borderColor: "gray800",
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
      }),
    },
    {
      variants: { variant: "outline", color: "blue" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "blueBackground",
        },
        borderColor: "bluePrimary",
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
      }),
    },
    {
      variants: { variant: "outline", color: "green" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "greenBackground",
        },
        borderColor: "greenPrimary",
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
      }),
    },
    {
      variants: { variant: "outline", color: "orange" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "orangeBackground",
        },
        borderColor: "orangePrimary",
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
      }),
    },
    {
      variants: { variant: "outline", color: "red" },
      style: sprinkles({
        backgroundColor: {
          base: "white",
          hover: "redBackground",
        },
        borderColor: "redPrimary",
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

export const content = sprinkles({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1",
});

export type ButtonVariants = RecipeVariants<typeof button>;
