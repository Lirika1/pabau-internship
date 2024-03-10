"use server";

import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

export async function createBooking(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const obj = {
    service: formData.get("service"),
    doctor_name: formData.get("doctorName"),
    start_time: formData.get("startTime"),
    end_time: formData.get("endTime"),
    date: formData.get("date"),
  };

  try {
    await fetch("http://host.docker.internal:3001/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
      cache: "no-store",
      mode: "no-cors",
    });
  } catch (err) {
    console.log(err);
    return { message: "Failed to create booking" };
  }

  revalidatePath("/");
  redirect("/", RedirectType.replace);
}
