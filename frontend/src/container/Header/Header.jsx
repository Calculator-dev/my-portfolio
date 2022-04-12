import React from 'react'
import "./Header.scss"
import {motion} from "framer-motion"
import profile from "../../assets/profile.png"
import circle from "../../assets/circle.svg"
import flutter from "../../assets/flutter.png"
import redux from "../../assets/redux.png"
import sass from "../../assets/sass.png"

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
       transiotion={{duration: 0.5}}
       className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Haris</h1>
            </div>
          </div>
        </div>
 
        <div className='tag-cmp app__flex'>
        <p className='p-text'>Full Stack Developer</p>
        <p className='p-text'>Freelancer</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img style={{width: "120px", height: "120px"}} src={profile} alt="profile_bg" />
        <motion.img
        whileInView={{scale: [0,1]}}
        transition={{duration: 1, ease: "easeInOut"}}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[flutter, redux, sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}> 
            <img src={circle} clt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header