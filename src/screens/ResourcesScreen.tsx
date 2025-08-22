import React from 'react'

const ResourcesScreen: React.FC = () => {
  return (
    <div className="resources-screen">
      <h1 className="console-glow">📦 Resources</h1>
      
      <div className="resources-grid">
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">💧</div>
          <div className="resource-name">Water</div>
          <div className="resource-count">250</div>
          <div className="resource-unit">km³</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">🔋</div>
          <div className="resource-name">Battery</div>
          <div className="resource-count">45</div>
          <div className="resource-unit">units</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">🧪</div>
          <div className="resource-name">Test Tube</div>
          <div className="resource-count">12</div>
          <div className="resource-unit">units</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">⚡</div>
          <div className="resource-name">Energy</div>
          <div className="resource-count">89</div>
          <div className="resource-unit">units</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">🔧</div>
          <div className="resource-name">Tool Kit</div>
          <div className="resource-count">3</div>
          <div className="resource-unit">units</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">💎</div>
          <div className="resource-name">Diamond</div>
          <div className="resource-count">1</div>
          <div className="resource-unit">units</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">🌱</div>
          <div className="resource-name">Seeds</div>
          <div className="resource-count">67</div>
          <div className="resource-unit">tons</div>
        </div>
        
        <div className="resource-item console-border console-bg">
          <div className="resource-icon">🪨</div>
          <div className="resource-name">Iron</div>
          <div className="resource-count">234</div>
          <div className="resource-unit">m³</div>
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

export default ResourcesScreen
