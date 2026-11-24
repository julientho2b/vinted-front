import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate, useLocation } from "react-router-dom";

import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
// Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP",
);

const Payment = ({ login }) => {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to="/" />;
  }

  let total;

  const portBuyer = 0.59;
  const port = 1.18;

  total = port + portBuyer + location.state.amount;

  console.log(location.state);

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: total * 100,
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  return login ? (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        title={location.state.title}
        amount={location.state.amount}
        portBuyer={portBuyer}
        port={port}
        total={total}
      />
    </Elements>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
