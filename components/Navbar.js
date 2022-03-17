import Link from "next/link";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.bg}>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar;
