/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllFacilitiesQuery } from "@/redux/api/facilityApi/facilityApi";
import FacilityCard from "./FacilityCard";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";

const FeaturedVenues = () => {
  const { data } = useGetAllFacilitiesQuery(undefined);

  return (
    <section className="features">
    <div className=" lg:max-w-7xl mx-auto pb-10 lg:pb-10">
      <SectionHeader
        title1="Featured "
        title2="Venues"
        description="Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced badminton performance."
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {data?.data?.slice(0, 3).map((facility: any) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
      <div className="mt-16 text-center w-full">
        <Button className="bg-gradient text-center px-6 py-4">
          Explore More
        </Button>
      </div>
      </div>
      </section>
  );
};

export default FeaturedVenues;
