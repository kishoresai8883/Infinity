import ServiceCard from '../components/ServiceCard';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Glass Partitions & Railings',
    description: 'High-performance structural glass solutions for modern facades, providing thermal efficiency and aesthetic brilliance.',
    icon: 'architecture',
    tag: 'Structural',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuJ37aaKiSI8NMJm82hN7_xBXzz9E1TabHGn-0lc7tTIYuL0TQIml5iVHhGJnJpNRCLKsoiEV8IZECA9xkyGq-uosITE3XKPymcTnPhAqsQa-1VsGSS_-K7xLM6b0aTxm7nMlIm7AUK3U08cpJhAxdHLaNAxOMY5ei0b6cnyou8jDruEH1JpIqbP893JVnkixHbylLJ9Kn2mIg-2nu4b4W_dcxzMoA4rNPC_Y40wNdVhfWgv9FgoQPw0VyvxMvunKj8FygqJMvbICq',
    alt: 'Modern architectural glass facade on skyscraper'
  },
  {
    id: 2,
    title: 'ACP, HPL & Shera Cladding',
    description: 'Artisanal mirror designs crafted for luxury interiors. From antique finishes to smart LED integrations.',
    icon: 'grid_view',
    tag: 'Bespoke',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDQLKyDckBOp44HaBm7iCu_CQpT8uO9nRRPe0TwlYHKNqV2bluAjE5EH04rz9sEwyzG2HglNB8qNqX8qq4gnwG7CtGMFuItUDe_QJpQ6Bd-bMvMDnS9VOl1KUKjKxkRqtkNX6NOIBVGlH9-y7TaIMOw-xwHMa5m8iv0Wt5z3TCTL2cPd3pFVIel3omMDl12eOlH7_kzUynCjG85rwot-6tmkPNU4zQwu5WeKrjAVe4OitL1jCDB8ewBXaLm7nxG1-lIN67R4_CZr0',
    alt: 'Luxury interior with bespoke circular wall mirrors'
  },
  {
    id: 3,
    title: 'Spider Glazing',
    description: 'Sleek, acoustic-rated modular glass partitions designed to create private yet open collaborative environments.',
    icon: 'meeting_room',
    tag: 'Workspace',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFGQMo5S4gbDr4Yv2VTjLnbc0bzEPe7aoCRlOnpzHEvA1o1u0zJrEU2WlHGvx_uyh3v_UDQteCbkYksLgi3yQM0GC62s6wpBhv-ja5rqhyb5_RqoaYDBKSVfRN8RCiJgxeOt8VBXleDdjBr-_TLBWUkpYBm5_2p4xUaRHw7_5oJsZ02mt-B0Uv6D3rtXr0uOf47UKpAJ5mldtSCNtD-VHu12NDSrk8NLi-vl8n0UqKCxyG_df2BLamWWnXtkUpmFPDN7L-YwS1v4Vc',
    alt: 'Modern office with transparent glass partition walls'
  },
  {
    id: 4,
    title: 'Glass & Clay Canopies',
    description: 'Full turnkey interior solutions for commercial excellence, from conceptual design to final furniture installation.',
    icon: 'design_services',
    tag: 'Commercial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwRaL2UY4df-5g5Nt3In9ASB-uqEUHp8lwnOT6F7JsqkjREP9aZDbgFLT2FhZj8WKIAK4fFgvti8Ga_Xtd46O5zdGSs1fzp0QWjDB8afYC4EMN3dVAFS6BtBkDVc2mMs5nBprDDQQ93WSX-iJFMW9gGPbWIDxlrIbpJQsCytK0nJHzYZnrLj20VRzFx4n2yBiPnljJ9_JJfal2_zw5T7oWX-glWS5LxhAmVD1YSmzYpjj9NwBRYYTmpCoaxFAkpo_FCpBOU2MEG0gH',
    alt: 'High-end commercial lobby interior fit-out'
  },
  {
    id: 5,
    title: 'Residential Renovation',
    description: 'Complete home transformations featuring premium finishes, smart lighting, and custom glass elements.',
    icon: 'home',
    tag: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkYbwGQQVJhZl7QhnHbK6opGuc2LqSEHvUWkbp5VISrpJvl16q6zIlcVbXVl2IkokfbgNM0CH1tqJ6NWWUZ1N6ywmriajsxsdYIGkvX2tggHvG7ZHqpi1iYRwsk9qpAChHA06l2-HijLj-cYnKEhB7fxHMc2aRV4r8vwzzfTvC35C1VXQp_1c3sI9hf2i-_mool84TPeYs4UJKV9C7vzEQvGhaHPE3DjP83k0gVBZYxFMTB89MkEBWrSBiXVRn4zNduTPhyEOgfoxF',
    alt: 'Luxury home interior renovation with open plan layout'
  }
];

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:h-[400px] w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col justify-center py-16 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9dW73IrKv5DQigIGb4RRUL7NCtWJBXJUIkF1hXO4J_R9G8mv_7VSIUu8oWt6GeQcQ2Dr43GlGeYguPP7_Oa8HP_Rbx7TL9fcsHU5f_g4cGHlaO2tzmVdyczmXVd8dqAVJ9Lp39QNEK1GZ0mtZFnyibwoSqZYp7lQCQs505rQBAT1xqiCvpvg04yOo8sR7ZJzO89lZFWaifLk_oLweAjBiDKg8548cXYbbyctlzntbsuKStAetigSzbCJuWj_cvu-ZJVNYBb_3WZ-Q")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        <div className="relative h-full flex items-center px-6 max-w-7xl mx-auto w-full">
          <div className="text-left max-w-3xl md:mt-4">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Premium Glass & <br className="md:hidden" />Interior Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl">
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
