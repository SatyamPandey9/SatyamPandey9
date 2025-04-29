export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-black p-10">
      <div className="flex justify-between md:p-10 flex-col md:flex-row">
        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-1 items-center text-2xl md:text-4xl font-playfair uppercase font-bold">
            <p className="text-white">Satyam </p>
            <p className="text-yellow-500 "> Pandey</p>
          </div>
          <p className="text-md text-gray-400">
            {" "}
            Crafting modern Android apps for real-world impact
          </p>
        </div>
        <div className="flex text-wrap gap-2 md:justify-center items-center text-white p-3 ">
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://www.linkedin.com/in/satyam-pandey-237384256/"
            style={{ backgroundColor: "#0A66C2" }}
          >
            <i className="fa-brands fa-linkedin  text-2xl md:text-3xl "></i>
          </a>
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://github.com/SatyamPandey9"
            style={{ backgroundColor: "#181717" }}
          >
            <i className="fa-brands fa-github text-2xl md:text-3xl hover:bg-black"></i>
          </a>
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://instagram.com/__satyampandit__"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <i className="fa-brands fa-instagram text-2xl md:text-3xl "></i>
          </a>
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://x.com/satyampandey70"
            style={{ backgroundColor: "#000000" }}
          >
            <i className="fa-brands fa-twitter text-2xl md:text-3xl "></i>
          </a>
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://www.youtube.com/@SatyamPandey03"
            style={{ backgroundColor: "#FF0000" }}
          >
            <i className="fa-brands fa-youtube text-2xl md:text-3xl  "></i>
          </a>
          <a
            className="px-2 py-1 md:px-3 md:py-2 rounded-full hover:scale-110 duration-100"
            href="https://discordapp.com/users/1276043856399302677"
            style={{ backgroundColor: "#36393F" }}
          >
            <i className="fa-brands fa-discord text-2xl md:text-3xl  "></i>
          </a>
        </div>
      </div>
      <div className=" flex justify-center py-5 md:mx-10 border-t-2 border-gray-400">
        <span className=" md:text-xl  lg:text-xl text-gray-400">
          Built with passion for Android. © {currentYear} Satyam Pandey. All
          rights reserved.
        </span>
      </div>
    </div>
  );
}
