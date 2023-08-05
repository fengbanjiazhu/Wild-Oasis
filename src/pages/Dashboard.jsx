import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import Spinner from "../ui/Spinner";
import { useRecentStays } from "../features/dashboard/useRecentStays";

function Dashboard() {
  const { bookings, isLoading } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays();

  if (isLoading || isLoadingStays) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter></DashboardFilter>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
