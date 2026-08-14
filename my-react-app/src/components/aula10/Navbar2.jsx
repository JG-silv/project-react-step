import { NavLink } from 'react-router-dom';

function Navbar2 () {
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
        to="/contact" 
        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
      > 
        Contato 
      </NavLink>
    </nav>
    
  );
};

export default Navbar2;
