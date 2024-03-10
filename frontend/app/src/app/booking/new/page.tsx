"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createBooking } from "./actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
    >
      Add
    </button>
  );
}

const AddBooking: React.FC = () => {
  const [state, formAction] = useFormState(createBooking, initialState);

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={formAction} className="space-y-4">
        <div className="flex flex-wrap">
          <div className="w-full mb-2">
            <label className="flex items-center">
              <span className="w-1/4">Service:</span>
              <input
                type="text"
                id="service"
                name="service"
                required
                className="text-black flex-1 border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </label>
          </div>
          <div className="w-full mb-2">
            <label className="flex items-center">
              <span className="w-1/4">Doctors Name:</span>
              <input
                type="text"
                id="doctorName"
                name="doctorName"
                required
                className="text-black flex-1 border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </label>
          </div>
          <div className="w-full mb-2">
            <label className="flex items-center">
              <span className="w-1/4">Start Time:</span>
              <input
                type="time"
                id="startTime"
                name="startTime"
                required
                className="text-black flex-1 border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </label>
          </div>
          <div className="w-full mb-2">
            <label className="flex items-center">
              <span className="w-1/4">End Time:</span>
              <input
                type="time"
                id="endTime"
                name="endTime"
                required
                className="text-black flex-1 border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </label>
          </div>
          <div className="w-full mb-2">
            <label className="flex items-center">
              <span className="w-1/4">Date:</span>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="text-black flex-1 border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </label>
          </div>
        </div>
        <SubmitButton />
        <p>{state?.message}</p>
      </form>
    </div>
  );
}

export default AddBooking