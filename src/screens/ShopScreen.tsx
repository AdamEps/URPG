import React from 'react'

const ShopScreen: React.FC = () => {
  return (
    <div className="shop-screen">
      <h1 className="console-glow">🛒 Shop</h1>
      
      <div className="shop-info">
        <p>Shop refreshes every 3 hours</p>
        <p>Next refresh: 2:15:30</p>
      </div>
      
      <div className="shop-grid">
        <div className="shop-item console-border console-bg">
          <div className="item-icon">💧</div>
          <div className="item-name">Water Tank</div>
          <div className="item-price">FREE</div>
          <div className="item-stock">Stock: 50</div>
        </div>
        
        <div className="shop-item console-border console-bg">
          <div className="item-icon">🔋</div>
          <div className="item-name">Battery Pack</div>
          <div className="item-price">₿ 100</div>
          <div className="item-stock">Stock: 25</div>
        </div>
        
        <div className="shop-item console-border console-bg">
          <div className="item-icon">🧪</div>
          <div className="item-name">Test Tube</div>
          <div className="item-price">₿ 75</div>
          <div className="item-stock">Stock: 30</div>
        </div>
        
        <div className="shop-item console-border console-bg">
          <div className="item-icon">⚡</div>
          <div className="item-name">Energy Cell</div>
          <div className="item-price">₿ 150</div>
          <div className="item-stock">Stock: 15</div>
        </div>
        
        <div className="shop-item console-border console-bg">
          <div className="item-icon">🔧</div>
          <div className="item-name">Tool Kit</div>
          <div className="item-price">₿ 200</div>
          <div className="item-stock">Stock: 10</div>
        </div>
        
        <div className="shop-item console-border console-bg">
          <div className="item-icon">💎</div>
          <div className="item-name">Diamond</div>
          <div className="item-price">₿ 500</div>
          <div className="item-stock">Stock: 5</div>
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

export default ShopScreen
