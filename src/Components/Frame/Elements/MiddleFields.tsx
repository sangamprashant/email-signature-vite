import { useAppContext } from "../../../context";
import {
  AppsPart,
  DeginsPart,
  DetailsPart,
  ImagePart,
  SocialPart,
  TamplatesPart,
} from "./MiddlePart";

const MiddleFields = () => {
  const globles = useAppContext();
  const { menu } = globles;

  const render = {
    Details: <DetailsPart />,
    Image: <ImagePart />,
    Social: <SocialPart />,
    Tamplates: <TamplatesPart />,
    Degins: <DeginsPart />,
    Apps: <AppsPart />,
  };

  return <>{render[menu.m_item]}</>;
};

export default MiddleFields;
