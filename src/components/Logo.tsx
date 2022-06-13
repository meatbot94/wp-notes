// styles
import '../styles/Logo.scss';

// images
import logoRound from '../images/menu__logo_round.svg';
import logoText from '../images/menu__logo_text.svg';

// interfaces
interface logoProps {
  mixClassName: string;
}

const Logo: React.FC<logoProps> = ({ mixClassName }): JSX.Element => {
  return (
    <div className={`logo ${mixClassName}`}>
      <img className="logo__round" src={logoRound} alt="logo icon" />
      <img className="logo__text" src={logoText} alt="logo text" />
    </div>
  );
};

export default Logo;
