import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const badge = recipe({
  base: sprinkles({
    paddingX: "1",
    borderRadius: "sm",
    fontWeight: "bold",
  }),
  variants: {
    color: {
      gray: {},
      red: {},
      green: {},
      blue: {},
      orange: {},
    },
    size: {
      xs: sprinkles({
        fontSize: "0",
      }),
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
    variant: {
      outline: sprinkles({
        backgroundColor: "white",
        borderWidth: "0.5",
        borderStyle: "solid",
      }),
      solid: sprinkles({ color: "textWhite" }),
      subtle: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "outline",
        color: "gray",
      },
      style: sprinkles({
        borderColor: "gray500",
        color: "gray500",
      }),
    },
    {
      variants: {
        variant: "subtle",
        color: "gray",
      },
      style: sprinkles({
        backgroundColor: "gray300",
        color: "gray800",
      }),
    },
    {
      variants: {
        variant: "solid",
        color: "gray",
      },
      style: sprinkles({
        backgroundColor: "gray600",
      }),
    },
    {
      variants: {
        variant: "outline",
        color: "red",
      },
      style: sprinkles({
        borderColor: "redSecondary",
        color: "redSecondary",
      }),
    },
    {
      variants: {
        variant: "subtle",
        color: "red",
      },
      style: sprinkles({
        backgroundColor: "redBackground",
        color: "redSecondary",
      }),
    },
    {
      variants: {
        variant: "solid",
        color: "red",
      },
      style: sprinkles({
        backgroundColor: "redPrimary",
      }),
    },
    {
      variants: {
        variant: "outline",
        color: "green",
      },
      style: sprinkles({
        borderColor: "greenSecondary",
        color: "greenSecondary",
      }),
    },
    {
      variants: {
        variant: "subtle",
        color: "green",
      },
      style: sprinkles({
        backgroundColor: "greenBackground",
        color: "greenSecondary",
      }),
    },
    {
      variants: {
        variant: "solid",
        color: "green",
      },
      style: sprinkles({
        backgroundColor: "greenPrimary",
      }),
    },
    {
      variants: {
        variant: "outline",
        color: "blue",
      },
      style: sprinkles({
        borderColor: "blueSecondary",
        color: "blueSecondary",
      }),
    },
    {
      variants: {
        variant: "subtle",
        color: "blue",
      },
      style: sprinkles({
        backgroundColor: "blueBackground",
        color: "blueSecondary",
      }),
    },
    {
      variants: {
        variant: "solid",
        color: "blue",
      },
      style: sprinkles({
        backgroundColor: "bluePrimary",
      }),
    },
    {
      variants: {
        variant: "outline",
        color: "orange",
      },
      style: sprinkles({
        borderColor: "orangeSecondary",
        color: "orangeSecondary",
      }),
    },
    {
      variants: {
        variant: "subtle",
        color: "orange",
      },
      style: sprinkles({
        backgroundColor: "orangeBackground",
        color: "orangeSecondary",
      }),
    },
    {
      variants: {
        variant: "solid",
        color: "orange",
      },
      style: sprinkles({
        backgroundColor: "orangePrimary",
      }),
    },
  ],
  defaultVariants: {
    color: "green",
    variant: "outline",
    size: "md",
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
