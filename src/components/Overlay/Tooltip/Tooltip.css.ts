import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = sprinkles({
  position: "relative",
  display: "inline-block",
  width: "fit",
  height: "fit",
  overflow: "visible",
});

export const tooltip = recipe({
  base: sprinkles({
    position: "absolute",
    borderRadius: "md",
    paddingX: "2",
    paddingY: "1",
  }),
  variants: {
    bg: {
      black: sprinkles({
        backgroundColor: "gray800",
        color: "textWhite",
      }),
      gray: sprinkles({
        backgroundColor: "gray100",
        color: "gray500",
      }),
      red: sprinkles({
        backgroundColor: "redBackground",
        color: "redPrimary",
      }),
      blue: sprinkles({
        backgroundColor: "blueBackground",
        color: "bluePrimary",
      }),
      orange: sprinkles({
        backgroundColor: "orangeBackground",
        color: "orangePrimary",
      }),
      green: sprinkles({
        backgroundColor: "greenBackground",
        color: "greenPrimary",
      }),
    },
    isOpen: {
      true: sprinkles({
        display: "block",
      }),
      false: sprinkles({
        display: "none",
      }),
    },
  },
  defaultVariants: {
    bg: "black",
  },
});

export type TooltipVariants = RecipeVariants<typeof tooltip>;
