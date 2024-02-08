import { style } from "@vanilla-extract/css";

export const formBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexWrap: "wrap",
});

export const container = style({
  padding: 10,
  width: "100%",
  display: "flex",
  gap: 10,
  borderRadius: 15,
  flexWrap: "wrap",
  border: "2px solid lightgray",
  boxSizing: "border-box",
  color: "gray",
});

export const overlayContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,
});
