import Carousel from "@/components/molecules/CarouselMolecule";
import GuestSliderMolecule from "@/components/molecules/GuestSliderMolecule";

import styles from "./GuestSlider.module.scss";

const GuestSlider = () => {
    return (
        <section className={styles.container}>
            <Carousel>
                <GuestSliderMolecule />
                <GuestSliderMolecule />
                <GuestSliderMolecule />
            </Carousel>
        </section>
    );
};

export default GuestSlider;
