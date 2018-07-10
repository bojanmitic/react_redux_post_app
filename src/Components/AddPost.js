import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Actions/postActions';
import { PostInput } from './PostInput';

class AddPost extends React.Component{
    handleSubmit = (post)=>{
        this.props.addPost(post);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <PostInput 
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }  
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addPost: (post)=>dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(AddPost)