// import { motion } from "framer-motion";
// function Skill() {
//   return (
//     <>
//       <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair">
//         {" "}
//         Skills
//       </p>
//       <p className="font-thin text-center text-xl md:text-2xl p-5 text-white">
//         The skill, tools and technology I use:
//       </p>
//       <div className="flex flex-wrap gap-5 overflow-visible justify-center ">
//         {[
//           { id: 1, class: "fa-brands fa-cuttlefish", color: "#A8B9CC" },
//           { id: 2, class: "fa-brands fa-java", color: "#007396" },
//           { id: 3, class: "fa-solid fa-k", color: "#0095D5" },
//           { id: 4, class: "fa-brands fa-html5", color: "#E34F26" },
//           { id: 5, class: "fa-brands fa-css3-alt", color: "#1572B6" },
//           { id: 6, class: "fa-solid fa-database", color: "#003B57" },
//           { id: 9, class: "fa-brands fa-android", color: "#3DDC84" },
//           { id: 12, class: "fa-brands fa-git", color: "#F05032" },
//           { id: 13, class: "fa-brands fa-github", color: "#FFFFFF" },
//           { id: 18, class: "fa-brands fa-windows", color: "#0078D6" }, // Windows
//           { id: 19, class: "fa-brands fa-apple", color: "#A2AAAD" }, // MacOS
//           { id: 20, class: "fa-brands fa-linux", color: "#FCC624" }, // Linux
//         ].map((skill, index) => (
//           <motion.div
//             key={skill.id}
//             className={`${skill.class} text-3xl md:text-6xl md:m-2  `}
//             style={{ color: skill.color }}
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: false, amount: 0.1 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
// export default Skill;
import { motion } from "framer-motion";
import {
  FaCuttlefish,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
  FaPlug,
  FaObjectGroup,
  FaGit,
  FaGithub,
  FaWindows,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { SiKotlin ,SiFirebase,SiMysql,SiGooglecloud} from "react-icons/si";

function Skill() {
  const skills = [
    { id: 1, icon: <FaCuttlefish />, color: "#A8B9CC" },
    { id: 2, icon: <FaJava />, color: "#007396" },
    { id: 3, icon: <SiKotlin />, color: "#0095D5" },
    { id: 4, icon: <FaHtml5 />, color: "#E34F26" },
    { id: 5, icon: <FaCss3Alt />, color: "#1572B6" },
    { id: 6, icon: <SiMysql />, color: "#003B57" },
    { id: 7, icon: <SiFirebase />, color: "#FFCA28" }, 
    { id: 10, icon: <FaPlug />, color: "#020090" }, 
    { id: 11, icon: <FaObjectGroup />, color: "#003000" }, 
    { id: 12, icon: <FaGit />, color: "#F05032" },
    { id: 13, icon: <FaGithub />, color: "#FFFFFF" },
    { id: 16, icon: <SiGooglecloud />, color: "#4285F4" }, 
    { id: 18, icon: <FaWindows />, color: "#0078D6" }, // Windows
    { id: 19, icon: <FaApple />, color: "#A2AAAD" }, // MacOS
    { id: 20, icon: <FaLinux />, color: "#FCC624" }, // Linux
    { id: 21, icon: <FaAndroid />, color: "#3DDC84" }, // Android OS
  ];

  return (
    <>
      <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500 text-center font-playfair">
        Skills
      </p>
      <p className="font-thin text-center text-xl md:text-2xl p-5 text-white">
        The skill, tools and technology I use:
      </p>
      <div className="flex flex-wrap gap-5 overflow-visible justify-center max-w-4xl self-center mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="text-3xl md:text-6xl md:m-2"
            style={{ color: skill.color }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Skill;
