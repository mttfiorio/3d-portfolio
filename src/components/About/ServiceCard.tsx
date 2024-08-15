import React from "react";
import Card from "../Card";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Card index={index}>
    <div className="flex flex-col items-center justify-center bg-dark rounded-2xl p-8">
      <img
        src={"about/" + icon}
        loading="lazy"
        alt={title}
        className="w-36 h-36 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </Card>
);

export default ServiceCard;
