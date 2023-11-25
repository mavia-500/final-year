import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navigation'>
      <div>
      <h2 className="logo">Logo</h2>
      </div>
      <div className='nav-components'>
      <Link to='/'>Home</Link>
      <Link to='/'>About</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'><button  className="btnLogin-popup"> Login</button></Link>
     
     </div>
     
    </nav>
    
    
  )
}

export default Navbar
