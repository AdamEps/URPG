import React, { useState } from 'react'
import TopBar from './components/TopBar'
import BottomNavigation from './components/BottomNavigation'
import CommsButton from './components/CommsButton'
import ShopScreen from './screens/ShopScreen'
import ConstructionScreen from './screens/ConstructionScreen'
import StarMapScreen from './screens/StarMapScreen'
import ResourcesScreen from './screens/ResourcesScreen'
import CardsScreen from './screens/CardsScreen'
import './App.css'

export type ScreenId = 'SHOP' | 'CONSTRUCTION' | 'MAP' | 'RESOURCES' | 'CARDS'

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('MAP')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'SHOP':
        return <ShopScreen />
      case 'CONSTRUCTION':
        return <ConstructionScreen />
      case 'MAP':
        return <StarMapScreen />
      case 'RESOURCES':
        return <ResourcesScreen />
      case 'CARDS':
        return <CardsScreen />
      default:
        return <StarMapScreen />
    }
  }

  return (
    <div className="app">
      <TopBar />
      <div className="main-content">
        <div className="screen-content">
          {renderScreen()}
        </div>
      </div>
      <BottomNavigation 
        currentScreen={currentScreen} 
        onScreenChange={setCurrentScreen} 
      />
      <CommsButton />
    </div>
  )
}

export default App
