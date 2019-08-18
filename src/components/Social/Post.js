import React, { useState, useEffect } from 'react'

function Post(props) {
    const [image, seeImage] = useState(false)
    const [video, seeVideo] = useState(false)
    
    const { post ,handleModal} = props

    function viewPic () {
        console.log('I hit img')
        handleModal(post)
        // seeImage(!image)
    }

    function viewVid () {
        console.log('I hit vid')
        handleModal(post)
        // seeVideo(!video)
    }

    if (post.type === 'img') return <img onClick={() => viewPic()} style={{ marginTop: 10, marginBottom: 10, height: 350, width: 350 }} src={post.img} alt="" />
    else if (post.type === 'video') return <iframe onClick={() => viewVid()} style={{ marginTop: 10, marginBottom: 10, width: 350, height: 350 }} src={post.video}></iframe>
}

export default Post