import icon from '../../../images/sprite.svg';
import { Wrap } from 'components/Recommended/BookList/BookList.styled';
import { useBook } from 'hooks/useBook';
import noImage from '../../../images/no-image-book.png';
import { BookWrap, BtnStartStop, ReadWrap } from './MyReading.styled';

const MyReading = () => {
  const { readBooks } = useBook();
  return (
    <Wrap>
      <ReadWrap>
        <h2>My Reading</h2>
        <BookWrap>
          <div>
            <img
              src={readBooks.imageUrl ? readBooks.imageUrl : noImage}
              alt={readBooks.title}
            />
          </div>
          <div>
            <h4>{readBooks.title}</h4>
            <h5>{readBooks.author}</h5>
          </div>
          <BtnStartStop type="button">
            {!readBooks.timeLeftToRead && readBooks.status !== 'unread' ? (
              <svg>
                <use xlinkHref={`${icon}#button-stop-read`} />
              </svg>
            ) : (
              <svg>
                <use xlinkHref={`${icon}#button-read`} />
              </svg>
            )}
          </BtnStartStop>
        </BookWrap>
      </ReadWrap>
    </Wrap>
  );
};

export default MyReading;
