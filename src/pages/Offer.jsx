import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const params = useParams();
  const [offer, setOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${params.id}`,
        );
        setOffer(response.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <div className="background">
        <section className="container">
          <div className="display">
            <div className="image-offer">
              {offer.product_pictures.slice(0, 1).map((element) => {
                return (
                  <img
                    key={element.public_id}
                    src={element.secure_url}
                    alt="offer"
                  />
                );
              })}
            </div>
            <article className="article">
              <p className="p-price">{offer.product_price} €</p>
              <ul className="ul-offer">
                <li>
                  <span>MARQUE</span>
                  <span> {offer.product_details[0]?.MARQUE}</span>
                </li>
                <li>
                  <span>TAILLE</span>
                  <span> {offer.product_details[1]?.TAILLE}</span>
                </li>
                <li>
                  <span>ETAT</span>
                  <span> {offer.product_details[2]?.ETAT}</span>
                </li>
                <li>
                  <span>COULEUR</span>
                  <span> {offer.product_details[3]?.COULEUR}</span>
                </li>
                <li>
                  <span>EMPLACEMENT</span>
                  <span> {offer.product_details[4]?.EMPLACEMENT}</span>
                </li>
                <li className="last-li">
                  <span>MODES DE PAIEMENT</span>
                  <span>
                    {" "}
                    {offer.product_details[5]?.["MODES DE PAIEMENT"]}
                  </span>
                </li>
              </ul>

              <p className="name">{offer.product_name}</p>
              <p className="description">{offer.product_description}</p>
              <div className="picto-name">
                {offer.owner.account.avatar?.url ? (
                  <img
                    className="picto"
                    src={offer.owner.account.avatar?.url}
                    alt="avatar"
                  />
                ) : (
                  <p className="empty-avatar"></p>
                )}

                <p>{offer.owner.account.username}</p>
              </div>
              <button className="buy-button">Acheter</button>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Offer;
