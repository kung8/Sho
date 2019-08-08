import React from 'react'
import styled from 'styled-components'

function Footer(){
    return(
        <Body>
            <i style={{padding:30}} className="fas fa-envelope"></i>
            <i style={{padding:30}} className="fab fa-facebook"></i>
            <i style={{padding:30}} className="fab fa-instagram"></i>
            <i style={{padding:30}} className="fab fa-twitter"></i>
        </Body>
    )
}

export default Footer 

const Body = styled.div`
    display:flex;
    justify-content:center;
    background:grey;
    align-items:center;
    max-width:100vw;
`