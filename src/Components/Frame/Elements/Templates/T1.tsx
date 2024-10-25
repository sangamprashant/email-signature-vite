import TamplateWraper from "./TamplateWraper";
import Image from "./ReuseComponents/Image";
import Name from "./ReuseComponents/Name";
import DecorativeLine from "./ReuseComponents/DecorativeLine";
import SocialLinks from "./ReuseComponents/SocialLinks";
import AppComponentRender from "./ReuseComponents/AppComponentRender";

const Template1 = () => {
  return (
    <TamplateWraper>
      <div className="flex gap-2">
        <Image />
        <div className="flex-1">
          <Name />
          <DecorativeLine />
          <SocialLinks />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugiat dignissimos reiciendis, vitae voluptatum beatae reprehenderit assumenda odio repellat quidem velit obcaecati, ratione eveniet corrupti iure voluptatibus. In, accusantium odit.
          {/* App Content */}
          <AppComponentRender />
        </div>
      </div>

    </TamplateWraper>
  );
};

export default Template1;
