import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/Body/ErrorPage/errorPage";
import MenuPage from "../pages/Body/MenuPage/menuPage";
import DeliveryPage from "../pages/Body/DeliveryPage/deliveryPage";
import Layout from "../pages/Layout/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<MenuPage />}></Route>

          <Route path="delivery" element={<DeliveryPage />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
