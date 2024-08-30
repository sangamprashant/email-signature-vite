import { Menu } from "antd";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ShareIcon from "@mui/icons-material/Share";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import AppsIcon from "@mui/icons-material/Apps";
import { useAppContext } from "../../../context";
import { m_items } from "../../../types";

const MenuLeft = () => {
  return (
    <Menu
      mode="vertical"
      theme="light"
      defaultSelectedKeys={["1"]}
      style={{
        height: "100%",
        borderRight: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "",
        alignItems: "",
      }}
    >
      <Items icon={<CreateIcon />} title="Details" />
      <Items icon={<InsertPhotoIcon />} title="Image" />
      <Items icon={<ShareIcon />} title="Social" />
      <Items icon={<ReceiptLongIcon />} title="Tamplates" />
      <Items icon={<FormatColorFillIcon />} title="Degins" />
      <Items icon={<AppsIcon />} title="Apps" />
    </Menu>
  );
};

export default MenuLeft;

interface ItemsProps {
  icon: JSX.Element;
  title: m_items;
}

const Items = ({ icon, title }: ItemsProps) => {
  const globles = useAppContext();
  const { menu } = globles;

  return (
    <div
      className="flex justify-center items-center flex-col h-20 hover:cursor-pointer"
      onClick={() => {
        menu.setM_Item(title);
      }}
    >
      <div
        className={`${
          menu.m_item === title && "bg-blue-400 text-white"
        } p-2 rounded-3xl hover:bg-blue-300 hover:text-white`}
      >
        {icon}
      </div>
      <p className={`mt-3 ${menu.m_item === title ? "text-blue-300" : ""}`}>
        {title}
      </p>
    </div>
  );
};
