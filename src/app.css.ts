import { style } from "@vanilla-extract/css";

export const formBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexWrap: "wrap",
  padding: 10,
});

export const container = style({
  display: "flex",
  gap: 10,
  borderRadius: 15,
  border: "2px solid lightgray",
  padding: 15,
  color: "gray",
});

export const overlayContainer = style({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
});
