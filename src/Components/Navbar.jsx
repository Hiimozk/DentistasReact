import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { GlobalContext } from "./utils/global.context.jsx";



const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  // tema oscuro y claro
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
    
    document.body.className = state.theme === 'light' ? 'dark-theme' : 'light-theme';
  };

  return (
    <nav
      style={{
        backgroundColor: state.theme === 'light' ? '#f8f9fa' : '#343a40',
        color: state.theme === 'light' ? '#000' : '#fff',
        padding: '10px',
      }}
    >
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/home" style={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contacto" style={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/favs" style={{ color: state.theme === 'light' ? '#000' : '#fff' }}>
            Favoritos
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        style={{
          padding: '5px 10px',
          backgroundColor: state.theme === 'light' ? '#000' : '#fff',
          color: state.theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Cambiar a tema {state.theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </nav>
  );
};

export default Navbar;