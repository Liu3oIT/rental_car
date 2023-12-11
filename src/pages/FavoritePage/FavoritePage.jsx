import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalogCars } from "../../redux/catalogCar/selectors";
import { ButtonLearnMore, CardCar, CatalogCardCar, ImgCar, Info, InfoCar, ModelCar, NameCar, TitleContainer } from "../CatalogPage/CardCar.styled";
import { SvgLike } from "../CatalogPage/FilterCar/FilterCar.styled";
import { TiteleFavorite } from "./FavoritePage.styled";
import { getCarId } from "../../redux/catalogCar/operations";
import ModalCar from "../ModalCar/ModalCar";

const FavoritePage = () => {
  const [likeCars, setLikeCars] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const catalogCar = useSelector(selectCatalogCars);
    const dispatch = useDispatch();
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes"));
    if (savedLikes) {
      setLikeCars(savedLikes);
    }
  }, []);
const likedCarsData = catalogCar.filter((car) => likeCars.includes(car.id));

  console.log(likedCarsData);
const handleLike = (id) => {
  setLikeCars((prevLikes) => {
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
const handleOpenModalCar = (id) => {
  dispatch(getCarId(id));
  setOpenModal(true);
};

 const handleCloseModal = () => {
   setOpenModal(false);
 };
  return (
    <>
      {likedCarsData.length === 0 ? (
        <TiteleFavorite>You don't have favorite cars</TiteleFavorite>
      ) : (
        <CatalogCardCar>
          {likedCarsData.map((car) => {
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
                    fill: likeCars.includes(car.id) ? "#0b44cd" : "none",
                    stroke: likeCars.includes(car.id) ? "#0b44cd" : "white",
                    strokeWidth: "1.5",
                    // strokeLinecap: "round",
                    // strokeLinejoin: "round",
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
      )}
      {openModal && (
        <ModalCar onClose={handleCloseModal} isOpenModal={openModal} />
      )}
    </>
  );
};

export default FavoritePage;
