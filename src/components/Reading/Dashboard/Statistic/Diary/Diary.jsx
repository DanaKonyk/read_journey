import { useBook } from 'hooks/useBook';
import React from 'react';
import DiaryItem from './DiaryItem';
import { DiaryWrap } from './Diary.styled';

const Diary = () => {
  const { readBooks } = useBook();

  return (
    <DiaryWrap>
      <ul>
        {readBooks.progress
          ?.slice()
          .reverse()
          .map(item => {
            return (
              <li key={item._id}>
                <DiaryItem progress={item} />
              </li>
            );
          })}
      </ul>
    </DiaryWrap>
  );
};

export default Diary;
