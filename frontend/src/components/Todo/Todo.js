import React from "react";
import { useContext } from "react";
import { useResource } from "react-request-hook";
import { Link } from "react-router-dom";
import { StateContext } from "../../contexts";

function Todo({ title, description, author, _id }) {
  const { state } = useContext(StateContext);

  const [, deleteTodo] = useResource(({ _id }) => ({
    url: "/todo/:id",
    method: "delete",
    headers: { Authorization: `${state.user.access_token}` },
    data: { _id },
  }));

  const [, toggleTodo] = useResource(({ _id }) => ({
    url: "/todo/:id",
    method: "patch",
    headers: { Authorization: `${state.user.access_token}` },
    data: { _id },
  }));

  return (
    <div>
      <h3>----------------</h3>
      <h3>Title: {title}</h3>
      <h3>Description: {description}</h3>
      <br />
      <i>
        Written by: <b>{author}</b>
      </i>
      <br></br>
      <br></br>
      <div>
        <input
          type="checkbox"
          id="complete"
          onChange={() => toggleTodo({ _id })}
        />
        Complete
      </div>
      <br></br>
      <div>
        <button type="button" onClick={() => deleteTodo(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(Todo);
