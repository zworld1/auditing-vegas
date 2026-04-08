import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldAlert, Zap, CheckCircle, MessageSquare } from 'lucide-react';

const CONFIG = {
  whatsappNumber: "17025550199", 
  agencyName: "AUDITING VEGAS",
};

export default function LandingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendWhatsApp = (msg) => {
    window.open(`https://wa.me{CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-green-500 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">✓</div>
          <span className="font-bold tracking-tighter text-xl">{CONFIG.agencyName}</span>
        </div>
        <button onClick={() => sendWhatsApp("Hi, I'd like a free audit.")} className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-green-500 transition-colors hidden md:block">Free Audit</button>
      </nav>

      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 max-w-4xl">
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium mb-6">LAS VEGAS BUSINESS WATCHDOG</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">Your Business is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Permanently Closed</span> on Google.</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">We resurrect your reputation and plug revenue leaks in <span className="text-white font-bold underline">48 hours.</span></p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('audit-form').scrollIntoView({behavior: 'smooth'})} className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">Start My Free Audit</button>
          </div>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/20 blur-[120px] rounded-full -z-0 opacity-50" />
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {.map((item, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="p-8 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-green-500/50 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="audit-form" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 text-black text-center">
          {!formSubmitted ? (
            <>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Check for Revenue Leaks</h2>
              <form onSubmit={(e) => {e.preventDefault(); setFormSubmitted(true);}} className="grid gap-4">
                <input required type="text" placeholder="Business Name" className="p-4 rounded-xl bg-slate-100 border-none" />
                <input required type="text" placeholder="Your Phone" className="p-4 rounded-xl bg-slate-100 border-none" />
                <button type="submit" className="bg-black text-white py-5 rounded-xl font-bold text-xl">Send Audit Request</button>
              </form>
            </>
          ) : (
            <div className="py-10">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Audit Requested!</h2>
            </div>
          )}
        </div>
      </section>

      <button onClick={() => sendWhatsApp("URGENT: My Google listing needs fixing.")} className="fixed bottom-8 right-8 z-50 bg-black text-white p-4 rounded-full border border-white/20 hover:scale-110 transition-all flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-2"><MessageSquare className="w-6 h-6 text-black" /></div>
        <span className="font-bold pr-2">Emergency Support</span>
      </button>
    </div>
  );
}
