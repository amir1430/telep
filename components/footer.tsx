import React, { FC } from "react";
import { IoLogoGithub } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { IconType } from "react-icons";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-secondary text-dark/70 font-bold py-3 flex space-x-5 justify-center">
        <_FooterItem
          Icon={IoLogoGithub}
          name="Github"
          url="https://github.com/amir1430"
        />
        <_FooterItem
          Icon={BsTelegram}
          name="Telegram"
          url="https://t.me/amir_1430"
        />
      </div>
    </>
  );
};

interface FooterItemProps {
  url: string;
  name: string;
  Icon: IconType;
}
const _FooterItem: FC<FooterItemProps> = ({ name, url, Icon }) => {
  return (
    <a
      className="flex justify-center items-center space-x-2"
      href={url}
      rel="noopener noreferrer"
      target={"_blank"}
    >
      <Icon />
      <h4 className="text-sm">{name}</h4>
    </a>
  );
};

export default Footer;
