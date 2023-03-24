import Description from "@/components/atoms/GuestSliderAtom/Description";
import Plants from "@/components/atoms/GuestSliderAtom/Plants";
import Button from "@/components/atoms/HeaderAtom/Button";
import styles from "./GuestSlider.module.scss";

const GuestSliderMolecule = () => {
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

export default GuestSliderMolecule;
