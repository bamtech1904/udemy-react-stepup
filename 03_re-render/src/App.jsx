import { useState } from "react";
import "./App.css";
import { ChildArea } from "./components/ChildArea";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChengeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  return (
    <>
      <input value={text} onChange={onChengeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </>
  );
}

export default App;
