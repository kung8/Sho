import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

function Dash(props) {
    useEffect(() => {

    }, [])
    // if (!Object.keys(props.auth.user).length) {
    //     return <Redirect to='/authentication' />
    // } else {
    return (
        <Body>
            <BannerImg>
                <BannerTextbox onClick={()=>props.history.push('/products')}>
                    <BannerBigText>Trending Positivity</BannerBigText>
                    <BannerSmallText>JOIN THE MOVEMENT</BannerSmallText>
                </BannerTextbox>
            </BannerImg>
            <ImgContainer>
                <Img1 className='Grow'>
                    <PicTextboxHolder onClick={()=>props.history.push('/products')}>
                        <PicBigText>Dress in Style</PicBigText>
                        <PicSmallText>See products</PicSmallText>
                    </PicTextboxHolder>
                </Img1>

                <Img2 className='Grow'>
                    <PicTextboxHolder onClick={()=>props.history.push('/blogs')}>
                        <PicBigText>Join our TRIBE</PicBigText>
                    </PicTextboxHolder>
                </Img2>
            </ImgContainer>
        </Body>
    )
    // }
}

export default connect(state => state)(Dash)

const Body = styled.div`
    display:flex;
    flex-direction:column;
    max-width:100vw;
    min-height:calc(100vh - 225px);
    @media screen and (min-height:1366px){
        height:calc(100vh - 329px)
    }
`

const BannerImg = styled.div`
    background: url(https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center no-repeat #cccccc;
    height: calc(98vh - 75px);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`

const BannerTextbox = styled.div`
    margin-left:35px;
    @media (min-width:400px){
        margin-left:50px;
    }
    @media(min-width:500px){
        margin-left: 70px;
    }
    @media (min-width:800px){
        margin-left: 100px;
    }
`

const BannerBigText = styled.h1`
    font-size:45px;
    color: white;
    letter-spacing: 0.15em;
    text-shadow:3px 3px black;
    @media (min-width:350px){
        font-size: 60px;
    }
    @media (min-width:1000px){
        font-size:75px
    }
`

const BannerSmallText = styled.h3`
    font-size:25px;
    color: grey;
    margin-top:5px;
    letter-spacing: 0.15em;
    text-shadow:2px 1.5px black;
    @media (min-width:350px){
        font-size: 40px;
    }
    &:hover {
        color:red;
        transform:scale(1.01);
    }
`

const ImgContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:100vh;
    @media screen and (min-width:760px){
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
    }
`

const Img1 = styled.div`
    width:95vw;
    height:450px;
    margin-bottom:10px;
    margin-top:10px;
    background: url(https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80);
    background-size: cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0.75;
    @media screen and (min-width:760px){
        width:47%;
        height:95%;
        margin:0px;
    }
`
const Img2 = styled.div`
    width:95vw;
    height:450px;
    margin-bottom:10px;
    margin-top:10px;
    background: url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
    background-size: cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0.75;
    @media screen and (min-width:760px){
        width:47%;
        height:95%;
        margin:0px;
    }
`

const PicTextboxHolder = styled.div`
    background: #ffffff99;
    height: 60%;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PicBigText = styled.h1`
    font-size:70px;
    text-align: center;
    color: #00000095;
    @media (min-width:412px){
        font-size:85px;
    }
    @media (min-width:870px){
        font-size: 100px;
    }

`

const PicSmallText = styled.h3`
    font-size:30px;
    text-align: center;
    color: #00000075;
    @media (min-width:300px){
        font-size: 40px;
    }
    @media (min-width:500px){
        font-size: 50px;
    }
`