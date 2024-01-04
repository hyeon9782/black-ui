import Button from "./components/Button";
import React from "react";

function App() {
  return (
    <div>
      <Button size="lg" variant="solid" color="black">
        블랙 버튼
      </Button>
      <Button size="lg" variant="outline" color="red">
        레드 버튼
      </Button>
    </div>
  );
}

export default App;
