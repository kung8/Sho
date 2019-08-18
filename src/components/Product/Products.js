import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function Products(props) {
    const [products, setProducts] = useState([{ id: 1, name: 'I Am Fly', price: '$30', image: 'https://images.unsplash.com/photo-1533042680673-da237da2a875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
    { id: 2, name: 'Another Shirt', price: '$25', image: 'https://images.unsplash.com/photo-1522962506050-a2f0267e4895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
    { id: 3, name: 'I Am Fly', price: '$24', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
    { id: 4, name: 'Another Shirt', price: '$35', image: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }])

    // useEffect(()=>{
    //     //get all the products for the first couple
    //     let prodArr = axios.get().then(res=>res.data)
    //     setProducts(prodArr)
    //     //now save the products to products
    // },[])

    //I want to have a tile for each product - paginated
    //I want name of the product beneath


    const productsArr = products.map(item => {
        return (
            <ProductHolder className='Grow' onClick={() => props.history.push(`/products/${item.id}`)}>
                <ProductImg src={item.image} alt="product" />
                <ProductName>{item.name}</ProductName>
                <h2>{item.price}</h2>
            </ProductHolder>
        )
    })


    return (
        <Body>
            <ProductArrHolder>
                {productsArr}
            </ProductArrHolder>
            <ButtonHolder>
                <PrevButton className='Grow2'>Previous</PrevButton>
                <NextButton className='Grow2'>Next</NextButton>
            </ButtonHolder>
        </Body>
    )
}

export default Products

const Body = styled.div`
    min-height:calc(100vh - 330px);
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:100vw;
    @media(min-width:600px){
        margin-top:50px;
    }
`

const ProductArrHolder = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap
`

const ProductHolder = styled.div`
    height:450px;
    width:90vw;
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:520px){
        width:510px;
    }
    @media screen and (min-width:768px){
        width:320px;
        height:390px;
    }
    @media screen and (min-width:970px){
        width:450px;
        height:490px;
    }
    @media screen and (min-width:1100px){
        width:520px;
    }
`

const ProductImg = styled.img`
    width:300px;
    height:400px;
    padding:20px;
    @media screen and (min-width:520px){
        width:500px;
    }
    @media screen and (min-width:768px){
        width:300px;
        height:340px;
        padding:5px;
    }
    @media screen and (min-width:970px){
        width:420px;
        height:450px;
    }
    @media screen and (min-width:1100px){
        width:500px;
    }

`

const ProductName = styled.h2`
    font-size: 28px; 
    font-weight: 800
`

const ButtonHolder = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    height: 40px;
    display: flex;
    width:90vw;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width:420px){
        width: 80vw;
    }
    @media screen and (min-width:700px){
        width: 65vw;
    }
`

const PrevButton = styled.button`
    height: 35px;
    border-radius: 16px;
    font-size:25px;
    width:125px;
    outline: none;
    display:flex;
    border:1px solid black;
    justify-content:center;
    @media screen and (min-width:321px){
        width: 150px;
        font-size: 30px;
    }
`
const NextButton = styled.button`
    height: 35px;
    border-radius: 16px;
    font-size:25px;
    width:100px;
    outline: none;
    border:1px solid black;
    display:flex;
    justify-content:center;
    @media screen and (min-width:321px){
        width: 120px;
        font-size: 30px;
    }
`