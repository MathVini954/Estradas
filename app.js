"use strict";
/* =================== DADOS =================== */
/* x,y em metros a partir do defeito 06 (ponto mais a oeste). x = leste, y = sul.
   cad.y0 = início da ocorrência na seção transversal, medido da borda da ciclofaixa (0,00)
   até o meio-fio do lado da sarjeta (8,50). cad.l = largura, cad.c = comprimento (m). */
const DEFEITOS = [
  { n:"06", cod:"P", nome:"Panela junto ao meio-fio", classe:"FC-3 nas trincas", sev:"alta", dist:0,
    lat:"−8,030725", lon:"−34,917898", x:0, y:0,
    data:"06/10/2026 · 05:32", endereco:"Estrada do Encanamento, 863 — Casa Amarela, Recife/PE",
    posicao:"Sarjeta e faixa junto ao meio-fio, acesso ao nº 863",
    obs:"Água empoçada dentro da própria cavidade na manhã da vistoria — declividade longitudinal insuficiente até a boca de lobo.",
    desc:"Cavidade aberta junto ao meio-fio, com água empoçada, cercada por trincas interligadas com erosão nas bordas.",
    causa:"As panelas representam o estágio final das trincas não tratadas. A água infiltra pelas fissuras, satura a base e reduz sua capacidade de suporte; sob o tráfego, os blocos de revestimento se soltam e a cavidade se forma. Aqui, junto ao meio-fio, a água acumulada na sarjeta acelera esse processo.",
    causas:["Consolidação diferencial das camadas","Reaterro de valas mal compactado","Saturação do subleito"],
    agentes:["agua","trafego"], prio:1,
    acao:"Reconstrução localizada das camadas: corte de caixa, tratamento do subleito e recomposição em CBUQ, com dreno raso longitudinal junto ao meio-fio.",
    foto:"assets/img/defeito-06.jpg", hot:[67,71], cad:{y0:7.60, l:0.90, c:2.40, h:"panela"} },

  { n:"09", cod:"RS", nome:"Remendo superficial com trincas em bloco", classe:"TB — FC-2 no entorno", sev:"media", dist:79,
    lat:"−8,030937", lon:"−34,917218", x:75, y:23,
    data:"06/10/2026 · 05:31", endereco:"Estrada do Encanamento, 785–847 — Casa Forte, Recife/PE",
    posicao:"Faixa ao lado da ciclofaixa, altura do nº 786",
    obs:"Uma das duas únicas ocorrências fora da faixa do meio-fio.",
    desc:"Remendo superficial íntegro, circundado por trincas em bloco e desgaste do revestimento original.",
    causa:"A DNIT 005/2003 classifica os remendos como defeitos, pois indicam pontos onde o pavimento já falhou. O remendo está íntegro, mas o revestimento ao redor apresenta trincas em bloco: sinal de que o reparo foi pontual e não tratou a área degradada.",
    causas:["Reparo pontual sem tratar a área trincada vizinha","Envelhecimento e oxidação do revestimento","Junta do remendo sem selagem"],
    agentes:["envelhecimento","reparo"], prio:3,
    acao:"Fresagem e recomposição do revestimento, sem escavação, desde que a drenagem seja corrigida em conjunto.",
    foto:"assets/img/defeito-09.jpg", hot:[48,41], cad:{y0:1.70, l:2.20, c:3.00, h:"remendo"} },

  { n:"11", cod:"D", nome:"Desgaste junto à parada de ônibus", classe:"Sem classe FC", sev:"media", dist:342,
    lat:"−8,031652", lon:"−34,914937", x:326, y:103,
    data:"06/10/2026 · 05:43", endereco:"Rua da Harmonia — Casa Amarela, Recife/PE",
    posicao:"Sarjeta junto ao abrigo de ônibus (Rua da Harmonia)",
    obs:"Empoçamento permanente no ponto de parada: a declividade da sarjeta não conduz a água até a boca de lobo.",
    desc:"Desagregação superficial junto à sarjeta, com empoçamento permanente no ponto de parada dos ônibus.",
    causa:"Combinação de água permanente sobre o revestimento, que remove o ligante e solta os agregados, com os esforços tangenciais de frenagem e arrancada dos ônibus. A causa de fundo é drenagem.",
    causas:["Declividade insuficiente até a boca de lobo","Carga concentrada de ônibus na parada","Ação contínua da água sobre o revestimento"],
    agentes:["agua","trafego","envelhecimento"], prio:3,
    acao:"Fresagem e recomposição, acompanhadas de regularização da declividade da sarjeta e dreno raso longitudinal junto ao meio-fio.",
    foto:"assets/img/defeito-11.jpg", hot:[63,63], cad:{y0:7.30, l:1.20, c:6.00, h:"desgaste"} },

  { n:"07", cod:"P", nome:"Panela (buraco) junto ao meio-fio", classe:"Sem classe FC", sev:"alta", dist:384,
    lat:"−8,031795", lon:"−34,914589", x:365, y:118,
    data:"06/10/2026 · 05:39", endereco:"Estrada do Encanamento, 480 — Casa Amarela, Recife/PE",
    posicao:"Faixa junto ao meio-fio, em frente ao nº 480",
    obs:"Cercado por remendos anteriores: o problema é recorrente no local e os reparos superficiais não atacaram a causa.",
    desc:"Cavidade aberta no revestimento, cercada por trincas interligadas e por remendos anteriores.",
    causa:"Estágio final das trincas não tratadas: a água infiltra, satura a base e reduz sua capacidade de suporte até que os blocos de revestimento se soltem. A sucessão de remendos no entorno mostra que o ciclo já se repetiu sem que a origem fosse tratada.",
    causas:["Evolução de trincas tipo jacaré não seladas","Infiltração de água pelas trincas até a base","Perda de adesividade do ligante asfáltico"],
    agentes:["agua","trafego","reparo"], prio:1,
    acao:"Reconstrução localizada das camadas, com escavação até material de suporte adequado e selagem das juntas entre o pavimento novo, o existente e o meio-fio.",
    foto:"assets/img/defeito-07.jpg", hot:[40,73], cad:{y0:6.80, l:1.10, c:1.80, h:"panela"} },

  { n:"04", cod:"J", nome:"Trincas interligadas tipo “couro de jacaré”", classe:"FC-2 · sem erosão acentuada", sev:"nd", dist:635,
    lat:"−8,032431", lon:"−34,912395", x:607, y:189,
    data:"03/10/2026 · 09:44", endereco:"Estrada do Encanamento, 233 — Parnamirim, Recife/PE",
    posicao:"Faixa de rolamento junto à ciclofaixa (nº 233)",
    obs:"Registro com orientação 33° NE. Classe FC-2: abertura acima de 1,0 mm, sem erosão nas bordas.",
    desc:"Malha de trincas interligadas sem direções preferenciais, formando blocos irregulares, ainda sem erosão acentuada nas bordas.",
    causa:"Manifestação típica da fadiga do revestimento: a repetição das cargas, sobretudo dos ônibus e caminhões, provoca deflexões que, somadas ao envelhecimento e à oxidação do ligante, levam à ruptura progressiva da camada asfáltica.",
    causas:["Fadiga do revestimento por repetição de cargas","Base ou subleito com baixa capacidade de suporte","Saturação das camadas inferiores"],
    agentes:["trafego","envelhecimento"], prio:3,
    acao:"Fresagem e recomposição do revestimento antes que a malha evolua para FC-3 e, em seguida, para panela.",
    foto:"assets/img/defeito-04.jpg", hot:[48,67], cad:{y0:1.60, l:2.80, c:4.50, h:"trinca"} },

  { n:"18", cod:"P", nome:"Panela com trincas interligadas", classe:"FC-2 nas trincas", sev:"alta", dist:1492,
    lat:"−8,036221", lon:"−34,905614", x:1354, y:608,
    data:"04/10/2026 · 05:33", endereco:"Estr. do Encanamento, 443 — Parnamirim, Recife/PE",
    posicao:"Faixa de rolamento, altura do nº 443",
    obs:"Fora do trecho do ofício, na continuação da via — mesmas características de tráfego e de pavimento.",
    desc:"Trincas interligadas no revestimento, com formação de panela e perda de material na superfície.",
    causa:"A malha de fadiga evoluiu: com a infiltração pelas fissuras, a base perdeu suporte e o revestimento se desprendeu ao centro da malha, abrindo a cavidade. O envelhecimento do ligante acelera o desplacamento.",
    causas:["Fadiga do revestimento asfáltico","Infiltração de água nas camadas do pavimento","Ação repetida das cargas do tráfego"],
    agentes:["agua","trafego","envelhecimento"], prio:1,
    acao:"Reconstrução localizada das camadas, com demarcação retangular e folga de ≈0,30 m além da área trincada.",
    foto:"assets/img/defeito-18.jpg", hot:[62,58], cad:{y0:5.00, l:2.00, c:2.60, h:"panela"} },

  { n:"19", cod:"JE", nome:"Trincas interligadas com erosão", classe:"FC-3", sev:"media", dist:1550,
    lat:"−8,036745", lon:"−34,905593", x:1356, y:666,
    data:"04/10/2026 · 05:33", endereco:"Estr. do Encanamento, 455 — Casa Forte, Recife/PE",
    posicao:"Faixa de rolamento junto ao bordo, altura do nº 455",
    obs:"Classe FC-3: abertura acima de 1,0 mm com erosão nas bordas — a água já penetra livremente.",
    desc:"Trincas longitudinais e transversais interligadas, com erosão nas bordas e perda localizada de material.",
    causa:"Fadiga do revestimento em estágio avançado. Junto ao bordo, a erosão nas bordas das trincas indica que a água penetra livremente e o material começa a se desprender — o passo imediatamente anterior à formação de panela.",
    causas:["Fadiga do revestimento asfáltico","Ação repetida das cargas do tráfego","Infiltração de água nas camadas do pavimento"],
    agentes:["agua","trafego","envelhecimento"], prio:2,
    acao:"Tratamento das trincas com erosão e selagem das juntas junto ao meio-fio, com correção simultânea da drenagem do bordo.",
    foto:"assets/img/defeito-19.jpg", hot:[22,61], cad:{y0:6.40, l:1.60, c:5.50, h:"trinca-erosao"} },

  { n:"15", cod:"ALP", nome:"Afundamento local plástico em remendo", classe:"Sem classe FC", sev:"media", dist:2549,
    lat:"−8,043918", lon:"−34,900087", x:1963, y:1459,
    data:"04/10/2026 · 05:38", endereco:"Estr. do Encanamento, 278 — Casa Forte, Recife/PE",
    posicao:"Faixa de rolamento junto ao meio-fio, altura do nº 278",
    obs:"Sarjeta obstruída por grande quantidade de papéis acumulados junto ao meio-fio na vistoria de 04/10.",
    desc:"Remendo com afundamento plástico e irregularidade na superfície.",
    causa:"Deformação associada a mistura asfáltica instável, compactação insuficiente na execução do reparo e esforços de frenagem dos ônibus e caminhões junto ao meio-fio.",
    causas:["Execução inadequada do remendo","Compactação insuficiente do material","Recalque das camadas do pavimento"],
    agentes:["trafego","reparo"], prio:2,
    acao:"Remoção do remendo deformado e recomposição com controle de compactação, além da desobstrução e regularização da sarjeta.",
    foto:"assets/img/defeito-15.jpg", hot:[50,55], cad:{y0:5.60, l:2.40, c:3.20, h:"afundamento"} },

  { n:"16", cod:"O", nome:"Ondulação / corrugação em remendo", classe:"Sem classe FC", sev:"media", dist:2560, aprox:true,
    lat:"sem georreferência", lon:"mesma posição da foto 15", x:2000, y:1500,
    data:"04/10/2026 · 05:37", endereco:"Estrada do Encanamento, 245 — Casa Forte, Recife/PE",
    posicao:"Faixa de rolamento junto ao meio-fio, altura do nº 245",
    obs:"A foto 16 não registrou coordenadas; adotou-se a posição da foto 15, tirada no mesmo local. Na prancha, a ocorrência foi afastada 11 m a leste apenas para não se sobrepor ao defeito 15.",
    desc:"Remendo com afundamento e ondulações transversais na superfície, associadas aos esforços de frenagem dos veículos.",
    causa:"Mistura asfáltica instável e compactação insuficiente no reparo, somadas aos esforços tangenciais de frenagem na aproximação da travessia de pedestres.",
    causas:["Deformação plástica do revestimento devido aos esforços de frenagem, especialmente de veículos pesados","Execução inadequada do remendo","Compactação insuficiente do material utilizado"],
    agentes:["trafego","reparo"], prio:2,
    acao:"Remoção do remendo ondulado e recomposição com mistura estável e controle de compactação em camadas.",
    foto:"assets/img/defeito-16.jpg", hot:[33,55], cad:{y0:5.40, l:2.40, c:4.00, h:"ondulacao"} }
];

