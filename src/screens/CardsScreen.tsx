import React from 'react'

const CardsScreen: React.FC = () => {
  return (
    <div className="cards-screen">
      <h1 className="console-glow">🃏 Cards</h1>
      
      <div className="card-classes">
        <div className="card-class">
          <h2>Explorer Cards</h2>
          <div className="cards-grid">
            <div className="card console-border console-bg">
              <div className="card-icon">🔍</div>
              <div className="card-name">Astro Prospector</div>
              <div className="card-tier">Tier 1</div>
              <div className="card-copies">2/2</div>
            </div>
            <div className="card console-border console-bg">
              <div className="card-icon">📡</div>
              <div className="card-name">Deep Scan</div>
              <div className="card-tier">Tier 1</div>
              <div className="card-copies">1/2</div>
            </div>
          </div>
        </div>
        
        <div className="card-class">
          <h2>Constructor Cards</h2>
          <div className="cards-grid">
            <div className="card console-border console-bg">
              <div className="card-icon">⚙️</div>
              <div className="card-name">Bay Optimizer</div>
              <div className="card-tier">Tier 1</div>
              <div className="card-copies">0/2</div>
            </div>
          </div>
        </div>
        
        <div className="card-class">
          <h2>Collector Cards</h2>
          <div className="cards-grid">
            <div className="card console-border console-bg">
              <div className="card-icon">📦</div>
              <div className="card-name">Bulk Storage</div>
              <div className="card-tier">Tier 1</div>
              <div className="card-copies">0/2</div>
            </div>
          </div>
        </div>
        
        <div className="card-class">
          <h2>Progression Cards</h2>
          <div className="cards-grid">
            <div className="card console-border console-bg">
              <div className="card-icon">🎓</div>
              <div className="card-name">Learned Hands</div>
              <div className="card-tier">Tier 1</div>
              <div className="card-copies">0/2</div>
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

export default CardsScreen
