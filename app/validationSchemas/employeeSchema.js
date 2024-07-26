import * as yup from 'yup';

export const employeeSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    dateOfBirth: yup.date().required('Date of Birth is required'),
    position: yup.string().required('Position is required'),
  })
  .required();
