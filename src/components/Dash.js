import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
function Dash(props) {
    console.log(props)
    if (!Object.keys(props.auth.user).length) {
        return <Redirect to='/authentication' />
    } else {
        return (
            <div>Dash</div>
        )
    }
}

export default connect(state => state)(Dash)