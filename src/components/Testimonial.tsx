/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionHeader from "./shared/SectionHeader";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronRight
      color="#192335"
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "white",
        height: "46px",
        width: "46px",
        padding: "10px",
        borderRadius: "50%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeft
      color="#192335"
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "white",
        height: "46px",
        width: "46px",
        padding: "10px",
        borderRadius: "50%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className=" bg-[#f9f9f6] relative pb-20">
      <div className="testimonial"></div>
      <div className="lg:max-w-7xl mx-auto pb-10 lg:pb-10">
        <SectionHeader
          title1="Our "
          title2="Testimonials"
          description="Glowing testimonials from passionate badminton enthusiasts worldwide, showcasing our exceptional services."
        />
        <div className="slider-container ">
          <Slider {...settings} className=" font-Outfit flex ">
            {/* card 1 */}
            <div className="testimonial-Card p-3">
              <div className=" bg-white p-5 mb-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <StarHalf size={17} fill="#fa0" color="#fa0" />
                  <p className="text-sm font-medium text-gray-400">4.5</p>
                </div>
                <div>
                  <h5 className="text-[#192335] text-[18px] font-bold mb-2">
                    Quality Matters !
                  </h5>
                  <p className="text-[#6b7385]">
                    DreamSports' advanced badminton equipment has greatly
                    improved my performance on the court. Their quality range of
                    rackets and shoes made a significant impact.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img
                  className="mr-3 w-14 h-14 rounded-full border-2 border-gray-300 "
                  src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/profiles/avatar-04.jpg"
                  alt=""
                />
                <div>
                  <h4 className="text-[#192335] font-bold text-lg">John Doe</h4>
                  <p className="bg-[#097e52] text-white inline-block px-2 py-[1px] rounded-full text-sm">
                    Cricket
                  </p>
                </div>
              </div>
            </div>
            {/* card 1 */}
            <div className="testimonial-Card p-3">
              <div className=" bg-white p-5 mb-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <StarHalf size={17} fill="#fa0" color="#fa0" />
                  <p className="text-sm font-medium text-gray-400">4.5</p>
                </div>
                <div>
                  <h5 className="text-[#192335] text-[18px] font-bold mb-2">
                    Quality Matters !
                  </h5>
                  <p className="text-[#6b7385]">
                    DreamSports' advanced badminton equipment has greatly
                    improved my performance on the court. Their quality range of
                    rackets and shoes made a significant impact.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img
                  className="mr-3 w-14 h-14 rounded-full border-2 border-gray-300 "
                  src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/profiles/avatar-04.jpg"
                  alt=""
                />
                <div>
                  <h4 className="text-[#192335] font-bold text-lg">John Doe</h4>
                  <p className="bg-[#097e52] text-white inline-block px-2 py-[1px] rounded-full text-sm">
                    Cricket
                  </p>
                </div>
              </div>
            </div>
            {/* card 1 */}
            <div className="testimonial-Card p-3">
              <div className=" bg-white p-5 mb-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <Star size={17} fill="#fa0" color="#fa0" />
                  <StarHalf size={17} fill="#fa0" color="#fa0" />
                  <p className="text-sm font-medium text-gray-400">4.5</p>
                </div>
                <div>
                  <h5 className="text-[#192335] text-[18px] font-bold mb-2">
                    Quality Matters !
                  </h5>
                  <p className="text-[#6b7385]">
                    DreamSports' advanced badminton equipment has greatly
                    improved my performance on the court. Their quality range of
                    rackets and shoes made a significant impact.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img
                  className="mr-3 w-14 h-14 rounded-full border-2 border-gray-300 "
                  src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/profiles/avatar-04.jpg"
                  alt=""
                />
                <div>
                  <h4 className="text-[#192335] font-bold text-lg">John Doe</h4>
                  <p className="bg-[#097e52] text-white inline-block px-2 py-[1px] rounded-full text-sm">
                    Cricket
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
