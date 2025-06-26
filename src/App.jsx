import "./App.css";
import { TodoProvider } from "./context/TodoConext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
      <div>
        <h1>Fetch Users</h1>
        <UserList />
        <CreatePost />
      </div>
    </TodoProvider>
  );
}

export default App;
