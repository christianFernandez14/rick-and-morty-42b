import styleCards from './Nav.module.css';
import SearchBar from '../searchBar/SearchBar'
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styleCards.layout__nav}>
   
        <Link to='/home'><button>Home</button></Link>

        <Link to='/about'><button>About</button></Link>

      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  )
}

export default Nav;