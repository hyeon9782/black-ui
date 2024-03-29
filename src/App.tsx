import { ToastProvider } from "./components/Feedback/Toast";
import { ThemeProvider, ThemeSwitcher } from "./components/Other/Theme";

import FormArea from "./components/FormArea";
import OverlayArea from "./components/OverlayArea";
import FeedbackArea from "./components/FeedbackArea";
import DataDisplayArea from "./components/DataDisplayArea";
import DisclosureArea from "./components/DisclosureArea";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "./components";

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <ToastProvider>
        <>
          <ThemeSwitcher></ThemeSwitcher>
          <Tabs variant="enclosed" defaultIndex={0}>
            <TabList>
              <Tab>Form</Tab>
              <Tab>Overlay</Tab>
              <Tab>Feedback</Tab>
              <Tab>DataDisplay</Tab>
              <Tab>Disclosure</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormArea />
              </TabPanel>
              <TabPanel>
                <OverlayArea />
              </TabPanel>
              <TabPanel>
                <FeedbackArea />
              </TabPanel>
              <TabPanel>
                <DataDisplayArea />
              </TabPanel>
              <TabPanel>
                <DisclosureArea />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
