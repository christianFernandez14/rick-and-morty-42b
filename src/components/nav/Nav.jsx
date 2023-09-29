import styleCards from './Nav.module.css';
import SearchBar from '../searchBar/SearchBar'
import Button from '../button/Button';

const Nav = ({ onSearch, setAccess }) => {

  const handleLogOut = () => {
    setAccess(false)
  }

  return (
    <nav className={styleCards.layout__nav}>

      <div className={styleCards.nav__buttons}>
        <button onClick={handleLogOut}>Logout</button>
        <Button link='/home' text='Home' />
        <Button link='/about' text='About' />
        <Button link='/favorites' text='Favorites' />

        {/* 

          <Link to='/home'><button>Home</button></Link>

          <Link to='/about'><button>About</button></Link>

          <Link to='/favorites'><button>favorites</button></Link> */}

      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  )
}

export default Nav;