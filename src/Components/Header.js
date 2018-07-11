import  React from 'react';
import blogpost from '../Assets/blogpost.jpg'
import '../Styles/header.css';
import { Link } from 'react-router-dom';

export const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-div'>
                <Link to='/'>
                    <img id='logo-img' src={blogpost} alt='logo'/>
               </Link>
            </div>
        </div>
    )
}
