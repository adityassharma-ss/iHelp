
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Communities from './pages/Communities'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/profilepages/Profile'
import Routeguard from './middleware/Routeguard'
import Editprofile from './pages/profilepages/Editprofile'
import State from './context/State'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Event from './pages/Events.jsx'
import Mentorships from './pages/Mentorships.jsx'
import Sponsors from './pages/Sponsors'
import CarreerChoice from './pages/CareerChoice'

function App() {


  return (
    <>

      <State>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/communities" element={<Communities />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/events" element={<Event />} />
            <Route exact path="/mentorships" element={<Mentorships />} />
            <Route exact path="/careerchoice" element={<CarreerChoice />} />
            <Route exact path="/sponsors" element={<Sponsors />} />


            <Route element={<Routeguard />}>
              <Route exact path="/:username" element={<Profile />} />
              <Route exact path="/editprofile" element={<Editprofile />} />

            </Route>
          </Routes>
        </Router>
      </State>


    </>
  )
}

export default App
