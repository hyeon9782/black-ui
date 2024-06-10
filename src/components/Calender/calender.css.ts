// src/styles/calendar.css.ts
import { style } from "@vanilla-extract/css";

export const calendar = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "10px",
});

export const day = style({
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
});
