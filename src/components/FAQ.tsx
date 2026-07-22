'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is Proniq?",
    answer: "Proniq is a workflow-driven iERP software designed specifically for project execution teams in construction, manufacturing, and infrastructure. It helps you manage tenders, BOQs, daily progress, RA billing, and approvals in one unified platform."
  },
  {
    question: "How does Proniq differ from traditional ERPs?",
    answer: "Unlike generic ERPs that focus primarily on accounting and HR, Proniq is execution-focused. It is built around the daily workflows of site engineers, project managers, and execution teams, ensuring seamless field-to-office collaboration."
  },
  {
    question: "Can Proniq handle RA billing and BOQ management?",
    answer: "Yes, Proniq streamlines RA billing by automatically linking it to your BOQs and daily progress reports. This eliminates manual errors, speeds up the approval process, and ensures you get paid faster."
  },
  {
    question: "Is Proniq suitable for my industry?",
    answer: "Proniq is highly adaptable and proven to deliver results in Construction, Engineering, Infrastructure, Manufacturing, and Interior Architecture sectors."
  },
  {
    question: "How long does it take to implement Proniq?",
    answer: "Because Proniq is workflow-driven and intuitive, implementation is significantly faster than traditional ERPs. Most teams are up and running within a few weeks, with full support from our onboarding experts."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-white">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('https://ui.aceternity.com/_next/static/media/grid.569c7dc6.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/10">
            <QuestionMarkCircleIcon className="w-5 h-5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight text-balance">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Proniq and how it can transform your project execution workflows.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-5"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                variants={itemVariants}
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl transition-all duration-500 border ${
                  isOpen 
                    ? 'border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-primary/10 bg-gradient-to-br from-white to-primary/[0.03] scale-[1.01]' 
                    : 'border-slate-200/80 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50'
                }`}
              >
                {/* Active indicator line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-8 ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-primary/90'}`}>
                    {faq.question}
                  </span>
                  <div 
                    className={`flex-shrink-0 p-2.5 rounded-full transition-all duration-300 border ${
                      isOpen 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' 
                        : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary'
                    }`}
                  >
                    <ChevronDownIcon 
                      className={`w-5 h-5 transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-600 md:text-lg leading-relaxed relative">
                        {/* Divider */}
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-70" />
                        <div className="pt-6">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
