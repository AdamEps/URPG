# URPG - Ultimate RPG

A space exploration idle RPG game built with React + TypeScript + Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (LTS version)
- WSL (Windows Subsystem for Linux)

### Installation
1. Navigate to the project directory in WSL:
   ```bash
   cd /mnt/c/Users/aepst/urpg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 🎮 Game Features

### Core Layout (Implemented)
- ✅ Top Bar with player info, level, XP, and currency
- ✅ Bottom Navigation with 5 main screens
- ✅ Comms button (bottom left)
- ✅ Responsive design for mobile and desktop

### Screens (Implemented)
- 🌌 **Star Map** - Constellation view with systems and locations
- 🛒 **Shop** - 2x3 grid with rotating items every 3 hours
- 🔨 **Construction** - Construction bays (Small/Medium/Large)
- 📦 **Resources** - 5-across grid of collected resources
- 🃏 **Cards** - Card collection with 4 classes (Explorer, Constructor, Collector, Progression)

### Action Slots
- Each screen has 4 unique action slots at the bottom
- Ready for future card/item slotting functionality

## 🛠️ Development

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with spaceship console theme
- **State Management**: Ready for Redux Toolkit (configured)

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── TopBar.tsx     # Top navigation bar
│   ├── BottomNavigation.tsx  # Bottom screen navigation
│   └── CommsButton.tsx      # Communications button
├── screens/            # Main game screens
│   ├── StarMapScreen.tsx    # Star map view
│   ├── ShopScreen.tsx       # Shop interface
│   ├── ConstructionScreen.tsx # Construction bays
│   ├── ResourcesScreen.tsx   # Resource inventory
│   └── CardsScreen.tsx      # Card collection
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

### Next Steps (Development Plan)
1. **M0**: ✅ Basic layout and navigation
2. **M1**: Resources system + idle accrual + star map functionality
3. **M2**: Construction system + recipes + timers
4. **M3**: Card system + fusion + effects
5. **M4**: Objectives + mastery system
6. **M5**: Shop system + economy + dev tools

## 🎨 Design Theme

- **Visual Style**: Spaceship bridge console
- **Color Scheme**: Black backgrounds with green (#0f0) accents
- **Typography**: Monospace font (Courier New)
- **Effects**: Subtle glows, no fades, minimal animations

## 📱 Responsive Design

- Desktop-first design
- Mobile web friendly
- Responsive grids and layouts
- Touch-friendly navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Coming Soon

- Firebase integration for backend
- User authentication and saves
- Real-time game mechanics
- Card effects and bonuses
- Construction recipes and timers
- Resource collection and management
- Objectives and mastery system
- Shop rotation and economy
