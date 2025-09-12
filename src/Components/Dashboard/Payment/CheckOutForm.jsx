import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import apiClient from "../../../Services/apiClient";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
    const [isError, setIsError] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = apiClient();
    const [cart] = useCart();
    const price = cart.reduce((total, item) => total + item.price, 0);
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const [transectionId, setTransectionId] = useState('');

    useEffect(() => {
        axiosSecure
            .post('/create-payment-intent', { price: price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setIsError(error.message);
        } else {
            setIsError("");
            console.log(paymentMethod);
        }

        // confirm payment
        const { paymentIntent, error: confirm_error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirm_error) {
            setIsError(confirm_error);
        } else {
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transection id', paymentIntent.id);
                setTransectionId(paymentIntent.id);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': { color: '#aab7c4' },
                            fontFamily: 'Arial, sans-serif',
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                style={{
                    marginTop: '20px',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#B58130',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: stripe ? 'pointer' : 'not-allowed',
                }}
            >
                Pay
            </button>
            <p className="text-warning text-sm p-4">{isError}</p>
            {transectionId && <p className="text-success text-sm p-4">Your Transection Id: ${transectionId}</p>}
        </form>
    );
};

export default CheckOutForm;
