import { useState } from "react";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  const [isActive, setIsActive] = useState(0);

  const icons = [
    {
      name: FaHouse,
      title: "Home",
    },
    {
      name: IoBookOutline,
      title: "Course",
    },
    {
      name: SiApplemusic,
      title: "HitSong",
    },
    {
      name: SocialIcon,
      title: "Social",
    },
    {
      name: FaUser,
      title: "Profile",
    },
  ];

  const setActive = (index: number) => {
    setIsActive(index);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-[1.5rem] rounded-b-xl">
      <div className="flex items-center justify-around">
        {icons.map((IconComponent, idx) => {
          return (
            <div
              className="flex flex-col  justify-center items-center gap-2"
              key={idx}
              onClick={() => setActive(idx)}
            >
              <IconComponent.name
                className={`${
                  idx === isActive ? "text-[#0dbdbd]" : "text-gray-500"
                } w-7 h-7`}
                isActive={idx === isActive ? true : false}
              />
              <p
                className={`text-sm ${
                  idx === isActive ? "text-[#0dbdbd]" : "text-gray-500"
                }`}
              >
                {IconComponent.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
