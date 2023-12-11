import styled from "@emotion/styled";

export const ButtonLoadMore = styled.button`
  padding: 12px 99px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 12px;
  color: #3470ff;
  display: flex;
  margin: 0 auto;
  border-color: transparent;
  &:hover {
    color: #0b44cd;
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;
export const SelectFilter = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #f7f7fb;
  border-color: transparent;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;
`;
export const SubmiButtonFilter = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;
  color: #fff;
`;
export const LabelFilter = styled.label`
  margin-bottom: 8px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;
export const SvgLike = styled.svg`
    stroke: white;
    position: absolute;
    left: 240px;
    top: 15px;fill: none;
     &:hover {
    fill: #0b44cd;
    stroke: #0b44cd;
    cursor: click;
    
  }
}
`;
