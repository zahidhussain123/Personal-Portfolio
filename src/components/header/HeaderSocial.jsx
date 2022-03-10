import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
    <a href='https://linkedin.com' target="__blank"><BsLinkedin /></a>
    <a href='https://github.com' target="__blank"><AiFillGithub /></a>
    <a href='https://instagram.com' target="__blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial