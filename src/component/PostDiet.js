import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostDiet = ({dietPost}) => {
    const { id } = useParams()
    const currentDiet = dietPost.find(currentDiet => (currentDiet.id).toString()=== id)
  return (
    <>
        {currentDiet
            ? <article className='post_feed'> 
                <div className='feed_container'>
                    <Link to = '/library'>
                        <button className='feed_back'>Go back</button>
                    </Link>
                    <h2>Topic: {currentDiet.topic}</h2>
                    <h4>Text: {currentDiet.text}</h4>
                    <h3>Introduction:</h3>
                    <p className='feed_introduction'>{currentDiet.introduction}</p>
                    <h3>Point to Note:</h3>
                    <p className='feed_point'>{currentDiet.points}</p>
                    <h3>Conclusion : </h3>
                    <p>{currentDiet.conclusion}</p>
                    <Link to = '/library'>
                        <button className='feed_back'>Go back</button>
                    </Link>
                </div>
            </article>
            : <p> Post not found </p>
        }
    </>
  )
}

export default PostDiet