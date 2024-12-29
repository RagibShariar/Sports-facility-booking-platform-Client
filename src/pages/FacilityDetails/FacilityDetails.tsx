// import CheckAvailability from "@/components/CheckAvailability";
import BookingFacility from "@/components/BookingFacility";
import BookingFacilityModal from "@/components/BookingFacilityModal";
import { Button } from "@/components/ui/button";
import { useGetSingleFacilityQuery } from "@/redux/api/facilityApi/facilityApi";
import { CircleCheck, MapPin, OctagonAlert } from "lucide-react";
import { useParams } from "react-router-dom";
import venueType from "../../assets/images/facility-details/venue-type.svg";
import logo from "../../assets/images/hero/banner-cock2.svg";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleFacilityQuery(id);
  const facility = data?.data;

  // console.log(facility?.name);

  if (isLoading) {
    return (
      <div className="h-[85vh] flex items-center justify-center font-semibold ">
        <img className="animate-spin" src={logo} alt="" />
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <div className="w-full lg:max-w-7xl mx-auto  font-Outfit ">
        <div className="grid grid-cols-12  items-center justify-between">
          <div className="col-span-8 w-full lg:w-[800px] rounded-lg">
            <img
              className="object-cover w-full rounded-lg"
              src={facility?.imageUrl}
              alt={facility?.name}
            />
          </div>
          <div className="col-span-4 ">
            <div className="bg-white p-6 rounded-lg">
              <h1 className="text-[#192335] text-3xl font-bold">
                {facility?.name}
              </h1>
              <div className="flex items-center gap-1 mt-2">
                <MapPin size={18} className="text-gray-500" />
                <p className="text-gray-500"> {facility?.location}</p>
              </div>
              <hr className="mt-6 mb-3 border-[#eaedf0]" />
              <div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient inline-block p-2 rounded-full">
                      {" "}
                      <img src={venueType} alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Venue Type</p>
                      <p>Indoor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500">Starts From: </p>
                    <p className="text-2xl font-bold text-[#097e52]">
                      ${facility?.pricePerHour}
                      <span className="text-sm font-normal">/hr</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* book now  */}
            <div className="bg-white p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">
                Book a Court
              </h3>
              <p>Check availability on your convenient time</p>
              <hr className="mt-3 mb-6 border-[#eaedf0]" />
              <Button className="w-full py-6 text-md bg-[#192335]">
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-6 mt-6 rounded-lg">
          <h3 className="text-[#192335] text-xl font-semibold">Overview</h3>
          <hr className="mt-3 mb-3 border-[#eaedf0]" />
          <p className=" text-gray-500">{facility?.description}</p>
        </div>
        <div className="bg-slate-50 p-6 mt-6 rounded-lg">
          <h3 className="text-[#192335] text-xl font-semibold">Rules</h3>
          <hr className="mt-3 mb-3 border-[#eaedf0]" />
          <ul>
            <li className="mb-2 flex items-center gap-2 text-gray-500">
              <OctagonAlert size={15} color="red" />{" "}
              <span>
                Non Marking Shoes are recommended not mandatory for Badminton.
              </span>
            </li>
            <li className="mb-2 flex items-center gap-2 text-gray-500">
              <OctagonAlert size={15} color="red" />{" "}
              <span>
                A maximum number of members per booking per badminton court is
                admissible fixed by Venue Vendors
              </span>
            </li>
            <li className="mb-2 flex items-center gap-2 text-gray-500">
              <OctagonAlert size={15} color="red" />{" "}
              <span>
                No pets, no seeds, no gum, no glass, no hitting or swinging
                outside of the cage
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 mt-6 rounded-lg">
          <h3 className="text-[#192335] text-xl font-semibold">Amenities</h3>
          <hr className="mt-3 mb-3 border-[#eaedf0]" />
          <ul className="lg:flex justify-between">
            <li className="mb-2 flex items-center gap-1 text-gray-500">
              <CircleCheck size={21} fill="#1bb333" color="white" />
              <span>Parking</span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-gray-500">
              <CircleCheck size={21} fill="#1bb333" color="white" />
              <span>Drinking Water</span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-gray-500">
              <CircleCheck size={21} fill="#1bb333" color="white" />
              <span>First Aid</span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-gray-500">
              <CircleCheck size={21} fill="#1bb333" color="white" />
              <span>Changing Room</span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-gray-500">
              <CircleCheck size={21} fill="#1bb333" color="white" />
              <span>Shower</span>
            </li>
          </ul>
        </div>
        <div>
          <BookingFacility facility={facility} />
          <BookingFacilityModal />
        </div>
      </div>
    </section>
  );
};

export default FacilityDetails;
