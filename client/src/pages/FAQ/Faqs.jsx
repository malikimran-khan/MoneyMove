import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons

export const Faqs = () => {
  const faqs = [
    { q: "What is Fintec Markets and How Does It Work?", a: "Fintec Markets is a copy Trading service provider that allows investors to automatically replicate the trades of expert traders in real time. Important: Fintec Markets is not a broker. Instead, it integrates with trusted, regulated brokers." },
    { q: "How can I open an account?", a: "You can register through our website by filling out the signup form with your personal details." },
    { q: "Is my data secure with you?", a: "Yes, we use top-grade encryption and follow international data protection standards to keep your information safe." },
    { q: "Do you offer support 24/7?", a: "Yes, our customer support team is available around the clock to assist you with any issues." },
    { q: "Can I use your services globally?", a: "Our services are available in multiple countries. Please check the list of supported regions on our site." },
    { q: "What payment methods are accepted?", a: "We accept major credit cards, bank transfers, and selected e-wallets." },
    { q: "How do I reset my password?", a: "Go to the login page and click 'Forgot Password' to receive reset instructions via email." },
    { q: "Can I access reports and analytics?", a: "Yes, all users have access to detailed transaction and performance reports through the dashboard." },
    { q: "Do you charge hidden fees?", a: "No, all our charges are transparent and clearly stated in your pricing plan." },
    { q: "How do I contact support?", a: "You can reach us via email, live chat, or the contact form available on our website." },
    { q: "Can I cancel my account anytime?", a: "Yes, you can close your account at any time without additional charges." },
    { q: "Are there discounts for businesses?", a: "Yes, we offer tailored pricing for businesses depending on volume and service usage." },
    { q: "Do you have a mobile app?", a: "Yes, our mobile app is available for both Android and iOS users." },
    { q: "Can multiple users access one account?", a: "Yes, you can set up multi-user access with custom permissions for team members." },
    { q: "How do I verify my identity?", a: "You’ll need to upload valid identification documents during account setup for verification." },
    { q: "Do you integrate with other platforms?", a: "Yes, we support integrations with CRM tools, accounting software, and API connections." },
    { q: "Is there a demo available?", a: "Yes, you can request a free demo to explore our platform features before subscribing." },
    { q: "How long does onboarding take?", a: "Account approval and onboarding usually take 1–2 business days after document verification." },
    { q: "Do you support cryptocurrency payments?", a: "We are currently exploring this option and will make an announcement once available." },
    { q: "Can I change my subscription plan?", a: "Yes, you can upgrade or downgrade your plan anytime from your dashboard." },
    { q: "Do you provide training or tutorials?", a: "Yes, we offer free webinars, tutorials, and guides to help you understand our tools better." },
    { q: "What browsers are supported?", a: "Our platform works best on the latest versions of Chrome, Firefox, Safari, and Edge." },
    { q: "How can I track my transactions?", a: "You can track every transaction in real time through your dashboard." },
    { q: "Where can I find your privacy policy?", a: "Our privacy policy is available at the bottom of our website for full transparency." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[#3f5224] px-6 sm:px-10 md:px-20 py-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Frequently Asked Questions
      </motion.h1>


      <div className="max-w-6xl mx-auto space-y-5">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            className="border border-[#064e3b]/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center"
            >
              <span>{item.q}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#064e3b]"
              >
                {openIndex === i ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-4 text-[#3f5224]/80 text-base border-t border-[#064e3b]/20 overflow-hidden"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 items-center justify-center flex">
        <button className="px-8 py-3 bg-[#8dc442] hover:bg-[#7bbc3a] text-[#3f5224] font-bold rounded-lg shadow-md transition-all duration-300">
          Connect Now
        </button>
      </div>
    </div>
  );
};
