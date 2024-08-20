import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import SignIn from '../pages/SignIn/index.jsx'
import Characters from '../pages/Characters/index.jsx'
import Error from '../pages/Error/index.jsx'

function Router() {
  return (
    <Routes>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/" element={<Characters />}/>
        <Route path="/error" element={<Error />}/>
        <Route path="*" element={<Navigate to="/error"/>}/>
    </Routes>
  )
}

export default Router