// // Button.test.tsx

// import "@testing-library/jest-dom";
// import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import Button from "./Button";

// describe("Button", () => {
//   afterEach(() => cleanup());

//   it("renders", () => {
//     render(<Button data-testid="btn">Button</Button>);
//     const button = screen.getByTestId("btn");

//     expect(button).toBeInTheDocument();
//   });

//   it("fires an event on onClick", () => {
//     const fn = jest.fn();
//     render(
//       <Button onClick={fn} data-testid="btn">
//         Button
//       </Button>
//     );

//     const button = screen.getByTestId("btn");
//     fireEvent.click(button);
//     expect(fn).toHaveBeenCalled();
//   });

//   it("renders the correct classes", () => {
//     const fn = jest.fn();
//     render(
//       <Button size="lg" onClick={fn} data-testid="p-btn">
//         Button
//       </Button>
//     );

//     const pBtn = screen.getByTestId("p-btn");
//     expect(pBtn).toHaveClass("hyeon-button");
//   });
// });
