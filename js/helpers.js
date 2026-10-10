// ============================================================
//  Drawing helpers shared by all scenes (return SVG strings)
// ============================================================
window.SCENES = [];

const H = {
  /**
   * Standing person. Feet centred at (x, y). Height ≈ 312 * s.
   * o: { s, dir (1 right / -1 left), shirt, pants, skin, hair ('short'|'long'|'none'),
   *      hairColor, hat ('helmet'|'hairnet'|'cap'|null), hatColor, goggles, mask ('weld'|null),
   *      coat (colour or null), apron (colour), armL [dx,dy], armR [dx,dy] (hand position
   *      relative to the body origin), hands (glove colour) }
   */
  person(x, y, o = {}) {
    const s = o.s || 1, d = o.dir || 1;
    const shirt = o.shirt || '#2b6cb0', pants = o.pants || '#2b4a6f', skin = o.skin || '#e0ac85';
    const hairC = o.hairColor || '#3b2a20', hand = o.hands || skin;
    const aL = o.armL || [-44, -130], aR = o.armR || [44, -130];
    let g = `<g transform="translate(${x} ${y}) scale(${s})">`;
    // long hair behind
    if (o.hair === 'long') g += `<rect x="-30" y="-292" width="60" height="96" rx="24" fill="${hairC}"/>`;
    // legs + shoes
    g += `<rect x="-26" y="-104" width="22" height="100" rx="9" fill="${pants}"/>
          <rect x="4" y="-104" width="22" height="100" rx="9" fill="${pants}"/>
          <rect x="${-30 + (d < 0 ? -6 : 0)}" y="-10" width="32" height="12" rx="5" fill="#1d2433"/>
          <rect x="${2 + (d > 0 ? 6 : 0)}" y="-10" width="32" height="12" rx="5" fill="#1d2433"/>`;
    // arms (behind torso start)
    g += `<path d="M-26 -226 L${aL[0]} ${aL[1]}" stroke="${o.coat || shirt}" stroke-width="20" stroke-linecap="round"/>
          <path d="M26 -226 L${aR[0]} ${aR[1]}" stroke="${o.coat || shirt}" stroke-width="20" stroke-linecap="round"/>
          <circle cx="${aL[0]}" cy="${aL[1]}" r="11" fill="${hand}"/>
          <circle cx="${aR[0]}" cy="${aR[1]}" r="11" fill="${hand}"/>`;
    // torso
    if (o.coat) {
      g += `<rect x="-40" y="-248" width="80" height="196" rx="20" fill="${o.coat}" stroke="#c9d1da" stroke-width="3"/>
            <path d="M-12 -248 L0 -214 L12 -248" fill="none" stroke="#c9d1da" stroke-width="3"/>
            <line x1="0" y1="-214" x2="0" y2="-56" stroke="#c9d1da" stroke-width="3"/>`;
    } else {
      g += `<rect x="-38" y="-248" width="76" height="152" rx="22" fill="${shirt}"/>`;
    }
    if (o.apron) g += `<rect x="-30" y="-200" width="60" height="150" rx="10" fill="${o.apron}"/>`;
    if (o.vest) g += `<rect x="-38" y="-200" width="76" height="12" fill="${o.vest}"/><rect x="-38" y="-160" width="76" height="12" fill="${o.vest}"/>`;
    // head
    g += `<circle cx="0" cy="-282" r="32" fill="${skin}"/>`;
    if (o.hair === 'short' || o.hair === 'long' || o.hair === undefined) {
      if (!o.hat || o.hat === 'cap')
        g += `<path d="M-32 -284 q2 -36 32 -36 q30 0 32 36 q-12 -18 -32 -18 q-20 0 -32 18z" fill="${hairC}"/>`;
    }
    // face (eye + mouth looking towards dir)
    if (o.mask !== 'weld') {
      g += `<circle cx="${12 * d}" cy="-284" r="4" fill="#1d2433"/>
            <path d="M${4 * d} -264 q${8 * d} 5 ${16 * d} 0" fill="none" stroke="#1d2433" stroke-width="3" stroke-linecap="round"/>`;
    }
    if (o.goggles) g += `<rect x="-30" y="-294" width="60" height="18" rx="8" fill="#9ad3f0" stroke="#1d2433" stroke-width="3"/>`;
    if (o.mask === 'weld') g += `<rect x="-36" y="-316" width="72" height="72" rx="14" fill="#2d3340"/>
            <rect x="${-6 + 6 * d}" y="-296" width="30" height="14" rx="3" fill="#3fa34d"/>`;
    if (o.earmuffs) g += `<rect x="-40" y="-296" width="12" height="26" rx="5" fill="#d7263d"/><rect x="28" y="-296" width="12" height="26" rx="5" fill="#d7263d"/>
            <path d="M-34 -296 q34 -50 68 0" fill="none" stroke="#d7263d" stroke-width="5"/>`;
    if (o.hat === 'helmet') g += `<path d="M-34 -290 q0 -44 34 -44 q34 0 34 44 z" fill="${o.hatColor || '#ffc20e'}"/>
            <rect x="-40" y="-294" width="80" height="9" rx="4" fill="${o.hatColor || '#ffc20e'}"/>`;
    if (o.hat === 'hairnet') g += `<path d="M-36 -280 q0 -50 36 -50 q36 0 36 50 q-36 -14 -72 0z" fill="#ffffff" stroke="#c9d1da" stroke-width="3" stroke-dasharray="4 4"/>`;
    if (o.hat === 'cap') g += `<path d="M-32 -292 q0 -34 32 -34 q32 0 32 34z" fill="${o.hatColor || '#d7263d'}"/>
            <rect x="${d > 0 ? 10 : -50}" y="-296" width="40" height="8" rx="4" fill="${o.hatColor || '#d7263d'}"/>`;
    if (o.mouthMask) g += `<rect x="-22" y="-272" width="44" height="22" rx="8" fill="#a8d8f0"/>`;
    g += `</g>`;
    return g;
  },

  fireExt(x, y) { // bottom at y
    return `<g transform="translate(${x} ${y})">
      <rect x="-30" y="-176" width="70" height="36" rx="4" fill="#d7263d"/>
      <path d="M-10 -146 v-20 l8 -6 l8 6 v20" fill="none" stroke="#fff" stroke-width="4"/>
      <rect x="-26" y="-132" width="50" height="10" rx="3" fill="#5b6577"/>
      <rect x="-22" y="-112" width="42" height="112" rx="16" fill="#d7263d"/>
      <rect x="-12" y="-122" width="22" height="16" fill="#1d2433"/>
      <path d="M10 -114 q30 10 20 60" fill="none" stroke="#1d2433" stroke-width="6"/>
      <rect x="-16" y="-78" width="30" height="26" rx="3" fill="#fff"/></g>`;
  },

  firstAid(x, y) { // centre
    return `<g transform="translate(${x} ${y})">
      <rect x="-42" y="-35" width="84" height="70" rx="8" fill="#fff" stroke="#9aa6b2" stroke-width="3"/>
      <rect x="-8" y="-23" width="16" height="46" fill="#1e9e5a"/>
      <rect x="-23" y="-8" width="46" height="16" fill="#1e9e5a"/></g>`;
  },

  exitSign(x, y) { // centre
    return `<g transform="translate(${x} ${y})">
      <rect x="-75" y="-20" width="150" height="40" rx="4" fill="#1e9e5a"/>
      <circle cx="-37" cy="-8" r="6" fill="#fff"/>
      <path d="M-39 -2 l-8 16 m8 -16 l10 8 m-10 -8 l6 18 l-6 0 m6 -18" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
      <rect x="-15" y="-7" width="72" height="12" rx="3" fill="#fff"/></g>`;
  },

  warn(x, y, s = 1) { // warning triangle, centre
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <polygon points="0,-24 26,20 -26,20" fill="#ffc20e" stroke="#1d2433" stroke-width="4" stroke-linejoin="round"/>
      <rect x="-3" y="-8" width="6" height="16" fill="#1d2433"/><circle cx="0" cy="13" r="3.5" fill="#1d2433"/></g>`;
  },

  room(wall = '#e6ecf1', floor = '#c3cad2', line = '#b2bac3', walkway = true) {
    return `<rect width="1600" height="620" fill="${wall}"/>
      <rect width="1600" height="38" fill="#cfd8e0"/>
      <rect y="612" width="1600" height="10" fill="#9aa6b2"/>
      <rect y="620" width="1600" height="280" fill="${floor}"/>
      <g stroke="${line}" stroke-width="3">
        <line x1="0" y1="700" x2="1600" y2="700"/><line x1="0" y1="800" x2="1600" y2="800"/>
        <line x1="200" y1="620" x2="120" y2="900"/><line x1="500" y1="620" x2="460" y2="900"/>
        <line x1="800" y1="620" x2="800" y2="900"/><line x1="1100" y1="620" x2="1140" y2="900"/>
        <line x1="1400" y1="620" x2="1480" y2="900"/></g>
      ${walkway ? `<g fill="#ffc20e" opacity="0.85"><rect y="742" width="1600" height="8"/><rect y="852" width="1600" height="8"/></g>` : ''}`;
  },

  lamp(x) {
    return `<line x1="${x}" y1="38" x2="${x}" y2="62" stroke="#5b6577" stroke-width="5"/>
      <path d="M${x - 45} 62 h90 l-14 26 h-62 z" fill="#5b6577"/>
      <ellipse cx="${x}" cy="92" rx="28" ry="7" fill="#fff6c9"/>`;
  },

  puddle(x, y, rx = 120, color = '#7fb7e6') {
    return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * 0.25}" fill="${color}" opacity="0.8"/>
      <ellipse cx="${x - rx * 0.25}" cy="${y - 6}" rx="${rx * 0.4}" ry="${rx * 0.08}" fill="#fff" opacity="0.45"/>`;
  },

  smoke(x, y, s = 1, color = '#8d99a6') {
    return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}" opacity="0.6">
      <circle cx="0" cy="0" r="30"/><circle cx="34" cy="-22" r="34"/><circle cx="-10" cy="-50" r="30"/>
      <circle cx="40" cy="-70" r="26"/><circle cx="10" cy="-100" r="22"/></g>`;
  }
};
