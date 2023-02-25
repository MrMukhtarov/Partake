import React from 'react'
import './AboutIcons.css'
import { SiGoland } from "react-icons/si";
import { GiHeartDrop } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { TbLetterU } from "react-icons/tb";
import { BsFlower1 } from "react-icons/bs";
import { SiGogdotcom } from "react-icons/si";


const AboutIcons = () => {
  return (
    <div className='aboutIcons'>
        <div className="all">
            <SiGoland/>
            <GiHeartDrop/>
            <TiTick/>
            <TbLetterU/>
            <BsFlower1/>
            <SiGogdotcom/>
        </div>
    </div>
  )
}

export default AboutIcons