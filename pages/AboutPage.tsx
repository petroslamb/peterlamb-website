import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';

const AboutPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { about } = translations;

    const metaDescription = language === 'en'
      ? `Learn about Peter Lamb, a senior software engineer with over 10 years of experience in AI, SaaS, and big data. Discover his technical skills, education, and professional background.`
      : `Μάθετε για τον Peter Lamb, έναν senior software engineer με πάνω από 10 χρόνια εμπειρίας στην AI, το SaaS και τα big data. Ανακαλύψτε τις τεχνικές του δεξιότητες, την εκπαίδευση και το επαγγελματικό του υπόβαθρο.`;

    const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start">
            <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{children}</span>
        </li>
    );

    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <MetaTags 
                title={`${about.title} | Peter Lamb`} 
                description={metaDescription}
            />
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-6 text-center">{about.title}</h1>
            
            <AnimatedSection>
                <section aria-label="Introduction">
                    <div className="text-lg text-text-secondary dark:text-slate-300 space-y-4">
                        <p>
                            <span className="font-bold text-text-primary dark:text-slate-100">{about.greeting}</span>, {about.intro}
                        </p>
                    </div>
                </section>
            </AnimatedSection>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <AnimatedSection delay={200}>
                    <section aria-labelledby="experience-heading">
                        <h2 id="experience-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.experienceTitle}</h2>
                        <ul className="space-y-2 text-text-secondary dark:text-slate-400">
                            {about.experience.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    </section>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                    <section aria-labelledby="education-heading">
                        <h2 id="education-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.educationTitle}</h2>
                        <ul className="space-y-2 text-text-secondary dark:text-slate-400">
                            {about.education.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    </section>
                </AnimatedSection>
            </div>

            <AnimatedSection delay={200}>
                <section className="mt-12" aria-labelledby="skills-heading">
                    <h2 id="skills-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-6 text-center">{about.skillsTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {about.skills.map((category) => (
                            <div key={category.title} className="bg-secondary dark:bg-slate-700 p-4 rounded-lg">
                                <h3 className="font-bold text-primary dark:text-cyan-400 mb-3">{category.title}</h3>
                                <ul className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <li key={item} className="bg-slate-200 dark:bg-slate-600 text-sm text-text-primary dark:text-slate-300 py-1 px-2 rounded-md">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={300}>
                <section className="mt-12" aria-labelledby="languages-heading">
                    <h2 id="languages-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.languagesTitle}</h2>
                    <p className="text-text-secondary dark:text-slate-400">{about.languages}</p>
                </section>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
                <section className="mt-12 text-center" aria-label="Resume Download">
                    {/* TODO: Add actual resume link */}
                    <button 
                        aria-disabled="true"
                        className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 font-bold py-3 px-8 rounded-lg cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        {about.resumeButton}
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">(Coming soon)</p>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default AboutPage;
