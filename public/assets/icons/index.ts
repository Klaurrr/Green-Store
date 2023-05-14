import Logo from "./Logo.jpg";
import Logout from "./Logout.png";
import Banner from "./Banner.jpg";
import Arrow from "./arrow.jpg";
import ArrowForPagination from "./arrowForPagination.jpg";
import ArrowRight from "./ArrowRight.png";
import PlantForBlog_1 from "./PlantForBlog_1.jpg";
import PlantForBlog_2 from "./PlantForBlog_2.jpg";
import PlantForBlog_3 from "./PlantForBlog_3.jpg";
import PlantForBlog_4 from "./PlantForBlog_4.jpg";

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
};
