/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Code, 
  Terminal, 
  Mail, 
  Linkedin, 
  Globe, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  ExternalLink,
  Search,
  Database,
  Layers,
  Binary,
  Cpu,
  Fingerprint,
  MessageSquare,
  Zap,
  Wrench,
  Settings,
  Server,
} from 'lucide-react';
import { Scene } from './components/Scene';
import { CipherGate } from './components/CipherGate';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ThemeToggle } from './components/ThemeToggle';
import { profile } from './data';
import Certifications from './pages/Certifications';
import profileImage from './asstes/WhatsApp_Image_2025-12-18_at_1.33.39_AM__Copy_-removebg-preview.png';
import certifiedApiSecurity from './asstes/Certification/image/certified-api-security-analyst.png';
import imgCertificate from './asstes/Certification/image/ECC-EHE-Certificate.png';
import casaExam from './asstes/Certification/image/CASAExam20260409-31-sj9nmz.png';
import badge1 from './asstes/hacking-bagde/Screenshot From 2026-04-04 10-38-07.png';
import badge2 from './asstes/hacking-bagde/Screenshot From 2026-04-04 11-03-02.png';
import badge3 from './asstes/hacking-bagde/Screenshot From 2026-04-04 11-15-54.png';
import badge4 from './asstes/hacking-bagde/Screenshot From 2026-04-04 11-16-23.png';
import badge5 from './asstes/hacking-bagde/Screenshot From 2026-04-04 11-36-07.png';
import badge6 from './asstes/hacking-bagde/Screenshot From 2026-04-04 12-54-31.png';
import badge7 from './asstes/hacking-bagde/Screenshot From 2026-04-04 14-16-04.png';
import badge8 from './asstes/hacking-bagde/Screenshot From 2026-04-04 16-31-38.png';
import badge9 from './asstes/hacking-bagde/Screenshot From 2026-04-04 16-50-05.png';
import badge10 from './asstes/hacking-bagde/Screenshot From 2026-04-04 17-06-24.png';
import badge11 from './asstes/hacking-bagde/Screenshot From 2026-04-04 17-29-08.png';
import badge12 from './asstes/hacking-bagde/Screenshot From 2026-04-05 16-15-09.png';
import badge13 from './asstes/hacking-bagde/Screenshot From 2026-04-05 16-15-22.png';
import badge14 from './asstes/hacking-bagde/Screenshot From 2026-04-05 16-15-36.png';

