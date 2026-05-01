"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const baseRow1 = [
  { name: "Muhammad Iqbal", handle: "@mhmiqbl", text: "sangat worth it untuk menambah pengalaman dan ilmu be...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=MI" },
  { name: "Restu Bagus", handle: "@restu_bagus", text: "Logis dan realistis dalam menyelesaikan masalah, minu...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=RB" },
  { name: "Anggit Asmoro", handle: "@anggit_znt", text: "Sangat dapat diandalkan, menunjukkan integritas tingg...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=AA" },
  { name: "Indra Tri", handle: "@indraa.", text: "Beliau ini sangat sepuh kalo urusan desain grafis, ui...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=IT" },
  { name: "Hakam", handle: "@hakam", text: "Sangat profesional dan cepat tanggap dalam setiap proses...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=HK" },
];
const testimonialsRow1 = [...baseRow1, ...baseRow1];

const baseRow2 = [
  { name: "Sony", handle: "@sonyx", text: "Kerja cerdas🔥", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=SN" },
  { name: "Niessye Hani", handle: "@niessyehan", text: "sigap langsung to the point, sikap profesional, the b...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=NH" },
  { name: "Agam", handle: "@agam", text: "Kemampuan yang diluar nalar sudah di tahap master dan...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=AG" },
  { name: "Faizhal Rafi", handle: "@faizhal", text: "Produknya sangat bagus dan sangat memuaskan...", image: "https://placehold.co/100x100/2a2a2a/ffffff?text=FR" },
];
const testimonialsRow2 = [...baseRow2, ...baseRow2];

export default function Home() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-800 font-sans">
      {/* Navbar Container */}
      <div className="w-full flex justify-center pt-6 px-4 fixed top-0 z-50">
        {/* Floating Pill Navbar (Dark Theme) */}
        <nav className="flex items-center justify-between pl-5 pr-2 py-2 max-w-[1200px] w-full bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 shadow-sm">

          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="text-[#DE5C3B] flex-shrink-0">
              {/* Abstract Phoenix/Bird Logo SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5C12 2.5 13.5 6 17 8C20.5 10 23 9.5 23 9.5C23 9.5 19.5 12 16.5 14C13.5 16 11 21.5 11 21.5C11 21.5 11.5 17 9 14.5C6.5 12 1.5 11.5 1.5 11.5C1.5 11.5 5 11 8 9C11 7 12 2.5 12 2.5Z" />
              </svg>
            </div>
            <span className="font-bold text-[18px] tracking-tight text-white">Jimly</span>
          </div>

          {/* Middle: Links */}
          <div className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-zinc-400 mr-auto ml-12">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            {/* <Link href="#" className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 font-semibold text-[13.5px] hover:bg-zinc-800 hover:text-white transition-colors">
              Join as supplier
            </Link> */}
            <Link href="mailto:jimlyasidqi23@gmail.com" className="px-7 py-2.5 rounded-full bg-white text-black font-semibold text-[13.5px] hover:bg-zinc-200 transition-colors">
              Work with me
            </Link>
          </div>

        </nav>
      </div>

      {/* Hero Section */}
      <main className="max-w-[1200px] mx-auto px-8 pt-32 md:pt-56 pb-20">
        <h1 className="text-[40px] md:text-[52px] lg:text-[56px] leading-[1.1] font-semibold tracking-[-0.02em] text-white mb-8">
          Jimly Assidqi As a Fullstack Web Developer, I have a passion for creating engaging and user-friendly web applications.
        </h1>

        <p className="font-mono text-[19px] md:text-[21px] text-zinc-400 leading-[1.6] mb-14 max-w-[760px]">
          <span className="text-zinc-100 font-medium">Fullstack Web Developer</span> with a passion for building engaging applications using <span className="text-zinc-100 font-medium">Next.js and Express</span> Currently a <span className="text-zinc-100 font-medium">6th-semester student</span> at Amikom Purwokerto. Previously won<span className="text-zinc-100 font-medium">1st Place</span>, in multiple national web development and programming competitions. <span className="text-zinc-100 font-medium"></span>
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-6">
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a href="mailto:jimlyasidqi23@gmail.com" className="flex items-center justify-center gap-2.5 bg-white text-black px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-zinc-200 transition-colors w-full sm:w-auto">
              Contact me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>

            <a href="/assets/CV%20Jimly%20En.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 border border-zinc-700 text-white px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-zinc-800 transition-colors w-full sm:w-auto">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
            </a>
          </div>

          <div className="flex items-center gap-6 text-white w-full sm:w-auto justify-end">
            <a href="https://www.linkedin.com/in/jimlyassidqihardiansyah/" className="hover:text-zinc-400 transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            {/* <a href="#" className="hover:text-zinc-400 transition-colors" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a> */}
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="max-w-[1200px] mx-auto px-8 pb-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[24px] font-mono md:text-[36px] font-bold text-white mb-2 tracking-tight">
            Services
          </h2>
          <p className="text-zinc-400 text-[15px]">
            Here are the services I provide to help you build your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-[#12121A] rounded-xl p-8 border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="text-[#60A5FA]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-[18px] font-bold text-white">Frontend Development</h3>
            </div>
            <p className="text-zinc-400 text-[14px] leading-[1.6] font-mono">
              Crafting highly interactive, mobile-first web applications and elegant user interfaces leveraging React, JavaScript, HTML, CSS, and other modern technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#12121A] rounded-xl p-8 border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="text-[#60A5FA]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <h3 className="text-[18px] font-bold text-white">Backend Development</h3>
            </div>
            <p className="text-zinc-400 text-[14px] leading-[1.6] font-mono">
              Architecting secure, scalable server-side solutions, managing databases, developing RESTful APIs, and implementing core business logic with Node.js, PHP, or Python.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#12121A] rounded-xl p-8 border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="text-[#60A5FA]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className="text-[18px] font-bold text-white">DevOps & Deployment</h3>
            </div>
            <p className="text-zinc-400 text-[14px] leading-[1.6] font-mono">
              Automating deployment workflows through CI/CD pipelines, provisioning cloud infrastructure, and utilizing Docker containerization to deliver fast, secure, and reliable releases.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-8 pb-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[24px] font-mono md:text-[36px] font-bold text-white mb-2 tracking-tight">
            Projects
          </h2>
          <p className="text-zinc-400 text-[15px]">
            A selection of my recent work and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <a href="https://elobright.com" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
            <div className="h-56 w-full bg-zinc-800 relative">
              <img src="/assets/elobright.png" alt="Elobright" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">Elobright</h3>
              <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS, Express</p>
              <p className="text-zinc-400 text-[14px] leading-[1.6]">
                Website komprehensif untuk memfasilitasi tes bahasa Inggris seperti TOEFL dan IELTS. Platform ini dirancang untuk memberikan pengalaman ujian yang lancar dan interaktif bagi para penggunanya.
              </p>
            </div>
          </a>

          {/* Project 2 */}
          <a href="https://invictus-gc.com" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
            <div className="h-56 w-full bg-zinc-800 relative">
              <img src="/assets/invictus.png" alt="Invictus Global Consultancy" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">Invictus Global Consultancy</h3>
              <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS</p>
              <p className="text-zinc-400 text-[14px] leading-[1.6]">
                Sebuah perusahaan konsultan strategis global yang berfokus pada transformasi digital, AI, dan pengembangan kapabilitas organisasi. Invictus tidak hanya memberikan saran (advisory), tetapi juga terlibat langsung dalam eksekusi dan implementasi transformasi melalui dua pendekatan utamanya: Executive Partnership (strategi) dan Fractional Leadership (eksekusi).
              </p>
            </div>
          </a>

          {/* Project 3 */}
          <a href="https://sig.jimlyassidqi.my.id" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
            <div className="h-56 w-full bg-zinc-800 relative">
              <img src="/assets/sig.png" alt="SIG Brebes Selatan" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">SIG Brebes Selatan</h3>
              <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS, Express</p>
              <p className="text-zinc-400 text-[14px] leading-[1.6]">
                Website Sistem Informasi Geografis (SIG) yang dirancang khusus untuk mempermudah pencarian profil dan lokasi sekolah-sekolah SMK yang berada di wilayah Brebes Selatan.
              </p>
            </div>
          </a>

          {showMoreProjects && (
            <>
              {/* Project 4 */}
              <a href="https://easium.lovable.app" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
                <div className="h-56 w-full bg-zinc-800 relative">
                  <img src="/assets/easium.png" alt="Easium" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">Easium</h3>
                  <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS, Express</p>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    Platform review CV dan latihan interview dengan AI secara otomatis. Memberikan feedback yang akurat untuk meningkatkan peluang Anda dalam mencari kerja.
                  </p>
                </div>
              </a>

              {/* Project 5 */}
              <a href="https://know-your-sight.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
                <div className="h-56 w-full bg-zinc-800 relative">
                  <img src="/assets/kys.png" alt="Know Your Sight" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">Know Your Sight</h3>
                  <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS, Express</p>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    Website pintar berbasis AI untuk mendeteksi penyakit mata dari gambar. Menghadirkan solusi deteksi dini dengan akurasi tinggi.
                  </p>
                </div>
              </a>

              {/* Project 6 */}
              <a href="https://z-store.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#12121A] rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-zinc-700 flex flex-col cursor-pointer block">
                <div className="h-56 w-full bg-zinc-800 relative">
                  <img src="/assets/topup.png" alt="Topup Game" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">Topup Game</h3>
                  <p className="text-[#60A5FA] text-[13px] font-medium mb-4">Next.js, TailwindCSS, Express</p>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    Website andalan untuk layanan topup berbagai jenis game dengan proses otomatis, cepat, dan terpercaya.
                  </p>
                </div>
              </a>
            </>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="px-8 py-3 rounded-full border border-zinc-700 text-white font-medium text-[15px] hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            {showMoreProjects ? "Show Less" : "Show More"}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${showMoreProjects ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="max-w-[1200px] mx-auto overflow-hidden pb-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[24px] font-mono md:text-[36px] font-bold text-white mb-2 tracking-tight">
            Testimonials
          </h2>
          <p className="text-zinc-400 text-[15px]">
            Feedback from clients and colleagues I&apos;ve worked with.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full relative">
          {/* Vignette Overlay */}
          <div className="absolute hidden md:block left-0 top-0 bottom-0 w-100 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute hidden md:block right-0 top-0 bottom-0 w-100 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Top Row - Scrolls Left */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            <div className="flex gap-6 pr-6">
              {testimonialsRow1.map((t, i) => (
                <div key={i} className="bg-[#12121A] rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white text-[15px] font-bold leading-tight">{t.name}</h4>
                      <p className="text-zinc-500 text-[13px]">{t.handle}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6">
              {testimonialsRow1.map((t, i) => (
                <div key={`copy-${i}`} className="bg-[#12121A] rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white text-[15px] font-bold leading-tight">{t.name}</h4>
                      <p className="text-zinc-500 text-[13px]">{t.handle}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolls Right */}
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            <div className="flex gap-6 pr-6">
              {testimonialsRow2.map((t, i) => (
                <div key={i} className="bg-[#12121A] rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white text-[15px] font-bold leading-tight">{t.name}</h4>
                      <p className="text-zinc-500 text-[13px]">{t.handle}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6">
              {testimonialsRow2.map((t, i) => (
                <div key={`copy-${i}`} className="bg-[#12121A] rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white text-[15px] font-bold leading-tight">{t.name}</h4>
                      <p className="text-zinc-500 text-[13px]">{t.handle}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-[1200px] mx-auto px-8 pb-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-4 tracking-tight">
            Let&apos;s work together.
          </h2>
          <p className="text-zinc-400 text-[15px]">
            Send me a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full max-w-[800px] mx-auto bg-[#0d0d0d] border border-zinc-800/80 rounded-[2rem] p-6 flex flex-col min-h-[300px]">
          {/* Textarea */}
          <textarea
            placeholder="Provide feedback or say something.."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-[15px] resize-none flex-grow focus:outline-none mb-6"
          ></textarea>

          {/* Bottom Row: Inputs and Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#12121A]/50 border border-zinc-800 rounded-xl px-5 py-4 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-[#12121A]/50 border border-zinc-800 rounded-xl px-5 py-4 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
            <button className="w-full bg-[#8e8e8e] hover:bg-[#a0a0a0] text-[#111] text-[14px] font-medium rounded-xl px-8 py-4 transition-colors">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-8 text-zinc-400">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

            {/* Left Column */}
            <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
              <h2 className="text-white text-4xl font-bold tracking-tighter">Jimly</h2>
              <div className="flex items-center gap-2 text-[13px]">
                <span>© 2026 All rights reserved.</span>
                <span className="text-zinc-600">jimlyassidqi</span>
              </div>
              <div className="flex items-center gap-2 text-[13px]">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <span>Check system status</span>
              </div>

              {/* Social/Tool Icons */}
              <div className="flex items-center gap-2 mt-2">
                <a href="https://github.com/Jimly23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://github.com/Jimly23" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </a>
                <a href="https://github.com/Jimly23" target="_blank" rel="noopener noreferrer" aria-label="Key" className="w-9 h-9 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                </a>
                <a href="https://github.com/Jimly23" target="_blank" rel="noopener noreferrer" aria-label="Terminal" className="w-9 h-9 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors text-xs font-mono font-bold">
                  {">_"}
                </a>
                <a href="https://github.com/Jimly23" target="_blank" rel="noopener noreferrer" aria-label="RSS" className="w-9 h-9 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                </a>
              </div>
            </div>

            {/* Middle Column (Links) */}
            <div className="col-span-1 lg:col-span-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
                {/* Network */}
                <div className="flex flex-col gap-4">
                  <div className="px-2 py-1 bg-zinc-900 rounded-md inline-block w-fit mb-1">
                    <h3 className="uppercase text-[10px] font-bold text-zinc-400 tracking-wider">Network</h3>
                  </div>
                  <a href="https://t.me/jimlyassidqi" className="hover:text-white transition-colors">Telegram</a>
                  <a href="https://www.linkedin.com/in/jimlyassidqihardiansyah/" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="https://www.instagram.com/jmyassdqi/" className="hover:text-white transition-colors">Instagram</a>
                </div>

                {/* Resources */}
                <div className="flex flex-col gap-4">
                  <div className="px-2 py-1 bg-zinc-900 rounded-md inline-block w-fit mb-1">
                    <h3 className="uppercase text-[10px] font-bold text-zinc-400 tracking-wider">Resources</h3>
                  </div>
                  <a href="#" className="hover:text-white transition-colors">Curriculum<br />Vitae</a>
                  <a href="#" className="hover:text-white transition-colors">Projects</a>
                </div>

                {/* Utilities */}
                <div className="flex flex-col gap-4">
                  <div className="px-2 py-1 bg-zinc-900 rounded-md inline-block w-fit mb-1">
                    <h3 className="uppercase text-[10px] font-bold text-zinc-400 tracking-wider">Utilities</h3>
                  </div>
                  <a href="#" className="hover:text-white transition-colors">Old Page</a>
                  <a href="#" className="hover:text-white transition-colors">Shortlink</a>
                </div>

                {/* Covenant */}
                <div className="flex flex-col gap-4">
                  <div className="px-2 py-1 bg-zinc-900 rounded-md inline-block w-fit mb-1">
                    <h3 className="uppercase text-[10px] font-bold text-zinc-400 tracking-wider">Covenant</h3>
                  </div>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                  <a href="#" className="hover:text-white transition-colors">About Me</a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            {/* <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-16 flex-shrink-0 flex flex-col items-center">
                  <svg viewBox="0 0 100 100" className="w-full text-white" style={{ stroke: 'currentColor', fill: 'none' }}>
                    <polygon points="50,15 90,85 10,85" strokeWidth="4" />
                    <polygon points="50,30 80,80 20,80" strokeWidth="2" />
                    <circle cx="50" cy="60" r="10" fill="currentColor" />
                    <line x1="50" y1="15" x2="50" y2="45" strokeWidth="2" />
                    <line x1="20" y1="80" x2="40" y2="65" strokeWidth="2" />
                    <line x1="80" y1="80" x2="60" y2="65" strokeWidth="2" />
                    <line x1="50" y1="5" x2="50" y2="-5" strokeWidth="2" />
                    <line x1="10" y1="85" x2="0" y2="90" strokeWidth="2" />
                    <line x1="90" y1="85" x2="100" y2="90" strokeWidth="2" />
                    <line x1="30" y1="15" x2="20" y2="5" strokeWidth="2" />
                    <line x1="70" y1="15" x2="80" y2="5" strokeWidth="2" />
                  </svg>
                  <span className="text-[10px] uppercase mt-2 font-bold tracking-widest text-white">Abydos</span>
                </div>
                <div className="border-l-2 border-white pl-4 py-1">
                  <p className="text-[12px] uppercase leading-snug font-bold text-white mb-2">
                    Die Zamkarische<br />Föderation Der
                  </p>
                  <p className="text-[10px] uppercase leading-snug text-zinc-400">
                    Behälter Zerbrechlichkeit<br />Und Instabilität
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-zinc-500 leading-[1.8] font-mono">
                Almatera&apos;s a product of a whole ass product cooked up in the Tera Incubator 🛏 straight up supervised and followin&apos; every rule I&apos;ve laid down just to shut up all the copium addicts wonderin&apos; &apos;bout me. Verified by Green Web Foundation ↗
              </p>
            </div> */}

          </div>

          {/* Bottom Center */}
          <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center text-center gap-2">
            <p className="text-zinc-600 text-[13px]">Beyond the logic</p>
            <p className="text-zinc-800 text-[10px] font-mono">Regenerated on 2026-01-17T03:42:29.677Z</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
