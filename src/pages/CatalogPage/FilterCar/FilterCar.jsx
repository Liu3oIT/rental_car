import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { ButtonLoadMore } from "./FilterCar.styled";
import { getCarId } from "../../../redux/catalogCar/operations";
import ModalCar from "../../ModalCar/ModalCar";

const FilterComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValuePrice, setSelectedValuePrice] = useState("");
  const [visibleItems, setVisibleItems] = useState(12);
  const [listCar, setListCar] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const cars = useSelector(selectCatalogCars);

  const dispatch = useDispatch();



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

  const limitedCars = cars.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  const handleOpenModalCar = (id) => {
    dispatch(getCarId(id));
     setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
          {limitedCars.map((car) => {
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
                <ButtonLearnMore
                  type="button"
                  onClick={() => {
                    handleOpenModalCar(car.id);
                    setOpenModal(true);
                  }}
                >
                  Learn more
                </ButtonLearnMore>
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
                    {car.year}
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
                <ButtonLearnMore
                  type="button"
                  onClick={() => {
                    handleOpenModalCar(car.id);
                    setOpenModal(true);
                  }}
                >
                  Learn more
                </ButtonLearnMore>
              </CardCar>
            );
          })}
        </CatalogCardCar>
      )}
      {visibleItems < cars.length && (
        <ButtonLoadMore onClick={handleLoadMore}>Load More</ButtonLoadMore>
      )}
      {openModal && (
        <ModalCar onClose={handleCloseModal} isOpenModal={openModal} />
      )}
    </div>
  );
};

export default FilterComponent;
