import img1 from "../../assets/images/aboutUs/banner-01.jpg";
import img2 from "../../assets/images/aboutUs/banner-02.jpg";
import img3 from "../../assets/images/aboutUs/banner-03.jpg";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="about-us">
          <div className="lg:max-w-7xl mx-auto  py-8 lg:py-16">
            <h2 className="mb-5 text-4xl font-extrabold font-Outfit text-white">
              About Us
            </h2>
            <p className="text-white text-lg font-Outfit">
              <span className="mr-3">Home</span>
              <span className="mr-3"> &gt;</span>
              <span>About Us</span>
            </p>
          </div>
        </div>
        <div className="lg:max-w-7xl mx-auto lg:flex gap-6 py-14">
          <img className="rounded-xl" src={img1} alt="" />
          <img className="rounded-xl" src={img2} alt="" />
          <img className="rounded-xl overflow-hidden" src={img3} alt="" />
        </div>

        <div className="lg:max-w-7xl mx-auto grid grid-cols-12 font-Outfit lg:mb-20 mb-10">
          <div className="col-span-8  ">
            <h3 className="mb-4 font-bold text-3xl">Our Vision</h3>
            <p className="mb-3 text-gray-500 pr-8">
              We envision a thriving badminton ecosystem with innovative
              technologies that enhance skills and cultivate a love for the
              sport. Our platform inspires individuals to unleash their full
              potential in badminton.
            </p>
            <p className="text-gray-500 pr-8">
              We revolutionize badminton, empowering coaches and players to
              excel. Our platform offers comprehensive tools and support for
              growth within the badminton community. Join us and reach new
              heights of excellence!
            </p>
          </div>
          <div className="col-span-4  bg-gradient rounded-lg p-6 text-white">
            <h3 className="mb-4 font-bold text-3xl">Our Mission</h3>
            <p>We provide coaches and players with a seamless platform for connectivity, personalized insights, and educational resources. Together, we foster a collaborative community that supports growth and success in badminton.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
