import navbar_logo from '../../assets/img/navbar_logo.png'
import './Navbar.sass'
import { Link } from 'react-router-dom'

export const Navbar = props => {
   return <>
      <div className="navbar">
         <img src={navbar_logo} alt="navbar_logo" className="navbar_logo"></img>
         <div className="navbar_title"> <Link>My Cloud Disk</Link></div>
         <div className="navbar_login"><Link to={'login'}>login</Link></div>
         <div className="navbar_registration" ><Link to={'registration'}>registration</Link></div>
      </div>
   </>
}