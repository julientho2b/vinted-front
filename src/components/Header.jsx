import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cookies from "js-cookie";

const Header = ({ login, setLogin }) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <input
          className="input"
          type="text"
          placeholder="Recherche des articles"
        />
        {login ? (
          <button
            className="logout"
            onClick={() => {
              setLogin(false);
              Cookies.remove("token");
            }}
          >
            Se deconnecter
          </button>
        ) : (
          <div className="button-header">
            <Link to="/signup">
              <button className="login">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="login">Se connecter</button>
            </Link>
          </div>
        )}

        <button className="sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
