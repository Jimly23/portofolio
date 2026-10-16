"use client";

import { useEffect, useState } from "react";
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

const changingRoles = ["backend", "AI", "Blockchain", "Frontend"];

const projectsData = [
  {
    title: "Rumah Restaurant",
    techStack: "Vue.js, TailwindCSS",
    description: "Website Restoran interaktif yang dirancang untuk mempermudah pencarian profil, menu, dan lokasi Rumah Restaurant untuk pengunjung.",
    image: "/assets/rumah-restaurant.webp",
    link: "https://restaurant.jimlyassidqi.my.id/",
  },
  {
    title: "SIG Rumah Sakit",
    techStack: "Vue.js, TailwindCSS, Express",
    description: "Website Sistem Informasi Geografis (SIG) interaktif yang dirancang untuk mempermudah pencarian profil, fasilitas, dan lokasi rumah sakit untuk masyarakat.",
    image: "/assets/sig-rumah-sakit.webp",
    link: "https://sig.jimlyassidqi.my.id/",
  },
  {
    title: "SIG Pariwisata",
    techStack: "CodeIgniter, TailwindCSS, Leaflet",
    description: "Platform interaktif pariwisata berbasis peta untuk mengeksplorasi destinasi wisata. Dilengkapi fitur pencarian atraksi, fasilitas, dan harga tiket secara dinamis.",
    image: "/assets/sig-pariwisata.webp",
    link: "https://pariwisata.jimlyassidqi.my.id/",
  },
  {
    title: "Roseline",
    techStack: "Vue.js, TailwindCSS",
    description: "Website platform e-commerce modern premium dengan pengalaman belanja online responsif dan mendukung fitur keranjang serta checkout yang mudah digunakan.",
    image: "/assets/ecommerce.webp",
    link: "https://ecommerce.youvitation.net/",
  },
  {
    title: "Elobright",
    techStack: "Next.js, TailwindCSS, Express",
    description: "Website komprehensif untuk memfasilitasi tes bahasa Inggris seperti TOEFL dan IELTS. Platform ini dirancang untuk memberikan pengalaman ujian yang lancar dan interaktif bagi para penggunanya.",
    image: "/assets/elobright.webp",
    link: "https://elobright.com",
  },
  {
    title: "Invictus Global Consultancy",
    techStack: "Next.js, TailwindCSS",
    description: "Sebuah perusahaan konsultan strategis global yang berfokus pada transformasi digital, AI, dan pengembangan kapabilitas organisasi. Invictus tidak hanya memberikan saran (advisory), tetapi juga terlibat langsung dalam eksekusi dan implementasi transformasi melalui dua pendekatan utamanya: Executive Partnership (strategi) dan Fractional Leadership (eksekusi).",
    image: "/assets/invictus.webp",
    link: "https://invictus-gc.com",
  },
  {
    title: "SIG Brebes Selatan",
    techStack: "Vue.js, TailwindCSS, Express",
    description: "Website Sistem Informasi Geografis (SIG) yang dirancang khusus untuk mempermudah pencarian profil dan lokasi sekolah-sekolah SMK yang berada di wilayah Brebes Selatan.",
    image: "/assets/sig.webp",
    link: "https://sig.jimlyassidqi.my.id",
  },
  {
    title: "Easium",
    techStack: "Next.js, TailwindCSS, Express",
    description: "Platform review CV dan latihan interview dengan AI secara otomatis. Memberikan feedback yang akurat untuk meningkatkan peluang Anda dalam mencari kerja.",
    image: "/assets/easium.webp",
    link: "https://easium.lovable.app",
  },
  {
    title: "Know Your Sight",
    techStack: "Next.js, TailwindCSS, Express",
    description: "Website pintar berbasis AI untuk mendeteksi penyakit mata dari gambar. Menghadirkan solusi deteksi dini dengan akurasi tinggi.",
    image: "/assets/kys.webp",
    link: "https://know-your-sight.vercel.app",
  },
  {
    title: "Topup Game",
    techStack: "Next.js, TailwindCSS, Express",
    description: "Website andalan untuk layanan topup berbagai jenis game dengan proses otomatis, cepat, dan terpercaya.",
    image: "/assets/topup.webp",
    link: "https://z-store.vercel.app",
  },
  {
    title: "Ampu Coffee",
    techStack: "Website Kafe",
    description: "Website kafe Ampu Coffee di Purwokerto yang menampilkan informasi menu, lokasi, dan pengalaman bersantap bagi pengunjung.",
    image: "/assets/ampucoffee.png",
    link: "https://ampucoffee.bikinkafe.id",
  },
  {
    title: "Cold N Brew",
    techStack: "Website Kafe",
    description: "Website resmi Cold N Brew, jaringan kafe dengan banyak cabang di Indonesia, untuk informasi brand, menu, dan lokasi.",
    image: "/assets/coldnbrew.png",
    link: "https://coldnbrew.bikinkafe.id",
  },
  {
    title: "Bikin Kafe",
    techStack: "Website Agency",
    description: "Website layanan Bikin Kafe untuk membantu pemilik kafe dan restoran membuat website profesional.",
    image: "/assets/bikinkafe.png",
    link: "https://bikinkafe.id",
  },
  {
    title: "Forum Asisten",
    techStack: "Platform Pendidikan",
    description: "Website pengumpulan tugas praktikum bagi mahasiswa AMIKOM Purwokerto untuk mengelola dan mengirim tugas secara terpusat.",
    image: "/assets/forumasisten.png",
    link: "https://asisten.teraspelajar.com",
  }
];

