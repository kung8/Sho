import React, { useState,useEffect } from 'react'
import './Product.css'

function CartItem(props) {
    const { name, price, qty, image, id } = props.item
    const [quantity, setQuantity] = useState(qty)

    useEffect(()=>{
        
    },[quantity])

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div>
                <img src={image} alt='product image' style={{height:200}}/>
            </div>
            <div>
                <div style={{display:'flex',width:'80vw',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <h1 style={{fontSize:'28px',fontWeight:'bold'}}>{name}</h1>
                    <h2 style={{fontSize:'20px'}}>${parseFloat(price * qty).toFixed(2)}</h2>
                </div>
                <div style={{display:'flex',width:'80vw',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <span style={{fontWeight:'bold',fontSize:'20px'}}>Qty:</span>
                    <input style={{width:'60px',fontSize:'20px',height:'25px',marginLeft:0}} onChange={e => setQuantity(e.target.value)} min='0' type='number' value={quantity} />
                    <button style={{outline:'none',color:'white',borderRadius:'16px',background:'blue',width:'150px',height:'30px'}}>Remove from Cart</button>
                </div>
            </div>
            <hr style={{border:'solid black 1px',width:'90vw'}}/>
        </div>
    )
}

export default CartItem