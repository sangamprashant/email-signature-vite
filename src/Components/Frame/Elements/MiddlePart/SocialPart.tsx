import MediumIcon from '@mui/icons-material/Book'; // Placeholder for Medium
import DribbbleIcon from '@mui/icons-material/Brush'; // Placeholder for Dribbble
import SnapchatIcon from '@mui/icons-material/CameraAlt'; // Placeholder for Snapchat
import SlackIcon from '@mui/icons-material/Chat'; // Placeholder for Slack
import StackOverflowIcon from '@mui/icons-material/Code'; // Placeholder for StackOverflow
import TumblrIcon from '@mui/icons-material/Create'; // Placeholder for Tumblr
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TikTokIcon from '@mui/icons-material/MusicNote'; // Placeholder for TikTok
import BehanceIcon from '@mui/icons-material/Palette'; // Placeholder for Behance
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import DiscordIcon from '@mui/icons-material/Speaker'; // Placeholder for Discord
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TwitchIcon from '@mui/icons-material/Videocam'; // Placeholder for Twitch
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Form, Input } from 'antd';
import { useState } from 'react';
import { useAppContext } from '../../../../context';
import { SocialLink } from '../../../../types';
import { ImageInPlaceOfSvg } from '../Templates/ReuseComponents/SocialLinks';

const SocialPart = () => {
  const { social, menu } = useAppContext()
  const iconSize = social.social_links.iconSize;

  const [open, setOpen] = useState<boolean>(false)
  const socialProfiles = [
    {
      icon: <FacebookTwoToneIcon fontSize={iconSize} />,
      bg: "bg-blue-600",
      label: "Facebook"
    },
    {
      icon: <TwitterIcon fontSize={iconSize} />,
      bg: "bg-blue-400",
      label: "Twitter"
    },
    {
      icon: <LinkedInIcon fontSize={iconSize} />,
      bg: "bg-blue-700",
      label: "LinkedIn"
    },
    {
      icon: <InstagramIcon fontSize={iconSize} />,
      bg: "bg-gradient-to-tr from-pink-500 to-purple-600",
      label: "Instagram"
    },
    {
      icon: <YouTubeIcon fontSize={iconSize} />,
      bg: "bg-red-600",
      label: "YouTube"
    },
    {
      icon: <PinterestIcon fontSize={iconSize} />,
      bg: "bg-red-500",
      label: "Pinterest"
    },
    {
      icon: <RedditIcon fontSize={iconSize} />,
      bg: "bg-orange-500",
      label: "Reddit"
    },
    {
      icon: <WhatsAppIcon fontSize={iconSize} />,
      bg: "bg-green-500",
      label: "WhatsApp"
    },
    {
      icon: <TelegramIcon fontSize={iconSize} />,
      bg: "bg-blue-500",
      label: "Telegram"
    },
    {
      icon: <GitHubIcon fontSize={iconSize} />,
      bg: "bg-gray-800",
      label: "GitHub"
    },
    {
      icon: <TikTokIcon fontSize={iconSize} />,
      bg: "bg-black",
      label: "TikTok"
    },
    {
      icon: <SnapchatIcon fontSize={iconSize} />,
      bg: "bg-yellow-500",
      label: "Snapchat"
    },
    {
      icon: <DribbbleIcon fontSize={iconSize} />,
      bg: "bg-pink-500",
      label: "Dribbble"
    },
    {
      icon: <BehanceIcon fontSize={iconSize} />,
      bg: "bg-blue-500",
      label: "Behance"
    },
    {
      icon: <DiscordIcon fontSize={iconSize} />,
      bg: "bg-indigo-500",
      label: "Discord"
    },
    {
      icon: <TwitchIcon fontSize={iconSize} />,
      bg: "bg-purple-600",
      label: "Twitch"
    },
    {
      icon: <MediumIcon fontSize={iconSize} />,
      bg: "bg-black",
      label: "Medium"
    },
    {
      icon: <TumblrIcon fontSize={iconSize} />,
      bg: "bg-blue-800",
      label: "Tumblr"
    },
    {
      icon: <StackOverflowIcon fontSize={iconSize} />,
      bg: "bg-orange-500",
      label: "StackOverflow"
    },
    {
      icon: <SlackIcon fontSize={iconSize} />,
      bg: "bg-purple-500",
      label: "Slack"
    }
  ];

  const handleIconClicked = (data: any) => {
    let temp: SocialLink = {
      ...data,
      type: "svg",
      link: ""
    };
    social.addLinks(temp)
  };

  const toggleOptions = () => {
    setOpen(pre => !pre)
  }

  return (
    <>
      <div className="flex justify-between align-center">

        <h5 className="font-bold mb-6 text-lg">Social Profiles</h5>
        <p className='p-0 m-0 text-blue-600 hover:text-blue-400 cursor-pointer' onClick={() => {
          menu.setM_Item("Degins");
        }}>Customize Your Icon</p>
      </div>
      <>
        <div className="space-y-4">
          {social.social_links.links.map((link, index) => (
            <div className="flex items-center gap-4 mb-2" key={index}>
              <div className="icon flex items-center" style={{ width: "30px", height: "30px" }}>
                {link.type === "svg" ? (
                  <div className={`${link.bg} text-white rounded-full flex justify-center items-center transition duration-200 transform hover:scale-105 p-1`}>
                    {link.icon}
                  </div>
                ) : (
                  <ImageInPlaceOfSvg link={link.icon?.toString()} />
                )}
              </div>
              <Form.Item key={link.label} className="floating-label w-full mb-0">
                <Input placeholder=" " value={link.link} onChange={(e) => social.handleLinkChange(e, index)} />
                <label className="text-gray-600">{link.label} URL</label>
              </Form.Item>
              <DeleteOutlinedIcon fontSize='small' sx={{ fill: 'red' }} />
            </div>
          ))}
        </div>

        <div className='text-sm text-blue-500 font-sans mb-4 cursor-pointer flex items-center my-2' onClick={toggleOptions}>
          {open ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
          <span className="ml-2">Show {open ? "Less" : "More"}</span>
        </div>

        {open && (
          <div className="flex flex-wrap gap-4 m-4">
            {socialProfiles.map((profile, index) => (
              <button
                key={index}
                className={`w-10 h-10 ${profile.bg} text-white rounded-full flex justify-center items-center transition duration-200 transform hover:scale-105`}
                onClick={() => handleIconClicked(profile)}
                aria-label={profile.label}
              >
                {profile.icon}
              </button>
            ))}
          </div>
        )}
      </>
    </>
  );
};

export default SocialPart;