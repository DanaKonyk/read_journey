import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  BtnFilter,
  BtnWrap,
  FilterTitle,
  Input,
  Label,
  LabelWrap,
} from './Filter.styled';
import { ErrMsg } from 'components/LoginForm/LoginForm.styled';
import { fetchBooks } from '../../../../redux/books/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const filterSchema = Yup.object({
  title: Yup.string().trim(),
  author: Yup.string().trim(),
});

const Filter = () => {
  const [isBtnShown, setIsBtnShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = ({ title, author }) => {
    if (title === undefined) return;
    if (title || author) {
      setIsBtnShown(true);
      dispatch(fetchBooks({ title, author }));
    }
  };

  const handleReset = resetForm => {
    setIsBtnShown(false);
    resetForm();
    dispatch(fetchBooks({ page: 1, limit: 10 }));
  };
  return (
    <Formik
      initialValues={{ title: '', author: '' }}
      validationSchema={filterSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <FilterTitle>Filters:</FilterTitle>
          <LabelWrap>
            <Label htmlFor="title">Book title:</Label>
            <Input type="text" name="title" id="title" />
            <ErrMsg name="title" component="div" />
          </LabelWrap>
          <LabelWrap>
            <Label htmlFor="author">The author:</Label>
            <Input type="text" name="author" id="author" />
            <ErrMsg name="author" component="div" />
          </LabelWrap>
          <BtnWrap>
            <BtnFilter type="submit">
              <span>To apply</span>
            </BtnFilter>
            {isBtnShown && (
              <BtnFilter type="submit" onClick={() => handleReset(resetForm)}>
                <span>Reset</span>
              </BtnFilter>
            )}
          </BtnWrap>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
