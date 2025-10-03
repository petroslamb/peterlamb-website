import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';

const ServicesPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { services } = translations;

    const metaDescription = language === 'en'
      ? `Explore the software and AI consulting services offered by Peter Lamb, including Software Engineering, AI & Machine Learning, Big Data & Analytics, and technical support.`
      : `Εξερευνήστε τις συμβουλευτικές υπηρεσίες λογισμικού και AI που προσφέρει ο Peter Lamb, συμπεριλαμβανομένων των Software Engineering, AI & Machine Learning, Big Data & Analytics, και τεχνικής υποστήριξης.`;
    
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.648l.21-1.423a2.25 2.25 0 00-1.887-1.887l-1.423-.21a2.25 2.25 0 00-2.43 2.43l.21 1.423a2.25 2.25 0 001.887 1.887l1.423.21a2.25 2.25 0 002.43-2.43z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <MetaTags 
                title={`${services.title} | Peter Lamb`} 
                description={metaDescription}
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{services.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.intro}</p>
            </div>

            <ul className="grid md:grid-cols-2 gap-8">
                {services.categories.map((category, index) => (
                    <AnimatedSection as="li" key={index} delay={index * 150}>
                       <Link 
                         to={`/services/${category.slug}`}
                         className="h-full block bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl focus:shadow-xl hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                       >
                           <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-4">
                                    {icons[index]}
                                </div>
                                <h2 className="text-2xl font-bold text-primary dark:text-cyan-400 mb-4">{category.title}</h2>
                                <ul className="space-y-3 text-text-secondary dark:text-slate-400 flex-grow">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <svg className="flex-shrink-0 h-5 w-5 text-primary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-primary dark:text-cyan-400 font-bold inline-flex items-center">
                                    {services.readCaseStudies}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </div>
                           </div>
                       </Link>
                    </AnimatedSection>
                ))}
            </ul>
        </div>
    );
};

export default ServicesPage;
