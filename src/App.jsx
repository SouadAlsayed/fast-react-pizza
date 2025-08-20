import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:orderId", element: <Order /> },
  { path: "/cart", element: <Cart /> },
]);

function App() {
  const x = 99;
  return <RouterProvider router={router} />;
}

export default App;
