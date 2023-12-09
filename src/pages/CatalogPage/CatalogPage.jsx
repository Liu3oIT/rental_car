import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatalogCars } from "../../redux/catalogCar/operations";
import { selectCatalogCars } from "../../redux/catalogCar/selectors";
import {
  ButtonLearnMore,
  CardCar,
  CatalogCardCar,
  ImgCar,
  Info,
  InfoCar,
  ModelCar,
  NameCar,
  TitleContainer,
} from "./CardCar.styled";
import FilterCar from "./FilterCar/FilterCar";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCatalogCars);
  console.log(cars);
  useEffect(() => {
    dispatch(getCatalogCars());
  }, [dispatch]);

  return (
    <>
      <div>Catalog Car</div>
      <FilterCar />
      <CatalogCardCar>
        {cars.map((car) => {
          const parts = car.address.split(",");
          return (
            <CardCar key={car.id}>
              <ImgCar src={car.img} alt={car.make}></ImgCar>
              <TitleContainer>
                <NameCar>
                  {car.make} <ModelCar>{car.model}, </ModelCar>
                  <span>{car.year}</span>
                </NameCar>
                <p>{car.rentalPrice}</p>
              </TitleContainer>
              <InfoCar>
                <Info>{parts[1]}</Info>
                <Info>{parts[2]}</Info>
                <Info>{car.rentalCompany}</Info>
                <Info>{car.type}</Info>
                <Info>{car.model}</Info>
                {/* <Info>{car.accessories[1]}</Info> */}
              </InfoCar>
              <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
            </CardCar>
          );
        })}
      </CatalogCardCar>
    </>
  );
};

export default CatalogPage;
