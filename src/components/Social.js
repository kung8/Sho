import React, { useState, useEffect } from 'react'

function Social() {
    const [socialArr, setSocial] = useState([])
    const [image, seeImage] = useState(false)
    const [video, seeVideo] = useState(false)

    useEffect(() => {
        setSocial([
            {
                id: 1,
                text: 'Hello, I am the first blog.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
            {
                id: 2,
                text: 'This is the second blog.',
                type: 'video',
                video: 'https://www.youtube.com/embed/or_k6ASfcuE'
            },
            {
                id: 3,
                text: 'Finally, the third post is available.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
            {
                id: 4,
                text: 'Wish this makes sense.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1495610379499-a1f03b4732a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

            },
            {
                id: 5,
                text: 'Hello, I am the first blog.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1549104263-73ba9d0b4445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
            {
                id: 6,
                text: 'This is the second blog.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1515396886123-75d7b90b3b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
            {
                id: 7,
                text: 'Finally, the third post is available.',
                type: 'video',
                video: 'https://www.youtube.com/embed/ZVlWMQRTT_A',
            },
            {
                id: 8,
                text: 'Wish this makes sense.',
                type: 'img',
                img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
        ])
    }, [])

    const viewPic = () => {
        // console.log('I hit img')
        seeImage(!image)
    }

    const viewVid = () => {
        // console.log('I hit vid')
        seeVideo(!video)
    }

    const mappedSocial = socialArr.map(post => {
        if (post.type === 'img') return <img onClick={() => viewPic()} style={{ marginTop:10,marginBottom:10,height: 350, width: 350 }} src={post.img} alt="" />
        else if (post.type === 'video') return <iframe onClick={() => viewVid()} style={{ marginTop:10,marginBottom:10,width: 350, height: 350 }} src={post.video}></iframe>
    })
    return (
        <div style={{ minHeight: 'calc(100vh - 225px)', background: 'red' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {mappedSocial}
            </div>
        </div>
    )
}

export default Social