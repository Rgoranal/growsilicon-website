import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <h1 className="text-6xl font-bold mb-8">
                About <span className="text-cyan-400">Growsilicon</span>
              </h1>

              <p className="text-slate-300 text-lg leading-9 mb-6">
                Growsilicon Technologies Pvt. Ltd. is a next-generation
                semiconductor engineering services company dedicated to
                accelerating innovation in VLSI, Embedded Systems,
                Artificial Intelligence, IoT, and Digital Transformation.
              </p>

              <p className="text-slate-300 text-lg leading-9 mb-6">
                Our team of experienced engineers provides end-to-end
                solutions across ASIC Design, Design Verification,
                Physical Design, DFT, FPGA Development, Embedded Software,
                and AI-driven applications.
              </p>

              <p className="text-slate-300 text-lg leading-9 mb-8">
                We drive semiconductor innovation by delivering advanced engineering solutions across the entire silicon development lifecycle. Combining deep technical expertise, industry-proven methodologies, and a commitment to engineering excellence, we help organizations accelerate product development, enhance quality, and bring next-generation technologies to market with confidence.
              </p>

              <div className="w-32 h-1 bg-cyan-500 rounded-full my-10"></div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300">
                  <h3 className="text-cyan-400 font-semibold text-xl mb-3">
                    Our Vision
                  </h3>

                  <p className="text-slate-300">
                    To become a trusted global semiconductor technology
                    partner delivering innovative engineering solutions.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300">
                  <h3 className="text-cyan-400 font-semibold text-xl mb-3">
                    Our Mission
                  </h3>

                  <p className="text-slate-300">
                    Empower businesses through advanced silicon,
                    embedded, AI and IoT technologies that drive
                    innovation and growth.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side Image */}
            <div className="lg:-mt-60">

              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">

                <Image
                  src="/images/vision.jpg"
                  alt="Semiconductor Engineering"
                  fill
                  className="object-cover hover:scale-105 transition-all duration-500"
                />

              </div>

            </div>

          </div>


          {/* Industries */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Industries We Serve
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

              {[
                "Semiconductor",
                "Automotive",
                "AI & ML",
                "Consumer Electronics",
                "Industrial IoT",
                "Telecommunication",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-500 hover:scale-105 transition-all duration-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

         

        </section>

      </main>

      <Footer />
    </>
  );
}
