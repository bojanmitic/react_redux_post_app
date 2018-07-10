import React from 'react';
import  Button  from './Button';
import  { PostInPosts }  from './PostInPosts';
import { connect } from 'react-redux';
import '../Styles/posts.css';
 
export const Posts = (props)=>{
    return(
        <div className='content'>
            <div className='add-post-btn'>
                <Button loc ='/create'
                        text='Add Post' 
                        type='button'
                />
            </div>
            <div className='posts'>
                {
                    props.posts.map((post)=>(
                        <PostInPosts key={post.id} {...post}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(Posts);

