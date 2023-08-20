import React from "react";

import { Button } from "./UI/Button";

export const TodoForm = () => {
  return (
    <form action="">
      <input type="email" placeholder="Enter your Email..." />
      <input type="password" placeholder="Enter your Password..." />
      <Button>Submit</Button>
    </form>
  );
};
