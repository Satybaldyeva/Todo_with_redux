import { Link } from "react-router-dom";
import "./App.css";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div>
      <Link to={"/"}>{<TodoForm />}</Link>
    </div>
  );
}

export default App;
