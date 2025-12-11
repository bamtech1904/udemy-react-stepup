import { useState } from "react";

import type { User } from "@/types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = (props: Props) => {
    const { id, users } = props;

    const targetUser = users.find((user) => user.id === id);

    // undefinedの可能性が絶対にない場合は!をつける(非推奨)
    setSelectedUser(targetUser!);
  };
  return { onSelectUser, selectedUser };
};
