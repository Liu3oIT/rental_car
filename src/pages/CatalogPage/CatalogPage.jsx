import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCatalogCars } from "../../redux/catalogCar/operations";
import FilterCar from "./FilterCar/FilterCar";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogCars());
  }, [dispatch]);

  return (
    <>
      <FilterCar />
    </>
  );
};

export default CatalogPage;
