import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategory } from '../types';

const ServiceCategoryCard: React.FC<{ category: ServiceCategory }> = ({ category }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">{category.title}</h2>
        <ul className="space-y-3 text-text-secondary">
            {category.items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ServicesPage: React.FC = () => {
    const { translations } = useLanguage();
    const { services } = translations;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{services.title}</h1>
                <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">{services.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.categories.map((category, index) => (
                    <ServiceCategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;