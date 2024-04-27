import { sprinkles } from "@/css/sprinkles.css";
import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const sliderFillWidth = createVar();

export const slider = recipe({
    base: {
        position: "absolute",
        top: "calc(50% - 6px)",
        width: "100%",
        height: "12px",
        appearance: "none",
        WebkitAppearance: "none",
        background: "transparent",
        margin: 0,
        selectors: {
            "&:checked::before": {
                cursor: "grabbing"
              },
              "&:focus": {
                outline: "none"
              }
        }
    }, 
  variants: {
    size: {
      xs: sprinkles({
        zoom: 1,
      }),
      sm: sprinkles({
        zoom: 1.5,
      }),
      md: sprinkles({
        zoom: 2,
      }),
      lg: sprinkles({
        zoom: 3,
      }),
    },
    color: {
      red: sprinkles({
        accentColor: "redSecondary",
      }),
      black: sprinkles({
        accentColor: "black",
      }),
      gray: sprinkles({
        accentColor: "gray",
      }),
      orange: sprinkles({
        accentColor: "orangeSecondary",
      }),
      green: sprinkles({
        accentColor: "greenSecondary",
      }),
      blue: sprinkles({
        accentColor: "blueSecondary",
      }),
    },
  },
  defaultVariants: {
    size: "md",
    color: "red",
  },
});

export const sliderContainer = style({
    width: "100%",
    height: "24px",
    position: "relative",
})

export const sliderRail = style({
  width: "100%",
  height: "4px",
  borderRadius: "2px",
  backgroundColor: "gray",
  position: "absolute",
  top: "calc(50% - 2px)"
})

export const sliderFillTack = style({
    width: sliderFillWidth,
  height: "4px",
  borderRadius: "2px",
  backgroundColor: "blue",
  position: "absolute",
  top: "calc(50% - 2px)",
})

export type SliderVariants = RecipeVariants<typeof slider>;
