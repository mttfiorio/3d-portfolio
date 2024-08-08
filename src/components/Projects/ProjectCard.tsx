import React, { useRef, useEffect, useState, ReactNode } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { github } from "../../assets";

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
  source_code_link: string;
}

interface VideoWrapper {
  videoSrc: string;
  children: ReactNode;
}

const VideoWrapper = ({ videoSrc, children }: VideoWrapper) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.8,
    });
    videoRef.current && observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black/80">{children}</div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  video,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={-20}
        tiltMaxAngleY={-20}
        scale={1}
        transitionSpeed={450}
        className="sm:w-[360px] w-full diagonal-cut-mirrored"
      >
        <VideoWrapper videoSrc={video}>
          <div className="p-6 flex flex-col gap-4">
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
        </VideoWrapper>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