const AGENTES = {
  agua:{ rot:"Água / drenagem deficiente", curto:"Água",
    txt:"A drenagem é exclusivamente superficial e, em pontos localizados, insuficiente. A água fica retida na sarjeta e infiltra pelas juntas abertas entre o revestimento e o meio-fio, saturando a base.",
    ico:'<path d="M8.5 1.5S14 7.6 14 10.8a5.5 5.5 0 0 1-11 0C3 7.6 8.5 1.5 8.5 1.5z"/>' },
  trafego:{ rot:"Tráfego pesado (ônibus e caminhões)", curto:"Tráfego",
    txt:"Ônibus do transporte coletivo e caminhões trafegam pela faixa junto ao meio-fio, que recebe a maior parte das cargas pesadas e repetitivas, além dos esforços de frenagem e arrancada.",
    ico:'<path d="M1 4.5h8.5v6H1zM10 6.5h3l2 2.2v1.8h-5z"/><circle cx="4" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/>' },
  envelhecimento:{ rot:"Envelhecimento do revestimento", curto:"Envelhecimento",
    txt:"A oxidação do ligante asfáltico torna a camada mais rígida e quebradiça, reduzindo sua capacidade de acompanhar as deflexões provocadas pelo tráfego.",
    ico:'<path d="M8 1.2 9.6 6h4.9l-4 3 1.5 4.8L8 10.9 4 13.8 5.5 9l-4-3h4.9z"/>' },
  reparo:{ rot:"Reparo anterior inadequado", curto:"Reparo",
    txt:"Remendos executados de forma pontual, sem tratar a área degradada no entorno, sem selagem de juntas e com compactação insuficiente — o que recria o defeito no mesmo local.",
    ico:'<path d="M11 1.5a4 4 0 0 0-3.4 6l-6 6 1.9 1.9 6-6A4 4 0 1 0 11 1.5z"/>' }
};
const COR_AG = { agua:"#3E7E96", trafego:"#C88E1B", envelhecimento:"#9A9DA2", reparo:"#B4442A" };
const SEV_ROT = { alta:"Severidade alta", media:"Severidade média", nd:"Sem severidade atribuída" };
const COR_SEV = { alta:"#B4442A", media:"#C88E1B", nd:"#6B6E73" };
const PRIO_ROT = { 1:"Prioridade 1 — reconstrução localizada", 2:"Prioridade 2 — tratamento das deformações",
                   3:"Prioridade 3 — fresagem e recomposição" };
const HACHURAS = {
  panela:        { nome:"Panela (P)", desc:"Área a reconstruir — corte de caixa" },
  trinca:        { nome:"Trincas interligadas (J)", desc:"Malha de fadiga sem erosão — FC-2" },
  "trinca-erosao":{ nome:"Trincas com erosão (JE)", desc:"Malha de fadiga com erosão nas bordas — FC-3" },
  remendo:       { nome:"Remendo superficial (RS)", desc:"Reparo executado, revestimento vizinho trincado" },
  afundamento:   { nome:"Afundamento plástico (ALP)", desc:"Deformação permanente em remendo" },
  ondulacao:     { nome:"Ondulação / corrugação (O)", desc:"Ondas transversais por frenagem" },
  desgaste:      { nome:"Desgaste (D)", desc:"Desagregação superficial junto à sarjeta" }
};
const EIXO = [[-240,-95],[0,0],[326,103],[607,189],[1000,395],[1355,637],[1660,1040],[1980,1480],[2200,1690]];

/* seção transversal adotada (metros, da ciclofaixa ao meio-fio da sarjeta) */
const SECAO = [
  { de:0.00, a:1.50, nome:"Ciclofaixa",            cor:"#3A2320", borda:"#8A3A2C" },
  { de:1.50, a:4.75, nome:"Faixa de rolamento",    cor:"#1E2023", borda:"#4A4E54" },
  { de:4.75, a:8.00, nome:"Faixa junto ao meio-fio", cor:"#232528", borda:"#4A4E54" },
  { de:8.00, a:8.50, nome:"Sarjeta",               cor:"#1A2226", borda:"#3E7E96" }
];
const LARG_TOTAL = 8.50;

