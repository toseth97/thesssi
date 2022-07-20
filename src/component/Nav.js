import React , {useState} from 'react'
import {Link} from 'react-router-dom'


const Nav = ({mobile, active, setMobile}) => {
  
  const [pageoffset, setPageoffset] =useState(0)
  
  window.addEventListener("scroll", ()=>{
    setPageoffset(window.scrollY)
  })


  const unactive = ()=>{
    setMobile(current => current? !current: null)
  }
  
  return (
    <nav className={pageoffset > 150? 'navigation_wrapper active': 'navigation_wrapper'}>
       <div className='nav'>
        <img className='logo' src="./images/logo.png" alt='logo'/>
            <div>
                <ul className={mobile? 'nav_ul active': 'nav_ul'}>
                    <li onClick={unactive} className='nav_li'><Link to = '/'>Home</Link></li>
                    <li onClick={unactive} className='nav_li'><Link to = 'about'>About</Link></li>
                    <li onClick={unactive} className='nav_li'><Link to = 'resources'>Resources</Link></li>
                </ul>
            </div>
            <div className={mobile? "hamburger active": "hamburger"} onClick={active}>
              <div className='bar'></div>
            </div>
       </div>
    </nav>
  )
}

export default Nav