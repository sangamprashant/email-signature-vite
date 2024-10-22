import { useState } from "react";
import { Buttons } from "../../../../Strings/FontsOptions";

const TamplatesPart = () => {
  return (
    <div>
      <h5 className="font-bold mb-2">Template Part</h5>
      <TemplateRender />
    </div>
  );
};

export default TamplatesPart;

const TemplateRender = () => {
  const [activeTemplate, setActiveTemplate] = useState<number>(1); // Moved state her
  return (
    <div className="grid grid-cols-2 gap-2">
      {Buttons.map((data, index) => (
        <RenderButtonSelection
          key={index}
          pic={data.pic}
          title={data.title}
          index={index + 1}
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate} // Pass setter function
        />
      ))}
    </div>
  );
};

interface RenderButtonSelectionProps {
  pic: string;
  title: string;
  index: number;
  activeTemplate: number; // Added prop for active state
  setActiveTemplate: React.Dispatch<React.SetStateAction<number>>; // Setter function for active template
}

const RenderButtonSelection: React.FC<RenderButtonSelectionProps> = ({
  pic,
  title,
  index,
  activeTemplate,
  setActiveTemplate,
}) => {
  return (
    <div
      className={`border ${activeTemplate === index ? "border-blue-500" : "border-gray-200"} flex h-40 justify-center items-center p-2 rounded shadow-sm flex-col cursor-pointer`}
      onClick={() => setActiveTemplate(index)}
    >
      <img
        src={pic}
        alt={title}
        className={`w-full h-auto object-contain ${activeTemplate === index ? "opacity-100" : "filter grayscale opacity-60"
          }`}
      />
      <h5 className="text-gray-500 pt-3 ">{title}</h5>
    </div>
  );
};
