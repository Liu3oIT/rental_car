import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <NavLink to={"/"} state={{ from: location.pathname }}>
        <button>Home Page</button>
      </NavLink>
      <NavLink to={"/catalog"} state={{ from: location.pathname }}>
        <button>Catalog</button>
      </NavLink>
      <NavLink to={"/favorite"} state={{ from: location.pathname }}>
        <button>Favorite</button>
      </NavLink>
    </>
  );
};

export default Header;
