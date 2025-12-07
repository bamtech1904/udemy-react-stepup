import type { FC } from "react";
import { type TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = () =>
  /* 必要なpropsのみ取得 */
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  {
    const { title, userId, completed } = props;
    const conpletedMark = completed ? "[完]" : "[未]";

    return <p>{`${conpletedMark} ${title}(ユーザー:${userId})`}</p>;
  };
