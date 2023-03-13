import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Payment from './Payment'


const PUBLIC_KEY = "pk_test_51Mia27SFyQxgXuo3S6DNSUlYkK0klmzaJJlj4Os4QUcTbLqWfXVC2vwBZHhHwPAsn4ElNcq2PnVtMkApUpRLiqkb00PtgugfGy"
const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer = () => {
    return <Elements stripe={stripeTestPromise}>
        <Payment />
    </Elements>;
}



export default StripeContainer;