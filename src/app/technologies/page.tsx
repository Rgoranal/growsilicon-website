import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const technologies = [
  {
    title: "RISC-V",
    image: "/images/riscv.jpg",
    description:
      "Open-standard instruction set architecture enabling flexible, scalable and cost-effective processor development for embedded and high-performance computing applications.",
  },
  {
    title: "SystemVerilog & UVM",
    image: "/images/uvm.jpg",
    description:
      "Industry-standard verification methodology for building reusable and scalable verification environments for ASIC and SoC verification.",
  },
  {
    title: "FPGA",
    image: "/images/fpga-tech.jpg",
    description:
      "Rapid prototyping and hardware acceleration using Xilinx and Intel FPGA platforms for communication, networking and embedded applications.",
  },
  {
    title: "Embedded Linux",
    image: "/images/linux.jpg",
    description:
      "Linux BSP development, device drivers, bootloaders and application software for embedded and industrial systems.",
  },
  {
    title: "Artificial Intelligence",
    image: "/images/ai-tech.jpg",
    description:
      "Machine Learning, Deep Learning, Computer Vision and intelligent automation solutions for next-generation applications.",
  },
  {
    title: "PCI Express",
    image: "/images/pcie.jpg",
    description:
      "High-speed interconnect verification and development for PCIe Gen3, Gen4, Gen5 and Gen6 based designs.",
  },
  {
    title: "DDR Memory",
    image: "/images/ddr.jpg",
    description:
      "Expertise in DDR3, DDR4, DDR5 memory controller design, verification and performance optimization.",
  },
  {
    title: "HBM",
    image: "/images/hbm.jpg",
    description:
      "High Bandwidth Memory subsystem architecture, verification and integration for AI accelerators and advanced SoCs.",
  },
];

export default function Technologies() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h1 className="text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Technologies</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-4xl leading-8">
            GrowSilicon leverages industry-leading semiconductor,
            embedded and AI technologies to deliver innovative,
            scalable and high-performance engineering solutions.
          </p>

        </section>

        {/* Technology Cards */}
        <section className="max-w-7xl mx-auto px-10 pb-20">

          <div className="grid lg:grid-cols-2 gap-8">

            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition-all duration-300"
              >

                <div className="relative h-64">

                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                    {tech.title}
                  </h2>

                  <p className="text-slate-300 leading-8">
                    {tech.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Expertise */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "ASIC Design",
              "SoC Verification",
              "FPGA Prototyping",
              "Embedded Software",
              "AI Accelerators",
              "Memory Subsystems",
              "High-Speed Interfaces",
              "System Integration",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                {item}
              </div>
            ))}

          </div>

        </section>

        {/* Tool Expertise */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            EDA Tools & Platforms
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "Cadence",
              "Synopsys",
              "Siemens EDA",
              "Vivado",
              "Quartus",
              "VCS",
              "Xcelium",
              "Verdi",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-500 transition-all duration-300"
              >
                {tool}
              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-10 pb-24">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Need Technology Expertise?
            </h2>

            <p className="text-slate-300 mb-8">
              Partner with GrowSilicon for advanced semiconductor,
              embedded systems and AI engineering solutions.
            </p>

            <a
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-medium inline-block"
            >
              Contact Us
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
