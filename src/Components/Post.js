import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { removePost } from '../Actions/postActions';
import '../Styles/post.css';


class Post extends React.Component{
    handleRemove = ()=>{
        this.props.removePost({id:this.props.match.url.slice(2)})
        this.props.history.push('/')
    }
    render(){
        const url = this.props.match.url.slice(2);
        const post = this.props.post.find((post)=> post.id === url);
       console.log(this.props)
        return(
            <div className='main'>
                <div className='back-to-posts'>
                    <Button            
                        loc='/'
                        text='Back to Posts'
                        />
                </div>
                    <h1 id='title'>Title: {post.title}</h1>
                    <h3 id="category">Category: {post.category}</h3>
                <div className='post'>
                <p id='post-text'>{post.post}</p>
                </div>
                <div className='remove-edit-btn'>
                    <Button 
                        handleClick={this.handleRemove}
                        loc='/'
                        text='Remove Post'
                    />
                    <button   
                        className='btn edit-margin'
                        onClick = {()=>this.props.history.push(`/edit/:${post.id}`)}
                    >
                        Edit Post
                    </button>
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = (state, props)=>{
    return{
         post: state
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        removePost: (data)=>dispatch(removePost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