const Section = ({ title, icon: Icon, children, id }: { title: string, icon: any, children: React.ReactNode, id: string }) => (
  <section id={id} className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-12"
    >
      <div className="p-3 bg-white/5 rounded-xl border border-white/10">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono italic">{title}</h2>
      <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1" />
    </motion.div>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
          <Scene />

          {/* Decorative HUD */}
          <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden opacity-20">
             <div className="absolute top-24 left-12 w-px h-64 bg-gradient-to-b from-cyan-500 to-transparent" />
             <div className="absolute top-24 left-10 text-[8px] font-mono sky-500 vertical-rl uppercase tracking-[0.5em]">System Diagnostics // OK</div>
             
             <div className="absolute bottom-24 right-12 w-px h-64 bg-gradient-to-t from-cyan-500 to-transparent" />
             <div className="absolute bottom-24 right-10 text-[8px] font-mono sky-500 vertical-lr uppercase tracking-[0.5em] rotate-180">Digital Signature // Verified</div>
          </div>

          {/* Navigation */}
          <nav className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 px-6' : 'py-8 px-6'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black group-hover:rotate-12 transition-transform">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tighter text-lg leading-none">ROSLY</span>
                  <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-mono uppercase">Applied Researcher</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-8">
                <ThemeToggle />
                <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-zinc-400">
                  {['About', 'Projects', 'Experience', 'Education', 'Testimonials', 'Certifications'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-cyan-400 transition-colors uppercase relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full" />
                    </a>
                  ))}
                  <a 
                    href="mailto:mamakemrosly@gmail.com"
                    className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-all text-xs"
                  >
                    Email me!
                  </a>
                </div>
              </div>
            </div>
          </nav>

      {/* Hero */}
      <header className="min-h-screen flex flex-col justify-center px-6 relative">
        <div className="max-w-6xl mx-auto space-y-12 z-10">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase"
                >
                  <div className="w-12 h-px bg-cyan-400" />
                  Humanizing Infrastructure
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8"
                >
                  MAMEKEM <br />
                  <span className="hero-name-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-zinc-800">ROSLY</span>
                </motion.h1>

                    <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed"
            >
              Building the next generation of <span className="text-white border-b border-cyan-500/30 font-mono">secure technological ecosystems</span> where math meets curiosity.
            </motion.p>

            <div className="space-y-4 pt-8 border-t border-white/10">
                 
                 
                 <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10">
                   <div className="flex items-center gap-3 mb-2">
                     <Award className="w-5 h-5 text-cyan-400" />
                     <span className="text-sm font-bold text-white uppercase tracking-widest">UNDP Tech4Peace AMBASSADOR</span>
                   </div>
                   <p className="text-sm text-zinc-400">Give One Project Program</p>
                 </div>
               </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="w-128 h-[calc(100% -70px)] rounded-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Mamekem Rosly"
                    className="w-full h-full scale-110 object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full animate-pulse" />
              </motion.div>
            </div>
              
        
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:border-cyan-500/50 transition-colors backdrop-blur-md">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-mono tracking-tight text-white/80">mamakem-rosly.vercel.app</span>
            </div>
            <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-4 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Active Research Phase</span>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="absolute bottom-12 left-6 right-6 flex justify-between items-end border-t border-white/5 pt-6"
        >
          <div className="flex flex-col gap-1">
             <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">V. 2026.05.10</span>
             <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Status: Deployment Ready</span>
          </div>
          <div className="flex flex-col items-end gap-1">
             <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-2">
                <Search className="w-3 h-3" /> Discovering Anomalies
             </span>
             <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-cyan-500" 
                />
             </div>
          </div>
        </motion.div>
      </header>

      {/* Philosophy / Bio */}
      <Section id="about" title="Philosophy" icon={Terminal}>
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
               <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.4em] mb-4 underline underline-offset-8">Executive Summary</h3>
               <p className="text-2xl text-white font-light leading-relaxed">
                 "{profile.motto}"
               </p>
               <p className="text-lg leading-relaxed text-zinc-400 font-light">
                 {profile.bio}
               </p>
               
               
            </div>
            
            <div className="flex items-center gap-6">
              <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" className="p-5 bg-white/5 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all border border-white/10 group">
                <Linkedin className="w-6 h-6 group-hover:rotate-12" />
              </a>
              <a href={`mailto:${profile.email}`} className="flex-1 p-5 bg-white/5 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all border border-white/10 flex items-center justify-center gap-3 group">
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm tracking-widest uppercase">Contact Node</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] -z-10" />
            <Card className="flex flex-col gap-6 p-8 mb-8 border-cyan-500/20 bg-cyan-500/5">
              <Shield className="w-10 h-10 text-cyan-400" />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs text-white">Full-Stack Defense</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed">Hardened cloud architectures and secure API design patterns.</p>
              </div>
            </Card>
            <Card className="flex flex-col gap-6 p-8 border-purple-500/20 mt-8">
              <Binary className="w-10 h-10 text-purple-400" />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs text-white">Neural Anomaly</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed">Graph Neural Networks applied to IoT intrusion detection.</p>
              </div>
            </Card>
            <Card className="flex flex-col gap-6 p-8 border-orange-500/20 -mt-8">
              <Fingerprint className="w-10 h-10 text-orange-400" />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs text-white">Crypto Analyst</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed">Expertise in PKI, RSA, and post-quantum lattice research.</p>
              </div>
            </Card>
            <Card className="flex flex-col gap-6 p-8 border-lime-500/20">
              <Cpu className="w-10 h-10 text-lime-400" />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs text-white">Systems Architect</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed">Creating elegant ecosystems that solve real-world problems.</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 3D Projects Carousel */}
      <ProjectCarousel />

      {/* Experience Journey */}
      <Section id="experience" title="Professional Flow" icon={Briefcase}>
        <div className="space-y-20 relative">
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-white/10 to-transparent" />
          
          {profile.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-12 group"
            >
              <div className="w-20 shrink-0 font-mono text-[10px] text-zinc-500 pt-6 tracking-tighter sticky top-24 h-fit">
                {exp.period}
              </div>
              <div className="flex-1 space-y-6 pb-20 pl-8 relative">
                <div className="absolute top-6 -left-[5px] w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10 group-hover:scale-150 transition-transform" />
                
                <Card className="p-8 border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="space-y-1">
                       <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight italic uppercase">{exp.role}</h3>
                       <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full border border-white/10 font-mono text-zinc-400">
                       {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-4">
                        <div className="mt-2 w-1 h-1 bg-cyan-500 shrink-0 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

  

      {/* Rest of Education & Skills */}
      <Section id="education" title="Academic Matrix" icon={BookOpen}>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.education.filter(e => !e.degree.includes('Cryptology')).map((edu, idx) => (
            <Card key={idx} className="h-full group">
              <span className="text-[10px] font-mono text-zinc-500 mb-4 block tracking-[0.4em] uppercase">{edu.period}</span>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter italic group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
              <p className="text-zinc-400 mb-8 font-light italic">{edu.school} — {edu.location}</p>
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-zinc-500 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </Card>

            
          ))}
        </div>
      </Section>

      {/* Research Interests Section */}
      <Section id="research-interests" title="Research Interests" icon={Search}>
        <div className="grid md:grid-cols-1 gap-8">
           <Card className="border-cyan-500/30 bg-cyan-500/5 col-span-full mb-8">
              <div className="flex items-center gap-6">
                 <div className="p-4 bg-cyan-500 rounded-2xl text-black">
                    <Search className="w-8 h-8" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-xl font-bold uppercase italic tracking-tighter">Research Domain</h3>
                    <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">Advanced AI Security & Cryptology Research</p>
                 </div>
              </div>
           </Card>

           {/* Pending Publication */}
           <Card className="border-purple-500/30 bg-purple-500/5">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-purple-500 rounded-xl text-black">
                    <BookOpen className="w-6 h-6" />
                 </div>
                 <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/20 px-2 py-1 rounded">Pending Publication</span>
                       <span className="text-xs text-zinc-500">NeurIPS 2026 Conference</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Hidden-State Safety Monitoring for Frozen Neural Networks</h4>
                    <a
                       href="https://openreview.net/forum?id=wyzYPgkqvR&noteId=wyzYPgkqvR"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors underline"
                    >
                       View on OpenReview →
                    </a>
                 </div>
              </div>
           </Card>

           {/* Research Interests List */}
           <Card className="border-white/10">
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-tight">Core Research Areas</h4>
              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                       <h5 className="text-sm font-semibold text-white">Safe Artificial Intelligence</h5>
                       <p className="text-xs text-zinc-400 mt-1">Designing secure neural network layers that can suppress or avoid specific output regions</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-3">
                    <Fingerprint className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                       <h5 className="text-sm font-semibold text-white">Anomaly Detection and Intrusion Detection Systems</h5>
                       <p className="text-xs text-zinc-400 mt-1">Advanced detection mechanisms for network security threats</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                       <h5 className="text-sm font-semibold text-white">Cryptology, Lightweight Cryptography, and IoT Network Security</h5>
                       <p className="text-xs text-zinc-400 mt-1">Efficient cryptographic solutions for resource-constrained environments</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                       <h5 className="text-sm font-semibold text-white">Trustworthy Machine Learning and Cybersecurity Applications</h5>
                       <p className="text-xs text-zinc-400 mt-1">Building reliable AI systems for cybersecurity challenges</p>
                    </div>
                 </div>
              </div>
           </Card>
        </div>

              <h2 className="text-cyan-400 font-bold mt-10 -mb-20  uppercase text-3xl animate-pulse w-full   ? italic tracking-tighter ">GAME: What I did between 2023-2025 ?</h2>

      </Section>

              {/* Private Cryptography Sector (Gated) */}
      <CipherGate>
        <Section id="research" title="Cryptology Sector" icon={Lock}>
          <div className="grid md:grid-cols-1 gap-8">
             <Card className="border-cyan-500/30 bg-cyan-500/5 col-span-full mb-8">
                <div className="flex items-center gap-6">
                   <div className="p-4 bg-cyan-500 rounded-2xl text-black">
                      <Lock className="w-8 h-8" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-xl font-bold uppercase italic tracking-tighter">Verified Access Granted</h3>
                      <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">Proprietary Research & Advanced Cryptography</p>
                   </div>
                </div>
             </Card>

             {profile.education.filter(e => e.degree.includes('Cryptology')).map((edu, idx) => (
                <Card key={idx} className="h-full border-white/10">
                   <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-widest">{edu.period}</span>
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tight italic">{edu.degree}</h3>
                   <div className="space-y-6">
                      <p className="text-zinc-400 text-sm">{edu.school}</p>
                      <ul className="space-y-3">
                         {edu.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-zinc-500 flex items-start gap-3">
                               <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                               {h}
                            </li>
                         ))}
                      </ul>
                   </div>
                </Card>
             ))}

          </div>
        </Section>
      </CipherGate>
      <Section id="testimonials" title="Testimony" icon={MessageSquare}>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.testimonials?.map((t, idx) => (
            <Card key={idx} className="flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <MessageSquare className="w-24 h-24 rotate-12" />
              </div>
              <p className="text-zinc-400 italic leading-relaxed z-10">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 z-10">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-tight text-sm">{t.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>



      <Section id="skills" title="Intelligence Layer" icon={Binary}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {Object.entries(profile.skills).map(([category, items]) => {
            const getCategoryIcon = (cat: string) => {
              switch (cat) {
                case 'security': return <Shield className="w-6 h-6 text-red-400" />;
                case 'programming': return <Code className="w-6 h-6 text-blue-400" />;
                case 'frameworks': return <Layers className="w-6 h-6 text-green-400" />;
                case 'tools': return <Wrench className="w-6 h-6 text-purple-400" />;
                default: return <Binary className="w-6 h-6 text-cyan-400" />;
              }
            };

            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3 mb-10">
                  {getCategoryIcon(category)}
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.6em] text-zinc-600 rotate-180 [writing-mode:vertical-lr]">{category}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {items.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-xs font-mono group cursor-default"
                    >
                      <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-zinc-400 group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


              <Card className="h-full mt-4 border-white/10">
                <h3 className="text-xl font-black mb-6 uppercase tracking-tight italic">Technical Matrix</h3>
                <div className="space-y-8">
                    {Object.entries(profile.skills).slice(0, 2).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-4">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-zinc-400">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
             </Card> 
      </Section>



      {/* Certifications Section */}
      <Section id="certifications" title="Certifications" icon={Award}>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-black/50 rounded-lg mb-4">
              <img 
                src={casaExam} 
                alt="CASA Exam Certification"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">CASA Certified Professional</h3>
              <p className="text-xs text-zinc-500 font-mono uppercase">Cloud Application Security Alliance • 2026</p>
              <p className="text-sm text-zinc-400">Advanced cloud application security and secure development practices</p>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-black/50 rounded-lg mb-4">
              <img 
                src={certifiedApiSecurity} 
                alt="Certified API Security Analyst"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Certified API Security Analyst</h3>
              <p className="text-xs text-zinc-500 font-mono uppercase">APISec University • 2026</p>
              <p className="text-sm text-zinc-400">Advanced API security testing and vulnerability assessment</p>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-black/50 rounded-lg mb-4">
              <img 
                src={imgCertificate} 
                alt="Certificate"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">ECC Excellence Certificate</h3>
              <p className="text-xs text-zinc-500 font-mono uppercase">European Cybersecurity Challenge • 2024</p>
              <p className="text-sm text-zinc-400">Excellence in cryptographic implementations and security protocols</p>
            </div>
          </Card>

          <Link to="/certifications">
            <Card className="group overflow-hidden hover:border-cyan-500/30 transition-all cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Award className="w-16 h-16 text-cyan-400 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">25+ Certifications</h3>
                    <p className="text-xs text-zinc-500 font-mono uppercase">Coursera, ISC2, Infosec</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-zinc-400">Complete collection including AI for Cybersecurity, Machine Learning, CISSP Prep, and more</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-mono text-cyan-400">AI/ML</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-mono text-purple-400">Security</span>
                  <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs font-mono text-green-400">Cryptography</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 font-mono mb-6">Additional certifications available upon request</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/certifications"
              className="group flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              View All Certifications
            </a>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Verified Credentials</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
                <Database className="w-3 h-3" />
                <span>Blockchain Verified</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="hacking" title="Hacking Badges" icon={Lock}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { src: badge1, title: 'Hacking TP 01', tp: 'TP 01', description: 'Introduction aux techniques de base du hacking éthique' },
            { src: badge2, title: 'Hacking TP 02', tp: 'TP 02', description: 'Analyse de vulnérabilités réseau et sécurisation' },
            { src: badge5, title: 'Hacking TP 05', tp: 'TP 05', description: 'Exploitation avancée et post-exploitation' },
            { src: badge6, title: 'Hacking TP 06', tp: 'TP 06', description: 'Cryptographie appliquée et attaques cryptographiques' },
            { src: badge7, title: 'Hacking TP 07', tp: 'TP 07', description: 'Sécurité des applications web et injection SQL' },
            { src: badge8, title: 'Hacking TP 08', tp: 'TP 08', description: 'Pentesting complet et méthodologie' },
            { src: badge9, title: 'Hacking TP 09', tp: 'TP 09', description: 'Forensic digital et analyse de logs' },
            { src: badge10, title: 'Hacking TP 10', tp: 'TP 10', description: 'Sécurité IoT et attaques sur objets connectés' },
            { src: badge11, title: 'Hacking TP 11', tp: 'TP 11', description: 'Social engineering et phishing avancé' },
            { src: badge12, title: 'Hacking TP 12', tp: 'TP 12', description: 'Reverse engineering et analyse binaire' },
            { src: badge13, title: 'Hacking TP 13', tp: 'TP 13', description: 'Sécurité cloud et attaques sur infrastructure' },
            { src: badge14, title: 'Hacking TP 14', tp: 'TP 14', description: 'CTF challenges et résolution de problèmes complexes' },
          ].map((badge, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden hover:border-cyan-500/30 transition-all cursor-pointer"
              onClick={() => setSelectedBadge(badge)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/50 rounded-4xl mb-4">
                <img
                  src={badge.src}
                  alt={badge.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{badge.title}</h3>
                <p className="text-xs text-zinc-500 font-mono uppercase">{badge.tp}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-sm text-zinc-500">Ces captures représentent les TP de hacking et les badges obtenus durant les sessions de challenge.</div>
      </Section>

      {/* Badge Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/95 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
              <div>
                <h3 className="text-3xl font-black text-white">{selectedBadge.title}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mt-2">{selectedBadge.tp}</p>
              </div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-white/80 hover:text-white text-3xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] p-6">
              <div className="rounded-4xl bg-black/80 p-4 flex items-center justify-center">
                <img
                  src={selectedBadge.src}
                  alt={selectedBadge.title}
                  className="max-h-[500px] w-full object-contain rounded-4xl"
                />
              </div>
              <div className="space-y-4 text-white">
                <p className="text-sm leading-relaxed text-zinc-300">{selectedBadge.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Badge Status</span>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-400">Completed & Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16">
          <div className="space-y-8">
             <div className="flex justify-center">
                <div className="w-16 h-1 bg-cyan-500 rounded-full" />
             </div>
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-tight">
               Let's harden the <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-900 dark:from-cyan-400 dark:to-white  to-black">Digital Frontier</span>
             </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
             <a 
               href={`mailto:${profile.email}`}
               className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
             >
               <span className="footer-cta-label relative z-10 group-hover:text-white transition-colors">Terminate & Handshake</span>
               <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
             </a>
             <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl backdrop-blur-md">
                <Layers className="w-5 h-5 text-zinc-500" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Protocol: Secure (TLS 1.3)</span>
             </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.5em] font-mono text-zinc-700 uppercase">
          <span>IDENTITY: {profile.name} // NODE: CP721</span>
          <div className="flex gap-12">
            <a href={`https://${profile.web}`} className="hover:text-white transition-colors">Interface Home</a>
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Logs</a>
          </div>
          <span>Built with Entropy & Passion</span>
        </div>
      </footer>
        </div>
      } />
      <Route path="/certifications" element={<Certifications />} />
    </Routes>
  );
}

