import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between">
        <div className="hidden md:block cursor-pointer rounded-lg px-3 py-3 ">
          <Link href="/" passHref>
            Nelson Hernández
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg px-3 py-3">
          <a
            target="_blank"
            href="/resume.pdf"
            className="bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-2 px-4 border border-pink-600 hover:border-transparent rounded inline-flex items-center ease-in-out"
          >
            <span className="ml-1">Resume</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
