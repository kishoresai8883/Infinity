import ServiceCard from '../components/ServiceCard';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Glass Partitions & Railings',
    description: 'Elegant and durable glass partitions and railings that seamlessly blend safety with modern aesthetics, maximizing natural light and visual space.',
    icon: 'architecture',
    tag: 'Structural',
    image: 'https://i.pinimg.com/originals/2b/da/d5/2bdad5cf0bacf10fea9f5bd4710e3b29.jpg',
    alt: 'Modern glass railings on a staircase'
  },
  {
    id: 2,
    title: 'ACP, HPL & Shera Cladding',
    description: 'Advanced exterior cladding solutions using premium ACP, HPL, and Shera boards. Enhance your building\'s facade with superior weather resistance and contemporary design.',
    icon: 'grid_view',
    tag: 'Exteriors',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    alt: 'Modern building facade showing cladding'
  },
  {
    id: 3,
    title: 'Spider Glazing',
    description: 'Experience breathtaking architectural transparency with our structural spider glazing systems, perfect for stunning glass facades, canopies, and vast entryways.',
    icon: 'meeting_room',
    tag: 'Facades',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800',
    alt: 'Glass facade featuring structural spider glazing'
  },
  {
    id: 4,
    title: 'Glass & Clay Canopies',
    description: 'Custom-designed canopies incorporating high-strength glass and artisan clay tiles, providing elegant shelter while elevating the architectural character of any entrance.',
    icon: 'design_services',
    tag: 'Commercial',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/DA/KX/YQ/40746014/roof-tiles-fabricator-1000x1000.jpg',
    alt: 'Architectural clay roof tiles and canopy'
  },
  {
    id: 5,
    title: 'Residential Renovation',
    description: 'Comprehensive home transformations delivered with meticulous attention to detail. We revitalize your living spaces with premium finishes, modern layouts, and bespoke craftsmanship.',
    icon: 'home',
    tag: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    alt: 'Luxury residential interior'
  },
  {
    id: 6,
    title: 'Welding Services',
    description: 'Precision fabrication and structural metalwork delivered by certified experts. From decorative iron work to heavy-duty industrial welding, we ensure uncompromised durability.',
    icon: 'hardware',
    tag: 'Metalwork',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    alt: 'Professional welding services in progress'
  },
  {
    id: 7,
    title: 'Carpentry Services',
    description: 'Masterful woodworking and custom cabinetry tailored to your specifications. We combine traditional techniques with modern precision to create timeless wooden structures and furniture.',
    icon: 'handyman',
    tag: 'Woodwork',
    image: 'https://www.keycb.com.au/wp-content/uploads/2023/05/key-carpentry-5-reasons-to-hire-a-professional-carpenter-img-1.jpg',
    alt: 'Carpenter actively working on wood'
  },
  {
    id: 8,
    title: 'Painting Services',
    description: 'Elevate your interiors and exteriors with our professional painting services. We utilize premium paints, rigorous preparation, and expert application for a flawless, enduring finish.',
    icon: 'format_paint',
    tag: 'Finishing',
    image: 'https://as2.ftcdn.net/v2/jpg/04/51/02/93/1000_F_451029352_y0IHC45pY1NLUXaTuysmjMcsDeqj5kT8.jpg',
    alt: 'Painter working on a wall'
  }
];

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:h-[400px] w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col justify-center py-16 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        <div className="relative h-full flex items-center px-6 max-w-7xl mx-auto w-full">
          <div className="text-left max-w-4xl md:mt-4">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Premium Glass & <br className="md:hidden" />Interior Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-3xl">
              Transforming environments through architectural innovation and bespoke glass craftsmanship. From commercial skyscrapers to luxury residences, we deliver excellence in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-50/50 dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}

            {/* Call to Action Card in Grid */}
            <div className="flex flex-col items-center justify-center p-8 bg-primary rounded-xl text-white text-center">
              <span className="material-symbols-outlined text-5xl mb-4">support_agent</span>
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="mb-8 opacity-90">
                Our design consultants are ready to bring your vision to life.
              </p>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-100 dark:bg-slate-900/80 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 dark:border-slate-800">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2">Have a specific project in mind?</h4>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Contact our design experts for a personalized consultation and detailed quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all text-center w-full sm:w-auto">
                Contact Us
              </button>
              <button className="border border-slate-300 dark:border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-center w-full sm:w-auto">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
