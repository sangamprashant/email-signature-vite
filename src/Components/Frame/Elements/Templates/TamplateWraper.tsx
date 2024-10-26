import React from "react";
import { useAppContext } from "../../../../context";
import { getTextScale } from "../../../../functions";

interface TamplateWraperProps {
  children: React.ReactNode;
}

const TamplateWraper: React.FC<TamplateWraperProps> = ({ children }) => {
  const { design,website } = useAppContext();

  const fontScaleValue = Number(design.design.signatureStyle.fontScale);
  const textScaleClass = getTextScale(fontScaleValue);
  const marginTopValue = design.design.signatureStyle.spaceFromEmail;

  // if code is then only render the signature
  const renderSingnature = () => {

    return<>
   
    
    </>
  }

  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg border border-gray-200"
        style={{
          width: "700px",
        }}
      >
        <img src="email-top.png" alt="Email Top Decoration" />
        <div id="tamplate-done">
          <div className={`p-4 ${design.design.signatureStyle.font} ${textScaleClass}`} style={{ lineHeight: design.design.signatureStyle.lineSpacing, marginTop: `${marginTopValue}px` }}>
            {} 
            {children}
          </div>
        </div>
      </div>
      <div className="text-right mt-4">
        <button className="bg-blue-500 px-5 py-2 text-white rounded-lg hover:bg-blue-600">
          OK. I'm done
        </button>
      </div>
    </div>
  );
};

export default TamplateWraper;
