export const Practice4 = () => {
  // tsconfig.jsonでnoImplicitAnyを無効にすることでAny型への暗黙変換を許容(普通やらない)
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
