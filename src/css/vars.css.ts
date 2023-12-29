import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { Mode, tokens } from "../tokens";

const { colors, ...restTokens } = tokens;

const makeColorScheme = (mode: Mode = "light") => {
  const colors = tokens.colors[mode];

  return {
    colors: {
      ...restTokens,
      ...tokens.colors.base,
      filterTextPrimary: colors.filterTextPrimary,
      filterTextSecondary: colors.filterTextSecondary,
      filterOrangeSecondary: colors.filterOrangeSecondary,
      brandPrimary: colors.brandPrimary,
      brandSecondary: colors.brandSecondary,
      brandTertiary: colors.brandTertiary,
      brandBackground: colors.brandBackground,
      gray50: colors.gray50,
      gray100: colors.gray100,
      gray200: colors.gray200,
      gray300: colors.gray300,
      gray400: colors.gray400,
      gray500: colors.gray500,
      gray600: colors.gray600,
      gray700: colors.gray700,
      gray800: colors.gray800,
      gray900: colors.gray900,
      opacityWhite50: colors.opacityWhite50,
      opacityWhite100: colors.opacityWhite100,
      opacityWhite200: colors.opacityWhite200,
      opacityWhite300: colors.opacityWhite300,
      opacityWhite400: colors.opacityWhite400,
      opacityWhite500: colors.opacityWhite500,
      opacityWhite600: colors.opacityWhite600,
      opacityWhite700: colors.opacityWhite700,
      opacityWhite800: colors.opacityWhite800,
      opacityWhite900: colors.opacityWhite900,
      opacityBlack50: colors.opacityBlack50,
      opacityBlack100: colors.opacityBlack100,
      opacityBlack200: colors.opacityBlack200,
      opacityBlack300: colors.opacityBlack300,
      opacityBlack400: colors.opacityBlack400,
      opacityBlack500: colors.opacityBlack500,
      opacityBlack600: colors.opacityBlack600,
      opacityBlack700: colors.opacityBlack700,
      opacityBlack800: colors.opacityBlack800,
      opacityBlack900: colors.opacityBlack900,
      borderPrimary: colors.borderPrimary,
      borderSecondary: colors.borderSecondary,
      borderTertiary: colors.borderTertiary,
      textPrimary: colors.textPrimary,
      textSecondary: colors.textSecondary,
      textTertiary: colors.textTertiary,
      textPlaceholder: colors.textPlaceholder,
      textDisabled: colors.textDisabled,
      textWhite: colors.textWhite,
      textHoverWhite: colors.textHoverWhite,
      backgroundBase: colors.backgroundBase,
      backgroundElevatedPrimary: colors.backgroundElevatedPrimary,
      backgroundElevatedSecondary: colors.backgroundElevatedSecondary,
      backgroundSurfaceBaseDefault: colors.backgroundSurfaceBaseDefault,
      backgroundSurfaceBasePressed: colors.backgroundSurfaceBasePressed,
      backgroundSurfaceBaseDisabled: colors.backgroundSurfaceBaseDisabled,
      backgroundSurfaceElevatedPrimaryDefault:
        colors.backgroundSurfaceElevatedPrimaryDefault,
      backgroundSurfaceElevatedPrimaryPressed:
        colors.backgroundSurfaceElevatedPrimaryPressed,
      backgroundSurfaceElevatedPrimaryDisabled:
        colors.backgroundSurfaceElevatedPrimaryDisabled,
      backgroundSurfaceElevatedSecondaryDefault:
        colors.backgroundSurfaceElevatedSecondaryDefault,
      backgroundSurfaceElevatedSecondaryPressed:
        colors.backgroundSurfaceElevatedSecondaryPressed,
      backgroundSurfaceElevatedSecondaryDisabled:
        colors.backgroundSurfaceElevatedSecondaryDisabled,
    },
    mode: {
      colors: {
        ...colors,
      },
    },
  };
};

const getVarName = (_value: string | null, path: string[]) =>
  path.join("-").replace(".", "_").replace("/", "__");

const modeTokens = makeColorScheme("light");
const modeVars = createGlobalThemeContract(modeTokens, getVarName);
createGlobalTheme('[data-color-mode="light"]', modeVars, modeTokens);
createGlobalTheme(
  '[data-color-mode="dark"]',
  modeVars,
  makeColorScheme("dark")
);
