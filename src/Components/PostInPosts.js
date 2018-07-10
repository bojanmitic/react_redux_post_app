import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/postInPosts.css';

export const PostInPosts = ({id, title, createdAt, category })=>{
    return(
        
        <div className='post-outer-div'>
            <Link to={`/:${id}`}>
        
                <div className='postInPosts' key={id}>
                    <div className='title-cat'>
                        <h2 className='post-in-posts-title'>Title: {title}</h2>
                        <h4 className='post-in-posts-category'>Category: {category}</h4>
                    </div>
                    <div className='post-in-posts-createdAt'><small>Created at: {createdAt}</small></div>
                </div>
            </Link> 
        </div>
    )
}