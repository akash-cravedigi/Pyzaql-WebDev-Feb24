import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import AboutUs from './AboutUs';
import ExpenseTracker from './ExpenseTracker';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import "./index.css";

import { DBConfig } from "./DBConfig";
import { initDB } from "react-indexed-db-hook";

initDB(DBConfig);

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <Home />
    )
  },
  {
    path:"about",
    element: (
      <AboutUs />
    )
  },
  {
    path:"expensetracker",
    element: (
      <ExpenseTracker />
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);
