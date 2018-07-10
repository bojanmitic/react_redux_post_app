import React from 'react';
import Button from './Button';
import moment from 'moment';
import '../Styles/button.css';
import '../Styles/postInput.css';


export class PostInput extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: props.post ? props.post.title :'',
            category: props.post ? props.post.category :'',
            post: props.post ? props.post.post :'',
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
            id: props.post ? props.post.id:'',
            error:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.title || !this.state.category || !this.state.post){
            this.setState(()=>({error:'Please add title, category and post'}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                title: this.state.title,
                category:this.state.category,
                post:this.state.post,
                id:this.state.id,
                createdAt:moment().format('MMMM Do YYYY, h:mm:ss a'),
            }) 
        }    
    }
    render(){
        const {title, category, post} = this.state;
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className='content'>
                        <div className='align'>
                            <h2 className='margin-bottom'>Title: </h2>
                            <input 
                                name='title'
                                value={title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='align'>
                            <h2 className='margin-bottom'>Category: </h2>
                            <input 
                                name='category'
                                value={category}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='content'>
                        <h2>Write New Post: </h2>
                        <textarea 
                                cols='100' rows='30'  
                                name="post"
                                value={post} 
                                onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <div className='input-btns'>
                        <button 
                                id='save-btn'
                                 type="submit" 
                                 className='btn'
                                 >
                                 Save
                        </button>
                        <Button loc='/'
                                text='Cancel'
                                type='button'
                        />
                    </div>
                </form>
            </div>
        )
    } 
}




