import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./layouts/Login";
import Users from "./layouts/dashboard/Users";
import Products from "./layouts/dashboard/Products";
import Dashboard from "./layouts/dashboard/Dashboard";
import DashboardHome from "./layouts/dashboard/DashboardHome";
import Home from "./layouts/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<p>About Paragraph</p>} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />}/>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
