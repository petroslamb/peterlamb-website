import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../constants/blogPosts';
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

const BlogPostPage: React.FC = () => {
  const { language, translations } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [htmlContent, setHtmlContent] = useState('');

  const post = blogPosts[language].find(p => p.slug === slug);

  useEffect(() => {
    if (post && window.marked && window.DOMPurify) {
      const dirtyHtml = window.marked.parse(post.content);
      const cleanHtml = window.DOMPurify.sanitize(dirtyHtml);
      setHtmlContent(cleanHtml);
    }
  }, [post]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    // In a real app, you might want a dedicated 404 page
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <MetaTags 
          title={`${post.title} | ${translations.blog.title} | Peter Lamb`} 
          description={post.description}
      />
      <header className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
        <Link to="/blog" className="text-primary dark:text-cyan-400 hover:underline mb-4 inline-block">
          &larr; {translations.blog.backToBlog}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-3">{post.title}</h1>
        <p className="text-text-secondary dark:text-slate-400">{translations.blog.postedOn} {post.date}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map(tag => (
              <span key={tag} className="bg-slate-200 dark:bg-slate-700 text-xs font-medium text-text-secondary dark:text-slate-300 py-1 px-2 rounded-full">
                  {tag}
              </span>
          ))}
        </div>
      </header>
      
      <article
        className="prose dark:prose-invert max-w-none text-text-secondary dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default BlogPostPage;
