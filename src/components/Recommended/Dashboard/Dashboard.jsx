import React from 'react';
import Filter from './Filter/Filter';
import Workout from './Workout/Workout';
import { Wrap } from './Dashboard.styled';

const Dashboard = () => {
  return (
    <Wrap>
      <Filter />
      <Workout />
    </Wrap>
  );
};

export default Dashboard;
