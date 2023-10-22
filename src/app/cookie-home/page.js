import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Home Page
      <Link href="/cookie-home">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default HomePage;
