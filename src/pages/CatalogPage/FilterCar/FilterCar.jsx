import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCatalogCars } from "../../../redux/catalogCar/selectors";
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
} from "../CardCar.styled";

const FilterComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValuePrice, setSelectedValuePrice] = useState("");
  const [listCar, setListCar] = useState("");
  const cars = useSelector(selectCatalogCars);

  const uniqueMakes = [...new Set(cars.map((car) => car.make))];
  const uniquePrice = [...new Set(cars.map((car) => car.rentalPrice))];
  const sortedUniquePrice = uniquePrice.sort((a, b) => a - b);
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handlePriceSelectChange = (event) => {
    setSelectedValuePrice(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredCars = cars.filter((car) => {
      return (
        car.make === selectedValue && car.rentalPrice === selectedValuePrice
      );
    });
    setListCar(filteredCars);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="make">Марка:</label>
          <select
            id="make"
            value={selectedValue}
            onChange={handleSelectChange}
            onFocus={() => setSelectedValue("")}
            onBlur={() => setSelectedValue(selectedValue)}
          >
            <option value="" disabled>
              Оберіть марку
            </option>
            {uniqueMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price">Ціна $:</label>
          <select
            value={selectedValuePrice}
            onChange={handlePriceSelectChange}
            onFocus={() => setSelectedValuePrice("")}
            onBlur={() => setSelectedValuePrice(selectedValuePrice)}
          >
            <option value="" disabled>
              Оберіть ціну $
            </option>
            {sortedUniquePrice.map((rentalPrice, index) => (
              <option key={index} value={rentalPrice}>
                {rentalPrice}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {listCar.length === 0 ? (
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
                  <p>${car.rentalPrice}</p>
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
      ) : (
        <CatalogCardCar>
          {listCar.map((car) => {
            const parts = car.address.split(",");
            return (
              <CardCar key={car.id}>
                <ImgCar src={car.img} alt={car.make}></ImgCar>
                <TitleContainer>
                  <NameCar>
                    {car.make} <ModelCar>{car.model}, </ModelCar>
                    <span>{car.year}</span>
                  </NameCar>
                  <p>${car.rentalPrice}</p>
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
      )}
    </div>
  );
};

export default FilterComponent;
