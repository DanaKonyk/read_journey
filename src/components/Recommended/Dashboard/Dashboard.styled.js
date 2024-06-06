import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const Wrap = styled.div`
  margin: 10px 20px;
  background-color: ${color.lightBlack};
  border-radius: 30px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    margin: 16px 32px;
    display: flex;
    gap: 52px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;
