import { createContext } from "react";

type RadioContextProps = {
  disabled?: boolean;
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
};

export const RadioContext = createContext<RadioContextProps>({});
