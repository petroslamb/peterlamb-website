import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service, icon: React.ReactNode }> = ({ service, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-primary mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">{service.title}</h3>
        <p className="text-text-secondary">{service.description}</p>
    </div>
);

const HomePage: React.FC = () => {
    const { translations } = useLanguage();
    const { home } = translations;

    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2m6 0v2M5 12h2" /></svg>
    ];

    return (
        <div className="space-y-16">
            <section className="text-center py-16">
                <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight">{home.name}</h1>
                <h2 className="mt-3 text-lg md:text-2xl text-primary font-medium">{home.title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-md md:text-xl text-text-secondary">{home.subtitle}</p>
                <p className="mt-2 max-w-2xl mx-auto text-md text-text-secondary">{home.specialties}</p>
                <Link to="/contact" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    {home.cta}
                </Link>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold text-center text-text-primary mb-12">{home.servicesTitle}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {home.services.map((service, index) => (
                        <ServiceCard key={index} service={service} icon={icons[index]} />
                    ))}
                </div>
            </section>

            <section className="text-center py-8 bg-white rounded-lg shadow-md">
                 <p className="text-lg text-text-secondary">{home.credibility}</p>
            </section>
        </div>
    );
};

export default HomePage;