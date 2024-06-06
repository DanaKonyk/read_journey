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

const filterSchema = Yup.object({
  title: Yup.string().trim(),
  author: Yup.string().trim(),
});

const Filter = () => {
  return (
    <Formik
      initialValues={{ title: '', author: '' }}
      validationSchema={filterSchema}
    >
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
        </BtnWrap>
      </Form>
    </Formik>
  );
};

export default Filter;
