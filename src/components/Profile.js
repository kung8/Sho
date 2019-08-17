import React from 'react'
import styled from 'styled-components'

function Profile() {
    return (
        <Body>
            <ProfileContainer>
                <ProfileInfoContainer>
                    <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfXLX3oyvh9zd2l-BqveE0tJkNymZhlp2DoP6cX-QGEphgK3Ryw' alt='profile pic'/>
                    <ProfileInfo>
                        <InfoHolder>
                            <span>First Name</span>
                            <InfoInput />
                        </InfoHolder>
                        <InfoHolder>
                            <span>Last Name</span>
                            <InfoInput />
                        </InfoHolder>
                        <InfoHolder>
                            <span>Username</span>
                            <InfoInput />
                        </InfoHolder>
                        <InfoHolder>
                            <span>Password</span>
                            <InfoInput type='password'/>
                        </InfoHolder>
                        <InfoHolder>
                            <span>New Password</span>
                            <InfoInput type='password'/>
                        </InfoHolder>
                        <InfoHolder>
                            <span>Confirm Password</span>
                            <InfoInput type='password'/>
                        </InfoHolder>
                    </ProfileInfo>
                </ProfileInfoContainer>
                <EditButton>EDIT</EditButton>
            </ProfileContainer>
        </Body>
    )
}

export default Profile

const Body = styled.div`
    min-height:calc(100vh - 225px);
`

const ProfileContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:550px;
    width:300px;
    align-items:center;
    @media screen and (min-width:500px){
        justify-content:space-evenly;
        flex-direction:row;
        width:470px;
    }
`

const Img = styled.img`
    height: 120px;
    width: 100px;
    border-radius: 50%;

`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    width:80%;
    margin-top:10px;
`

const InfoHolder = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:10px;
`

const InfoInput = styled.input`
    height:35px;
    font-size:25px;
    border:solid 1px black;
    width:250px;
    @media screen and (min-width:500px){
        width:400px;
    }
`

const EditButton = styled.button`
    margin-top: 20px; 
    margin-bottom: 20px; 
    outline:none;
    border:solid 1px black;
    border-radius:16px;
    width:120px;
    height:35px;
    font-size:30px;
`