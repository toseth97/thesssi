import React from 'react'

const Contact = ({form, setForm}) => {
  return (
    <main className='contact_section'>
      <div className='curve'></div>
      <section className='main_contact_block'>
        <div data-aos = "flip-left" className='address_location'>
          <div className='address'>
            <h3>Address:</h3>
            <p>Oke Odan, Ayegun Area, Apete, Ibadan</p>
          </div>
          <div className='address'>
            <h3>Phone:</h3>
            <p>+234 808 507 5678</p>
          </div>
          <div className='address'>
            <h3>Email:</h3>
            <p>thesssimbjoshuaministries@gmail.com</p>
          </div>
        </div>
        <form data-aos = "flip-right" className='contact_form'>
          <h2>Send Us a Message!</h2>
          <input type= 'text'
                className='form_input'
                placeholder='Name....'
                required
                value={form.name}
                onChange = {(e)=> setForm({...form, name: e.target.value})}
          />
          <input type= 'email'
                required
                className='form_input'
                placeholder='email....'
                value={form.email}
                onChange = {(e)=> setForm({...form, email: e.target.value})}
          />
          <textarea type= 'text'
                
                className='form_input text_area'
                placeholder='Type messages here....'
                value={form.text}
                onChange = {(e)=> setForm({...form, text: e.target.value})}
          />
          <button type='submit' className='form_submit'></button>
        </form>
    
      </section>    
    </main>
  )
}

export default Contact