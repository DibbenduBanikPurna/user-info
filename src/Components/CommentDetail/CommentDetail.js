import React from 'react';

const CommentDetail = (props) => {
    const {email,body}=props.comment
    //console.log(props)
    
    


   
    return (
        <div style={{border:'2px solid gray'}}>
            <h5>Comment By: {email}</h5>
            <p>{body}</p>
         
           

           
           
        </div>
    );
};

export default CommentDetail;