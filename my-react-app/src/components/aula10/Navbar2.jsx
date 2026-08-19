import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav>

      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
      > 
        Home 
      </NavLink>

      <NavLink 
        to="/about" 
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black'
        })}
      > 
        Sobre 
      </NavLink>

      <NavLink 
        to="/login" 
        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
      > 
        Login 
      </NavLink>
    </nav>
    
  );
};

export default Navbar2;
