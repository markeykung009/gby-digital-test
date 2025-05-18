import { useState } from "react";
import profileImage from "../assets/img/profile-1.png";
import iconBell from "../assets/img/icon-bell.png";
import topupimage from "../assets/img/topup.png";
import withdrawimage from "../assets/img/withdraw.png";
import transferimage from "../assets/img/transfer.png";
import TransferList from "./TransferList";
import TransactionList from "./TransactionList";

const Home = () => {
  const mockProfileData = {
    image: profileImage,
    name: "Itunuoluwa Abidoye",
  };

  const [balance] = useState<number>(14235.34);

  // แปลง balance เป็นสตริงแบบมี comma และแยกทศนิยม
  const formatted = balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [mainBalance, decimal] = formatted.split(".");

  return (
    <div className="">
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <img className="w-[70px]" src={mockProfileData.image} alt="" />
          <p className="text-lg ml-2">{mockProfileData.name}</p>
        </div>
        <div className="relative">
          <img src={iconBell} alt="" />
          <div className="alert"></div>
        </div>
      </div>

      <div className="bg-black rounded-xl p-4 text-center text-white">
        <p className="text-sm text-white mb-1 mt-4">Main Balance</p>
        <div className="text-4xl font-bold">
          $<span className="text-4xl">{mainBalance}</span>
          <span className="text-xl align-bottom ml-1">.{decimal}</span>
        </div>
        <div className="flex justify-between items-center bg-black text-white p-4">
          <div className="flex flex-col items-center gap-2">
            <img src={topupimage} alt="" />
            <span className="text-sm">Top up</span>
          </div>

          <div className="w-px h-6 bg-purple-500 mx-4" />

          <div className="flex flex-col items-center gap-2">
            <img src={withdrawimage} alt="" />
            <span className="text-sm">Withdraw</span>
          </div>

          <div className="w-px h-6 bg-purple-500 mx-4" />

          <div className="flex flex-col items-center gap-2">
            <img src={transferimage} alt="" />
            <span className="text-sm">Transfer</span>
          </div>
        </div>
      </div>

      <TransferList />

      <TransactionList />
    </div>
  );
};

export default Home;
