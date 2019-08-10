import React, { useState, useEffect } from 'react'
import './Product.css'
import styled from 'styled-components'

function CartItem(props) {
    const { name, price, qty, image, id } = props.item
    const { index, last } = props
    const [quantity, setQuantity] = useState(qty)

    const styles = {
        ifFirst: {
            border: index === 0 && 'solid black 1px',
            width: index === 0 && '90vw'
        },
        ifLast: {
            border: index === last ? 'solid black 1px' : 'solid lightgrey 1px',
            width: index === last ? '90vw' : '80vw'
        },
        firstImage: {
            marginTop: index === 0 && '5px'
        }
    }

    useEffect(() => {

    }, [quantity])

    return (
        <>
            <BigHR style={styles.ifFirst}/>
            <CartItemContainer>
                <SmallHR style={styles.ifFirst} />
                <div style={styles.firstImage}>
                    <Img src={image} alt='product image' />
                </div>
                <CartItemInfoContainer>
                    <CartItemNameAndPriceContainer>
                        <CartItemName>{name}</CartItemName>
                        <CartItemPrice>${parseFloat(price * qty).toFixed(2)}</CartItemPrice>
                    </CartItemNameAndPriceContainer>
                    <CartItemQtyAndRemoveContainer>
                        <CartItemQtyContainer>
                            <CartItemQty>Qty:</CartItemQty>
                            <CartItemQtyInput onChange={e => setQuantity(e.target.value)} min='0' type='number' value={quantity} />
                        </CartItemQtyContainer>
                        <CartItemRemoveButton>Remove from Cart</CartItemRemoveButton>
                    </CartItemQtyAndRemoveContainer>
                </CartItemInfoContainer>
                <SmallHR style={styles.ifLast} />
            </CartItemContainer>
            <BigHR style={styles.ifLast}/>
        </>
    )
}

export default CartItem

const CartItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    marginTop:5px;
    @media screen and (min-width:600px){
        flex-direction:row;
        justify-content:space-around;
        align-items:none;
        width:90vw;
    }
`

const SmallHR = styled.hr`
    @media screen and (min-width:600px){
        display:none;
    }
`

const Img = styled.img`
    height:200px;
`

const CartItemInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    @media screen and (min-width:600px){
        align-items:center;
        justify-content:space-around;
        height:200px;
    }
`

const CartItemNameAndPriceContainer = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px; 
    @media screen and (min-width:600px){
        width:45vw;
    }
    @media screen and (max-width:321px){
        width:90vw;
    }
`

const CartItemName = styled.h1`
    font-size: 28px;
    font-weight: bold; 
`

const CartItemPrice = styled.h2`
    font-size: 20px
`

const CartItemQtyAndRemoveContainer = styled.div`
    margin-bottom:5px;
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    @media screen and (min-width:600px){
        width:45vw;
    }
    @media screen and (max-width:321px){
        width:90vw;
    }
`

const CartItemQtyContainer = styled.div`
    display:flex;
    align-items:center;
`

const CartItemQty = styled.span`
    font-weight: bold; 
    font-size: 20px;
    margin-right:5px; 
`

const CartItemQtyInput = styled.input`
    width: 60px;
    font-size: 20px;
    height: 25px;
    margin-left: 0px;
    outline:none;
    border:1px solid black;
    border-radius:16px;
    text-align:center;
`

const CartItemRemoveButton = styled.button`
    outline: none;
    color: white;
    border-radius: 16px;
    background: blue;
    width: 150px;
    height: 30px;
`

const BigHR = styled.hr`
    display:none;
    @media screen and (min-width:600px){
        display:block;
    }
`