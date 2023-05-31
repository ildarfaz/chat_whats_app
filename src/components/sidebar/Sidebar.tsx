import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const Sidebar = () => {
  interface IUser {
    name: string;
    phone: string;
    lastMessage: string;
    lastDate: string
  }
  const users = [
    {
      phone: "+7 9834323242",
      name: "Ильдар",
      lastMessage: "привет делай быстрее",
      lastDate: "20.04.2023",
    },
    {
      phone: "+7 9834323242",
      name: "Татьяна",
      lastMessage: "Привет делай быстрее",
      lastDate: "20.04.2023",
    },
    {
      phone: "+7 9834323242",
      name: "Татьяна",
      lastMessage: "привет делай быстрее",
      lastDate: "20.04.2023",
    },
    {
      phone: "+7 9834323242",
      name: "Татьяна",
      lastMessage: "привет делай быстрее",
      lastDate: "20.04.2023",
    },
    {
      phone: "+7 9834323242",
      name: "Татьяна",
      lastMessage: "привет делай быстрее",
      lastDate: "20.04.2023",
    },
    {
      phone: "+7 9834323242",
      name: "Татьяна",
      lastMessage: "привет делай быстрее",
      lastDate: "20.04.2023",
    },




  ];
  const User = ({
    name = "",
    phone = "",
    lastMessage = "",
    lastDate = ""
  }: IUser) => {
    return (
      <div className="flex py-2 px-3 gap-2">
        <Avatar sx={{ bgcolor: "orangered" }}>{name[0]}</Avatar>
        <div>
          <Typography>{phone}</Typography>
          <Typography>{lastMessage}</Typography>
        </div>
        <Typography>{lastDate}</Typography>
      </div>
    );
  };
  const Users = () => {
    return (
      <div className="overflow-y-scroll max-h-screen scroll-m-8">
        {users.map((user: IUser, index) => {
          return (
            <User
            {...user}
            key={index}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className=" bg-sky-200">
      <Users />
    </div>
  );
};
