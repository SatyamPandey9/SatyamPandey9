import Skill from "./Skill";
import ContactForm from "./Cf";
import ProjectG from "./ProjectG";
import myPhoto from "../img/Satyam.jpeg";
import { Helmet } from "react-helmet";

export default function Header() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div id="home">
      <Helmet>
        <title>Satyam Pandey | Android Application Developer</title>
        <meta
          name="description"
          content="Satyam Pandey - App Developer specializing in Android, Java, Kotlin, and SQL. Explore my portfolio featuring cutting-edge mobile and web applications."
        ></meta>
        <meta
          name="keywords"
          content="Satyam Pandey, App Developer, Android Developer, Java Developer, Kotlin Developer, SQL Expert, Mobile App Development, Android Apps, Software Engineer, App Portfolio"
        />

        <meta name="author" content="Satyam Pandey" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Satyam Pandey | Android Application Developer"
        />
        <meta
          property="og:description"
          content="Professional portfolio showcasing web development projects and technical expertise"
        />
        <meta
          property="og:image"
          content="https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg"
        />
        <meta property="og:url" content="https://anju-narnolia.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Satyam Pandey | Android Application Developer"
        />
        <meta
          name="twitter:description"
          content="Professional portfolio showcasing App development projects and technical expertise"
        />
        <meta
          name="twitter:image"
          content="https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Satyam Pandey",
              "jobTitle": "Android Application Developer",
              "url": "https://anju-narnolia.netlify.app",
              "sameAs": [
                "https://www.linkedin.com/in/satyam-pandey-237384256/",
                "https://github.com/SatyamPandey9",
                "https://twitter.com/AnjuNarnolia"
              ],
              "image": "https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg",
              "description": "Android Application Developer specializing in Android, Java, Kotlin, and SQL"
            }
          `}
        </script>
      </Helmet>
      <section className="h-[100vh] flex items-center relative md:pt-24 bg-[#0E0E0E] p-5">
        <div className="absolute right-0 top-1/4 w-1/2 h-px bg-yellow-500/30"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-px bg-yellow-500/30"></div>
        <div className="absolute right-10 top-1/3 w-px h-1/3 bg-yellow-500/30"></div>

        <div className="container mx-auto px-4 py-20 md:py-0">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl  lg:text-7xl font-bold mb-4 font-playfair">
              <span className="text-white">Hello, I'm </span>
              <span className="text-yellow-500">Satyam Pandey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Android Application Developer
            </p>
            <p className="text-gray-400 mb-10 text-lg">
              I don’t just build Android apps—I design smart, scalable journeys
              in code. Blending logic with design, I turn ideas into interactive
              mobile realities.
            </p>
            <div className="flex flex-wrap gap-4 font-bold">
              <p onClick={() => scrollToSection("project")}>
                <button className=" bg-yellow-500 md:py-4 md:px-8 px-4 py-2 hover:shadow-yellow-500 shadow-[0_0_10px_2px] rounded-lg">
                  View My Work
                </button>
              </p>
              <p
                onClick={() => scrollToSection("contact")}
                className="text-yellow-500 border-yellow-500/30 border md:py-4 md:px-8 px-4 py-2 rounded-lg hover:shadow-[0_0_10px_2px] shadow-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
              >
                Contact Me
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About me */}
      <div className="p-5 md:p-20" id="about">
        <div className="flex justify-center gap-16 flex-col md:flex-row">
          <div className="w-full flex justify-center md:w-1/2 p-5">
            <div className="relative">
              <div className="md:w-96 md:h-96 w-60 h-60 rounded-full overflow-hidden border-4 border-yellow-500 animate-fade-in">
                <img src={myPhoto} alt="me" />
              </div>
              <div className="absolute top-0 md:w-96 md:h-96 w-60 h-60 rounded-full border border-yellow-500 animate-glow"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:p-5 text-white text-sm md:text-[20px] flex flex-col gap-4 font-light ">
            <div className="text-2xl md:text-4xl font-extrabold uppercase flex gap-2 font-playfair">
              <p className="text-white">About</p>
              <p className="text-yellow-500">Me</p>
            </div>
            <p>
              I’m a passionate Software Development Engineer and Android
              Developer who loves building smart, high-performance applications
              that solve real-world problems. With strong hands-on experience in
              Java, Kotlin, SQL, and Android frameworks, I specialize in
              developing scalable mobile apps using clean architecture and
              modern tools like MVVM, Retrofit, Firebase, and Jetpack.
            </p>{" "}
            <p className="text-gray-400">
              Beyond mobile development, I actively explore backend systems,
              APIs, and database management—including writing optimized SQL
              queries and designing efficient data flows—bridging the gap
              between mobile and full-stack development. Whether it's creating a
              GPS-enabled ride tracking app or architecting a complete user
              flow, I strive to build products that are functional, elegant, and
              user-friendly.
            </p>
            <p className="text-gray-400">
              Currently pursuing my B.Tech, I'm driven by curiosity, innovation,
              and a desire to turn ideas into impactful digital experiences.
            </p>
            <div className="flex font-bold text-black font-playfair">
              <a
              target="blank"
                href="https://drive.google.com/file/d/1v7h8Cs2aK2KTEnQKbOY8PIDpDp5Y3LOu/view?usp=sharing"
                className=" bg-yellow-400 p-3 hover:bg-yellow-500 hover:shadow-yellow-500 shadow-[0_0_5px_2px] rounded-lg"
              >
                <p className="fa-solid fa-file-invoice p-1"></p>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* marque*/}
      <div className="marquee  text-white w-full text-xl lg:text-3xl font-bold flex my-5 ">
        <a href="#contact" className="mx-4 cursor-pointer">
          🚀 Open to Work!{" "}
        </a>
        <span> ⭐⭐</span>
        <a href="#contact" className="mx-4 cursor-pointer">
          {" "}
          Looking for Exciting Projects!{" "}
        </a>
        <span> ⭐⭐</span>
        <a href="#contact" className="mx-4 cursor-pointer">
          {" "}
          Let’s Collaborate! 🚀
        </a>
      </div>

      {/* skills */}
      <div className="p-10 pb-11 items-center" id="skill">
        <Skill />
      </div>

      {/* my Expertise */}
      <div className=" md:p-20 py-10 bg-[#0E0E0E]" id="expertise">
        <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair">
          My Expertise
        </p>
        <div className="flex flex-col text-white px-14 md:w-10/12 justify-center">
          <div className="flex flex-col justify-start md:w-3/5 p-5 rounded-md mx-5 mt-5 border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-mobile-screen-button text-3xl rounded-md text-yellow-500"></i>
              <p className="font-bold text-xl justify-center font-playfair">
                Android App Development
              </p>
            </div>
            <span>
              I develop high-performance Android applications using Java and
              Kotlin. From idea to deployment, I build apps that are fast,
              functional, and user-friendly.
            </span>
          </div>

          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>

          <div className="flex flex-col md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-database text-3xl rounded-md text-yellow-500"></i>
              <p className="font-bold text-xl font-playfair">
                Database Integration
              </p>
            </div>
            <span>
              I integrate reliable databases like SQLite and MySQL into mobile
              apps. This ensures your app securely stores and retrieves data as
              needed.
            </span>
          </div>

          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>

          <div className="p-5 mx-5 rounded-md md:w-3/5 border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-code-branch text-3xl text-yellow-500 rounded-md"></i>
              <p className="font-bold text-xl font-playfair">API Integration</p>
            </div>
            <span>
              I connect mobile apps with external services through REST APIs,
              enabling real-time data exchange, user authentication, and
              seamless app functionality.
            </span>
          </div>

          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>

          <div className="md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white flex flex-col">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-bug text-3xl rounded-md text-yellow-500"></i>
              <p className="font-bold text-xl font-playfair">
                App Testing & Debugging
              </p>
            </div>
            <span>
              I ensure app stability and performance through rigorous testing
              and debugging. Every app I deliver is optimized for smooth
              performance and error-free user experience.
            </span>
          </div>

          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>

          <div className="p-5 mx-5 rounded-md md:w-3/5 border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-cubes text-3xl text-yellow-500 rounded-md"></i>
              <p className="font-bold text-xl font-playfair">Jetpack</p>
            </div>
            <span>
              I build modern Android apps using Jetpack components like
              Navigation, LiveData, ViewModel, and Room to create robust,
              maintainable, and scalable applications.
            </span>
          </div>

          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>

          <div className="md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white flex flex-col">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-spinner text-3xl rounded-md text-yellow-500"></i>
              <p className="font-bold text-xl font-playfair">
              Coroutines
              </p>
            </div>
            <span>
              I simplify asynchronous programming in Android using Kotlin
              Coroutines, ensuring smooth background operations without blocking
              the user interface.
            </span>
          </div>
        </div>
      </div>

      {/* project */}
      <div id="project" className="p-5">
        <div className="px-5 py-14 text-center flex  flex-col items-center ">
          <h1 className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
            My Projects
          </h1>

          <span className="text-gray-300 max-w-2xl text-center">
            Take a look at some of my projects — each one tells a story of
            creativity, challenges, and smart solutions.
          </span>
        </div>
        <ProjectG />
      </div>

      {/* Contact me */}
      <div className="bg-[#0E0E0E] py-20 px-8" id="contact">
        <div className="items-center flex  flex-col gap-8">
          <p className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
            Get In Touch
          </p>
          <span className="text-gray-300 max-w-2xl text-center">
            <p>
              I'm available for freelance projects and full-time roles as a
              mobile app developer. If you're looking to create a powerful and
              user-friendly Android app, I'd be excited to work with you!
            </p>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5">
              <p className="text-2xl md:text-4xl text-yellow-500  font-bold font-playfair">
                Contact Information
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-envelope text-yellow-500 p-10"></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl">Email: </p>
                  <a
                    href="mailto:ssatyampandey03@gmail.com"
                    className="text-gray-400 hover:text-yellow-500 "
                  >
                    ssatyampandey03@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-phone-volume text-yellow-500 "></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl"> Phone: </p>
                  <a
                    href="tel:+918922827029"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    +91 8922827029
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-location-dot text-yellow-500"></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl">Address: </p>
                  <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p className="text-2xl md:text-4xl text-white  font-bold font-playfair">
                Contact With Me
              </p>
              <div className="flex flex-wrap md:space-x-6 gap-3  mt-6 text-2xl text-yellow-500">
                <a href="https://www.linkedin.com/in/satyam-pandey-237384256/">
                  <i className="fa-brands fa-linkedin cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 p"></i>
                </a>
                <a href="https://github.com/SatyamPandey9">
                  <i className="fa-brands fa-github cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"></i>
                </a>
                <a href="https://www.instagram.com/__satyampandit__">
                  <i className="fa-brands fa-instagram cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"></i>
                </a>
                <a href="mailto:ssatyampandey03@gmail.com">
                  <i className="fa-solid fa-envelope cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 "></i>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
