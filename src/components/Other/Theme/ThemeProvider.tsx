import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Mode = "light" | "dark";

type ThemeContextValue = {
  mode: Mode;
};

const ThemeContext = createContext<ThemeContextValue | {}>({});

export type ThemeProviderProps = {
  defaultMode?: Mode;
};

const ThemeProvider = ({
  children,
  defaultMode = "light",
}: PropsWithChildren<ThemeProviderProps>) => {
  const [mode, setMode] = useState<Mode>(defaultMode);

  const value = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode],
  );

  useEffect(() => {
    const element = document.documentElement;
    element.setAttribute("data-color-mode", mode);

    return () => {
      element.removeAttribute("data-color-mode");
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeProvider를 추가해주세요!");
  return context;
};
