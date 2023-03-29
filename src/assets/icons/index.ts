import Logo from "./Logo.jpg";
import SearchIcon from "./SearchIcon.jpg";
import Cart from "./Cart.jpg";
import Logout from "./Logout.png";
import Banner from "./Banner.jpg";
import Arrow from "./arrow.jpg";

import { StaticImageData } from "next/image";

type Images = {
    [key: string]: StaticImageData;
};

export default <Images>{
    Logo,
    SearchIcon,
    Cart,
    Logout,
    Banner,
    Arrow,
};
