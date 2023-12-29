import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { Mode, tokens } from "../tokens";

export const vars = createGlobalThemeContract(tokens);

console.log(vars);

const makeColorScheme = (mode: Mode = "light") => {
  const colors = tokens.colors[mode];
  return {
    color: {},
  };
};

createGlobalTheme(":root", vars, makeColorScheme());

createGlobalTheme('[data-mode="light"]', vars, makeColorScheme("light"));

createGlobalTheme('[data-mode="dark"]', vars, makeColorScheme("dark"));
