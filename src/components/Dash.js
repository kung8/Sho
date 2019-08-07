import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
function Dash(props) {
    console.log(props)
    // if (!Object.keys(props.auth.user).length) {
    //     return <Redirect to='/authentication' />
    // } else {
        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{background:'url(https://tbcdn.talentbrew.com/company/1678/v2_0/img/banner-disney-world.jpg) center no-repeat #cccccc',height:350, backgroundSize:'cover'}}></div>
                <div style={{height:500,display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <img width={300} height={450} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c4iqXc68zQFOfBXrk0uPD_Yol5j9CTDsw3ojeyjqYzNjKbvGew'/>
                    
                    <img width={300} height={450} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSW-_HdfB5U7NQB8ThMdkik5jvQS_qCUUR78Hd1jhvZH7Wv1VU8g'/>
                    
                    <img width={300} height={450} src='https://www.elsetge.cat/myimg/f/4-49896_olaf-wallpaper-awesome-olaf-frozen-cute-wallpapers-frozen.jpg'/>
                </div>
            </div>
        )
    // }
}

export default connect(state => state)(Dash)