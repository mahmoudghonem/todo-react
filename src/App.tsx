import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import DoneTodoList from "./pages/DoneTodos";
import Todos from "./pages/Todos";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/done" element={<DoneTodoList />} />
        </Routes>
      </Layout>
  );
}

export default App;
