import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Hoom from "./Components/Hoom/Hoom";
import BookDetails from "./Components/BookDetails/BookDetails";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesRead from "./Components/PagesRead/PagesRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Hoom></Hoom>,
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/public/fakeData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/public/fakeData.json"),
      },
      {
        path: "/pagesRead",
        element: <PagesRead></PagesRead>,
        loader: () => fetch("/public/fakeData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
