import React from 'react'

const About = () => {
  return (
    <main className='about_main'>
        <div className='about_intro_1'>
            <h1>Who We Are</h1>
        </div>
        <div className='about_intro_2'>
            <h2>We lead people to become an ardent and addicted worshippers of Christ </h2>
            
            <img src = './images/image6.jpg' />
        </div>
        <div className='intro2_bible_ref'> 
            <p>“You are the light of the world. A city set on a hill cannot be hidden.” <span className='scripture_reference'>— MATTHEW 5:14</span></p>
            <p>“Arise, shine, for your light has come, and the glory of the Lord has risen upon you” <span className='scripture_reference'>— ISAIAH 60:1</span>
            </p>
        </div>
        <main className='value'>
            <div className='value_intro'>
                <h1> Our Values</h1>
                <em>we emphatically place value on God's simple instructions through His word(Proverbs 4:13), we seek to hear God concerning every matter whether spiritual or physical, that has been the singular reason for our success so far( John 6:63).
                </em>
            </div>
            <div className='core_value'>
                <div>
                    <h2>
                        Scripture Based
                    </h2>
                    <p>
                        We value the Word of God as the steadfast source of truth that sustains us, and as a powerful catalyst for personal and cultural transformation.
                    </p>
                    <em>
                        Matthew 4:4, 2 Timothy 3:16, Psalm 119:89
                    </em>
                </div>

                <div>
                    <h2>
                        Kingdom Focused
                    </h2>
                    <p>
                        We value loyalty and commitment to the Kingdom of God and to Jesus our King, above all other allegiances.
                    </p>
                    <em>
                        Matthew 6:33, Acts 17:7, 1 Timothy 1:17
                    </em>
                </div>
                
                <div>
                    <h2>
                        Spirit Empowered
                    </h2>
                    <p>
                        We value the empowering presence of the Holy Spirit in our midst, marking us as God’s people and manifesting Himself miraculously. 
                    </p>
                    <em>
                        Exodus 33:16, Acts 1:8, John 16:13, 1 Corinthians 12:1-12
                    </em>
                </div>
            </div>
        </main>
        
    </main>
  )
}

export default About