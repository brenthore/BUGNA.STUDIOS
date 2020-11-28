import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'

import {ReactComponent as Logo } from '../../assets/logo1.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to ="/">
        <Logo className='logo'/>
        </Link>
        <div className='name'> BUGNA.STUDIOS </div>
        <div className='options'> 
          <Link className='option' to='/shop' >
             SHOP
          </Link>
          <Link className='option' to='/shop'>
              CONTACT
          </Link>
          <Link className='option' to='/signin'>
              ABOUT US
          </Link>
          {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
              :
              <Link className='option' to='/signin'>
                  SIGN IN
              </Link>
          }
        </div>
      

    </div>
)

export default Header;