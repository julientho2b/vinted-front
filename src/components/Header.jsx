import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="" />
        <input
          className="input"
          type="text"
          placeholder="Recherche des articles"
        />
        <div className="button-header">
          <button className="login">S'inscrire</button>
          <button className="login">Se connecter</button>
        </div>
        <button className="sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
