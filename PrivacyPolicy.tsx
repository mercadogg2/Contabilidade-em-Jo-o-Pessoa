
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Mail, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-300 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} /> Voltar para o início
        </Link>

        <header className="mb-20">
          <div className="bg-sky-500/10 p-4 rounded-2xl w-fit mb-6 text-sky-400">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Política de <span className="text-sky-400">Privacidade</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium italic">
            Sua confiança e segurança são nossa maior prioridade em João Pessoa.
          </p>
        </header>

        <div className="space-y-12">
          {/* Intro Section */}
          <section className="bg-[#111827]/40 backdrop-blur-sm border border-gray-800/50 p-8 lg:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-sky-400" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Transparência</h2>
            </div>
            <p className="leading-relaxed mb-6">
              A ContabilVision valoriza sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações de acordo com a LGPD (Lei Geral de Proteção de Dados). Quando você utiliza nosso formulário de contato ou solicita uma consultoria em Manaíra ou qualquer região de João Pessoa, garantimos que seus dados fundamentais sejam tratados com o máximo rigor técnico.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-[#111827]/40 backdrop-blur-sm border border-gray-800/50 p-8 lg:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-sky-400" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Dados Coletados</h2>
            </div>
            <p className="leading-relaxed mb-6">
              Coletamos informações básicas fornecidas voluntariamente por você através de nossos canais oficiais:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>Nome do responsável e da empresa;</li>
              <li>Telefone/WhatsApp para contato comercial;</li>
              <li>E-mail corporativo;</li>
              <li>Informações sobre os desafios contábeis do seu negócio.</li>
            </ul>
          </section>

          {/* Usage Section */}
          <section className="bg-[#111827]/40 backdrop-blur-sm border border-gray-800/50 p-8 lg:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-sky-400" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Finalidade do Uso</h2>
            </div>
            <p className="leading-relaxed mb-6">
              Utilizamos esses dados exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>Realizar o diagnóstico contábil solicitado;</li>
              <li>Enviar propostas personalizadas para sua empresa em Jampa;</li>
              <li>Esclarecer dúvidas técnicas via WhatsApp ou Telefone;</li>
              <li>Garantir o atendimento consultivo que nossa marca representa.</li>
            </ul>
            <p className="mt-6 text-gray-500 italic">
              * Jamais vendemos ou compartilhamos seus dados com terceiros para fins publicitários.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-sky-500/5 border border-sky-500/20 p-8 lg:p-12 rounded-[2.5rem] text-center">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Dúvidas sobre seus dados?</h2>
            <p className="leading-relaxed mb-8 max-w-2xl mx-auto">
              Se você deseja solicitar a exclusão de seus dados ou tem qualquer dúvida sobre nossa gestão de segurança na ContabilVision, entre em contato diretamente com nosso DPO regional.
            </p>
            <a 
              href="mailto:privacidade@contabilvision.com.br" 
              className="inline-block bg-sky-500 hover:bg-sky-400 text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-sky-500/20"
            >
              Falar com Segurança
            </a>
          </section>
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-800 text-center text-gray-600 text-xs uppercase tracking-widest">
          © 2025 ContabilVision João Pessoa - Última atualização: Maio de 2026
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
