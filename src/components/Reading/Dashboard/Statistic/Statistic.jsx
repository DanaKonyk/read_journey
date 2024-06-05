import { useState } from 'react';
import icon from '../../../../images/sprite.svg';
import Diary from './Diary/Diary';
import StatData from './StatData';
import { BtnStat, BtnWrap, StatWrap } from './Statistic.styled';

const Statistic = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <StatWrap>
        <h3>{isShown ? 'Diary' : 'Statistics'}</h3>
        <BtnWrap>
          <BtnStat
            type="button"
            onClick={() => {
              setIsShown(true);
            }}
          >
            <svg stroke={isShown ? '#F9F9F9' : '#686868'}>
              <use xlinkHref={`${icon}#watches`} />
            </svg>
          </BtnStat>
          <BtnStat
            type="button"
            onClick={() => {
              setIsShown(false);
            }}
          >
            <svg stroke={isShown ? '#686868' : '#F9F9F9'}>
              <use xlinkHref={`${icon}#icon-pie-chart`} />
            </svg>
          </BtnStat>
        </BtnWrap>
      </StatWrap>
      {isShown ? <Diary /> : <StatData />}
    </div>
  );
};

export default Statistic;
