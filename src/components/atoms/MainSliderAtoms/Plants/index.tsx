import plants from "@/assets/plantsImg";

const Plants = () => {
    return (
        <>
            <img src={plants.BigPlant.src} alt="BigPlant-img" />
            <img src={plants.SmallPlant.src} alt="SmallPlant-img" />
        </>
    );
};

export default Plants;
