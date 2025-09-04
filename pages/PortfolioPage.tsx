import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ project: PortfolioItem }> = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-text-secondary">{project.description}</p>
    </div>
);

const PortfolioPage: React.FC = () => {
    const { translations } = useLanguage();
    const { portfolio } = translations;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{portfolio.title}</h1>
                <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">{portfolio.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.projects.map((project, index) => (
                    <PortfolioCard key={index} project={project} />
                ))}
            </div>

            <div className="text-center mt-16">
                <a 
                    href="https://github.com/petroslamb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    {portfolio.githubCta}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </div>
    );
};

export default PortfolioPage;