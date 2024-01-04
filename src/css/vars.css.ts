import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { tokens } from "../tokens";

export const vars = createGlobalThemeContract(tokens);

createGlobalTheme(":root", vars, tokens);
