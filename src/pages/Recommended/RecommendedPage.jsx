import BookList from 'components/Recommended/BookList/BookList';
import Dashboard from 'components/Recommended/Dashboard/Dashboard';
import styled from 'styled-components';

const RecommendedPage = () => {
  return (
    <Wrap>
      <Dashboard />
      <BookList />
    </Wrap>
  );
};

const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export default RecommendedPage;
