// import { accounts } from "../preDatasets/data";
import myimage from "../assets/symbol_logo.svg";
// import { Resume } from "../assets/files/files";

export default function QuickIntro() {
  // const downloadPDF = () => {
  //   console.log("downloading Resume");

  //   const link = document.createElement("a");
  //   link.href = Resume;
  //   link.download = "JHLResume.pdf";
  //   link.click();
  // };

  return (
    <div className="flex justify-center mt-10 h-screen mx-auto">
      <div className="flex justify-center items-center ">
        <img
          src={myimage}
          alt="my pic"
          className=" size-60 bg-pal_emerald_green rounded-full object-cover"
        />
        <div className=" px-10 text-center w-1/2">
          <h1 className="text-4xl capitalize ">
            hi, Im
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r 
                  before:from-pink-500 before:via-pal_baby_blue before:to-violet-500 before:rounded-xl 
                  before:px-5 relative inline-block before:animate-gradient-x before:bg-[length:200%_200%]"
            >
              <span className="relative text-white">Jamil Harun</span>
            </span>
          </h1>
          <p className="text-xl text-justify">
            I transitioned from being a digital artist to a Full Stack Developer
            after earning my Computer Science degree. I developed a passion for
            solving challenging and real-life problems through programming,
            driven by the desire to create systems and applications that benefit
            others. I believe development extends beyond computers to real-world
            impact and enjoy exploring new technologies to innovate meaningful
            solutions.
            {/* i used to be a digital artist now after i graduated computer
            science, now im a{" "}
            <span className="text-2xl font-medium">full stack Developre</span>,
            when learning programming discovered a particulr interest in solving
            hard problems and also{" "}
            <span className="text-2xl font-medium">real life problems</span>
            . giving me the interest on how can i help and benefit other people.
            i believe that the process of developing a system can application to
            real life. not just in the computer.
            <br />i amalso interested in new texhnologies in programming
            wondering what system or app can i make with this */}
          </p>

          {/* <div className="flex mt-20 gap-3">
            {accounts.map((acc, index) => {
              return (
                <a key={index} href={acc.link}>
                  <img src={acc.img} alt={acc.name} className="size-10" />
                </a>
              );
            })}
            <div
              onClick={() => {
                downloadPDF;
              }}
              className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-violet-500 
                  hover:to-fuchsia-500 hover:animate-gradient-x hover:bg-[length:200%_200%] transition rounded-xl ease-linear duration-300"
            >
              <div className="bg-gradient-to-r from-purple-800 to-pink-300 bg-clip-text text-transparent ">
                <h1 className="text-2xl font-medium px-5 ">Download Resume</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="w-2/5 flex justify-center items-center">
        <img src={life} alt="" />
      </div> */}
    </div>
  );
}
