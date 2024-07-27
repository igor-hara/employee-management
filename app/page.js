import { fetchEmployees } from '@/app/actions/fetchEmployees';
import EmployeesTable from '@/app/components/EmplyeesTable';

export default async function HomePage() {
  const employees = await fetchEmployees();

  return <EmployeesTable initialEmployees={employees} />;
}
