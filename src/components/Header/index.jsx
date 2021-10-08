import { React } from 'react';
import StyleHeader from './style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <StyleHeader>
      <ul>
        <Link to='/yourProfile'>
          <img
            src='https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Max-97-1-Sean-Wotherspoon-1.png?v=1540823108'
            alt=''
          />
        </Link>
        <Link to='/'>
          <li>
            <span class='main_cat'> Home </span>
          </li>
        </Link>
        <Link to='/my-app'>
          <li>
            <span class='main_cat'> Gallery </span>
          </li>
        </Link>
        <Link to='/stats'>
          <li>
            <span class='main_cat'> Rate </span>
          </li>
        </Link>
        <Link to='/trend'>
          <li>
            <span class='main_cat'> Contact </span>
          </li>
        </Link>
      </ul>
    </StyleHeader>
  );
}

export default Header;
