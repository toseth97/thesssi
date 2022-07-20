
import Nav from './component/Nav';
import  {Home} from './component/Home';
import { ImgData } from './imgdata'
import {useEffect, useState} from 'react'
import About from './component/About';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom'



function App() {
  const[mobile, setMobile] = useState(false)

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
    <Nav mobile = {mobile} setMobile ={setMobile} active = {active} />
    <Routes>
      <Route path='/' element = {<Home count = {count} setCount = {setCount} nextImg = {nextImg} prevImg = {prevImg} data = {data}/>} />
      <Route path='about' element = {<About />} />
    </Routes>
    
    <Footer />
    </div>
  );
}

export default App;
