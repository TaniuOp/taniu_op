import wipIcon from '../assets/wip_icon.png';
import './Landing.css';

const Footer = () => {
  return (
    <footer>
      <p className='footer-text'>Work in progress</p>
      <img src={wipIcon} alt='wip' className='wip-icon' />
    </footer>
  );
};

export default Footer;
