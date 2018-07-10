import React from 'react';
import { connect } from 'react-redux';
import { PostInput } from './PostInput';
import { editPost } from '../Actions/postActions';

class  EditPost extends React.Component {
    handleSubmit = (postToEdit)=>{
       
         this.props.editPost(postToEdit.id, postToEdit);
         this.props.history.push('/');
         console.log(postToEdit);
    }
    render(){
        const url = this.props.match.url.slice(7);
        const postToEdit = this.props.posts.find((post)=> post.id === url);
        //const postId = postToEdit.id;
        console.log('postToEdit': postToEdit, this.props.posts.id) 
        
        return(
            <div>
                <PostInput 
                   post={postToEdit}
                   onSubmit = {this.handleSubmit}
                />
    
            </div>
        )
    }   
}

const mapStateToProps = (state)=>{
    return {
        posts: state
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        editPost: (postId, postToEdit)=>dispatch(editPost(postToEdit.id, postToEdit))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPost);