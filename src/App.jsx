import { Route, Routes } from 'react-router-dom'
import Home from './pages/Homes/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Detail from './pages/Detail/Detail'
import Bookmark from './pages/Bookmark/Bookmark'
import Add from './pages/Add/Add'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/bookmark' element={<Bookmark />}/>
        <Route path='/add' element={<Add />}/>
      </Routes>
    </>
  )
}

export default App
