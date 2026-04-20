// ============================================================
//  LANDING PAGE — Pintura + Porcelanato
//  Edite as constantes abaixo para personalizar o site
// ============================================================

// --- CONFIGURAÇÕES RÁPIDAS -----------------------------------
const CONFIG = {
  // WhatsApp: coloque apenas os dígitos (código país + DDD + número)
  whatsapp: '5511999999999',

  // Mensagem pré-preenchida ao clicar nos botões
  whatsappMsg: 'Olá! Vi seu site e gostaria de um orçamento gratuito.',

  // Nome do profissional / empresa
  nome: 'Fabio',
  empresa: 'Fabio Pintor',

  // Cidade para exibição no texto
  cidade: 'Curitiba',

  // Estado
  estado: 'Paraná',

  // Anos de experiência
  anosExp: 12,
}

// URL montada automaticamente
const WPP = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`

// ============================================================
//  GALERIA — fotos reais dos trabalhos
// ============================================================

// Fotos em destaque (aparecem em grid grande no topo da seção)
const FOTOS_DESTAQUE = [
  { src: '/galeria/foto00000100.jpg', desc: 'Sala de estar de alto padrão — porcelanato e pintura premium' },
  { src: '/galeria/foto00000085.jpg', desc: 'Fachada residencial — pintura externa completa' },
  { src: '/galeria/foto00000084.jpg', desc: 'Teto de gesso rebaixado com curvas' },
  { src: '/galeria/foto00000115.jpg', desc: 'Quadra esportiva — pintura epóxi em quadra de futsal' },
  { src: '/galeria/foto00000119.jpg', desc: 'Piscina em fibra — pintura e renovação completa' },
  { src: '/galeria/foto00000104.jpg', desc: 'Fachada comercial em azul — pintura externa' },
]

// Todas as fotos para o carrossel
const TODAS_FOTOS = [
  '/galeria/foto00000082.jpg',
  '/galeria/foto00000083.jpg',
  '/galeria/foto00000084.jpg',
  '/galeria/foto00000085.jpg',
  '/galeria/foto00000086.jpg',
  '/galeria/foto00000087.jpg',
  '/galeria/foto00000099.jpg',
  '/galeria/foto00000100.jpg',
  '/galeria/foto00000101.jpg',
  '/galeria/foto00000102.jpg',
  '/galeria/foto00000103.jpg',
  '/galeria/foto00000104.jpg',
  '/galeria/foto00000108.jpg',
  '/galeria/foto00000109.jpg',
  '/galeria/foto00000110.jpg',
  '/galeria/foto00000111.jpg',
  '/galeria/foto00000112.jpg',
  '/galeria/foto00000113.jpg',
  '/galeria/foto00000114.jpg',
  '/galeria/foto00000115.jpg',
  '/galeria/foto00000116.jpg',
  '/galeria/foto00000117.jpg',
  '/galeria/foto00000118.jpg',
  '/galeria/foto00000119.jpg',
  '/galeria/foto00000120.jpg',
  '/galeria/foto00000121.jpg',
  '/galeria/foto00000122.jpg',
  '/galeria/foto00000123.jpg',
  '/galeria/foto00000124.jpg',
  '/galeria/foto00000125.jpg',
  '/galeria/foto00000126.jpg',
  '/galeria/foto00000127.jpg',
  '/galeria/foto00000128.jpg',
  '/galeria/foto00000129.jpg',
  '/galeria/foto00000130.jpg',
  '/galeria/foto00000131.jpg',
  '/galeria/foto00000132.jpg',
  '/galeria/foto00000133.jpg',
  '/galeria/foto00000134.jpg',
  '/galeria/foto00000135.jpg',
  '/galeria/foto00000136.jpg',
  '/galeria/foto00000137.jpg',
  '/galeria/foto00000138.jpg',
  '/galeria/foto00000139.jpg',
  '/galeria/foto00000140.jpg',
  '/galeria/foto00000141.jpg',
  '/galeria/foto00000142.jpg',
  '/galeria/foto00000143.jpg',
]

// ============================================================
//  DEPOIMENTOS — edite à vontade
// ============================================================
const DEPOIMENTOS = [
  {
    nome:    'Ana Paula M.',
    bairro:  'Mooca, SP',
    texto:   'Pintou toda a minha casa em 4 dias. Acabamento perfeito, sem manchas, sem respingos. Super recomendo!',
    estrelas: 5,
  },
  {
    nome:    'Roberto Alves',
    bairro:  'Tatuapé, SP',
    texto:   'Fiz o porcelanato da sala e dos quartos. Trabalho impecável, prazo cumprido e preço honesto. Ficou incrível!',
    estrelas: 5,
  },
  {
    nome:    'Fernanda Costa',
    bairro:  'Vila Madalena, SP',
    texto:   'Profissional sério e de confiança. Pintou o escritório do meu marido e ele amou. Com certeza vai voltar!',
    estrelas: 5,
  },
]

// ============================================================
import { useState, useEffect, useCallback } from 'react'
import {
  MessageCircle,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Smile,
  Award,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from 'lucide-react'

// --- Botão WhatsApp (reutilizável) ---
function BotaoWpp({ texto = 'Peça seu orçamento grátis', className = '' }) {
  return (
    <a
      href={WPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95
        text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-200
        text-base md:text-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      {texto}
    </a>
  )
}

// --- Estrelas ---
function Estrelas({ qtd }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: qtd }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

// ============================================================
//  SEÇÃO 1 — HERO
// ============================================================
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-4 py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3f6f 60%, #0f2a4a 100%)' }}
    >
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Badge superior */}
      <div className="relative z-10 mb-6 inline-flex items-center gap-2 bg-white/10 border border-white/20
        rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Atendendo no {CONFIG.cidade} e região
      </div>

      {/* Headline principal */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-3xl mb-4">
        Seu Imóvel{' '}
        <span className="text-orange-400">Transformado</span>
        <br />com Qualidade e Garantia
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 text-lg md:text-xl text-blue-100 max-w-xl mb-3">
        Pintura profissional e aplicação de piso porcelanato.
        <br className="hidden sm:block" />
        <strong className="text-white">Orçamento grátis e sem compromisso.</strong>
      </p>

      {/* Prova social rápida */}
      <p className="relative z-10 text-sm text-blue-200 mb-8">
        +{CONFIG.anosExp} anos de experiência · Centenas de clientes satisfeitos
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-center justify-center mb-12">
        <BotaoWpp texto="Fale direto no WhatsApp" className="text-lg px-8 py-4 shadow-xl shadow-green-900/30" />
        <a
          href="#servicos"
          className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10
            text-white font-semibold rounded-full px-6 py-3 transition-all duration-200"
        >
          Ver serviços
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      {/* Mini selos de confiança */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center text-sm text-blue-100">
        {[
          { icon: <CheckCircle className="w-4 h-4 text-green-400" />, txt: 'Orçamento gratuito' },
          { icon: <Shield className="w-4 h-4 text-orange-400" />, txt: 'Serviço com garantia' },
          { icon: <Clock className="w-4 h-4 text-blue-300" />, txt: 'Prazo sempre cumprido' },
        ].map(({ icon, txt }, i) => (
          <div key={i} className="flex items-center gap-1.5">
            {icon}
            <span>{txt}</span>
          </div>
        ))}
      </div>

      {/* Seta animada */}
      <a href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

// ============================================================
//  SEÇÃO 2 — SERVIÇOS
// ============================================================
const SERVICOS = [
  {
    emoji: '🖌️',
    titulo: 'Pintura Residencial e Comercial',
    desc: 'Acabamento de alto nível para salas, quartos, fachadas, escritórios e muito mais. Usamos tintas premium com garantia de durabilidade.',
    itens: [
      'Pintura interna e externa',
      'Textura e grafiato',
      'Massa corrida e preparação',
      'Pintura de fachadas',
      'Ambientes comerciais',
    ],
  },
  {
    emoji: '🏠',
    titulo: 'Aplicação de Piso Porcelanato',
    desc: 'Instalação precisa com rejunte impecável. Seu piso valoriza o imóvel e dura décadas quando instalado do jeito certo.',
    itens: [
      'Porcelanato retificado',
      'Piso de madeira e vinílico',
      'Rejunte colorido e epóxi',
      'Nivelamento de contrapiso',
      'Reforma e substituição de piso',
    ],
  },
]

function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue mt-2">
            Serviços Especializados
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Cada serviço entregue com cuidado, pontualidade e material de qualidade.
          </p>
        </div>

        {/* Cards de serviço */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICOS.map(({ emoji, titulo, desc, itens }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md
                hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{emoji}</div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">{titulo}</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
              <ul className="space-y-2 mb-6">
                {itens.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <BotaoWpp texto="Pedir orçamento" className="w-full justify-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
//  SEÇÃO 3 — SOBRE
// ============================================================
function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Foto do profissional */}
          <div className="relative">
            <img
              src="/galeria/foto00000124.jpg"
              alt={CONFIG.nome}
              className="w-full aspect-[4/5] rounded-2xl object-cover object-top shadow-lg"
            />
            {/* Selo de experiência */}
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl p-4 shadow-xl text-center">
              <p className="text-3xl font-black">{CONFIG.anosExp}+</p>
              <p className="text-xs font-semibold leading-tight">anos de<br/>experiência</p>
            </div>
          </div>

          {/* Texto sobre */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Quem sou eu</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-blue mt-2 mb-4">
              Trabalho feito com cuidado e responsabilidade
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Meu nome é <strong>{CONFIG.nome}</strong> e há {CONFIG.anosExp} anos eu transformo imóveis no{' '}
              {CONFIG.cidade}. Comecei como ajudante e aprendi cada detalhe do ofício — da preparação
              da superfície até o acabamento final.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hoje atuo em pintura residencial, comercial, quadras esportivas, piscinas e muito mais.
              {' '}<strong>Trato cada trabalho como se fosse na minha própria casa.</strong>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: '500+', label: 'Projetos concluídos' },
                { num: '98%', label: 'Clientes satisfeitos' },
                { num: '0', label: 'Reclamações abertas' },
                { num: '100%', label: 'Prazo cumprido' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-2xl font-black text-brand-blue">{num}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <BotaoWpp texto="Conversar agora no WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
//  SEÇÃO 4 — GALERIA COM DESTAQUE + CARROSSEL
// ============================================================

// Lightbox para ver foto em tamanho grande
function Lightbox({ fotos, indiceInicial, onFechar }) {
  const [idx, setIdx] = useState(indiceInicial)

  const anterior = useCallback(() => setIdx(i => (i - 1 + fotos.length) % fotos.length), [fotos.length])
  const proximo  = useCallback(() => setIdx(i => (i + 1) % fotos.length), [fotos.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  anterior()
      if (e.key === 'ArrowRight') proximo()
      if (e.key === 'Escape')     onFechar()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [anterior, proximo, onFechar])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onFechar}
    >
      {/* Botão fechar */}
      <button
        onClick={onFechar}
        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20
          rounded-full p-2 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Seta anterior */}
      <button
        onClick={(e) => { e.stopPropagation(); anterior() }}
        className="absolute left-4 text-white bg-white/10 hover:bg-white/20
          rounded-full p-3 transition-colors z-10"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Imagem */}
      <img
        src={fotos[idx]}
        alt={`Trabalho ${idx + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Seta próxima */}
      <button
        onClick={(e) => { e.stopPropagation(); proximo() }}
        className="absolute right-4 text-white bg-white/10 hover:bg-white/20
          rounded-full p-3 transition-colors z-10"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Contador */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {idx + 1} / {fotos.length}
      </p>
    </div>
  )
}

