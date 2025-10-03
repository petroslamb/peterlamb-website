import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Service } from '../types';
import MetaTags from '../components/MetaTags';

const ServiceCard: React.FC<{ service: Service, icon: React.ReactNode }> = ({ service, icon }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md h-full flex flex-col">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-primary dark:text-slate-100 mb-2">{service.title}</h3>
        <p className="text-text-secondary dark:text-slate-400 flex-grow">{service.description}</p>
    </div>
);

const HomePage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { home } = translations;

    const metaDescription = language === 'en'
      ? `Peter Lamb is a Software & AI Engineering Consultant specializing in Python, AI/ML, and big data. Helping businesses design, build, and scale reliable software solutions.`
      : `Ο Peter Lamb είναι Σύμβουλος Μηχανικής Λογισμικού & Τεχνητής Νοημοσύνης με εξειδίκευση σε Python, AI/ML και big data. Βοηθά επιχειρήσεις να σχεδιάσουν και να αναπτύξουν αξιόπιστες λύσεις.`;

    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.648l.21-1.423a2.25 2.25 0 00-1.887-1.887l-1.423-.21a2.25 2.25 0 00-2.43 2.43l.21 1.423a2.25 2.25 0 001.887 1.887l1.423.21a2.25 2.25 0 002.43-2.43z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
    ];

    return (
        <div className="space-y-16">
            <MetaTags 
                title={`${home.name} | ${home.title}`} 
                description={metaDescription}
            />
            <section className="text-center -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 md:-mt-12 py-20 md:py-28 bg-gradient-to-b from-white to-secondary dark:from-slate-900 dark:to-slate-800 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight animate-fade-in-up"
                        style={{ animationFillMode: 'backwards' }}
                    >
                        {home.name}
                    </h1>
                    <h2 
                        className="mt-3 text-lg md:text-2xl text-primary dark:text-cyan-400 font-medium animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                    >
                        {home.title}
                    </h2>
                    <p 
                        className="mt-4 max-w-2xl mx-auto text-md md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in-up"
                        style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
                    >
                        {home.subtitle}
                    </p>
                    <p 
                        className="mt-2 max-w-2xl mx-auto text-md text-slate-500 dark:text-slate-400 animate-fade-in-up"
                        style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
                    >
                        {home.specialties}
                    </p>
                    <div 
                        className="animate-fade-in-up"
                        style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
                    >
                        <Link to="/contact" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-secondary dark:focus:ring-offset-slate-900 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            {home.cta}
                        </Link>
                    </div>
                </div>
            </section>
            
            <section aria-labelledby="services-snapshot-heading">
                <h2 id="services-snapshot-heading" className="text-3xl font-bold text-center text-text-primary dark:text-white mb-12">{home.servicesTitle}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {home.services.map((service, index) => (
                        <Link 
                            to={`/services/${service.slug}`} 
                            key={index} 
                            className="block h-full rounded-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                            aria-label={`Learn more about ${service.title}`}
                        >
                            <ServiceCard service={service} icon={icons[index]} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="text-center py-8 bg-white dark:bg-slate-800 rounded-lg shadow-md" aria-label={home.credibility}>
                 <p className="text-lg text-text-secondary dark:text-slate-300">{home.credibility}</p>
            </section>
        </div>
    );
};

export default HomePage;