const projectShowcaseColors = [
  "#ffd83d",
  "#a9dfcf",
  "#f4abc0",
  "#aeb7f3",
  "#f4bd6c",
  "#c8df79",
  "#cdb9ed",
  "#8ed8e2",
  "#f3a16b",
  "#d9ed8c",
  "#efb6d6",
  "#9fc6f3",
  "#d8b4f2",
  "#a6dfc0",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % changingRoles.length);
    }, 2200);

    return () => window.clearInterval(roleTimer);
  }, []);

  return (
    <div className="theme-light min-h-screen bg-white text-[#17130f] selection:bg-zinc-200 selection:text-zinc-900 font-sans">
      {/* Reference-style top navigation */}
      <div className="fixed inset-x-0 top-0 z-50 px-1 pt-1 sm:px-2">
        <nav className="mx-auto flex h-9 w-full items-center justify-between border border-[#d7cdb5] bg-[#fff8e6]/95 px-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#17130f] shadow-[0_1px_0_rgba(75,52,24,0.08)] backdrop-blur-sm sm:px-3">
          <div className="flex h-full items-center gap-2 sm:gap-4">
            <Link href="#hero" className="flex h-full items-center gap-2 bg-[#f5d43f] px-2.5 transition-colors hover:bg-[#f1c72c] sm:px-3">
              <span className="text-[10px]">★</span>
              <span>Home</span>
            </Link>
            <Link href="#about" className="hidden items-center gap-1.5 transition-colors hover:text-[#e07b43] sm:flex">
              <span>♟</span> About
            </Link>
            <Link href="#projects-showcase" className="hidden items-center gap-1.5 transition-colors hover:text-[#e07b43] sm:flex">
              <span>▦</span> Case Study
            </Link>
            <Link href="#testimonials" className="hidden items-center gap-1.5 transition-colors hover:text-[#e07b43] sm:flex">
              <span>◆</span> Playground
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="https://www.linkedin.com/in/jimlyassidqihardiansyah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-5 w-5 place-items-center rounded-full bg-[#f2d13a] text-[8px] lowercase transition-transform hover:scale-110">in</a>
            <a href="#projects-showcase" aria-label="Projects" className="grid h-5 w-5 place-items-center rounded-full bg-[#f39b70] text-[10px] transition-transform hover:scale-110">●</a>
            <Link href="mailto:jimlyasidqi23@gmail.com" className="ml-1 flex items-center gap-1 border border-[#272018] bg-[#fffdf4] px-2.5 py-1.5 transition-colors hover:bg-[#272018] hover:text-[#fff8e6] sm:ml-2 sm:px-3">
              <span>♥</span> Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <main id="hero" className="hero-paper relative isolate min-h-[650px] overflow-hidden border-x border-[#ded4bd] px-5 pb-14 pt-20 text-[#17130f] sm:px-8 md:min-h-[700px] md:pt-24">
        <div className="mx-auto flex min-h-[550px] max-w-[1150px] flex-col items-center">
          <p className="hero-script mt-2 text-center text-[11px] font-semibold tracking-[0.12em] sm:text-[13px]">my name is</p>
          <div className="hero-rule mt-1 h-2 w-14" aria-hidden="true" />

          <div className="relative mt-1 flex w-full max-w-[980px] justify-center">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[220px] md:block" aria-hidden="true">
              <span className="absolute left-[5%] top-1 rounded-md bg-[#b9e1c6] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] shadow-[2px_2px_0_rgba(23,19,15,0.1)]">Made things</span>
              <span className="absolute right-[5%] top-1 rounded-md bg-[#f4e58e] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] shadow-[2px_2px_0_rgba(23,19,15,0.1)]">Sweat the details</span>
              <span className="absolute bottom-8 left-[4%] bg-[#f3d335] px-2.5 py-1.5 font-mono text-[9px] font-bold -rotate-2 shadow-[2px_2px_0_rgba(23,19,15,0.12)]">Product Designer</span>
              <span className="absolute bottom-8 right-[7%] bg-[#b9e1c6] px-2.5 py-1.5 font-mono text-[9px] font-bold rotate-2 shadow-[2px_2px_0_rgba(23,19,15,0.12)]">Purwokerto, ID</span>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 980 220" fill="none" preserveAspectRatio="none">
                <path d="M182 20 C245 20 265 36 300 53" stroke="#211b14" strokeWidth="1" strokeDasharray="3 4" />
                <path d="M798 20 C735 20 715 36 680 53" stroke="#211b14" strokeWidth="1" strokeDasharray="3 4" />
                <path d="M166 191 C230 191 256 170 300 151" stroke="#211b14" strokeWidth="1" strokeDasharray="3 4" />
                <path d="M814 191 C750 191 724 170 680 151" stroke="#211b14" strokeWidth="1" strokeDasharray="3 4" />
                <path d="M294 53 l8 -2 -5 7" stroke="#211b14" strokeWidth="1" />
                <path d="M686 53 l-8 -2 5 7" stroke="#211b14" strokeWidth="1" />
                <path d="M294 151 l8 2 -5 -7" stroke="#211b14" strokeWidth="1" />
                <path d="M686 151 l-8 2 5 -7" stroke="#211b14" strokeWidth="1" />
              </svg>
            </div>

            <div className="hero-name relative z-10 mt-2 border-2 border-[#e79863] px-7 py-5 text-center sm:px-12 sm:py-6">
              JIMLY
            </div>

            <div className="absolute left-[2%] top-[142px] hidden h-12 w-12 items-center justify-center rounded-full border-2 border-[#e79863] bg-[#72a8a4] text-[12px] font-black shadow-[2px_2px_0_rgba(23,19,15,0.12)] md:flex">JS</div>
            <div className="absolute right-[2%] top-[142px] hidden h-12 w-12 items-center justify-center rounded-full border-2 border-[#e79863] bg-[#df9d67] text-[12px] font-black shadow-[2px_2px_0_rgba(23,19,15,0.12)] md:flex">JS</div>
          </div>

          <h1 className="mt-10 max-w-[760px] text-center text-[37px] font-black leading-[0.98] tracking-[-0.055em] sm:text-[48px] md:mt-5 md:text-[62px]">
            I design software that <span className="md:whitespace-nowrap">gets out of your way.</span> <span className="text-[#44a883]">●</span><span className="text-[#e94d85]">✿</span>
          </h1>

          <a href="mailto:jimlyasidqi23@gmail.com" className="mt-8 inline-flex items-center gap-2 bg-[#1d1813] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#fff8e6] shadow-[3px_3px_0_#c8bda5] transition-transform hover:-translate-y-0.5">
            <span className="grid h-4 w-4 place-items-center bg-[#7651c8] text-[9px]">✉</span>
            Contact me
          </a>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="about-paper relative overflow-hidden border-x border-[#ded4bd] px-5 pb-8 pt-14 text-[#17130f] sm:px-8 md:pb-8 md:pt-16">
        <div className="relative mx-auto min-h-[400px] max-w-[1150px]">
          <p className="about-kicker absolute left-0 top-0 text-[10px] font-bold tracking-[0.08em] sm:left-4 sm:text-[11px]">about me!</p>

          <div className="mx-auto flex max-w-[700px] flex-col items-center pt-10 text-center sm:pt-8">
            <h2 className="about-title border border-[#17130f] px-3 py-1 text-[17px] font-semibold leading-none sm:text-[20px]">what&apos;s up</h2>
            <p className="about-copy mt-6 max-w-[530px] text-[15px] font-semibold leading-[1.55] sm:text-[17px]">
              I&apos;m a fullstack developer who gets a little too excited about making complicated things feel simple. ✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier. 🎨
            </p>
          </div>

          <div className="about-polaroid about-polaroid-left absolute left-0 top-20 hidden w-[190px] rotate-[-2deg] bg-white p-3 pb-9 shadow-[2px_3px_10px_rgba(38,30,18,0.2)] md:block">
            <span className="about-tape absolute -left-2 -top-2 h-5 w-9 rotate-[-40deg] bg-[#cbd2f2]/80" />
            <span className="about-tape absolute -right-2 -top-1 h-5 w-9 rotate-[42deg] bg-[#f7e899]/80" />
            <img src="/photo/cardkiri.jpeg" alt="Jimly with his team" className="h-[190px] w-full object-cover" />
            <span className="absolute inset-x-0 bottom-2 text-center font-mono text-[8px] text-zinc-500">work</span>
          </div>

          <div className="about-polaroid about-polaroid-right absolute right-0 top-10 hidden w-[190px] rotate-[3deg] bg-white p-3 pb-9 shadow-[2px_3px_10px_rgba(38,30,18,0.2)] md:block">
            <span className="about-tape absolute -left-2 -top-2 h-5 w-9 rotate-[-40deg] bg-[#cbd2f2]/80" />
            <span className="about-tape absolute -right-2 -top-1 h-5 w-9 rotate-[42deg] bg-[#f7e899]/80" />
            <img src="/photo/cardkanan.jpeg" alt="Jimly's memorable moment" className="h-[190px] w-full object-cover" />
            <span className="absolute inset-x-0 bottom-2 text-center font-mono text-[8px] text-zinc-500">a little joy</span>
          </div>

          <div className="about-skills mx-auto mt-10 grid max-w-[590px] grid-cols-1 justify-items-center gap-2 sm:mt-12 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2">
            <div className="flex items-center gap-1">
              <span className="about-label about-label-yellow">Interaction Design</span>
              <span className="about-sticker about-sticker-yellow">✦</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="about-label about-label-green">Prototyping</span>
              <span className="about-sticker about-sticker-green">☕</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="about-label about-label-pink">User Research</span>
              <span className="about-sticker about-sticker-pink">✿</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="about-label about-label-blue">Motion Design</span>
              <span className="about-sticker about-sticker-blue">◉</span>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="paper-section overflow-hidden border-x border-[#ded4bd] px-5 pb-16 pt-8 text-[#17130f] sm:px-8 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative z-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#6d6659] sm:text-[11px]">a little more context</p>
            <h2 className="mt-3 max-w-[680px] text-[42px] font-black leading-[0.94] tracking-[-0.065em] sm:text-[58px] md:text-[72px]">
              A <span key={changingRoles[roleIndex]} className="role-changing-word relative inline-block min-w-[10.5ch] bg-[#ffd7bf] px-2 pb-1 align-baseline"><span className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#ef7d4d]" />{changingRoles[roleIndex]}</span> developer in Purwokerto.
            </h2>
            <p className="mt-7 max-w-[610px] text-[16px] font-medium leading-[1.65] text-[#5f594f] sm:text-[18px]">
              I build reliable systems behind thoughtful products - from APIs and databases to the small details that keep a digital experience feeling effortless.
            </p>
            <p className="mt-5 max-w-[570px] font-mono text-[12px] leading-[1.75] text-[#777064] sm:text-[13px]">
              Based in Central Java, I work across fullstack development, internal tools, and public-facing platforms. My favorite work sits where clear logic meets a little bit of joy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/assets/CV%20Jimly%20En.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#17130f] bg-[#17130f] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_#ef7d4d] transition-transform hover:-translate-y-0.5">
                More about me <span aria-hidden="true">&rarr;</span>
              </a>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b8375]">available for thoughtful collaborations</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px] lg:mr-3">
            <span className="absolute -left-4 top-16 z-20 grid h-12 w-12 -rotate-12 place-items-center rounded-full border-2 border-[#17130f] bg-[#f6d32f] text-xl shadow-[2px_3px_0_rgba(23,19,15,0.2)]">:)</span>
            <span className="absolute -right-3 top-7 z-20 grid h-11 w-11 rotate-12 place-items-center rounded-full border-2 border-[#17130f] bg-[#bce6d5] text-lg shadow-[2px_3px_0_rgba(23,19,15,0.2)]">*</span>
            <span className="absolute -bottom-4 -left-4 z-20 grid h-12 w-12 rotate-6 place-items-center rounded-full border-2 border-[#17130f] bg-[#f7c1d2] text-xl shadow-[2px_3px_0_rgba(23,19,15,0.2)]">&lt;3</span>
            <div className="relative rotate-[2deg] rounded-xl border border-[#d9d1c0] bg-white p-3 pb-12 shadow-[8px_10px_0_rgba(23,19,15,0.08),0_18px_30px_rgba(23,19,15,0.12)] transition-transform duration-300 hover:rotate-0">
              <div className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-3 bg-[#fff0a9]/85 shadow-[0_1px_2px_rgba(23,19,15,0.12)]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#d9e7e1]">
                <img src="/photo/jimly.jpeg" alt="Portrait of Jimly" className="h-full w-full object-cover object-center saturate-[0.82] contrast-[1.05] transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/35 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-sm bg-[#fff8e6]/90 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em]">build with care</span>
              </div>
              <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4 font-mono text-[10px] italic text-[#777064]">
                <span>Purwokerto, Central Java</span>
                <span className="font-bold not-italic text-[#17130f]">J/26</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Project Showcase Section */}
      <section id="projects-showcase" className="paper-section project-showcase-section border-x border-[#ececec] bg-white px-5 py-16 text-[#17130f] sm:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="project-showcase-kicker">selected work</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-6xl">Projects</h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-zinc-600 sm:text-base">
              A collection of digital products, experiments, and experiences I&apos;ve designed and built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectsData.map((project, index) => {
              const cardColor = projectShowcaseColors[index % projectShowcaseColors.length];
              const projectNumber = String(index + 1).padStart(2, "0");

              return (
                <a
                  key={`${project.title}-showcase`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-showcase-card group"
                  style={{ backgroundColor: cardColor }}
                >
                  <span className="project-showcase-tab">
                    <span>•</span> PROJECT {projectNumber}
                  </span>

                  <div className="project-showcase-content">
                    <p className="project-showcase-meta">• &nbsp;SELECTED WORK</p>
                    <h3>{project.title}</h3>
                    <p className="project-showcase-description">{project.description}</p>
                    <p className="project-showcase-stack">{project.techStack}</p>
                    <span className="project-showcase-link">VIEW PROJECT <span aria-hidden="true">↗</span></span>
                  </div>

                  <div className="project-showcase-image-wrap">
                    <img src={project.image} alt={`${project.title} project preview`} className="project-showcase-image" />
                    <span className="project-showcase-tape project-showcase-tape-top" aria-hidden="true" />
                    <span className="project-showcase-tape project-showcase-tape-bottom" aria-hidden="true" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="paper-section max-w-[1200px] mx-auto overflow-hidden pb-32">
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
                <div key={i} className="testimonial-card rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
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
                <div key={`copy-${i}`} className="testimonial-card rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
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
                <div key={i} className="testimonial-card rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
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
                <div key={`copy-${i}`} className="testimonial-card rounded-xl p-6 border border-zinc-800 w-[350px] flex-shrink-0 transition-all hover:border-zinc-700">
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
      <section id="contact" className="paper-section max-w-[1200px] mx-auto px-8 pb-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-4 tracking-tight">
            Let&apos;s work together.
          </h2>
          <p className="text-zinc-400 text-[15px]">
            Send me a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-card w-full max-w-[800px] mx-auto bg-[#0d0d0d] border border-zinc-800/80 rounded-[2rem] p-6 flex flex-col min-h-[300px]">
          {/* Textarea */}
          <textarea
            placeholder="Provide feedback or say something.."
            className="contact-textarea w-full bg-transparent text-white placeholder-zinc-500 text-[15px] resize-none flex-grow focus:outline-none mb-6"
          ></textarea>

          {/* Bottom Row: Inputs and Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="contact-input w-full bg-[#12121A]/50 border border-zinc-800 rounded-xl px-5 py-4 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="contact-input w-full bg-[#12121A]/50 border border-zinc-800 rounded-xl px-5 py-4 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
            <button className="contact-button w-full bg-[#8e8e8e] hover:bg-[#a0a0a0] text-[#111] text-[14px] font-medium rounded-xl px-8 py-4 transition-colors">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="paper-footer w-full bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-8 text-zinc-400">
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
