import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake, Lightbulb, Target, Ship, Plane, FileCheck, Truck, Warehouse, ScrollText, Globe2, ChevronRight, Beaker, Pill, Cog, Shirt, ShoppingBag, Wheat, Mountain, Car, Cpu, Factory, Award, Users, ClipboardCheck, Network, Zap, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import heroPort from "@/assets/hero-port.jpg";
import heroAir from "@/assets/hero-air.jpg";
import heroCustoms from "@/assets/hero-customs.jpg";
import aboutImg from "@/assets/about.jpg";

const slides = [
  { img: heroPort, eyebrow: "Global Trade Made Simple", title: "Global Trade. Simple, Fast & Compliant.", subtitle: "Customs clearance, freight forwarding, logistics & EXIM consultancy — delivered with reliability and transparency." },
  { img: heroAir, eyebrow: "Air & Sea Freight", title: "Move Cargo Across Borders, Seamlessly.", subtitle: "One partner for documentation, regulatory compliance and end-to-end supply chain management." },
  { img: heroCustoms, eyebrow: "DGFT & Trade Compliance", title: "Your Business. Our Expertise. One Global Solution.", subtitle: "Experienced professionals helping importers, exporters and manufacturers navigate global markets with confidence." },
];

const services = [
  { icon: FileCheck, gradient: "from-blue-500 to-blue-700", title: "Customs Clearance", desc: "Sea, air & project cargo clearance — accurate, compliant, on time.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600", slug: "customs-clearance" },
  { icon: Ship, gradient: "from-cyan-500 to-cyan-700", title: "Freight Forwarding", desc: "Ocean, air & multimodal freight with a trusted global carrier network.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600", slug: "freight-forwarding" },
  { icon: Globe2, gradient: "from-violet-500 to-violet-700", title: "EXIM Consultancy", desc: "Strategic guidance on documentation, licensing and trade policy.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", slug: "exim-consultancy" },
  { icon: Truck, gradient: "from-orange-500 to-orange-700", title: "Logistics & Transport", desc: "Domestic transportation, port connectivity and last-mile delivery.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600", slug: "logistics-transportation" },
  { icon: ScrollText, gradient: "from-rose-500 to-rose-700", title: "Trade Compliance", desc: "BIS, FSSAI, WPC, LMPC, EPR and product compliance support.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600", slug: "trade-compliance" },
  { icon: Warehouse, gradient: "from-emerald-500 to-emerald-700", title: "Warehousing & Distribution", desc: "Secure storage, inventory management and order fulfillment.", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600", slug: "warehousing-distribution" },
  { icon: Plane, gradient: "from-sky-500 to-sky-700", title: "DGFT Services", desc: "IEC, Advance Authorization, EPCG, RoDTEP and licensing support.", image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600", slug: "dgft" },
];

const values = [
  { icon: ShieldCheck, gradient: "from-blue-500 to-blue-700", title: "Integrity", desc: "Every transaction conducted with honesty, transparency and accountability." },
  { icon: Sparkles, gradient: "from-amber-500 to-orange-600", title: "Excellence", desc: "Continuous improvement to deliver superior service quality." },
  { icon: HeartHandshake, gradient: "from-rose-500 to-pink-600", title: "Customer Focus", desc: "Our clients' success is at the center of every solution we provide." },
  { icon: Lightbulb, gradient: "from-violet-500 to-violet-700", title: "Innovation", desc: "Technology and modern practices to improve efficiency." },
  { icon: Target, gradient: "from-emerald-500 to-emerald-700", title: "Commitment", desc: "We stand by our promises and deliver consistent results." },
];

const strengths = [
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "With extensive experience in international trade and logistics, we understand the operational, regulatory, and commercial challenges faced by businesses. Our expertise allows us to provide practical and effective solutions tailored to each client's requirements.",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "Every business is unique. We take the time to understand our clients' objectives, operational needs, and growth plans before recommending customized solutions that deliver measurable value.",
    gradient: "from-pink-500 to-pink-700",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Excellence",
    desc: "Global trade regulations continue to evolve. Our team remains updated with the latest industry developments, customs requirements, and government policies to ensure that our clients remain compliant and avoid unnecessary risks.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Network,
    title: "Strong Professional Network",
    desc: "Our extensive network of logistics partners, transportation providers, shipping lines, customs professionals, and industry stakeholders enables us to deliver seamless services across multiple geographies.",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "We focus on reducing delays, minimizing operational bottlenecks, and improving overall supply chain performance through streamlined processes and proactive coordination.",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "We believe transparency is the foundation of successful business relationships. Our clients receive regular updates, clear communication, and responsive support throughout every stage of the process.",
    gradient: "from-cyan-500 to-sky-600",
  },
];

const industries = [
  { icon: Beaker, gradient: "from-blue-500 to-blue-700", name: "Chemicals & Petrochemicals" },
  { icon: Pill, gradient: "from-rose-500 to-rose-700", name: "Pharmaceuticals" },
  { icon: Cog, gradient: "from-slate-500 to-slate-700", name: "Engineering Goods" },
  { icon: Shirt, gradient: "from-violet-500 to-violet-700", name: "Textiles & Garments" },
  { icon: ShoppingBag, gradient: "from-orange-500 to-orange-700", name: "FMCG Products" },
  { icon: Wheat, gradient: "from-emerald-500 to-emerald-700", name: "Food & Agriculture" },
  { icon: Mountain, gradient: "from-amber-600 to-amber-800", name: "Metals & Minerals" },
  { icon: Car, gradient: "from-cyan-500 to-cyan-700", name: "Automotive Components" },
  { icon: Cpu, gradient: "from-sky-500 to-sky-700", name: "Consumer Electronics" },
  { icon: Factory, gradient: "from-teal-500 to-teal-700", name: "Industrial Machinery" },
];

const introServices = [
  { icon: FileCheck, gradient: "from-blue-500 to-blue-700", label: "Customs Clearance" },
  { icon: Ship, gradient: "from-cyan-500 to-cyan-700", label: "Freight Forwarding" },
  { icon: Globe2, gradient: "from-violet-500 to-violet-700", label: "DGFT & EXIM Consultancy" },
  { icon: Truck, gradient: "from-orange-500 to-orange-700", label: "Logistics & Transportation" },
  { icon: ScrollText, gradient: "from-rose-500 to-rose-700", label: "Trade Compliance" },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.18 0.04 250 / 0.85) 0%, oklch(0.18 0.04 250 / 0.4) 60%, transparent 100%)" }} />
        </div>
      ))}
      <div className="container-page relative z-10 flex h-full flex-col justify-center text-white">
        <p key={`e-${idx}`} className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-up">{slides[idx].eyebrow}</p>
        <h1 key={`t-${idx}`} className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {slides[idx].title}
        </h1>
        <p key={`s-${idx}`} className="mt-5 max-w-2xl text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {slides[idx].subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="gradient-accent text-accent-foreground border-0 hover:opacity-90">
            <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Intro strip */}
      <section className="relative z-20 -mt-10 mb-10 container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 bg-background/80 backdrop-blur border border-border/60 rounded-3xl p-5 shadow-elev">
          {introServices.map((item) => (
            <div key={item.label} className="group flex items-center gap-3 rounded-2xl hover:bg-secondary/40 px-3 py-2.5 transition-all duration-200">
              <div className={`h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold leading-tight text-foreground/80 group-hover:text-brand transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img src={aboutImg} alt="International trade and logistics" className="rounded-2xl shadow-elev w-full" width={1200} height={900} loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl shadow-card p-5 w-60">
            <p className="text-2xl font-bold text-gradient-brand">One Global Solution</p>
            <p className="text-sm text-muted-foreground mt-1">Your Business. Our Expertise.</p>
          </div>
        </div>
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Building Stronger Global Trade Connections</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Umaapati International Business LLP is a dynamic international trade and logistics solutions provider committed to simplifying complex import-export operations for businesses across industries.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a customer-first approach and deep industry expertise, we deliver end-to-end solutions covering customs clearance, freight forwarding, trade consultancy, regulatory compliance, transportation, and documentation support.
          </p>
          <Button asChild className="mt-6 gradient-brand text-white border-0">
            <Link to="/about">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Vision</p>
              <h3 className="mt-2 font-display text-2xl font-bold">A globally recognized trade facilitation partner.</h3>
              <p className="mt-3 text-muted-foreground">Known for reliability, innovation, transparency, and customer success.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Mission</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Integrated logistics &amp; trade solutions.</h3>
              <p className="mt-3 text-muted-foreground">Simplifying international business operations while creating long-term value for our clients.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="container-page py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Visual focal point */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elev h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Cargo Operations"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Why Work With Us</span>
                <h3 className="text-3xl font-bold font-display leading-tight">Delivering operational excellence across global networks</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  We blend deep compliance expertise, modern technology, and global partnerships to move your business forward.
                </p>
              </div>
            </div>
            {/* Decorative colored glow in the background */}
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-accent/20 blur-3xl -z-10" />
          </div>

          {/* Right Column: List of 6 Strengths */}
          <div className="w-full lg:w-7/12">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Strengths</p>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">What sets us apart</h2>
              <p className="mt-4 text-muted-foreground">What sets us apart in delivering world-class international trade and logistics solutions.</p>
            </div>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {strengths.map((st) => (
                <div
                  key={st.title}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${st.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <st.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base mb-1 group-hover:text-brand transition-colors">{st.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand text-brand-foreground py-20 relative overflow-hidden">
        {/* Background radial glows */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, oklch(0.72 0.18 50 / 0.5), transparent 45%), radial-gradient(circle at 90% 80%, oklch(0.55 0.18 220 / 0.5), transparent 45%)" }} />
        
        <div className="container-page relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Core Values</h2>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, index) => (
              <div
                key={v.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background index number */}
                <span className="absolute right-4 top-4 text-5xl font-bold font-display text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                  0{index + 1}
                </span>

                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition shadow-md`}>
                  <v.icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-display font-semibold text-lg text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/70 group-hover:text-white/85 transition-colors leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">End-to-end EXIM &amp; Logistics</h2>
            <p className="mt-4 text-muted-foreground">A single partner across the full international trade lifecycle.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to={`/services?type=${s.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Background Image */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  {/* Floating Icon */}
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg leading-tight group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/80 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {s.desc}
                  </p>
                  
                  {/* Hover view link arrow */}
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View All Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Industries We Serve</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Trusted across diverse sectors</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative rounded-2xl bg-secondary/50 p-5 text-center transition-all duration-300 hover:bg-background hover:shadow-card hover:-translate-y-1 overflow-hidden"
            >
              {/* ambient glow */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-br ${ind.gradient} opacity-10 group-hover:opacity-25 blur-xl transition-opacity`} />
              <div className={`mx-auto h-12 w-12 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <ind.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold leading-snug text-foreground/90 group-hover:text-brand transition-colors">{ind.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 50 / 0.6), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.55 0.18 220 / 0.6), transparent 40%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to simplify your global trade?</h2>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto">Speak with our experts for tailored trade, customs and logistics solutions.</p>
            <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90">
              <Link to="/contact">Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
