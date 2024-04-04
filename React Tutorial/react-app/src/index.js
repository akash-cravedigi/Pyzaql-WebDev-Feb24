import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import Events from './components/Events';
import App from './App';
import Navigation from './components/Navigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <App />
    )
  },
  {
    path:"events",
    element: (
      <Events />
    )
  },
  {
    path:"ccomponent",
    element: (
      <ClassComponent />
    )
  },
  {
    path:"fcomponent",
    element: (
      <FuncComponent />
    )
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);
