import styles from "./BillingForm.module.css";
import InputField from "../InputField/InputField";

export default function BillingForm() {
  return (
    <div className={styles.card}>
      <h1>Review your details</h1>
       <h3>Billing Information</h3>

      <div className={styles.grid}>
        <InputField label="Company Name" placeholder="abhigyan" />
        <InputField label="Email" placeholder="abhigyan@gmail.com" />

        <InputField label="GST Number" placeholder="GST Number" />
        <InputField label="PAN Number" placeholder="PAN Number" />

        <InputField label="Premise/House no." placeholder="House no." />
        <InputField label="Street" placeholder="Street" />

        <InputField label="State" placeholder="Select state" />
        <InputField label="City" placeholder="Select city" />

        <InputField label="Country" placeholder="India" />
        <InputField label="Pin Code" placeholder="Pincode" />
      </div>

      <div className={styles.actions}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.save}>Save Details</button>
      </div>
    </div>
  );
}