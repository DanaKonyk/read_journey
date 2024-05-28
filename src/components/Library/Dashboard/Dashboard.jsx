import { Wrap } from 'components/Recommended/Dashboard/Dashboard.styled';
import AddBook from './AddBook/AddBook';
import RecommendedList from './RecommendedList/RecommendedList';

const Dashboard = () => {
  return (
    <Wrap>
      <AddBook />
      <RecommendedList />
    </Wrap>
  );
};

export default Dashboard;
