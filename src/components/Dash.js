import React from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

function Dash(props) {
    // if (!Object.keys(props.auth.user).length) {
    //     return <Redirect to='/authentication' />
    // } else {
        return (
            <Body>
                <div style={{background:'url(https://tbcdn.talentbrew.com/company/1678/v2_0/img/banner-disney-world.jpg) center no-repeat #cccccc',height:350, backgroundSize:'cover'}}></div>
                <ImgContainer>
                    <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c4iqXc68zQFOfBXrk0uPD_Yol5j9CTDsw3ojeyjqYzNjKbvGew'/>
                    <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSW-_HdfB5U7NQB8ThMdkik5jvQS_qCUUR78Hd1jhvZH7Wv1VU8g'/>
                    <Img src='https://www.elsetge.cat/myimg/f/4-49896_olaf-wallpaper-awesome-olaf-frozen-cute-wallpapers-frozen.jpg'/>
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
    @media screen and (min-height:1366px){
        height:calc(100vh - 329px)
    }
`

const ImgContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:1400px;
    @media screen and (min-width:760px){
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        height:600px;
    }
    @media screen and (min-height:1366px){
        height:685px;
    }
`

const Img = styled.img`
    width:97vw;
    height:450px;
    @media screen and (min-width:760px){
        width:240px;
        height:550px;
    }
    @media screen and (min-width:1000px){
        width:300px;
    }
`