/* =================== UTIL =================== */
const $ = s => document.querySelector(s);
const NS = "http://www.w3.org/2000/svg";
function E(tag, attrs, pai){
  const n = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) n.setAttribute(k, attrs[k]);
  if (pai) pai.appendChild(n);
  return n;
}
function T(pai, x, y, txt, o = {}){
  const n = E("text", {x, y, fill:o.cor || "var(--cad-linha)", "font-size":o.fs || 9,
    "text-anchor":o.anc || "start", "font-family":o.ff || "IBM Plex Mono, monospace",
    "letter-spacing":o.ls, "font-weight":o.fw, transform:o.tr, opacity:o.op}, pai);
  n.textContent = txt;
  return n;
}
function curva(pts, t){
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++){
    const p0 = pts[i-1] || pts[i], p1 = pts[i], p2 = pts[i+1], p3 = pts[i+2] || pts[i+1];
    d += ` C ${p1[0]+(p2[0]-p0[0])*t} ${p1[1]+(p2[1]-p0[1])*t}, ${p2[0]-(p3[0]-p1[0])*t} ${p2[1]-(p3[1]-p1[1])*t}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}
function rnd(seed){ let s = seed || 1; return () => (s = (s*16807) % 2147483647) / 2147483647; }
const fmt = v => v.toLocaleString("pt-BR");
const cota = v => v.toFixed(2).replace(".", ",");

/* =================== MAPA INTERATIVO =================== */
const mapa = $("#mapaSvg"), eixoD = curva(EIXO, .22);
let gMapa, viaPath;

(function montarMapa(){
  gMapa = E("g", {}, mapa);
  E("rect", {x:-400, y:-500, width:3400, height:3000, fill:"var(--mapa-chao)"}, gMapa);

  const med = E("path", {d:eixoD, fill:"none"}, gMapa);
  const tot = med.getTotalLength(), r = rnd(20261014);
  const gq = E("g", {}, gMapa);
  for (let s = -40; s < tot + 40; s += 78){
    const p = med.getPointAtLength(Math.max(0, Math.min(tot, s)));
    const p2 = med.getPointAtLength(Math.max(0, Math.min(tot, s + 14)));
    const ang = Math.atan2(p2.y - p.y, p2.x - p.x);
    const nx = -Math.sin(ang), ny = Math.cos(ang);
    for (const lado of [1,-1]) for (let f = 0; f < 3; f++){
      const off = 52 + f*96 + r()*30, w = 46 + r()*34, h = 52 + r()*40;
      const cx = p.x + nx*off*lado + (r()-.5)*26, cy = p.y + ny*off*lado + (r()-.5)*26;
      E("rect", {x:cx-w/2, y:cy-h/2, width:w, height:h, rx:2,
        transform:`rotate(${ang*180/Math.PI} ${cx} ${cy})`, fill:"var(--mapa-quadra)"}, gq);
    }
  }
  med.remove();

  E("path", {d:"M 560 -230 L 1050 -120 L 1120 180 L 760 120 Z", fill:"var(--mapa-verde)"}, gMapa);
  E("path", {d:"M 1700 560 L 2100 680 L 2060 900 L 1680 790 Z", fill:"var(--mapa-verde)"}, gMapa);
  E("path", {d:"M 820 -300 C 880 60, 760 320, 900 700", fill:"none", stroke:"var(--mapa-agua)",
    "stroke-width":16, "stroke-linecap":"round"}, gMapa);

  const med2 = E("path", {d:eixoD, fill:"none"}, gMapa), tot2 = med2.getTotalLength();
  const gs = E("g", {}, gMapa);
  for (let s = 60; s < tot2; s += 196){
    const p = med2.getPointAtLength(s), p2 = med2.getPointAtLength(Math.min(tot2, s+12));
    const ang = Math.atan2(p2.y - p.y, p2.x - p.x), nx = -Math.sin(ang), ny = Math.cos(ang);
    const L = 240 + rnd(s|1)()*160;
    for (const lado of [1,-1])
      E("line", {x1:p.x, y1:p.y, x2:p.x+nx*L*lado, y2:p.y+ny*L*lado,
        stroke:"var(--mapa-via-sec)", "stroke-width":13, "stroke-linecap":"round"}, gs);
  }
  med2.remove();

  E("path", {class:"via-cobertura-glow", d:eixoD}, gMapa);
  E("path", {d:eixoD, fill:"none", stroke:"#141618", "stroke-width":38, "stroke-linecap":"round"}, gMapa);
  viaPath = E("path", {d:eixoD, fill:"none", stroke:"var(--mapa-via)", "stroke-width":30, "stroke-linecap":"round"}, gMapa);
  E("path", {d:eixoD, fill:"none", stroke:"#5E646D", "stroke-width":1.6, "stroke-dasharray":"16 14",
    "stroke-linecap":"round"}, gMapa);
  E("path", {class:"via-cobertura", d:eixoD}, gMapa);

  const defs = E("defs", {}, gMapa);
  E("path", {id:"rotuloVia", d:eixoD, fill:"none"}, defs);
  const t = E("text", {fill:"#8B919C", "font-size":27, "letter-spacing":5.5, "font-weight":700, dy:-26}, gMapa);
  const tp = E("textPath", {href:"#rotuloVia", startOffset:"26%"}, t);
  tp.textContent = "ESTRADA DO ENCANAMENTO";

  for (const [txt, x, y, fs] of [["Casa Forte",170,-270,30],["Parnamirim",1080,-40,30],
    ["Casa Amarela",540,470,30],["Sítio da Trindade",840,-170,22],["Hospital de Olhos",-150,160,21],
    ["Clube Alemão",700,300,21],["R. da Harmonia",300,-140,19]]){
    T(gMapa, x, y, txt, {cor: fs > 25 ? "#6E7480" : "#898F9A", fs, anc:"middle",
      ff:"Arial, sans-serif", fw: fs > 25 ? 700 : 500, ls: fs > 25 ? 3 : .5});
  }

  DEFEITOS.forEach((d, i) => {
    const cor = COR_SEV[d.sev];
    const g = E("g", {class:"pino", transform:`translate(${d.x} ${d.y})`, role:"button", tabindex:"0"}, gMapa);
    E("title", {}, g).textContent = `Defeito ${d.n} — ${d.nome} (${fmt(d.dist)} m)`;
    E("circle", {class:"halo", cx:0, cy:0, r:34, fill:"none", stroke:"var(--ouro)", "stroke-width":4}, g);
    E("circle", {class:"anel", cx:0, cy:-44, r:40, fill:"none", stroke:"var(--ouro)", "stroke-width":5}, g);
    const c = E("g", {class:"corpo"}, g);
    E("ellipse", {cx:0, cy:2, rx:11, ry:4, fill:"rgba(0,0,0,.45)"}, c);
    E("path", {d:"M0 0 C -16 -22 -22 -30 -22 -40 a22 22 0 1 1 44 0 c0 10 -6 18 -22 40 z",
      fill:cor, stroke:"rgba(0,0,0,.45)", "stroke-width":2}, c);
    T(c, 0, -33, d.cod, {anc:"middle", cor:"#fff", fs:20, fw:700});
    T(c, 0, 28, d.n, {anc:"middle", cor:"#C9CED6", fs:21, fw:600});
    g.addEventListener("click", () => irParaRua(i));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); irParaRua(i); }});
  });
})();

let vista = {x:0, y:0, k:1};
/* os pinos são compensados pelo zoom: nunca ficam menores que ~36 px na tela (alvo de toque) */
const PINOS = [...mapa.querySelectorAll(".pino")];
function aplicarVista(){
  gMapa.setAttribute("transform", `translate(${vista.x} ${vista.y}) scale(${vista.k})`);
  const s = Math.max(1, .58 / vista.k);
  PINOS.forEach((p, i) => p.setAttribute("transform", `translate(${DEFEITOS[i].x} ${DEFEITOS[i].y}) scale(${s})`));
}
function paraSvg(cx, cy){
  const p = mapa.createSVGPoint(); p.x = cx; p.y = cy;
  return p.matrixTransform(mapa.getScreenCTM().inverse());
}
const K_MIN = .35, K_MAX = 5;
/* zoom ancorado num ponto da tela (cursor, centro da pinça ou centro do mapa) */
function zoomEm(cx, cy, k2){
  k2 = Math.max(K_MIN, Math.min(K_MAX, k2));
  const p = paraSvg(cx, cy);
  vista.x = p.x - (p.x - vista.x) * (k2 / vista.k);
  vista.y = p.y - (p.y - vista.y) * (k2 / vista.k);
  vista.k = k2; aplicarVista();
}
function centroMapa(){ const r = mapa.getBoundingClientRect(); return [r.left + r.width/2, r.top + r.height/2]; }
mapa.addEventListener("wheel", e => {
  e.preventDefault();
  zoomEm(e.clientX, e.clientY, vista.k * (e.deltaY < 0 ? 1.12 : 1/1.12));
}, {passive:false});
$("#zMais").onclick  = () => { const [x, y] = centroMapa(); zoomEm(x, y, vista.k * 1.35); };
$("#zMenos").onclick = () => { const [x, y] = centroMapa(); zoomEm(x, y, vista.k / 1.35); };

/* arrastar com um dedo/mouse; pinça com dois dedos */
const dedosMapa = new Map();
let panDe = null, pinca = null;
const distDedos = m => { const [a, b] = [...m.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
const meioDedos = m => { const [a, b] = [...m.values()]; return {x:(a.x + b.x)/2, y:(a.y + b.y)/2}; };
function iniciarPan(x, y){ panDe = {x, y, vx:vista.x, vy:vista.y}; }
mapa.addEventListener("pointerdown", e => {
  if (e.target.closest(".pino")) return;
  dedosMapa.set(e.pointerId, {x:e.clientX, y:e.clientY});
  mapa.setPointerCapture(e.pointerId);
  mapa.classList.add("arrastando");
  if (dedosMapa.size === 1) iniciarPan(e.clientX, e.clientY);
  else if (dedosMapa.size === 2){ panDe = null; pinca = {d:distDedos(dedosMapa), m:meioDedos(dedosMapa)}; }
});
mapa.addEventListener("pointermove", e => {
  if (!dedosMapa.has(e.pointerId)) return;
  dedosMapa.set(e.pointerId, {x:e.clientX, y:e.clientY});
  if (pinca && dedosMapa.size >= 2){
    const d = distDedos(dedosMapa), m = meioDedos(dedosMapa);
    const ctm = mapa.getScreenCTM(), esc = ctm ? ctm.a : 1;
    vista.x += (m.x - pinca.m.x) / esc; vista.y += (m.y - pinca.m.y) / esc;
    zoomEm(m.x, m.y, vista.k * d / (pinca.d || d));
    pinca = {d, m};
    return;
  }
  if (!panDe) return;
  const ctm = mapa.getScreenCTM(), esc = ctm ? ctm.a : 1;
  vista.x = panDe.vx + (e.clientX - panDe.x) / esc;
  vista.y = panDe.vy + (e.clientY - panDe.y) / esc;
  aplicarVista();
});
const fimPan = e => {
  dedosMapa.delete(e.pointerId);
  if (dedosMapa.size < 2) pinca = null;
  if (dedosMapa.size === 1){ const [p] = dedosMapa.values(); iniciarPan(p.x, p.y); }
  if (dedosMapa.size === 0){ panDe = null; mapa.classList.remove("arrastando"); }
};
mapa.addEventListener("pointerup", fimPan);
mapa.addEventListener("pointercancel", fimPan);

/* --------- boneco (arrastar até a via) --------- */
const boneco = $("#boneco"), dica = $("#dica"), bonecoPai = boneco.parentNode;
let pegando = false, preVisto = null;

function aoMover(e){
  if (!pegando) return;
  e.preventDefault();
  mover(e.clientX, e.clientY);
  destacar(maisProximo(e.clientX, e.clientY));
}
function aoSoltar(e){
  if (!pegando) return;
  pegando = false;
  window.removeEventListener("pointermove", aoMover);
  window.removeEventListener("pointerup", aoSoltar);
  window.removeEventListener("pointercancel", aoSoltar);
  mapa.classList.remove("rastreando");
  boneco.classList.remove("pegando");
  boneco.style.left = boneco.style.top = "";
  bonecoPai.appendChild(boneco);
  destacar(null);
  /* toque simples (sem arrastar): abre a primeira ocorrência — útil no celular */
  if (inicioBoneco && Math.hypot(e.clientX - inicioBoneco.x, e.clientY - inicioBoneco.y) < 10){
    irParaRua(0); return;
  }
  const alvo = maisProximo(e.clientX, e.clientY);
  if (alvo !== null) irParaRua(alvo);
  else { boneco.classList.add("pousando"); setTimeout(() => boneco.classList.remove("pousando"), 500); }
}
let inicioBoneco = null;
boneco.addEventListener("pointerdown", e => {
  e.preventDefault();
  inicioBoneco = {x:e.clientX, y:e.clientY};
  pegando = true; dica.hidden = true;
  boneco.classList.add("pegando");
  document.body.appendChild(boneco);
  mapa.classList.add("rastreando");
  mover(e.clientX, e.clientY);
  destacar(maisProximo(e.clientX, e.clientY));
  window.addEventListener("pointermove", aoMover, {passive:false});
  window.addEventListener("pointerup", aoSoltar);
  window.addEventListener("pointercancel", aoSoltar);
});
boneco.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " "){ e.preventDefault(); dica.hidden = true; irParaRua(0); }
});
function mover(cx, cy){ boneco.style.left = (cx - 28) + "px"; boneco.style.top = (cy - 34) + "px"; }

/* marca o pino que receberá o boneco, para o destino ficar evidente durante o arrasto */
function destacar(i){
  if (preVisto === i) return;
  preVisto = i;
  document.querySelectorAll("#mapaSvg .pino").forEach((p, j) => p.classList.toggle("destino", j === i));
  const r = $("#rotuloDestino");
  if (i === null){ r.hidden = true; return; }
  const d = DEFEITOS[i];
  r.hidden = false;
  r.innerHTML = `<b>${d.cod} · defeito ${d.n}</b>${d.nome}`;
}
/* Solto em qualquer ponto do mapa, o boneco desce na ocorrência mais próxima.
   Só recusa se a soltura ocorrer sobre os painéis fixos (dock, cartão, menu). */
function maisProximo(cx, cy){
  const r = mapa.getBoundingClientRect();
  if (cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) return null;
  for (const sel of [".dock", ".painel-id", ".nav-topo", ".legenda"]){
    const el = document.querySelector(sel);
    if (!el) continue;
    const b = el.getBoundingClientRect();
    if (cx >= b.left && cx <= b.right && cy >= b.top && cy <= b.bottom) return null;
  }
  const p = paraSvg(cx, cy);
  const px = (p.x - vista.x) / vista.k, py = (p.y - vista.y) / vista.k;
  let melhor = 0, dMin = Infinity;
  DEFEITOS.forEach((d, i) => {
    const dd = Math.hypot(d.x - px, d.y - py);
    if (dd < dMin){ dMin = dd; melhor = i; }
  });
  return melhor;
}

/* =================== MODO RUA =================== */
const cenaMapa = $("#cenaMapa"), cenaRua = $("#cenaRua"), painel = $("#painel");
const pano = $("#pano"), camada = $("#panoCamada"), foto = $("#panoFoto"), alvo = $("#alvo"), dossie = $("#dossie");
let atual = 0, escala = 1.34, tx = 0, ty = 0;

function irParaRua(i){
  painel.hidden = true;
  cenaMapa.hidden = false;
  cenaMapa.classList.add("saindo");
  setTimeout(() => {
    cenaMapa.hidden = true; cenaMapa.classList.remove("saindo");
    cenaRua.hidden = false; cenaRua.classList.add("entrando");
    carregar(i, true);
    setTimeout(() => cenaRua.classList.remove("entrando"), 950);
  }, 480);
}
function voltarMapa(){
  dossie.classList.remove("aberto");
  cenaRua.hidden = true; painel.hidden = true; cenaMapa.hidden = false;
  requestAnimationFrame(enquadrar);
}
function carregar(i, chegando){
  const d = DEFEITOS[i];
  atual = i; tx = 0; ty = 0; escala = 1.34;
  foto.style.backgroundImage = `url("${d.foto}")`;
  camada.style.transition = chegando ? "transform 1.1s cubic-bezier(.16,.84,.34,1)" : "transform .5s ease";
  camada.style.transform = `scale(${chegando ? 1.62 : escala})`;
  requestAnimationFrame(() => requestAnimationFrame(aplicarPano));

  alvo.style.left = d.hot[0] + "%";
  alvo.style.top  = d.hot[1] + "%";
  const chip = $("#alvoChip");
  chip.classList.toggle("media", d.sev !== "alta");
  chip.querySelector(".cd").textContent = d.cod;
  chip.querySelector(".nm").textContent = "Defeito " + d.n;

  $("#endRua").textContent = d.endereco;
  $("#endCoord").textContent = d.aprox ? "posição adotada da foto 15 · ±14 m" : `${d.lat} / ${d.lon} · ±14 m`;
  $("#contN").textContent = `${i+1} de ${DEFEITOS.length} · nº ${d.n}`;
  $("#contKm").textContent = (d.aprox ? "≈ " : "") + fmt(d.dist) + " m do defeito 06";
  $("#btnAnt").disabled = i === 0;
  $("#btnProx").disabled = i === DEFEITOS.length - 1;
  preencherDossie(d);
  desenharMini(i);
}
const aplicarPano = () => { camada.style.transform = `scale(${escala}) translate(${tx}%, ${ty}%)`; };
const lim = () => (escala - 1) / 2 / escala * 100;

let panoDe = null, pincaPano = null;
const dedosPano = new Map();
const limitarPano = () => { const L = lim(); tx = Math.max(-L, Math.min(L, tx)); ty = Math.max(-L, Math.min(L, ty)); };
pano.addEventListener("pointerdown", e => {
  if (e.target.closest(".alvo")) return;
  dedosPano.set(e.pointerId, {x:e.clientX, y:e.clientY});
  camada.style.transition = "none";
  pano.classList.add("arrastando"); pano.setPointerCapture(e.pointerId);
  if (dedosPano.size === 1) panoDe = {x:e.clientX, y:e.clientY, tx, ty};
  else if (dedosPano.size === 2){ panoDe = null; pincaPano = {d:distDedos(dedosPano), esc:escala}; }
});
pano.addEventListener("pointermove", e => {
  if (!dedosPano.has(e.pointerId)) return;
  dedosPano.set(e.pointerId, {x:e.clientX, y:e.clientY});
  if (pincaPano && dedosPano.size >= 2){
    escala = Math.max(1.05, Math.min(2.6, pincaPano.esc * distDedos(dedosPano) / (pincaPano.d || 1)));
    limitarPano(); aplicarPano();
    return;
  }
  if (!panoDe) return;
  const L = lim();
  tx = Math.max(-L, Math.min(L, panoDe.tx + (e.clientX - panoDe.x) / pano.clientWidth * 100 / escala));
  ty = Math.max(-L, Math.min(L, panoDe.ty + (e.clientY - panoDe.y) / pano.clientHeight * 100 / escala));
  aplicarPano();
});
const fimPano = e => {
  dedosPano.delete(e.pointerId);
  if (dedosPano.size < 2) pincaPano = null;
  if (dedosPano.size === 1){ const [p] = dedosPano.values(); panoDe = {x:p.x, y:p.y, tx, ty}; return; }
  if (dedosPano.size === 0){
    panoDe = null; pano.classList.remove("arrastando"); camada.style.transition = "transform .35s ease";
  }
};
pano.addEventListener("pointerup", fimPano);
pano.addEventListener("pointercancel", fimPano);
pano.addEventListener("wheel", e => {
  e.preventDefault();
  escala = Math.max(1.05, Math.min(2.6, escala * (e.deltaY < 0 ? 1.1 : 1/1.1)));
  limitarPano();
  camada.style.transition = "transform .25s ease"; aplicarPano();
}, {passive:false});

function navegar(delta){
  const i = atual + delta;
  if (i < 0 || i >= DEFEITOS.length) return;
  pano.classList.add("pano-saida");
  setTimeout(() => { pano.classList.remove("pano-saida"); carregar(i, true); }, 400);
}
$("#btnAnt").onclick = () => navegar(-1);
$("#btnProx").onclick = () => navegar(1);
$("#btnVoltarMapa").onclick = voltarMapa;
$("#btnMiniMapa").onclick = voltarMapa;
alvo.addEventListener("click", () => dossie.classList.add("aberto"));
$("#btnDossie").onclick = () => dossie.classList.toggle("aberto");
$("#fecharDossie").onclick = () => dossie.classList.remove("aberto");

/* no celular, a ficha é uma folha inferior: arrastar o topo para baixo fecha */
(function arrastarFicha(){
  const topo = dossie.querySelector(".dossie-topo");
  let y0 = null;
  const folha = () => matchMedia("(max-width:860px)").matches;
  topo.addEventListener("pointerdown", e => {
    if (!folha() || e.target.closest("button")) return;
    y0 = e.clientY; dossie.style.transition = "none"; topo.setPointerCapture(e.pointerId);
  });
  topo.addEventListener("pointermove", e => {
    if (y0 === null) return;
    dossie.style.transform = `translateY(${Math.max(0, e.clientY - y0)}px)`;
  });
  const soltar = e => {
    if (y0 === null) return;
    const dy = e.clientY - y0; y0 = null;
    dossie.style.transition = ""; dossie.style.transform = "";
    if (dy > 80) dossie.classList.remove("aberto");
  };
  topo.addEventListener("pointerup", soltar);
  topo.addEventListener("pointercancel", soltar);
})();

function preencherDossie(d){
  $("#dCod").textContent = d.cod;
  $("#dNum").textContent = "OCORRÊNCIA " + d.n;
  $("#dNome").textContent = d.nome;
  const f = $("#dFitas");
  f.innerHTML = "";
  [[SEV_ROT[d.sev], d.sev === "alta" ? "alta" : d.sev === "media" ? "media" : "classe"],
   [d.classe, "classe"], ["DNIT 005/2003 · " + d.cod, "classe"]].forEach(([txt, cls]) => {
    const s = document.createElement("span");
    s.className = "fita " + cls; s.textContent = txt; f.appendChild(s);
  });
  $("#dLat").textContent = d.lat;
  $("#dLon").textContent = d.lon;
  $("#dDist").textContent = (d.aprox ? "≈ " : "") + fmt(d.dist) + " m";
  $("#dData").textContent = d.data;
  $("#dEnd").textContent = d.endereco;
  $("#dPos").textContent = d.posicao;
  $("#dObs").textContent = d.obs;
  $("#dDesc").textContent = d.desc;
  $("#dCausa").textContent = d.causa;
  $("#dPrio").textContent = PRIO_ROT[d.prio];
  $("#dAcao").textContent = d.acao;
  const ul = $("#dCausas");
  ul.innerHTML = "";
  d.causas.forEach(c => { const li = document.createElement("li"); li.textContent = c; ul.appendChild(li); });
  const box = $("#dAgentes");
  box.innerHTML = "";
  for (const k in AGENTES){
    const on = d.agentes.includes(k);
    const div = document.createElement("div");
    div.className = "agente" + (on ? " on" : "");
    div.innerHTML = `<svg class="ico" viewBox="0 0 16 16" fill="${on ? COR_AG[k] : "var(--cinza)"}" aria-hidden="true">${AGENTES[k].ico}</svg><span class="txt">${AGENTES[k].rot}</span>`;
    box.appendChild(div);
  }
}

const mini = $("#miniSvg");
function desenharMini(idx){
  mini.innerHTML = "";
  const xs = DEFEITOS.map(d => d.x), ys = DEFEITOS.map(d => d.y);
  const miX = Math.min(...xs), maX = Math.max(...xs), miY = Math.min(...ys), maY = Math.max(...ys);
  const px = v => 10 + (v - miX) / (maX - miX) * 164;
  const py = v => 14 + (v - miY) / (maY - miY) * 46;
  const pts = EIXO.filter(p => p[0] >= miX - 260 && p[0] <= maX + 260).map(p => [px(p[0]), py(p[1])]);
  E("path", {d:curva(pts, .22), fill:"none", stroke:"var(--mapa-via)", "stroke-width":4.5, "stroke-linecap":"round"}, mini);
  DEFEITOS.forEach((d, i) => E("circle", {cx:px(d.x), cy:py(d.y), r: i === idx ? 5 : 3,
    fill: i === idx ? "var(--ouro)" : COR_SEV[d.sev], stroke: i === idx ? "#17181A" : "none", "stroke-width":1.5}, mini));
  const d = DEFEITOS[idx];
  T(mini, px(d.x), py(d.y) - 9, d.n, {anc:"middle", cor:"var(--ouro)", fs:9, fw:700});
}
mini.addEventListener("click", voltarMapa);

document.addEventListener("keydown", e => {
  if (!$("#lupa").hidden){ if (e.key === "Escape") $("#lupa").hidden = true; return; }
  if (!painel.hidden){ if (e.key === "Escape") voltarMapa(); return; }
  if (cenaRua.hidden) return;
  if (e.key === "ArrowRight") navegar(1);
  else if (e.key === "ArrowLeft") navegar(-1);
  else if (e.key === "Escape"){
    if (dossie.classList.contains("aberto")) dossie.classList.remove("aberto"); else voltarMapa();
  }
});

/* =================== HACHURAS CAD =================== */
function defsCad(svg){
  const defs = E("defs", {}, svg);
  const pat = (id, w, h, conteudo, fundo) => {
    const p = E("pattern", {id, width:w, height:h, patternUnits:"userSpaceOnUse"}, defs);
    if (fundo) E("rect", {width:w, height:h, fill:fundo}, p);
    p.insertAdjacentHTML("beforeend", conteudo);
    return p;
  };
  /* ANSI31 — 45°, para panela (área a reconstruir) */
  pat("hPanela", 7, 7, `<path d="M-1 1 l2 -2 M0 7 l7 -7 M6 8 l2 -2" stroke="#D9674A" stroke-width="1.1"/>`, "rgba(180,68,42,.14)");
  /* malha cruzada — trincas */
  pat("hTrinca", 9, 9, `<path d="M-1 1 l2 -2 M0 9 l9 -9 M8 10 l2 -2 M-1 8 l2 2 M0 0 l9 9 M8 -1 l2 2" stroke="#C88E1B" stroke-width=".8"/>`, "rgba(200,142,27,.1)");
  /* malha cruzada densa — trincas com erosão */
  pat("hTrincaErosao", 6, 6, `<path d="M-1 1 l2 -2 M0 6 l6 -6 M5 7 l2 -2 M-1 5 l2 2 M0 0 l6 6 M5 -1 l2 2" stroke="#D9674A" stroke-width=".9"/>`, "rgba(180,68,42,.12)");
  /* AR-SAND — remendo */
  pat("hRemendo", 8, 8, `<circle cx="2" cy="2" r=".9" fill="#9A9DA2"/><circle cx="6" cy="5" r=".9" fill="#9A9DA2"/><circle cx="4" cy="7" r=".7" fill="#9A9DA2"/>`, "rgba(154,157,162,.12)");
  /* linhas horizontais — afundamento */
  pat("hAfundamento", 6, 6, `<path d="M0 1.5 H6 M0 4.5 H6" stroke="#C88E1B" stroke-width="1"/>`, "rgba(200,142,27,.09)");
  /* ondas — ondulação */
  pat("hOndulacao", 12, 7, `<path d="M0 3.5 q3 -3 6 0 t6 0" fill="none" stroke="#C88E1B" stroke-width="1"/>`, "rgba(200,142,27,.09)");
  /* pontilhado esparso — desgaste */
  pat("hDesgaste", 7, 7, `<circle cx="1.6" cy="1.6" r=".7" fill="#3E7E96"/><circle cx="5" cy="4.6" r=".7" fill="#3E7E96"/>`, "rgba(62,126,150,.12)");
  /* calçada */
  pat("hCalcada", 10, 10, `<path d="M0 0 H10 M0 5 H10 M0 0 V10 M5 0 V10" stroke="#2E3135" stroke-width=".7"/>`, "#17181A");
  return defs;
}
const HPAT = { panela:"hPanela", trinca:"hTrinca", "trinca-erosao":"hTrincaErosao", remendo:"hRemendo",
  afundamento:"hAfundamento", ondulacao:"hOndulacao", desgaste:"hDesgaste" };
const HCOR = { panela:"#D9674A", trinca:"#C88E1B", "trinca-erosao":"#D9674A", remendo:"#9A9DA2",
  afundamento:"#C88E1B", ondulacao:"#C88E1B", desgaste:"#3E7E96" };

/* linha de cota no estilo CAD */
function cotaH(g, x1, x2, y, txt, cor){
  cor = cor || "var(--cad-ciano)";
  E("line", {x1, y1:y, x2, y2:y, stroke:cor, "stroke-width":.7}, g);
  [x1, x2].forEach(x => E("line", {x1:x-3, y1:y+3, x2:x+3, y2:y-3, stroke:cor, "stroke-width":.9}, g));
  T(g, (x1+x2)/2, y - 3.5, txt, {anc:"middle", cor, fs:7.5});
}
function cotaV(g, y1, y2, x, txt, cor){
  cor = cor || "var(--cad-ciano)";
  E("line", {x1:x, y1, x2:x, y2, stroke:cor, "stroke-width":.7}, g);
  [y1, y2].forEach(y => E("line", {x1:x-3, y1:y+3, x2:x+3, y2:y-3, stroke:cor, "stroke-width":.9}, g));
  T(g, x - 4, (y1+y2)/2, txt, {anc:"middle", cor, fs:7.5, tr:`rotate(-90 ${x-4} ${(y1+y2)/2})`});
}

/* =================== PRANCHA: PLANTA LINEAR =================== */
function desenharPlanta(svg, modo){
  svg.innerHTML = "";
  defsCad(svg);
  const PX = 0.92;              /* px por metro no sentido longitudinal */
  const PY = 24;                /* px por metro no sentido transversal */
  const ML = 108, MT = 118, COMP = 2620;
  const W = ML + COMP*PX + 150, H = MT + LARG_TOTAL*PY + 370;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("width", W);
  svg.setAttribute("height", H);
  const X = m => ML + m*PX, Y = m => MT + m*PY;
  const g = E("g", {}, svg);

  E("rect", {x:0, y:0, width:W, height:H, fill:"var(--cad-fundo)"}, g);

  /* calçadas */
  E("rect", {x:ML, y:Y(0) - 26, width:COMP*PX, height:26, fill:"url(#hCalcada)", stroke:"#3C3F44", "stroke-width":.6}, g);
  E("rect", {x:ML, y:Y(LARG_TOTAL), width:COMP*PX, height:26, fill:"url(#hCalcada)", stroke:"#3C3F44", "stroke-width":.6}, g);
  T(g, ML + 6, Y(0) - 30, "PASSEIO / CALÇADA", {cor:"#5C6065", fs:7, ls:1});
  T(g, ML + 6, Y(LARG_TOTAL) + 36, "PASSEIO / CALÇADA", {cor:"#5C6065", fs:7, ls:1});

  /* faixas da seção */
  SECAO.forEach(s => {
    E("rect", {x:ML, y:Y(s.de), width:COMP*PX, height:(s.a - s.de)*PY, fill:s.cor,
      stroke:s.borda, "stroke-width":.6}, g);
  });

  /* zonas temáticas no mapa de causas */
  if (modo === "causas"){
    E("rect", {x:ML, y:Y(4.75), width:COMP*PX, height:3.25*PY, fill:"rgba(200,142,27,.16)"}, g);
    E("rect", {x:ML, y:Y(8.00), width:COMP*PX, height:0.50*PY, fill:"rgba(62,126,150,.3)"}, g);
    T(g, ML + 10, Y(6.4), "ZONA DE TRÁFEGO PESADO  ·  faixa percorrida por ônibus e caminhões",
      {cor:"#E6AC35", fs:9, ls:1.4, fw:700});
    T(g, ML + 10, Y(8.42), "ZONA DE ACÚMULO DE ÁGUA  ·  sarjeta com escoamento deficiente",
      {cor:"#7FC0D8", fs:8, ls:1.2, fw:700});
  } else {
    T(g, ML + 10, Y(3.3), "FAIXA DE ROLAMENTO", {cor:"#5C6065", fs:8, ls:1.4});
    T(g, ML + 10, Y(6.5), "FAIXA JUNTO AO MEIO-FIO (ônibus e caminhões)", {cor:"#5C6065", fs:8, ls:1.4});
  }

  /* linha central tracejada e eixo */
  E("line", {x1:ML, y1:Y(4.75), x2:ML + COMP*PX, y2:Y(4.75), stroke:"#9A9DA2", "stroke-width":1,
    "stroke-dasharray":"14 10"}, g);
  E("line", {x1:ML, y1:Y(0), x2:ML + COMP*PX, y2:Y(0), stroke:"#8A3A2C", "stroke-width":1.4}, g);
  E("line", {x1:ML, y1:Y(8.5), x2:ML + COMP*PX, y2:Y(8.5), stroke:"#D8DADD", "stroke-width":1.6}, g);
  T(g, ML + COMP*PX - 6, Y(8.5) + 11, "MEIO-FIO", {cor:"#5C6065", fs:7, anc:"end", ls:1});

  /* cotas da seção transversal */
  const xc = ML - 14;
  SECAO.forEach(s => cotaV(g, Y(s.de), Y(s.a), xc, cota(s.a - s.de)));
  cotaV(g, Y(0), Y(LARG_TOTAL), ML - 56, cota(LARG_TOTAL) + " (plataforma)", "#7FA85C");
  T(g, ML - 86, MT - 14, "SEÇÃO TRANSVERSAL", {cor:"#5C6065", fs:7, ls:1});
  T(g, ML - 86, MT - 5, "(estimativa visual)", {cor:"#5C6065", fs:6.5});

  /* estaqueamento */
  const yEst = Y(LARG_TOTAL) + 54;
  E("line", {x1:ML, y1:yEst, x2:ML + COMP*PX, y2:yEst, stroke:"#D8DADD", "stroke-width":.9}, g);
  for (let m = 0; m <= COMP; m += 20){
    const grande = m % 100 === 0;
    E("line", {x1:X(m), y1:yEst, x2:X(m), y2:yEst + (grande ? 9 : 4.5), stroke:"#D8DADD",
      "stroke-width": grande ? .9 : .6}, g);
    if (grande) T(g, X(m), yEst + 20, (m/1000).toFixed(3).replace(".", "+"), {anc:"middle", cor:"#9A9DA2", fs:7.5});
  }
  T(g, ML, yEst + 36, "ESTAQUEAMENTO EM METROS — ORIGEM NO DEFEITO 06 (ponto mais a oeste do levantamento)",
    {cor:"#5C6065", fs:7.5, ls:.8});

  /* bocas de lobo e referências urbanas */
  if (modo !== "causas"){
    [[0,"Acesso nº 863"],[342,"Parada de ônibus · R. da Harmonia"],[635,"nº 233 — Clube Alemão"],
     [1492,"nº 443"],[2549,"Travessia de pedestres · nº 278"]].forEach(([m, txt]) => {
      E("line", {x1:X(m), y1:Y(LARG_TOTAL) + 26, x2:X(m), y2:yEst, stroke:"#3C3F44",
        "stroke-width":.6, "stroke-dasharray":"3 3"}, g);
      T(g, X(m) + 4, Y(LARG_TOTAL) + 44, txt, {cor:"#6B6E73", fs:7});
    });
  }
  [0, 342, 1492, 2549].forEach(m => {
    const bx = X(m), by = Y(8.25);
    E("rect", {x:bx - 7, y:by - 3.5, width:14, height:7, fill:"none", stroke:"#3E7E96", "stroke-width":1}, g);
    E("line", {x1:bx - 7, y1:by, x2:bx + 7, y2:by, stroke:"#3E7E96", "stroke-width":.7}, g);
  });

  /* ocorrências — cada uma é um grupo clicável que abre a explicação */
  DEFEITOS.forEach((d, i) => {
    const c = d.cad;
    const x1 = X(d.dist - c.c/2), largPx = Math.max(c.c*PX, 4);
    const y1 = Y(c.y0), altPx = c.l*PY;
    const acima = i % 2 === 0;
    const corD = modo === "causas" ? COR_AG[d.agentes[0]] : HCOR[c.h];

    const go = E("g", {class:"ocor", role:"button", tabindex:"0",
      "data-i":i, "data-modo":modo}, g);
    E("title", {}, go).textContent =
      `Defeito ${d.n} — ${d.nome}. Toque ou clique para ver a explicação.`;

    /* realce vertical em toda a plataforma, para a ocorrência saltar aos olhos */
    E("rect", {class:"faixa-ocor", x:x1 - 5, y:Y(0) - 26, width:largPx + 10,
      height:LARG_TOTAL*PY + 52, fill:corD, opacity:.14}, go);

    if (modo === "causas"){
      E("rect", {x:x1, y:y1, width:largPx, height:altPx, fill:corD, opacity:.55,
        stroke:corD, "stroke-width":2}, go);
      /* glifo dos quatro agentes */
      const cx = X(d.dist), cy = y1 + altPx/2;
      Object.keys(AGENTES).forEach((k, j) => {
        const on = d.agentes.includes(k);
        E("rect", {x:cx - 19 + j*10, y:cy - 30, width:8.5, height:8.5,
          fill: on ? COR_AG[k] : "none", stroke: on ? COR_AG[k] : "#4A4E54", "stroke-width":1}, go);
      });
    } else {
      E("rect", {x:x1, y:y1, width:largPx, height:altPx, fill:`url(#${HPAT[c.h]})`,
        stroke:corD, "stroke-width":2}, go);
      cotaH(g, x1, x1 + largPx, y1 - 5, cota(c.c));
      cotaV(g, y1, y1 + altPx, x1 - 7, cota(c.l));
    }

    /* bandeira de chamada */
    const yB = acima ? MT - 52 : Y(LARG_TOTAL) + 124;
    const xB = X(d.dist);
    E("line", {x1:xB, y1: acima ? y1 - 10 : y1 + altPx + 10, x2:xB, y2: acima ? yB + 17 : yB - 17,
      stroke:corD, "stroke-width":1.1}, go);
    E("circle", {class:"pulso-ocor", cx:xB, cy:yB, r:17, fill:"none", stroke:corD, "stroke-width":2.5}, go);
    E("circle", {class:"disco", cx:xB, cy:yB, r:17, fill:corD, stroke:"var(--cad-fundo)", "stroke-width":2}, go);
    T(go, xB, yB + 1, d.cod, {anc:"middle", cor: modo === "causas" ? "#0C0D0F" : "#141517", fs:11, fw:800,
      ff:"Archivo, Arial, sans-serif"});
    T(go, xB, yB + 11, d.n, {anc:"middle", cor: modo === "causas" ? "#0C0D0F" : "#141517", fs:7, fw:700});
    T(go, xB, acima ? yB - 24 : yB + 30, fmt(d.dist) + " m", {anc:"middle", cor:"#9A9DA2", fs:7});
    T(go, xB, acima ? yB - 33 : yB + 39, modo === "causas"
      ? d.agentes.map(k => AGENTES[k].curto).join(" + ") : HACHURAS[c.h].nome.split(" (")[0],
      {anc:"middle", cor:corD, fs:7.5, fw:700, ff:"Arial, sans-serif"});

    const abrir = () => explicar(i, modo, true);
    go.addEventListener("click", abrir);
    go.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); abrir(); }});
  });

  /* norte, escala gráfica e carimbo */
  const gx = ML, gy = H - 118;
  /* escala gráfica */
  E("line", {x1:gx, y1:gy, x2:gx + 200*PX, y2:gy, stroke:"#D8DADD", "stroke-width":1}, g);
  for (let m = 0; m <= 200; m += 50){
    E("line", {x1:X(m) - ML + gx, y1:gy - 4, x2:X(m) - ML + gx, y2:gy + 4, stroke:"#D8DADD", "stroke-width":1}, g);
    T(g, X(m) - ML + gx, gy + 14, String(m), {anc:"middle", cor:"#9A9DA2", fs:7});
  }
  for (let m = 0; m < 200; m += 50)
    E("rect", {x:gx + m*PX, y:gy - 4, width:50*PX, height:4,
      fill:(m/50) % 2 ? "#D8DADD" : "none", stroke:"#D8DADD", "stroke-width":.5}, g);
  T(g, gx, gy - 10, "ESCALA GRÁFICA LONGITUDINAL (m)", {cor:"#5C6065", fs:7, ls:.8});

  /* norte */
  const nx = gx + 300, ny = gy - 6;
  const gN = E("g", {transform:`translate(${nx} ${ny}) rotate(-127)`}, g);
  E("path", {d:"M0 -26 L7 8 L0 1 L-7 8 Z", fill:"#D8DADD"}, gN);
  T(g, nx, ny + 22, "N", {anc:"middle", cor:"#D8DADD", fs:9, fw:700});
  T(g, nx + 22, ny - 12, "Azimute médio do eixo ≈ 127°", {cor:"#5C6065", fs:6.8});
  T(g, nx + 22, ny - 3, "(norte aproximado)", {cor:"#5C6065", fs:6.8});

  /* carimbo */
  const cw = 360, ch = 96, cx0 = W - cw - 24, cy0 = H - ch - 20;
  E("rect", {x:cx0, y:cy0, width:cw, height:ch, fill:"#141517", stroke:"#D8DADD", "stroke-width":1}, g);
  E("line", {x1:cx0, y1:cy0 + 30, x2:cx0 + cw, y2:cy0 + 30, stroke:"#D8DADD", "stroke-width":.7}, g);
  E("line", {x1:cx0, y1:cy0 + 62, x2:cx0 + cw, y2:cy0 + 62, stroke:"#D8DADD", "stroke-width":.7}, g);
  E("line", {x1:cx0 + 190, y1:cy0 + 30, x2:cx0 + 190, y2:cy0 + ch, stroke:"#D8DADD", "stroke-width":.7}, g);
  T(g, cx0 + 10, cy0 + 20, "ROTA ENGENHARIA  ·  PROJETOS QUE LIGAM O AMANHÃ",
    {cor:"#C88E1B", fs:9, ls:1.1, fw:700});
  T(g, cx0 + 10, cy0 + 45, modo === "causas" ? "MAPA DE POSSÍVEIS CAUSAS" : "MAPA DE DANOS — PLANTA LINEAR",
    {cor:"#D8DADD", fs:10, ls:.8, fw:700});
  T(g, cx0 + 10, cy0 + 56, "Estrada do Encanamento · Recife/PE", {cor:"#9A9DA2", fs:7.5});
  const linhas = [
    ["CLIENTE", "PoliEng"], ["NORMA", "DNIT 005/2003 – TER"], ["DATA", "Outubro / 2026"]
  ];
  linhas.forEach(([k, v], i) => {
    T(g, cx0 + 10, cy0 + 76 + i*11, k, {cor:"#5C6065", fs:6.5, ls:.9});
    T(g, cx0 + 62, cy0 + 76 + i*11, v, {cor:"#D8DADD", fs:7});
  });
  const linhas2 = [
    ["PRANCHA", modo === "causas" ? "PR-02" : "PR-01"],
    ["ESCALAS", "H 1:2000 · V 1:200"],
    ["DESENHO", "Gustavo L. A. Silva"]
  ];
  linhas2.forEach(([k, v], i) => {
    T(g, cx0 + 200, cy0 + 76 + i*11, k, {cor:"#5C6065", fs:6.5, ls:.9});
    T(g, cx0 + 256, cy0 + 76 + i*11, v, {cor:"#D8DADD", fs:7});
  });

  /* nota */
  T(g, ML, H - 28, modo === "causas"
    ? "NOTA: a classificação dos agentes segue a Tabela 3 do relatório técnico. As zonas de fundo representam a faixa de tráfego pesado e a sarjeta, onde se concentram seis das nove ocorrências."
    : "NOTA: posições longitudinais por georreferenciamento (±14 m). Larguras da seção por estimativa visual. Dimensões dos defeitos estimadas em campo — confirmar com trena antes da execução.",
    {cor:"#5C6065", fs:7.2});
}

