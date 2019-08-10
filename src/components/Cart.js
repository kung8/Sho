import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import styled from 'styled-components'
import axios from 'axios'

function Cart(props){
    const [cart,setCart] = useState([])

    useEffect(()=>{
        setCart([
            {
                id:1,
                name:'Tee',
                image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2_-2MPmhMn7YFkObzyKUh1XQjtTj3MWjV6ynCmOZKaNMJLjWc3QOpS4gvRMsvGztT1ikF8emOL0201jjE6xPv4xBRmMUCW2uh32GMh9fkzQtS5UzX14T07g&usqp=CAE',
                price:'20',
                qty:3
            },
            {
                id:2,
                name:'Another Tee',
                image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkKMQnguUTq9o1PdiP_10DKkPB7q22pe_J8w_R_cRjCeBAzvZpM43QjztjsHR2UYJd0VqX0qri-XftHuCbV7AnNBdN1yJXpe76q3V7G1zJR2vwDZwvjaos&usqp=CAc',
                price:'30',
                qty:1
            }
        ])
    },[])

    let subtotal = parseFloat(Math.round(cart.reduce((total,item)=>total + (item.price * item.qty),0))).toFixed(2)
    let tax = parseFloat(subtotal * 0.0675).toFixed(2)
    let shipping = parseFloat(5).toFixed(2)
    let total = +subtotal + +tax + +shipping

    //this is where I will get the cart for that user

    let mappedCart = cart.map((item,index)=>{
        return(
            <CartItem key={item.id} item={item} index={index} last={cart.length-1}/>
        )
    })

    return(
        <Body>
            <CartTitle>CART</CartTitle>
            {mappedCart}
            <CalculationContainer>
                <CategoriesContainer>
                    <Categories>Subtotal:</Categories> 
                    <Categories>Tax:</Categories> 
                    <Categories>+ Shipping:</Categories>
                    <Categories style={{marginTop:5}}>Total:</Categories> 
                </CategoriesContainer>
                <NumbersContainer>
                    <Numbers>${subtotal}</Numbers>
                    <Numbers>${tax}</Numbers>
                    <Numbers>${shipping}</Numbers>
                    <Numbers style={{marginTop:5}}>${total}</Numbers>
                </NumbersContainer>
                <HR/>
            </CalculationContainer>
            <Button>Checkout</Button>
        </Body>
    )
}

const mapStateToProps = (reduxState) => {
    return{
        user:reduxState.auth.user
    }
}

export default connect(mapStateToProps)(Cart)


const Body = styled.div`
    min-height:calc(100vh - 330px);
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:30px;
`

const CartTitle = styled.h1`
    font-size:50px;
`

const CalculationContainer = styled.div`
    display:flex;
    margin-top:10;
    justify-content:flex-end;
    width:80vw;
    position:relative;
`

const CategoriesContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    margin-right:20px;
`

const Categories = styled.span`
    font-weight:bold;
    font-size:28px;
`   

const NumbersContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`

const Numbers = styled.h3`
    font-size:28px
`

const HR = styled.hr`
    width:240px;
    position:absolute;
    top:80px;
`

const Button = styled.button`
    margin-top:30px;
    width:180px;
    height:40px;
    font-size:30px;
    border-radius:16px;
`