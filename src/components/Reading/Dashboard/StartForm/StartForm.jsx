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

const validationSchema = Yup.object({
  pages: Yup.number()
    .positive()
    .integer()
    .truncate()
    .required('Page number is required'),
});

const StartForm = () => {
  const [isReading, setIsReading] = useState(false);
  return (
    <>
      <Formik initialValues={{ page: '' }} validationSchema={validationSchema}>
        <Form>
          <FilterTitle>{`${isReading ? 'Stop' : 'Start'} page:`}</FilterTitle>
          <LabelWrap>
            <Label htmlFor="page">Page Number</Label>
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
