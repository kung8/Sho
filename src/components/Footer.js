import React from 'react'

function Footer(){
    return(
        <div style={{display:'flex',justifyContent:'center',background:'grey',alignItems:'center'}}>
            <i style={{padding:30}} className="fas fa-envelope"></i>
            <i style={{padding:30}} className="fab fa-facebook"></i>
            <i style={{padding:30}} className="fab fa-instagram"></i>
            <i style={{padding:30}} className="fab fa-twitter"></i>
        </div>
    )
}

export default Footer 