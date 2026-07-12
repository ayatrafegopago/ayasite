# Aya Tráfego Pago — Contexto da Marca

Este arquivo é a memória permanente do projeto `aya-site`. Serve de base para qualquer trabalho futuro no site (páginas, componentes, copy) e para a criação de agentes/skills específicos desta marca.

> Nota técnica: ver [AGENTS.md](AGENTS.md) para orientações sobre a versão do Next.js usada neste projeto.

## Sobre o negócio

Aya Tráfego Pago — gestão de tráfego pago e estruturação de presença digital para negócios locais e prestadores de serviço em Porto Alegre e região.

Diferencial: entrega integrada (tráfego + identidade visual + copy + conteúdo), não serviço fragmentado.

## Golden Circle

- **Por quê:** bons negócios não deveriam depender de sorte ou indicação pra conquistar clientes; a Aya existe pra transformar presença digital em fonte previsível de oportunidades.
- **Como:** estratégia integrada conectando tráfego pago, posicionamento, identidade visual, copy e conteúdo, com otimização contínua orientada por dados.
- **O quê:** gestão estratégica de tráfego pago + estruturação de presença digital (planejamento, anúncios, posicionamento, identidade, copy, conteúdo, análise de dados).

## Arquétipo de marca: Herói-Criadora

- **Herói (principal):** determinação, competência, coragem, foco em resultado, disciplina, superação.
- **Criadora (secundário):** visão estratégica, criatividade com propósito, construção de soluções completas, originalidade.

## Tom de voz

Direto, confiante, prático, criativo com intenção, desafiador, transparente.

Evitar jargão vazio: "resultado garantido", "fórmula secreta", "exploda seu faturamento".

## Identidade visual

**Paleta:**
| Cor | Hex | Uso |
|---|---|---|
| Azul-petróleo | `#123B46` | Principal |
| Terracota | `#E7664C` | Destaque |
| Grafite | `#202629` | Secundária |
| Areia | `#E3D3B4` | Neutra |
| Branco quente | `#FFFDFC` | Neutra / fundo |

**Tipografia:**
- Títulos: League Gothic
- Subtítulos: Cormorant Garamond
- Corpo de texto: DM Sans

**Logo:** emblema de folhagem estilizada com acento terracota na base + wordmark "AYA" + tagline "TRÁFEGO PAGO". Arquivos de logo serão adicionados na pasta `/public`.

## Público-alvo (2 segmentos)

- **Negócios locais:** salões, clínicas, restaurantes, academias, lojas físicas.
- **Prestadores de serviço:** advogados, personal trainers, consultores, terapeutas, arquitetos.

## Serviços e preços

**Pacote Presença Digital + Tráfego Pago**
- Setup inicial: R$1.200 (diagnóstico, persona, identidade visual, estratégia, configuração de público, calendário editorial, landing page, 6 criativos)
- Mensalidade: R$600/mês a partir do 2º mês (gestão de tráfego, 6 criativos novos, copy, relatório)
- Verba de anúncio paga à parte, diretamente pelo cliente

**Add-on Social Media**
- R$500/mês (12 posts/rede social, arte carrossel/estático, roteiro de reels)
- +R$150 a cada 4 posts extras

## Estrutura do site (multi-página)

**Páginas:**
- **Início (`/`)** — página principal de vendas: Hero, Faixa de Posicionamento, Problema do Cliente, Apresentação da Solução, Serviços (resumo), Como Funciona, Diferenciais, Resultados (preview/destaque), Para Quem É, Sobre (preview), CTA Diagnóstico, FAQ, Chamada Final.
- **Soluções (`/solucoes`)** — detalhamento de cada serviço: Gestão de Tráfego Pago, Identidade Visual, Copy, Direcionamento de Conteúdo, Estruturação da Presença Digital, Análise e Otimização.
- **Resultados (`/resultados`)** — cases completos (contexto, problema, estratégia, execução, resultado mensurável, período).
- **Sobre (`/sobre`)** — visão, metodologia, forma de trabalhar da Aya.
- **Diagnóstico (`/diagnostico`)** — página de conversão: formulário (nome, empresa, segmento, cidade, principal desafio, faixa de investimento, WhatsApp) + acesso direto ao WhatsApp.
- **Política de Privacidade (`/politica-de-privacidade`)** — página legal exigida pela LGPD por causa da coleta de dados pessoais no formulário de contato.

