import React, {useState} from 'react'
import "./Work.scss"
import {AiFillEye, AiFillGithub} from "react-icons/ai"
import {motion} from "framer-motion"
import AppWrapp from "../../wrapper/AppWrapp"
import MotionWrap from '../../wrapper/MotionWrap'
import { worksData } from './WorkData'
import Button from '@mui/material/Button';

const Work = () => {
  
  const gitHub = "https://github.com/Calculator-dev";
  const [numberOfElements, setNumberOfElements] = useState(4)
  const [filterWork, setFilterWork] = useState(worksData)
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}])

      if(item === "All"){
        setFilterWork(worksData)
      } else {
        setFilterWork(worksData.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  const sliceNumberOfState = filterWork.slice(0, numberOfElements)
  
  const loadMore = () => {
    setNumberOfElements(numberOfElements + numberOfElements)
  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span></h2>
      <div className='app__work-filter'>
        {["UI/UX", "Web App", "Mobile App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}      
        </div>    
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5}}
          className="app__work-portfolio"
        >
          {sliceNumberOfState.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app_flex'>
                <img src={work.imgUrl} alt={work.name} />
                
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{marginTop: 10}}>{work.desc}</p>
                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags}</p>
                </div>
              </div>
              <motion.div
                  transition={{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                  style={{display: "flex"}}
                >
                  <a href={work.projectLink} target="_blank" rel='noreferrer' >
                    <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.75, ease: "easeInOut", staggerChildren: 0.75}}
                    className="app__flex"
                    >
                      <AiFillEye style={{width: "40px", height: "40px", cursor: "pointer", marginRight: "20px", color: "black"}} />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel='noreferrer' >
                    <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.75, ease: "easeInOut", staggerChildren: 0.75}}
                    className="app__flex"
                    >
                      <AiFillGithub style={{width: "40px", height: "40px", color: "black"}} />
                    </motion.div>
                  </a>
                </motion.div>
            </div>
          ))}
          <div className="app__work-item app_flex">
          <div className='app__work-content app__flex'>
                <p className='p-text' style={{marginTop: 10}}>Projects are in maitenance mode, for more projects visit GitHub</p>
                <div className='app__work-tag app__flex'>
                  <p className='bold-text'>GitHub</p>
                </div>
              </div>
          <a href={gitHub}  target="_blank" rel='noreferrer' >
                    <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.75, ease: "easeInOut", staggerChildren: 0.75}}
                    className="app__flex"
                    >
                      <AiFillGithub style={{width: "40px", height: "40px", color: "black"}} />
                    </motion.div>
                  </a>
          </div>
        </motion.div>
        <Button onClick={loadMore} variant="outlined">Load More</Button>
    </>
  )
}

export default AppWrapp(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);