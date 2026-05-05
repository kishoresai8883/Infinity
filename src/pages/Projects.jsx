import { Link } from 'react-router-dom';
import project1 from '../assets/residential_canopies.jpg';
import project2 from '../assets/commercial_glass.jpg'
import project4 from '../assets/exterior.jpg'
import project6 from '../assets/glass_partition.jpg'
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <main className="flex-1 w-full pb-12">
      <div className="relative min-h-[350px] md:h-[400px] w-full overflow-hidden bg-slate-900 mb-6 flex flex-col justify-center py-16 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        <div className="relative h-full flex items-center px-6 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left max-w-3xl w-full"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Masterpieces in Glass & Light
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Discover our curated collection of premium architectural glass solutions and modern interior transformations across residential and commercial sectors.
            </p>
          </motion.div>
        </div>
      </div>
      <AnimatedSection className="px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Luxury Penthouse Glass"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src={project1}
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Residential</span>
              <h3 className="text-white text-2xl font-bold mb-4">Luxury Clay Canopies</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">We have installed Clay Canopies for a Residential building, providing shade and aesthetic appeal.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Corporate Office Partition"
              className="w-full h-full object-fit transition-transform duration-700 ease-out group-hover:scale-105"
              src={project2}
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Commercial</span>
              <h3 className="text-white text-2xl font-bold mb-4">Corporate Glass Building</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">We have installed Glass for a Commercial building, providing modern and sophisticated look.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Minimalist Glass Staircase"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj57s2JLX0QQ2HFvdpQMfjl2QVttH02Pbge7pQ1MgYGvoecjwemZNVf03vvvaPSW3sCa_q_54s5SCCa50Q0mviJh4sliabRsagiRMI-vKEJhC10luOUmDj9NVDcBh_FnbP27bLekHyj9U8UlFUJvf68OgdD-mzQjhGDVmlCBJHQowdY2VTSzT8Hyo7m1zp_t3awZyXZ6ApbVjvXoGdpTmeA4gXWV_0DJI1Tb3BBNzBis7O4-bfoqsIhavdBv_LsTitKYPiCePwCcnE"
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Interior Work</span>
              <h3 className="text-white text-2xl font-bold mb-4">Floating Glass Staircase</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">Laminated safety glass treads with stainless steel hardware for a minimalist architectural statement.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Modern Exterior Design"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src={project4}
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Exterior Design</span>
              <h3 className="text-white text-2xl font-bold mb-4">Exterior Works for Villa's</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">The Villa features a Modern architecture style with wood-look panels & textured cladding.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Interior design"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://i.pinimg.com/736x/cc/21/8e/cc218eb014ed69d7dfbd692d71ebd33d.jpg"
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Interior Design</span>
              <h3 className="text-white text-2xl font-bold mb-4">Modern Interior Design</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">We have designed Modern Interiors for residential/commercial buildings.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Frameless Shower Enclosure"
              className="w-full h-full object-fit transition-transform duration-700 ease-out group-hover:scale-105"
              src={project6}
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Glass Work</span>
              <h3 className="text-white text-2xl font-bold mb-4">Glass Partitions</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">We have installed Glass Partitions for a Commercial building, providing organized and aesthetic look.</p>
            </div>
          </div>
        </div>

        <AnimatedSection className="mt-24 bg-primary/10 rounded-2xl p-10 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Have a specific vision in mind?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Our design team works closely with you to bring your architectural glass and interior dreams to life.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all text-center w-full sm:w-auto">Start Your Project</Link>
            <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto">Download Catalog</button>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}
