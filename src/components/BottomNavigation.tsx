import React from 'react'
import { ScreenId } from '../App'

interface BottomNavigationProps {
  currentScreen: ScreenId
  onScreenChange: (screen: ScreenId) => void
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  currentScreen, 
  onScreenChange 
}) => {
  const navItems = [
    { id: 'SHOP' as ScreenId, label: 'Shop', icon: '🛒' },
    { id: 'CONSTRUCTION' as ScreenId, label: 'Construction', icon: '🔨' },
    { id: 'MAP' as ScreenId, label: 'Star Map', icon: '🌌' },
    { id: 'RESOURCES' as ScreenId, label: 'Resources', icon: '📦' },
    { id: 'CARDS' as ScreenId, label: 'Cards', icon: '🃏' }
  ]

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-button ${currentScreen === item.id ? 'active' : ''}`}
          onClick={() => onScreenChange(item.id)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-label">{item.label}</div>
        </button>
      ))}
    </div>
  )
}

export default BottomNavigation
