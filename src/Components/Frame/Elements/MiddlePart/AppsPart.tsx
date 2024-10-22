import { FaPencilAlt, FaFileAlt, FaQuoteRight, FaLeaf, FaVideo, FaInstagram, FaImages, FaCalendarAlt, FaDollarSign, FaUserFriends, FaBullhorn, FaCode, FaComments, FaGift, FaNewspaper, FaDownload, FaBriefcase } from 'react-icons/fa';

const AppsPart = () => {
  return (
    <>
      <h5 className="font-bold mb-4 text-lg text-gray-800">Your Active App</h5>
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
      icon: <FaPencilAlt className="text-blue-500 text-xl" />,
      title: "Title 1",
      content: ""
    },
    {
      icon: <FaPencilAlt className="text-blue-500 text-xl" />,
      title: "Title 1",
      content: ""
    },
    {
      icon: <FaPencilAlt className="text-blue-500 text-xl" />,
      title: "Title 1",
      content: ""
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center">
{selectData.map((d,i)=>{
  return(
    <>
    <div key={i} className="flex items-center justify-between mb-4">
      <div className="icon">i</div>
      <div className="title">i</div>
      <div className="action">i</div>

    </div>
    </>
  )
})}
    </div>
  )
}

const SignatureRender = () => {
  return (
    <>
      <label
        htmlFor="signature-selection"
        className="border-2 border-blue-400 border-dashed w-full flex justify-center items-center p-4 text-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition duration-200"
      >
        <FaPencilAlt className="mr-2 text-xl" />
        Draw your app here
      </label>
      <input type="file" id="signature-selection" className="hidden" />
    </>
  );
};

const EnhanceYourSignature = () => {
  const Buttons = [
    {
      title: "Styled SignOff",
      icon: <FaPencilAlt className="text-blue-500 text-xl" />
    },
    {
      title: "Disclaimer",
      icon: <FaFileAlt className="text-green-500 text-xl" />
    },
    {
      title: "Quote",
      icon: <FaQuoteRight className="text-yellow-500 text-xl" />
    },
    {
      title: "Green Footer",
      icon: <FaLeaf className="text-green-600 text-xl" />
    },
    {
      title: "Video",
      icon: <FaVideo className="text-red-500 text-xl" />
    },
    {
      title: "Instagram Gallery",
      icon: <FaInstagram className="text-pink-600 text-xl" />
    },
    {
      title: "Image Gallery",
      icon: <FaImages className="text-purple-500 text-xl" />
    }
  ];

  return (
    <>
      <h5 className="font-bold mb-4 text-lg text-gray-800">Enhance Your Signature</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
          >
            {button.icon}
            <span className="ml-3 text-gray-700 font-semibold">{button.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};

const CallToAction = () => {
  const Buttons = [
    {
      title: "Online scheduler",
      icon: <FaCalendarAlt className="text-blue-500 text-xl" />
    },
    {
      title: "Online Payment",
      icon: <FaDollarSign className="text-green-500 text-xl" />
    },
    {
      title: "Social buttons",
      icon: <FaUserFriends className="text-yellow-500 text-xl" />
    },
    {
      title: "Predesigned banners",
      icon: <FaBullhorn className="text-green-600 text-xl" />
    },
    {
      title: "Custom buttons",
      icon: <FaCode className="text-red-500 text-xl" />
    },
    {
      title: "Upload my banner",
      icon: <FaImages className="text-pink-600 text-xl" />
    },
    {
      title: "Sale event",
      icon: <FaGift className="text-purple-500 text-xl" />
    },
    {
      title: "HTML",
      icon: <FaCode className="text-purple-500 text-xl" />
    },
    {
      title: "Video Conference",
      icon: <FaVideo className="text-purple-500 text-xl" />
    },
    {
      title: "Give feedback",
      icon: <FaComments className="text-purple-500 text-xl" />
    },
    {
      title: "Join a webinar",
      icon: <FaVideo className="text-purple-500 text-xl" />
    },
    {
      title: "Give newsletter",
      icon: <FaNewspaper className="text-purple-500 text-xl" />
    },
    {
      title: "Download app",
      icon: <FaDownload className="text-purple-500 text-xl" />
    },
    {
      title: "Post a job offer",
      icon: <FaBriefcase className="text-purple-500 text-xl" />
    }
  ];

  return (
    <>
      <h5 className="font-bold mb-4 text-lg text-gray-800">Call to action</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
          >
            {button.icon}
            <span className="ml-3 text-gray-700 font-semibold">{button.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