/* =================== DETALHES AMPLIADOS =================== */
function desenharDetalhe(d){
  const COMP = 8;               /* metros mostrados no sentido longitudinal */
  const PM = 30;                /* px por metro, igual nos dois sentidos */
  const ML = 44, MT = 26;
  const W = ML + COMP*PM + 24, H = MT + LARG_TOTAL*PM + 72;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", `Detalhe em planta do defeito ${d.n}`);
  defsCad(svg);
  const g = E("g", {}, svg);
  const X = m => ML + m*PM, Y = m => MT + m*PM;
  E("rect", {x:0, y:0, width:W, height:H, fill:"var(--cad-fundo)"}, g);

  SECAO.forEach(s => E("rect", {x:ML, y:Y(s.de), width:COMP*PM, height:(s.a - s.de)*PM,
    fill:s.cor, stroke:s.borda, "stroke-width":.6}, g));
  E("line", {x1:ML, y1:Y(4.75), x2:X(COMP), y2:Y(4.75), stroke:"#9A9DA2", "stroke-width":.9,
    "stroke-dasharray":"9 7"}, g);
  E("line", {x1:ML, y1:Y(8.5), x2:X(COMP), y2:Y(8.5), stroke:"#D8DADD", "stroke-width":1.4}, g);
  E("rect", {x:ML, y:Y(8.5), width:COMP*PM, height:9, fill:"url(#hCalcada)", stroke:"#3C3F44", "stroke-width":.5}, g);

  /* a ocorrência, centrada no trecho */
  const c = d.cad;
  const x1 = X(COMP/2 - c.c/2), w = c.c*PM;
  const y1 = Y(c.y0), h = c.l*PM;
  E("rect", {x:x1, y:y1, width:w, height:h, fill:`url(#${HPAT[c.h]})`, stroke:HCOR[c.h], "stroke-width":1.3}, g);

  /* cotas */
  cotaH(g, x1, x1 + w, y1 - 7, cota(c.c) + " m");
  cotaV(g, y1, y1 + h, x1 - 9, cota(c.l) + " m");
  cotaV(g, Y(0), Y(LARG_TOTAL), ML - 26, cota(LARG_TOTAL) + " m", "#7FA85C");
  /* afastamento do meio-fio */
  if (c.y0 + c.l < LARG_TOTAL)
    cotaV(g, Y(c.y0 + c.l), Y(LARG_TOTAL), x1 + w + 12, cota(LARG_TOTAL - c.y0 - c.l), "#9A9DA2");

  /* rótulos das faixas */
  T(g, ML + 4, Y(0.9), "CICLOFAIXA", {cor:"#8A5247", fs:6.5, ls:.8});
  T(g, ML + 4, Y(3.3), "FAIXA DE ROLAMENTO", {cor:"#5C6065", fs:6.5, ls:.8});
  T(g, ML + 4, Y(6.6), "FAIXA JUNTO AO MEIO-FIO", {cor:"#5C6065", fs:6.5, ls:.8});
  T(g, ML + 4, Y(8.38), "SARJETA", {cor:"#4E7A8C", fs:6.5, ls:.8});

  /* chamada */
  E("circle", {cx:x1 + w/2, cy:y1 + h/2, r:11, fill:"rgba(12,13,15,.85)", stroke:COR_SEV[d.sev], "stroke-width":1.4}, g);
  T(g, x1 + w/2, y1 + h/2 + 3.5, d.n, {anc:"middle", cor:COR_SEV[d.sev], fs:9.5, fw:700});

  /* escala gráfica */
  const gy = H - 38;
  E("line", {x1:ML, y1:gy, x2:ML + 5*PM, y2:gy, stroke:"#D8DADD", "stroke-width":.9}, g);
  for (let m = 0; m <= 5; m++){
    E("line", {x1:X(m), y1:gy - 3.5, x2:X(m), y2:gy + 3.5, stroke:"#D8DADD", "stroke-width":.8}, g);
    if (m % 1 === 0) T(g, X(m), gy + 12, String(m), {anc:"middle", cor:"#9A9DA2", fs:6.5});
  }
  for (let m = 0; m < 5; m++)
    E("rect", {x:X(m), y:gy - 3.5, width:PM, height:3.5, fill: m % 2 ? "#D8DADD" : "none",
      stroke:"#D8DADD", "stroke-width":.4}, g);
  T(g, ML, gy - 8, "ESCALA GRÁFICA (m)", {cor:"#5C6065", fs:6.5, ls:.8});
  T(g, W - 20, gy + 12, "est. " + fmt(d.dist) + " m", {anc:"end", cor:"#C88E1B", fs:7});
  T(g, W - 20, gy - 1, "dimensões estimadas", {anc:"end", cor:"#5C6065", fs:6.5});
  return svg;
}

