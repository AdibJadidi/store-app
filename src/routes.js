import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewCategoryPage from "./pages/NewCategoryPage";
import NewProductPage from "./pages/NewProductPage";

const routes = [
  //   { path: "/profile", component: Profile },
  { path: "/", element: <HomePage />, exact: true },
  { path: "/new-category", element: <NewCategoryPage /> },
  { path: "/new-product", element: <NewProductPage /> },
];

export default routes;
