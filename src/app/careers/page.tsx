import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";


const opportunities = [
  {
    title: "Design Verification Engineer",
    skills: "SystemVerilog, UVM, Assertions, Functional Coverage",
  },
  {
    title: "RTL Design Engineer",
    skills: "Verilog, SystemVerilog, Microarchitecture",
  },
  {
    title: "Physical Design Engineer",
    skills: "Floorplanning, CTS, Routing, Timing Closure",
  },
  {
    title: "DFT Engineer",
    skills: "Scan, ATPG, MBIST, LBIST",
  },
  {
    title: "FPGA Engineer",
    skills: "Vivado, Quartus, Verilog, FPGA Prototyping",
  },
  {
    title: "Embedded Software Engineer",
    skills: "C, C++, Linux, RTOS, Device Drivers",
  },
];

export default function Careers() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-6xl font-bold mb-6">
                Build Your Career With
                <span className="block text-cyan-400">
                  Growsilicon
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-8">
                Join a team of passionate engineers working on
                next-generation semiconductor, embedded systems,
                AI and IoT technologies.
              </p>

            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 group cursor-pointer">

              <Image
                src="/images/career.png"
                alt="Careers at Growsilicon"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            </div>

          </div>

        </section>

        {/* Why Join Us */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Join Growsilicon?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Semiconductor Innovation",
              "Career Growth",
              "Continuous Learning",
              "Collaborative Culture",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500 hover:scale-105 transition-all duration-300"
              >
                {item}
              </div>
            ))}

          </div>

        </section>

        {/* Career Opportunities */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Career Opportunities
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {opportunities.map((job) => (
              <div
                key={job.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {job.title}
                </h3>

                <p className="text-slate-300">
                  <strong>Skills:</strong> {job.skills}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Internship Program */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Internship Program
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <p className="text-slate-300 text-lg leading-8">
              Growsilicon offers internship opportunities for students
              and fresh graduates interested in VLSI Design,
              Design Verification, Embedded Systems, FPGA Development,
              RISC-V Architecture and Artificial Intelligence.
            </p>

          </div>

        </section>

        {/* Preferred Skills */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Preferred Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "SystemVerilog & UVM",
              "RTL Design",
              "Physical Design",
              "DFT & ATPG",
              "FPGA Development",
              "Embedded Linux",
              "RISC-V Architecture",
              "AI / ML Engineering",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </div>
            ))}

          </div>

        </section>

        {/* Resume Submission */}
        <section className="max-w-7xl mx-auto px-10 pb-24">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Interested in Joining Growsilicon?
            </h2>

            <p className="text-slate-300 mb-6 text-lg">
              We are always looking for talented professionals in
              Design Verification, RTL Design, Physical Design,
              DFT, FPGA, Embedded Systems, IoT and AI.
            </p>

            <p className="text-slate-300 mb-8">
              Send your updated resume to:
            </p>
            <div className="w-full max-w-2xl mx-auto bg-slate-800 border border-cyan-500 rounded-xl px-4 md:px-8 py-4">

             <p className="text-cyan-400 text-base sm:text-lg md:text-xl font-semibold break-all">
              careers@growsilicon.com
             </p>

            </div>
            

            <p className="mt-6 text-slate-400">
              Subject: Application for [Position Name]
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

