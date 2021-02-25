import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const PostDetail = () => {
    const classes = useStyles();
    
    const {Id}=useParams()
  
    const [post,setPost]=useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            setPost(data)
        })
    },[Id])
    return (
        <div>
            <Card className={classes.root} style={{backgroundColor:"pink"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {post.title}
        </Typography>
       
        {post.body}
        <Typography variant="body2" component="p">
        
        </Typography>
      </CardContent>
     
    </Card>
      <Comment/>
           
        </div>
    );
};

export default PostDetail;