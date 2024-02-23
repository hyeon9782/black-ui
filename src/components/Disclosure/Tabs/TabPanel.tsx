import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useTabsContext } from "./Tabs";
import { panel } from "./Tabs.css";
import { useTabPanelsContext } from "./TabPanels";

const TabPanel = ({ children }: PropsWithChildren) => {
  const { currentTab } = useTabsContext();
  const { panelRefs } = useTabPanelsContext();
  const panelRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    if (panelRef?.current && panelRefs?.current) {
      panelRefs.current.push(panelRef.current);
      setIndex(panelRefs.current.indexOf(panelRef.current));
      return () => {
        if (panelRef.current && panelRefs.current) {
          const index = panelRefs.current.indexOf(panelRef.current);
          if (index !== -1) {
            panelRefs.current.splice(index, 1);
          }
        }
      };
    }
  }, []);
  return (
    <div ref={panelRef} className={panel({ selected: currentTab === index })}>
      {children}
    </div>
  );
};

export default TabPanel;
