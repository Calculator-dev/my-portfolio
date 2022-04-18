import React from 'react'
import {BsLinkedin, BsInstagram} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"

const SocialMedia = () => {
  return (
      <div className='app__social'>
          <div >
            <BsLinkedin />
          </div>
          <div >
            <BsInstagram />
          </div>
          <div >
            <FaFacebook />
          </div>
      </div>
  )
}

export default SocialMedia