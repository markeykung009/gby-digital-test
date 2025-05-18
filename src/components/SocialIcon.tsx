import { Globe, User } from "lucide-react";
type SocialIconProps = {
  isActive: boolean;
};

const SocialIcon = ({ isActive }: SocialIconProps) => {
  return (
    <div className="relative w-7 h-7">
      <Globe
        className={`w-9 h-9 ${isActive ? "text-[#0dbdbd]" : "text-gray-500"} `}
      />
      <User
        className={`w-4 h-4 absolute -bottom-2 -right-2 ${
          isActive ? "text-[#0dbdbd]" : "text-gray-500"
        } bg-white rounded-full`}
      />
    </div>
  );
};

export default SocialIcon;
