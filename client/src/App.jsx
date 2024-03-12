import { Navbar } from "./components/navbar/Navbar"
import './App.sass'
import { Outlet } from "react-router-dom"

export const App = props => {
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