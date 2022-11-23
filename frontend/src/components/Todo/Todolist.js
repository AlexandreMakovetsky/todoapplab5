import Todo from "./Todo";
import { useContext } from "react";
import { StateContext } from "../../contexts";

export default function TodoList() {
  const { state } = useContext(StateContext);
  const { todo } = state;
  return (
    <div>
      {/* {todo.map((p, i) => (
        <Todo {...p} key={p.id} />
      ))} */}
      <div>
        {Array.isArray(todo) && todo.map((p, i) => <Todo {...p} key={p._id} />)}
      </div>
    </div>
  );
}
