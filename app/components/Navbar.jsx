import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-4 px-4 sticky top-1 w-full">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Navbar;
