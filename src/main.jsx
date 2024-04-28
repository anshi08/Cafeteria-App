import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css'
import Home from "../src/components/Home.jsx"
import Orders from "../src/components/Orders.jsx"
import OrderHistory from "../src/components/OrderHistory.jsx"
import Inventory from "../src/components/Inventory.jsx"
import CurrentOrders from "../src/components/CurrentOrders.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route exact path="/" element={<Home />} />
      <Route path="/order-page" element={<Orders />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/current-orders" element={<CurrentOrders />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
