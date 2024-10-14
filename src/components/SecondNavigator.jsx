export default function SecondNavigator() {
  return (
    <div className="fixed right-0 top-0 w-96 h-screen bg-pal_dark_gray-300">
      <div className="p-16 pt-48 text-pal_dark_gray-100 flex flex-col justify-between">
        <div className=" before:relative text-4xl opacity-50 inline-block mb-32 [&:nth-child(1)]:before:content-['sitemap'] [&:nth-child(2)]:before:content-['Featured Works'] [&:nth-child(3)]:before:content-['Follow us']">
          <div className=" w-fit opacity-50 relative before:content-['01'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">Home</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['02'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">About Me</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['03'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">Projects</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['04'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">Contact</a>
          </div>
        </div>
        <div className=" before:relative text-4xl opacity-50 inline-block mb-32 [&:nth-child(1)]:before:content-['sitemap'] [&:nth-child(2)]:before:content-['Featured Works'] [&:nth-child(3)]:before:content-['Follow us']">
          <div className=" w-fit opacity-50 relative before:content-['01'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">Lorem.</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['02'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">ipsum.</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['03'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">dolor.</a>
          </div>
          <div className=" w-fit opacity-50 relative before:content-['04'] before:right-8 hover:opacity-100 duration-75 ease-in">
            <a href="/">sit.</a>
          </div>
        </div>

        <div className="menu_close">
          <p className="menu_close_item">&#10005;</p>
        </div>
      </div>
    </div>
  );
}
