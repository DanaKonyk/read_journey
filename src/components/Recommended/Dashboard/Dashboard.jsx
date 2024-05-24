import React from 'react';
import Filter from './Filter/Filter';
import Workout from './Workout/Workout';
import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

const Dashboard = () => {
  return (
    <Wrap>
      <Filter />
      <Workout />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 10px 20px;
  background-color: ${color.lightBlack};
  border-radius: 30px;
  //   max-width: 335px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    margin: 16px 32px;
  }
`;

export default Dashboard;
