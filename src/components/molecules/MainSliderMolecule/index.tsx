import Description from "@/components/atoms/MainSliderAtoms/Description";
import Plants from "@/components/atoms/MainSliderAtoms/Plants";
import Button from "@/components/atoms/ButtonAtom";

import styles from "./MainSlider.module.scss";

const MainSliderMolecule = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_1}>
                <Description />
                <Button text={"SHOP NOW"} width={"140px"} height={"40px"} />
            </div>
            <div className={styles.wrapper_2}>
                <Plants />
            </div>
        </div>
    );
};

export default MainSliderMolecule;
