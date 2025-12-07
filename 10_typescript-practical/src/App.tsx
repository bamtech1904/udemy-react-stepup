import axios from "axios";
import "./App.css";
import { useState } from "react";
import { Todo } from "./Todo";
import { type TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import type { User } from "./types/user";

const user1: User = {
  name: "じゃけぇ1",
  hobbies: ["映画", "ゲーム"],
};
const user2: User = {
  name: "じゃけぇ2",
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <>
      <div>
        <Text color="red" fontSize="18px" />
        <UserProfile user={user1} />
        <br />
        <UserProfile user={user2} />
        <br />
        <button onClick={onClickFetchData}>データ取得</button>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
      </div>
    </>
  );
}

export default App;
