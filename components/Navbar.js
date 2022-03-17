import Link from "next/link";

function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar;
