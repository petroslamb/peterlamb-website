import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
    const { translations } = useLanguage();
    const { about } = translations;

    const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start">
            <svg className="flex-shrink-0 h-6 w-6 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span>{children}</span>
        </li>
    );

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">{about.title}</h1>
            
            <div className="text-lg text-text-secondary space-y-4">
                <p>
                    <span className="font-bold text-text-primary">{about.greeting}</span>, {about.intro}
                </p>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{about.experienceTitle}</h2>
                    <ul className="space-y-2 text-text-secondary">
                        {about.experience.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{about.educationTitle}</h2>
                    <ul className="space-y-2 text-text-secondary">
                        {about.education.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">{about.languagesTitle}</h2>
                <p className="text-text-secondary">{about.languages}</p>
            </div>
            
            <div className="mt-12 text-center">
                 {/* TODO: Add actual resume link */}
                <button 
                    aria-disabled="true"
                    className="bg-gray-200 text-text-secondary font-bold py-3 px-8 rounded-lg cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    {about.resumeButton}
                </button>
                <p className="text-xs text-gray-500 mt-2">(Coming soon)</p>
            </div>
        </div>
    );
};

export default AboutPage;