/* =================== FLUXO DE CAUSAS =================== */
/* quebra um texto em linhas de até `max` caracteres */
function quebrar(txt, max){
  const linhas = []; let l = "";
  txt.split(" ").forEach(p => {
    if ((l + " " + p).trim().length > max && l){ linhas.push(l); l = p; }
    else l = (l + " " + p).trim();
  });
  if (l) linhas.push(l);
  return linhas;
}
function desenharFluxo(svg){
  const largura = svg.parentNode.clientWidth || window.innerWidth;
  if (largura < 760) return desenharFluxoVertical(svg, ETAPAS_FLUXO);
  svg.innerHTML = "";
  const W = 980, H = 280;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.removeAttribute("width");
  const g = E("g", {}, svg);
  E("rect", {x:0, y:0, width:W, height:H, fill:"var(--carvao-2)"}, g);

  const etapas = ETAPAS_FLUXO;
  const cw = 142, gap = 24, y0 = 74, ch = 118;
  const x0 = (W - (etapas.length*cw + (etapas.length-1)*gap)) / 2;

  T(g, W/2, 34, "CICLO DE DEGRADAÇÃO — DA FADIGA À PANELA", {anc:"middle", cor:"#D8DADD", fs:12, ls:2, fw:700});
  T(g, W/2, 50, "cada estágio aparece em um ponto diferente do trecho levantado",
    {anc:"middle", cor:"#6B6E73", fs:9, ff:"Arial, sans-serif"});

  etapas.forEach(([n, tit, txt, cor, ocor], i) => {
    const x = x0 + i*(cw + gap);
    E("rect", {x, y:y0, width:cw, height:ch, fill:"#1B1D20", stroke:"#3C3F44", "stroke-width":1, rx:2}, g);
    E("rect", {x, y:y0, width:cw, height:3, fill:cor}, g);
    T(g, x + 11, y0 + 24, n, {cor, fs:15, fw:700});
    let ly = y0 + 44;
    quebrar(tit, 17).forEach((l, j, arr) => { T(g, x + 11, ly, l, {cor:"#F2F2F3", fs:10.5, fw:700, ff:"Arial, sans-serif"}); if (j < arr.length - 1) ly += 13; });
    let ly2 = ly + 16;
    quebrar(txt, 22).forEach((l, j, arr) => { T(g, x + 11, ly2, l, {cor:"#9A9DA2", fs:8.2, ff:"Arial, sans-serif"}); if (j < arr.length - 1) ly2 += 10.5; });
    T(g, x + 11, y0 + ch - 9, "defeitos " + ocor, {cor, fs:7.5});
    if (i < etapas.length - 1)
      E("path", {d:`M ${x+cw+5} ${y0+ch/2} l ${gap-10} 0 m -6 -5 l 6 5 l -6 5`,
        fill:"none", stroke:"#4A4E54", "stroke-width":1.2}, g);
  });

  E("path", {d:`M ${x0 + 5.5*(cw+gap) + cw/2} ${y0 + ch + 10} L ${x0 + 5.5*(cw+gap) + cw/2} ${y0 + ch + 30} L ${x0 + cw/2} ${y0 + ch + 30} L ${x0 + cw/2} ${y0 + ch + 10} m -5 6 l 5 -6 l 5 6`,
    fill:"none", stroke:"#B4442A", "stroke-width":1.2, "stroke-dasharray":"6 4"}, g);
  T(g, W/2, y0 + ch + 44, "sem tratar a drenagem e a base, o ciclo recomeça",
    {anc:"middle", cor:"#D9674A", fs:9, ff:"Arial, sans-serif"});
}

