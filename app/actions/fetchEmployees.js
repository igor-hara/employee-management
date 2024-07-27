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
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    return { success: true, data: data.data };
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);

    return { success: false, data: [] };
  }
};
