import React, { useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  video: string;
  link: string;
}

interface VideoWrapper {
  videoSrc: string;
  children?: ReactNode;
}

const VideoWrapper = ({ videoSrc }: VideoWrapper) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state of opacity
      whileHover={{ opacity: 1 }} // State of opacity while hovering
      className="absolute top-0 left-0 w-full h-full z-10"
      onHoverStart={() => videoRef.current?.play()}
      onHoverEnd={() => videoRef.current?.pause()}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-dark/10" />
      <video muted loop ref={videoRef} className="w-full h-full object-cover">
        <source src={"projects/" + videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  video,
}) => {
  return (
    <motion.a
      href={link}
      aria-label={name + "-link"}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative sm:w-[360px] min-h-[400px] w-full"
    >
      <div
        className="absolute w-full h-full left-1 top-1 -z-10
       bg-white rounded-2xl diagonal-cut-mirrored"
      />

      <div
        className="absolute w-full h-full
      rounded-2xl overflow-hidden diagonal-cut-mirrored "
      >
        <div className="relative p-6 w-full h-full flex flex-col justify-center gap-4 z-10 bg-dark/90">
          <h3 className="text-white">{name}</h3>
          <p className="text-white">{description}</p>
          <div className="mt-4 flex flex-wrap justify-end gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

        <img
          src={"projects/" + image}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <VideoWrapper videoSrc={video} />
      </div>
    </motion.a>
  );
};

export default ProjectCard;
