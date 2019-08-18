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
            'https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1522962506050-a2f0267e4895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1524148327109-98933ca00d2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        ]
    })

    const [selectedPic, selectPic] = useState(0)
    const [selectedColor, selectColor] = useState(0)
    const [selectedSize, selectSize] = useState(0)
    const [selectedQty, selectQty] = useState(0)
    const [smallPic,selectSmallPic] = useState(false)

    const { id } = props.match.params
    console.log(id)
    // useEffect(()=>{
    //     let item = axios.get(`/api/products/${id}`).then(item=>item.data)
    //     setProduct(item)
    // })

    let imgArr = product.images.map((img, index) => <img className='Grow2' onClick={() => selectPic(index)} key={index} src={img} style={{ border: selectedPic === index && 'blue solid 3px', opacity:selectedPic !== index && 0.5,height: 100, width: 75 }} alt='pic' />)

    let smallImgArr = product.images.map((img, index) => {
        return (<SmallImgDots className='Grow3' onClick={() => selectPic(index)} key={index} style={{ background: selectedPic === index ? 'grey' : 'lightgrey', border: selectedPic === index ? 'black 2px solid' : 'black 2px solid' }}></SmallImgDots>)
    })

    let colorArr = product.colors.map((color, index) => <div className='Grow2' onClick={() => selectColor(index)} style={{ marginRight: 50, borderPadding: 5, border: selectedColor === index && 'black solid 3px', background: color, height: 35, width: 35, borderRadius: '50%' }}></div>)

    let sizeArr = product.sizes.map((size, index) => <SmallSizes className='Grow2' onClick={() => selectSize(index)} style={{ border: selectedSize === index && 'grey solid 3px', background: selectedSize === index && 'lightgrey' }}>{size}</SmallSizes>)

    return (
        <Body>
            <BigImageContainer>
                <BigImageSelected className='Zoom' src={product.images[selectedPic]} alt="product" />
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
                        <QtyInput className='Grow2' onChange={(e) => selectQty(e.target.value)} value={selectedQty} type='number' min='0' />
                    </BigQtyHolder>
                </BigProductColorAndQtyContainer>

                <BigProductSizeAndAddContainer>
                    <div>
                        <BigSpanTitle>Sizes</BigSpanTitle>
                        <div style={{ display: 'flex', width: 350, position: 'relative' }}>{sizeArr}</div>
                    </div>
                    <BigAddButton className='Grow2'>ADD TO CART</BigAddButton>
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

            <SmallProductNameAndPriceContainer onClick={()=> {if(smallPic){selectSmallPic(false)}}} style={{opacity:smallPic&&'0.1'}}>
                <SmallProductName>{product.name}</SmallProductName>
                <SmallProductPrice>{product.price}</SmallProductPrice>
            </SmallProductNameAndPriceContainer>
            
            <SmallImageContainer>
                <SmallImageSelected style={{transform:smallPic?'scale(1.05)':'scale(1.0)'}} onClick={()=>selectSmallPic(!smallPic)} src={product.images[selectedPic]} alt="product" />
                <SmallImgDotContainer>
                    {smallImgArr}
                </SmallImgDotContainer>
            </SmallImageContainer>

            <SmallProductInfoContainer onClick={()=> {if(smallPic){selectSmallPic(false)}}} style={{opacity:smallPic&&'0.1'}}>
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
            <SmallAddButton style={{opacity:smallPic&&'0.1'}} className='Grow2'>ADD TO CART</SmallAddButton>


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
    max-width:100vw;
    font-family: Arial,Helvetica,sans-serif;
    @media (min-width:600px){
        margin-top:50px;
        height:100vh;
    }

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
    border:1px solid black;
    outline: none;
    text-align:center;
    position:relative;
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
    width: 180px;
    height: 45px;
    font-size: 20px;
    border-radius: 16px;
    outline: none;
    border:1px solid black;
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

    @media (min-width:600px){
        &:hover{
            transform:scale(1.45);
            z-index:1
        }
    }
    
    @media (min-width:740px){
        &:hover{
            transform:scale(1.8)
        }
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
    border:1px solid black;
    outline: none;
    @media screen and (min-width:1060px){
        display:none;
    }
`