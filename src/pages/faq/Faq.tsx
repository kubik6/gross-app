import React, { useState, useEffect } from 'react';
import '@/pages/faq/Faq.scss';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    { question: 'How do I apply for a job?', answer: 'You can apply by filling out our online application form on the job posting.' },
    { question: 'How to edit my resume?', answer: 'Go to your profile and click “Edit Resume” to update your information.' },
    { question: 'How can I delete my account?', answer: 'To delete your account, contact support or visit your account settings.' },
    { question: 'Is it free to use the platform?', answer: 'Yes, basic features are free. Some advanced features may require a subscription.' },
    { question: 'How do I change my password?', answer: 'Go to your account settings and click “Change Password.”' },
    { question: 'Can I apply for multiple jobs?', answer: 'Absolutely! You can submit applications to as many jobs as you like.' },
];

const Faq: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setOpenIndices([]);
        } else {
            const matches = faqItems
                .map((item, index) => item?.question.toLowerCase().includes(searchTerm.toLowerCase()) ? index : -1)
                .filter(index => index > -1);
            setOpenIndices(matches);
        }
    }, [searchTerm]);

    const toggle = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const highlight = (text: string) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|\\[\\]\\\\]/g, '\\$&')})`, 'gi');
        return text.split(regex)
            .map((part, i) =>
                regex.test(part) ? `<mark key=${i}>${part}</mark>` : part
            )
            .join('');
    };

    return (
        <div className="faq">
            <h2 className="faq__title">FAQ</h2>
            <p className="faq__subtitle">How can we help you?</p>

            <div className="faq__search-container">
                <input
                    id='faqSearch'
                    type="text"
                    className="faq__search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="faq__items">
                {faqItems.map((item, index) => {
                    const isOpen = openIndices.includes(index);
                    return (
                        <div
                            className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                            key={index}
                        >
                            <div
                                className="faq__question"
                                onClick={() => toggle(index)}
                            >
                                <span
                                    className="faq__question-text"
                                    dangerouslySetInnerHTML={{ __html: highlight(item?.question) }}
                                />
                                <span className="faq__icon">{isOpen ? '−' : '+'}</span>
                            </div>
                            {isOpen && (
                                <div className="faq__answer">
                                    {item?.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;