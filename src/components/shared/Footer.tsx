import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import playstore from "../../assets/images/footer/google-icon.svg";
import appstore from "../../assets/images/footer/icon-apple.svg";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0a1a38] font-Outfit text-white pt-20">
        <div className="text-center mb-14">
          <h3 className="text-3xl font-bold">
            {" "}
            We Welcome Your Passion And Expertise
          </h3>
          <p className="text-lg mt-3 text-gray-300">
            Join our empowering sports community today and grow with us.
          </p>
          <Button className="mt-4 bg-gradient px-8 py-4">Join with us</Button>
        </div>
        <div className="pt-8 border-t border-[#1d3563] mx-auto max-w-7xl flex justify-between">
          <div>
            <h5 className="text-lg font-bold">Contact Us</h5>
            <p className="mt-6">
              <span className="text-gray-500">Toll free Customer Care</span>
              <span className="block ">+017 123 456 78</span>
            </p>
            <p className="mt-5">
              <span className="text-gray-500">Need Live Support</span>
              <span className="block ">support@example.com</span>
            </p>
            <div className="flex gap-4 mt-5 justify-between">
              <Link to={""}>
                <Facebook size={20} />
              </Link>
              <Link to={""}>
                <Twitter size={20} />
              </Link>
              <Link to={""}>
                <Instagram size={20} />
              </Link>
              <Link to={""}>
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-gray-500">
                <Link to={""}>About Us</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Contact Us</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Terms & Conditions</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Company</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-gray-500">
                <Link to={""}>Our Team</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Careers</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Blog</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Other Links</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-gray-500">
                <Link to={""}>About Us</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Contact Us</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Terms & Conditions</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Our Locations</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-gray-500">
                <Link to={""}>Dhaka</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Chittagong</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Sylhet</Link>
              </li>
              <li className="text-gray-500">
                <Link to={""}>Rajshahi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-6">Download</h5>
            <img src={playstore} alt="" />
            <img className="mt-4" src={appstore} alt="" />
          </div>
        </div>
        <div className="mt-12  text-center border-t border-[#1d3563] py-6">
          <p className="text-gray-500">
            © 2024 Book My Play - All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
