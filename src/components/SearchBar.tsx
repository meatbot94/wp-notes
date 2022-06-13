// styles
import '../styles/SearchBar.scss';

// images
import searchIcon from '../images/searchBar__icon.svg';

// interfaces
interface serchBarProps {
  mixClassName: string;
  placeholder: string;
}

const SearchBar: React.FC<serchBarProps> = ({
  mixClassName,
  placeholder,
}): JSX.Element => {
  return (
    <form className={`searchBar ${mixClassName}`}>
      <img className="searchBar__icon" src={searchIcon} alt="search icon" />
      <input
        className="searchBar__input"
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBar;
