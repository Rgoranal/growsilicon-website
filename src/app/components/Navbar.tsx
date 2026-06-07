import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-9xl mx-auto flex justify-between items-center px-10 py-1">

        <Image
          src="/logo_2.png"
          alt="Growsilicon"
          width={340}
          height={100}
        />

        <div className="hidden md:flex gap-8 text-white text-base font-medium text-xl font-medium">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}