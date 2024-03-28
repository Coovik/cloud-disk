import { Navbar } from "./components/navbar/Navbar"
import './App.sass'
import { Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './actions/user'

export const App = props => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(auth())
   })

   return <div className="app">
      <div className='header'>
         <Navbar />
      </div>
      <div className="content">
         <Outlet />
      </div>
      <div className="footer">owiejfoij</div>
   </div>
}