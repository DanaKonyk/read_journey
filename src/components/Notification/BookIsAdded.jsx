import okFinger from '../../images/ok-finger.png';
import { NotifyWrap } from './Notification.styled';

const BookIsAdded = () => {
  return (
    <NotifyWrap>
      <img src={okFinger} alt="done" />
      <h3>Good Job</h3>
      <p>
        Your book is now in <span>the library!</span> The joy knows no bounds
        and now you can start your training
      </p>
    </NotifyWrap>
  );
};

export default BookIsAdded;
