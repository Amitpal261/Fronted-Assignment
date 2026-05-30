import styles from "./OrderSummary.module.css";
import { FiTag } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";

export default function OrderSummary() {
  return (
    <div className={styles.container}>
     

      {/* PLAN */}
      <div className={styles.card}>
         <h3 className={styles.heading}>Order Summary</h3>
      <div className={styles.planCard}>
        <div className={styles.planLeft}>
          <h2>
            ₹4,999 <span>/month</span>
          </h2>
          <p>Includes 5,000 credits/mo.</p>
        </div>

        <div className={styles.planRight}>
          <span>SELECTED PLAN</span>
          <p>Startup</p>
        </div>
      </div>
      <button className={styles.upgrade}>ⓘ Upgrade to Growth Plan</button>
       </div>
       <div className={styles.downCard}>
      {/* WALLET */}
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.iconText}>
            <BsWallet2 />
            <div>
              <p>Wallet Balance</p>
              <span>₹500.00 available</span>
            </div>
          </div>
          <button className={styles.smallBtn}>Apply</button>
        </div>
      </div>

      {/* COUPON */}
      <div className={styles.card}>
        <div className={styles.couponHeader}>
          <div className={styles.iconText}>
            <FiTag />
            <p>Apply Coupon</p>
          </div>
          <span></span>
        </div>

        <div className={styles.inputRow}>
          <input placeholder="Enter coupon code" />
          <button className={styles.smallBtn}>Apply</button>
        </div>

        {/* SELECTED COUPON */}
        <div className={`${styles.couponItem}`}>
          <div>
            <strong>WELCOME20</strong>
            <span>20% off on your first month</span>
          </div>
          <input type="radio" checked readOnly />
        </div>

        <div className={styles.couponItem}>
          <div>
            <strong>ANNUAL50</strong>
            <span>50% off on annual plans</span>
          </div>
          <input type="radio" />
        </div>
      </div>

      {/* TOTAL */}
      <div className={styles.summary}>
        <div>
          <p>Subtotal</p>
          <span>₹14,999.00</span>
        </div>

        <div>
          <p>Tax (18% GST)</p>
          <span>₹1,079.64</span>
        </div>

        <div className={styles.total}>
          <p>Total due today</p>
          <h2>16,078.64</h2>
        </div>
      </div>

      <button className={styles.pay}>Proceed to Payment</button>
      </div>
    </div>
  );
}
