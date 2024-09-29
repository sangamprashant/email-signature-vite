import { useAppContext } from "../../../../../context";
import { ImageProps } from "../../../../../types";

const Image = () => {
  const { design } = useAppContext();
  const { images } = design

  const handleShape = (t:ImageProps) => {
    switch (t) {
      case 'circle':
        return "rounded-full";
      case 'rounded':
        return "rounded-lg";
      default:
        return "";
    }
  }

  return (
    <div className={`flex flex-col gap-2 justify-${design.images.position}`}>
      {design.images.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Placeholder"
          className={handleShape(images.shape)}
          width={design.images.size}
        />
      ))}
    </div>
  );
};

export default Image;
