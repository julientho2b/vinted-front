import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../Login/login.css";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        },
      );

      console.log(response.data);
      Cookies.set("token", response.data.token);
      setLogin(true);
      return true;
    } catch (error) {
      setErrorMessage("Email et/ou mot de pass incorrect");
      return false;
    }
  };

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <section className="login-section">
        <div className="login-page">
          <h1>Se connecter</h1>
          <form
            onSubmit={async (event) => {
              event.preventDefault();

              const success = await handleSubmit();
              setIsLoading(false);

              if (success) {
                navigate("/");
              }
            }}
          >
            <div className="login-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Adresse email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="login-input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {errorMessage ? <p className="red">{errorMessage}</p> : null}
            </div>
            <button>Se connecter</button>
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
