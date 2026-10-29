import AppRouter from "./routes";

// const Login = lazy(() => import("./layouts/Login"));
// const Dashboard = lazy(() => import("./layouts/dashboard/Dashboard"));
// const Products = lazy(() => import("./layouts/dashboard/Products"));
// const ProductDetails = lazy(() => import("./layouts/dashboard/ProductDetails"));

function App() {
  return <AppRouter />;
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={<Loader message="Global loading..." />}>
//         <Routes>
//           <Route index element={<Home />} />

//           <Route path="login" element={<Login />} />

//           <Route element={<ProtectedRoutes />}>
//             <Route path="about" element={<About />} />
//             <Route path="dashboard" element={<Dashboard />}>
//               <Route index element={<DashboardHome />} />
//               <Route path="users" element={<Users />} />
//               <Route path="products" element={<Products />} />

//               <Route path="products/:id/:title?" element={<ProductDetails />} />
//             </Route>
//           </Route>

//           <Route path="*" element={<p>Not Found - 404</p>} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

export default App;
