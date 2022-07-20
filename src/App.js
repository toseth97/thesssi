
import Nav from './component/Nav';
import  {Home} from './component/Home';
import { ImgData } from './imgdata'
import {useEffect, useState} from 'react'
import Login from './component/Login'
import About from './component/About';
import Footer from './component/Footer';
import Library from './component/Library';
import { spiritDiet } from './spiritDiet';
import {Routes, Route, useNavigate} from 'react-router-dom'
import PostDiet from './component/PostDiet';
import NewPost from './component/NewPost';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { auth, database } from './firebase_Config'
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  

  let navigate = useNavigate()

  const[mobile, setMobile] = useState(false)
  const [diet, setDiet] = useState(spiritDiet)
  const [newpost, setNewPost] = useState({
    title: '',
    text: '',
    introduction: '',
    points: '',
    conclusion: ''
  })

  const [isAuth, setIsAuth] = useState(false)
  const [count, setCount] = useState(0)
    
    //Goto next slide
    const nextImg = ()=>{
        setCount(count => count !== 2? count + 1: 0)
    }
    //Goto previous slide
    const prevImg = () =>{
        setCount(count => count !== 0? count -1 : 2 )
    }

    const active = ()=>{
      setMobile(mobile => !mobile)
    }
    
    // saving data to firebase/firestore
    const postRef = collection(database, 'diet')
    const createPost = async (e) =>{
      e.preventDefault()
      await addDoc(postRef, 
        {title: newpost.title, text:newpost.text,introduction:newpost.introduction,points:newpost.points,conclusion:newpost.conclusion, 
          author : {name: auth.currentUser.displayName, id:auth.currentUser.uid}
        })
        setNewPost({
          title: '',
          text: '',
          introduction: '',
          points: '',
          conclusion: ''
        })
        navigate('/library')
        alert('Diet created successfully')
    }
    const [dietPost, setDietPost] = useState([])
    const getRef = collection(database, 'diet')
    useEffect(() => {
      const getPost = async () =>{
        const data = await getDocs(getRef)
        setDietPost(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      } 

      getPost()
    }, [])


    /**
    const handleDietSubmit = (e) => {
      e.preventDefault()
      const id = diet.length ? diet[diet.length -1].id + 1 : 1
      const allPost = [...diet, {id: id, ...newpost}]
      setDiet(allPost)
      setNewPost({
        title: '',
        text: '',
        introduction: '',
        points: '',
        conclusion: ''
      })
      navigate('/library')
      alert("Diet created successfully")

    }
    */

    // Make slide change at interval (Carousel)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count => count<2? count + 1: 0)
        }, 10000)
        return () => clearInterval(interval)
    },[])

      
    const data=ImgData
  return (
    <div className= {mobile ? "App active": "App"}>  
    <Nav mobile = {mobile} setMobile ={setMobile} active = {active} isAuth = {isAuth} setIsAuth = {setIsAuth}/>
    
    <Routes>
      <Route path='/' element = {<Home count = {count} setCount = {setCount} nextImg = {nextImg} prevImg = {prevImg} data = {data}/>} />
      <Route path='/about' element = {<About />} />
      <Route exact path='/library' element = {<Library dietPost = {dietPost} isAuth = {isAuth} />} />
      <Route path = '/library/:id' element = {<PostDiet dietPost = {dietPost}  />}/>
      <Route path = '/newPost' element = {<NewPost createPost = {createPost} newpost = {newpost} setNewPost = {setNewPost} />} />
      <Route path = '/login' element = {<Login setIsAuth = {setIsAuth}/>}/>
    </Routes>
    
    <Footer />
    </div>
  );
}

export default App;
