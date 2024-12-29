import { MapPin, PhoneCall } from "lucide-react";
import { RxEnvelopeClosed } from "react-icons/rx";

const ContactUs = () => {
  return (
    <>
      <section className="font-Outfit ">
        <div className="contact-us">
          <div className="lg:max-w-7xl mx-auto  py-8 lg:py-16">
            <h2 className="mb-5 text-4xl font-extrabold font-Outfit text-white">
              Contact Us
            </h2>
            <p className="text-white text-lg font-Outfit">
              <span className="mr-3">Home</span>
              <span className="mr-3"> &gt;</span>
              <span>Contact Us</span>
            </p>
          </div>
        </div>
        <div className="lg:max-w-7xl mx-auto">
          <h3 className="mt-20 mb-10 text-3xl font-bold text-center">
            Contact Information
          </h3>
          <div className="flex justify-between gap-6 pb-10">
            <div className="flex gap-4 items-center bg-white p-5 w-4/12 myShadow">
              <div className="bg-gradient flex items-center justify-center p-6 rounded-xl">
                <RxEnvelopeClosed size={30} color="white" />
              </div>
              <div>
                <h5 className="text-[#192335] text-xl font-bold">
                  Email Address
                </h5>
                <p className="text-gray-500">info@bookmyplay.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white p-5 w-4/12 myShadow">
              <div className="bg-gradient flex items-center justify-center p-6 rounded-xl">
                <PhoneCall size={30} color="white" />
              </div>
              <div>
                <h5 className="text-[#192335] text-xl font-bold">
                Phone Number
                </h5>
                <p className="text-gray-500">+1 8164 164654</p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white p-5 w-4/12 myShadow">
              <div className="bg-gradient flex items-center justify-center p-6 rounded-xl">
                <MapPin size={30} color="white" />
              </div>
              <div>
                <h5 className="text-[#192335] text-xl font-bold">
                Location
                </h5>
                <p className="text-gray-500">3365 Central AvenueTeterboro, NJ 07608</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f9f9f6] ">

      
      <div className="lg:max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center font-Outfit pt-16 pb-12">Reach out to us and let's smash your inquiries</h2>
        <div className="  bg-[#f9f9f6] font-Outfit pb-20">
          <form className="w-full  bg-white p-6 rounded-lg ">
            {/* Row 1: First Name and Last Name */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                />
              </div>
            </div>

            {/* Row 2: Email and Phone Number */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                 className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Phone Number"
                  className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                />
              </div>
            </div>

            {/* Row 3: Subject */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter Subject"
                 className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                />
              </div>
            </div>

            {/* Row 4: Comments */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="comments"
                 className="block text-gray-700 mb-2"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  rows="3"
                  placeholder="Enter Comments"
                  className="appearance-none block w-full bg-[#f9f9f6] text-gray-700  rounded-lg px-4 leading-tight focus:outline-none py-5"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-gradient text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 flex items-center"
              >
                Submit
                <i className="ml-2 feather-arrow-right-circle"></i>
              </button>
            </div>
          </form>
        </div>
        </div>
        </div>
    </>
  );
};

export default ContactUs;
