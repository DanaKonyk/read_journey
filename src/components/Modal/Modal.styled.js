import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const ModalWrap = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  padding: 0;
  border: none;
  background: transparent;

  & svg {
    stroke: ${color.white};
    transition: border 350ms linear;

    &:is(:hover, :focus) {
      border: 1.5px solid ${color.white};
      border-radius: 50%;
    }
  }
`;
