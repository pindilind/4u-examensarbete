
import React from "react";
/* import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; */
 


/* import Button from '@mui/material/Button'; */

function Stripe() {
   /*  const stripe = Stripe('pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi')     */
    /* stripe.redirectToCheckout( {
        sessionId: session.id
    })
 */
    /* const session = await fetch('/create-checkout-session', {
        method: "POST",
        headers: {
            "Content-Type": "application/json" },
            body: JSON.stringify({}) //till server, tomt just nu
    }).then(r => r.json()) */
    
        return (

            <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
        
                
                /* pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi */
           
        )
    }

export default Stripe;