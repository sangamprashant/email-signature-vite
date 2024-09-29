import React from "react";

interface TamplateWraperProps {
  children: React.ReactNode
}

const TamplateWraper: React.FC<TamplateWraperProps> = ({ children }) => {
  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg border border-gray-200"
        style={{
          width: "700px",
        }}
      >
        <img src="email-top.png" alt="" />
        <div className="" id="tamplate-done">
          <div className="p-4">{children}</div>
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