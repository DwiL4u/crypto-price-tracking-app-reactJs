import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import CoinProvider from "./context/CoinContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <CoinProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </CoinProvider>
  );
};

export default App;
