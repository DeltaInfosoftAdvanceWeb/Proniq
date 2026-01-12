import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | proniq',
    description: 'Terms of Service for using proniq website and services.',
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Terms of Service
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        By accessing our website at proniq, you agree to be bound by these terms of service, all applicable laws and regulations,
                        and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms,
                        you are prohibited from using or accessing this site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Use License</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Permission is granted to temporarily download one copy of the materials (information or software) on proniq's website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>Attempt to decompile or reverse engineer any software contained on proniq's website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Disclaimer</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        The materials on proniq's website are provided on an 'as is' basis. proniq makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Limitations</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        In no event shall proniq or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                        or due to business interruption) arising out of the use or inability to use the materials on proniq's website, even if proniq or a proniq
                        authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Governing Law</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        These terms and conditions are governed by and construed in accordance with the laws of Gujarat, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </section>
            </div>
        </main>
    );
}
