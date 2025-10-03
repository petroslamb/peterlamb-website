import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../types';
import { blogPosts } from '../constants/blogPosts';
import MetaTags from '../components/MetaTags';

const BlogCard: React.FC<{ post: BlogPost; readMoreText: string; }> = ({ post, readMoreText }) => (
    <li className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <article className="flex-grow flex flex-col">
            <header className="flex-grow">
                <p className="text-sm text-text-secondary dark:text-slate-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-primary dark:text-cyan-400 mb-3">{post.title}</h3>
                <p className="text-text-secondary dark:text-slate-400">{post.description}</p>
            </header>
            <footer className="mt-4">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                        <span key={tag} className="bg-slate-200 dark:bg-slate-700 text-xs font-medium text-text-secondary dark:text-slate-300 py-1 px-2 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary dark:text-cyan-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800 rounded-sm">
                    {readMoreText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </footer>
        </article>
    </li>
);

const POSTS_PER_PAGE = 10;

const BlogPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { blog } = translations;
    const posts = blogPosts[language];

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const metaDescription = language === 'en'
      ? `Read articles by Peter Lamb on software engineering, AI, MLOps, and consulting. Insights on technology, strategy, and best practices.`
      : `Διαβάστε άρθρα του Peter Lamb για τη μηχανική λογισμικού, την AI, το MLOps και τη συμβουλευτική. Απόψεις για την τεχνολογία, τη στρατηγική και τις βέλτιστες πρακτικές.`;
    
    const filteredPosts = useMemo(() => {
        if (!searchQuery) {
            return posts;
        }
        const query = searchQuery.toLowerCase();
        return posts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }, [posts, searchQuery]);
    
    useEffect(() => {
        setCurrentPage(1);
    }, [language, searchQuery]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const renderPagination = () => {
        if (totalPages <= 1) {
            return null;
        }

        return (
            <nav className="mt-12 flex items-center justify-between" aria-label="Blog post pagination">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary dark:text-slate-200 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    aria-label={blog.prevPage}
                >
                    {blog.prevPage}
                </button>
                <span className="text-sm text-text-secondary dark:text-slate-400" aria-live="polite">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary dark:text-slate-200 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    aria-label={blog.nextPage}
                >
                    {blog.nextPage}
                </button>
            </nav>
        );
    };

    return (
        <div className="max-w-7xl mx-auto">
            <MetaTags 
                title={`${blog.title} | Peter Lamb`} 
                description={metaDescription}
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{blog.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{blog.intro}</p>
            </div>

            <div className="max-w-lg mx-auto mb-12">
                 <label htmlFor="blog-search" className="sr-only">{blog.searchPlaceholder}</label>
                 <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" aria-hidden="true">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        id="blog-search"
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={blog.searchPlaceholder}
                        className="block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 pl-10 pr-3 leading-5 text-text-primary placeholder-gray-500 dark:text-slate-200 dark:placeholder-slate-400 focus:border-primary focus:placeholder-gray-400 dark:focus:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                 </div>
            </div>

            {currentPosts.length > 0 ? (
                <>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} readMoreText={blog.readMore} />
                        ))}
                    </ul>
                    {renderPagination()}
                </>
            ) : (
                <div className="text-center py-16">
                    <p className="text-lg text-text-secondary dark:text-slate-400">{blog.noResults}</p>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
