import { useBook } from 'hooks/useBook';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../../../redux/books/operations';
import { BodyWrap, BtnAdd } from './BookDetails.styled';

const BookDetails = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { newBooks } = useBook();

  const handleAddBook = () => {
    dispatch(addBook({ _id: book._id }));
    navigate('/library');
  };

  const addedBook = newBooks.some(newBook => newBook.title === book.title);
  return (
    <BodyWrap>
      {addedBook ? (
        <>
          <img src={book.imageUrl} alt={book.title} width={137} />
          <p>You have already added this book to the library.</p>
        </>
      ) : (
        <>
          <img src={book.imageUrl} alt={book.title} />
          <h4>{book.title}</h4>
          <h5>{book.author}</h5>
          <h6>{book.totalPages} pages</h6>
          <BtnAdd type="button" onClick={handleAddBook}>
            <span>Add to the library</span>
          </BtnAdd>
        </>
      )}
    </BodyWrap>
  );
};

export default BookDetails;
