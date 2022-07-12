import React from 'react'


const DisplayImg = ({text, url,bible,refs}) => {
    //<img className='img_change' src={url} alt={url}/>
    return (
    <main className='img_carousel'>
        <h2 className='front_text'>{text}</h2>
        <p className='bible'>{bible}</p>
        <p className='bible_ref'>{refs}</p>
    </main>
  )
}

export default DisplayImg