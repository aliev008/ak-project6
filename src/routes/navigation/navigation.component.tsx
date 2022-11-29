import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <div className="logo">
            <CrownLogo/>
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
