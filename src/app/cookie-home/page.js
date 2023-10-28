import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div>
        <Link href="/cookie-menu">Menu</Link>
      </div>
      <div>
        <Link href="/cookie-about">About Us</Link>
      </div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
