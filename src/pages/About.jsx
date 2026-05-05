import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[350px] md:h-[400px] w-full overflow-hidden flex flex-col justify-center py-16 md:py-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000')` }}
                ></div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center w-full"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Est. 2005</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white max-w-3xl leading-tight">
                        Crafting Transparency & Elegance
                    </h1>
                    <p className="text-slate-300 mt-4 md:mt-6 max-w-xl text-base md:text-lg">
                        Discover the history and passion behind the region's leading glass and interior design specialists.
                    </p>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <AnimatedSection className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Story</h2>
                        <h3 className="text-4xl font-bold mb-6">Two Decades of Excellence</h3>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                Since 2005, Infinity Glass & Interior Works has been at the forefront of transforming spaces through premium glass solutions and innovative interior designs. What started as a small local workshop has evolved into a powerhouse of architectural glass artistry.
                            </p>
                            <p>
                                We believe that glass is more than just a material; it is a medium that defines how we experience light, space, and privacy. Our journey has been marked by a relentless pursuit of perfection, merging traditional craftsmanship with cutting-edge technology.
                            </p>
                            <p>
                                From luxury residential partitions to high-rise commercial facades, our portfolio reflects a commitment to quality that has earned us the trust of the region's top architects and homeowners.
                            </p>
                        </div>
                    </div>
                    <div className="relative max-w-[440px] mx-auto w-full">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                alt="Engineers working in a modern glass workshop"
                                className="w-full h-full object-cover"
                                src={aboutImg}
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-xl shadow-lg hidden lg:block">
                            <p className="text-white text-4xl font-black">15+</p>
                            <p className="text-white/80 text-sm font-medium uppercase tracking-tighter">Years of Craft</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Our Values Section */}
            <AnimatedSection className="py-20 bg-slate-100 dark:bg-slate-900/50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Values</h2>
                        <h3 className="text-4xl font-bold">The Pillars of Our Success</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background-light dark:bg-background-dark p-10 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">verified</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Uncompromising Quality</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                We source only the finest materials and employ rigorous testing to ensure every installation meets international safety and aesthetic standards.
                            </p>
                        </div>
                        <div className="bg-background-light dark:bg-background-dark p-10 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">handshake</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Integrity in Action</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Honesty and transparency are the bedrocks of our relationships. We deliver what we promise, on time and within budget.
                            </p>
                        </div>
                        <div className="bg-background-light dark:bg-background-dark p-10 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">lightbulb</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Relentless Innovation</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                We embrace new technologies, from smart glass to sustainable coating techniques, to provide forward-thinking solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Our Process Section */}
            <AnimatedSection className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Process</h2>
                            <h3 className="text-4xl font-bold">How We Bring Your Vision to Life</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md">
                            Our streamlined approach ensures clarity, precision, and excellence at every stage of your project.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                            <span className="absolute -top-4 -right-4 text-8xl font-black text-primary/5">01</span>
                            <h5 className="text-lg font-bold mb-2 relative z-10">Consultation</h5>
                            <p className="text-sm text-slate-500 dark:text-slate-400 relative z-10">Understanding your needs, style preferences, and structural requirements.</p>
                        </div>
                        <div className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                            <span className="absolute -top-4 -right-4 text-8xl font-black text-primary/5">02</span>
                            <h5 className="text-lg font-bold mb-2 relative z-10">Design & Spec</h5>
                            <p className="text-sm text-slate-500 dark:text-slate-400 relative z-10">Detailed blueprints and material selection to match your aesthetic.</p>
                        </div>
                        <div className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                            <span className="absolute -top-4 -right-4 text-8xl font-black text-primary/5">03</span>
                            <h5 className="text-lg font-bold mb-2 relative z-10">Fabrication</h5>
                            <p className="text-sm text-slate-500 dark:text-slate-400 relative z-10">Precision cutting and treatment in our state-of-the-art facility.</p>
                        </div>
                        <div className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                            <span className="absolute -top-4 -right-4 text-8xl font-black text-primary/5">04</span>
                            <h5 className="text-lg font-bold mb-2 relative z-10">Installation</h5>
                            <p className="text-sm text-slate-500 dark:text-slate-400 relative z-10">Expert execution by our master installers for a perfect finish.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/*
      <section className="py-20 bg-slate-100 dark:bg-slate-900/50 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Meet the Experts</h2>
                <h3 className="text-4xl font-bold">The Creative Minds Behind the Glass</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          alt="Founder of Infinity Glass" 
                          className="w-full h-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ndXprVaNJ-kiliJ4Wvgh0vhLVcl7Ic8qUc3RqGhvNcYU-lb2PVqV8KgiLIIoRmvH6ejlHVy7iemlXma6gs491GHQmt9cT5w3Qq2DHhpzlyB8o_uj6dATI-1h9BcTxO-f2LhHpdRzWBEX125Ij5GhLcdL24Wkc5sb9q5Z88mvznNT-flXlK6oc6DlRCrHCSXEt12ARheliOeGu5OWYiKjL8yGeYdOatAtannrn1Ip1KY0t3sjjFYytofZsj4x2tegGiJJ9DSqj02Z"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="text-lg font-bold">Marcus Sterling</h5>
                        <p className="text-primary text-sm font-medium">Founder & CEO</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">25 years of industry expertise in architectural glass.</p>
                    </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          alt="Lead Interior Designer" 
                          className="w-full h-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoge0QJKc8ye1eunMFhldriLURsYtxVOrwX14SZVPDR3giT0Kywbgg7o4iVz0ZlJcx_jQC1nzwiCQB_GpfoiI0v0KpekujPbV92rSlfWKsk6NYKgIU21lpO4KhPNA_liGyjOxwJ0EB3POVEOreDeQ_Z5QYp5SqKKudcn7Ol6EVe2R4TuQSXve3Vk7phSGbnV3BPsCkC9FuZpEPrr6_94XCNYeOuYAjaftbZhu5Ip2EjZR6RSnon8LwpS2CQSy9MZN8pgzWKO8xEGJ0"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="text-lg font-bold">Elena Vance</h5>
                        <p className="text-primary text-sm font-medium">Lead Designer</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">Specializing in minimalist and luxury residential interiors.</p>
                    </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          alt="Technical Director" 
                          className="w-full h-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUs9dCU6zbG_LBgFTh3WXpQnc15-05q4FiNnwDBoZXhAwYgB6s5dfOzKI5zZgTEZ8HiS6WpVTPymBk3AJ4XrdIKUDZFbBer_xBdshULJpBvwv7ghNxvs2qPbVhEfoiaYu69jrgIq7of_dHLscp7jmmOBvc2m9vPLhDIRqB3_ADlnlLw3xWArKJ62e_1tlYbu2HQ0Qs84E1h3aCapD9Fs4BS40AdOw5GWUzWZJ4INBCBpL1osN2_d4D3XjMV7UlNkhrlguh_gGTT9uK"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="text-lg font-bold">David Chen</h5>
                        <p className="text-primary text-sm font-medium">Technical Director</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">Expert in structural glass integrity and safety engineering.</p>
                    </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          alt="Operations Manager" 
                          className="w-full h-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_opTcFsoZ_wnBUhsFRNnMAQe9u_7_kIrlnCTB5oTpS1tRqhiZyDT8t41kfTx0T3t9TKDpleJmaiYD7z6XJC98TciT9elvLyO4wAE4wA2cXl8Z7L6tek3wmlrhfIsoy0S1axz2EpnO5iMp8l1o_P_Jsc63fXzCgYI8tHwgBU6WRf3BkQVdQzQzboizr7jOc7zXAjT3rpzdQeZYZ2GFZDL8rDh5q7fYa8VpNQkcK5bbs_1PH8IXt-6occheNebg84vZV1YOs0od3SpG"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="text-lg font-bold">Sophia Grant</h5>
                        <p className="text-primary text-sm font-medium">Operations Manager</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">Streamlining logistics to ensure timely project completion.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      */}

            {/* CTA Section */}
            <AnimatedSection className="py-20 px-4">
                <div className="bg-primary/10 rounded-2xl p-10 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Ready to start your project?</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Let's discuss how our premium glass solutions can transform your home or business.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all text-center w-full sm:w-auto">
                            Book a Consultation
                        </Link>
                        <Link to="/projects" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center w-full sm:w-auto">
                            View Projects
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </main>
    );
}
