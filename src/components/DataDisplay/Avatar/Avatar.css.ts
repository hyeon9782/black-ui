import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const avatar = recipe({
  base: {
    borderRadius: vars.radii.full,
    backgroundColor: "gray",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        width: 50,
        height: 50,
      },
      sm: {
        width: 100,
        height: 100,
      },
      md: {
        width: 150,
        height: 150,
      },
      lg: {
        width: 200,
        height: 200,
      },
      xl: {
        width: 250,
        height: 250,
      },
      "2xl": {
        width: 300,
        height: 300,
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export const image = style({
  width: "100%" /* 이미지가 div의 너비에 맞춰짐 */,
  height: "100%" /* 비율을 유지하면서 높이가 조정됨 */,
  // maxWidth:
  //   "100%" /* 이미지가 div의 너비에 맞춰지되, 최대 너비는 100%로 제한 */,
  // maxHeight:
  //   "100%" /* 이미지가 div의 높이에 맞춰지되, 최대 높이는 100%로 제한 */,
  // width: "auto",
  // height: "auto",
  // position: "absolute" /* 이미지를 상위 div에 대해 절대 위치 설정 */,
  // top: "50%" /* 상위 div의 중앙을 기준으로 위로 이동 */,
  // left: "50%" /* 상위 div의 중앙을 기준으로 왼쪽으로 이동 */,
  // transform: "translate(-50%, -50%)" /* 이미지를 중앙 정렬 */,
});

export const fallback = style({
  backgroundColor: "gray",
  width: "100%",
  height: "100%",
  color: "black",
  fontSize: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export type AvartarVariants = RecipeVariants<typeof avatar>;
