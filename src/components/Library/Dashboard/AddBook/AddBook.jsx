import {
  BtnFilter,
  FilterTitle,
  Input,
  Label,
  LabelWrap,
} from 'components/Recommended/Dashboard/Filter/Filter.styled';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../../../redux/books/operations';
import * as Yup from 'yup';
import ModalBody from 'components/Modal/Modal';
import BookIsAdded from 'components/Notification/BookIsAdded';
import { ErrMsg } from 'components/LoginForm/LoginForm.styled';

const validationSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  author: Yup.string().trim().required('Author is required'),
  pages: Yup.number()
    .positive()
    .integer()
    .truncate()
    .required('Pages is required'),
});

const AddBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = ({ title, author, pages }, { resetForm }) => {
    dispatch(addNewBook({ title, author, totalPages: pages }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <Formik
      initialValues={{ title: '', author: '', pages: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FilterTitle>Add your book:</FilterTitle>
        <LabelWrap>
          <Label htmlFor="title"> Book title:</Label>
          <Input type="text" name="title" id="title" />
          <ErrMsg name="title" component="div" />
        </LabelWrap>
        <LabelWrap>
          <Label htmlFor="author"> The author:</Label>
          <Input type="text" name="author" id="author" />
          <ErrMsg name="author" component="div" />
        </LabelWrap>
        <LabelWrap>
          <Label htmlFor="pages">Number of pages:</Label>
          <Input type="text" name="pages" id="pages" />
          <ErrMsg name="pages" component="div" />
        </LabelWrap>
        <BtnFilter type="submit">
          <span>Add book</span>
        </BtnFilter>
        {isModalOpen && (
          <ModalBody isOpen={isModalOpen} onRequestClose={closeModal}>
            <BookIsAdded onRequestClose={closeModal} />
          </ModalBody>
        )}
      </Form>
    </Formik>
  );
};

export default AddBook;
