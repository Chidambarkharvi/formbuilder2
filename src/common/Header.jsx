import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
       <div className='logo__parent'>
           <span className='h3'>
           React
          </span>
       </div>
       <div className='navigation__parent'>
           <ul>
             <li>
               <Link to="/home">
                 <i className='fa fa-home nav-icon'/>
                 Home
                </Link>
             </li>
             <li>
                 <Link to="/form">Form Builder</Link> 
              </li>
           </ul>
       </div>
    </header>
  )
}

export default Header;