/* eslint-disable @typescript-eslint/no-explicit-any */
// import CheckAvailability from "@/components/CheckAvailability";
import BookingFacilityModal from "@/components/BookingFacilityModal";
import { useGetSingleFacilityQuery } from "@/redux/api/facilityApi/facilityApi";
import { useGetReviewQuery } from "@/redux/api/reviewApi/reviewApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { format } from "date-fns";
import { CircleCheck, Loader2, MapPin, OctagonAlert } from "lucide-react";
import { useParams } from "react-router-dom";
import venueType from "../../assets/images/facility-details/venue-type.svg";
import logo from "../../assets/images/hero/banner-cock2.svg";
import AddReview from "./AddReview";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading: isFacilityLoading } = useGetSingleFacilityQuery(id);
  const facility = data?.data;
  const { data: reviews, isLoading: isReviewLoading } = useGetReviewQuery(id);

  const averageRating =
    reviews?.data.reduce((sum: any, review: any) => sum + review?.rating, 0) /
    reviews?.data.length;

  // console.log(Number(averageRating));

  if (isFacilityLoading) {
    return (
      <div className="h-[85vh] flex items-center justify-center font-semibold ">
        <img className="animate-spin" src={logo} alt="" />
      </div>
    );
  }
  if (isReviewLoading) {
    return (
      <div className="h-[85vh] flex items-center justify-center font-semibold ">
        <Loader2 size={50} />
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-10 lg:py-20 ">
      <div className="w-full lg:max-w-7xl mx-auto  font-Outfit relative">
        <div className="lg:grid grid-cols-12 gap-6 items-center justify-between    ">
          <div className="col-span-8 w-full  rounded-lg">
            <img
              className="object-cover w-full rounded-lg"
              src={facility?.imageUrl}
              alt={facility?.name}
            />
          </div>
          <div className="col-span-4  sticky top-32">
            <div>
              <div className="sticky top-32 bg-white p-6 rounded-lg  ">
                <h1 className="text-[#192335] text-3xl font-bold">
                  {facility?.name}
                </h1>
                <div className="flex items-center justify-between mt-2 ">
                  <div className="flex items-center gap-1 ">
                    <MapPin size={18} className="text-gray-500" />
                    <p className="text-gray-500"> {facility?.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500">Starts From: </p>
                    <p className="text-2xl font-bold text-[#097e52]">
                      ${facility?.pricePerHour}
                      <span className="text-sm font-normal">/hr</span>
                    </p>
                  </div>
                </div>
                <hr className="mt-6 mb-3 border-[#eaedf0]" />
                <div>
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient  w-10 h-10 flex items-center justify-center text-white rounded-full">
                        {" "}
                        <img src={venueType} alt="" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Venue Type</p>
                        <p>Indoor</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2   p-2 rounded-md  ">
                      <div className="bg-gradient w-10 h-10 flex items-center justify-center text-white  rounded-full">
                        {averageRating ? averageRating.toFixed(1) : 0}
                      </div>
                      <div>
                        <Rating
                          style={{ maxWidth: 90 }}
                          value={
                            averageRating
                              ? parseFloat(averageRating.toFixed(1))
                              : 0
                          }
                          readOnly
                        />
                        <p className="mt-1 text-gray-600 text-sm underline">
                          {reviews?.data.length} Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* book now  */}
              <div className=" sticky top-32 bg-white p-6 mt-6 rounded-lg  ">
                <h3 className="text-[#192335] text-xl font-semibold">
                  Book a Court
                </h3>
                <p>Check availability on your convenient time</p>
                <hr className="mt-3 mb-6 border-[#eaedf0]" />

                <BookingFacilityModal facility={facility} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-8">
            {/* overview */}
            <div className="bg-slate-50 p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">Overview</h3>
              <hr className="mt-3 mb-3 border-[#eaedf0]" />
              <p className=" text-gray-500">{facility?.description}</p>
            </div>
            {/* rules */}
            <div className="bg-slate-50 p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">Rules</h3>
              <hr className="mt-3 mb-3 border-[#eaedf0]" />
              <ul>
                <li className="mb-2 flex items-center gap-2 text-gray-500">
                  <OctagonAlert size={15} color="red" />{" "}
                  <span>
                    Non Marking Shoes are recommended not mandatory for
                    Badminton.
                  </span>
                </li>
                <li className="mb-2 flex items-center gap-2 text-gray-500">
                  <OctagonAlert size={15} color="red" />{" "}
                  <span>
                    A maximum number of members per booking per badminton court
                    is admissible fixed by Venue Vendors
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
            {/* Amenities */}
            <div className="bg-slate-50 p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">
                Amenities
              </h3>
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
            {/* book now button */}
            <div className="my-4">
              {/* <BookingFacility facility={facility} /> */}
              <BookingFacilityModal facility={facility} />
            </div>
            {/* reviews */}

            <div className="bg-slate-50 p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">Reviews</h3>
              <hr className="mt-3 mb-6 border-[#eaedf0]" />
              <div>
                {reviews?.data.length === 0 ? (
                  <p className="text-gray-500">No reviews yet</p>
                ) : (
                  reviews?.data.map((review: any) => (
                    <div key={review._id} className="mb-4">
                      <div className="flex items-start  gap-6 ">
                        <div className="w-14 rounded-full ">
                          <img
                            className="w-14 rounded-full "
                            src={`https://avatar.iran.liara.run/username?username=${review?.user.name}`}
                            alt={review?.user.name}
                          />
                        </div>
                        <div className="flex  justify-between w-full">
                          <div>
                            <h4 className="text-lg font-medium">
                              {review?.user.name}
                            </h4>
                            <p className="text-gray-500 text-xs">
                              {format(
                                new Date(review?.date),
                                "dd MMM, yyyy h:mm a"
                              )}
                            </p>
                            <p className="text-gray-700 mt-3 truncate">
                              {review?.comment}
                            </p>
                          </div>
                          <div className="flex  gap-2 ">
                            <p>
                              <Rating
                                style={{ maxWidth: 100 }}
                                value={review?.rating}
                                readOnly
                              />
                            </p>
                            <p>({review?.rating})</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Write a review */}
            <div className="bg-slate-50 p-6 mt-6 rounded-lg">
              <h3 className="text-[#192335] text-xl font-semibold">
                Write a Review
              </h3>
              <hr className="mt-3 mb-3 border-[#eaedf0]" />
              <div>
                <AddReview id={id as string} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityDetails;
