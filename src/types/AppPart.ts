// ----------------------------------
// Signature
// ----------------------------------
interface FontStyle {
  family: string;
  value: string;
}

interface SignAsProps {
  value: string;
  show: boolean;
}

interface FontProps {
  value: string;
  size: 50 | 100 | 150;
}

interface AlignmentProps {
  pos: "start" | "center" | "end";
}

interface CustomProps {
  color: string;
  background: string;
  image: string;
}

interface UiProps {
  active: number;
}

interface appSelectedDetails {
  time: Date;
  code: number;
}

export interface AppSignatureProps {
  "website-detiles"?: appSelectedDetails;
  ui: UiProps;
  signoff: FontStyle;
  "sign-as": SignAsProps;
  font: FontProps;
  alignment: AlignmentProps;
  custom: CustomProps;
}
// ----------------------------------
// Disclamier
// ----------------------------------
export interface Disclamier {
  "website-detiles": appSelectedDetails;
  text: string;
}

//Binding
export type AppContentPass =
  | AppSignatureProps
  | Disclamier
  | Partial<AppSignatureProps>
  | Partial<Disclamier>;
export type AppContentArray = Array<AppContentPass>;
