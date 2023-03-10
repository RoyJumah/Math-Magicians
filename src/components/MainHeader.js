import { NavLink } from 'react-router-dom';
import './css/style.css';

const MainHeader = () => (
  <div className="display__flex">
    <div className="header">
      <h1 className="page__header">Math Magicians</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default MainHeader;
