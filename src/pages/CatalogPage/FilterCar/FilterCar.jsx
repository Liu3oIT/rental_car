import React, { useEffect, useState } from "react";
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
import {
  ButtonLoadMore,
  Form,
  LabelFilter,
  SelectContainer,
  SelectFilter,
  SubmiButtonFilter,
  SvgLike,
} from "./FilterCar.styled";
import { getCarId } from "../../../redux/catalogCar/operations";
import ModalCar from "../../ModalCar/ModalCar";

const FilterComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValuePrice, setSelectedValuePrice] = useState("");
  const [visibleItems, setVisibleItems] = useState(12);
  const [listCar, setListCar] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const cars = useSelector(selectCatalogCars);
  const [like, setLike] = useState([]);
  const dispatch = useDispatch();

  const uniqueMakes = [...new Set(cars.map((car) => car.make))];
  const uniquePrice = [...new Set(cars.map((car) => car.rentalPrice))];
  const sortedUniquePrice = uniquePrice.sort((a, b) => a - b);

  const handleSubmit = (event) => {
    event.preventDefault();

    const price = parseFloat(selectedValuePrice);

    if (selectedValue !== "" && isNaN(price)) {
      const filteredCars = cars.filter((car) => car.make === selectedValue);
      setListCar(filteredCars);

    } else if (selectedValue === "" && !isNaN(price)) {
      const filteredCars = cars.filter((car) => car.rentalPrice <= price);
      setListCar(filteredCars);

    } else {
      const filteredCars = cars.filter((car) => {
        return car.make === selectedValue && car.rentalPrice <= price;
      });
      setListCar(filteredCars);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    handleSubmit(event);
  };

  const handlePriceSelectChange = (event) => {
    setSelectedValuePrice(event.target.value);
    handleSubmit(event);
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

 const handleLike = (id) => {
   setLike((prevLikes) => {
     if (prevLikes.includes(id)) {
       const updatedLikes = prevLikes.filter((likeId) => likeId !== id);
       localStorage.setItem("likes", JSON.stringify(updatedLikes));
       return updatedLikes;
     } else {
       const updatedLikes = [...prevLikes, id];
       localStorage.setItem("likes", JSON.stringify(updatedLikes)); 
       return updatedLikes;
     }
   });
 };
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes"));
    if (savedLikes) {
      setLike(savedLikes);
    }
  }, []);
 

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <SelectContainer>
          <LabelFilter htmlFor="make">Car brand</LabelFilter>
          <SelectFilter
            id="make"
            value={selectedValue}
            onChange={handleSelectChange}
            onFocus={() => setSelectedValue("")}
            onBlur={() => setSelectedValue(selectedValue)}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {uniqueMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </SelectFilter>
        </SelectContainer>
        <SelectContainer>
          <LabelFilter htmlFor="price">Price/ 1 hour</LabelFilter>
          <SelectFilter
            value={selectedValuePrice}
            onChange={handlePriceSelectChange}
            onFocus={() => setSelectedValuePrice("")}
            onBlur={() => setSelectedValuePrice(selectedValuePrice)}
          >
            <option value="" disabled>
              To $
            </option>
            {sortedUniquePrice.map((rentalPrice, index) => (
              <option key={index} value={rentalPrice}>
                {rentalPrice}
              </option>
            ))}
          </SelectFilter>
        </SelectContainer>
        <SubmiButtonFilter type="submit">Submit</SubmiButtonFilter>
      </Form>
      {listCar.length === 0 ? (
        <CatalogCardCar>
          {limitedCars.map((car) => {
            const parts = car.address.split(",");
            return (
              <CardCar key={car.id}>
                <ImgCar src={car.img} alt={car.make}></ImgCar>

                <SvgLike
                  onClick={() => handleLike(car.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  style={{
                    fill: like.includes(car.id) ? "#0b44cd" : "none",
                    stroke: like.includes(car.id) ? "#0b44cd" : "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    cursor: "pointer",
                  }}
                >
                  <path
                    d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </SvgLike>

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
