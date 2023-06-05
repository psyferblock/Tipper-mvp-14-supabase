import React from 'react'
import EntityCard from '../entityCards-Components/EntityCard'
import EntityCardsInGridDirection from '../entityCards-Components/EntitiesCardsInGridDirection'
import EntityCardsInScrollRowDirection from '../entityCards-Components/EntitiesCardsInScrollRowDirection'
import HomePageListingOfEntitiesCards from '../entityCards-Components/HomePageListingOfEntitiesCards'

function MainPageComponent() {
  return (
    <div>
        {/* <EntityCard/> */}
        <EntityCardsInGridDirection/>
        <EntityCardsInScrollRowDirection/>
        {/* <HomePageListingOfEntitiesCards/> */}
    </div>
  )
}

export default MainPageComponent