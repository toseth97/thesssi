import React from 'react'


const Footer = () => {
    let myDate = new Date()
  return (
    <footer>
        <main className='footer'>
            <img src='./images/logo.png' />
            <div className='footer_features'>
                <h2>Thesssi @ MBJ Ministry</h2>
                <p>Salvation</p>
                <p>Deliverance</p>
                <p>Undiluted word of God</p>
                <p>Councel and Advice</p>
            </div>
            <div className='social'>
                <a href='' target='_blank'><i className='bx bxl-facebook-square'></i></a>
                <a href='' target='_blank'><i className='bx bxl-instagram-alt' ></i></a>
                <a href='https://wa.me/+2348085075678' target='_blank'><i className='bx bxl-whatsapp-square' ></i></a>
            </div>
        </main>
        <p>copyright &copy; {myDate.getFullYear()}, All rights reserved </p>
    </footer>
  )
}

export default Footer