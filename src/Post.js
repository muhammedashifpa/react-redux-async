import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchPosts } from './actions'

function Post() {
    const dispatch = useDispatch()
    const state = useSelector((state) =>state)
    useEffect(() => {
        dispatch(fetchPosts())
    },[])

    const renderPosts =  ()=>{
        if(state.loading) return <h1>loading...</h1>
    
    return state.items.map(item =>{
        return <h6>{item.title}</h6>
    })
}
    return (
        <div>
          {renderPosts()}
        </div>
    )
}

export default Post
