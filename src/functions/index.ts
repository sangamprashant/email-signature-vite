import { PixelCrop } from "react-image-crop";

export function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop
) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
}

export const handleActive = (isActive: boolean) => {
  return `flex-1 text-center p-2 cursor-pointer hover:bg-gray-200 flex justify-center items-center ${
    isActive ? "bg-blue-100 text-blue-500" : ""
  }`;
};

export const getTextScale=(scale: number)=> {
  switch (scale) {
    case 1:
      return "text-tiny"; // 0.625rem
    case 2:
      return "text-xs"; // 0.75rem
    case 3:
      return "text-sm"; // 0.875rem
    case 4:
      return "text-base"; // 1rem
    case 5:
      return "text-lg"; // 1.125rem
    case 6:
      return "text-xl"; // 1.25rem
    case 7:
      return "text-2xl"; // 1.5rem
    case 8:
      return "text-3xl"; // 1.875rem
    case 9:
      return "text-4xl"; // 2.25rem
    case 10:
      return "text-5xl"; // 3rem
    case 11:
      return "text-6xl"; // 3.75rem
    case 12:
      return "text-7xl"; // 4.5rem
    case 13:
      return "text-8xl"; // 6rem
    case 14:
      return "text-9xl"; // 8rem
    default:
      return "text-base"; // Default case
  }
}


export const decorativeLineOptions = [
  { value: 0, label: "None", preview: "none" },
  { value: 1, label: "Slim", preview: "1px solid black" },
  { value: 2, label: "Normal", preview: "2px solid black" },
  { value: 3, label: "Heavy", preview: "4px solid black" },
  { value: 4, label: "Dotted", preview: "2px dotted black" },
  { value: 5, label: "Dashed", preview: "2px dashed black" },
];