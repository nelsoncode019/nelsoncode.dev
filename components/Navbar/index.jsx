import Youtube from "../../icons/youtube";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="grid bg-body py-4 sm:grid-cols-1 md:grid-cols-3 gap-3">
        <div className="hidden md:block">
          <nav className="flex sm:justify-center">
            <Link
              href="/"
              className="rounded-lg px-3 py-3 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              NelsonCode
            </Link>
          </nav>
        </div>
        <div>
          <nav className="flex sm:justify-center">
            {[
              ["Inicio", "/"],
              ["Blog", "/blog"],
              ["Acerca de", "/about"],
            ].map(([title, url]) => (
              // eslint-disable-next-line @next/next/link-passhref
              <Link href={url} key={title}>
                <div className="cursor-pointer rounded-lg px-3 py-3 text-white font-medium hover:bg-slate-100 hover:text-slate-900">
                  {title}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
          <nav className="flex sm:justify-center">
            <a
              target="_blank"
              href="https://www.youtube.com/c/NelsonCode"
              className="px-3 py-3"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
