import TopupLogo from "../assets/img/Topuplogo.png";
import WallmartLogo from "../assets/img/Wallmart.png";
import ArrowRight from "../assets/img/arrow-right.png";
import NetflixLogo from "../assets/img/Netflix.png";

const TransactionList = () => {
  const MockTrasactionList = [
    {
      logo: WallmartLogo,
      title: "Walmart",
      time: "Today 12:32",
      balance: "-$35.23",
      isDecrease: true,
    },
    {
      logo: TopupLogo,
      title: "Top up",
      time: "Yesterday 02:12",
      balance: "+$430.00",
      isDecrease: false,
    },
    {
      logo: NetflixLogo,
      title: "Netflix",
      time: "Dec 24 13:53",
      balance: "-$13.00",
      isDecrease: true,
    },
  ];

  return (
    <div className="rounded-lg pb-24">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold mb-2">Lastest Transaction</p>
        <span className="text-xs text-neutral-600">View all</span>
      </div>
      {MockTrasactionList.map((el, idx) => {
        return (
          <div className="my-6 " key={idx}>
            <div className="flex gap-2 items-center justify-between overflow-y-auto">
              <div className="flex items-center gap-2">
                <img className="w-[32px] h-[32px]" src={el.logo} alt="" />
                <div className="flex flex-col">
                  <span className="text-sm">{el.title}</span>
                  <span className="text-sm text-gray-500">{el.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={` ${
                    el.isDecrease ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {el.balance}
                </span>
                <img className="w-6 h-6" src={ArrowRight} alt="ArrowRight" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
