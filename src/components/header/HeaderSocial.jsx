import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
    <a href='https://www.linkedin.com/in/zahid-hussain-850a80175' target="__blank"><BsLinkedin /></a>
    <a href='https://github.com/zahidhussain123' target="__blank"><AiFillGithub /></a>
    <a href='https://www.instagram.com/zahidhussain1948' target="__blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial