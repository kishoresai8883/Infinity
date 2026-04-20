import { Link } from 'react-router-dom';
import project1 from '../assets/residential_canopies.jpg';
import project2 from '../assets/commercial_glass.jpg'
import project6 from '../assets/glass_partition.jpg'

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
          <div className="text-left max-w-3xl w-full">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Masterpieces in Glass & Light
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Discover our curated collection of premium architectural glass solutions and modern interior transformations across residential and commercial sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4">
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
              alt="Modern Kitchen Backsplash"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_uOag8cOoq6xb0g706s-73ldjnoefrZKysQd7Os3wleWFoEV6cDdkrrafdog_7RWRgOainXQHLVf-YFPmON33SyEJFg2XdrIgFZUjXTaw9-HWcYELUN_8ij5zx4vIFlrEHMFPhC5e_sEvnWNwwJ05SFgCyiIS5ZHRGy80JXKhvgw0tk2rdRV_FM0aXD6Uj_5aM-VL0npcn_Cli-wvlYxeOzZjAq9Bq2byl3eBcOMNY9xqGJ8Mgw-6-0iUiM7qlThcRI9q_UarmLz"
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Residential</span>
              <h3 className="text-white text-2xl font-bold mb-4">Sapphire Glass Kitchen</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">Back-painted tempered glass panels providing a seamless and hygienic surface for a modern culinary space.</p>
            </div>
          </div>

          <div className="project-card relative group flex overflow-hidden rounded-xl aspect-[4/5] bg-slate-800 isolation-isolate">
            <img
              alt="Frosted Glass Meeting Room"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkbJdI9NM6NYiZAUJClG2ELaAkXdbiXmPe76xI4k6kK-I-9QamP8jWZhlNcRfhkkmR6SlsTD3ApLiDwZldmO1iVYtlWgoXvyW-80V5JnQ5cveHUF5mumXRgEmZuorXYqXOXPO0a-YhtUuHEv4qnuQJUSxn8wWQZhvJoVieL4DR_CEuwB9iaMgDOGS9g5FAR7IQmJox-FfK4aAQE3rqZd0vzzCRfS81TjBWzXWq4CXhvcKxDrQcqF0y4L8vVABHAt3zv72GaCtCZ1-R"
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 pointer-events-auto">Commercial</span>
              <h3 className="text-white text-2xl font-bold mb-4">Privacy Frosted Suites</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">Acid-etched glass solutions offering privacy without compromising natural light flow in boardroom settings.</p>
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

        <section className="mt-24 bg-primary/10 rounded-2xl p-10 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Have a specific vision in mind?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Our design team works closely with you to bring your architectural glass and interior dreams to life.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all text-center w-full sm:w-auto">Start Your Project</Link>
            <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto">Download Catalog</button>
          </div>
        </section>
      </div>
    </main>
  );
}
