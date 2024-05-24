import React from 'react';
import icon from '../../../../images/sprite.svg';
import { Link, Number, Text, WorkoutWrap } from './Workout.styled';

const Workout = () => {
  return (
    <WorkoutWrap>
      <h3>Start your workout</h3>
      <ul>
        <li>
          <Number>
            <span>1</span>
          </Number>
          <Text>
            Create a personal library:{' '}
            <span>add the books you inntend to read to it.</span>
          </Text>
        </li>
        <li>
          <Number>
            <span>2</span>
          </Number>
          <Text>
            Create your first workout:{' '}
            <span>definea goal,choosea period, start training.</span>
          </Text>
        </li>
        <li>
          <Link to="/library">My library</Link>
          <Link to="/library">
            {' '}
            <svg width="24" height="24">
              <use xlinkHref={`${icon}#log-in`} />
            </svg>
          </Link>
        </li>
      </ul>
    </WorkoutWrap>
  );
};

export default Workout;
