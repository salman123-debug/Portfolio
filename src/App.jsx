
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import FullScreenNav from './Components/FullScreenNav'

function App() {
 

  return (
    <>
      {/* <FullScreenNav/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
