import { useCallback } from "react";
import { useTheme } from "./ThemeProvider";
import { switcher } from "./ThemeSwitcher.css";

type ThemeSwitcherProps = {
  size?: "lg" | "md" | "sm";
};

const ThemeSwitcher = ({ size }: ThemeSwitcherProps) => {
  const { mode, setMode } = useTheme();

  const toggleMode = useCallback(() => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
  }, [mode, setMode]);
  return (
    <div onClick={toggleMode} className={switcher({ mode, size })}>
      {mode === "dark" ? "🌙" : "☀️"}
    </div>
  );
};

export default ThemeSwitcher;
