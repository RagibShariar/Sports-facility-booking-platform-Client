import { BadgeDollarSign, MessageCircleCode } from "lucide-react";
import { MdSportsVolleyball } from "react-icons/md";

const UserDashboard = () => {
  return (
    <>
      <div className="lg:max-w-7xl mx-auto font-Outfit border rounded-lg p-6 mb-5">
        <h3 className="text-xl font-bold">Statistics</h3>
        <p className="text-gray-500 mb-3">
          Boost your game with stats and goals tailored to you
        </p>
        <hr />
        <div className="flex justify-between gap-6 mt-3">
          <div className="bg-[#f9f9f6] flex items-center justify-between p-6 rounded-lg w-full">
            <div className="">
              <h4 className="text-2xl font-semibold text-green-700">3</h4>
              <p className="text-gray-500 mt-2">Total Court Booked</p>
            </div>
            <div>
              <MdSportsVolleyball size={50} color="green" />
            </div>
          </div>
          <div className="bg-[#f9f9f6] flex items-center justify-between p-6 rounded-lg w-full">
            <div className="">
              <h4 className="text-2xl font-semibold text-green-700">5</h4>
              <p className="text-gray-500 mt-2">Review Given</p>
            </div>
            <div>
              <MessageCircleCode size={50} color="green" />
            </div>
          </div>
          <div className="bg-[#f9f9f6] flex items-center justify-between p-6 rounded-lg w-full">
            <div className="">
              <h4 className="text-2xl font-semibold text-green-700">$450,00</h4>
              <p className="text-gray-500 mt-2">Total Payments</p>
            </div>
            <div>
              <BadgeDollarSign size={50} color="green" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto font-Outfit  rounded-lg p-6 myShadow">
        <h3 className="text-xl font-bold">Todays Appointment</h3>
        <p className="text-gray-500 mb-3">Your Personal Badminton Schedule</p>
        <hr />
        <div className="flex justify-between items-center">

       
        <div className="flex items-center gap-4 my-2">
          <div className="w-14 h-14 rounded-lg ">
            <img
              className="w-full h-full rounded-lg"
              src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/booking/booking-01.jpg"
              alt=""
            />
          </div>
            <div className="">
              <p className="font-medium">Court Name</p>
              <p className="text-gray-500">indoor</p>
            </div>
        </div>
        <div>
        <p className="font-medium">Appointment Date</p>
        <p className="text-gray-500">Mon, Jul 11</p>
        </div>
        <div>
        <p className="font-medium">Start Time</p>
        <p className="text-gray-500">Mon, Jul 11</p>
        </div>
        <div>
        <p className="font-medium">End Time</p>
        <p className="text-gray-500">Mon, Jul 11</p>
        </div>
        <div>
        <p className="font-medium">Location</p>
        <p className="text-gray-500">Dhaka</p>
          </div>
          </div>
      </div>
    </>
  );
};

export default UserDashboard;
