import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import UserBar from "../components/User/Userbar";
import Header from "../Header";
import { StateContext } from "../contexts";

export default function Layout() {
  const { state } = useContext(StateContext);
  const { user } = state;

  return (
    <>
      <Header text="" />
      <React.Suspense fallback={"Loading..."}>
        <UserBar />
      </React.Suspense>{" "}
      <br />
      {user && <Link to="/todo/create">Create New Todo</Link>}
      <Outlet />
    </>
  );
}
