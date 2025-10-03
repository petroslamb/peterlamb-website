import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
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

const PortfolioItemPage: React.FC = () => {
  const { translations } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [htmlContent, setHtmlContent] = useState('');

  const { portfolio } = translations;
  const project = portfolio.projects.find(p => p.slug === slug);

  useEffect(() => {
    if (project && window.marked && window.DOMPurify) {
      const dirtyHtml = window.marked.parse(project.content);
      const cleanHtml = window.DOMPurify.sanitize(dirtyHtml);
      setHtmlContent(cleanHtml);
    }
  }, [project]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }
  
  const ExternalLinkIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
  );

  const primaryButtonClasses = "inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  const secondaryButtonClasses = "inline-flex items-center justify-center w-full bg-slate-200 dark:bg-slate-700 text-text-primary dark:text-slate-200 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-md max-w-5xl mx-auto">
      <MetaTags 
          title={`${project.title} | ${portfolio.title} | Peter Lamb`} 
          description={project.description}
      />
      <header className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
        <Link to="/portfolio" className="text-primary dark:text-cyan-400 hover:underline mb-4 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800 rounded-sm">
          &larr; {portfolio.backToPortfolio}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-3">{project.title}</h1>
        <p className="text-text-secondary dark:text-slate-400">{project.description}</p>
      </header>

      <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
              <article
                className="prose dark:prose-invert max-w-none text-text-secondary dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
          </div>
          <aside className="md:col-span-4">
              <div className="sticky top-24">
                  <h2 className="text-xl font-bold text-text-primary dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{portfolio.technologiesUsed}</h2>
                  <ul className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                          <li key={tech} className="bg-slate-200 dark:bg-slate-700 text-sm text-text-primary dark:text-slate-300 py-1 px-2 rounded-md">
                              {tech}
                          </li>
                      ))}
                  </ul>
                  
                  {(project.liveLink || project.githubLink) && (
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={primaryButtonClasses}>
                                {portfolio.liveDemo}
                                <ExternalLinkIcon />
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${project.liveLink ? secondaryButtonClasses : primaryButtonClasses} ${project.liveLink ? 'mt-3' : ''}`}>
                                {portfolio.viewOnGithub}
                                <ExternalLinkIcon />
                            </a>
                        )}
                    </div>
                  )}
              </div>
          </aside>
      </div>
    </div>
  );
};

export default PortfolioItemPage;
