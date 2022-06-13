// styles
import '../styles/Menu.scss';

// components
import Logo from './Logo';
import SearchBar from './SearchBar';

const Menu: React.FC = (): JSX.Element => {
  return (
    <aside className="menu">
      <Logo mixClassName="menu__logo" />
      <SearchBar mixClassName="menu__searchBar" placeholder="Search" />
    </aside>
  );
};

export default Menu;
