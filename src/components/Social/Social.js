import React, { useState, useEffect } from 'react'
import Post from './Post'

function Social() {
    const [socialArr, setSocial] = useState([])
    // const [image, seeImage] = useState(false)
    // const [video, seeVideo] = useState(false)
    const [modal, seeModal] = useState(false)
    const [selectedPost, selectPost] = useState({})
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

    const handleModal = (props) => {
        console.log('hit this!')
        seeModal(!modal)
        if (props) {
            selectPost(props)
        }
    }

    const mappedSocial = socialArr.map(post => <Post post={post} handleModal={handleModal} />)

    return (
        <div style={{ minHeight: 'calc(100vh - 225px)', position: 'relative' }}>
            <div onClick={()=>handleModal()} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', opacity: modal && 0.5 }}>
                {mappedSocial}
            </div>
            {modal &&
                <div style={{ height: 500, width: 700, background: 'darkgrey', position: 'absolute', display: 'flex', left: 'calc(50vw - 350px)', top: 'calc(100vh - 650px)', justifyContent: 'space-between' }}>
                    <div style={{ padding: 10, borderRight: '1px solid black',position:'relative' }}>
                        {selectedPost.type === 'img' ? <img style={{ height: 400, width: 350 }} src={selectedPost.img} /> : <video src={selectedPost.video} />}
                        <h3 style={{padding:5,fontSize:18}}>{selectedPost.text}</h3>
                        <div onClick={()=>handleModal()} style={{position:'absolute',top:20,left:20,fontSize:30,color:'red'}}>X</div>
                    </div>
                    <div style={{width: 350, height: '100%' }}>
                        <h1 style={{ textAlign: 'center', fontSize: 30, paddingTop: 10, paddingBottom: 10, borderBottom: '1px solid black' }}>Comments</h1>
                        <div style={{height:'calc(100% - 90px)'}}></div>
                        <form style={{width:'100%',display:'flex'}}>
                            <input style={{fontSize:30,height:40,width:'90%',outline:'none'}}/>
                            <button style={{outline:'none'}}>Send</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Social

