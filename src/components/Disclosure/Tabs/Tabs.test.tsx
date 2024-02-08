import { fireEvent, render, screen } from "@testing-library/react";
import Tabs, { TabsProps } from "./Tabs";
import TabList from "./TabList";
import Tab from "./Tab";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";

describe("Tabs 컴포넌트 테스트", () => {
  const Component = (args: TabsProps) => {
    return (
      <Tabs {...args}>
        <TabList>
          <Tab>1번 탭</Tab>
          <Tab>2번 탭</Tab>
          <Tab isDisabled>3번 탭</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1번 내용</TabPanel>
          <TabPanel>2번 내용</TabPanel>
          <TabPanel>3번 내용</TabPanel>
        </TabPanels>
      </Tabs>
    );
  };

  test("Tab 컴포넌트를 클릭하면 Panel이 열립니다.", () => {
    render(<Component />);

    const firstTab = screen.getByText("1번 탭");
    const secondTab = screen.getByText("2번 탭");

    fireEvent.click(firstTab);

    const firstPanel = screen.getByText("1번 내용");
    const secondPanel = screen.getByText("2번 내용");

    expect(firstPanel).toBeVisible();

    fireEvent.click(secondTab);

    expect(firstPanel).not.toBeVisible();
    expect(secondPanel).toBeVisible();
  });

  test("Tab 컴포넌트를 클릭하면 onChange 함수가 실행된다.", () => {
    const fn = jest.fn();
    render(<Component onChange={fn} />);

    const firstTab = screen.getByText("1번 탭");

    fireEvent.click(firstTab);
    expect(fn).toHaveBeenCalled();
  });

  test("isDisabled이 전달된 Tab은 클릭할 수 없다.", () => {
    render(<Component />);

    const thirdTab = screen.getByText("3번 탭");
    const thirdPanel = screen.getByText("3번 내용");

    fireEvent.click(thirdTab);

    expect(thirdPanel).not.toBeVisible();
  });

  test("Keyboard를 통해 Tab을 사용할 수 있다", () => {
    render(<Component />);

    const firstTab = screen.getByText("1번 탭");
    const firstPanel = screen.getByText("1번 내용");
    const secondTab = screen.getByText("2번 탭");
    const secondPanel = screen.getByText("2번 내용");

    fireEvent.click(firstTab);
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });

    expect(secondPanel).toBeVisible();

    fireEvent.keyDown(secondTab, { key: "ArrowLeft" });

    expect(firstPanel).toBeVisible();
    expect(secondPanel).not.toBeVisible();

    fireEvent.keyDown(firstTab, { key: "Tab" });

    expect(firstPanel).not.toBeVisible();
    expect(secondPanel).toBeVisible();
  });
});
