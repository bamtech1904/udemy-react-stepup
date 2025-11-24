import { useState, useCallback, useMemo } from "react";
import "./App.css";
import { ChildArea } from "./components/ChildArea";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChengeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  /**
   * 新しい関数を再生成 -> props更新と判定
   * useCallBackで再生成を防ぐ(関数のメモ化)
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  /**
   * useMemoで再計算を防ぐ(変数のメモ化)
   */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <input value={text} onChange={onChengeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  );
}

export default App;
