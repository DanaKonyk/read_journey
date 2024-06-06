import Dashoboard from 'components/Reading/Dashboard/Dashoboard';
import MyReading from 'components/Reading/MyReading/MyReading';
import styled from 'styled-components';

const ReadingPage = () => {
  return (
    <Wrap>
      <Dashoboard />
      <MyReading />
    </Wrap>
  );
};

const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export default ReadingPage;
