import React from 'react'
import { Link } from 'react-router-dom'
import PostDiet from './PostDiet'

const Feed = ({diet}) => {
    
    const id = diet.id
  return (
    <>
        <div data-aos = "fade-in" className='feed_article'>
                <Link to = {`/library/${id}`}>
                    <h2>Topic: {diet.title} </h2>
                    <h4>Text: {diet.text}</h4>
                    <h3>Introduction:</h3>
                    <p>{`${(diet.introduction).slice(0,50)}...`}</p>
                </Link>
                    <h3>Point to Note:</h3>
                    <p>{`${(diet.points).slice(0,50)}...`}</p>
                    <h3>Conclusion : </h3>
                    <p>{diet.conclusion}</p>
                
            </div>
    </>
  )
}

export default Feed