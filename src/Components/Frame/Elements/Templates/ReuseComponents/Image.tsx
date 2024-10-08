import { useAppContext } from "../../../../../context";
import { ImageProps } from "../../../../../types";

const Image = () => {
  const { design } = useAppContext();
  const { images } = design.design;

  const handleShape = (t: ImageProps) => {
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
    <div className={`flex flex-col gap-2 justify-${design.design.images.position}`}>
      {design.design.images.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Placeholder"
          className={handleShape(images.shape)}
          width={design.design.images.size}
        />
      ))}
    </div>
  );
};

export default Image;
