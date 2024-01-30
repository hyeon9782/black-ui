import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Tests", () => {
  test("src가 있고 name이 있다면 Alt이 name 값인 image 태그를 렌더링해라!!!!!!!!", async () => {
    render(<Avatar src="/이력서 사진.jpg" name="Jeong Ho" />);

    const avatar = screen.getByAltText("Jeong Ho");

    expect(avatar).toBeInTheDocument();
  });

  test("src가 없고 name이 2단어라면 각 단어의 첫 글자를 렌더링해라", async () => {
    render(<Avatar name="Jeong Ho" />);

    const avatar = screen.getByText("JH");

    expect(avatar).toBeInTheDocument();
  });

  test("src가 없고 name이 1단어라면 단어의 첫 글자를 렌더링해라", async () => {
    render(<Avatar name="Hyeon" />);

    const avatar = screen.getByText("H");

    expect(avatar).toBeInTheDocument();
  });

  test("src가 없고 name이 3단어 이상이라면 첫 단어와 마지막 단어의 첫 글자를 렌더링해라", async () => {
    render(<Avatar name="Hyeon Jeong Ho" />);

    const avatar = screen.getByText("HH");

    expect(avatar).toBeInTheDocument();
  });

  test("src와 name이 둘다 없다면 기본 프로필을 렌더링해라", () => {
    render(<Avatar />);

    const avatar = screen.getByTestId("default-icon");
    expect(avatar).not.toBeInTheDocument();
  });
});
