import React from "react";

import styles from "@/styles/components/ui/CartTotals.module.scss";

const CartTotals = () => {
      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>Cart Totals</h3>
                  <p className={styles.coupon}>Coupon Apply</p>
                  <form className={styles.form}>
                        <input type="text" placeholder="Enter coupon code here..." />
                        <button type="submit">Apply</button>
                  </form>
                  <div className={styles.subtotal}>
                        <p>Subtotal</p>
                        <span>123$</span>
                  </div>
                  <div className={styles.discount}>
                        <p>Coupon Discount</p>
                        <span>(-) 00.00</span>
                  </div>
                  <div className={styles.shiping}>
                        <p>Shiping</p>
                        <div>
                              <span>$.00</span>
                              <span className={styles.charge}>View shipping charge</span>
                        </div>
                  </div>
                  <div className={styles.total}>
                        <h4>Total</h4>
                        <span>$2123.00</span>
                  </div>
            </div>
      );
};

export default CartTotals;
