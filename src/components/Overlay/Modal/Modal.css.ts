import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants } from "@vanilla-extract/recipes";

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

export const modal = sprinkles({
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "lg",
  padding: "5",
  zIndex: 2,
});
