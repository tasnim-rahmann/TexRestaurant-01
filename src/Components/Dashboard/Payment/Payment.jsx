import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"---Please pay to eat---"} />
            <div>
                <Elements stripe={stripPromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;