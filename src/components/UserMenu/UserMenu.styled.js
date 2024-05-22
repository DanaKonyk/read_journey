import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const UserWrap = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const NameWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${color.darkGray};
  border: 1px solid;
  border-color: ${color.liteWhite};
  margin-right: 8px;
`;
