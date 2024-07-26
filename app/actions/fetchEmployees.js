/**
 * Fetches employees from the API and returns the data as JSON.
 *
 * @return {Promise<Object>} The fetched employee data as JSON.
 * @throws {Error} If there was a problem with the fetch operation.
 */
export const fetchEmployees = async () => {
  try {
    const response = await fetch(
      'https://api.test.ulaznice.hr/paganini/api/job-interview/employees',
    );
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return { data: [] };
  }
};
