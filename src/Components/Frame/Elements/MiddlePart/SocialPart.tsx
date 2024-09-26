import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TikTokIcon from '@mui/icons-material/MusicNote'; // Placeholder for TikTok
import SnapchatIcon from '@mui/icons-material/CameraAlt'; // Placeholder for Snapchat
import DribbbleIcon from '@mui/icons-material/Brush'; // Placeholder for Dribbble
import BehanceIcon from '@mui/icons-material/Palette'; // Placeholder for Behance
import DiscordIcon from '@mui/icons-material/Speaker'; // Placeholder for Discord
import TwitchIcon from '@mui/icons-material/Videocam'; // Placeholder for Twitch
import MediumIcon from '@mui/icons-material/Book'; // Placeholder for Medium
import TumblrIcon from '@mui/icons-material/Create'; // Placeholder for Tumblr
import StackOverflowIcon from '@mui/icons-material/Code'; // Placeholder for StackOverflow
import SlackIcon from '@mui/icons-material/Chat'; // Placeholder for Slack

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from 'react';
import { useAppContext } from '../../../../context';
import { Form, Input } from 'antd';

const SocialPart = () => {
  const { social } = useAppContext()
  const iconSize = "small";

  const [open, setOpen] = useState<boolean>(false)
  const socialProfiles = [
    {
      icon: <FacebookIcon fontSize={iconSize} />,
      link: "https://www.facebook.com",
      bg: "bg-blue-600",
      label: "Facebook"
    },
    {
      icon: <TwitterIcon fontSize={iconSize} />,
      link: "https://www.twitter.com",
      bg: "bg-blue-400",
      label: "Twitter"
    },
    {
      icon: <LinkedInIcon fontSize={iconSize} />,
      link: "https://www.linkedin.com",
      bg: "bg-blue-700",
      label: "LinkedIn"
    },
    {
      icon: <InstagramIcon fontSize={iconSize} />,
      link: "https://www.instagram.com",
      bg: "bg-gradient-to-tr from-pink-500 to-purple-600",
      label: "Instagram"
    },
    {
      icon: <YouTubeIcon fontSize={iconSize} />,
      link: "https://www.youtube.com",
      bg: "bg-red-600",
      label: "YouTube"
    },
    {
      icon: <PinterestIcon fontSize={iconSize} />,
      link: "https://www.pinterest.com",
      bg: "bg-red-500",
      label: "Pinterest"
    },
    {
      icon: <RedditIcon fontSize={iconSize} />,
      link: "https://www.reddit.com",
      bg: "bg-orange-500",
      label: "Reddit"
    },
    {
      icon: <WhatsAppIcon fontSize={iconSize} />,
      link: "https://www.whatsapp.com",
      bg: "bg-green-500",
      label: "WhatsApp"
    },
    {
      icon: <TelegramIcon fontSize={iconSize} />,
      link: "https://www.telegram.org",
      bg: "bg-blue-500",
      label: "Telegram"
    },
    {
      icon: <GitHubIcon fontSize={iconSize} />,
      link: "https://www.github.com",
      bg: "bg-gray-800",
      label: "GitHub"
    },
    {
      icon: <TikTokIcon fontSize={iconSize} />,
      link: "https://www.tiktok.com",
      bg: "bg-black",
      label: "TikTok"
    },
    {
      icon: <SnapchatIcon fontSize={iconSize} />,
      link: "https://www.snapchat.com",
      bg: "bg-yellow-500",
      label: "Snapchat"
    },
    {
      icon: <DribbbleIcon fontSize={iconSize} />,
      link: "https://www.dribbble.com",
      bg: "bg-pink-500",
      label: "Dribbble"
    },
    {
      icon: <BehanceIcon fontSize={iconSize} />,
      link: "https://www.behance.net",
      bg: "bg-blue-500",
      label: "Behance"
    },
    {
      icon: <DiscordIcon fontSize={iconSize} />,
      link: "https://www.discord.com",
      bg: "bg-indigo-500",
      label: "Discord"
    },
    {
      icon: <TwitchIcon fontSize={iconSize} />,
      link: "https://www.twitch.tv",
      bg: "bg-purple-600",
      label: "Twitch"
    },
    {
      icon: <MediumIcon fontSize={iconSize} />,
      link: "https://www.medium.com",
      bg: "bg-black",
      label: "Medium"
    },
    {
      icon: <TumblrIcon fontSize={iconSize} />,
      link: "https://www.tumblr.com",
      bg: "bg-blue-800",
      label: "Tumblr"
    },
    {
      icon: <StackOverflowIcon fontSize={iconSize} />,
      link: "https://stackoverflow.com",
      bg: "bg-orange-500",
      label: "StackOverflow"
    },
    {
      icon: <SlackIcon fontSize={iconSize} />,
      link: "https://www.slack.com",
      bg: "bg-purple-500",
      label: "Slack"
    }
  ];

  // Handle link opening
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const toggleOptions = () => {
    setOpen(pre => !pre)
  }

  return (
    <>
      <h5 className="font-bold mb-6 text-lg">Social Profiles</h5>
      <div className="space-y-4">
        {social.social_links.links.map((link, index) => (
          <div className="flex items-center gap-4 mb-2" key={index}>
            <div className="icon flex items-center" style={{ width: "30px", height: "30px" }}>
              {link.type === "svg" ? (
                link.icon
              ) : (
                <ImageInPlaceOfSvg link={link.icon?.toString()} />
              )}
            </div>
            <Form.Item key={link.label} className="floating-label w-full mb-0">
              <Input placeholder=" " />
              <label className="text-gray-600">{link.label} URL</label>
            </Form.Item>
            <DeleteOutlinedIcon fontSize='small' sx={{ fill: 'red' }} />
          </div>
        ))}
      </div>

      <div className='text-sm text-blue-500 font-sans mb-4 cursor-pointer flex items-center' onClick={toggleOptions}>
        {open ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
        <span className="ml-2">Show {open ? "Less" : "More"}</span>
      </div>

      {open && (
        <div className="flex flex-wrap gap-4 mt-4">
          {socialProfiles.map((profile, index) => (
            <button
              key={index}
              className={`w-10 h-10 ${profile.bg} text-white rounded-full flex justify-center items-center transition duration-200 transform hover:scale-105`}
              onClick={() => openLink(profile.link)}
              aria-label={profile.label}
            >
              {profile.icon}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SocialPart;

interface ImageInPlaceOfSvgProps {
  link: string | undefined
}

const ImageInPlaceOfSvg = ({ link }: ImageInPlaceOfSvgProps) => {
  return <>
    <img width={20} height={20} src={link} />
  </>
}