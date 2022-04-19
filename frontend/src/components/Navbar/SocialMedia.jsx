import React from 'react'
import {BsLinkedin, BsInstagram} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"
import { AiFillGithub} from "react-icons/ai"

const SocialMedia = () => {
  const linkedIn = "https://www.linkedin.com/in/haris-aksalić-0b8675120/";
  const instagram = "https://www.instagram.com/gospodin_direktor_/";
  const facebook = "https://www.facebook.com/haris.aksalic";
  const gitHub = "https://github.com/Calculator-dev";
  

  return (
      <div className='app__social'>
        <a href={linkedIn} target="_blank" rel='noreferrer' >
          <div >
            <BsLinkedin />
          </div>
        </a>
        <a href={instagram} target="_blank" rel='noreferrer' >
          <div >
            <BsInstagram />
          </div>
        </a>
        <a href={facebook} target="_blank" rel='noreferrer' >
          <div >
            <FaFacebook />
          </div>
        </a>
        <a href={gitHub} target="_blank" rel='noreferrer' >
          <div>
            <AiFillGithub />
          </div>
        </a>
      </div>
  )
}

export default SocialMedia