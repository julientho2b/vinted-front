import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "./App.css";
import Offer from "./pages/Offer";
import Signup from "../src/pages/Signup/Signup";
import Login from "../src/pages/Login/Login";
import Cookies from "js-cookie";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";

function App() {
  const [login, setLogin] = useState(Cookies.get("token") ? true : false);

  return (
    <Router>
      <Header login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup setLogin={setLogin} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/publish" element={<Publish login={login} />} />
        <Route path="/payment" element={<Payment login={login} />} />
      </Routes>
    </Router>
  );
}

export default App;