**Cabeçalho fixo** (todas as páginas): Início | Soluções | Resultados | Sobre | Contato, com botão destacado "SOLICITAR DIAGNÓSTICO".

**Rodapé fixo:** logo, descrição curta, menu, WhatsApp, e-mail, redes sociais, cidade atendida, link para Política de Privacidade, direitos autorais.

*(Estrutura de rotas e componentes já implementada como esqueleto — ver "Estrutura de pastas" abaixo. Conteúdo real de cada seção ainda pendente.)*

## Estrutura de pastas (App Router)

```
src/
  app/
    layout.js              — Header e Footer fixos em todas as páginas
    page.js                — Início
    solucoes/page.js
    resultados/page.js
    sobre/page.js
    diagnostico/page.js
    politica-de-privacidade/page.js
  components/
    layout/                — Header.js, Footer.js, WhatsAppButton.js
    sections/
      home/                — um arquivo por seção da página Início
      solucoes/            — ServicoDetalhado.js
      resultados/          — CaseCard.js
      diagnostico/         — FormularioDiagnostico.js
    ui/                     — AnimatedSection.js (framer-motion), Button.js, Card.js
  data/                     — servicos.js, projetos.js, faq.js
```

## Padrão de animação (Framer Motion)

Todas as animações disparadas por scroll usam `viewport={{ once: false }}` — a animação **repete toda vez** que o elemento entra na tela (rolando pra baixo ou voltando pra cima), nunca só na primeira vez. Isso vale para qualquer novo `whileInView`/`useInView` que for criado. Exceção: o Hero (acima da dobra) anima no carregamento da página via `initial`/`animate`, não por scroll — não faz sentido usar `whileInView` ali.

**Título e subtítulo de seção** têm entrada padronizada, para manter consistência visual em todas as seções do site:
- Título: vem de cima (`opacity: 0→1`, `y: -40→0`).
- Subtítulo: vem da direita (`opacity: 0→1`, `x: 60→0`), com delay de ~0.15-0.2s em relação ao título.

Use os componentes prontos em `components/ui/AnimatedSection.js`:

```jsx
import AnimatedSection, { AnimatedTitle, AnimatedSubtitle } from "@/components/ui/AnimatedSection";

<AnimatedSection className="...">
  <AnimatedTitle className="text-3xl font-bold text-[#123B46]">
    Título da seção
  </AnimatedTitle>
  <AnimatedSubtitle className="mt-4 text-[#202629]/70">
    Texto de apoio.
  </AnimatedSubtitle>
</AnimatedSection>
```

- `AnimatedTitle`/`AnimatedSubtitle` aceitam `as="h1"` (padrão é `h2`/`p`) para páginas internas que usam `<h1>`.
- `delay` é ajustável via prop se precisar reordenar a sequência (padrão do subtítulo: `0.18`).
- No Hero, título e subtítulo seguem os mesmos valores (`y: -40` / `x: 60`) mas usam `initial`/`animate` direto (sem `whileInView`), já que a seção é visível assim que a página carrega — não precisa esperar o scroll.

Todas as seções da Home e todas as páginas internas (Soluções, Resultados, Sobre, Diagnóstico, Política de Privacidade) já seguem esse padrão. Ao criar uma seção nova, usar `AnimatedTitle`/`AnimatedSubtitle` em vez de `<h2>`/`<p>` soltos.

## Stack do projeto

Next.js (App Router), JavaScript (sem TypeScript), Tailwind CSS, ESLint, diretório `src/`, alias de import `@/*`. Mesma stack usada nos projetos irmãos `curandeiras-site` e Osé Alquimias Naturais.
