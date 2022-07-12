import React, {useState} from 'react'
import FrontDisplay from './FrontDisplay'
import Contact from './Contact'


export const Home = ({count , setCount, prevImg, nextImg, data}) => {
   const [form, setForm] = useState({
    name:'',
    email: '',
    text: '',

   })
  return (
    <div className='home'>
      <FrontDisplay count = {count} setCount = {setCount} nextImg = {nextImg} prevImg = {prevImg} data = {data}/>
      <h2 className='motto'>Raising an Ardent and Addicted worshippers of <span className="word">Christ</span></h2>
      <div className='join_us'>Feel free to join us</div>
      <main className='program_main'>
        <section className='program_section'>
          <div className='service'>
            <img src='./images/image4.jpg' alt='prog' />
            <div className='program'>
              <h3>Sunday Worship Service</h3>
              <p>Holds by 9am on every first Sunday of the the month and 12pm every other Sundays.</p>
            </div>
          </div>
          <div className='service'>
            <img src='./images/image3.jpg' alt='prog' />
            <div className='program'>
              <h3>Spirit Diet</h3>
              <p>Holds every wednesday by 4pm.</p>
            </div>
          </div>
        </section>
      </main>
      <main className='youtube'>
      <div className='youtube_video'>
        <h2>Fear not, because God said that your future shall be okay.</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7lNPJJpxkg4?start=15" title="YouTube video player" frameBorder="2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
        </div>
      </main>
      <Contact form = {form} setForm = {setForm}/>
    </div>
  )
}
