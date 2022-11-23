import { useReducer, useEffect } from "react";

import appReducer from "./Reducers";
import { useResource } from "react-request-hook";
import { StateContext } from "./contexts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import CreateTodo from "./components/Todo/CreateTodo";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todo: [],
  });

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/todo" element={<Layout />}>
              <Route path="/todo/create" element={<CreateTodo />} />
              <Route path="/todo/:id" element={<TodoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
