import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ project: PortfolioItem }> = ({ project }) => (
    <li className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
        </div>
        <h3 className="text-xl font-bold text-primary dark:text-cyan-400 mb-2">{project.title}</h3>
        <p className="text-text-secondary dark:text-slate-400">{project.description}</p>
    </li>
);

const PortfolioPage: React.FC = () => {
    const { translations } = useLanguage();
    const { portfolio } = translations;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{portfolio.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{portfolio.intro}</p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.projects.map((project, index) => (
                    <PortfolioCard key={index} project={project} />
                ))}
            </ul>

            <div className="text-center mt-16">
                <a 
                    href="https://github.com/petroslamb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    {portfolio.githubCta}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A.75.75 0 0114.25 6h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V8.25l-4.5 4.5" /></svg>
                </a>
            </div>
        </div>
    );
};

export default PortfolioPage;
