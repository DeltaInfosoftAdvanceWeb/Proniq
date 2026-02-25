import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | proniq',
    description: 'Privacy Policy for proniq services and website.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Privacy Policy
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Welcome to proniq. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Data We Collect</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. How We Use Your Data</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Data Security</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <a href="mailto:info@deltainfosoft.com" className="text-primary hover:text-primary/80 ml-1">info@deltainfosoft.com</a>
                    </p>
                </section>
            </div>
        </main>
    );
}
