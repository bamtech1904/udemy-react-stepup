type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const conpletedMark = completed ? "[完]" : "[未]";

  return <p>{`${conpletedMark} ${title}(ユーザー:${userId})`}</p>;
};
