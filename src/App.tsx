import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Course from './pages/Course'
import Trainer from './pages/Trainer'
import NotFound from './pages/NotFound'
import CourseDetails from './pages/CourseDetails'

function App() {

  return (
    <>
     <Routes>
      <Route  element={<Layout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/courses/:details" element={<CourseDetails/>}/>
        <Route path="/trainers" element={<Trainer/>}/>
        
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound />} />

     </Routes>
    </>
  )
}

export default App
