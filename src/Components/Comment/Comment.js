import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = () => {
   
    const [comment,setComment]=useState([])
   
    
    const {Id}=useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${Id}`)
        .then(res=>res.json())
        .then(data=>{
           
           
           
           setComment(data)
         
           
           
        }
            )
    },[Id])
    
   
    return (
        <div>
           
            {
            comment.map(comment=>{
                return <CommentDetail   key={comment.id} comment={comment} />
            })
            }
           




           
           
        </div>
    );
};

export default Comment;