'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';
import ScrollStaggerIn from '@/components/animations/ScrollStaggerIn';

const processSteps = [
  {
    icon: "🔍",
    title: "Initial Inspection",
    description: "Every item undergoes a thorough visual examination by our trained specialists to assess condition and authenticity markers."
  },
  {
    icon: "📋",
    title: "Documentation Review",
    description: "We verify all accompanying documentation, including certificates of authenticity, original receipts, and packaging."
  },
  {
    icon: "⚗️",
    title: "Material Analysis",
    description: "Advanced testing methods are used to verify materials, from leather quality to metal composition and gemstone authenticity."
  },
  {
    icon: "✓",
    title: "Final Certification",
    description: "Upon successful verification, each item receives our official certificate of authenticity with detailed inspection results."
  }
];

const faqs = [
  {
    question: "What is your authentication process?",
    answer: "Our authentication process involves multiple stages of inspection by certified experts. We examine materials, craftsmanship, serial numbers, and compare against known authentic references. Each item that passes receives a certificate of authenticity."
  },
  {
    question: "How long does authentication take?",
    answer: "Typically, the authentication process takes 2-3 business days. For items requiring additional expert review, it may take up to 5 business days. We'll keep you informed throughout the entire process."
  },
  {
    question: "What happens if an item fails authentication?",
    answer: "If an item doesn't pass our authentication process, we'll provide a detailed explanation of why it failed. You can choose to have it returned to you at no additional cost or dispose of it securely."
  },
  {
    question: "Is your authentication guaranteed?",
    answer: "Yes, we stand behind every authentication with our lifetime guarantee. If any item we've authenticated is later found to be inauthentic by another reputable service, we'll provide full reimbursement."
  },
  {
    question: "Which brands do you authenticate?",
    answer: "We authenticate all major luxury brands including Louis Vuitton, Gucci, Chanel, Hermès, Prada, Cartier, Rolex, and many others. Our experts specialize in designer bags, accessories, jewelry, and watches."
  }
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0], isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border border-[#EBEBEB] rounded-lg overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F9F9] transition-colors group"
      >
        <span className="text-xl font-playfair font-bold pr-8 group-hover:text-[#D4AF37] transition-colors">{faq.question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? '#D4AF37' : '#0A0A0A' }}
          className="text-2xl"
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-body text-[#4A4A4A] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AuthenticationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#F9F9F9] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-display mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Authenticity Verified
          </motion.h1>
          <motion.p 
            className="text-body text-xl text-[#4A4A4A] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Our rigorous process ensures every item is genuine. Trust is the cornerstone of luxury, and we verify every detail to guarantee your peace of mind.
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-h2 text-center mb-24">Our Authentication Journey</h2>
          </ScrollFadeIn>
          
          <ScrollStaggerIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="text-center p-10 border border-[#EBEBEB] hover:border-[#D4AF37] transition-all duration-500 rounded-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h3 className="text-2xl font-playfair font-bold mb-6 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                <p className="text-body text-[#4A4A4A] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </ScrollStaggerIn>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollFadeIn direction="right">
              <div>
                <h2 className="text-h2 text-white mb-8">Why Professional <br /><span className="text-[#D4AF37]">Verification</span> Matters</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  The luxury goods market is flooded with sophisticated counterfeits. Without proper authentication, even experienced collectors can be misled by "super-fakes".
                </p>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Our team of certified experts has authenticated thousands of luxury items, maintaining an industry-leading accuracy rate. We combine decades of heritage knowledge with latest digital verification technologies.
                </p>
                <ul className="space-y-6">
                  {[
                    "Lifetime authenticity guarantee",
                    "Certified master authenticators",
                    "Molecular material testing",
                    "Comprehensive digital archiving"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-center gap-4 text-white font-montserrat tracking-wide"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[#D4AF37] text-2xl">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="left">
              <div className="relative aspect-[3/4] group">
                <div className="absolute inset-0 border-2 border-[#D4AF37] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop"
                  alt="Authentication process"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-h2 text-center mb-20">Expert Insights & FAQs</h2>
          </ScrollFadeIn>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                faq={faq} 
                isOpen={openFaqIndex === index} 
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#F9F9F9] border-t border-[#EBEBEB]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFadeIn>
            <h2 className="text-h2 mb-8">Ready to Verify Your Collection?</h2>
            <p className="text-body text-xl text-[#4A4A4A] mb-12 max-w-2xl mx-auto">
              Trust our experts to provide the definitive verification your precious pieces deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-12 py-5 text-lg glow-on-hover"
              >
                Book Authentication
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-12 py-5 text-lg"
              >
                View Fees
              </motion.button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
