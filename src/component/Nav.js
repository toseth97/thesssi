import React , {useState} from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  const[mobile, setMobile] = useState(false)
  const [pageoffset, setPageoffset] =useState(0)
  
  window.addEventListener("scroll", ()=>{
    setPageoffset(window.scrollY)
  })

  const active = ()=>{
    setMobile(mobile => !mobile)
  }
  return (
    <nav className={pageoffset > 150? 'navigation_wrapper active': 'navigation_wrapper'}>
       <div className='nav'>
        <img className='logo' src="./images/logo.png" alt='logo'/>
            <div>
                <ul className='nav_ul'>
                    <li className='nav_li'><Link to = '/'>Home</Link></li>
                    <li className='nav_li'><Link to = 'about'>About</Link></li>
                    <li className='nav_li'><Link to = 'resources'>Resources</Link></li>
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