// ユーザー情報取得のためのカスタムフック
import axios from "axios";
import { useState } from "react";
import { useMessage } from "./useMessage";

import type { User } from "@/types/api/user";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = () => {
    setLoading(true);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", type: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, loading, users };
};
