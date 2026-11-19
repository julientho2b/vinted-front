import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Offer from "./pages/Offer";
import axios from "axios";
import Signup from "../src/components/Signup/Signup";
import Login from "../src/components/Login/Login";
import Cookies from "js-cookie";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState(Cookies.get("token") ? true : false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers",
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Router>
        <Header login={login} setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer/:id" element={<Offer data={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
