
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Star, 
  Cpu, 
  Building2, 
  TrendingUp,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

// --- Components ---

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-sm font-medium">
    {children}
  </a>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all duration-300 group shadow-lg hover:shadow-sky-500/10"
  >
    <div className="bg-sky-500/10 p-4 rounded-xl w-fit mb-6 text-sky-400 group-hover:scale-110 transition-transform bg-gradient-to-br from-sky-500/20 to-transparent">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-sky-400 transition-colors uppercase tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800/50 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-sky-400 transition-colors group"
      >
        <span className="font-semibold text-lg pr-8">{question}</span>
        <div className={`p-2 rounded-full bg-gray-800/50 group-hover:bg-sky-500/20 transition-all ${isOpen ? 'rotate-180 bg-sky-500/20 text-sky-400' : 'text-gray-500'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const logoUrl = "https://i.postimg.cc/qBWTjB1c/Whats-App-Image-2025-12-17-at-09-19-15-removebg-preview.png";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formState;
    const whatsAppMessage = `Olá! Meu nome é ${name}, meu WhatsApp é ${phone}.\n\nDesafio da minha empresa: ${message}`;
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    window.open(`https://wa.me/5581997001981?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#0a0e17] border-b border-gray-800 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
          <div>E-MAIL: COMERCIAL@CONTABILVISION.COM.BR - PARAÍBA EM FOCO</div>
          <div className="flex gap-4">
            <Facebook size={14} className="cursor-pointer hover:text-sky-400 transition-colors" />
            <Instagram size={14} className="cursor-pointer hover:text-sky-400 transition-colors" />
            <Linkedin size={14} className="cursor-pointer hover:text-sky-400 transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-sky-400 transition-colors" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0e17]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src={logoUrl} 
              alt="ContabilVision Logo" 
              className="h-16 md:h-24 w-auto object-contain transition-all"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <a href="#contato" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-wide">
              Quero Contratar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0e17] border-b border-gray-800 p-6 flex flex-col gap-6 animate-slideDown">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-bold w-full uppercase text-center">
              Quero Contratar
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative py-24 lg:py-40 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/30 via-[#0a0e17] to-[#0a0e17]">
        {/* Hub Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 px-5 py-1.5 rounded-full flex items-center gap-2 shadow-2xl">
            <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <TrendingUp size={12} /> HUB JOÃO PESSOA & PARAÍBA
            </span>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black mb-8 leading-[1] tracking-tighter"
          >
            Contabilidade no Portal do <br />
            <span className="text-sky-400 italic font-serif">Extremo Oriental.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-14 font-medium leading-relaxed opacity-90"
          >
            Segurança tributária e gestão estratégica onde o sol nasce primeiro. 
            Potencializamos o crescimento de empresas em João Pessoa com inteligência real.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <a href="#contato" className="bg-sky-500 hover:bg-sky-400 text-black px-12 py-6 rounded-2xl font-black transition-all text-sm uppercase tracking-widest shadow-2xl shadow-sky-500/20 active:scale-95 text-center">
              CONSULTORIA ESTRATÉGICA
            </a>
            <a 
              href="https://wa.me/5581997001981" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-white hover:text-black px-12 py-6 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} /> WHATSAPP JOTA PÊ
            </a>
          </motion.div>
        </div>

        {/* Decor */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-[#0a0e17]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Badge overlay */}
            <div className="absolute -top-10 -left-10 z-20 hidden xl:block">
              <motion.div 
                animate={{ rotate: [3, 0, 3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="bg-sky-400 text-black p-10 rounded-3xl shadow-2xl text-center min-w-[200px]"
              >
                <div className="text-6xl font-black tracking-tighter">083</div>
                <div className="text-[12px] font-black uppercase tracking-[0.3em] mt-3 opacity-90 underline decoration-2 underline-offset-4">Paraíba raiz</div>
              </motion.div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-3xl border border-gray-800/50 transform group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="/images/contabilidade.png" 
                alt="Time ContabilVision" 
                className="w-full h-[650px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <div className="inline-block px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              CONTABILIDADE PARA PERFORMANCE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              A Visão do <span className="text-sky-400">Ponto Mais Oriental</span> das Américas
            </h2>
            <div className="space-y-8 text-gray-400 text-lg leading-relaxed mb-12 font-medium">
              <p>
                João Pessoa vive um momento de expansão tecnológica e imobiliária sem precedentes. 
                O empresário paraibano não busca mais apenas conformidade fiscal; ele busca parceiros que entendam a dinâmica de Jampa.
              </p>
              <p>
                Na ContabilVision, unimos a tradição do atendimento próximo com a eficiência da contabilidade digital. 
                Focamos em clínicas, tecnologia e serviços especializados, garantindo que sua empresa aproveite cada benefício fiscal do nosso estado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
              {[
                "Pólo Tecnológico PB",
                "ISS João Pessoa",
                "Gestão de Altiplano a Bessa",
                "DNA Paraibano"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-sky-500/20 p-1.5 rounded-full group-hover:bg-sky-500 transition-all">
                    <CheckCircle2 className="text-sky-400 group-hover:text-black" size={20} />
                  </div>
                  <span className="font-bold text-sm text-gray-200 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-[#0d121f]">
        <div className="container mx-auto px-4 text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter"
          >
            Soluções Paraíba
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            className="h-1.5 bg-sky-500 mx-auto mb-10 rounded-full"
          ></motion.div>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            Atendimento estratégico para serviços de saúde, TI, engenharia e o vibrante setor hoteleiro de João Pessoa.
          </p>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ServiceCard 
            icon={<Cpu size={32} />}
            title="TI & Startups"
            description="Tributação otimizada para desenvolvedores e empresas de tecnologia no ambiente vibrante de João Pessoa."
          />
          <ServiceCard 
            icon={<ShieldCheck size={32} />}
            title="Compliance Jampa"
            description="Auditoria e regularização focada na legislação municipal de João Pessoa e normas estaduais da Paraíba."
          />
          <ServiceCard 
            icon={<Building2 size={32} />}
            title="Engenharia & Imóveis"
            description="Suporte contábil para um dos setores que mais cresce no estado, do Cabo Branco ao Bessa."
          />
          <ServiceCard 
            icon={<Globe size={32} />}
            title="Contabilidade Digital"
            description="Processos 100% em nuvem para que você foque em vender mais e se preocupar menos com papelada."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#0a0e17]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Dúvidas Frequentes</h2>
            <p className="text-gray-500 font-medium text-lg italic">Focados no mercado de João Pessoa e Grande PB</p>
          </div>
          <div className="bg-[#111827]/40 backdrop-blur-sm rounded-[3rem] p-10 lg:p-16 border border-gray-800/50 shadow-2xl">
            <FAQItem 
              question="Vocês atendem novos bairros em crescimento como o Altiplano?"
              answer="Certamente! Atendemos todas as regiões de João Pessoa (Altiplano, Cabo Branco, Manaíra, Bessa, Bancários) e cidades vizinhas como Cabedelo e Santa Rita com a mesma agilidade."
            />
            <FAQItem 
              question="Como a ContabilVision ajuda empresas de TI na Paraíba?"
              answer="A Paraíba possui incentivos para o setor tecnológico. Analisamos se sua empresa pode ser enquadrada em benefícios estaduais e municipais específicos de João Pessoa, reduzindo a carga tributária legalmente."
            />
            <FAQItem 
              question="É difícil abrir empresa em João Pessoa?"
              answer="Com a integração Redesim e JUCEP, o processo tornou-se mais rápido. Nós cuidamos de toda a viabilidade, alvarás na SEMAM, Vigilância Sanitária e SEFIN para que você abra sem dores de cabeça."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 bg-[#0d121f]">
        <div className="container mx-auto px-4">
          <div className="bg-[#111827] rounded-[3.5rem] overflow-hidden border border-gray-800 flex flex-col lg:flex-row shadow-3xl hover:border-sky-500/30 transition-colors">
            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 lg:p-24 flex flex-col justify-between bg-gradient-to-br from-sky-950/20 via-transparent to-transparent">
              <div>
                <img 
                  src={logoUrl} 
                  alt="ContabilVision" 
                  className="h-28 w-auto mb-16"
                />
                <h2 className="text-5xl font-black mb-10 leading-tight tracking-tighter">O sol nasce aqui. Seu sucesso também.</h2>
                <p className="text-gray-400 text-xl mb-16 leading-relaxed font-medium">
                  Sede em João Pessoa, alma paraibana. Estamos prontos para transformar sua gestão contábil.
                </p>
                
                <div className="space-y-10">
                  <a 
                    href="https://wa.me/5581997001981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="bg-sky-500/10 p-6 rounded-3xl text-sky-400 group-hover:bg-sky-500 group-hover:text-black transition-all shadow-xl">
                      <Phone size={28} />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">WhatsApp Direct</div>
                      <div className="text-2xl font-black text-white">+55 81 99700-1981</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="bg-sky-500/10 p-6 rounded-3xl text-sky-400 group-hover:bg-sky-500 group-hover:text-black transition-all shadow-xl">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Manaíra - João Pessoa</div>
                      <div className="text-xl font-black text-white leading-tight">Av. Maria Rosa, 1470 - PB, 58038</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-gray-800/80">
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" className="text-yellow-400" />
                  ))}
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">AUTORIDADE CONTÁBIL PARAIBANA</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-12 lg:p-24 border-l border-gray-800 bg-[#0a0e17]/60 backdrop-blur-xl">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pl-2">SÓCIO RESPONSÁVEL</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Nome completo"
                      className="w-full bg-[#0d121f] border-2 border-gray-800/50 rounded-2xl px-8 py-6 focus:outline-none focus:border-sky-500 transition-all text-white placeholder-gray-600 font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pl-2">ZAP PARAIBANO</label>
                    <input 
                      type="text" 
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="(81) 99700-1981"
                      className="w-full bg-[#0d121f] border-2 border-gray-800/50 rounded-2xl px-8 py-6 focus:outline-none focus:border-sky-500 transition-all text-white placeholder-gray-600 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pl-2">DESAFIO DA SUA EMPRESA</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Como a ContabilVision pode ajudar seu negócio em Jampa?"
                    className="w-full bg-[#0d121f] border-2 border-gray-800/50 rounded-2xl px-8 py-6 focus:outline-none focus:border-sky-500 transition-all text-white placeholder-gray-600 resize-none font-medium"
                  ></textarea>
                </div>
                <button type="submit" className="group w-full bg-sky-500 hover:bg-sky-400 text-black font-black py-7 rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-[0.4em] text-sm shadow-3xl shadow-sky-500/20 active:scale-[0.98]">
                  FALAR COM CONSULTOR <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#0a0e17] border-t border-gray-800/50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img 
            src={logoUrl} 
            alt="Logo ContabilVision" 
            className="h-24 w-auto mb-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="flex gap-10 mb-12">
            <Facebook size={24} className="text-gray-600 hover:text-sky-400 cursor-pointer transition-colors" />
            <Instagram size={24} className="text-gray-600 hover:text-sky-400 cursor-pointer transition-colors" />
            <Linkedin size={24} className="text-gray-600 hover:text-sky-400 cursor-pointer transition-colors" />
          </div>
          <p className="text-gray-600 text-[12px] mb-6 uppercase tracking-[0.4em] font-bold text-center">
            © 2025 ContabilVision. Inteligência Contábil no Extremo Oriental do Brasil.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors" onClick={(e) => e.preventDefault()}>João Pessoa & Região</a>
            <Link to="/privacidade" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Políticas de Privacidade</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, delay: 1 }}
        className="fixed bottom-10 right-10 z-[100] group flex items-center"
      >
        <div className="bg-white text-[#0a0e17] px-8 py-4 rounded-2xl mr-6 opacity-0 group-hover:opacity-100 transition-all duration-500 font-black text-xs shadow-3xl translate-x-10 group-hover:translate-x-0 hidden lg:block uppercase tracking-widest">
          Ei! Vamos crescer sua empresa em Jampa?
        </div>
        <a 
          href="https://wa.me/5581997001981" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-6 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all relative group-hover:shadow-[#25D366]/40 flex items-center justify-center"
        >
          <MessageCircle size={32} />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-[#0a0e17] animate-pulse"></span>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
