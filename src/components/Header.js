import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import './Header.css'

const shirt = "fas fa-tshirt"
const cart = "fas fa-shopping-cart"
const insta = "fab fa-instagram"
const profile = "fas fa-user-circle"
const logout = "fas fa-sign-out-alt"
const search = "fas fa-search"
const hamburger = "fas fa-bars Hamburger"

function Header(props) {
    const { pathname } = props.location
    const [hamOpened, setHamOpened] = useState(false)

    const handleDrawerToggle = () => {
        let drawer = document.getElementById('Drawer')
        if (hamOpened) {
            if (drawer.classList) {
                drawer.classList.remove('DrawerOpen')
            }
            drawer.classList.add('DrawerClose')
            setTimeout(() => {
                setHamOpened(!hamOpened)
            }, 500)
        } else {
            if (drawer.classList) {
                drawer.classList.remove('DrawerClose')
            }
            drawer.classList.add('DrawerOpen')
            setHamOpened(!hamOpened)
        }
    }

    const viewCart = () => {
        props.history.push('/cart')
        handleDrawerToggle()
    }

    const viewProfile = () => {
        props.history.push('/profile')
        handleDrawerToggle()
    }

    const handleLogout = () => {
        props.history.push('/authentication')
        handleDrawerToggle()
    }

    const viewBlogs = () => {
        props.history.push('/blogs')
        handleDrawerToggle()

    }

    const viewSocial = () => {
        props.history.push('/social')
        handleDrawerToggle()

    }

    const viewProducts = () => {
        props.history.push('/products')
        handleDrawerToggle()

    }

    const styles = {
        fontSize: {
            fontSize: hamOpened ? 30 : 0
        },
        height: {
            height: hamOpened ? 50 : 0
        },
        cartHeight: {
            height: hamOpened ? 20 : 0
        },
        drawerContainer: {
            height: hamOpened ? 300 : 0
        }
    }

    if (pathname === '/authentication') {
        return (
            <AuthBody>
                <AuthHeader></AuthHeader>
                <AuthMain>
                    <Logo>SHO</Logo>
                </AuthMain>
            </AuthBody>
        )
    } else {
        return (
            <MainBody className='Header-Body'>
                <TopContainer>
                    <TopUsername>
                        <h1>username</h1>
                    </TopUsername>
                    <i className={hamburger} onClick={() => handleDrawerToggle()}></i>
                    <TopNavBar className='Top-Nav'>
                        <TopNavLink onClick={() => props.history.push('/cart')}>
                            <TopNavIcon style={{ color: pathname === '/cart' || pathname === '/checkout' ? 'black' : 'lightgrey' }} className={cart}></TopNavIcon>
                            <h1 style={{ color: pathname === '/cart' || pathname === '/checkout' ? 'black' : 'lightgrey' }}>cart</h1>
                            <DrawerCartNum style={{ right: -5 }}>4</DrawerCartNum>
                        </TopNavLink>
                        <TopNavLink onClick={() => props.history.push('/profile')}>
                            <TopNavIcon style={{ color: pathname === '/profile' ? 'black' : 'lightgrey' }} className={profile}></TopNavIcon>
                            <h1 style={{ color: pathname === '/profile' ? 'black' : 'lightgrey' }} >profile</h1>
                        </TopNavLink>
                        <TopNavLink onClick={() => props.history.push('/authentication')}>
                            <TopNavIcon className={logout}></TopNavIcon>
                            <h1>logout</h1>
                        </TopNavLink>
                    </TopNavBar>
                </TopContainer>

                <DrawerContainer id='Drawer' style={styles.drawerContainer}>
                    <Drawer onClick={viewCart} style={{ ...styles.height, color: pathname === '/cart' || pathname === '/checkout' ? 'black' : 'lightgrey' }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={cart}></i>
                            <DrawerLinkName style={styles.fontSize}>Cart</DrawerLinkName>
                            <DrawerCartNum style={styles.cartHeight}>{hamOpened && 4}</DrawerCartNum>
                        </DrawerLinkHolder>
                    </Drawer>
                    <Drawer onClick={viewProducts} style={{ ...styles.height, color: pathname === '/products' ? 'black' : 'lightgrey' }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={shirt}></i>
                            <DrawerLinkName style={styles.fontSize}>Products</DrawerLinkName>
                        </DrawerLinkHolder>
                    </Drawer>
                    <Drawer onClick={viewSocial} style={{ ...styles.height, color: pathname === '/social' ? 'black' : 'lightgrey' }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={insta}></i>
                            <DrawerLinkName style={styles.fontSize}>Social</DrawerLinkName>
                        </DrawerLinkHolder>
                    </Drawer>
                    <Drawer onClick={viewBlogs} style={{ ...styles.height, color: pathname === '/blogs' ? 'black' : 'lightgrey' }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={shirt}></i>
                            <DrawerLinkName style={styles.fontSize}>Blogs</DrawerLinkName>
                        </DrawerLinkHolder>
                    </Drawer>
                    <Drawer onClick={viewProfile} style={{ ...styles.height, color: pathname === '/profile' ? 'black' : 'lightgrey' }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={profile}></i>
                            <DrawerLinkName style={styles.fontSize}>Profile</DrawerLinkName>
                        </DrawerLinkHolder>
                    </Drawer>
                    <Drawer onClick={handleLogout} style={{ ...styles.height }}>
                        <DrawerLinkHolder>
                            <i style={styles.fontSize} className={logout}></i>
                            <DrawerLinkName style={styles.fontSize}>logout</DrawerLinkName>
                        </DrawerLinkHolder>
                    </Drawer>
                </DrawerContainer>

                <MiddleContainer className='Top-Nav'>
                    <Link className='Link' to='/' ><Logo>SHO</Logo></Link>
                    <SearchForm>
                        <SearchInput />
                        <SearchIcon className={search}></SearchIcon>
                    </SearchForm>
                </MiddleContainer>

                <BottomContainer className='Bottom-Nav'>
                    <Link className='Link' to='/products' style={{ color: pathname === '/products' ? 'black' : 'lightgrey' }}>
                        <h3>Products</h3>
                    </Link>
                    <Link className='Link' to='/social' style={{ color: pathname === '/social' ? 'black' : 'lightgrey' }}>
                        <h3>Social</h3>
                    </Link>
                    <Link className='Link' to='/blogs' style={{ color: pathname === '/blogs' ? 'black' : 'lightgrey' }}>
                        <h3>Blogs</h3>
                    </Link>
                </BottomContainer>
            </MainBody>
        )
    }
    // }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.auth.user
    }
}

export default withRouter(connect(mapStateToProps)(Header))


const AuthBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 190px;
    font-size: 20px;
    color: white;
    max-width: 100vw; 
`

const AuthHeader = styled.div`
    height: 75px;
    background: grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AuthMain = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    position: relative;
    color: black;
`

const Logo = styled.h1`
    font-size: 40px;
    color:black; 
`

const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    max-width: 100vw;
    width: 100vw;
    position: relative;
`

const TopContainer = styled.div`
    height: 75px;
    background: grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TopUsername = styled.div`
    margin-left:20px;
`

const TopNavBar = styled.div`
    width: 350px;
    justify-content: space-around;
    margin-right: 20px;
`

const TopNavLink = styled.div`
    text-align:center;
    position:relative;
`

const TopNavIcon = styled.i`
    font-size:30px;
`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction:column;
    height: 100px;
    align-items: center;
    justify-content: center;
    position: relative;
    color: black;
`

const SearchForm = styled.form`
    margin-top:10px;
    border-radius:16px;
    background:grey;
    width:230px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media screen and (min-width:750px){
        position: absolute;
        right: 50px 
    }
`

const SearchInput = styled.input`
    outline:none;
    border:none;
    background:grey;
    color:white;
    width:180px;
    height:35px;
    font-size:25px;
    margin-left:20px;
`

const SearchIcon = styled.i`
    margin-right:7px;
`

const DrawerContainer = styled.div`
    position: absolute;
    top: 70px;
    display: flex;
    flex-direction: column;
    right: 0px;
    width: 100vw;
    background: blue;
    margin-bottom: 70px;
    z-index: 1;
    align-items: center; 
`

const Drawer = styled.div`
    display: flex;
    text-align: center;
    position: relative;
`

const DrawerLinkHolder = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: -50px;
    top: 10px; 
`

const DrawerLinkName = styled.i`
    margin-left:15px;
`

const DrawerCartNum = styled.div`
    background: #ff0000;
    position: absolute;
    top: -8px;
    right: 60px;
    border-radius: 50%;
    width: 20px; 
`

const BottomContainer = styled.div`
    width: 100%;
    height: 50px;
`