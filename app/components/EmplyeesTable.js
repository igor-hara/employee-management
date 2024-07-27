'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Spinner } from '@/app/components/Spinner';

const EmployeesTable = ({ initialEmployees }) => {
  // Search state
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // watch for API fetching employees
  useEffect(() => {
    if (initialEmployees) {
      setLoading(false);
    }
  }, [initialEmployees]);

  // Filter employees and reset page on search change
  useEffect(() => {
    const filtered = initialEmployees?.data?.filter((employee) =>
      search.toLowerCase() === ''
        ? true
        : employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
          employee.jobTitle.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredEmployees(filtered);
    // Reset to first page when filtering
    setCurrentPage(1);
  }, [search, initialEmployees]);

  // Calculate pagination
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee,
  );

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage * itemsPerPage < filteredEmployees.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-3xl font-bold'>Employee Management</h1>
      <div className='px-4 sm:px-6 lg:px-8 mt-16'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              Employees
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all the users in your account including their name,
              title, email, and role.
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

        <div className='m-16 flex items-center justify-center px-2'>
          <div className='w-full sm:max-w-xs'>
            <label htmlFor='search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <MagnifyingGlassIcon
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                id='search'
                name='search'
                type='search'
                placeholder='Search by first name, last name or job title'
                className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
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
                  {currentEmployees.length > 0 ? (
                    currentEmployees.map((employee) => (
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
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan='4'
                        className='whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 text-center sm:pl-6 lg:pl-8'
                      >
                        No employees found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className='mt-8 flex justify-between '>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
          >
            Previous
          </button>
          <span className='text-sm font-semibold text-gray-900'>
            Page {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage * itemsPerPage >= filteredEmployees.length}
            className={`py-2 px-4 rounded-md ${currentPage * itemsPerPage >= filteredEmployees.length ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default EmployeesTable;
