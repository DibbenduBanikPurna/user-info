import React, { useEffect, useState } from 'react';
import AllPost from '../AllPost/AllPost';

const Main = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setPost(data)
        })
    },[])
    return (
        <div>   
            <h5>Post:{post.length}</h5> 
            {
                post.map(post=>{
                    return <AllPost key={post.id} post={post}/>
                })
            }
        </div>
    );
};

export default Main;