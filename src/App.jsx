import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import MainPage from './pages/MainPage/MainPage'
import ModeratorPage from './pages/ModeratorPage/ModeratorPage'
import UserPage from './pages/UserPage/UserPage'

import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/moder" element={<ModeratorPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
