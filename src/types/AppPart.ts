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
// Base interface with shared properties
export interface BaseContent {
  "website-detiles": appSelectedDetails;
  text: string;
  color: string;
  fontSize: number;
  alignment: string;
  customColor?: string; // Optional type shorthand
}

// Specific interfaces that extend the base
export interface Disclamier extends BaseContent {
  line: boolean;
}

export interface App_Quote extends BaseContent {}

export interface App_GreenFooter extends BaseContent {
  icon: number;
}

//Binding
export type AppContentPass =
  | AppSignatureProps
  | Disclamier
  | App_Quote
  | App_GreenFooter
  | Partial<AppSignatureProps>
  | Partial<Disclamier>
  | Partial<App_Quote>
  | Partial<App_GreenFooter>;
export type AppContentArray = Array<AppContentPass>;
