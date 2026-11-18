import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = ({ data }) => {
  return (
    <main>
      <Hero />
      <section className="container">
        {data.offers.map((element) => {
          return (
            <div className="display-offer" key={element._id}>
              <div className="avatar-owner">
                <img
                  src={element.owner.account.avatar.url}
                  alt="avatar"
                  className="avatar-img"
                />

                <p>{element.owner.account.username}</p>
              </div>
              {element.product_pictures.slice(0, 1).map((pictures) => {
                return (
                  <Link key={pictures} to={`/offer/${element._id}`}>
                    <img
                      src={pictures.url}
                      alt="offer"
                      className="offer-img"
                      key={pictures.public_id}
                    />
                  </Link>
                );
              })}
              <p>{element.product_price} €</p>
              {element.product_details.map((size, index) => {
                const taille = size.TAILLE; // <---- remet le case de ma key en minuscule
                const marque = size.MARQUE; // <---- remet le case de ma key en minuscule
                return (
                  <div key={index}>
                    <p>{taille}</p>
                    <p>{marque}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
