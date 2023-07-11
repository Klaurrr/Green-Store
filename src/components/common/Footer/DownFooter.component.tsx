import icons from "../../../../public/assets/icons";

import styles from "./styles/DownFooter.module.scss";

const DownFooter = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <div className={styles.info}>
                              <h3>My Account</h3>
                              <ul>
                                    <li>My Account</li>
                                    <li>Our Stories</li>
                                    <li>Contact Us</li>
                                    <li>Career</li>
                                    <li>Specials</li>
                              </ul>
                        </div>
                        <div className={styles.info}>
                              <h3>Help & Guide</h3>
                              <ul>
                                    <li>Help Center</li>
                                    <li>How to Buy</li>
                                    <li>Shipping & Delivery</li>
                                    <li>Product Policy</li>
                                    <li>How to Return</li>
                              </ul>
                        </div>
                        <div className={styles.info}>
                              <h3>Categories</h3>
                              <ul>
                                    <li>House Plants</li>
                                    <li>Potter Plants</li>
                                    <li>Seeds</li>
                                    <li>Small Plants</li>
                                    <li>Accessories</li>
                              </ul>
                        </div>
                        <div className={styles.connect}>
                              <h3 className={styles.social_title}>Social Media</h3>
                              <div className={styles.social}>
                                    {["FaceBook", "Instagram", "Twitter", "Linkedin", "Union"].map(
                                          (social, index) => (
                                                <div key={`${social}_${index}`}>
                                                      <img
                                                            src={icons[social].src}
                                                            alt="social-img"
                                                      />
                                                </div>
                                          )
                                    )}
                              </div>
                              <div className={styles.payment}>
                                    <h3 className={styles.payment_title}>We Accept</h3>
                                    <img src={icons.Payment.src} alt="payment-img" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DownFooter;
