import React from 'react'
import AboutHeader from '../components/AboutComponents/AboutHeader/AboutHeader'
import AboutIcons from '../components/AboutComponents/AboutIcons/AboutIcons'
import AboutLink from '../components/AboutComponents/AboutLinks/AboutLink'
import AboutSafe from '../components/AboutComponents/AboutSafe/AboutSafe'
import AboutStory from '../components/AboutComponents/AboutStory/AboutStory'

const About = () => {
    
  return (
    <div>
      <AboutHeader/>
      <AboutSafe/>
      <AboutStory/>
      <AboutIcons/>
      <AboutLink/>
    </div>
  )
}

export default About