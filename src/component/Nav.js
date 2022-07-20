import { Firestore } from 'firebase/firestore'
import React , {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase_Config'


const Nav = ({mobile, active, setMobile, isAuth, setIsAuth}) => {
  
  const [pageoffset, setPageoffset] =useState(0)
  
  window.addEventListener("scroll", ()=>{
    setPageoffset(window.scrollY)
  })
  const navigate = useNavigate()

  const unactive = (props)=>{
    setMobile(current => current? !current: null)
  }
  
  const signUserout = () => {
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      setMobile(current => current? !current: null)
      navigate('/login')
    })
  }


  return (
    <nav className={pageoffset > 150? 'navigation_wrapper active': 'navigation_wrapper'}>
       <div className='nav'>
        <Link to = '/'>
        <img className='logo' src="./images/logo.png" alt='logo'/>
        </Link>
            <div>
                <ul className={mobile? 'nav_ul active': 'nav_ul'}>
                    <li onClick={()=>unactive('/')} className='nav_li'><Link to = '/'>Home</Link></li>
                    <li onClick={()=>unactive('about')} className='nav_li'><Link to = 'about'>About</Link></li>
                    <li onClick={()=>unactive('library')} className='nav_li'><Link to = 'library'>Library</Link></li>
                    {!isAuth ? (<li onClick={()=>unactive('login')} className='nav_li'><Link to = 'login'>Login</Link></li>) :
                      (<li onClick={signUserout} className='nav_li logout'>Logout</li>)}
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