/* versão para telas estreitas: etapas empilhadas, com a seta de retorno pela direita */
function desenharFluxoVertical(svg, etapas){
  svg.innerHTML = "";
  const W = 340, x = 16, cw = W - 52, ch = 92, gap = 22, y0 = 64;
  const H = y0 + etapas.length*ch + (etapas.length - 1)*gap + 48;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.removeAttribute("width");
  const g = E("g", {}, svg);
  E("rect", {x:0, y:0, width:W, height:H, fill:"var(--carvao-2)"}, g);
  T(g, x, 28, "CICLO DE DEGRADAÇÃO", {cor:"#D8DADD", fs:12, ls:1.6, fw:700});
  T(g, x, 45, "da fadiga à panela — cada estágio aparece", {cor:"#6B6E73", fs:9.5, ff:"Arial, sans-serif"});
  T(g, x, 57, "em um ponto diferente do trecho", {cor:"#6B6E73", fs:9.5, ff:"Arial, sans-serif"});

  etapas.forEach(([n, tit, txt, cor, ocor], i) => {
    const y = y0 + i*(ch + gap);
    E("rect", {x, y, width:cw, height:ch, fill:"#1B1D20", stroke:"#3C3F44", "stroke-width":1, rx:2}, g);
    E("rect", {x, y, width:3, height:ch, fill:cor}, g);
    T(g, x + 14, y + 22, n, {cor, fs:14, fw:700});
    T(g, x + 40, y + 22, tit, {cor:"#F2F2F3", fs:11.5, fw:700, ff:"Arial, sans-serif"});
    quebrar(txt, 52).slice(0, 2).forEach((l, j) =>
      T(g, x + 14, y + 42 + j*13, l, {cor:"#9A9DA2", fs:9.8, ff:"Arial, sans-serif"}));
    T(g, x + 14, y + ch - 11, "defeitos " + ocor, {cor, fs:8.5});
    if (i < etapas.length - 1){
      const ax = x + cw/2, ay = y + ch + 4;
      E("path", {d:`M ${ax} ${ay} l 0 ${gap - 8} m -5 -6 l 5 6 l 5 -6`, fill:"none", stroke:"#4A4E54", "stroke-width":1.3}, g);
    }
  });
  const xr = x + cw + 14, yIni = y0 + ch/2, yFim = y0 + (etapas.length - 1)*(ch + gap) + ch/2;
  E("path", {d:`M ${x + cw + 4} ${yFim} L ${xr} ${yFim} L ${xr} ${yIni} L ${x + cw + 4} ${yIni} m 6 -5 l -6 5 l 6 5`,
    fill:"none", stroke:"#B4442A", "stroke-width":1.3, "stroke-dasharray":"6 4"}, g);
  T(g, x, H - 18, "sem tratar a drenagem e a base, o ciclo recomeça", {cor:"#D9674A", fs:10, ff:"Arial, sans-serif"});
}

