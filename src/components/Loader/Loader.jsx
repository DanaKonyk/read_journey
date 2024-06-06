import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderWrap>
      <CircleLoader
        size={100}
        color="#F9F9F9"
        aria-label="circle-loading"
        radius="1"
      />
    </LoaderWrap>
  );
};

const LoaderWrap = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loader;
