import { useState } from 'react';
import s from './Hamburger.module.css';

interface HamburgerProps {
  onHamburgerClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onHamburgerClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onHamburgerClick(); // Call the callback function when the hamburger is clicked
  };

  return (
    <div className={s.hamburger} onClick={handleClick}>
      <span className={`${s.line} ${isOpen ? s.open : ''}`}></span>
      <span className={`${s.line} ${isOpen ? s.open : ''}`}></span>
      <span className={`${s.line} ${isOpen ? s.open : ''}`}></span>
    </div>
  );
};

export default Hamburger;
