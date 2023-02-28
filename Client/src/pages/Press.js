import React from 'react'
import PressBanner from '../components/PressComponent/PressBanner/PressBanner'
import PressContactUs from '../components/PressComponent/PressContactUs/PressContactUs'
import PressFeature from '../components/PressComponent/PressFeature/PressFeature'
import PressHighlights from '../components/PressComponent/PressHighlights/PressHighlights'
import PressIquire from '../components/PressComponent/PressIquire/PressIquire'

const Press = () => {
  return (
    <div>
        <PressBanner/>
        <PressIquire/>
        <PressFeature/>
        <PressHighlights/>
        <PressContactUs/>
    </div>
  )
}

export default Press