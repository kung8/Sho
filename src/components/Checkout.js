import React from 'react'
import Stripe from 'react-stripe-checkout'

function Checkout(props) {
    const { total, pay } = props
    return (
        <Stripe
            style={{ marginTop: 25, borderRadius: 16 }}
            name='SHO'
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={pay}
            amount={total * 100}
            currency="USD"
            panelLabel="Submit Payment"
            locale="en"
            shippingAddress
        />
    )
}

export default Checkout


