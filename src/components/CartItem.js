import React, { useState, useEffect } from 'react'
import './Product.css'
import styled from 'styled-components'
import axios from 'axios'

function CartItem(props) {
    const { name, price, qty, image, id, size, color } = props.item
    const { index, last } = props

    const [quantity, setQuantity] = useState(qty)
    const [selectedColor,selectColor] = useState(color)
    const [selectedSize,selectSize] = useState(size)

    const [colors, setColors] = useState([])
    const [sizes,setSizes] = useState([])

    const [colorBox,setColorBox] = useState(false)
    const [sizeBox,setsizeBox] = useState(false)

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
        setColors(['blue', 'green', 'yellow','orange','red','purple'])
        setSizes(['S', 'M', 'L', 'XL'])
        
    }, [quantity,sizes,colors])

    const showColors=()=>{
        console.log('This is working!')
        setColorBox(!colorBox)
    }

    const colorSelected = (color) =>{
        selectColor(color)
        setColorBox(false)
    }

    let colorsArr = colors.map((color,index)=><div key={index} onClick={()=>colorSelected(color)} style={{border:'solid 1px black',background:color,height:25,width:25,borderRadius:'50%',marginRight:'2px'}}></div>)

    return (
        <>
            <BigHR style={styles.ifFirst} />
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
                    <CartItemCategoryContainer>
                        <CartItemCategory>Size:</CartItemCategory>
                        <CartItemSize>{size}</CartItemSize>
                    </CartItemCategoryContainer>
                    <CartItemCategoryContainer>
                        <CartItemCategory>Color:</CartItemCategory>
                        {!colorBox && <CartItemColor onClick={showColors} style={{border:'1px solid black',background: selectedColor}}></CartItemColor>}
                        {colorBox && <div onMouseLeave={showColors} style={{display:'flex',border:'1px solid black',minWidth:'100px',borderRadius:'16px',padding:'2px'}}>{colorsArr}</div>}
                    </CartItemCategoryContainer>
                    <CartItemQtyAndRemoveContainer>
                        <CartItemQtyContainer>
                            <CartItemCategory>Qty:</CartItemCategory>
                            <CartItemQtyInput onChange={e => setQuantity(e.target.value)} min='0' type='number' value={quantity} />
                        </CartItemQtyContainer>
                        <CartItemRemoveButton>Remove from Cart</CartItemRemoveButton>
                    </CartItemQtyAndRemoveContainer>
                </CartItemInfoContainer>
                <SmallHR style={styles.ifLast} />
            </CartItemContainer>
            <BigHR style={styles.ifLast} />
        </>
    )
}

export default CartItem

const CartItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    marginTop:5px;
    max-width:100vw;
    width:100vw;
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
    @media screen and (max-width:321px){
        width:90vw;
    }
    @media screen and (min-width:600px){
        width:45vw;
    }
    
`

const CartItemName = styled.h1`
    font-size: 28px;
    font-weight: bold; 
`

const CartItemPrice = styled.h2`
    font-size: 20px
`

const CartItemCategoryContainer = styled.div`
    display: flex; 
    align-items: center;
    margin-top:5px;
`

const CartItemCategory = styled.span`
    font-weight: bold; 
    font-size: 20px;
    margin-right:5px; 
`

const CartItemSize = styled.h3`
    font-size:20px;
`

const CartItemColor = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%
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

const CartItemQtyInput = styled.input`
    width: 60px;
    font-size: 20px;
    height: 25px;
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