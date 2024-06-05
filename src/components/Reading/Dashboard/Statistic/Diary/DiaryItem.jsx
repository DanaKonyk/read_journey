import { CircleLoader } from 'react-spinners';
import icon from '../../../../../images/sprite.svg';
import { useBook } from 'hooks/useBook';
import {
  BtnDelete,
  DataWrap,
  DiagramWrap,
  ItemWrap,
  Line,
  SpinnerWrap,
} from './Diary.styled';

const DiaryItem = ({ progress }) => {
  const { readBooks } = useBook();

  const handleDateConvert = time => {
    const date = new Date(time);
    const day = date.getDate();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const startDate = handleDateConvert(progress.startReading);
  const currentPage = progress.finishPage - progress.startPage;
  const currentProgress = ((currentPage / readBooks.totalPages) * 100).toFixed(
    2
  );

  return (
    <ItemWrap>
      {progress.status === 'active' && (
        <SpinnerWrap>
          <CircleLoader color="#30B94D" />
        </SpinnerWrap>
      )}
      {progress.status === 'inactive' && (
        <>
          <DataWrap>
            <svg>
              <use xlinkHref={`${icon}#block`} />
            </svg>
            <Line />
            <div>
              <h4>{startDate}</h4>
              <h5>{currentProgress} %</h5>
              <h6>{readBooks.timeLeftToRead?.minutes} minutes</h6>
            </div>
          </DataWrap>
          <DiagramWrap>
            <div>
              <h4>{progress.finishPage} pages</h4>
              <svg>
                <use xlinkHref={`${icon}#icon-block`} />
              </svg>
              <h5>{currentPage} pages per hour</h5>
            </div>
            <BtnDelete type="button">
              <svg>
                <use xlinkHref={`${icon}#trash-1`} />
              </svg>
            </BtnDelete>
          </DiagramWrap>
        </>
      )}
    </ItemWrap>
  );
};

export default DiaryItem;
