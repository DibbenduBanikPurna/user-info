import React from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';
import {Data} from '../Data/Data'
const CommentPic = () => {
    const [image,setImage]=useState(Data)
    //console.log(image)
    return (
        <div>
            {
                image.map(image=>{
                    return <CommentDetail image={image}/>
                })
            }
        </div>
    );
};

export default CommentPic;