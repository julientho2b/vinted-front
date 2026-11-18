import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const params = useParams();

  if (!data) {
    return <p>Chargement...</p>;
  }

  const offer = data.offers.find((element) => element._id === params.id);

  return (
    <main>
      <div className="background">
        <section className="container">
          <div className="display">
            <div className="image-offer">
              {offer.product_pictures.slice(0, 1).map((element) => {
                return (
                  <img key={element.public_id} src={element.url} alt="offer" />
                );
              })}
            </div>
            <article className="article">
              <p className="p-price">{offer.product_price}</p>
              <p className="p-description">
                <span className="span-box">MARQUE </span>
                {offer.product_details[0]?.MARQUE}
              </p>
              <p className="p-description">
                <span className="span-box">TAILLE </span>
                {offer.product_details[1]?.TAILLE}
              </p>
              <p className="p-description">
                <span className="span-box">ETAT</span>
                {offer.product_details[2]?.ETAT}
              </p>
              <p className="p-description">
                <span className="span-box">COULEUR </span>
                {offer.product_details[3]?.COULEUR}
              </p>
              <p className="p-description">
                <span className="span-box">EMPLACEMENT </span>
                {offer.product_details[4]?.EMPLACEMENT}
              </p>
              <p className="border-bottom">
                <span className="span-box">MODES DE PAIEMENT </span>
                {offer.product_details[5]?.["MODES DE PAIEMENT"]}
              </p>
              <p className="name">{offer.product_name}</p>
              <p className="description">{offer.product_description}</p>
              <div className="picto-name">
                <img
                  className="picto"
                  src={offer.owner.account.avatar.url}
                  alt="avatar"
                />
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
