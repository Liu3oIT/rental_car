import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatalogCars } from "../../redux/catalogCar/operations";
import { selectCatalogCars } from "../../redux/catalogCar/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCatalogCars);
  console.log(cars[3]);
  useEffect(() => {
    dispatch(getCatalogCars());
  }, [dispatch]);

  return (
    <>
      <div>Catalog Car</div>
      <ul>
        {cars.map((car) => {
          const parts = car.address.split(",");
          return (
            <li key={car.id}>
              <img src={car.img} alt={car.make}></img>
              <p>
                {car.make} <span>{car.model}</span> <span>{car.year}</span>
              </p>
              <p>{car.rentalPrice}</p>
              <p>{parts[1]}</p>
              <p>{parts[2]}</p>
              <p>{car.rentalCompany}</p>
              <p>{car.type}</p>
              <p>{car.model}</p>
              <p>{car.accessories[0]}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CatalogPage;
