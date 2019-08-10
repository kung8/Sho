import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function Products(props) {
    const [products, setProducts] = useState([{ id: 1, name: 'I Am Fly', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkKMQnguUTq9o1PdiP_10DKkPB7q22pe_J8w_R_cRjCeBAzvZpM43QjztjsHR2UYJd0VqX0qri-XftHuCbV7AnNBdN1yJXpe76q3V7G1zJR2vwDZwvjaos&usqp=CAc' },
    { id: 2, name: 'Another Shirt', price: '$25', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2_-2MPmhMn7YFkObzyKUh1XQjtTj3MWjV6ynCmOZKaNMJLjWc3QOpS4gvRMsvGztT1ikF8emOL0201jjE6xPv4xBRmMUCW2uh32GMh9fkzQtS5UzX14T07g&usqp=CAE' },
    { id: 3, name: 'I Am Fly', price: '$24', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCJdaIb2G7JvG2e7n-2jD1HjdcXJwB4BnO-TqoauzTZdyV6uLl2wEhfPh6O8sfKJ6hxJlT_ExW98VgORzatbGkLexsTYl7S7jhfBxGUq_NMHD4t-pXzhGKWQ&usqp=CAE' },
    { id: 4, name: 'Another Shirt', price: '$35', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRghtz04eQd8LUDM7DZ-xs7OTSmr5BdrvVHmeMmWfrNHlN7AhDryWMJ-1WBkLuVqQh5E1alpbtROdpv98o3RrOuosMu9kq5EiDbaRtW0rM&usqp=CAE' }])

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
            <ProductHolder onClick={() => props.history.push(`/products/${item.id}`)}>
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
                <PrevButton>Previous</PrevButton>
                <NextButton>Next</NextButton>
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
    border:solid black 1px;
    border-radius:10px

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
    align-items:center;
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
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen and (min-width:321px){
        width: 120px;
        font-size: 30px;
    }
`