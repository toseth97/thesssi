import React from 'react'


const NewPost = ({newpost, setNewPost, createPost}) => {
 
  
  return (
    <main className='newPost_main'>
      <div>
        <h1>New Diet</h1>
      </div>
      <form className='newPost_form' onSubmit={createPost}>
        <label htmlFor='title'>Title</label>
        <input
        id = 'title'
        placeholder='Sermon Title'
        required
        value={newpost.title}
        onChange = {(e)=>setNewPost(newpost => ({...newpost, title: e.target.value}))}
        />
        <label htmlFor='text'>Text</label>
        <input
        id = 'text'
        placeholder='Bible Text'
        required
        value={newpost.text}
        onChange = {(e)=>setNewPost(newpost => ({...newpost, text: e.target.value}))}
        />
        <label htmlFor='newPost_introduction'>Introduction</label>
        <textarea id='newPost_introduction'
          placeholder='Sermon Introduction'
          required
          value={newpost.introduction}
          onChange = {(e)=>setNewPost(newpost => ({...newpost, introduction: e.target.value}))}
        />
        <label htmlFor='newPost_points'>Points</label>
        <textarea id='newPost_points'
          placeholder='Sermon Points'
          required
          value={newpost.points}
          onChange = {(e)=>setNewPost(newpost => ({...newpost, points: e.target.value}))}
        />
        <label htmlFor='conclusion'>Conclusion</label>
        <input id='conclution'
          placeholder='Conclusion'
          required
          value={newpost.conclusion}
          onChange = {(e)=> setNewPost(newpost => ({...newpost, conclusion: e.target.value}))}
          />
        <button className='create_diet_btn'>Create</button>
        
      </form>
    </main>
  )
}

export default NewPost