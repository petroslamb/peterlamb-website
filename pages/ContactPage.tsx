import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import MetaTags from '../components/MetaTags';

const ContactPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { contact } = translations;

    const metaDescription = language === 'en'
      ? `Get in touch with Peter Lamb to discuss your software or AI project. Find contact details and a direct message form.`
      : `Επικοινωνήστε με τον Peter Lamb για να συζητήσετε το έργο λογισμικού ή AI σας. Βρείτε στοιχεία επικοινωνίας και μια φόρμα άμεσου μηνύματος.`;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const mailtoLink = `mailto:petroslamb@gmail.com?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message as string)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="max-w-4xl mx-auto">
             <MetaTags 
                title={`${contact.title} | Peter Lamb`} 
                description={metaDescription}
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{contact.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300">{contact.intro}</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                    <section aria-labelledby="contact-details-heading">
                        <h2 id="contact-details-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{contact.detailsTitle}</h2>
                        <div className="space-y-4 text-text-secondary dark:text-slate-400">
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.email}:</strong> <a href="mailto:petroslamb@gmail.com" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">petroslamb@gmail.com</a></p>
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.linkedin}:</strong> <a href="https://linkedin.com/in/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">linkedin.com/in/petroslamb</a></p>
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.github}:</strong> <a href="https://github.com/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">github.com/petroslamb</a></p>
                        </div>
                    </section>
                    <section aria-labelledby="contact-form-heading">
                        <h2 id="contact-form-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{contact.formIntro}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formName}</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400" autoComplete="name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formEmail}</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formMessage}</label>
                                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    {contact.formSubmit}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
