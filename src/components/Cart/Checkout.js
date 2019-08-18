import React from 'react'
import Stripe from 'react-stripe-checkout'
import styled from 'styled-components'

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
        >
            <CheckoutButton className='Grow2'>Proceed to Checkout</CheckoutButton>
        </Stripe>
    )
}

export default Checkout


const CheckoutButton = styled.button`
    width: 220px;
    height: 45px;
    font-size: 20px;
    border-radius: 16px;
    border:1px solid black;
    margin-top:30px;
    outline: none;
`