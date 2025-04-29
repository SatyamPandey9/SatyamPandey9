import { motion } from "framer-motion";

const projects = [
  {
    id: "2",
    title: "TripMM App",
    search: "android",
    description:"Built TripMM App to simplify group trip expenses by managing participants, tracking contributions, and automatically calculating fair cost splits for transparent and hassle-free trips.",
    techStack: " Kotlin, Firebase, XML, RecyclerView, Android Studio, MVVM",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1745875445/trim_ip1zjq.png",
   
  },
  {
    id: "3",
    title: "Camera Capture App",
    search: "android",
    description:
      "An Android app that captures photos with the device camera and tags them with the user's real-time location. The captured image is displayed along with the current address.",
    techStack:
      "Java, Google Maps API, Geocoder, Camera Integration, Location Tracking",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1745875444/WhatsApp_Image_2025-04-28_at_23.43.58_bymkzd.jpg",
    
  },
  {
    id: "4",
    title: "DriverRidey App",
    search: "android",
    description:
      "A mobile app that connects car owners with professional drivers for temporary trips. It simplifies finding on-demand drivers and provides new income opportunities for drivers.",
    techStack: "Java, Google Maps API, RoomDatabase, MySQL, Git/GitHub",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1745875443/WhatsApp_Image_2025-04-28_at_23.40.25_aawgge.jpg",

  },
];

function ProjectG({ result }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:p-16 py-4 ">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="w-full rounded-lg overflow-hidden shadow-sm hover:shadow-yellow-500 bg-black border border-gray-800"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={project.img}
            alt={project.title}
            className="h-64 object-cover"
          />
          <div className="flex flex-col items-center justify-center bg-yellow-500/5  text-white p-5">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center my-3">
              {project.techStack.split(",").map((tech, index) => (
                <button
                  key={index}
                  className="border border-yellow-500/80 px-3 py-1 text-sm hover:bg-yellow-500/30 cursor-default rounded"
                >
                  {tech.trim()}
                </button>
              ))}
            </div>
         
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectG;
