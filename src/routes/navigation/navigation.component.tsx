import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

<<<<<<< Updated upstream
import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
=======
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  Logo,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
>>>>>>> Stashed changes

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <div className="logo">
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};