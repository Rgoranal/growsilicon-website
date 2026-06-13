
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-6xl font-bold mb-6">
                Contact
                <span className="block text-cyan-400">
                  Growsilicon
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-8">
                Whether you need semiconductor engineering services,
                embedded systems expertise, FPGA development, AI solutions,
                or project consultation, our team is ready to help you
                accelerate innovation.
              </p>

            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 group">

              <Image
                src="/images/contact.png"
                alt="Contact Growsilicon"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

            </div>

          </div>

        </section>

        {/* Contact Information */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Email
              </h3>

              <p className="text-slate-300">
                info@growsilicon.com
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Phone
              </h3>

              <p className="text-slate-300">
                +91 8041267405
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Location
              </h3>

              <p className="text-slate-300">
                Bengaluru, Karnataka, India
              </p>

            </div>

          </div>

        </section>

        {/* Office Address */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Registered Office
            </h2>

            <p className="text-slate-300 text-lg leading-8">
              Growsilicon Technologies Pvt. Ltd.
              <br />
              29/52, 3rd Cross,
              <br />
              Manjunath Nagar,
              <br />
              Hosur Road,
              <br />
              Bengaluru – 560100,
              Karnataka, India
            </p>

          </div>

        </section>

        

        {/* Business Hours */}
        <section className="max-w-7xl mx-auto px-10 py-20">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Business Hours
            </h2>

            <p className="text-slate-300 text-lg">
              Monday – Friday
            </p>

            <p className="text-slate-300 text-lg">
              9:00 AM – 6:00 PM IST
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
