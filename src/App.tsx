import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/Disclosure/Tabs";

import FormArea from "./components/FormArea";
import OverlayArea from "./components/OverlayArea";
import FeedbackArea from "./components/FeedbackArea";
import DataDisplayArea from "./components/DataDisplayArea";
import React from "react";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>Overlay</Tab>
        <Tab>Feedback</Tab>
        <Tab>DataDisplay</Tab>
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
      </TabPanels>
    </Tabs>
  );
}

export default App;
