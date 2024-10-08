import { Link } from 'react-router-dom';
import { useAppContext } from '../../../../../context';
import { useEffect } from 'react';

const SocialLinks = () => {
  const { social, design } = useAppContext();
  const { links } = social.social_links;

  const linksHasLink = links.filter((l) => l.link.trim() !== "");

  const { shape, file, size, spaceBetween, colorType, color } = design.design.socialIcons;

  useEffect(() => {
    social.handleSocialLinkSize({ iconSize: sizeHandle(size) })
  }, [size])

  const sizeHandle = (size: 1 | 2 | 3) => {
    let s = Number(size)
    switch (s) {
      case 1: return "small";
      case 2: return "medium";
      case 3: return "large";
      default: return "small";
    }
  }

  const btnType = (bg: string) => {
    const bgColor = bg.replace("bg-", "");

    if (colorType === "custom") {
      return ""; // No additional styles, will apply custom color via inline styles
    }

    switch (file) {
      case "fill":
        return `bg-${bgColor} text-white`; // Fill the background with default color and white text
      case "outline":
        return `border border-${bgColor} text-${bgColor}`; // Apply outline with color
      case "none":
        return `text-${bgColor}`; // Only text colored, no border or background
      default:
        return "";
    }
  };

  return (
    <div
      className="flex items-center mb-2 flex-wrap"
      style={{
        gap: `${spaceBetween}px`, // Apply spacing dynamically
      }}
    >
      {linksHasLink.map((link, index) => (
        <div
          className="icon flex items-center justify-center"
          key={index}
        >
          {link.type === "svg" ? (
            <Link
              to={link.link}
              className={`${btnType(link.bg)} flex justify-center items-center transition duration-200 transform hover:scale-105 p-1`}
              style={{
                backgroundColor: file === "fill" && colorType === "custom" ? color : "",
                border: colorType === "custom" && file === "outline" ? `1px solid ${color}` : "",
                color: file === "fill" && colorType === "custom" ? "white" : file !== "fill" && colorType === "custom" ? color : "",
                borderRadius: shape === "circle" ? "50%" : shape === "rounded" ? "8px" : "0px",
              }}
            >
              {link.icon}
            </Link>
          ) : (
            <Link to={link.link}>
              <ImageInPlaceOfSvg link={link.icon?.toString()} />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;

interface ImageInPlaceOfSvgProps {
  link: string | undefined;
}

export const ImageInPlaceOfSvg = ({ link }: ImageInPlaceOfSvgProps) => {
  const { design } = useAppContext();
  const { shape } = design.design.socialIcons;
  return <img width={30} height={30} src={link} alt="social icon" className='object-cover' style={{
    borderRadius: shape === "circle" ? "50%" : shape === "rounded" ? "8px" : "0px"
  }} />;
};
