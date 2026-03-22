import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:min-h-0 md:h-[94vh] flex flex-col justify-center overflow-hidden py-2 md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/80 to-background-dark/30 z-10"></div>
          <img
            alt="Modern Architecture"
            className="w-full h-full object-cover"
            src="https://www.officeworkdesign.com/wp-content/uploads/2023/02/Frameless-glass-walls-03.jpg"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <div className="max-w-4xl pt-8 md:pt-0">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-primary/10">Premium Glass Engineering</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Elevate your Space with <span className="text-white">Expert Glass & Interior Designs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We delivers high-quality glass and interior solutions in AP & TG. From elegant glass partitions to durable exterior cladding, we bring modern design and precision craftsmanship to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                Get a Consultation <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link to="/projects" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-4/5 sm:w-3/4 lg:w-4/5 xl:w-3/4 mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="About Infinity Glass"
                  className="w-full h-full object-cover"
                  src={aboutImg}
                />
              </div>
              <div className="absolute -bottom-10 -right-14 bg-primary p-8 rounded-2xl hidden md:block">
                <p className="text-white text-4xl font-black">15+</p>
                <p className="text-white/80 text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Infinity Glass & Interior</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">Mastering the Art of Transparency & Space</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Infinity Glass & Interior Works is a trusted name in Both Andhra Pradesh & Telangana for delivering innovative and durable glass and interior solutions. With a strong focus on quality, design, and customer satisfaction, we specialize in both residential and commercial projects.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our team combines skilled workmanship with premium materials to create spaces that are functional, stylish, and long-lasting.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Precision Engineering</h4>
                  <p className="text-sm text-slate-500">Every cut, fit, and finish is executed with surgical precision.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Sustainable Design</h4>
                  <p className="text-sm text-slate-500">Energy-efficient solutions that minimize environmental impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Comprehensive Glass & Interior Solutions</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">layers</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Glass Work</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                From structural glazing and curtain walls to bespoke glass partitions and staircases. We handle tempered, laminated, and smart glass.
              </p>
              <Link to="/services" className="text-primary font-bold flex items-center gap-2 group">
                Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">chair</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Interior Design</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Bespoke interior solutions that blend functionality with luxury. We specialize in executive offices, luxury homes, and hospitality spaces.
              </p>
              <Link to="/services" className="text-primary font-bold flex items-center gap-2 group">
                Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">apartment</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Commercial Projects</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Turnkey solutions for large-scale retail, corporate headquarters, and high-rise developments with end-to-end management.
              </p>
              <Link to="/projects" className="text-primary font-bold flex items-center gap-2 group">
                Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-12 lg:p-20 overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Why Choose Infinity Glass & Interiors?</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">verified</span>
                    <div>
                      <h4 className="font-bold text-xl">High-Quality Materials & Finishing</h4>
                      <p className="text-white/70">We use only the finest materials to ensure longevity.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">speed</span>
                    <div>
                      <h4 className="font-bold text-xl">On-Time Project Delivery</h4>
                      <p className="text-white/70">Strict adherence to project timelines and milestones.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">support_agent</span>
                    <div>
                      <h4 className="font-bold text-xl">Experienced & Skilled Professionals</h4>
                      <p className="text-white/70">Dedicated maintenance and after-sales service team.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Interior Glass"
                  className="rounded-xl shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgvNY-g0P3H8BhZIid_W-c3imj3Fl4bS7Fi8FD4JIi3SXDbMPAoeZLkvUiVJumKJX8i5mUSyx3YRIwBqitYZPpXqXlg_-88c2A4BboFnlfpQdMtmpBWEqZftTXUeEhvEBiyPgrPhmDmx4yvZwkDrSBDKRBeYFR-kneZMpGVQrQLJRZqpMzzhPIW5zYAmbAVYiTedlTm7nrVUeZDVf3C9mIpemqRW-LMxfiNtnXrzKujOQo10Z_t4SdK6MrUVDOcmO06mt11C-98Ut"
                />
                <img
                  alt="Office Glass"
                  className="rounded-xl shadow-lg mt-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg1b9MvAR6nw_ahR6t5n6KpqgR57Fs1rPvrC3qGI7bWTV6mQy0YcDnsqCaB4H3uETV4XSaWSph2BIDsX1NZhr6DT_QiBLK0fHot_CSc0SHzbPfkQ8Qi2ZWErgMA-USXp8fAGb6FtA4bI0pDIeXHDO4W_3gz4KelbNQtHjHfTPJ8X_yc5R81PiMUslqU5Y5Fv2i54PBCZjCFyHxPcFAgdxdQMs74tlRSD371gRYRCWUkqy1z_7AJVgLC-Ng_0m65wXsCfm8oshmFPzO"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white">A Showcase of Innovation</h3>
            </div>
            <Link to="/projects" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all inline-block">
              View All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                alt="Corporate Plaza"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGi-DSp3wcYbWnjmDHOjdTyQaKDyK5B024_KaeOZUtiLpvvv3Ez2VTxhYsGmPE8VK8bpyDC1RADBztd0Q9Lc2brDLjNvxu9o6XF9Sv0-r_ePkU6SW5qQbxoV8wVbrZ1eU05Qgz0ANlPLj9CQUgf_mwrcMUe9g1lHApPm7bDfnOitIpuvPEosvF_NLVESJBLKMJriVmM63ndaUvamaTHins6zVMYmdBlm9qpsZPRJpU4ekdybYA9N5wX5cdlQXMSRYTRzv-57emEn74"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold mb-2">The Crystal Hub</h4>
                <p className="text-white/70 text-sm mb-4">Commercial Glazing • India</p>
                <span className="text-primary font-bold text-sm uppercase tracking-widest">View Project</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                alt="Luxury Villa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGX_b-EZL5Mi99KMHZTtYdPkXDrMCdgJrKymnL2nL_I_5zseZwCe7AmU0FcAUUW47iC9fuDV2hQmeXP5z9JBbq4IQAEp-sd2kIDZvV1gFWsjuyXGpQ4iPaZdINp-n9BjnYuPf2btDZVdqsWOC4tdMWxV-TzEbIbsf0zbCBPxjcHJdFdffQYgsuG2h174TLRri2VqXuQFvL8rBDJvw40f1DOtJ2nuRsiiJdSdQaAITYfe_rAh92UzrSlUoT2l_xd0R9R5OjtaxQJV2z"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold mb-2">Emerald Heights</h4>
                <p className="text-white/70 text-sm mb-4">Interior & Glass • India</p>
                <span className="text-primary font-bold text-sm uppercase tracking-widest">View Project</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                alt="Tech Office"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9yVZbhSSVlq9-pFygNKZeNN8zC9s6iry-kHIwR50xniWXBRhVtDcC_u2LhhLFeFjmmFCbKNKgc9D-9pjy72tstzL3N51vxvPLQBF4-4wNMxNQ33_9GIAudJ9t1HLk1SwEACMX3q8jJt6YRiHGKZePUX_Mmp_-F0bU64Ckmt_VMgH0kqtfD8LO6qYbgjxh3_o23kZSxv-N6I1sLckXbUq8EOV04R0O7bB6iLIE4TMuqKp1Fo65lFNRsu5eI_XTSY3ooZvBV-IsrLgL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold mb-2">Nexus Headquarters</h4>
                <p className="text-white/70 text-sm mb-4">Turnkey Interior • India</p>
                <span className="text-primary font-bold text-sm uppercase tracking-widest">View Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Transform Your Space?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Looking for reliable glass and interior solutions in AP & TG? Get in touch with Infinity Glass & Interior Works today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-2xl shadow-primary/40 leading-none w-full sm:w-auto text-center">
              Book a Free Consultation
            </Link>
            <a className="flex items-center justify-center gap-3 text-xl font-bold hover:text-primary transition-colors w-full sm:w-auto" href="tel:+918886333361">
              <span className="material-symbols-outlined">call</span> +91 8886333361
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
