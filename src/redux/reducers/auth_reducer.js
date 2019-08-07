// import axios from 'axios'

const initState = {
    user:{}
}

//CHECK TO SEE IF THEY ARE CURRENT
// const GET_USER = 'GET_USER' 

// //REGISTER A USER
// const REGISTER_USER = 'REGISTER_USER'

// //LOG A USER IN
// const LOGIN_USER = 'LOGIN_USER'

// //LOGOUT A USER
// const LOGOUT_USER = 'LOGOUT_USER'

// //UPDATE A USER
// const UPDATE_USER = 'UPDATE_USER'

// export function saveUser(){
//     return{
//         type:SAVE_USER,
//         payload:axios.post()
//     }
// }

export default function (authState=initState, action){
    const {type, payload} = action
    switch(type){
        default:
            return authState
    }
}

