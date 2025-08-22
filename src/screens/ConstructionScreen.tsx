import React from 'react'

const ConstructionScreen: React.FC = () => {
  return (
    <div className="construction-screen">
      <h1 className="console-glow">🔨 Construction</h1>
      
      <div className="construction-bays">
        <div className="bay console-border console-bg">
          <div className="bay-header">
            <div className="bay-icon">🔨</div>
            <div className="bay-size">Small Bay</div>
            <div className="bay-status">Status: Idle</div>
          </div>
          <div className="bay-content">
            <p>No active construction</p>
            <button className="nav-button">Start Build</button>
          </div>
        </div>
        
        <div className="bay console-border console-bg">
          <div className="bay-header">
            <div className="bay-icon">🔨</div>
            <div className="bay-size">Medium Bay</div>
            <div className="bay-status">Status: Locked</div>
          </div>
          <div className="bay-content">
            <p>Unlock at Level 5</p>
          </div>
        </div>
        
        <div className="bay console-border console-bg">
          <div className="bay-header">
            <div className="bay-icon">🔨</div>
            <div className="bay-size">Large Bay</div>
            <div className="bay-status">Status: Locked</div>
          </div>
          <div className="bay-content">
            <p>Unlock at Level 10</p>
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

export default ConstructionScreen
