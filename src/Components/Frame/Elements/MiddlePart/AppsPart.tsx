import { useEffect, useRef, useState } from 'react';
import {
  FaBriefcase,
  FaBullhorn,
  FaCode, FaComments,
  FaDownload,
  FaFileAlt,
  FaGift,
  FaImages,
  FaInstagram,
  FaLeaf,
  FaNewspaper,
  FaPencilAlt,
  FaQuoteRight,
  FaSignature,
  FaUserFriends,
  FaVideo
} from 'react-icons/fa';
import { FcDeleteDatabase } from "react-icons/fc";
import { IoMdApps } from "react-icons/io";
import Sortable from 'sortablejs';
import { useAppContext } from '../../../../context';
import { AppContentPass } from '../../../../types/AppPart';

const AppsPart = () => {
  return (
    <>
      <SelectedAppContent />
      <EnhanceYourSignature />
      <CallToAction />
    </>
  );
};

export default AppsPart;

const SelectedAppContent = () => {
  const { website } = useAppContext();


  const sortableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sortableRef.current) {
      Sortable.create(sortableRef.current, {
        animation: 150,
        handle: '.icon',
        onEnd: (evt) => {
          const newOrder = [...website.appPartControls.selectData];
          const [removed] = newOrder.splice(evt.oldIndex as number, 1);
          newOrder.splice(evt.newIndex as number, 0, removed);
          website.setAppPartControls((pre) => ({
            ...pre,
            selectData: newOrder
          }))
        },
      });
    }
  }, [website.appPartControls.selectData]);

  const handleEdit = (item: any) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: any) => {
    console.log("Delete", item);
  };

  return (
    <div ref={sortableRef}>
      {website.appPartControls.selectData.map((d: AppContentPass, i: number) => (
        <div key={i} className="flex items-center justify-between border w-full p-4 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 mb-1">
          <button className="icon mr-4">
            <IoMdApps className="text-gray-300 text-2xl" />
          </button>
          <div className="flex-1 text-gray-800 font-semibold">{d?.["website-detiles"]?.code}</div>
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-600 transition" onClick={() => handleEdit(d)}>
              <FaPencilAlt className="text-blue-500 text-xl" />
            </button>
            <button className="text-red-500 hover:text-red-600 transition" onClick={() => handleDelete(d)}>
              <FcDeleteDatabase className="text-blue-500 text-2xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ButtonProps {
  title: string;
  icon: JSX.Element;
  code: number;
}

const EnhanceYourSignature = () => {
  const { website } = useAppContext();
  const [hoverTimer, setHoverTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const Buttons: ButtonProps[] = [
    { title: "Styled SignOff", icon: <FaSignature className="text-blue-500 text-2xl" />, code: 1 },
    { title: "Disclaimer", icon: <FaFileAlt className="text-green-500 text-2xl" />, code: 2 },
    { title: "Quote", icon: <FaQuoteRight className="text-yellow-500 text-2xl" />, code: 3 },
    { title: "Green Footer", icon: <FaLeaf className="text-green-600 text-2xl" />, code: 4 },
    { title: "Video", icon: <FaVideo className="text-red-500 text-2xl" />, code: 5 },
    { title: "Instagram Gallery", icon: <FaInstagram className="text-pink-600 text-2xl" />, code: 6 },
    { title: "Image Gallery", icon: <FaImages className="text-purple-500 text-2xl" />, code: 7 },
  ];

  return (
    <>
      <h5 className="font-bold mb-1 mt-2 text-xl text-gray-800">Enhance Your Signature</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 text-[12px]"
            onClick={() => website.handleOpenDrawer(button.code)}
            onMouseEnter={() => {
              if (hoverTimer) {
                clearTimeout(hoverTimer);
              }

              const timer = setTimeout(() => {
                website.setAppPartControls((prev) => ({
                  ...prev,
                  mouseInCode: button.code,
                }));
              }, 300);

              setHoverTimer(timer);
            }}
            onMouseLeave={() => {
              if (hoverTimer) {
                clearTimeout(hoverTimer);
              }
              website.setAppPartControls((prev) => ({
                ...prev,
                mouseInCode: 0,
              }));
            }}
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
  const { website } = useAppContext();
  const [hoverTimer, setHoverTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const Buttons: ButtonProps[] = [
    { title: "Social buttons", icon: <FaUserFriends className="text-yellow-500 text-2xl" />, code: 8 },
    { title: "Predesigned banners", icon: <FaBullhorn className="text-green-600 text-2xl" />, code: 9 },
    { title: "Custom buttons", icon: <FaCode className="text-red-500 text-2xl" />, code: 10 },
    { title: "Upload my banner", icon: <FaImages className="text-pink-600 text-2xl" />, code: 11 },
    { title: "Sale event", icon: <FaGift className="text-purple-500 text-2xl" />, code: 12 },
    { title: "HTML", icon: <FaCode className="text-purple-500 text-2xl" />, code: 13 },
    { title: "Video Conference", icon: <FaVideo className="text-purple-500 text-2xl" />, code: 14 },
    { title: "Give feedback", icon: <FaComments className="text-purple-500 text-2xl" />, code: 15 },
    { title: "Join a webinar", icon: <FaVideo className="text-purple-500 text-2xl" />, code: 16 },
    { title: "Give newsletter", icon: <FaNewspaper className="text-purple-500 text-2xl" />, code: 17 },
    { title: "Download app", icon: <FaDownload className="text-purple-500 text-2xl" />, code: 18 },
    { title: "Post a job offer", icon: <FaBriefcase className="text-purple-500 text-2xl" />, code: 19 },
  ];

  return (
    <>
      <h5 className="font-bold mb-1 mt-2 text-xl text-gray-800">Call to Action</h5>
      <div className="grid grid-cols-2 gap-4">
        {Buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 text-[12px]"
            onClick={() => website.handleOpenDrawer(button.code)}
            onMouseEnter={() => {
              // Clear any existing timer before setting a new one
              if (hoverTimer) {
                clearTimeout(hoverTimer);
              }

              // Set a new timer for 1 second
              const timer = setTimeout(() => {
                website.setAppPartControls((prev) => ({
                  ...prev,
                  mouseInCode: button.code,
                }));
              }, 1000); // 1 second delay

              setHoverTimer(timer); // Store the timer
            }}
            onMouseLeave={() => {
              // Clear the timer if mouse leaves
              if (hoverTimer) {
                clearTimeout(hoverTimer);
              }
              website.setAppPartControls((prev) => ({
                ...prev,
                mouseInCode: 0,
              }));
            }}
          >
            {button.icon}
            <span className="ml-4 text-gray-800 font-medium">{button.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
