import { StaticImageData } from "next/image";
import BigPlant from "./Big_plant.jpg";
import SmallPlant from "./Small_plant.jpg";
import FicusElastica from "./FicusElastica.jpg";
import MonsteraDeliciosa from "./MonsteraDeliciosa.jpg";
import Snake from "./Snake.jpg";
import PeaceLily from "./PeaceLily.jpg";
import ZZ from "./ZZ.jpg";
import PhilodendronBrasil from "./PhilodendronBrasil.jpg";
import Spider from "./Spider.jpg";
import ChineseMoney from "./ChineseMoney.jpg";
import Pothos from "./Pothos.jpg";
import Calathea from "./Calathea.jpg";
import BirdsNestFern from "./Bird'sNestFern.jpg";
import PileaPeperomioides from "./PileaPeperomioides.jpg";
import Alocasia from "./Alocasia.jpg";
import BostonFern from "./BostonFern.jpg";
import FiddleLeafFig from "./FiddleLeafFig.jpg";
import StringOfPearls from "./StringOfPearls.jpg";

type Images = {
    [key: string]: StaticImageData;
};

export default <Images>{
    BigPlant,
    SmallPlant,
    FicusElastica,
    MonsteraDeliciosa,
    Snake,
    PeaceLily,
    ZZ,
    PhilodendronBrasil,
    Spider,
    ChineseMoney,
    Pothos,
    Calathea,
    BirdsNestFern,
    PileaPeperomioides,
    Alocasia,
    BostonFern,
    FiddleLeafFig,
    StringOfPearls,
};
