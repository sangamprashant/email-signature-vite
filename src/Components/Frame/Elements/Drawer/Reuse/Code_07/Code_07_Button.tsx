import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

interface Code_07_Button_Props {
    platform: string;
    variant: 'outlined' | 'filled' | 'text';
    link: string;
    text: string;
    rounded: "none" | "md" | "3xl";
}

const Code_07_Button: React.FC<Code_07_Button_Props> = ({ platform, variant = 'filled', link, text, rounded = "none" }) => {
    const Icons: { [key: string]: React.ElementType } = {
        linkedin: FaLinkedinIn,
        youtube: IoLogoYoutube,
        instagram: AiFillInstagram,
        twitter: FaXTwitter,
        facebook: FaFacebookF,
        pinterest: FaPinterest,
        behance: FaBehance,
        dribbble: FaDribbble,
        tiktok: FaTiktok,
        threads: FaThreads,
    };

    const platformBgColors: { [key: string]: string } = {
        linkedin: 'blue-700',
        youtube: 'red-600',
        instagram: 'pink-500',
        twitter: 'blue-400',
        facebook: 'blue-600',
        pinterest: 'red-500',
        behance: 'blue-500',
        dribbble: 'pink-400',
        tiktok: 'black',
        threads: 'purple-500',
    };

    const IconComponent = Icons[platform.toLowerCase()];
    const color = platformBgColors[platform.toLowerCase()] || 'gray-500';

    if (!IconComponent) return null;

    // Base styling classes
    const baseClasses = `my-1 flex items-center px-4 py-2 cursor-pointer w-max gap-2 font-semibold transition-colors duration-200`;
    const roundedClass = rounded !== "none" ? `rounded-${rounded}` : ""; // Applying rounded classes conditionally

    // Variant styling without hover change for outlined and text
    const variantClasses = {
        filled: `bg-${color} text-white hover:text-gray-200`,
        outlined: `border border-${color} text-${color}`, // No hover styles for outlined
        text: `text-${color}`, // No hover styles for text
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses[variant]} ${roundedClass}`}>
            <IconComponent fontSize={20} />
            {text}
        </a>
    );
};

export default Code_07_Button;
