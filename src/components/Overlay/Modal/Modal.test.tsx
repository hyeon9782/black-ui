import { render } from "@testing-library/react";
import Modal from "./Modal";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalCloseButton from "./ModalCloseButton";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { Button } from "@/components/Form";

describe("Modal 컴포넌트 테스트", () => {
  const Component = (props: any) => {
    return (
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Modal 입니다!</div>
          </ModalBody>
          <ModalFooter>
            <Button>취소</Button>
            <Button>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  test("Modal 컴포넌트가 렌더링된다.", () => {
    render(<Component data-testid="modal" />);

    expect(true);
  });
});
