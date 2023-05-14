import Logo from "./Logo.jpg";
import Logout from "./Logout.png";
import Banner from "./Banner.jpg";
import Arrow from "./arrow.jpg";
import ArrowForPagination from "./arrowForPagination.jpg";
import ArrowRight from "./ArrowRight.png";

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
};
