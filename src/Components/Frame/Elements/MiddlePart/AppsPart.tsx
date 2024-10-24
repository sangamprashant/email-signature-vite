import {
  FaPencilAlt, FaFileAlt, FaQuoteRight, FaLeaf, FaVideo, FaInstagram,
  FaImages, FaCalendarAlt, FaDollarSign, FaUserFriends, FaBullhorn,
  FaCode, FaComments, FaGift, FaNewspaper, FaDownload, FaBriefcase
} from 'react-icons/fa';
import { IoMdApps } from "react-icons/io";
import { FcDeleteDatabase } from "react-icons/fc";

const AppsPart = () => {
  return (
    <>
      <h5 className="font-bold mb-6 text-xl text-gray-800">Your Active App</h5>
      <SignatureRender />
      <SelectedAppContent />
      <EnhanceYourSignature />
      <CallToAction />
    </>
  );
};

export default AppsPart;

const SelectedAppContent = () => {
  const selectData = [
    {
      title: "Edit App",
      content: ""
    },
    {
      title: "Manage App",
      content: ""
    },
    {
      title: "Customize App",
      content: ""
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      {selectData.map((d, i) => (
        <div key={i} className="flex items-center justify-between border w-full p-4 rounded-lg shadow-md hover:bg-gray-50 transition duration-200">
          <button className="icon mr-4"><IoMdApps className="text-gray-300 text-2xl" /></button>
          <div className="flex-1 text-gray-800 font-semibold">{d.title}</div>
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-600 transition"><FaPencilAlt className="text-blue-500 text-xl" /></button>
            <button className="text-red-500 hover:text-red-600 transition"><FcDeleteDatabase className="text-blue-500 text-2xl" /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

const SignatureRender = () => {
  return (
    <>
      <label
        htmlFor="signature-selection"
        className="border-2 border-blue-400 border-dashed w-full flex justify-center items-center p-6 text-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition duration-200 mb-6"
      >
        <FaPencilAlt className="mr-2 text-2xl" />
        <span>Draw your app here</span>
      </label>
      <input type="file" id="signature-selection" className="hidden" />
    </>
  );
};

const EnhanceYourSignature = () => {
  const Buttons = [
    { title: "Styled SignOff", icon: <FaPencilAlt className="text-blue-500 text-2xl" /> },
    { title: "Disclaimer", icon: <FaFileAlt className="text-green-500 text-2xl" /> },
    { title: "Quote", icon: <FaQuoteRight className="text-yellow-500 text-2xl" /> },
    { title: "Green Footer", icon: <FaLeaf className="text-green-600 text-2xl" /> },
    { title: "Video", icon: <FaVideo className="text-red-500 text-2xl" /> },
    { title: "Instagram Gallery", icon: <FaInstagram className="text-pink-600 text-2xl" /> },
    { title: "Image Gallery", icon: <FaImages className="text-purple-500 text-2xl" /> },
  ];

  return (
    <>
      <h5 className="font-bold mb-4 text-xl text-gray-800">Enhance Your Signature</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
          >
            {button.icon}
            <span className="ml-4 text-gray-800 font-medium">{button.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};

const CallToAction = () => {
  const Buttons = [
    { title: "Online scheduler", icon: <FaCalendarAlt className="text-blue-500 text-2xl" /> },
    { title: "Online Payment", icon: <FaDollarSign className="text-green-500 text-2xl" /> },
    { title: "Social buttons", icon: <FaUserFriends className="text-yellow-500 text-2xl" /> },
    { title: "Predesigned banners", icon: <FaBullhorn className="text-green-600 text-2xl" /> },
    { title: "Custom buttons", icon: <FaCode className="text-red-500 text-2xl" /> },
    { title: "Upload my banner", icon: <FaImages className="text-pink-600 text-2xl" /> },
    { title: "Sale event", icon: <FaGift className="text-purple-500 text-2xl" /> },
    { title: "HTML", icon: <FaCode className="text-purple-500 text-2xl" /> },
    { title: "Video Conference", icon: <FaVideo className="text-purple-500 text-2xl" /> },
    { title: "Give feedback", icon: <FaComments className="text-purple-500 text-2xl" /> },
    { title: "Join a webinar", icon: <FaVideo className="text-purple-500 text-2xl" /> },
    { title: "Give newsletter", icon: <FaNewspaper className="text-purple-500 text-2xl" /> },
    { title: "Download app", icon: <FaDownload className="text-purple-500 text-2xl" /> },
    { title: "Post a job offer", icon: <FaBriefcase className="text-purple-500 text-2xl" /> },
  ];

  return (
    <>
      <h5 className="font-bold mb-4 text-xl text-gray-800">Call to Action</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
          >
            {button.icon}
            <span className="ml-4 text-gray-800 font-medium">{button.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
