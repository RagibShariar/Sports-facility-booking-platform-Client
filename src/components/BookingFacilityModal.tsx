/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBookingMutation } from "@/redux/api/bookingsApi/bookingsApi";
import { useCheckAvailabilityQuery } from "@/redux/api/checkAvailability/checkAvailabilityApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const BookingFacilityModal = ({ facility }: any) => {
  const { _id } = facility;
  const [createBooking] = useCreateBookingMutation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Date>();
  const date = selected ? format(selected, "yyyy-MM-dd") : "";

  const [selectedSlot, setSelectedSlot] = useState<{
    startTime: string;
    endTime: string;
  } | null>(null);
  const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
  const { data } = useCheckAvailabilityQuery(formattedDate);
  const availableTimes = data?.data || [];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selected || !selectedSlot) {
      toast.warning("Please select a date and a time slot.");
      return;
    }

    const bookingInfo = {
      facility: _id,
      date: format(selected, "yyyy-MM-dd"), // Format the date as "yyyy-MM-dd"
      startTime: selectedSlot.startTime, // Extract startTime from the selectedSlot
      endTime: selectedSlot.endTime, // Extract endTime from the selectedSlot
    };

    console.log(bookingInfo);

    try {
      const res = await createBooking(bookingInfo);
      if (res?.data?.success === true) {
        toast.success("Booking confirmed!");
        navigate("/checkout");
      }
      if ((res.error as FetchBaseQueryError)?.status === 401) {
        toast.error("Unauthorize Access. Please login before booking");
        navigate("/login");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger className="w-full my-2">
            <Button className="w-full py-6 text-md bg-[#192335] bg-gradient">
              {" "}
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Available Time Slots</DialogTitle>
              <DialogDescription>
                <div className="md:flex gap-4 justify-between items-center ">
                  <div>
                    <DayPicker
                      disabled={[
                        (date) =>
                          date.getDay() === 5 ||
                          (date.getTime() < new Date().setHours(0, 0, 0, 0) &&
                            date.getDate() !== new Date().getDate()), // Disable past dates, allow today
                      ]}
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      footer={
                        selected
                          ? `Selected: ${selected.toLocaleDateString()}`
                          : "Pick a day."
                      }
                    />
                  </div>
                  <div>
                    {availableTimes?.length > 0 ? (
                      <ul className="flex gap-4 flex-wrap justify-center text-black">
                        {availableTimes.map((slot: any, index: number) => (
                          <li
                            key={index}
                            className={`border p-3 rounded-md cursor-pointer ${
                              selectedSlot === slot
                                ? "bg-[#041340] bg-gradient text-white"
                                : ""
                            }`}
                            onClick={() => setSelectedSlot(slot)}
                          >
                            {slot?.startTime} - {slot?.endTime}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No available slots for the selected date.</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleBooking}
                    className=" mt-4 px-10 py-4 bg-gradient text-white font-semibold text-base rounded"
                  >
                    Confirm Booking
                  </button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default BookingFacilityModal;
