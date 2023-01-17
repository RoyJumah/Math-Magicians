import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => (
  <header className={classes.header}>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
