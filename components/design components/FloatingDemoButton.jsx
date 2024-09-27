import React from 'react';

const FloatingDemoButton = () => {
    const scrollToDemo = () => {
        const demoSection = document.getElementById('demo');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={scrollToDemo}
            className="fixed bottom-8 left-5 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50 animate-bounce"
        >
            DEMO
        </button>
    );
};

export default FloatingDemoButton;
