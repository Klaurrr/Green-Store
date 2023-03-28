import Carousel from "@/components/molecules/CarouselMolecule";
import MainSliderMolecule from "@/components/molecules/MainSliderMolecule";

import styles from "./MainSlider.module.scss";

const MainSlider = () => {
    return (
        <section className={styles.container}>
            <Carousel>
                <MainSliderMolecule />
                <MainSliderMolecule />
                <MainSliderMolecule />
            </Carousel>
        </section>
    );
};

export default MainSlider;
