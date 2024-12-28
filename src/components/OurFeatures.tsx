import img1 from "../assets/images/features/coache-icon-01.svg";
import img2 from "../assets/images/features/coache-icon-02.svg";
import img3 from "../assets/images/features/coache-icon-03.svg";
import img4 from "../assets/images/features/coache-icon-04.svg";
import img5 from "../assets/images/features/coache-icon-05.svg";
import img6 from "../assets/images/features/coache-icon-06.svg";
import SectionHeader from "./shared/SectionHeader";

const OurFeatures = () => {
  return (
    <>
      <section className="features  bg-[#f9f9f6] pb-20 ">
        <div className="lg:max-w-7xl mx-auto pb-10 lg:pb-10">
          <SectionHeader
            title1="Our "
            title2="Features"
            description="Discover your potential with our comprehensive training, expert trainers, and advanced facilities. Join us to improve your athletic career."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-30">
            {/* card 1 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img1} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Group Coaching
              </h3>
              <p className="mb-4 text-gray-500">
                Accelerate your skills with tailored group coaching sessions for
                badminton players game.
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
            {/* card 2 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img2} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Private Coaching
              </h3>
              <p className="mb-4 text-gray-500">
                Find private badminton coaches and academies for a personalized
                approach to skill enhancement.
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
            {/* card 3 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img3} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Equipment Store
              </h3>
              <p className="mb-4 text-gray-500">
                Your one-stop shop for high-quality badminton equipment,
                enhancing your on-court performance.
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
            {/* card 4 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img4} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Innovative Lessons
              </h3>
              <p className="mb-4 text-gray-500">
                Enhance your badminton skills with innovative lessons, combining
                modern techniques and training methods
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
            {/* card 5 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img5} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Sports Community
              </h3>
              <p className="mb-4 text-gray-500">
                Upraise your game with engaging lessons and a supportive
                community. Join us now and take your skills to new heights.
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
            {/* card 6 */}
            <div className="featureCard bg-white px-6 py-6 rounded-lg font-Outfit">
              <div className="featureIcon bg-[#fafafa] rounded-lg py-2 duration-300 ease-in-out">
                <img className="mx-auto" src={img6} alt="f1" />
              </div>
              <h3 className="my-3 text-2xl font-semibold text-[#192335]">
                Field Rental
              </h3>
              <p className="mb-4 text-gray-500">
                Enjoy uninterrupted badminton sessions at DreamSports with our
                premium court rental services.
              </p>
              <a className="text-[#097e52] font-semibold" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeatures;
