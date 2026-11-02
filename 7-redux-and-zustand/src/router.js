import { createBrowserRouter } from "react-router";
import Counter from "./counter-Redux/Counter";
import Dashboard from "./Dashboard";
import ShoppingPage from "./shopping-Redux/ShoppingPage";

const router = createBrowserRouter([
  { index: true, Component: Dashboard },
  { path: '/counter', Component: Counter },
  { path: '/shopping', Component: ShoppingPage }
])

export default router;