import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Product.css'
import styled from 'styled-components'

function Product(props) {
    const [product, setProduct] = useState({
        id: 1,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['blue', 'green', 'yellow'],
        name: 'I Am Fly',
        price: '$30',
        details: 'Here is some description about the product. Here is some description about the product. Here is some description about the product. Here is some description about the product.Here is some description about the product.Here is some description about the product.Here is some description about the product. Here is some description about the product.Here is some description about the product.',
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkKMQnguUTq9o1PdiP_10DKkPB7q22pe_J8w_R_cRjCeBAzvZpM43QjztjsHR2UYJd0VqX0qri-XftHuCbV7AnNBdN1yJXpe76q3V7G1zJR2vwDZwvjaos&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2_-2MPmhMn7YFkObzyKUh1XQjtTj3MWjV6ynCmOZKaNMJLjWc3QOpS4gvRMsvGztT1ikF8emOL0201jjE6xPv4xBRmMUCW2uh32GMh9fkzQtS5UzX14T07g&usqp=CAE',
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCJdaIb2G7JvG2e7n-2jD1HjdcXJwB4BnO-TqoauzTZdyV6uLl2wEhfPh6O8sfKJ6hxJlT_ExW98VgORzatbGkLexsTYl7S7jhfBxGUq_NMHD4t-pXzhGKWQ&usqp=CAE',
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRghtz04eQd8LUDM7DZ-xs7OTSmr5BdrvVHmeMmWfrNHlN7AhDryWMJ-1WBkLuVqQh5E1alpbtROdpv98o3RrOuosMu9kq5EiDbaRtW0rM&usqp=CAE'
        ]
    })

    const [selectedPic, selectPic] = useState(0)
    const [selectedColor, selectColor] = useState(0)
    const [selectedSize, selectSize] = useState(0)
    const [selectedQty, selectQty] = useState(0)

    const { id } = props.match.params
    console.log(id)
    // useEffect(()=>{
    //     let item = axios.get(`/api/products/${id}`).then(item=>item.data)
    //     setProduct(item)
    // })

    let imgArr = product.images.map((img, index) => <img onClick={() => selectPic(index)} key={index} src={img} style={{ border: selectedPic === index && 'blue solid 3px', height: 100, width: 75 }} alt='pic' />)

    let colorArr = product.colors.map((color, index) => <div onClick={() => selectColor(index)} style={{ marginRight: 50, borderPadding: 5, border: selectedColor === index && 'black solid 3px', background: color, height: 35, width: 35, borderRadius: '50%' }}></div>)

    let sizeArr = product.sizes.map((size, index) => <h2 onClick={() => selectSize(index)} style={{ marginRight: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', border: selectedSize === index && 'grey solid 3px', borderRadius: '100%', fontSize: 25, width: 35, height: 35, background: selectedSize === index && 'lightgrey' }}>{size}</h2>)

    return (
        <Body>
            <BigImageContainer>
                <BigImageSelected src={product.images[selectedPic]} alt="product" />
                <BigSmallImageContainer>{imgArr}</BigSmallImageContainer>
            </BigImageContainer>
{/* 
            <SmallImageContainer style={{position:'relative'}}>
                <img src={product.images[selectedPic]} alt="product" />
                <div style={{position:'absolute'}}></div>   
            </SmallImageContainer> */}
            
            
            <BigProductInfoContainer>
                <BigProductName>{product.name}</BigProductName>
                <BigProductPrice>{product.price}</BigProductPrice>

                <BigProductColorAndQtyContainer>
                    <div>
                        <BigSpanTitle>Choose Tee Color</BigSpanTitle>
                        <div style={{ display: 'flex', width: 400 }}>
                            {colorArr}
                        </div>
                    </div>
                    <BigQtyHolder>
                        <BigSpanTitle>Qty</BigSpanTitle>
                        <BigQtyInput onChange={(e) => selectQty(e.target.value)} value={selectedQty} type='number' min='0' />
                    </BigQtyHolder>
                </BigProductColorAndQtyContainer>

                <BigProductSizeAndAddContainer>
                    <div>
                        <BigSpanTitle>Sizes</BigSpanTitle>
                        <div style={{ display: 'flex', width: 350, position: 'relative' }}>{sizeArr}</div>
                    </div>
                    <BigAddButton>ADD TO CART</BigAddButton>
                </BigProductSizeAndAddContainer>

                <div style={{ width: 500 }}>
                    <BigSpanTitle>Item Description</BigSpanTitle>
                    <p>{product.details}</p>
                </div>

                <div>
                    <BigSpanTitle>Service Challenge</BigSpanTitle>
                    <p>Call a loved one that you haven't spoken to in a while.</p>
                </div>
            </BigProductInfoContainer>
            
        </Body>
    )
}

export default Product

const Body = styled.div`
    min-height: calc(100vh - 330px);
    background: white;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
    font-family: Arial,Helvetica,sans-serif ;
    flex-wrap:wrap
`

const BigImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BigImageSelected = styled.img`
    height: 400px; 
    width: 400px;
`

const BigSmallImageContainer = styled.div`
    display:none;
    // @media screen and (min-width:1024px){
        display: flex;
        justify-content: space-between;
        width: 450px;
        margin-top: 25px; 
    // }
`

const BigProductInfoContainer = styled.div`
    // @media screen and (max-width:1024px){
        // display:none
    // }
`
const BigProductName = styled.h1`
    font-size: 50px;
    font-weight: bold;
`

const BigProductPrice = styled.h3`
    font-size: 35px; 
    font-weight: 300;
`

const BigSpanTitle = styled.span`
    font-weight: bold;
`

const BigProductColorAndQtyContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const BigQtyHolder = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 15px
`

const BigQtyInput = styled.input`
    margin-left: 10px;
    width: 70px;
    height: 35px;
    font-size: 25px;
    border-radius: 10px;
    outline: none
`

const BigProductSizeAndAddContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const BigAddButton = styled.button`
    width: 150px;
    height: 45px;
    font-size: 20px;
    border-radius: 16px;
    outline: none;
    position: absolute;
    right: 0px;
    top: 10px;
`

const SmallImageContainer = styled.div`

`