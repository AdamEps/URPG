import React from 'react'

const StarMapScreen: React.FC = () => {
  return (
    <div className="star-map-screen">
      <h1 className="console-glow">🌌 Star Map</h1>
      
      <div className="map-container">
        <div className="constellation-view">
          <h2>Constellation: Violis</h2>
          <div className="telescope-button">
            <button className="nav-button">🔭 Zoom Out</button>
          </div>
        </div>
        
        <div className="systems-grid">
          <div className="system-card console-border console-bg">
            <h3>Taragon Gamma</h3>
            <div className="system-locations">
              <div className="location-item">🌍 TaraGam 7 (Planet)</div>
              <div className="location-item">🌙 Elcinto (Moon)</div>
              <div className="location-item">❄️ TaraGam 3 (Ice Planet)</div>
              <div className="location-item">🚀 Abandoned Star Ship</div>
              <div className="location-item">⭐ Taragon Gamma (Star)</div>
            </div>
          </div>
          
          <div className="system-card console-border console-bg">
            <h3>Taragon Beta</h3>
            <div className="system-locations">
              <div className="location-item">🌙 Ernest's Homestead (Moon)</div>
              <div className="location-item">🪐 TaraBet 10 (Brown Dwarf)</div>
              <div className="location-item">⭐ Taragon Beta (Star)</div>
            </div>
          </div>
          
          <div className="system-card console-border console-bg">
            <h3>Violis</h3>
            <div className="system-locations">
              <div className="location-item">⭐ Violis Alpha (Dwarf Star)</div>
              <div className="location-item">🪐 Rouge Planet (Ice Planet)</div>
              <div className="location-item">🌀 Quantum Anomaly (Gas Cloud)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bottom-action-slots">
        <div className="action-slot console-border">Action Slot 1</div>
        <div className="action-slot console-border">Action Slot 2</div>
        <div className="action-slot console-border">Action Slot 3</div>
        <div className="action-slot console-border">Action Slot 4</div>
      </div>
    </div>
  )
}

export default StarMapScreen
