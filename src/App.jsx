import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "./App.css";
import Offer from "./pages/Offer";
import Signup from "../src/components/Signup/Signup";
import Login from "../src/components/Login/Login";
import Cookies from "js-cookie";
import Publish from "./components/Publish/Publish";

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
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
