import Logo from "./Logo.png";
import Logout from "./Logout.png";
import Banner from "./Banner.jpg";
import Arrow from "./arrow.jpg";
import ArrowForPagination from "./arrowForPagination.jpg";
import ArrowRight from "./ArrowRight.png";
import PlantForBlog_1 from "./PlantForBlog_1.jpg";
import PlantForBlog_2 from "./PlantForBlog_2.jpg";
import PlantForBlog_3 from "./PlantForBlog_3.jpg";
import PlantForBlog_4 from "./PlantForBlog_4.jpg";
import FooterIcon_1 from "./FooterIcon_1.jpg";
import FooterIcon_2 from "./FooterIcon_2.jpg";
import FooterIcon_3 from "./FooterIcon_3.jpg";
import Calling from "./Calling.png";
import Location from "./Location.png";
import Message from "./Message.png";

import { StaticImageData } from "next/image";

type Images = {
      [key: string]: StaticImageData;
};

export default <Images>{
      Logo,
      Logout,
      Banner,
      Arrow,
      ArrowForPagination,
      ArrowRight,
      PlantForBlog_1,
      PlantForBlog_2,
      PlantForBlog_3,
      PlantForBlog_4,
      FooterIcon_1,
      FooterIcon_2,
      FooterIcon_3,
      Calling,
      Message,
      Location,
};
