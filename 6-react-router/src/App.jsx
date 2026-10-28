import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./layouts/Login";
import Users from "./layouts/dashboard/Users";
import Products from "./layouts/dashboard/Products";
import Dashboard from "./layouts/dashboard/Dashboard";
import DashboardHome from "./layouts/dashboard/DashboardHome";
import Home from "./layouts/Home";
import ProductDetails from "./layouts/dashboard/ProductDetails";
import ProtectedRoutes from "./component/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="about" element={<p>About Paragraph</p>} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />

            <Route path="products/:id/:title?" element={<ProductDetails />} />
          </Route>
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
