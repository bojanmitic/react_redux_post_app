import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Styles/button.css';

const Button = (props)=>{
    return(
        <button     
                    className='btn'
                    type={props.type}
                    onClick={(e)=>{
                        props.handleClick && props.handleClick(e); 
                        props.history.push(`${props.loc}`)
                    }}
        >{props.text}</button>
    ) 
}

export default withRouter(Button);