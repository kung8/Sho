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

    let smallImgArr = product.images.map((img, index) => {
        return (<SmallImgDots onClick={() => selectPic(index)} key={index} style={{ background: selectedPic === index ? 'grey' : 'lightgrey', border: selectedPic === index ? 'black 2px solid' : 'black 2px solid' }}></SmallImgDots>)
    })

    let colorArr = product.colors.map((color, index) => <div onClick={() => selectColor(index)} style={{ marginRight: 50, borderPadding: 5, border: selectedColor === index && 'black solid 3px', background: color, height: 35, width: 35, borderRadius: '50%' }}></div>)

    let sizeArr = product.sizes.map((size, index) => <SmallSizes onClick={() => selectSize(index)} style={{ border: selectedSize === index && 'grey solid 3px', background: selectedSize === index && 'lightgrey' }}>{size}</SmallSizes>)

    return (
        <Body>
            <BigImageContainer>
                <BigImageSelected src={product.images[selectedPic]} alt="product" />
                <BigSmallImageContainer>{imgArr}</BigSmallImageContainer>
            </BigImageContainer>

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
                        <QtyInput onChange={(e) => selectQty(e.target.value)} value={selectedQty} type='number' min='0' />
                    </BigQtyHolder>
                </BigProductColorAndQtyContainer>

                <BigProductSizeAndAddContainer>
                    <div>
                        <BigSpanTitle>Sizes</BigSpanTitle>
                        <div style={{ display: 'flex', width: 350, position: 'relative' }}>{sizeArr}</div>
                    </div>
                    <BigAddButton>ADD TO CART</BigAddButton>
                </BigProductSizeAndAddContainer>

                <BigProductDescriptionContainer>
                    <BigSpanTitle>Item Description</BigSpanTitle>
                    <BigProductDescription>{product.details}</BigProductDescription>
                </BigProductDescriptionContainer>

                <div>
                    <BigSpanTitle>Service Challenge</BigSpanTitle>
                    <p>Call a loved one that you haven't spoken to in a while.</p>
                </div>
            </BigProductInfoContainer>

            <SmallProductNameAndPriceContainer>
                <SmallProductName>{product.name}</SmallProductName>
                <SmallProductPrice>{product.price}</SmallProductPrice>
            </SmallProductNameAndPriceContainer>
            <SmallImageContainer>
                <SmallImageSelected src={product.images[selectedPic]} alt="product" />
                <SmallImgDotContainer>
                    {smallImgArr}
                </SmallImgDotContainer>
            </SmallImageContainer>

            <SmallProductInfoContainer>
                <SmallProductDescriptionContainer>
                    <SmallSpanTitle>Item Description</SmallSpanTitle>
                    <p>{product.details}</p>
                </SmallProductDescriptionContainer>
                
                <div>
                    <SmallSpanTitle>Choose Tee Color</SmallSpanTitle>
                    <SmallColorContainer>
                        {colorArr}
                    </SmallColorContainer>
                </div>
                
                <div>
                    <SmallSpanTitle>Sizes</SmallSpanTitle>
                    <SmallSizeContainer>{sizeArr}</SmallSizeContainer>
                </div>

                <SmallQtyHolder>
                    <SmallSpanTitle>Qty</SmallSpanTitle>
                    <QtyInput onChange={(e) => selectQty(e.target.value)} value={selectedQty} type='number' min='0' />
                </SmallQtyHolder>
            
            </SmallProductInfoContainer>
            <SmallAddButton>ADD TO CART</SmallAddButton>


        </Body>
    )
}

export default Product

const Body = styled.div`
    min-height: calc(100vh - 330px);
    background: white;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 50px;
    font-family: Arial,Helvetica,sans-serif;
    @media screen and (min-width:1060px){
        flex-direction:row;
        justify-content: space-around;
        align-items:flex-start;
        flex-wrap:wrap;
    }
`

const BigImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1060px){
        display:none;
    }
`

const BigImageSelected = styled.img`
    height: 400px; 
    width: 400px;
    @media screen and (max-width:1060px){
        display:none;
    }
`

const BigSmallImageContainer = styled.div`
    display:none;
    @media screen and (min-width:1060px){
        display: flex;
        justify-content: space-between;
        width: 450px;
        margin-top: 25px; 
    }
`

const BigProductInfoContainer = styled.div`
    @media screen and (max-width:1060px){
        display:none
    }
`
const BigProductName = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom:10px;
`

const BigProductPrice = styled.h3`
    font-size: 35px; 
    font-weight: 300;
    margin-bottom:20px;
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
    margin-bottom:20px;

`

const BigQtyHolder = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 15px
`

const QtyInput = styled.input`
    margin-left: 10px;
    width: 70px;
    height: 35px;
    font-size: 25px;
    border-radius: 10px;
    outline: none;
    text-align:center;
`

const BigProductSizeAndAddContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom:20px;

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

const BigProductDescriptionContainer = styled.div`
    width:500px;
`

const BigProductDescription = styled.p`
    margin-bottom:20px;
`

const SmallProductNameAndPriceContainer = styled.div`
    display:flex;
    margin-top:20px;
    margin-bottom:20px;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:1060px){
        display:none;
    }
`

const SmallProductName = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom:10px;
`

const SmallProductPrice = styled.h3`
    font-size: 35px; 
    font-weight: 300;
`

const SmallImageContainer = styled.div`
    position:relative;
    margin-bottom:20px;
`

const SmallImageSelected = styled.img`
    width: 90vw;
    height: 400px;
    @media screen and (min-width:410px){
        width:400px;
    }
    @media screen and (min-width:1060px){
        display:none;
    }
`

const SmallImgDotContainer = styled.div`
    display: flex;
    width: 200px;
    left:calc(50vw - 110px);
    justify-content: space-between;
    position: absolute;
    bottom: 45px;
    @media screen and (min-width:400px){
        left: 100px;
    }
`

const SmallImgDots = styled.div`
    border-radius: 50%; 
    height: 35px;
    width: 35px;
    @media screen and (min-width:1060px){
        display:none;
    } 
`

const SmallProductInfoContainer = styled.div`
    display: flex;
    margin-bottom:20px;
    flex-direction: column;
    align-items: flex-start;
    margin-left:20px;
    width:90vw;
    @media screen and (min-width:450px){
        align-items:center;
    }
    @media screen and (min-width:1060px){
        display:none;
    }
`

const SmallSpanTitle = styled.div`
    font-weight: bold;
    font-size:18px;
    margin-bottom:2px;
`

const SmallProductDescriptionContainer = styled.div`
    width:83vw;
    margin-bottom:20px;
    @media screen and (min-width:450px){
        width:400px;
    }
`

const SmallColorContainer = styled.div`
    display: flex; 
    width:90vw;
    margin-bottom:20px;
    @media screen and (min-width:450px){
        width: 400px;
    }
`

const SmallSizeContainer = styled.div`
    display: flex; 
    width:90vw;
    margin-bottom:20px;
    @media screen and (min-width:360px){
        width: 320px
    }
    @media screen and (min-width:450px){
        width:400px;
        justify-content:flex-start;
    }
`

const SmallSizes = styled.h2`
    margin-right:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    font-size: 25px;
    width: 35px;
    height: 35px;
`

const SmallQtyHolder = styled.div`
    display: flex;
    align-items: center;
    @media screen and (min-width:450px){
        width:400px;
        justify-content:flex-start;
    }
`

const SmallAddButton = styled.button`
    width: 180px;
    height: 45px;
    font-size: 20px;
    border-radius: 16px;
    outline: none;
    @media screen and (min-width:1060px){
        display:none;
    }
`