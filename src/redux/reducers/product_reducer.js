// import axios from 'axios'

const initState = {
    product:{}
}

export default function (prodState=initState, action){
    const {type, payload} = action
    switch(type){
        default:
            return prodState
    }
}
