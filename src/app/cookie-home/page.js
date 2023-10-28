import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Home Page
      <div>
        <Link href="/cookie-menu">
          <button>Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
