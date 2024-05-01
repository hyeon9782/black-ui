import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = sprinkles({
  position: "relative",
});

export const tooltip = recipe({
  base: sprinkles({
    position: "absolute",
    borderRadius: "md",
    paddingX: "2",
    paddingY: "1",
    minWidth: "80",
    width: 'fit',
    textAlign: 'center'
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
    isOpen: false
  },
});

export const arrow = sprinkles({
  width: "2",
  height: "2",
  position: "absolute",
  transform: "rotate(45deg)",
  left: "half",
  top: "-1",
  backgroundColor: "gray800",
})

export type TooltipVariants = RecipeVariants<typeof tooltip>;
