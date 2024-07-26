import { fetchEmployees } from '@/app/actions/fetchEmployees';
import Link from 'next/link';

export default async function HomePage() {
  const employees = await fetchEmployees();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-3xl font-bold'>Employee management</h1>
      {employees.data.length > 0 && (
        <div className='px-4 sm:px-6 lg:px-8 mt-16'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-base font-semibold leading-6 text-gray-900'>
                Employees
              </h1>
              <p className='mt-2 text-sm text-gray-700'>
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
              <Link href='/add-employee'>
                <button
                  type='button'
                  className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Add New Employee
                </button>
              </Link>
            </div>
          </div>
          <div className='mt-8 flow-root'>
            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8'
                      >
                        First Name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Last Name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Job Title
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Date of Birth
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {employees.data.map((employee) => (
                      <tr key={employee.id}>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'>
                          {employee.firstName}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {employee.lastName}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {employee.jobTitle}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {new Date(employee.dateOfBirth).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
