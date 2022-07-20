import React from 'react'
import { auth, provider} from '../firebase_Config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
    let navigate = useNavigate()

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/")
        })
    }
  return (
    <main className='login_page'>
        <div className='login_intro_text'>
            <h1> We're glad you came, let's get you in</h1>
        </div>
        <div className='login_wrapper'>
            <h3> Sign in with Google to continue</h3>
            <img className='logo' src="./images/logo.png" alt='logo'/>
            <div className='google_login' onClick={handleSignIn}>
                <button> Sign-in with Google</button>
                <img className='google_logo' src="./images/google.png" alt='google_logo'/>
            </div>
        </div>
    </main>
  )
}

export default Login