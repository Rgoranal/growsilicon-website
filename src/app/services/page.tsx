import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const services = [
  {
    title: "Design Verification",
    image: "/images/dv.png",
    description:
      "Comprehensive ASIC and SoC verification using SystemVerilog, UVM, Assertions, Functional Coverage and Formal Verification methodologies to ensure first-silicon success.",
  },
  {
    title: "RTL Design",
    image: "/images/rtl.png",
    description:
      "High-performance RTL development using Verilog, SystemVerilog and VHDL for ASIC and FPGA applications with scalable and reusable architecture.",
  },
  {
    title: "Physical Design",
    image: "/images/pd.png",
    description:
      "Complete backend implementation including Floorplanning, Placement, CTS, Routing, Timing Closure, Power Optimization and Signoff.",
  },
  {
    title: "DFT",
    image: "/images/dft.png",
    description:
      "Scan Insertion, ATPG, MBIST, LBIST, Boundary Scan and test architecture development to improve manufacturing quality and yield.",
  },
  {
    title: "FPGA Design",
    image: "/images/fpga.png",
    description:
      "FPGA development using Xilinx and Intel platforms for prototyping, acceleration, communication systems and embedded applications.",
  },
  {
    title: "Embedded Systems",
    image: "/images/emd.png",
    description:
      "Embedded software development, RTOS integration, Linux device drivers, BSP development and firmware solutions for smart devices.",
  },
  {
    title: "IoT Solutions",
    image: "/images/iot_1.png",
    description:
      "Connected device solutions integrating sensors, gateways, cloud platforms and real-time analytics for industrial and consumer applications.",
  },
  {
    title: "AI / ML Engineering",
    image: "/images/ai.png",
    description:
      "Artificial Intelligence and Machine Learning solutions including predictive analytics, computer vision, NLP and intelligent automation.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h1 className="text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-4xl leading-8">
            Growsilicon provides end-to-end semiconductor,
            embedded systems, IoT and AI engineering services
            helping organizations accelerate product development
            and innovation.
          </p>

        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-10 pb-20">

          <div className="grid lg:grid-cols-2 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition-all duration-300"
              >

                <div className="relative h-64">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    {service.title}
                  </h2>

                  <p className="text-slate-300 leading-8">
                    {service.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Engineering Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Requirements Analysis",
              "Architecture & Design",
              "Implementation & Verification",
              "Delivery & Support",
            ].map((step) => (
              <div
                key={step}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
              >
                <h3 className="font-semibold text-lg">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-10 pb-24">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Looking for Engineering Expertise?
            </h2>

            <p className="text-slate-300 mb-8">
              Let's discuss your semiconductor, embedded,
              IoT or AI project requirements.
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