import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";
import {  FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiArmorUpgrade} from "react-icons/gi";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LEFT: Search */}
      <div className={styles.searchBox}>
        <FiSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
        />
      </div>

      {/* RIGHT: Actions */}
      <div className={styles.actions}>
        <button className={styles.upgrade}>
         <GiArmorUpgrade/> Upgrade
        </button>

        <button className={styles.create}>
          + Create Campaign
        </button>

        <div className={styles.profile}>
          <FaRegUserCircle />
        </div>

        <div className={styles.menu}>
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </div>
  );
}