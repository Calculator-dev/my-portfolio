import React, {useState, useEffect} from 'react'
import "./About.scss"
import {motion} from "framer-motion"
import {urlFor, client} from "../../client"
import AppWrapp from '../../wrapper/AppWrapp'
import MotionWrap from '../../wrapper/MotionWrap'

const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  

  return (
    <>
      <h2 className='head-text'>I know that <span style={{color: "#1b9b85"}}>Good Apps</span><br /> mean <span style={{color: "#1b9b85"}}>Good Business</span></h2>
      <div className='app__profile-aboutme'>
            <p className='bold-text'>Hello, my name is Haris Aksalić, better know as 'Aksa'. My internet name is 'Calculator-dev' because I like to be precise, not perfect, but precise(as much as i can) in my work. I am passionate about Full MERN Stack and design. I love to work in a team and cooperate with my team members, also I am literally the funniest person you'll ever meet :D. Feel free to contact me, either for work or chat. 
      Have a nice day!</p>
      </div>
        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: "tween"}}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='bold-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))}
        </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);