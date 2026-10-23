// Ilustrações SVG autorais (desenhadas à mão em código), uma por projeto.
// Usam só a paleta do projeto. Animações leves em CSS (ver App.css: .pulse, .flicker, .steam, .orbit).

const C = {
  cream: '#FFF6EC', peach: '#F9C187', coral: '#FCA05B', vivid: '#FF9044',
  deep: '#F3873C', terra: '#E26C5C', clay: '#B8503F', dark: '#2B1D17', soil: '#3D2A21',
};

function Sparkle({ x, y, s = 1, d = 0 }) {
  return (
    <path
      className="pulse"
      style={{ animationDelay: `${d}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z"
      fill={C.peach}
    />
  );
}

function CodeCamArt() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração: celular escaneando um quadro e gerando flashcards">
      <g transform="rotate(-10 120 260)">
        <rect x="40" y="150" width="130" height="170" rx="14" fill={C.terra} stroke={C.cream} strokeWidth="3" />
        <text x="105" y="250" textAnchor="middle" fontSize="64" fontWeight="700" fill={C.cream} fontFamily="Space Grotesk">?</text>
      </g>
      <g transform="rotate(12 300 250)">
        <rect x="235" y="140" width="130" height="170" rx="14" fill={C.peach} stroke={C.cream} strokeWidth="3" />
        <text x="300" y="240" textAnchor="middle" fontSize="64" fontWeight="700" fill={C.dark} fontFamily="Space Grotesk">A</text>
      </g>
      <rect x="125" y="40" width="150" height="310" rx="26" fill={C.soil} stroke={C.cream} strokeWidth="4" />
      <rect x="138" y="62" width="124" height="266" rx="14" fill={C.dark} />
      <circle cx="200" cy="170" r="46" fill="none" stroke={C.vivid} strokeWidth="3" strokeDasharray="6 8" className="orbit" />
      <circle cx="200" cy="170" r="30" fill={C.deep} />
      <circle cx="200" cy="170" r="16" fill={C.dark} />
      <circle cx="192" cy="162" r="5" fill={C.cream} opacity=".8" />
      <rect x="156" y="250" width="88" height="10" rx="5" fill={C.coral} />
      <rect x="156" y="270" width="60" height="10" rx="5" fill={C.peach} opacity=".6" />
      <Sparkle x={90} y={80} s={1.2} />
      <Sparkle x={330} y={90} s={0.9} d={0.6} />
      <Sparkle x={310} y={360} s={1} d={1.1} />
    </svg>
  );
}

function FirewatchArt() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração: satélite orbitando montanhas com uma chama">
      <circle cx="200" cy="190" r="150" fill={C.terra} opacity=".18" />
      <ellipse cx="200" cy="190" rx="180" ry="62" transform="rotate(-22 200 190)" fill="none" stroke={C.peach} strokeWidth="2.5" strokeDasharray="4 10" className="orbit" />
      <g className="sat">
        <rect x="-14" y="-8" width="28" height="16" rx="3" fill={C.cream} />
        <rect x="-40" y="-5" width="22" height="10" fill={C.vivid} />
        <rect x="18" y="-5" width="22" height="10" fill={C.vivid} />
      </g>
      <polygon points="0,380 110,220 190,330 270,200 400,380" fill={C.soil} />
      <polygon points="40,380 130,270 210,380" fill={C.clay} />
      <polygon points="220,380 300,260 400,380" fill={C.wine || '#7A3329'} />
      <g className="flicker" style={{ transformOrigin: '200px 320px' }}>
        <path d="M200 120 C246 176 262 224 226 282 C242 244 204 226 204 192 C190 226 148 244 176 286 C138 256 146 172 200 120 Z" fill={C.deep} />
        <path d="M200 190 C224 220 228 250 206 282 C186 262 176 240 200 190 Z" fill={C.peach} />
      </g>
      <Sparkle x={70} y={90} s={0.9} />
      <Sparkle x={340} y={60} s={1.1} d={0.8} />
    </svg>
  );
}

function CafeArt() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração: xícara de café com vapor e grãos">
      <circle cx="200" cy="215" r="150" fill={C.peach} opacity=".12" />
      <g fill="none" stroke={C.cream} strokeWidth="5" strokeLinecap="round">
        <path className="steam" d="M160 150 C140 120 180 100 160 70" />
        <path className="steam s2" d="M200 140 C180 110 220 90 200 55" />
        <path className="steam s3" d="M240 150 C220 120 260 100 240 70" />
      </g>
      <path d="M262 200 C318 196 322 270 258 276" fill="none" stroke={C.peach} strokeWidth="16" strokeLinecap="round" />
      <path d="M100 180 H290 V250 C290 306 250 336 195 336 C140 336 100 306 100 250 Z" fill={C.peach} />
      <path d="M100 180 H290 V206 C250 222 140 222 100 206 Z" fill={C.clay} />
      <ellipse cx="195" cy="345" rx="130" ry="20" fill={C.terra} />
      <ellipse cx="195" cy="340" rx="110" ry="14" fill={C.vivid} />
      <g fill={C.soil}>
        <ellipse cx="65" cy="330" rx="16" ry="10" transform="rotate(-30 65 330)" />
        <ellipse cx="340" cy="320" rx="16" ry="10" transform="rotate(25 340 320)" />
        <ellipse cx="335" cy="285" rx="14" ry="9" transform="rotate(-10 335 285)" />
      </g>
      <g stroke={C.peach} strokeWidth="2" fill="none">
        <path d="M50 330 L80 324" /><path d="M326 326 L354 314" />
      </g>
    </svg>
  );
}

function AlarmArt() {
  const keys = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) keys.push([r, c]);
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração: sensor de movimento, teclado e LED de um alarme">
      {[60, 100, 140].map((r, i) => (
        <circle key={r} cx="200" cy="140" r={r} fill="none" stroke={C.vivid} strokeWidth="2" className="wave" style={{ animationDelay: `${i * 0.6}s`, transformOrigin: '200px 140px' }} />
      ))}
      <circle cx="200" cy="140" r="52" fill={C.cream} />
      <circle cx="200" cy="140" r="40" fill={C.peach} />
      <g stroke={C.terra} strokeWidth="3" fill="none">
        <path d="M168 140 C176 112 224 112 232 140" /><path d="M176 156 C184 132 216 132 224 156" />
      </g>
      <circle cx="200" cy="140" r="9" fill={C.dark} />
      <rect x="170" y="190" width="60" height="14" rx="4" fill={C.soil} />
      <g transform="translate(120 225)">
        <rect x="-14" y="-12" width="188" height="150" rx="16" fill={C.soil} stroke={C.cream} strokeWidth="3" />
        {keys.map(([r, c]) => (
          <rect key={`${r}${c}`} x={c * 42 - 2} y={r * 32} width="34" height="24" rx="6" fill={(r + c) % 5 === 0 ? C.vivid : C.coral} opacity={(r + c) % 3 === 0 ? 1 : 0.7} />
        ))}
      </g>
      <circle className="pulse" cx="330" cy="260" r="18" fill={C.terra} />
      <circle cx="330" cy="260" r="8" fill={C.cream} />
      <path d="M330 280 V340 H260" fill="none" stroke={C.peach} strokeWidth="3" strokeDasharray="5 6" />
      <circle cx="255" cy="340" r="6" fill={C.peach} />
    </svg>
  );
}

function UmlArt() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração: diagrama de casos de uso com ator e elipses">
      <rect x="130" y="40" width="250" height="320" rx="12" fill="none" stroke={C.peach} strokeWidth="2.5" strokeDasharray="8 8" className="orbit" />
      <text x="255" y="70" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fill={C.peach}>Sistema</text>
      <g stroke={C.cream} strokeWidth="4" fill="none" strokeLinecap="round">
        <circle cx="60" cy="170" r="20" fill={C.terra} />
        <path d="M60 190 V250 M20 215 H100 M60 250 L28 310 M60 250 L92 310" />
      </g>
      {[[255, 115, 'Entrar'], [255, 200, 'Cadastrar'], [255, 285, 'Consultar']].map(([x, y, t], i) => (
        <g key={t}>
          <path d={`M100 215 L${x - 70} ${y}`} stroke={C.coral} strokeWidth="2" />
          <ellipse cx={x} cy={y} rx="72" ry="30" fill={i === 1 ? C.vivid : C.soil} stroke={C.cream} strokeWidth="3" />
          <text x={x} y={y + 5} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="600" fill={i === 1 ? C.dark : C.cream}>{t}</text>
        </g>
      ))}
      <path d="M255 145 V170 M255 230 V255" stroke={C.peach} strokeWidth="2" strokeDasharray="4 5" />
      <Sparkle x={350} y={380} s={0.8} />
    </svg>
  );
}

const map = { codecam: CodeCamArt, firewatch: FirewatchArt, cafe: CafeArt, alarm: AlarmArt, uml: UmlArt };

export default function Art({ name }) {
  const Comp = map[name];
  return Comp ? <Comp /> : null;
}
