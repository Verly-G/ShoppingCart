import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

import './Header.css';

function Header(){
  return(
    <header className="header">
      <div className="container">
        <SearchBar/>
        <CartButton/>
        <a href="https://verly-g.online/" className="inicio">Voltar</a>
      </div>
    </header>
  );
}

export default Header;
