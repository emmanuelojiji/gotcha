import "./Header.scss";
import heart from "../Media/heart.svg";

const Header = ({lives}) => {
  return (
    <header>
     {lives > 0 && <img src={heart} className="heart" /> }
     {lives > 1 && <img src={heart} className="heart" /> }
     {lives > 2 && <img src={heart} className="heart" /> }
    </header>
  );
};

export default Header;
