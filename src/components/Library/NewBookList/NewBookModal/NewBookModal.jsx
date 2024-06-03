import { useDispatch } from 'react-redux';
import noImage from '../../../../images/no-image-book.png';
import { useNavigate } from 'react-router-dom';
import { getOneBook } from '../../../../redux/books/operations';
import { ModalWrap } from './NewBookModal.styled';
import { BtnFilter } from 'components/Recommended/Dashboard/Filter/Filter.styled';

const NewBookModal = ({ books }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getOneBook(books._id));
    navigate('/reading');
  };
  return (
    <ModalWrap>
      <img src={books.imageUrl ? books.imageUrl : noImage} alt={books.title} />
      <h4>{books.title}</h4>
      <h5>{books.author}</h5>
      <h6>{books.totalPages}</h6>
      <BtnFilter type="button" onClick={handleClick}>
        <span>Start Reading</span>
      </BtnFilter>
    </ModalWrap>
  );
};

export default NewBookModal;
