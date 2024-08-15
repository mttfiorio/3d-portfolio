import React, { useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import Card from "../Card";

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
    <Card index={index}>
      <a href={link} aria-label={name + "-link"} className="h-full w-full">
        <div
          className="relative w-full h-full z-10 
        bg-dark/90 
        p-6 rounded-2xl"
        >
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
          alt={name}
          className="absolute top-0 left-0 z-0
          w-full h-full object-cover rounded-2xl"
        />

        <VideoWrapper videoSrc={video} />
      </a>
    </Card>
  );
};

export default ProjectCard;
