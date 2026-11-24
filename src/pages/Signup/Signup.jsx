import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = ({ setLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        },
      );
      console.log(response.data);

      Cookies.set("token", response.data.token);
      setLogin(true);
    } catch (error) {
      setErrorMessage("Cette adresse email est déjà utilisée");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <section className="login-section">
        <div className="login-page">
          <h1>S'inscrire</h1>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (password.length < 5 || password.length > 10) {
                setErrorMessage(
                  "Le password doit faire entre 5 et 10 caractères",
                );
              } else {
                const success = await handleSubmit();

                if (success) {
                  setErrorMessage("");
                  navigate("/");
                }
              }
            }}
          >
            <div>
              <input
                className="login-input"
                type="text"
                name="username"
                id="username"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="login-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="login-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {errorMessage ? <p className="red">{errorMessage}</p> : null}
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                checked={newsletter}
                onChange={(event) => {
                  setNewsletter(event.target.checked);
                }}
              />
              <span className="span-newsletter">
                S'inscrire à notre newsletter
              </span>
            </div>
            <p className="p-login">
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
            <button>S'inscrire</button>
            <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
