import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";
import TabList from "./TabList";
import Tab from "./Tab";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";

describe("Tabs Tests", () => {
  test("Tab 컴포넌트를 클릭하면 Panel이 열립니다.", () => {
    render(
      <Tabs>
        <TabList>
          <Tab>1번 탭</Tab>
          <Tab>2번 탭</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1번 판넬</TabPanel>
          <TabPanel>2번 판넬</TabPanel>
        </TabPanels>
      </Tabs>
    );

    const firstTab = screen.getByText("1번 탭");
    const secondTab = screen.getByText("2번 탭");

    fireEvent.click(firstTab);

    const firstPanel = screen.getByText("1번 판넬");
    const secondPanel = screen.getByText("2번 판넬");

    expect(firstPanel).toBeVisible();

    fireEvent.click(secondTab);

    expect(firstPanel).not.toBeVisible();
    expect(secondPanel).toBeVisible();
  });
});
