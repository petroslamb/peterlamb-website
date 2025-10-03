import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { ServiceCaseStudy } from '../types';
import MetaTags from '../components/MetaTags';

declare global {
  interface Window {
    marked: {
      parse: (markdown: string, options?: object) => string;
    };
    DOMPurify: {
      sanitize: (html: string) => string;
    };
  }
}

const CaseStudyCard: React.FC<{ caseStudy: ServiceCaseStudy }> = ({ caseStudy }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-primary dark:text-cyan-400 mb-3">{caseStudy.company}</h3>
        <div className="space-y-4">
            <div>
                <h4 className="font-bold text-text-primary dark:text-slate-200 mb-1">The Challenge</h4>
                <p className="text-text-secondary dark:text-slate-400">{caseStudy.challenge}</p>
            </div>
            <div>
                <h4 className="font-bold text-text-primary dark:text-slate-200 mb-2">My Contribution</h4>
                <ul className="space-y-2 text-text-secondary dark:text-slate-400">
                    {caseStudy.solution.map((item, index) => (
                         <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-text-primary dark:text-slate-200 mt-4 mb-2">Technologies Used</h4>
                <ul className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map(tech => (
                        <li key={tech} className="bg-slate-200 dark:bg-slate-700 text-sm text-text-primary dark:text-slate-300 py-1 px-2 rounded-md">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


const ServiceDetailPage: React.FC = () => {
    const { translations } = useLanguage();
    const { slug } = useParams<{ slug: string }>();
    const { services } = translations;
    const [proseHtml, setProseHtml] = useState('');

    const serviceData = services.categories.find(c => c.slug === slug);

    useEffect(() => {
        if (serviceData?.businessProse && window.marked && window.DOMPurify) {
          const dirtyHtml = window.marked.parse(serviceData.businessProse);
          const cleanHtml = window.DOMPurify.sanitize(dirtyHtml);
          setProseHtml(cleanHtml);
        }
      }, [serviceData]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!serviceData) {
        return <Navigate to="/services" replace />;
    }

    const metaDescription = serviceData.intro.length > 160 
        ? serviceData.intro.substring(0, 157) + '...' 
        : serviceData.intro;

    return (
        <div className="max-w-4xl mx-auto">
            <MetaTags 
                title={`${serviceData.title} | ${services.title} | Peter Lamb`} 
                description={metaDescription}
            />
            <div className="mb-8">
                <Link to="/services" className="text-primary dark:text-cyan-400 hover:underline inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 rounded-sm">
                  &larr; {services.backToServices}
                </Link>
            </div>

            <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-3">{serviceData.title}</h1>
                <p className="text-lg text-text-secondary dark:text-slate-300">{serviceData.intro}</p>
            </header>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-md mb-12 prose dark:prose-invert max-w-none text-text-secondary dark:text-slate-300">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-4 !mt-0">A Business-Centric Approach</h2>
                    <article dangerouslySetInnerHTML={{ __html: proseHtml }} />
                </section>
            </AnimatedSection>
            
            <h2 className="text-3xl font-bold text-center text-text-primary dark:text-white mb-8">Relevant Case Studies</h2>
            
            <div className="space-y-8">
                {serviceData.caseStudies.map((caseStudy, index) => (
                    <AnimatedSection key={index} delay={index * 150}>
                        <CaseStudyCard caseStudy={caseStudy} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetailPage;
