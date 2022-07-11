import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="grid bg-body py-4 sm:grid-cols-1 md:grid-cols-3 gap-3">
        <div className="hidden md:block">
          <nav className="flex sm:justify-center">
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href="/">
              <div className="cursor-pointer rounded-lg px-3 py-3  font-medium hover:bg-slate-100 hover:text-slate-900">
                NelsonCode
              </div>
            </Link>
          </nav>
        </div>
        <div>
          <nav className="flex sm:justify-center">
            {[
              ["Inicio", "/"],
              ["Blog", "https://blog.nelsoncode.dev/"],
            ].map(([title, url]) => (
              // eslint-disable-next-line @next/next/link-passhref
              <Link href={url} key={title}>
                <div className="cursor-pointer rounded-lg px-3 py-3  font-medium hover:bg-slate-100 hover:text-slate-900">
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
              rel="noreferrer"
            ></a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
