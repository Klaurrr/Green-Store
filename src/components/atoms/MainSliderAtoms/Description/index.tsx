import styles from "./Description.module.scss";

const Description = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Welcome to GreenShop</h3>
            <h1 className={styles.subtitle}>
                Let’s Make a Better <span>Planet</span>
            </h1>
            <p className={styles.description}>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
            </p>
        </div>
    );
};

export default Description;
