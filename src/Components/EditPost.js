import React from 'react';
import { connect } from 'react-redux';
import { PostInput } from './PostInput';
import { editPost } from '../Actions/postActions';

class  EditPost extends React.Component {
    handleSubmit = (post)=>{
       
         this.props.editPost(this.props.post.id, post);
         this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <PostInput 
                   post={this.props.post}
                   onSubmit = {this.handleSubmit}
                />
            </div>
        )
    }   
}

const mapStateToProps = (state, props)=>{
    return {
        post: state.find((post)=>post.id === props.match.params.id)
    }
}
const mapDispatchToProps= (dispatch,props)=>{
    return {
        editPost: (id, post)=>dispatch(editPost(id, post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);