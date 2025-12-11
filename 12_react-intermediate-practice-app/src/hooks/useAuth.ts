import axios from "axios";
import { useNavigate } from "react-router";

import type { User } from "@/types/api/user";
import { useState } from "react";
import { useMessage } from "./useMessage";

// ユーザーログイン認証のためのカスタムフック
export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = (id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({ title: "ログインしました", type: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", type: "error" });
        }
      })
      .catch(() => showMessage({ title: "ログインできません", type: "error" }))
      .finally(() => {
        setLoading(false);
      });
  };
  return { login, loading };
};
