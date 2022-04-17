import React, { useEffect, useState } from 'react'
import classes from './Nav.module.css'
import IMG1 from '../assests/Netflix_2015_logo.svg.png'
import IMG2 from '../assests/Avatar.png'

const Nav = () => {

  const [show, handleShow] = useState(false)

  useEffect(() => {

    window.addEventListener('scroll', () => {

      if(window.scrollY > 100 ){

        handleShow(true)

      }
      else handleShow(false); 

    });

    return () => {
      window.removeEventListener('scroll');
    };

  }, []);

  return (
    <div className={classes[`${show ? 'nav__black' : 'nav'}`]}>

      <img src={IMG1} alt='Netflix logo' className={classes.nav__logo} />

      <img src={IMG2} alt='smily__face' className={classes.nav__avatar} />

    </div>
  )
}

export default Nav