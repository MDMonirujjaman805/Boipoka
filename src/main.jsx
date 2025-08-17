import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
import './App.css'
import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer />
  </React.StrictMode>
);
