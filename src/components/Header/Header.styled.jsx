import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 20px 20px;
`;
export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const NavigationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: transparent;
  border-color: transparent;
  font-size: 20px;

  &:hover {
    color: #0b44cd;
    cursor: click;
  }

`;
export const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  &:focus {
    color: #0b44cd;
    cursor: click;
  }
  &.active {
    color: #0b44cd; 
    font-weight: bold;
  }
`;