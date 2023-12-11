import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(4px);
  overflow: auto;
  overflow-y: auto;
`;
export const Modal = styled.div`
  width: 460px;
  height: 752px;
  text-align: center;
  padding: 40px 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 24px;
`;

export const ImgModal = styled.img`
  width: 460px;
  height: 314px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const NameCarModal = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const ModelCarModal = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
`;
export const InfoCarModal = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 14px;
  list-style-type: none;
  padding: 0;
`;
export const InfoModal = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 4px;
  padding-right: 6px;
  padding-left: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;
export const DescriptionModal = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  line-height: 1.42;
  text-align: start;
  margin-top: 0;
  margin-bottom: 24px;
  padding-right: 6px;
  padding-left: 6px;
`;
export const AccessoriesModal = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  line-height: 1.42;
  margin-top: 0;
  margin-bottom: 8px;
  padding-right: 6px;
  padding-left: 6px;
  text-align: start;
`;
export const RentalConditionsModal = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  line-height: 1.42;
  margin-top: 0;
  margin-bottom: 4px;
  padding-right: 6px;
  padding-left: 6px;
  text-align: start;
`;
export const RentalInfoModal = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 4px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;
export const RentalInfo = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 1.42;
  margin-top: 0;
  margin-bottom: 4px;
  padding: 7px 14px;
`;
export const RentalConteinerModal = styled.div`
  display: flex;
  gap: 8px;
`;
export const RentalButtonModal = styled.button`
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  border-color: transparent;
  &:hover {
    background: #0b44cd;
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const CloseButtonModal = styled.button`
  position: absolute;
  top: 12px;

  left: 500px;
  font-size: 14px;
  border-color: transparent;
  background: transparent;
  &:hover {
    color: #0b44cd;
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;
