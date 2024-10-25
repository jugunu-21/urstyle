import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillInstagram /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto py-[10rem]">
          {/* Footer container */}
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            {/* Logo and Description */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={"https://i.imgur.com/520zDfd.png"}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                Discover the latest trends and curated fashion collections with UrStyle. Elevate your wardrobe with our handpicked styles and exclusive affiliate offers.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} UrStyle <br />
                Design by Jugunu Singh
              </p>
            </div>

            {/* Featured Collections */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Collections</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Trending Styles
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Seasonal Picks
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                New Arrivals
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Best Sellers
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Limited Editions
              </p>
            </div>

            {/* Customer Support */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Customer Support</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] text-[#646464] font-medium">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                Sat: 10:00 AM - 4:00 PM
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                Sun: Closed
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                <a href="mailto:support@urstyle.com" className="hover:text-[#ff0366]">support@urstyle.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
