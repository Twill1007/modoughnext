import Link from "next/link";

const MenuPage = () => {
  return (
    <div>
      Menu Cookie Dough Page
      <Link href="/cookie-home">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default MenuPage;
