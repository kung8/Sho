import React, { useState, useEffect } from 'react'
import '../Product/Product.css'
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
    const [sizeBox,setSizeBox] = useState(false)

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
        //axios call for that specific product's available colors and sizes
        setColors(['blue', 'green', 'yellow','orange','red','purple'])
        setSizes(['S', 'M', 'L', 'XL'])
        
    }, [quantity,sizes,colors])

    const showColors=()=>{
        setColorBox(!colorBox)
    }

    const showSizes = () => {
        setSizeBox(!sizeBox)
    }

    const sizeSelected = (size) => {
        selectSize(size)
        setSizeBox(false)
        //need to save this change to the db
    }

    const colorSelected = (color) =>{
        selectColor(color)
        setColorBox(false)
        //need to save this change to the db
    }

    let sizesArr = sizes.map((size,index)=>{
        return<CartItemSizes className='Grow2' key={index} onClick={()=>sizeSelected(size)} >{size}</CartItemSizes>
    })
    
    let colorsArr = colors.map((color,index)=>{
        return <CartItemColors className='Grow2' key={index} onClick={()=>colorSelected(color)} style={{background:color}}></CartItemColors>
    })

    return (
        <>
            <BigHR style={styles.ifFirst} />
            <CartItemContainer>
                <SmallHR style={styles.ifFirst} />
                <div style={styles.firstImage}>
                    <Img className='Grow2' src={image} alt='product image' />
                </div>
                <CartItemInfoContainer>
                    <CartItemNameAndPriceContainer>
                        <CartItemName>{name}</CartItemName>
                        <CartItemPrice>${parseFloat(price * qty).toFixed(2)}</CartItemPrice>
                    </CartItemNameAndPriceContainer>
                    <CartItemCategoryContainer>
                        <CartItemCategory>Size:</CartItemCategory>
                        
                        {!sizeBox && <CartItemSize className='Grow2' onClick={showSizes}>{selectedSize}</CartItemSize>}
                        {sizeBox && <CartItemSizesContainer onMouseLeave={showSizes}>{sizesArr}</CartItemSizesContainer>}

                    </CartItemCategoryContainer>
                    <CartItemCategoryContainer>
                        <CartItemCategory>Color:</CartItemCategory>
                        {!colorBox && <CartItemColor className='Grow2' onClick={showColors} style={{background: selectedColor}}></CartItemColor>}
                        {colorBox && <CartItemColorsContainer onMouseLeave={showColors}>{colorsArr}</CartItemColorsContainer>}
                    </CartItemCategoryContainer>
                    <CartItemQtyAndRemoveContainer>
                        <CartItemQtyContainer>
                            <CartItemCategory>Qty:</CartItemCategory>
                            <CartItemQtyInput className='Grow2' onChange={e => setQuantity(e.target.value)} min='0' type='number' value={quantity} />
                        </CartItemQtyContainer>
                        <CartItemRemoveButton className='Grow3'><i className="fas fa-trash" style={{marginRight:5}}></i>Remove from Cart</CartItemRemoveButton>
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

const CartItemSizesContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid black;
    min-width:150px;
    border-radius:16px;
    padding:2px;
`

const CartItemSizes = styled.h3`
    margin-right:5px;
    font-size:20px
`

const CartItemColor = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border:1px solid black;
`

const CartItemColorsContainer = styled.div`
    display:flex;
    border:1px solid black;
    min-width:100px;
    border-radius:16px;
    padding:2px;
`

const CartItemColors = styled.div`
    border:solid 1px black;
    height:25px;
    width:25px;
    border-radius:50%;
    margin-right:2px;
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

const CartItemRemoveButton = styled.div`
    // outline: none;
    color: black;
    // border-radius: 16px;
    // background: blue;
    // width: 150px;
    // height: 30px;
`

const BigHR = styled.hr`
    display:none;
    @media screen and (min-width:600px){
        display:block;
    }
`