const ETAPAS_FLUXO = [
    ["01","Cargas repetidas","Ônibus e caminhões na faixa junto ao meio-fio","#C88E1B","04"],
    ["02","Fadiga do revestimento","Malha de trincas interligadas, ainda fechada (FC-2)","#C88E1B","04 · 18"],
    ["03","Infiltração de água","A água da sarjeta entra pelas fissuras e pelas juntas abertas","#3E7E96","19"],
    ["04","Perda de suporte da base","O subleito satura e a capacidade de carga cai","#3E7E96","19 · 18"],
    ["05","Desprendimento → panela","Os blocos se soltam e a cavidade se abre","#B4442A","06 · 07 · 18"],
    ["06","Remendo sem tratar a causa","O reparo pontual recria o defeito no mesmo local","#B4442A","07 · 09 · 15 · 16"]
];

/* =================== CONSTRUÇÃO DAS ABAS =================== */
(function memorial(){
  const grade = $("#gradeMemorial");
  [...DEFEITOS].sort((a, b) => a.dist - b.dist).forEach(d => {
    const i = DEFEITOS.indexOf(d);
    const art = document.createElement("article");
    art.className = "ficha";
    art.innerHTML = `
      <div class="foto" style="background-image:url('${d.foto}')" role="button" tabindex="0"
           aria-label="Ampliar a foto do defeito ${d.n}">
        <div class="faixa"><span>FOTO ${d.n}</span><span class="sv ${d.sev}">${d.sev === "nd" ? "s/ sev." : d.sev}</span></div>
        <span class="ir">Ver na via →</span>
      </div>
      <div class="corpo">
        <div class="cab-f">
          <div class="tit">
            <span class="rotulo">Defeito ${d.n} · Foto ${d.n}</span>
            <h4>${d.nome}</h4>
          </div>
          <div class="badge"><div class="l">${d.cod}</div><div class="s">CÓDIGO<br>DNIT 005/2003</div></div>
        </div>
        <div class="campos">
          <div class="campo"><span class="k">Coordenadas</span>
            <span class="v">${d.aprox ? "sem georreferência" : "Lat " + d.lat + "<br>Lon " + d.lon}</span></div>
          <div class="campo"><span class="k">Classe / severidade</span>
            <span class="v livre">${d.classe}<br>${SEV_ROT[d.sev].toLowerCase()}</span></div>
          <div class="campo"><span class="k">Distância na via</span>
            <span class="v">${d.aprox ? "≈ " : ""}${fmt(d.dist)} m</span></div>
          <div class="campo"><span class="k">Data da foto</span><span class="v">${d.data}</span></div>
          <div class="campo larga"><span class="k">Posição na via</span>
            <span class="v livre">${d.posicao}</span></div>
          <div class="campo larga"><span class="k">Dimensões</span>
            <span class="v">${cota(d.cad.c)} m × ${cota(d.cad.l)} m <span style="color:var(--cinza)">(estimadas — medir em campo)</span></span></div>
        </div>
        <p class="desc">${d.desc}</p>
        <div class="cz">
          <span class="rotulo">Causas prováveis</span>
          <ul class="causas-lista">${d.causas.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
      </div>`;
    const f = art.querySelector(".foto");
    f.addEventListener("click", ev => {
      if (ev.target.classList.contains("ir")) irParaRua(i);
      else abrirLupa(d);
    });
    f.addEventListener("keydown", ev => { if (ev.key === "Enter"){ ev.preventDefault(); abrirLupa(d); }});
    grade.appendChild(art);
  });
})();

function abrirLupa(d){
  $("#lupaImg").src = d.foto;
  $("#lupaImg").alt = `Foto ${d.n} — ${d.nome}`;
  $("#lupaCap").textContent = `FOTO ${d.n} · ${d.cod} — ${d.nome}  ·  ${d.data}  ·  ${d.aprox ? "sem georreferência" : d.lat + " / " + d.lon}`;
  $("#lupa").hidden = false;
}
$("#fecharLupa").onclick = () => { $("#lupa").hidden = true; };
$("#lupa").addEventListener("click", e => { if (e.target.id === "lupa") $("#lupa").hidden = true; });

(function legendas(){
  const box = $("#legHachuras");
  for (const k in HACHURAS){
    const d = document.createElement("div");
    d.className = "leg-item";
    d.innerHTML = `<svg width="46" height="34" viewBox="0 0 46 34"></svg>
      <span class="t"><b>${HACHURAS[k].nome}</b>${HACHURAS[k].desc}</span>`;
    const svg = d.querySelector("svg");
    defsCad(svg);
    E("rect", {x:0, y:0, width:46, height:34, fill:"var(--cad-fundo)"}, svg);
    E("rect", {x:3, y:3, width:40, height:28, fill:`url(#${HPAT[k]})`, stroke:HCOR[k], "stroke-width":1.2}, svg);
    box.appendChild(d);
  }
})();

(function cardsCausa(){
  const box = $("#cardsCausa");
  Object.keys(AGENTES).forEach(k => {
    const ocor = DEFEITOS.filter(d => d.agentes.includes(k)).map(d => d.n).sort();
    const div = document.createElement("div");
    div.className = "card-causa";
    div.style.borderLeftColor = COR_AG[k];
    div.innerHTML = `<div class="n" style="color:${COR_AG[k]}">${ocor.length}</div>
      <h4>${AGENTES[k].rot}</h4><p>${AGENTES[k].txt}</p>
      <div class="ocor" style="color:${COR_AG[k]}">Defeitos ${ocor.join(" · ")}</div>`;
    box.appendChild(div);
  });
})();

