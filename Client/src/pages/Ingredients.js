import React from 'react'
import IngredientsHeader from '../components/IngredientsComponents/IngredientsHeader/IngredientsHeader'
import IngredientsIcons from '../components/IngredientsComponents/IngredientsIcons/IngredientsIcons'
import IngredientsPicture from '../components/IngredientsComponents/IngredientsPicture/IngredientsPicture'
import IngredientsStart from '../components/IngredientsComponents/IngredientsStart/IngredientsStart'

const Ingredients = () => {
  return (
    <div>
        <IngredientsHeader/>
        <IngredientsStart/>
        <IngredientsPicture/>
        <IngredientsIcons/>
    </div>
  )
}

export default Ingredients