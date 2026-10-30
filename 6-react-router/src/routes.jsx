import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import ProtectedRoutes from "./component/ProtectedRoutes";
import About from "./layouts/about/About";
import Dashboard from "./layouts/dashboard/Dashboard";
import DashboardHome from "./layouts/dashboard/DashboardHome";
import Users from "./layouts/dashboard/Users";
import Products, { loadProductsData } from "./layouts/dashboard/Products";
import ProductDetails, {
  loadProductById,
} from "./layouts/dashboard/ProductDetails";
import Loader from "./component/Loader";
import ErrorPage from "./component/error-page";
import MyErrorBoundary2 from "./component/my-beautiful-error-boundary";

const AppRouter = () => {
  //   const router = createBrowserRouter([
  //     { path: "", index: true, Component: Home  },
  //     { path: "/login", Component: Login  },
  //     {
  //       Component: ProtectedRoutes,
  //       children: [
  //         { path: "about", Component: About },
  //         {
  //           path: "dashboard",
  //           Component: Dashboard ,
  //           children: [
  //             { index: true, Component: DashboardHome },
  //             { path: "users", Component: Users },
  //             { path: "products", Component: Products },
  //             { path: "products/:id", Component: ProductDetails },
  //           ],
  //         },
  //       ],
  //     },
  //     { path: "*", element: <p>Not Found - 404 Page</p> },
  //   ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        errorElement={<ErrorPage message={"Gobal error"} />}
        hydrateFallbackElement={<Loader />}
      >
        <Route
          index
          hydrateFallbackElement={<Loader />}
          lazy={() =>
            import("./layouts/Home").then((module) => ({
              Component: module.default,
            }))
          }
        />
        <Route
          path="login"
          lazy={() =>
            import("./layouts/Login").then((module) => ({
              Component: module.default,
            }))
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<Users />} />
            <Route
              path="products"
              loader={loadProductsData}
              errorElement={<MyErrorBoundary2 />}
              element={<Products />}
            />

            <Route
              loader={loadProductById}
              path="products/:id/:title?"
              element={<ProductDetails />}
            />
          </Route>
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
