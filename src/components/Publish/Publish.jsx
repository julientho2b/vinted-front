import "./publish.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Publish = () => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("status", status);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("picture", picture);
    formData.append("exchange", String(exchange));

    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      navigate("/Offer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="background">
        <div className="container">
          <h2 className="publish">Vends ton article</h2>

          <form className="publish-form" onSubmit={handleSubmit}>
            <div className="publish-photo">
              <div className="dashed">
                <div className="label-bloc">
                  <FaPlus className="label-plus" />
                  <label htmlFor="picture" className="label">
                    Ajoute une photo
                  </label>
                </div>
                <input
                  type="file"
                  id="picture"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="publish-title">
              <div className="input-display">
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  id="title"
                  placeholder="ex:Chemise Sézane verte"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>

              <div className="input-display">
                <label htmlFor="description">Décris ton article</label>
                <input
                  className="input-description"
                  type="text"
                  id="description"
                  value={description}
                  placeholder="ex: porté quelquefois, taille correctement"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="publish-description">
              <div className="input-display">
                <label htmlFor="brand">Marque</label>
                <input
                  type="text"
                  id="brand"
                  value={brand}
                  placeholder="ex: Zara"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
              <div className="input-display">
                <label htmlFor="size">Taille</label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  placeholder="ex: L / 40 / 12"
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
              <div className="input-display">
                <label htmlFor="color">Couleur</label>
                <input
                  type="text"
                  id="color"
                  value={color}
                  placeholder="ex: Fuschia"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
              <div className="input-display">
                <label htmlFor="status">Etat</label>
                <input
                  type="text"
                  id="status"
                  value={status}
                  placeholder="Neuf avec étiquette"
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                />
              </div>
              <div className="input-display">
                <label htmlFor="location">Lieu</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  placeholder="ex: Paris"
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="publish-price">
              <div className="input-display price-display">
                <label htmlFor="price">Prix</label>
                <input
                  type="number"
                  id="price"
                  placeholder="0,00 €"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="exchange"
                  checked={exchange}
                  onChange={(event) => {
                    setExchange(event.target.checked);
                  }}
                />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
            <div className="publish-button">
              <button>Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Publish;
