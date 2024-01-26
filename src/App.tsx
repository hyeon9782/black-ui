import { ToastProvider } from "./components/Feedback/Toast";

import FormArea from "./components/FormArea";
import OverlayArea from "./components/OverlayArea";
import FeedbackArea from "./components/FeedbackArea";
import DataDisplayArea from "./components/DataDisplayArea";
import DisclosureArea from "./components/DisclosureArea";

import React from "react";

import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "./components";

function App() {
  return (
    <ToastProvider>
      <Tabs>
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
    </ToastProvider>
  );
}

export default App;
