import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useClassItem } from "../../../UseHooks/UseClassItem";

const Payment = () => {
    const [classItem] = useClassItem();
    // console.log(classItem);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={classItem.price} cart={classItem}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
