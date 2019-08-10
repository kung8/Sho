import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'

function Cart(props){
    const [cart,setCart] = useState([
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

    let subtotal = parseFloat(Math.round(cart.reduce((total,item)=>total + (item.price * item.qty),0))).toFixed(2)
    let tax = parseFloat(subtotal * 0.0675).toFixed(2)
    let shipping = parseFloat(5).toFixed(2)
    let total = +subtotal + +tax + +shipping

    //this is where I will get the cart for that user
    console.log(typeof subtotal, typeof tax)
    let mappedCart = cart.map(item=>{

        return(
            <CartItem key={item.id} item={item}/>
        )
    })

    return(
        <div style={{minHeight:'calc(100vh - 330px)',display:'flex',flexDirection:'column',alignItems:'center',marginBottom:30}}>
            {mappedCart}
            <div style={{display:'flex',marginTop:10,justifyContent:'flex-end',width:'80vw',position:'relative'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',marginRight:20}}>
                    <span style={{fontWeight:'bold',fontSize:'28px'}}>Subtotal:</span> 
                    <span style={{fontWeight:'bold',fontSize:'28px'}}>Tax:</span> 
                    <span style={{fontWeight:'bold',fontSize:'28px'}}>+ Shipping:</span>
                    <span style={{fontWeight:'bold',fontSize:'28px',marginTop:5}}>Total:</span> 
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                    <h3 style={{fontSize:'28px'}}>${subtotal}</h3>
                    <h3 style={{fontSize:'28px'}}>${tax}</h3>
                    <h3 style={{fontSize:'28px'}}>${shipping}</h3>
                    <h3 style={{fontSize:'28px',marginTop:5}}>${total}</h3>
                </div>
                <hr style={{width:240,position:'absolute',top:80}}/>
            </div>
            <button style={{marginTop:30,width:180,height:40,fontSize:30,borderRadius:16,}}>Checkout</button>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return{
        user:reduxState.auth.user
    }
}

export default connect(mapStateToProps)(Cart)