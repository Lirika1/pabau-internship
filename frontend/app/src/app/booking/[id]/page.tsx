
import Button from "@/app/components/Button";
import { Booking } from "@/app/types";


async function getBooking(id: number): Promise<Booking> {
  const res = await fetch(`http://host.docker.internal:3001/api/bookings/${id}`, { cache: 'no-store', mode: 'no-cors' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const BookingSingle: React.FC = async ({ params }: { params: { id: number } }) => {
  const booking = await getBooking(params.id)

  return (
    <div className="p-4">
      <div className="mb-4">
        This Booking is with {booking.doctor_name} For {booking.service} and it ends on {booking.end_time}
      </div>
      <Button path="/" text="Go back" />
    </div>
  );
};

export default BookingSingle;