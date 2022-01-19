import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from '@mui/material/Button';


let stripePromise

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe("pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi")

    }
    return stripePromise;
}

const Checkout = () => {
    const item = {
        price: "",
            quantity: 1,
    };

    const checkoutOptions = {
        lineItems: [item],
            mode: "payment",
            successUrl: 'http://localhost:3000',
            cancelUrl: 'http://localhost:3000'
    }


    const redirectToCheckout = async () => {

        console.log(redirectToCheckout)

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout err", error)
    }
    return (
        <Button onClick={redirectToCheckout}>Köp</Button>

    )

}
export default Checkout