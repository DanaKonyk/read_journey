import React from 'react';
import icon from '../../../../images/sprite.svg';
import book from '../../../../images/book.png';
import { Link, Number, QuoteWrap, Text, WorkoutWrap } from './Workout.styled';

const Workout = () => {
  return (
    <>
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
              <span>define a goal,choose a period, start training.</span>
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
      <QuoteWrap>
        <img src={book} alt="book" />
        <p>
          "Books are <span>windows</span> to the world, and reading is a journey
          into the unknown."
        </p>
      </QuoteWrap>
    </>
  );
};

export default Workout;
