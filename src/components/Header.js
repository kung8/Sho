import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import './Header.css'

function Header(props) {
    const { pathname } = props.location
    const [hamOpened, setHamOpened] = useState(false)

    const handleDrawerToggle = () => {
        if (hamOpened) {
            let drawer = document.getElementById('Drawer')
            if (drawer.classList) {
                drawer.classList.remove('DrawerOpen')
            }
            drawer.classList.add('DrawerClose')
            setTimeout(() => {
                setHamOpened(!hamOpened)
            }, 500)
        } else {
            let drawer = document.getElementById('Drawer')
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

    const logout = () => {
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



    if (pathname === '/authentication') {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: 190, fontSize: 20, color: 'white', maxWidth: '100vw' }}>
                <div style={{ height: 75, background: 'grey', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                </div>
                <div style={{ display: 'flex', height: 100, alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'black' }}>
                    <h1 style={{ fontSize: 40 }}>SHO</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className='Header-Body' style={{ display: 'flex', flexDirection: 'column', fontSize: 20, color: 'white', marginBottom: 30, maxWidth: '100vw', width: '100vw', position: 'relative' }}>
                <div style={{ height: 75, background: 'grey', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ marginLeft: 20 }}>
                        <h1>username</h1>
                    </div>
                    <i className="fas fa-bars Hamburger" onClick={() => handleDrawerToggle()}></i>
                    <TopNavBar className='Top-Nav'>
                        <div onClick={() => props.history.push('/cart')} style={{ textAlign: 'center', position: 'relative' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-shopping-cart"></i>
                            <h1>cart</h1>
                            <div style={{ background: '#ff0000', position: 'absolute', top: -8, right: -5, borderRadius: '50%', height: 20, width: 20 }}>4</div>
                        </div>
                        <div onClick={() => props.history.push('/profile')} style={{ textAlign: 'center' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-user-circle"></i>
                            <h1>profile</h1>
                        </div>
                        <div onClick={() => props.history.push('/authentication')} style={{ textAlign: 'center' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-sign-out-alt"></i>
                            <h1>logout</h1>
                        </div>
                    </TopNavBar>
                </div>

                <div id='Drawer' style={{ height: hamOpened ? 300 : 0, position: 'absolute', top: 70, display: 'flex', flexDirection: 'column', right: 0, width: '100vw', background: 'blue', marginBottom: 70, zIndex: 1, alignItems: 'center' }}>
                    <div onClick={viewCart} style={{ height: hamOpened ? 50 : 0, display: 'flex', textAlign: 'center', position: 'relative', color: pathname === '/cart' || pathname === '/checkout' ? 'black' : 'lightgrey' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fas fa-shopping-cart"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>Cart</h1>
                            <div style={{ background: '#ff0000', position: 'absolute', top: -8, right: 60, borderRadius: '50%', height: hamOpened ? 20 : 0, width: 20 }}>{hamOpened && 4}</div>
                        </div>

                    </div>
                    <div onClick={viewProducts} style={{ height: hamOpened ? 50 : 0, color: pathname === '/products' ? 'black' : 'lightgrey', display: 'flex', position: 'relative', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fas fa-tshirt"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>Products</h1>
                        </div>
                    </div>
                    <div onClick={viewSocial} style={{ height: hamOpened ? 50 : 0, color: pathname === '/social' ? 'black' : 'lightgrey', display: 'flex', position: 'relative', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fab fa-instagram"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>Social</h1>
                        </div>
                    </div>
                    <div onClick={viewBlogs} style={{ height: hamOpened ? 50 : 0, color: pathname === '/blogs' ? 'black' : 'lightgrey', display: 'flex', position: 'relative', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fas fa-tshirt"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>Blogs</h1>
                        </div>
                    </div>
                    <div onClick={viewProfile} style={{ height: hamOpened ? 50 : 0, display: 'flex', position: 'relative', textAlign: 'center', color: pathname === '/profile' ? 'black' : 'lightgrey' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fas fa-user-circle"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>Profile</h1>
                        </div>
                    </div>
                    <div onClick={logout} style={{ height: hamOpened ? 50 : 0, display: 'flex', position: 'relative', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: -50, top: 10 }}>
                            <i style={{ fontSize: hamOpened ? 30 : 0 }} className="fas fa-sign-out-alt"></i>
                            <h1 style={{ fontSize: hamOpened ? 30 : 0, marginLeft: 15 }}>logout</h1>
                        </div>
                    </div>
                </div>

                <MiddleContainer className='Top-Nav'>
                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}><h1 style={{ fontSize: 40 }}>SHO</h1></Link>
                    <SearchForm>
                        <SearchInput />
                        <SearchIcon className="fas fa-search"></SearchIcon>
                    </SearchForm>
                </MiddleContainer>

                <div className='Bottom-Nav' style={{ width: '100%', height: 50 }}>
                    <Link to='/products' style={{ color: pathname === '/products' ? 'black' : 'lightgrey', textDecoration: 'none' }}><h3>Products</h3></Link>
                    <Link to='/social' style={{ color: pathname === '/social' ? 'black' : 'lightgrey', textDecoration: 'none' }}><h3>Social</h3></Link>
                    <Link to='/blogs' style={{ color: pathname === '/blogs' ? 'black' : 'lightgrey', textDecoration: 'none' }}><h3>Blogs</h3></Link>
                </div>
            </div>
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

const TopNavBar = styled.div`
    width: 350px;
    justify-content: space-around;
    margin-right: 20px
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
    @media screen and (min-width:415px){
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



