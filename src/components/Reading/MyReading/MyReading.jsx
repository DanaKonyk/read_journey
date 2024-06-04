import { BtnWrap } from 'components/Library/NewBookList/NewBookList.styled';
import { Wrap } from 'components/Recommended/BookList/BookList.styled';
import { useBook } from 'hooks/useBook';
import noImage from '../../../images/no-image-book.png';
import { BookWrap } from './MyReading.styled';

const MyReading = () => {
  const { readBooks } = useBook();
  return (
    <Wrap>
      <BtnWrap>
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
        </BookWrap>
      </BtnWrap>
    </Wrap>
  );
};

export default MyReading;
