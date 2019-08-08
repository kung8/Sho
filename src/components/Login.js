import React, { useState } from 'react'


function Login(props) {
    const [usernameLogin, setUsernameLogin] = useState('')
    const [username, setUsername] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [password, setPassword] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    const login = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    const register = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div style={{ minHeight: 'calc(100vh - 330px)', display: 'flex', flexDirection: 'column'}}>
            {/* <h1>SHO</h1> */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ height: 400, width: 350, background: '#FAF3F3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontSize: 40, fontWeight: 800, marginTop: 20 }}>Login</h2>
                    <hr style={{ width: '75%' }} />
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 'calc(100% - 100px)', width: '100%' }}>
                        <div>
                            <h3 style={{fontSize:20}}>Username</h3>
                            <input style={{ width: 250, height: 35, fontSize: 30 }} value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)} />
                        </div>
                        <div>
                            <h3 style={{fontSize:20}}>Password</h3>
                            <input style={{ width: 250, height: 35, fontSize: 30 }} type='password' value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                        </div>
                        <div>
                            <button style={{width:200,height:35,borderRadius:10,fontSize:25}} onClick={login}>Login</button>
                        </div>
                    </form>
                </div>

                <div style={{ height: 400, width: 350, background: '#FAF3F3', display: 'flex', flexDirection: 'column', alignItems: 'center',borderRadius:10 }}>
                    <h2 style={{ fontSize: 40, fontWeight: 800, marginTop: 20 }}>Register</h2>
                    <hr style={{ width: '75%' }} />
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: 'calc(100% - 100px)', width: '100%' }}>
                        <div>
                            <h3 style={{fontSize:20}}>First Name</h3>
                            <input style={{ width: 250, height: 35, fontSize: 30 }}  value={first} onChange={e => setFirst(e.target.value)} />
                        </div>
                        <div>
                            <h3 style={{fontSize:20}}>Last Name</h3>
                            <input style={{ width: 250, height: 35, fontSize: 30 }}  value={last} onChange={e => setLast(e.target.value)} />
                        </div>
                        <div>
                            <h3 style={{fontSize:20}}>Username</h3>
                            <input style={{ width: 250, height: 35, fontSize: 30 }}  value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <h3 style={{fontSize:20}}>Password</h3>
                            <input type='password' style={{ width: 250, height: 35, fontSize: 30 }}  value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div style={{marginTop:20}}>
                            <button style={{width:200,height:35,borderRadius:10,fontSize:25}} onClick={register}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login