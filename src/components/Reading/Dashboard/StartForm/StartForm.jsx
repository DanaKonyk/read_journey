import {
  BtnFilter,
  FilterTitle,
  Input,
  Label,
  LabelWrap,
} from 'components/Recommended/Dashboard/Filter/Filter.styled';
import star from '../../../../images/star-icon.png';
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { ProgressWrap } from './StartForm.styled';
import { useBook } from 'hooks/useBook';
import { useDispatch } from 'react-redux';
import { finishRead, startRead } from '../../../../redux/books/operations';

const validationSchema = Yup.object({
  page: Yup.number().positive().integer().required('Page number is required'),
});

const StartForm = () => {
  const [isReading, setIsReading] = useState(false);
  const dispatch = useDispatch();
  const { readBooks } = useBook();
  const bookId = readBooks._id;

  const handleSubmit = ({ page }, { resetForm }) => {
    if (!isReading) {
      dispatch(startRead({ id: bookId, page }));
      setIsReading(!isReading);
    } else if (isReading) {
      dispatch(finishRead({ id: bookId, page }));
      setIsReading(!isReading);
    }
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ page: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FilterTitle>{`${isReading ? 'Stop' : 'Start'} page:`}</FilterTitle>
          <LabelWrap>
            <Label htmlFor="page">Page Number:</Label>
            <Input type="number" name="page" id="page" />
            <ErrorMessage name="page" component="div" />
          </LabelWrap>
          <BtnFilter type="submit">
            <span>{`${isReading ? 'Stop' : 'Start'}`}</span>
          </BtnFilter>
        </Form>
      </Formik>
      <ProgressWrap>
        <h3>Progress</h3>
        <p>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </p>
        <img src={star} alt="star" />
      </ProgressWrap>
    </>
  );
};

export default StartForm;
