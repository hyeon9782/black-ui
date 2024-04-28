import { sprinkles } from "@/css/sprinkles.css";
import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const sliderFillWidth = createVar();

export const slider = recipe({
    base: {
        position: "absolute",
        width: "100%",
        height: "14px",
        appearance: "none",
        WebkitAppearance: "none",
        background: "transparent",
        top: "calc(50% - 4px)",
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
            xs: {
                zoom: 1,
            },
            sm: {
                zoom: 1.5,
            },
            md: {
                zoom: 2,
            },
            lg: {
                zoom: 2.5,
            }
        },
        color: {
            red: sprinkles({
                accentColor: 'red'
            }),
            black: sprinkles({
                accentColor: 'black'
            }),
            gray: sprinkles({
                accentColor: 'gray'
            }),
            orange: {
                accentColor: 'orange'
            },
            green: {
                accentColor: 'green'
            },
            blue: {
                accentColor: 'blue'
            },
          },
    },
    defaultVariants: {
        size: 'md',
        color: 'gray'
    }
});

export const sliderContainer = style({
    width: "100%",
    height: "24px",
    position: "relative",
})

export const sliderRail = recipe({
    base: {
        width: "100%",
        borderRadius: "2px",
        position: "absolute",
        top: "calc(50% - 2px)"
    },
    variants: {
        size: {
            xs: sprinkles({
                height: '2'
              }),
              sm: sprinkles({
                height: '3'
              }),
              md: sprinkles({
                height: '4'
              }),
              lg: sprinkles({
                height: '5'
              }),
        },
        color: {
            red: sprinkles({
                backgroundColor: 'redBackground'
            }),
            black: sprinkles({
                backgroundColor: 'gray100'
            }),
            gray: sprinkles({
              backgroundColor: 'gray300'
            }),
            orange: sprinkles({
              backgroundColor: 'orangeBackground'
            }),
            green: sprinkles({
              backgroundColor: 'greenBackground'
            }),
            blue: sprinkles({
              backgroundColor: 'blueBackground'
            }),
          },
    },
    defaultVariants: {
        size: "md",
        'color': 'gray'
    }
})

export const sliderFillTack = recipe({
    base: {
        width: sliderFillWidth,
        borderRadius: "2px",
        position: "absolute",
        top: "calc(50% - 2px)",
    },
    variants: {
        size: {
            xs: sprinkles({
                height: '2'
              }),
              sm: sprinkles({
                height: '3'
              }),
              md: sprinkles({
                height: '4'
              }),
              lg: sprinkles({
                height: '5'
              }),
        },
        color: {
            red: sprinkles({
                backgroundColor: 'redSecondary'
            }),
            black: sprinkles({
                backgroundColor: 'black'
            }),
            gray: sprinkles({
              backgroundColor: 'gray600'
            }),
            orange: sprinkles({
              backgroundColor: 'orangeSecondary'
            }),
            green: sprinkles({
              backgroundColor: 'greenSecondary'
            }),
            blue: sprinkles({
              backgroundColor: 'blueSecondary'
            }),
          },
    },
    defaultVariants: {
        size: 'md',
        color: 'blue'
    }
})

export type SliderVariants = RecipeVariants<typeof sliderRail>;