// Carrossel de miniaturas
function Carrossel({ fotos, onAbrirLightbox }) {
  const [inicio, setInicio] = useState(0)
  const visiveis = 4

  const anterior = () => setInicio(i => Math.max(0, i - visiveis))
  const proximo  = () => setInicio(i => Math.min(fotos.length - visiveis, i + visiveis))

  const podeAnterior = inicio > 0
  const podeProximo  = inicio + visiveis < fotos.length

  return (
    <div className="relative">
      <div className="flex gap-3 overflow-hidden">
        {fotos.slice(inicio, inicio + visiveis).map((src, i) => (
          <button
            key={inicio + i}
            onClick={() => onAbrirLightbox(inicio + i)}
            className="relative flex-1 aspect-square rounded-xl overflow-hidden group
              ring-2 ring-transparent hover:ring-orange-400 transition-all duration-200 min-w-0"
          >
            <img
              src={src}
              alt={`Trabalho ${inicio + i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200
              flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </button>
        ))}
      </div>

      {/* Controles de navegação */}
      {podeAnterior && (
        <button
          onClick={anterior}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2
            hover:bg-orange-50 transition-colors border border-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}
      {podeProximo && (
        <button
          onClick={proximo}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2
            hover:bg-orange-50 transition-colors border border-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {/* Indicador de progresso */}
      <div className="flex gap-1.5 justify-center mt-4">
        {Array.from({ length: Math.ceil(fotos.length / visiveis) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setInicio(i * visiveis)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              Math.floor(inicio / visiveis) === i
                ? 'w-6 bg-orange-500'
                : 'w-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function Galeria() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="galeria" className="py-20"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Nossos trabalhos</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue mt-2">
            Resultados Reais
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Cada foto é de um trabalho entregue com cuidado e qualidade.
          </p>
        </div>

        {/* ── FOTOS EM DESTAQUE ── */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Destaques</p>

          {/* Primeira linha: foto grande + 2 menores */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {/* Foto principal */}
            <button
              onClick={() => setLightbox({ fotos: TODAS_FOTOS, idx: TODAS_FOTOS.indexOf(FOTOS_DESTAQUE[0].src) })}
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group aspect-[4/3]"
            >
              <img
                src={FOTOS_DESTAQUE[0].src}
                alt={FOTOS_DESTAQUE[0].desc}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <p className="font-semibold text-sm drop-shadow">{FOTOS_DESTAQUE[0].desc}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="w-7 h-7 text-white" />
                </div>
              </div>
            </button>

            {/* Fotos secundárias col direita */}
            {FOTOS_DESTAQUE.slice(1, 3).map((foto, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ fotos: TODAS_FOTOS, idx: TODAS_FOTOS.indexOf(foto.src) })}
                className="relative rounded-2xl overflow-hidden group aspect-square"
              >
                <img
                  src={foto.src}
                  alt={foto.desc}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="font-medium text-xs leading-tight drop-shadow line-clamp-2">{foto.desc}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Segunda linha: 3 fotos iguais */}
          <div className="grid grid-cols-3 gap-3">
            {FOTOS_DESTAQUE.slice(3, 6).map((foto, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ fotos: TODAS_FOTOS, idx: TODAS_FOTOS.indexOf(foto.src) })}
                className="relative rounded-2xl overflow-hidden group aspect-video"
              >
                <img
                  src={foto.src}
                  alt={foto.desc}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="font-medium text-xs leading-tight drop-shadow line-clamp-2">{foto.desc}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── CARROSSEL COM TODOS OS TRABALHOS ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Portfólio completo</p>
              <p className="text-brand-blue font-black text-xl mt-0.5">Todos os trabalhos</p>
            </div>
            <span className="text-sm text-gray-400">{TODAS_FOTOS.length} fotos</span>
          </div>
          <Carrossel
            fotos={TODAS_FOTOS}
            onAbrirLightbox={(idx) => setLightbox({ fotos: TODAS_FOTOS, idx })}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Gostou do que viu? Peça um orçamento agora mesmo.</p>
          <BotaoWpp texto="Quero transformar meu imóvel" className="px-8 py-4" />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          fotos={lightbox.fotos}
          indiceInicial={lightbox.idx}
          onFechar={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

// ============================================================
//  SEÇÃO 5 — DIFERENCIAIS
// ============================================================
const DIFERENCIAIS = [
  {
    icon: <Award className="w-7 h-7" />,
    titulo: 'Material de Qualidade',
    desc: 'Usamos apenas tintas e materiais de marcas reconhecidas. Seu resultado dura anos.',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    titulo: 'Prazo que Você Pode Confiar',
    desc: 'Combinamos uma data e cumprimos. Sem enrolação, sem atraso.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    titulo: 'Garantia do Serviço',
    desc: 'Se aparecer qualquer problema no acabamento, a gente volta e resolve sem custo extra.',
  },
  {
    icon: <Smile className="w-7 h-7" />,
    titulo: 'Ambiente Limpo e Organizado',
    desc: 'Respeitamos sua casa. Protegemos tudo, trabalhamos com cuidado e entregamos no capricho.',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    titulo: 'Atendimento Direto pelo WhatsApp',
    desc: 'Fala direto comigo, sem secretária e sem enrolação. Resposta rápida e orçamento no mesmo dia.',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    titulo: 'Orçamento Grátis e Sem Compromisso',
    desc: 'Vou até você, avalio o trabalho e apresento um orçamento claro e detalhado. Sem pegadinhas.',
  },
]

function Diferenciais() {
  return (
    <section id="diferenciais"
      className="py-20 text-white"
      style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3f6f 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Por que me escolher?</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            O que me diferencia dos outros
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map(({ icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-orange-400 mb-4">{icon}</div>
              <h3 className="font-bold text-lg mb-2">{titulo}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
//  SEÇÃO 6 — DEPOIMENTOS
// ============================================================
function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Quem já contratou</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue mt-2">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map(({ nome, bairro, texto, estrelas }) => (
            <div
              key={nome}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <Estrelas qtd={estrelas} />
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                "{texto}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-brand-blue text-sm">{nome}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {bairro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
//  SEÇÃO 7 — CTA FINAL (forte)
// ============================================================
function CtaFinal() {
  return (
    <section className="py-24 text-white text-center px-4"
      style={{ background: 'linear-gradient(135deg, #ea6c0a 0%, #f97316 50%, #fb923c 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-orange-100 font-semibold text-sm uppercase tracking-widest mb-3">
          Não deixe para depois
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
          Pronto para transformar<br />seu imóvel?
        </h2>
        <p className="text-orange-100 text-lg mb-8 max-w-lg mx-auto">
          Fale agora pelo WhatsApp e receba um orçamento gratuito hoje mesmo.
          Sem compromisso, sem enrolação.
        </p>

        <a
          href={WPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-orange-600 hover:bg-orange-50
            active:scale-95 font-black rounded-full px-8 py-4 text-xl shadow-2xl
            transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp agora
        </a>

        <p className="text-orange-200 text-sm mt-6">
          ✓ Resposta em até 1 hora &nbsp;&nbsp; ✓ Orçamento sem taxa &nbsp;&nbsp; ✓ Atendimento humano
        </p>
      </div>
    </section>
  )
}

// ============================================================
//  RODAPÉ
// ============================================================
function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Marca */}
          <div>
            <h3 className="text-xl font-black text-orange-400 mb-3">{CONFIG.empresa}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Pintura residencial, comercial e aplicação de piso porcelanato no{' '}
              {CONFIG.cidade} e região.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-3">Serviços</h4>
            <ul className="space-y-1.5 text-sm text-blue-200">
              <li>• Pintura residencial</li>
              <li>• Pintura comercial</li>
              <li>• Textura e grafiato</li>
              <li>• Piso porcelanato</li>
              <li>• Reforma de pisos</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-3">Contato</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <a
                href={WPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                WhatsApp — orçamento grátis
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                {CONFIG.cidade} e região
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} {CONFIG.empresa} — {CONFIG.nome}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

// ============================================================
//  BOTÃO WHATSAPP FIXO (canto inferior direito)
// ============================================================
function WppFixo() {
  return (
    <a
      href={WPP}
      target="_blank"
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Anel pulsante */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 wpp-ring pointer-events-none" />

      {/* Botão principal */}
      <div className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600
        active:scale-95 text-white font-bold rounded-full shadow-2xl transition-all duration-200
        pl-3 pr-5 py-3"
      >
        {/* Ícone WhatsApp SVG */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-bold hidden sm:block">Orçamento grátis</span>
      </div>
    </a>
  )
}

// ============================================================
//  APP PRINCIPAL
// ============================================================
export default function App() {
  return (
    <>
      <Hero />
      <Servicos />
      <Sobre />
      <Galeria />
      <Diferenciais />
      <Depoimentos />
      <CtaFinal />
      <Footer />
      <WppFixo />
    </>
  )
}
