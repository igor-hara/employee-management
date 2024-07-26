'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../validationSchemas/employeeSchema';

const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(employeeSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);

    // reset form
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-12 sm:space-y-16 mt-14'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information:
          </h2>

          <div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0  sm:pb-0'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
              >
                First name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  {...register('firstName')}
                  id='first-name'
                  name='firstName'
                  type='text'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
                <p className='mt-1 text-sm text-red-600'>
                  {errors.firstName?.message}
                </p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
              >
                Last name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  {...register('lastName')}
                  id='last-name'
                  name='lastName'
                  type='text'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
                <p className='mt-1 text-sm text-red-600'>
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='date-of-birth'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
              >
                Date Of Birth
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  {...register('dateOfBirth')}
                  id='date-of-birth'
                  name='dateOfBirth'
                  type='date'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6'
                />
                <p className='mt-1 text-sm text-red-600'>
                  {errors.dateOfBirth?.message}
                </p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='position'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
              >
                Position
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  {...register('position')}
                  id='position'
                  name='position'
                  type='position'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6'
                />
                <p className='mt-1 text-sm text-red-600'>
                  {errors.position?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={!isValid}
          className={`inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isValid
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-indigo-400 text-indigo-200 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
