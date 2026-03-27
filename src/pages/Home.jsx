import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90svh] md:min-h-0 md:h-[90vh] flex flex-col justify-center overflow-hidden py-4 md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/80 to-background-dark/30 z-10"></div>
          <img
            alt="Modern Glass Architecture"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <div className="max-w-4xl pt-2 md:pt-0">
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
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-10">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
                Crafting Brilliance in Every Detail
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                We combine architectural innovation with premium materials to deliver glass and interior solutions that exceed expectations.
              </p>

              <div className="space-y-6">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Premium Materials</h4>
                    <p className="text-slate-600 dark:text-slate-400">Sourcing only the highest-grade toughened glass and architectural hardware for guaranteed longevity.</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                    <span className="material-symbols-outlined text-3xl">architecture</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Precision Engineering</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our meticulous installation guarantees absolute safety and flawless aesthetic presentation.</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                    <span className="material-symbols-outlined text-3xl">timer</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">On-Time Delivery</h4>
                    <p className="text-slate-600 dark:text-slate-400">We respect your timelines, ensuring efficient project management without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images (Bento Grid) */}
            <div className="relative hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 blur-[100px] -z-10 rounded-full"></div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6 md:mt-12">
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 aspect-[4/5] hover:-translate-y-2 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
                      alt="Modern Interior Glass"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:-translate-y-1 transition-transform duration-300 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                      <span className="material-symbols-outlined text-2xl">verified_user</span>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 md:-mt-8">
                  <div className="bg-primary p-8 rounded-3xl shadow-xl shadow-primary/30 text-white flex flex-col justify-center items-center sm:items-start gap-2 hover:-translate-y-1 transition-transform duration-300 text-center sm:text-left">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-80">military_tech</span>
                    <p className="text-4xl font-black">15+</p>
                    <p className="font-medium text-white/80">Years Experience</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 aspect-[4/5] hover:-translate-y-2 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
                      alt="Commercial Glass Installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
                <p className="text-white/70 text-sm mb-4">Commercial Glazing • Hyderabad</p>
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
                <p className="text-white/70 text-sm mb-4">Interior & Glass • Hyderabad</p>
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
                <p className="text-white/70 text-sm mb-4">Turnkey Interior • Hyderabad</p>
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
