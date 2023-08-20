import React from "react";
import { Routes, Route } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoForm />} />
      </Routes>
    </div>
  );
};
