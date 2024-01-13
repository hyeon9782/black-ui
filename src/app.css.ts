import { style } from "@vanilla-extract/css";

export const formBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexWrap: "wrap",
});

export const container = style({
  display: "flex",
  gap: 10,
  borderRadius: 15,
  border: "2px solid lightgray",
  padding: 15,
  color: "gray",
});
