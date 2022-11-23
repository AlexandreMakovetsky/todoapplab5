import React, { useEffect, useContext } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";
import Todolist from "../components/Todo/Todolist";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  const [todo, getTodo] = useResource(() => ({
    url: "/todo",
    method: "get",
    headers: { Authorization: `${state?.user?.access_token}` },
  }));
  useEffect(() => {
    getTodo();
  }, [state?.user?.access_token]);
  useEffect(() => {
    if (todo && todo.isLoading === false && todo.data) {
      dispatch({ type: "FETCH_TODO", posts: todo.data.todo.reverse() });
    }
  }, [todo]);
  return (
    <>
      {todo?.isLoading && "Todo loading..."} <Todolist />
    </>
  );
}
