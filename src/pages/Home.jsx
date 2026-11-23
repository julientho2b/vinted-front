import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false); // une seule fois, dans tous les cas
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <Hero />
      <section className="container">
        {data.offers.map((element) => {
          return (
            <div className="display-offer" key={element._id}>
              <div className="avatar-owner">
                {element.owner.account.avatar?.secure_url ? (
                  <img
                    src={element.owner.account.avatar.secure_url}
                    alt="avatar"
                    className="avatar-img"
                  />
                ) : (
                  <p className="empty-avatar">aaaa</p>
                )}

                <p>{element.owner.account.username}</p>
              </div>
              {element.product_pictures.slice(0, 1).map((pictures) => {
                return (
                  <Link key={pictures.public_id} to={`/offer/${element._id}`}>
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
              <div className="product-display">
                {element.product_details.map((size, index) => {
                  return (
                    <div key={index}>
                      <p>{size.TAILLE && size.TAILLE}</p>
                      <p>{size.MARQUE && size.MARQUE}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
