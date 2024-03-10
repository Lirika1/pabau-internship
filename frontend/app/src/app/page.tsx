import Link from "next/link";
import Button from "./components/Button";
import { Booking } from "./types";

async function getBookings(): Promise<Booking[]> {
  const res = await fetch('http://host.docker.internal:3001/api/bookings', { cache: 'no-store', mode: 'no-cors' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Home: React.FC = async () => {
  const bookings = await getBookings()

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <header className="p-4 bg-transparent w-full">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Bookings</h1>
          <Button path="booking/new" text="Add new booking" />
        </div>
      </header>
      <div className="overflow-auto max-h-96 w-full">
        {bookings.map(booking => (
          <div
            key={booking.id}
            className="p-4 bg-white shadow-md rounded-lg mb-2 cursor-pointer hover:shadow-lg"
          >
            <Link className="text-lg text-blue-500" href={`/booking/${booking.id}`}>
              A Booking on {new Date(booking.date).toLocaleDateString()} starting at {booking.start_time}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;