(function tabelas(){
  const tr = $("#tabResumo");
  [...DEFEITOS].sort((a, b) => a.dist - b.dist).forEach(d => {
    const l = document.createElement("tr");
    l.innerHTML = `<td class="cd">${d.n}</td><td class="cd">${d.cod}</td><td>${d.nome}</td>` +
      `<td>${d.classe}${d.sev !== "nd" ? " · " + SEV_ROT[d.sev].toLowerCase() : ""}</td>` +
      `<td>${d.posicao}</td><td class="cd">${d.aprox ? "≈ " : ""}${fmt(d.dist)} m</td>`;
    tr.appendChild(l);
  });
  const ta = $("#tabAgentes");
  DEFEITOS.forEach(d => {
    const l = document.createElement("tr");
    const m = k => d.agentes.includes(k) ? "●" : "";
    l.innerHTML = `<td><span class="cd">${d.n}</span> — ${d.cod}</td><td class="mc">${m("agua")}</td>` +
      `<td class="mc">${m("trafego")}</td><td class="mc">${m("envelhecimento")}</td><td class="mc">${m("reparo")}</td>`;
    ta.appendChild(l);
  });
})();

/* =================== EXPLICAÇÃO DAS PRANCHAS =================== */
function explicar(i, modo, peloUsuario){
  const d = DEFEITOS[i];
  const box = $(modo === "causas" ? "#explicaCausas" : "#explicaDanos");
  const cor = modo === "causas" ? COR_AG[d.agentes[0]] : HCOR[d.cad.h];

  const esquerda = `
    <div class="cab">
      <div class="marca-cod" style="background:${cor}">
        <div class="l">${d.cod}</div><div class="s">DNIT<br>005/2003</div>
      </div>
      <div style="min-width:0">
        <span class="rotulo">Ocorrência ${d.n} · ${fmt(d.dist)} m</span>
        <h4>${d.nome}</h4>
        <span class="ond">${d.endereco}</span>
      </div>
    </div>
    <div class="fitas">
      <span class="fita ${d.sev === "alta" ? "alta" : d.sev === "media" ? "media" : "classe"}">${SEV_ROT[d.sev]}</span>
      <span class="fita classe">${d.classe}</span>
      <span class="fita classe">${modo === "causas" ? HACHURAS[d.cad.h].nome.split(" (")[0] : "Prioridade " + d.prio}</span>
    </div>
    <div class="mini-campos">
      <div><span class="k">Coordenadas</span><span class="v">${d.aprox ? "sem georref." : d.lat + "<br>" + d.lon}</span></div>
      <div><span class="k">Dimensões</span><span class="v">${cota(d.cad.c)} × ${cota(d.cad.l)} m<br><span style="color:var(--cinza)">estimadas</span></span></div>
      <div><span class="k">Posição transversal</span><span class="v">${cota(d.cad.y0)} m a ${cota(d.cad.y0 + d.cad.l)} m<br><span style="color:var(--cinza)">da ciclofaixa</span></span></div>
      <div><span class="k">Data do registro</span><span class="v">${d.data}</span></div>
    </div>
    <button class="ver-via" data-ir="${i}">Ver na via →</button>`;

  let direita;
  if (modo === "causas"){
    direita = `
      <span class="rotulo">Por que este defeito apareceu aqui</span>
      <p class="pq" style="margin-top:9px">${d.causa}</p>
      <span class="rotulo">Agentes deflagradores</span>
      <div class="agentes" style="margin-top:9px">` +
      Object.keys(AGENTES).map(k => {
        const on = d.agentes.includes(k);
        return `<div class="agente${on ? " on" : ""}" style="${on ? "border-left-color:" + COR_AG[k] + ";background:" + COR_AG[k] + "1F" : ""}">
          <svg class="ico" viewBox="0 0 16 16" fill="${on ? COR_AG[k] : "var(--cinza)"}" aria-hidden="true">${AGENTES[k].ico}</svg>
          <span class="txt">${AGENTES[k].rot}</span></div>`;
      }).join("") + `</div>
      <div class="cz" style="border-top:1px solid var(--borda);padding-top:13px;margin-top:15px">
        <span class="rotulo" style="display:block;margin-bottom:8px">Causas prováveis</span>
        <ul class="causas-lista">${d.causas.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>`;
  } else {
    direita = `
      <span class="rotulo">O que o desenho representa</span>
      <p class="pq" style="margin-top:9px">A área hachurada é <b>${HACHURAS[d.cad.h].nome.toLowerCase()}</b> — ${HACHURAS[d.cad.h].desc.toLowerCase()}. Está desenhada sobre <b>${d.posicao.toLowerCase()}</b>, no estaqueamento <b>${fmt(d.dist)} m</b> a partir do defeito 06.</p>
      <span class="rotulo">O que foi registrado em campo</span>
      <p class="pq" style="margin-top:9px">${d.desc}</p>
      <span class="rotulo">Observação da equipe</span>
      <p class="pq" style="margin-top:9px">${d.obs}</p>
      <div class="acao">
        <div class="p">${PRIO_ROT[d.prio]}</div>
        <div class="t">${d.acao}</div>
      </div>`;
  }

  box.innerHTML = `<div class="lado">${esquerda}</div><div class="lado">${direita}
    <p class="dica-clique">Toque em outra ocorrência na prancha para trocar esta explicação.</p></div>`;
  box.querySelector("[data-ir]").onclick = () => irParaRua(i);

  /* realça a ocorrência escolhida na prancha correspondente */
  const svg = $(modo === "causas" ? "#cadCausas" : "#cadPlanta");
  svg.querySelectorAll(".ocor").forEach(o => {
    const sel = Number(o.dataset.i) === i;
    o.querySelector(".faixa-ocor").setAttribute("opacity", sel ? .34 : .14);
  });
  /* no celular a explicação fica abaixo da prancha: rola até ela para o toque ter resposta visível */
  if (peloUsuario && matchMedia("(max-width:860px)").matches){
    const r = box.getBoundingClientRect();
    if (r.top > window.innerHeight * .55 || r.bottom < 0) box.scrollIntoView({behavior:"smooth", block:"start"});
  }
}

desenharPlanta($("#cadPlanta"), "danos");
desenharPlanta($("#cadCausas"), "causas");
explicar(0, "danos");
explicar(0, "causas");
desenharFluxo($("#fluxoCausas"));
(function detalhes(){
  const box = $("#gradeDetalhes");
  [...DEFEITOS].sort((a, b) => a.dist - b.dist).forEach(d => {
    const div = document.createElement("div");
    div.className = "detalhe";
    div.innerHTML = `<div class="cab"><span class="n">DETALHE ${d.n} · ${d.cod}</span>
      <span class="c">${HACHURAS[d.cad.h].nome.split(" (")[0]}</span></div>`;
    div.appendChild(desenharDetalhe(d));
    box.appendChild(div);
  });
})();

/* --------- navegação entre abas --------- */
const ABAS = {memorial:"#abaMemorial", danos:"#abaDanos", causas:"#abaCausas", relatorio:"#abaRelatorio"};
function abrirAba(nome){
  cenaMapa.hidden = true; cenaRua.hidden = true; painel.hidden = false;
  for (const k in ABAS) $(ABAS[k]).hidden = k !== nome;
  document.querySelectorAll('.abas button').forEach(b =>
    b.setAttribute("aria-selected", String(b.dataset.aba === nome)));
  $(".painel-corpo").scrollTop = 0;
  const ativa = document.querySelector(`.abas button[data-aba="${nome}"]`);
  if (ativa) ativa.scrollIntoView({block:"nearest", inline:"center"});
  if (nome === "causas"){
    const v = ($("#fluxoCausas").parentNode.clientWidth || window.innerWidth) < 760;
    if (v !== fluxoVertical){ fluxoVertical = v; desenharFluxo($("#fluxoCausas")); }
  }
}
document.querySelectorAll("[data-aba]").forEach(b => b.onclick = () => abrirAba(b.dataset.aba));
$("#fecharPainel").onclick = voltarMapa;

/* --------- enquadramento do mapa: 1 unidade do viewBox = 1 px do painel ---------
   A área livre é medida a partir dos cartões fixos (que mudam de lugar entre celular e desktop),
   para o trecho nunca ficar escondido atrás deles. */
function enquadrar(){
  if (cenaMapa.hidden) return;
  const W = mapa.clientWidth || 1200, H = mapa.clientHeight || 800;
  mapa.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const R = mapa.getBoundingClientRect();
  const rect = sel => { const el = document.querySelector(sel); if (!el) return null;
    const b = el.getBoundingClientRect(); return b.width && b.height ? b : null; };
  const id = rect(".painel-id .cartao-id"), dock = rect(".dock"), nav = rect(".nav-topo"), leg = rect(".legenda");
  const estreito = W < 861;
  let padE, padD, padT, padB;
  if (estreito){
    padE = 16; padD = 16;
    padT = (id ? id.bottom - R.top : 0) + 12;
    const tetoBaixo = Math.min(...[dock, nav, leg].filter(Boolean).map(b => b.top), R.bottom);
    padB = R.bottom - tetoBaixo + 12;
    /* se sobrar pouca altura (celular deitado), o mapa usa a faixa entre o cartão e o dock */
    if (H - padT - padB < 160){ padT = 12; padB = (nav ? R.bottom - nav.top : 0) + 8; padE = (id ? id.right - R.left : 0) + 12; padD = (dock ? R.right - dock.left : 0) + 12; }
  } else {
    padE = (id ? id.right - R.left : 420) + 24;
    padD = 40;
    padT = Math.max(60, (nav ? nav.bottom - R.top : 0) + 16);
    padB = 100;
  }
  const bb = estreito ? {x:-140, y:-170, w:2280, h:1760} : {x:-300, y:-340, w:2740, h:2200};
  const lw = Math.max(120, W - padE - padD), lh = Math.max(120, H - padT - padB);
  vista.k = Math.min(lw / bb.w, lh / bb.h);
  vista.x = padE + (lw - bb.w * vista.k) / 2 - bb.x * vista.k;
  vista.y = padT + (lh - bb.h * vista.k) / 2 - bb.y * vista.k;
  aplicarVista();
}
enquadrar();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(enquadrar);
let tEnq, fluxoVertical = window.innerWidth < 760;
addEventListener("resize", () => {
  clearTimeout(tEnq);
  tEnq = setTimeout(() => {
    enquadrar();
    const v = ($("#fluxoCausas").parentNode.clientWidth || window.innerWidth) < 760;
    if (v !== fluxoVertical){ fluxoVertical = v; desenharFluxo($("#fluxoCausas")); }
  }, 180);
});

/* --------- faixas roláveis: esmaece a borda direita enquanto houver conteúdo escondido --------- */
document.querySelectorAll(".nav-topo, .abas").forEach(el => {
  const atualizar = () => el.classList.toggle("tem-mais", el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  el.addEventListener("scroll", atualizar, {passive:true});
  addEventListener("resize", atualizar);
  new MutationObserver(atualizar).observe(document.getElementById("painel"), {attributes:true, attributeFilter:["hidden"]});
  atualizar();
});
