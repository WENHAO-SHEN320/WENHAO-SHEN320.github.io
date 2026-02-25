import React, { useState, useEffect } from 'react';
import { Menu, ArrowUpRight, Plus, Minus, Heart, Sparkles, Mail, Phone, Github, Copy, ExternalLink, ArrowUp } from 'lucide-react';
import { photos, projects, papers, philosophies, products } from './data';

function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero-root', label: '关于' },
    { id: 'projects-root', label: '项目' },
    { id: 'research-root', label: '实习' },
    { id: 'products-root', label: '产品' },
    { id: 'philosophy-root', label: '哲思' },
    { id: 'awards-root', label: '荣誉' },
    { id: 'contact-root', label: '联系' }
  ];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToId('hero-root')} className="text-2xl font-serif font-medium tracking-tight hover:text-primary transition-colors">
          Wenhao Shen
        </button>
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`group relative px-6 py-2 rounded-full transition-all duration-300 font-serif tracking-wide ${isActive ? 'text-primary bg-[#EBE7D9]' : 'text-muted-foreground hover:bg-[#EBE7D9]/50 hover:text-foreground'}`}
              >
                {item.label}
                <span className={`absolute bottom-1.5 left-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 -translate-x-1/2 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
              </button>
            );
          })}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/30">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-left font-serif text-lg text-foreground hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(prev => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-root" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-bold">TECH × AI × PRODUCT × SYSTEM THINKING</p>
            <h1 className="text-6xl lg:text-8xl font-serif font-medium tracking-tight text-foreground">Wenhao Shen</h1>
            <p className="text-2xl text-muted-foreground font-light italic font-serif">AI-Native Product Thinker · System Builder</p>
          </div>
          <div className="h-px w-24 bg-primary/30"></div>
          <p className="text-foreground/80 leading-relaxed max-w-lg text-lg font-light">
            在复杂系统里寻找秩序，在噪声中构建智能。
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground/60 pt-2">
            <span className="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">ENFP</span>
            <span className="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">AI Curiosity</span>
            <span className="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">Problem Solving</span>
            <span className="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">Coffee Fueled</span>
          </div>
          <div className="pt-8">
            <p className="font-sans italic text-2xl tracking-wide text-foreground/90">
              MSc Telecommunications Engineering <span className="text-primary/50 mx-2 not-italic">·</span> Politecnico di Milano
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 aspect-3/4 w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-hero-frame border border-primary/10 bg-secondary/20">
          {photos.map((url, index) => (
            <img
              key={index}
              src={url}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentPhoto ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
              alt="Cover"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 flex gap-2 z-10">
            {photos.map((_, i) => (
              <div key={i} className={`h-0.5 transition-all duration-300 rounded-full ${i === currentPhoto ? 'w-8 bg-white' : 'w-4 bg-white/40'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Projects</p>
          <h2 className="text-5xl font-serif text-foreground">项目经历</h2>
        </div>
        <div>
          {projects.map(p => {
            const isDimmed = hoveredProject !== null && hoveredProject !== p.id;
            return (
              <div
                key={p.id}
                className={`group relative py-12 border-t border-border transition-all duration-500 cursor-pointer ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="md:col-span-2 text-sm text-muted-foreground font-serif italic">{p.date}</div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {p.title} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.subtitle}</p>
                  </div>
                  <div className="md:col-span-4 text-foreground/70 leading-relaxed font-light">{p.description}</div>
                  <div className="md:col-span-2 flex flex-col items-start gap-2">
                    <span className="text-xs text-primary border border-primary/30 px-3 py-1 bg-primary/5 rounded-full">{p.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Research() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  return (
    <section id="research-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Experience</p>
          <h2 className="text-5xl font-serif text-foreground">实习经历</h2>
        </div>
        <div>
          {papers.map(p => {
            const isOpen = expandedPaper === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setExpandedPaper(isOpen ? null : p.id)}
                className={`smooth-card relative border border-border bg-white p-8 mb-6 cursor-pointer group rounded-2xl ${isOpen ? 'border-primary/40 ring-1 ring-primary/10' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary border border-primary/20 px-2 py-0.5 rounded-md">{p.role}</span>
                      <span className="text-xs text-muted-foreground font-serif italic">{p.date}</span>
                    </div>
                    <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="text-primary">{p.venue}</span>
                      <span>{p.level}</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-secondary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-foreground/70 text-sm leading-relaxed border-t border-border pt-4 font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Favorites</p>
          <h2 className="text-5xl font-serif text-foreground">喜欢的产品</h2>
          <p className="text-muted-foreground mt-4 text-lg italic font-serif">真正好的产品，往往让复杂变得自然</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="smooth-card group relative border border-border p-8 cursor-default rounded-2xl bg-white hover:border-primary/30 h-[220px] overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={p.logoUrl} alt={p.name} className="w-12 h-12 object-contain p-1 border border-border/50 rounded-xl bg-white shadow-sm" />
                    <div>
                      <h3 className="text-xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{p.cat}</span>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:fill-primary transition-colors duration-300" />
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed font-light line-clamp-2">{p.reason}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-white/95 backdrop-blur-sm border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs text-primary font-medium italic leading-relaxed">{p.insight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const [activePhilo, setActivePhilo] = useState(0);
  const activeItem = philosophies[activePhilo];

  return (
    <section id="philosophy-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Philosophy</p>
          <h2 className="text-5xl font-serif text-foreground">哲思与方法论</h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-2">
            {philosophies.map((item, idx) => {
              const isActive = activePhilo === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePhilo(idx)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-300 rounded-r-xl ${isActive ? 'border-primary bg-primary/5 pl-8' : 'border-transparent hover:pl-8 text-muted-foreground'}`}
                >
                  <span className={`text-xs block mb-2 uppercase tracking-widest ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{item.category}</span>
                  <span className={`text-xl font-serif ${isActive ? 'text-foreground' : ''}`}>{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-8 flex items-center relative min-h-[300px]">
            <div key={activeItem.id} className="animate-fade-in pl-10 border-l border-border/50">
              <h3 className="text-4xl font-serif text-primary mb-8 leading-tight">{activeItem.title}</h3>
              <p className="text-xl font-light text-foreground/80 leading-relaxed max-w-2xl">{activeItem.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const [hoveredAward, setHoveredAward] = useState<{ l: string, val: string } | null>(null);

  const bars = [
    { l: '校内荣誉', w: '100%', c: '#A67C37', val: '6项' },
    { l: '计算机设计', w: '66%', c: '#528F65', val: '4项' },
    { l: '技术挑战', w: '83%', c: '#1F6E75', val: '5项' },
    { l: '创新创业', w: '33%', c: '#9E9354', val: '2项' }
  ];

  const displayData = hoveredAward
    ? { val: hoveredAward.val, label: hoveredAward.l }
    : { val: '17', label: 'TOTAL' };

  return (
    <section id="awards-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Awards</p>
          <h2 className="text-5xl font-serif text-foreground">荣誉与奖项</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { val: '17', label: '荣誉奖项' }, { val: '3.85/4.00', label: 'GPA' }, { val: '1', label: '软著专利' }, { val: '2%', label: '专业排名' }
          ].map((s, i) => (
            <div key={i} className="bg-white border border-border p-8 text-center smooth-card rounded-2xl">
              <div className="text-5xl font-serif text-[#A67C37] mb-2">{s.val}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-border p-10 smooth-card rounded-2xl">
            <h4 className="font-serif text-xl mb-10 text-foreground/80">奖项类别分布</h4>
            <div className="space-y-6">
              {bars.map((bar, i) => {
                const isDimmed = hoveredAward && hoveredAward.l !== bar.l;
                return (
                  <div
                    key={i}
                    className={`award-row flex items-center gap-4 text-xs text-muted-foreground cursor-pointer group transition-all duration-300 ${isDimmed ? 'opacity-30 grayscale' : 'opacity-100 grayscale-0'}`}
                    onMouseEnter={() => setHoveredAward({ l: bar.l, val: bar.val })}
                    onMouseLeave={() => setHoveredAward(null)}
                  >
                    <span className="w-20 text-right shrink-0 group-hover:text-primary transition-colors">{bar.l}</span>
                    <div className="h-8 rounded-full bg-gray-100 flex-grow relative overflow-hidden">
                      <div
                        className="h-full absolute top-0 left-0 animate-grow rounded-full transition-all duration-300"
                        style={{ backgroundColor: bar.c, '--w': bar.w } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="award-val w-8 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold">{bar.val}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-border p-10 flex flex-col items-center justify-center smooth-card rounded-2xl">
            <h4 className="font-serif text-xl mb-10 w-full text-left text-foreground/80">奖项级别分布</h4>
            <div
              className="relative w-64 h-64 rounded-full shadow-inner transition-transform duration-500 hover:scale-105"
              style={{ background: 'conic-gradient(#A67C37 0% 12%, #528F65 12% 30%, #1F6E75 30% 100%)' }}
            >
              <div className="absolute inset-10 bg-white rounded-full flex items-center justify-center flex-col shadow-soft transition-all duration-300">
                <span className="text-5xl font-serif text-foreground animate-fade-in" key={displayData.val}>{displayData.val}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-2 transition-all duration-300">{displayData.label}</span>
              </div>
            </div>
            <div className="flex gap-8 mt-12 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#A67C37]"></span> 国家级 (2)</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#528F65]"></span> 省级 (3)</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#1F6E75]"></span> 校级 (12)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const items = [
    { icon: Mail, label: 'Email', val: '15252003383@163.com', rawVal: '15252003383@163.com', action: 'copy' },
    { icon: Phone, label: 'Phone', val: '150 5083 9108', rawVal: '15050839108', action: 'copy' },
    { icon: Github, label: 'GitHub', val: 'WENHAO-SHEN320', rawVal: 'https://github.com/WENHAO-SHEN320', action: 'link' }
  ];

  const handleAction = (item: any) => {
    if (item.action === 'copy') {
      navigator.clipboard.writeText(item.rawVal);
      setCopied(item.label);
      setTimeout(() => setCopied(null), 1000);
    } else {
      window.open(item.rawVal, '_blank');
    }
  };

  return (
    <section id="contact-root" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Contact</p>
          <h2 className="text-5xl font-serif text-foreground">联系方式</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            {items.map((c, i) => {
              const Icon = c.icon;
              const isCopied = copied === c.label;
              return (
                <div key={i} className="flex items-center justify-between p-8 border border-border bg-[#FDFCFB] group smooth-card rounded-2xl">
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-white border border-border rounded-full text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1 uppercase tracking-wider">{c.label}</span>
                      <span className="text-xl font-serif text-foreground">{c.val}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAction(c)}
                    className={`p-2 rounded-full transition-all duration-300 ${isCopied ? 'text-green-600 scale-125 bg-green-50' : 'text-muted-foreground/40 hover:text-primary hover:bg-primary/5'}`}
                  >
                    {c.action === 'copy' ? <Copy className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pl-16 border-l-2 border-primary/20 relative h-full flex flex-col justify-center py-10">
            <div className="text-8xl text-[#EBE7D9] absolute -top-8 -left-10 font-serif select-none leading-none">“</div>
            <p className="text-5xl font-serif italic leading-tight text-foreground mb-10 relative z-10">
              The only way to do great work is to love what you do.
            </p>
            <cite className="text-muted-foreground not-italic text-lg tracking-wide">— Steve Jobs</cite>
          </div>
        </div>

        <div className="mt-40 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <p>缓慢生长 · 深度投入 · 时间证明一切</p>
          <div className="flex items-center gap-4">
            <p>© 2026 Wenhao Shen. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-primary transition-colors ml-8">
              BACK TO TOP <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero-root');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['hero-root', 'projects-root', 'research-root', 'products-root', 'philosophy-root', 'awards-root', 'contact-root'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Research />
        <Products />
        <Philosophy />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}
