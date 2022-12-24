import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { CartIcon } from "../../components/cart-icon/cart-icon.components";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  Logo,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import { setCurrentUser } from "../../store/user/user.selector";

export const Navigation = () => {
  const currentUser = useSelector(setCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <Logo to="/">
          <CrownLogo />
        </Logo>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
