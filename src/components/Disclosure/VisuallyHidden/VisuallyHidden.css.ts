import { sprinkles } from "@/css/sprinkles.css";

export const visuallyHidden = sprinkles({
  borderStyle: "none",
  clip: "rect(0, 0, 0, 0)",
  height: "px",
  width: "px",
  margin: "-0.5",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute",
});
