import { sprinkles } from "@/css/sprinkles.css";
import { keyframes, style } from "@vanilla-extract/css";

const scaleUp = keyframes({
  "0%": {
    WebkitTransform: "scale(0.5)",
    transform: "scale(0.5)",
  },
  "100%": {
    WebkitTransform: "scale(1)",
    transform: "scale(1)",
  },
});

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
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "lg",
    padding: "5",
    zIndex: 2,
  }),
  {
    animation: `${scaleUp} 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
]);
