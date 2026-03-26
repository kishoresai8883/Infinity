import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;

        const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Project Details:* ${message}`;
        const phoneNumber = "919502908883";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');

        // Clear the form fields after sending
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <main className="flex-1">
            <div className="relative min-h-[350px] md:h-[400px] w-full overflow-hidden bg-slate-900 flex flex-col justify-center py-16 md:py-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
                <div className="relative h-full flex items-center justify-center px-6 w-full">
                    <div className="text-center w-full">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
                        <p className="text-slate-300 max-w-xl mx-auto text-base md:text-lg">Expert glass solutions and interior design at your fingertips. Reach out to transform your space today.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Have a vision? We bring it to life. Our team is ready to discuss your next big interior or glass project.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Our Office</h3>
                                <p className="text-slate-600 dark:text-slate-400">Plot No. 180, Sai Dinesh Apartments<br />Motinagar, Hyderabad, Telangana - 500018</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call Us</h3>
                                <p className="text-slate-600 dark:text-slate-400">+91 8886333361</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-slate-600 dark:text-slate-400">infinityglassinteriors@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-lg mb-4">Follow Our Work</h3>
                        <div className="flex gap-4">
                            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="https://instagram.com/infinityglassinteriorworks" target="_blank" rel="noreferrer">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="https://facebook.com/infinityglassandinteriorworks" target="_blank" rel="noreferrer">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="https://youtube.com" target="_blank" rel="noreferrer">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold">Full Name</span>
                                <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3" placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold">Email Address</span>
                                <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3" placeholder="john@example.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </label>
                        </div>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold">Phone Number</span>
                            <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3" placeholder="+91 1234567890" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold">Project Details</span>
                            <textarea className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Tell us about your requirements..." rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </label>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                            Send Message <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                        <p className="text-xs text-center text-slate-500 dark:text-slate-400">By submitting this form, you agree to our privacy policy.</p>
                    </form>
                </div>
            </div>

        <div className="px-6 lg:px-20 pb-20 max-w-7xl mx-auto">
            <div className="w-full min-h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner relative flex">
                <iframe 
                    title="Infinity Glass & Interiors Location Map"
                    src="https://maps.google.com/maps?q=Motinagar,+Hyderabad,+Telangana+-+500018&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 px-4">
            <div className="bg-primary/10 rounded-2xl p-10 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Looking for inspiration?</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Browse through our portfolio of premium architectural glass and interior design projects.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Link to="/projects" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all text-center w-full sm:w-auto">
                        View Portfolio
                    </Link>
                    <Link to="/services" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center w-full sm:w-auto">
                        Our Services
                    </Link>
                </div>
            </div>
        </section>
    </main>
    );
}
