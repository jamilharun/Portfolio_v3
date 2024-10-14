import symbolLogo from "../assets/symbol_logo.svg";

export default function PrimaryNavigator() {
  return (
    <div className="px-10">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img
            className="mix-blend-difference h-20"
            src={symbolLogo}
            alt="symbol logo"
          />
          <p
            className=" px-6 bg-gradient-to-r bg-clip-text text-transparent 
          mix-blend-normal from-pal_emerald_green via-pal_baby_blue to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer text-xl font-bold animate-gradient-x bg-[length:200%_200%]"
          >
            Portfolio
          </p>
        </div>
        <div className="flex items-center justify-between  text-white text-xl font-semibold divide-x-2 ">
          <div
            className="mix-blend-difference px-6 hover:bg-gradient-to-r bg-clip-text hover:text-transparent 
          hover:mix-blend-normal hover:from-pal_emerald_green hover:via-pal_baby_blue hover:to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
          >
            <p>Home</p>
          </div>
          <div
            className="mix-blend-difference px-6 hover:bg-gradient-to-r bg-clip-text hover:text-transparent 
          hover:mix-blend-normal hover:from-pal_emerald_green hover:via-pal_baby_blue hover:to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
          >
            <p>About me</p>
          </div>
          <div
            className="mix-blend-difference px-6 hover:bg-gradient-to-r bg-clip-text hover:text-transparent 
          hover:mix-blend-normal hover:from-pal_emerald_green hover:via-pal_baby_blue hover:to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
          >
            <p>Projects</p>
          </div>
          <div
            className="mix-blend-difference px-6 hover:bg-gradient-to-r bg-clip-text hover:text-transparent 
          hover:mix-blend-normal hover:from-pal_emerald_green hover:via-pal_baby_blue hover:to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
          >
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}
