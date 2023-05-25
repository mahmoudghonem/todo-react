import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import DoneTodoList from "./pages/DoneTodos";
import Todos from "./pages/Todos";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/done" element={<DoneTodoList />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </Layout>
  );
}

export default App;
