import React from 'react'
import "./Header.scss"
import {motion} from "framer-motion"  
import profile4 from "../../assets/profile4.png"
import circle from "../../assets/circle.svg"
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import sass from "../../assets/sass.png"
import AppWrapp from '../../wrapper/AppWrapp'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
       whileInView={{x: [-100, 0], opacity: [0 ,1]}}
       transition={{duration: 0.5}}
       className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Haris</h1>
            </div>
          </div>
 
          <div className='tag-cmp app__flex'>
          <h4 className='bold-text'>Full Stack Developer</h4>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={profile4} alt="profile_bg" />
        <motion.img
        whileInView={{scale: [0,1]}}
        transition={{duration: 1, ease: "easeInOut"}}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
        />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[react, redux, sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}> 
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapp(Header, "home")