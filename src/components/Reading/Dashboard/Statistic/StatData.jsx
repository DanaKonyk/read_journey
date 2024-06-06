import { useBook } from 'hooks/useBook';
import { Circle } from 'rc-progress';
import {
  CircleWrap,
  PercentWrap,
  Progress,
  Quote,
  StatsWrap,
} from './Statistic.styled';

const StatData = () => {
  const { readBooks } = useBook();

  if (!readBooks || !Array.isArray(readBooks.progress)) {
    return null;
  }

  const pageArr = readBooks.progress.map(item => item.finishPage);
  const finishPage = pageArr.slice(-1);
  const currentProgress = ((finishPage / readBooks.totalPages) * 100).toFixed(
    2
  );
  return (
    <>
      <Quote>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </Quote>
      <StatsWrap>
        <CircleWrap>
          <Circle
            percent={currentProgress}
            strokeWidth={8}
            trailWidth={8}
            strokeColor="#30B94D"
            trailColor="#1F1F1F"
          />
        </CircleWrap>
        <span>100%</span>
        <PercentWrap>
          <Progress />
          <div>
            <h4>{currentProgress} %</h4>
            <h5>{finishPage} pages read</h5>
          </div>
        </PercentWrap>
      </StatsWrap>
    </>
  );
};

export default StatData;
