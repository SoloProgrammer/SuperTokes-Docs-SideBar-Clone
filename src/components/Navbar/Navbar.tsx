import styles from "./Navbar.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img
            src="https://supertokens.com/img/logoWithNameLight.svg"
            alt="supertokens"
            width={233}
          />
        </div>
        <div className={styles.dropdown}>
          <p>ThirdPartyEmailPassword Recipe</p>
          <div className={styles.icon}>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
