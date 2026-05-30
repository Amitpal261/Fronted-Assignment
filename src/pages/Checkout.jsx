import styles from "./Checkout.module.css";
import BillingForm from "../components/BillingForm/BillingForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import Navbar from "../Components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";

export default function Checkout() {
  return (
    <>
     <Navbar />
     <div className={styles.backButton}>
       <FaArrowLeft />
       <span>Back to Plan</span>
     </div>
    <div className={styles.container}>
      <div className={styles.left}>
        <BillingForm />
      </div>
      <div className={styles.right}>
        <OrderSummary />
      </div>
    </div>
    </>
  );
}