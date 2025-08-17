import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Root from "./Root";
import ErrorPage from "../components/ErrorPage";
import BookDetails from "../pages/BookDetails";
import ReadList from "../pages/ReadList";
// import WishList from "../pages/WishList"

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "readList",
        loader: () => fetch("booksData.json"),
        Component: ReadList,
      },
      
      // {
      //   path: "wishList",
      //   loader: () => fetch("booksData.json"),
      //   Component: WishList,
      // },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);
