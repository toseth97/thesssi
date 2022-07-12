import React, {useState, useEffect} from 'react'
import DisplayImg from './DisplayImg'


const FrontDisplay = ({count , setCount, prevImg, nextImg, data}) => {
    
    //<img className='img_change' src={url} alt={url}/>
    return (
        <div className='front_display'>
            <div className='shade'></div>
            <img  className='img_change' src={data[count].url} alt={data[count].url}/>
            <span className='prev arrow' onClick={prevImg}><i className='bx bx-chevrons-left'></i></span>
            <DisplayImg key={data[count].id} url={data[count].url} bible={data[count].bible} refs={data[count].ref} text={data[count].text}/>
            <span className='next arrow' onClick={nextImg}><i className='bx bx-chevrons-right'></i></span>
            
        </div>
    )
}

export default FrontDisplay