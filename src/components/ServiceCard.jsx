export default function ServiceCard({ title, description, icon, tag, image, alt }) {
  return (
    <div className="group bg-background-light dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={alt}
          src={image}
        />
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary bg-background-dark/50 p-2 rounded-lg backdrop-blur-md">
            {icon}
          </span>
          <span className="text-white font-bold">{tag}</span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
