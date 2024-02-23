import {
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
  useRef,
} from "react";

type TabPanelsContextProps = {
  panelRefs: RefObject<HTMLDivElement[]>;
};

const TabPanelsContext = createContext<TabPanelsContextProps | null>(null);

const TabPanels = ({ children }: PropsWithChildren) => {
  const panelRefs = useRef([]);
  return (
    <TabPanelsContext.Provider value={{ panelRefs }}>
      <div role="tabpanel">{children}</div>
    </TabPanelsContext.Provider>
  );
};

export default TabPanels;

export const useTabPanelsContext = () => {
  const context = useContext(TabPanelsContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
