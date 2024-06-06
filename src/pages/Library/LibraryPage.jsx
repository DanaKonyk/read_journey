import Dashboard from 'components/Library/Dashboard/Dashboard';
import NewBookList from 'components/Library/NewBookList/NewBookList';
import styled from 'styled-components';

const LibraryPage = () => {
  return (
    <Wrap>
      <Dashboard />
      <NewBookList />
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

export default LibraryPage;
