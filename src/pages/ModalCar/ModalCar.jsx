import { useSelector } from "react-redux";
import {
  AccessoriesModal,
  Backdrop,
  DescriptionModal,
  ImgModal,
  InfoCarModal,
  InfoModal,
  Modal,
  ModelCarModal,
  NameCarModal,
  RentalButtonModal,
  RentalConditionsModal,
  RentalConteinerModal,
  RentalInfo,
  RentalInfoModal,
} from "./ModalCar.styled";
import { selectOneCar } from "../../redux/catalogCar/selectors";
import { useEffect, useState } from "react";

const ModalCar = ({ isOpenModal, onClose }) => {
  const [currentCar, setCurrentCar] = useState({});
  const oneCar = useSelector(selectOneCar);

  const parts = currentCar.address ? currentCar.address.split(",") : [];

  useEffect(() => {
    if (!isOpenModal) {
      setCurrentCar({});
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (isOpenModal && oneCar) {
      setCurrentCar(oneCar);
    }
  }, [isOpenModal, oneCar]);

  return (
    <>
      {oneCar ? (
        <Backdrop onClick={onClose} openModal={isOpenModal}>
          <Modal>
            <ImgModal src={oneCar.img} alt="" />
            <NameCarModal>
              {oneCar.make} <ModelCarModal>{oneCar.model}, </ModelCarModal>
              <span>{oneCar.year}</span>
            </NameCarModal>
            <InfoCarModal>
              <InfoModal>{parts[1]}</InfoModal>
              <InfoModal>{parts[2]}</InfoModal>
              <InfoModal>Id: {oneCar.id}</InfoModal>
              <InfoModal>Year: {oneCar.year}</InfoModal>
              <InfoModal>Type: {oneCar.type}</InfoModal>
              <InfoModal>Fuel Consumption: {oneCar.fuelConsumption}</InfoModal>
              <InfoModal>Engine Size: {oneCar.engineSize}</InfoModal>
            </InfoCarModal>
            <DescriptionModal>{oneCar.description}</DescriptionModal>
            <AccessoriesModal>Accessories and functionalities</AccessoriesModal>
            <InfoCarModal>
              {oneCar.accessories.map((element, index) => (
                <InfoModal key={index} > {element} </InfoModal>
              ))}
            </InfoCarModal>
            <RentalConditionsModal>
              Rental Conditions:
              <RentalConteinerModal>
                <RentalInfoModal>
                  Minimum age :<RentalInfo>25</RentalInfo>
                </RentalInfoModal>
                <RentalInfoModal>Valid driver’s license</RentalInfoModal>
              </RentalConteinerModal>
              <RentalConteinerModal>
                <RentalInfoModal>Security deposite required </RentalInfoModal>
                <RentalInfoModal>
                  Mileage: <RentalInfo>25</RentalInfo>
                </RentalInfoModal>
                <RentalInfoModal>
                  Price: <RentalInfo>25</RentalInfo>
                </RentalInfoModal>
              </RentalConteinerModal>
            </RentalConditionsModal>
            <RentalButtonModal type="button">Rental car</RentalButtonModal>
          </Modal>
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalCar;
