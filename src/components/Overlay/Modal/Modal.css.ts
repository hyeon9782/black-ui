import { scaleUp } from "@/css/animation.css";
import { sprinkles } from "@/css/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const wrap = sprinkles({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  width: "full",
  height: "full",
});

export const overlay = sprinkles({
  position: "fixed",
  top: "0",
  left: "0",
  width: "full",
  height: "full",
  backgroundColor: "black",
  opacity: "0.5",
  zIndex: 1,
});

export const modal = style([
  sprinkles({
    backgroundColor: "white",
    borderRadius: "lg",
    padding: "5",
    zIndex: 2,
  }),
  {
    animation: `${scaleUp} 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
]);

export const header = sprinkles({
  padding: "2",
  fontSize: "8",
  fontWeight: 'bold'
})

export const body = sprinkles({
  padding: "2"
})

export const footer = sprinkles({
  padding: "2",
  display: 'flex',
  justifyContent: "space-between"
})