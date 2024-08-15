import React, { useContext, useState } from "react";
import Card from "../Card";
import { ModalContext } from "../Modal/ModalContext";

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

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  video,
}) => {
  const context = useContext(ModalContext);
  const [isHovered, setIsHovered] = useState(false);

  if (!context) {
    throw new Error("Modal must be used within a ModalProvider");
  }

  const { isModalOpen, setIsModalOpen } = context;

  return (
    <Card
      index={index}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      className="w-full min-h-[450px]"
    >
      <button className="h-full w-full" onClick={() => setIsModalOpen(true)}>
        <div
          className="relative w-full h-full z-10 
        bg-dark/90 
        p-12 md:p-6 rounded-2xl
        flex flex-col justify-center"
        >
          <h3 className="text-white">{name}</h3>
          <p className="text-white">{description}</p>
        </div>

        <div
          className="absolute bottom-0 right-0 z-10
         m-4 flex flex-wrap justify-end gap-2"
        >
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div
          className={`absolute top-0 left-0 z-0 w-full h-full rounded-2xl overflow-hidden`}
        >
          <img
            src={"projects/" + image}
            alt={name}
            className={`w-full h-full object-cover ${
              isHovered
                ? "transform transition-transform duration-300 scale-125"
                : ""
            }`}
          />
        </div>
      </button>
    </Card>
  );
};

export default ProjectCard;
