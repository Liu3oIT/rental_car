import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  NavLinkButton,
  NavigationButton,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderContainer>
        <NavLinkButton to={"/"} state={{ from: location.pathname }}>
          <NavigationButton> Home Page</NavigationButton>
        </NavLinkButton>

        <NavLinkButton to={"/catalog"} state={{ from: location.pathname }}>
          <NavigationButton>Catalog</NavigationButton>
        </NavLinkButton>

        <NavLinkButton to={"/favorite"} state={{ from: location.pathname }}>
          <NavigationButton> Favorite</NavigationButton>
        </NavLinkButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
