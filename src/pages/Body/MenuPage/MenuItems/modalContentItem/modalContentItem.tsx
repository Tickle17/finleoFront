import React from "react";

interface ModalContentItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    img: string;
    price: string;
  };
}

const ModalContentItem: React.FC<ModalContentItemProps> = (props) => {
  const { title, description, price, img } = props.item;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
      <img src={img} alt="" />
    </div>
  );
};

export default ModalContentItem;
