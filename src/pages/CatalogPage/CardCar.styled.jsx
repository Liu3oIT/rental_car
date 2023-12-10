import styled from "@emotion/styled";

export const CatalogCardCar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 29px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const CardCar = styled.li`
  width: 274px;
  height: 426px;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
 
`;
export const ImgCar = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const NameCar = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const ModelCar = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoCar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;
export const Info = styled.p`
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
export const ButtonLearnMore = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  background-color: #3470ff;
  border-radius: 12px;
  color: #fff;
  border-color: transparent;
  &:hover {
    background: #0b44cd;
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;
