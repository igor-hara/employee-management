import EmployeeForm from '@/app/components/EmployeeForm';

const AddEmployeePage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-3xl font-bold'>Add EmployeePage</h1>

      <EmployeeForm />
    </main>
  );
};

export default AddEmployeePage;
