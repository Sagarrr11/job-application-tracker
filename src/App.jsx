import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Application from './components/Application'

const App = () => {
  const [applications, setApplications] = useState(()=>{
    const savedApplications = localStorage.getItem("applicationsData")
    return savedApplications? JSON.parse(savedApplications) : [] })
  useEffect(()=>{
    localStorage.setItem('applicationsData',JSON.stringify(applications))
  },[applications])
  return (
    <main className='main'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Dashboard applications={applications}/>}/>
        <Route path='/applications' element={<Application applications={applications} setApplications={setApplications} />} />
      </Routes>
    </main>
  )
}

export default App
