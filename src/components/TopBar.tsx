import React from 'react'

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      {/* Left - Settings */}
      <div className="top-left">
        <button className="nav-button">⚙️</button>
      </div>
      
      {/* Center - Player Info */}
      <div className="top-center">
        <div className="player-name console-glow">Commander Aepst</div>
        <div className="level-bar">
          <div className="level-text">Level 1</div>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: '45%' }}></div>
          </div>
          <div className="xp-text">450 / 1000 XP</div>
        </div>
        <button className="objectives-button">🎯</button>
      </div>
      
      {/* Right - Currency */}
      <div className="top-right">
        <div className="currency console-glow">₿ 1,250</div>
      </div>
    </div>
  )
}

export default TopBar
