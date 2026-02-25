import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollingServices from "@/components/ScrollingServices";
import { caseStudies } from "@/lib/constants";
import BentoStats from "@/components/BentoStats";
import DragCarousel from "@/components/DragCarousel";

export const metadata: Metadata = {
  title: "2Guys Digital | Enterprise-Grade AI Development Agency",
  description:
    "Fully AI-driven digital agency of experts. We've helped thousands of brands exceed their goals with enterprise AI development.",
};

const workItems = [
  { tag: "Fintech Core", title: "Horizon Alpha", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGvmdHLG_7tx2aWt9YDj-xKArx7rJiF-oTiiAiFExemVDjb2TM0_286hjwTWI3jUc-rL4Ppg-5rLPRa_ClVQ94sBNq_3nBFLONhEpeoSCHbyiiVkkthl88ikKheMta9_5G4c6HGolT19WOCrYbPN70Fu2zh_l4Bs63Lj20uvSxxmdc6EhsSW9UwmLHeT7sQxBIMDRu0h9HgMBj0IiJZilMp20EFjIX8P5LXDnUTBIZOa0tK2iRkJ4xYyFgLyGanAVwih94UadQzik" },
  { tag: "SaaS Infrastructure", title: "Aura Systems", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHeNSEbA2KiKJVSnhaWjJgjpQMLYkotg9Lvj8iLhprhCwog6wPnDn2_36JEMQPqX9I7q7dGMih9QKkCySWkbOZtIQtllsUzwcH6US4LRpQwZPcBfWP4terzDs63RCvSLd9QN-mWjFEVCSvVtu4eRf4Ji6jXXv8L6mKM1W3aC_MtT781o_6UM_4XowSfAP_Mp1_AbcbSAJn3GeG7O_2bQy_NLMpozH03OMQak61qXeLP5EJH4G0Kof3bV8Ehx4oIH0uh3y3Xk4TNY" },
  { tag: "AI Logic", title: "Delta Neural", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyOCzxIufy1Cunl9dYe3t5w6MxLxN1_y5nUD-An9eFwJB65igaIRkRnpw7r6PAE7AQ5zHvpQhk-VOp8iZXkBdTLKNYEOL3D0_2JBFQUw8c6AdNDyPyU1_B5_t1rx7dByTRcw4YhhlsIy1JNjryR9QxJ2uRRqD7s9cUiYIv9QKsCoossO0BInB4OKbNYw_0NGTF16Cl6AN3SzYCY58EaBByyMS8bHVK9Y2TI6lo8cWUMLd9D4MkdojaQ_Zg4P2MvMk1TymfxTDtPhI" },
  { tag: "Cloud Arch", title: "Vertex Protocol", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa2SLzupKF40mRvCO-7FYgPqteXygl_Qqkynf4WF647uVnNT5XrVSJjNhUt-p9UFFqLUsfI8SmHnkFgCVIoFyxv2RhbUU8Bpc6bL2xAwubrd37j9_Chtydy4b2l3RCCLszoGP04sx1K8UZPn9Q2ioZeLZdkA-88VrzgvlWsHOnp6k3QxmHzdvMyC7yHnMjgSadphMxV9Ryg-ZzBl3wJb4KgoYIQsA9zuinlzVOWvz16P-sX1gwoE9aAy_e5cMRF3d8hro_Ds3-mHE" },
  { tag: "Data Pipeline", title: "Optima Data", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyOCzxIufy1Cunl9dYe3t5w6MxLxN1_y5nUD-An9eFwJB65igaIRkRnpw7r6PAE7AQ5zHvpQhk-VOp8iZXkBdTLKNYEOL3D0_2JBFQUw8c6AdNDyPyU1_B5_t1rx7dByTRcw4YhhlsIy1JNjryR9QxJ2uRRqD7s9cUiYIv9QKsCoossO0BInB4OKbNYw_0NGTF16Cl6AN3SzYCY58EaBByyMS8bHVK9Y2TI6lo8cWUMLd9D4MkdojaQ_Zg4P2MvMk1TymfxTDtPhI" },
  { tag: "Brand Identity", title: "Nexus Creative", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGvmdHLG_7tx2aWt9YDj-xKArx7rJiF-oTiiAiFExemVDjb2TM0_286hjwTWI3jUc-rL4Ppg-5rLPRa_ClVQ94sBNq_3nBFLONhEpeoSCHbyiiVkkthl88ikKheMta9_5G4c6HGolT19WOCrYbPN70Fu2zh_l4Bs63Lj20uvSxxmdc6EhsSW9UwmLHeT7sQxBIMDRu0h9HgMBj0IiJZilMp20EFjIX8P5LXDnUTBIZOa0tK2iRkJ4xYyFgLyGanAVwih94UadQzik" },
  { tag: "E-Commerce", title: "Kinetix Store", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa2SLzupKF40mRvCO-7FYgPqteXygl_Qqkynf4WF647uVnNT5XrVSJjNhUt-p9UFFqLUsfI8SmHnkFgCVIoFyxv2RhbUU8Bpc6bL2xAwubrd37j9_Chtydy4b2l3RCCLszoGP04sx1K8UZPn9Q2ioZeLZdkA-88VrzgvlWsHOnp6k3QxmHzdvMyC7yHnMjgSadphMxV9Ryg-ZzBl3wJb4KgoYIQsA9zuinlzVOWvz16P-sX1gwoE9aAy_e5cMRF3d8hro_Ds3-mHE" },
  { tag: "Smart Systems", title: "Echo Automations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHeNSEbA2KiKJVSnhaWjJgjpQMLYkotg9Lvj8iLhprhCwog6wPnDn2_36JEMQPqX9I7q7dGMih9QKkCySWkbOZtIQtllsUzwcH6US4LRpQwZPcBfWP4terzDs63RCvSLd9QN-mWjFEVCSvVtu4eRf4Ji6jXXv8L6mKM1W3aC_MtT781o_6UM_4XowSfAP_Mp1_AbcbSAJn3GeG7O_2bQy_NLMpozH03OMQak61qXeLP5EJH4G0Kof3bV8Ehx4oIH0uh3y3Xk4TNY" },
];

const stats = [
  { value: "100+", label: "AI Deployments" },
  { value: "30+", label: "Industry Experts" },
  { value: "99.9%", label: "Up-time" },
  { value: "250+", label: "Completed Projects" },
  { value: "15+", label: "Industries Served" },
  { value: "10", label: "Global Offices" },
];

const clients = [
  { name: "KERWELL", bg: "#d4d4d4", color: "#000" },
  { name: "GOOD TROUBLE", bg: "#ffcc00", color: "#000" },
  { name: "PAPER2EAT", bg: "#f5a1c8", color: "#000" },
  { name: "NORANI", bg: "#9fc5e8", color: "#000" },
  { name: "ROUTE WERKS", bg: "#ffffff", color: "#000" },
  { name: "LUNAR TIDES", bg: "#1a1a1a", color: "#fff" },
  { name: "ABOUT WOOD", bg: "#bcaaa4", color: "#000" },
  { name: "BLUE STAR", bg: "#ffffff", color: "#000" },
  { name: "LENSBABY", bg: "#bff549", color: "#000" },
  { name: "ABUNTUS", bg: "#e0e0e0", color: "#000" },
];

export default function HomePage() {
  return (
    <div className="pt-[90px]">
      {/* Hero & Featured Work */}
      <section className="pt-20 pb-0 text-center border-b border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-[#bff549]">
              <span className="material-symbols-outlined text-4xl">verified</span>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Elite AI Development Partner</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              Only 1% of agencies specialize in Enterprise AI.{" "}
              <br className="hidden md:block" />
              <span className="italic text-[#bff549]">We&apos;re proud to be leading the pack.</span>
            </h1>
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Approved by Industry Leaders. Trusted by Fortune 500 Brands.
            </p>
          </div>
        </div>


        {/* Featured work horizontal scroll */}
        <DragCarousel className="gap-4 pb-12 overflow-visible">
          {workItems.map((item) => (
            <Link
              key={item.title}
              href="/portfolio"
              className="flex-none w-[340px] md:w-[420px] aspect-[4/5] bg-slate-900 border border-white/10 relative overflow-hidden group cursor-pointer select-none"
              draggable={false}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100 pointer-events-none"
                src={item.img}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-[#bff549] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.tag}</p>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              </div>
            </Link>
          ))}
        </DragCarousel>
      </section>

      {/* CTA band */}
      <section className="pt-8 pb-24 bg-black border-y border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full lg:w-auto justify-center">
            <Link href="/contact" className="bg-[#bff549] text-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-center hover:scale-105 transition-transform -skew-x-12">
              <span className="inline-block skew-x-12">Let's work together</span>
            </Link>
            <Link href="/portfolio" className="border border-white/20 px-8 py-4 text-sm text-center font-bold uppercase tracking-widest hover:bg-[#efefef]/5 transition-colors -skew-x-12">
              <span className="inline-block skew-x-12">View Our Work</span>
            </Link>
          </div>
          <p className="mt-12 text-2xl lg:text-3xl font-bold max-w-3xl mx-auto leading-relaxed">
            Fully AI-driven digital agency of talented experts, <span className="italic text-[#bff549]">we&apos;ve helped thousands of brands exceed their goals.</span>
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-neutral-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-20 items-center">
            <div className="md:col-span-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-8 text-[#bff549]">Trust & Execution</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Built for <br /><span className="italic text-slate-400">Scale.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                We partner with forward-thinking enterprises to deliver sub-100ms experiences and AI-native architectures that redefine digital possibilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="size-10 border border-white/10 flex items-center justify-center group-hover:border-[#bff549] transition-colors">
                    <span className="material-symbols-outlined text-[#bff549]/50 group-hover:text-[#bff549]">verified</span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Certified AI Solution Partners</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="size-10 border border-white/10 flex items-center justify-center group-hover:border-[#bff549] transition-colors">
                    <span className="material-symbols-outlined text-[#bff549]/50 group-hover:text-[#bff549]">security</span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Enterprise Security Compliant</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video relative overflow-hidden border border-white/10 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/infrastructure.png" alt="Enterprise Scale" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-[10px] font-black uppercase tracking-widest text-[#bff549]">Infrastructure</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative overflow-hidden border border-white/10 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/global-scale.png" alt="Global Network" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent text-[8px] font-black uppercase tracking-widest text-[#bff549]">Latency</div>
                  </div>
                  <div className="aspect-square relative overflow-hidden border border-white/10 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/performance-dashboard.png" alt="Performance" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent text-[8px] font-black uppercase tracking-widest text-[#bff549]">Performance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Services Section */}
      <ScrollingServices />

      <BentoStats />

      {/* Featured clients marquee strip */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-16 text-white italic">
            Featured <span className="text-[#bff549]">Clients</span>
          </h2>
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-wrap justify-center items-center gap-x-12 opacity-30 grayscale contrast-125">
              {["BILLBOARD", "KYLIE", "FORD", "DHL", "NAPLES", "SONY", "ADIDAS"].map((name) => (
                <span key={name} className="text-2xl font-black tracking-tighter">{name}</span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 opacity-30 grayscale contrast-125">
              {["KERWELL", "NORANI", "ROUTE", "LUNAR", "BLUE STAR", "VISA", "BMW"].map((name) => (
                <span key={name} className="text-2xl font-black tracking-tighter">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + case study image */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-slate-900 aspect-video p-4 border border-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Case Study"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGvmdHLG_7tx2aWt9YDj-xKArx7rJiF-oTiiAiFExemVDjb2TM0_286hjwTWI3jUc-rL4Ppg-5rLPRa_ClVQ94sBNq_3nBFLONhEpeoSCHbyiiVkkthl88ikKheMta9_5G4c6HGolT19WOCrYbPN70Fu2zh_l4Bs63Lj20uvSxxmdc6EhsSW9UwmLHeT7sQxBIMDRu0h9HgMBj0IiJZilMp20EFjIX8P5LXDnUTBIZOa0tK2iRkJ4xYyFgLyGanAVwih94UadQzik"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 aspect-[9/16] bg-black border border-white/20 overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Mobile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHeNSEbA2KiKJVSnhaWjJgjpQMLYkotg9Lvj8iLhprhCwog6wPnDn2_36JEMQPqX9I7q7dGMih9QKkCySWkbOZtIQtllsUzwcH6US4LRpQwZPcBfWP4terzDs63RCvSLd9QN-mWjFEVCSvVtu4eRf4Ji6jXXv8L6mKM1W3aC_MtT781o_6UM_4XowSfAP_Mp1_AbcbSAJn3GeG7O_2bQy_NLMpozH03OMQak61qXeLP5EJH4G0Kof3bV8Ehx4oIH0uh3y3Xk4TNY"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold leading-tight">
                Dedicated to delivering excellence <span className="italic text-[#bff549]">for our clients.</span>
              </h2>
              <div className="bg-[#efefef]/5 p-10 border-l-4 border-[#bff549]">
                <div className="flex gap-1 text-[#bff549] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-icon">star</span>
                  ))}
                </div>
                <p className="text-lg text-slate-300 italic mb-6">
                  &quot;After a disastrous experience with a previous agency we were in need of a development partner that could complete our website project quickly. 2Guys Digital was amazing.&quot;
                </p>
                <div>
                  <h5 className="font-bold">Good Trouble Pets</h5>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">goodtroublepets.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section (Transformed from Client Grid) */}
      <section className="bg-black py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            Our Recent <span className="text-[#bff549]">Work</span>
          </h2>
          <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Delivering high-performance digital products for global leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 bg-[#efefef]/5 border-y border-white/5">
          {caseStudies.slice(0, 10).map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.id} className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 border-r border-b border-white/5">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                <div className="text-[8px] font-black uppercase tracking-[0.3em] mb-2 text-[#bff549] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.industry}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter leading-tight mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title.split(' ')[0]} <br />
                  <span className="italic text-slate-400">{project.title.split(' ').slice(1).join(' ')}</span>
                </h4>
                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <span>View Work</span>
                  <span className="material-symbols-outlined text-[#bff549] text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Static Metric Badge */}
              <div className="absolute top-4 right-4 size-14 bg-[#bff549] rounded-full flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-10">
                <span className="text-black font-black text-xs leading-none">{project.metric}</span>
                <span className="text-black/60 text-[6px] font-bold uppercase tracking-tighter mt-0.5">Growth</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="py-10 text-center border-t border-white/5">
          <p className="text-slate-500 text-xs uppercase tracking-[0.4em] mb-8 font-bold">Trusted by 1000+ scaling teams worldwide</p>
          <Link
            href="/portfolio"
            className="inline-block bg-[#bff549] text-black px-12 py-5 text-xs font-black uppercase tracking-[0.2em] -skew-x-12 hover:scale-105 transition-transform"
          >
            <span className="inline-block skew-x-12">View Case Studies</span>
          </Link>
        </div>
      </section>

      {/* Contact form section */}
      <section className="pt-16 pb-32 bg-[#efefef] px-6 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20 text-white shadow-[0_0_100px_rgba(0,0,0,0.1)] relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">Let&apos;s <span className="italic text-[#bff549]">Create Together</span></h2>
            <p className="text-slate-400 text-lg">Tell us what you&apos;re interested in and we&apos;ll get right back to you</p>
          </div>
          <ContactForm theme="dark" />
          <div className="mt-20 pt-12 border-t border-white/10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Email", value: "hello@2guysdigital.com" },
              { label: "Call/Text", value: "1 (305) 555-5981" },
              { label: "Toll Free", value: "1 (855) 661-0016" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{item.label}</p>
                <p className="font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
