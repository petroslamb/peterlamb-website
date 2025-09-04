import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage: React.FC = () => {
    const { translations } = useLanguage();
    const { contact } = translations;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const mailtoLink = `mailto:petroslamb@gmail.com?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message as string)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{contact.title}</h1>
                <p className="mt-4 text-lg text-text-secondary">{contact.intro}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Details</h2>
                        <div className="space-y-4 text-text-secondary">
                            <p><strong className="font-medium text-text-primary">{contact.email}:</strong> <a href="mailto:petroslamb@gmail.com" className="text-primary hover:underline">petroslamb@gmail.com</a></p>
                            <p><strong className="font-medium text-text-primary">{contact.linkedin}:</strong> <a href="https://linkedin.com/in/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/petroslamb</a></p>
                            <p><strong className="font-medium text-text-primary">{contact.github}:</strong> <a href="https://github.com/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/petroslamb</a></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">{contact.formIntro}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{contact.formName}</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" autoComplete="name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{contact.formEmail}</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{contact.formMessage}</label>
                                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    {contact.formSubmit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;