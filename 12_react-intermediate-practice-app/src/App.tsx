import { Provider } from "./components/ui/provider";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      <Button colorPalette="teal">ボタン</Button>
      <p>ああああああああ</p>
    </Provider>
  );
}

export default App;
