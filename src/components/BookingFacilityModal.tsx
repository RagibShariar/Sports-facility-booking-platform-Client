import { useState } from "react";
import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const BookingFacilityModal = () => {
  const today = new Date();
  const [chosenDate, setChosenDate] = useState<Date | undefined>(today);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button> Book an appointment</Button>
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
                        date.getDay() === 0 ||
                        date.getDay() === 6 || // Disable weekends
                        (date.getTime() < new Date().setHours(0, 0, 0, 0) &&
                          date.getDate() !== new Date().getDate()), // Disable past dates, allow today
                    ]}
                    mode="single"
                    selected={chosenDate}
                    onSelect={setChosenDate}
                    footer={
                      chosenDate
                        ? `Selected: ${chosenDate.toLocaleDateString()}`
                        : "Pick a day."
                    }
                  />
                </div>
                <div>
                  {/* {availableSlots.length > 0 ? (
                    <ul className="flex gap-2 flex-wrap justify-center">
                      {availableSlots.map((slot, index) => (
                        <li
                          key={index}
                          className={`border p-2 cursor-pointer ${
                            selectedSlot === slot
                              ? "bg-[#041340] text-white"
                              : ""
                          }`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot?.startTime} - {slot?.endTime}
                        </li>
                      ))} */}
                  {/* </ul>
                  ) : (
                    <p>No available slots for the selected date.</p>
                  )} */}
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-[#041340] text-white rounded">
                Confirm Booking
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingFacilityModal;
