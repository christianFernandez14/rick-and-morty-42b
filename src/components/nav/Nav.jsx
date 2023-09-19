import styleCards from './Nav.module.css';
import SearchBar from '../searchBar/SearchBar'

const Nav = ({ onSearch }) => {
  return (
    <nav className={styleCards.layout__nav}>
        <SearchBar
          onSearch={onSearch}
        />    
    </nav>
  )
}

export default Nav;