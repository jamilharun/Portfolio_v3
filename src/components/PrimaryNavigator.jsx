import { useNavigate } from "react-router-dom";
import symbolLogo from "../assets/symbol_logo.svg";

export default function PrimaryNavigator() {
  const navigation = useNavigate();

  const nav = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Me",
      link: "/home/aboutMe",
    },
    {
      title: "Projects",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <div className="px-10 lg:px-5">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img
            className="mix-blend-difference h-20 lg:h-16"
            src={symbolLogo}
            alt="symbol logo"
          />
          <p
            className=" px-6 bg-gradient-to-r bg-clip-text text-transparent 
          mix-blend-normal from-pal_emerald_green via-pal_baby_blue to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer text-xl font-bold animate-gradient-x 
          bg-[length:200%_200%]"
          >
            Portfolio
          </p>
        </div>
        <div
          className="flex items-center justify-between  
        text-white text-xl font-semibold divide-x-2 "
        >
          {nav.map((list, index) => (
            <div
              key={index}
              onClick={() => {
                navigation(list.link);
              }}
              className="mix-blend-difference lg:text-lg px-6 hover:bg-gradient-to-r bg-clip-text 
              hover:text-transparent hover:mix-blend-normal hover:from-pal_emerald_green 
              hover:via-pal_baby_blue hover:to-pal_neon_purple duration-300 ease-linear 
              cursor-pointer animate-gradient-x bg-[length:200%_200%]"
            >
              <p>{list.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
