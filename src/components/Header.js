import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

function Header(props) {
    const { pathname } = props.location

    const viewCart = () => {
        props.history.push('/cart')
    }

    const viewProfile = () => {
        props.history.push('/profile')
    }

    const logout = () => {
        props.history.push('/authentication')
    }

    if (pathname === '/authentication') {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: 225, fontSize: 20, color: 'white', marginBottom: 30 , width:'100vw'}}>
                <div style={{ height: 75, background: 'grey', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                </div>
                <div style={{ display: 'flex', height: 100, alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'black' }}>
                    <h1 style={{ fontSize: 40 }}>SHO</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: 225, fontSize: 20, color: 'white', marginBottom: 30 ,maxWidth:'100vw'}}>
                <div style={{ height: 75, background: 'grey', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ marginLeft: 20 }}>
                        <h1>username</h1>
                    </div>
                    <div style={{ display: 'flex', width: 350, justifyContent: 'space-around', marginRight: 20 }}>
                        <div onClick={() => viewCart()} style={{ textAlign: 'center', position: 'relative' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-shopping-cart"></i>
                            <h1>cart</h1>
                            <div style={{ background: '#ff0000', position: 'absolute', top: -8, right: -5, borderRadius: '50%', height: 20, width: 20 }}>4</div>
                        </div>
                        <div onClick={() => viewProfile()} style={{ textAlign: 'center' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-user-circle"></i>
                            <h1>profile</h1>
                        </div>
                        <div onClick={() => logout()} style={{ textAlign: 'center' }}>
                            <i style={{ fontSize: 30 }} className="fas fa-sign-out-alt"></i>
                            <h1>logout</h1>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', height: 100, alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'black' }}>
                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}><h1 style={{ fontSize: 40 }}>SHO</h1></Link>
                    <form style={{ position: 'absolute', right: 100 }}>
                        <input />
                        <i className="fas fa-search"></i>
                    </form>
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', height: 50, alignItems: 'center' }}>
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