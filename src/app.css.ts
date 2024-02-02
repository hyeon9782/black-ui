import { style } from "@vanilla-extract/css";

export const formBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexWrap: "wrap",
  padding: 10,
});

export const container = style({
  width: "100%",
  display: "flex",
  gap: 10,
  borderRadius: 15,
  flexWrap: "wrap",
  border: "2px solid lightgray",
  boxSizing: "border-box",
  padding: 15,
  color: "gray",
});

export const overlayContainer = style({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,
});
