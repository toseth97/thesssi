import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import Feed from './Feed'

const Library = ({dietPost , isAuth}) => {

  

  return (
    <main className='library_section'>
        <div className='library_intro_1'>
            <h1>Sermon Library</h1>
        </div>
        <div className='search'>
            <p>We invite you to explore our entire collection of weekend service teachings.  Here you will be able to access all of our past sermon series videos, guest speaker videos, and current series videos. </p>
            <div className='search_input'>
                <input  type='text'/>
                <i className='bx bx-search search_icon'></i>
            </div>
            {isAuth && <>
            <Link to = '/newPost'>
              <button className='create_diet'>
                Create Diet
              </button>
            </Link>
            </>}

        </div>
        {dietPost ? <div className='feeds'>
            {dietPost.map(diet => (
              <Feed key={diet.id} diet = {diet}/>
            ))}
        </div>: <p> Loading . . .</p>}
    </main>
  )
}

export default Library