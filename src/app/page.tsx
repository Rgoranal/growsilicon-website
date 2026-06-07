import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-10 py-32 min-h-[30vh] flex items-center">

          <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/*<section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 min-h-screen flex items-center">

          <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center w-full"> */}

            <div>

              <h1 className="text-6xl font-bold leading-tight">
                Accelerating
                <span className="block text-cyan-400">
                  Semiconductor
                </span>
                Innovation
              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-8">
                Delivering advanced engineering solutions in
                VLSI, Embedded Systems, IoT and Artificial Intelligence.
                Empowering organizations with cutting-edge semiconductor
                technologies and scalable product development.
              </p>

              <div className="mt-10 flex gap-4">

                <a
                  href="/services"
                  className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-medium"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  className="border border-cyan-500 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-medium"
                >
                  Contact Us
                </a>

              </div>

            </div>
{/* Hero Graphics */}
<div className="relative w-[700px] h-[700px] mx-auto hidden lg:block">

  {/* Glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[120px]" />
  </div>

  {/* Orbit Ring */}
  <div className="absolute left-1/2 top-1/2 w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />

  {/* Center Chip */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
     {[...Array(120)].map((_, i) => {

    const x = Math.random() * 700 - 350;
    const y = Math.random() * 700 - 350;

    return (
      <div
        key={i}
        className="pixel"
        style={{
          "--x": x,
          "--y": y,
          animationDelay: `${i * 0.01}s`,
        } as React.CSSProperties}
      />
    );
  })}
    <Image
    
      src="/image_1.png"
      alt="Semiconductor"
      width={350}
      height={350}
      priority
      className="
        rounded-3xl
        object-cover
        animate-chip-reveal
        shadow-[0_0_60px_rgba(34,211,238,0.5)]
      "
    />
  </div>

  {/* Orbit */}
  <div className="absolute inset-0 animate-orbit">

    {[
      "/images/riscv.png",
      "/images/fpga.png",
      "/images/ai-chip.png",
      "/images/eb.png",
      "/images/iot.png",
      "/images/rtl.png",
      "/images/dv.png",
      "/images/pd.png",
    ].map((img, index) => {

      const radius = 280;
      const angle = (index * 360) / 8;

      const x =
        radius *
        Math.cos((angle * Math.PI) / 180);

      const y =
        radius *
        Math.sin((angle * Math.PI) / 180);

      return (
        <div
          key={index}
          className="absolute"
          style={{
            left: `calc(50% + ${x}px - 45px)`,
            top: `calc(50% + ${y}px - 45px)`,
          }}
        >
          <div className="orbit-card animate-counter-orbit">

            <div className="animate-counter-orbit">

              <Image
                src={img}
                alt=""
                width={55}
                height={55}
                className="object-contain"
              />

            </div>

          </div>
        </div>
      );
    })}

  </div>

</div>
            

         </div>

        </section>

        {/* Services Preview */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold mb-6">
            Our Core Services
          </h2>

          <p className="text-slate-300 mb-12 text-lg">
            End-to-end semiconductor and embedded engineering solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Design Verification",
              "RTL Design",
              "Physical Design",
              "DFT",
              "FPGA Design",
              "Embedded Systems",
              "IoT Solutions",
              "AI / ML Engineering",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </section>

        

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold mb-12">
            Why Choose Growsilicon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Experienced Semiconductor Engineers",
              "End-to-End Project Ownership",
              "Scalable Engineering Teams",
              "Quality & On-Time Delivery",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-10 py-24">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center hover:border-cyan-500 transition-all duration-300">

            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your Next Innovation?
            </h2>

            <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
              Partner with Growsilicon for semiconductor,
              embedded systems, IoT and AI engineering services.
            </p>

            <a
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-medium inline-block"
            >
              Get In Touch
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}