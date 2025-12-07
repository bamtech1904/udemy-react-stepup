import type { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FC上でPropsの型定義をする
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
