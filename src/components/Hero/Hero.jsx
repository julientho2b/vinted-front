import "./hero.css";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="image-container">
      <img src={hero} alt="hero logo" />
      <div className="carre-blanc">
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <button>Commencez à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
