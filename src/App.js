import React from "react"
import { Routes, Route} from "react-router-dom"
import Resume from "./screens/Resume"
import MainPage from '/Users/famillebouassami/myresume/src/screens/MainPage'
import Work from '/Users/famillebouassami/myresume/src/screens/Work/index.js'
import Aljadeff from "./screens/Aljadeff";
import Projects from "./screens/Projects"
import Contact from "./screens/Contact"



function App() {
  return (
    <div className="App">
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Work" element={<Work />}></Route>
          <Route path="/Aljadeff" element={<Aljadeff />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

          <Route path="*" element={<NotFound />}></Route>



        </Routes>
      </div>
    </div>
  )
}

export const Home = () => {
  return <div>You are in Home page</div>
}

export const NotFound = () => {
  return <div>damn</div>
}

export default App
