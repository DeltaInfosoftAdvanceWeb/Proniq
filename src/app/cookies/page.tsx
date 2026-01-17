'use client';

import { useState } from 'react';

export default function CookieSettings() {
    const [preferences, setPreferences] = useState({
        essential: true, // Always true
        analytics: true,
        marketing: false,
        functional: true,
    });

    const handleToggle = (key: keyof typeof preferences) => {
        if (key === 'essential') return;
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Cookie Settings
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Manage how we use cookies on your device.
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 md:p-8 space-y-8">

                    {/* Explanation */}
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We use cookies to improve your experience on our website. Some cookies are essential for the site to function,
                            while others help us understand how you use our site or show you relevant advertising.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <CookieOption
                            title="Essential Cookies"
                            description="These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms."
                            enabled={preferences.essential}
                            onToggle={() => handleToggle('essential')}
                            locked={true}
                        />

                        <CookieOption
                            title="Performance & Analytics"
                            description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."
                            enabled={preferences.analytics}
                            onToggle={() => handleToggle('analytics')}
                        />

                        <CookieOption
                            title="Functional Cookies"
                            description="These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages."
                            enabled={preferences.functional}
                            onToggle={() => handleToggle('functional')}
                        />

                        <CookieOption
                            title="Marketing Cookies"
                            description="These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites."
                            enabled={preferences.marketing}
                            onToggle={() => handleToggle('marketing')}
                        />
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                        <button
                            className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => {
                                setPreferences({
                                    essential: true,
                                    analytics: true,
                                    functional: true,
                                    marketing: true,
                                });
                            }}
                        >
                            Accept All
                        </button>
                        <button
                            className="px-6 py-2.5 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                            onClick={() => {
                                // Save logic would go here
                                alert('Preferences saved!');
                            }}
                        >
                            Save Preferences
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

function CookieOption({
    title,
    description,
    enabled,
    onToggle,
    locked = false
}: {
    title: string;
    description: string;
    enabled: boolean;
    onToggle: () => void;
    locked?: boolean;
}) {
    return (
        <div className="flex items-start justify-between gap-6 py-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
            <div className="space-y-1">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    {title}
                    {locked && <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">Required</span>}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>

            <button
                onClick={onToggle}
                disabled={locked}
                className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
          ${enabled ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}
          ${locked ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'}
        `}
            >
                <span
                    className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? 'translate-x-6' : 'translate-x-1'}
          `}
                />
            </button>
        </div>
    );
}
