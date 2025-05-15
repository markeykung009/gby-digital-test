import avatarone from "../assets/img/avatar-1.png"
import avatartwo from "../assets/img/avatar-2.png"
import avatarthree from "../assets/img/avatar-3.png"
import avatarfour from "../assets/img/avatar-4.png"

type TransferUser = {
  name: string;
  avatar: string;
};

const TransferList = () => {
  const recentTransfers: TransferUser[] = [
    { name: "Ali", avatar: avatarone },
    { name: "Steve", avatar: avatartwo },
    { name: "Ahmed", avatar: avatarthree },
    { name: "Mary", avatar: avatarfour },
    { name: "Mary", avatar: avatarfour },

  ];

  return (
    <div className="my-10  rounded-lg">
      <p className="text-sm font-semibold mb-2">Recent Transfers</p>
      <div className="flex gap-4 overflow-x-auto">
        {/* Add Button */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl text-purple-600">
            +
          </div>
          <span className="text-xs mt-1">Add</span>
        </div>

        {/* User List */}
        {recentTransfers.map((user, index) => (
          <div key={index} className="flex flex-none flex-col items-center flex-nowrap">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <span className="text-xs mt-1">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransferList;
