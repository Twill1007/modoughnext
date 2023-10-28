import Link from "next/link";
import "../globals.css";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Link href="/cookie-home">Home</Link>
      </div>
      <div>
        <Link href="/cookie-menu">Menu</Link>
      </div>
      <h1>About Mo</h1>
    </div>
  );
};

export default AboutPage;
