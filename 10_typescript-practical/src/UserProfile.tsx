import type { FC } from "react";
import type { User } from "./types/user";

// 型定義をまとめておくと後で保守しやすくなる
type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* OptionalChaing でPropsがなくてもエラーとならなくなる*/}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
