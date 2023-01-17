import { NavLink } from 'react-router-dom';
import './css/style.css';

const MainHeader = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
