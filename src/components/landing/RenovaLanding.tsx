"use client";

import { useEffect, useState } from "react";

/**
 * Réplica fiel de la maqueta aprobada `prerenova`
 * (vertex-pather/docs/design/prerenova_STRUCTURE.html).
 * Fotos reales aprobadas por Franco en public/images/img01–17.webp (VI.12 — WebP optimizado,
 * sin base64). Maintenance y Cleaning todavía no tienen fotos reales: usan el placeholder en
 * gradiente hasta que Franco las entregue.
 */

const IMG = (n: number) => `/images/img${String(n).padStart(2, "0")}.webp`;

// Placeholder hasta que Franco entregue el número real de WhatsApp del negocio.
const WA_NUMBER = "16316031643";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

type ServiceKey = "powerwash" | "maintenance" | "cleaning" | "painting";
type Size = "S" | "M" | "L";

interface PricedService {
  key: ServiceKey;
  label: string;
  request?: false;
  lo: number;
  hi: number;
  min: number;
  band: number;
  sizes: Record<Size, number>;
  sizeTxt: Record<Size, string>;
  wa: string;
}

interface RequestService {
  key: ServiceKey;
  label: string;
  request: true;
  wa: string;
}

type Service = PricedService | RequestService;

const SVC: Record<ServiceKey, Service> = {
  powerwash: {
    key: "powerwash",
    label: "Power-Washing and Season Close-Down",
    lo: 0.4,
    hi: 0.4,
    min: 250,
    band: 0.12,
    sizes: { S: 250, M: 500, L: 900 },
    sizeTxt: { S: "up to ~300 sq ft", M: "~300-600 sq ft", L: "600+ sq ft" },
    wa: "power-washing / season close-down for my patio, deck or stone",
  },
  maintenance: {
    key: "maintenance",
    label: "Home Maintenance and Repairs",
    request: true,
    wa: "a free estimate for home maintenance and small repairs",
  },
  cleaning: {
    key: "cleaning",
    label: "Home Cleaning",
    request: true,
    wa: "a free estimate for home cleaning",
  },
  painting: {
    key: "painting",
    label: "Painting and Finishes",
    request: true,
    wa: "a free estimate for interior and exterior painting",
  },
};

const SVC_ORDER: ServiceKey[] = ["powerwash", "maintenance", "cleaning", "painting"];
const SIZES: Size[] = ["S", "M", "L"];
const SIZE_NAME: Record<Size, string> = { S: "Small", M: "Medium", L: "Large" };

function money(n: number) {
  return "$" + (Math.round(n / 25) * 25).toLocaleString("en-US");
}

// Placeholders temáticos por servicio (gradiente Dark Luxury). Sustituir por fotos reales en public/.
const PH: Record<ServiceKey, string> = {
  powerwash: "linear-gradient(135deg,#2b2a20,#151310)",
  maintenance: "linear-gradient(135deg,#3b3d43,#23252b)",
  cleaning: "linear-gradient(135deg,#44474d,#292b30)",
  painting: "linear-gradient(135deg,#332a1c,#1c1712)",
};

interface MagEntry {
  key: ServiceKey;
  kicker: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  intro: string;
  incT: string;
  incP: string;
  cap: string;
  quote: string;
  hasCollage: boolean;
  // Fotos reales (opcional — si falta, se usa el placeholder en gradiente PH[key]).
  cover?: string;
  coverContain?: boolean; // no recortar (ej. la obra de arte de Painting)
  spread?: string;
  full?: string;
  collage?: string;
  duoA?: string;
  duoB?: string;
}

const MAG: MagEntry[] = [
  {
    key: "powerwash",
    kicker: "Field Notes · No. 01",
    titlePre: "Power-Washing ",
    titleEm: "and",
    titlePost: " Season Close-Down",
    lede: "Lift a season of salt, mold and grime — then close the property before the first freeze.",
    intro:
      "Brick, stone and pavers come back to life, and everything the cold would ruin is put away. The quiet work in fall that saves the expensive repair in spring.",
    incT: "What's included",
    incP: "Power-washing of patios, steps, walkways and decks. Outdoor furniture stored, tables and delicate pieces covered, and a final walk-through before winter sets in.",
    cap: "Recent work · deck power-washing · the Hamptons",
    quote: "Done in the temperature window, before the first freeze.",
    hasCollage: true,
    cover: IMG(9),
    spread: IMG(10),
    full: IMG(11),
    collage: IMG(12),
  },
  {
    key: "maintenance",
    kicker: "Field Notes · No. 02",
    titlePre: "Home Maintenance ",
    titleEm: "and",
    titlePost: " Repairs",
    lede: "The steady hands that keep a home effortless, all year.",
    intro:
      "The dozens of small things that add up — fixed, maintained and watched — by one trusted point of contact. No job too small, nothing left to slip.",
    incT: "What's included",
    incP: "Small repairs and carpentry, seasonal upkeep, fixtures and finishes, and on-call assistance whenever something needs a hand.",
    cap: "Recent work · the Hamptons",
    quote: "One message, and it's handled.",
    hasCollage: false,
  },
  {
    key: "cleaning",
    kicker: "Field Notes · No. 03",
    titlePre: "",
    titleEm: "",
    titlePost: "Home Cleaning",
    lede: "A home you feel the moment you walk in.",
    intro:
      "Detailed interior cleaning by our dedicated all-female team — discreet, meticulous, and respectful of your home, from routine care to a deep seasonal reset.",
    incT: "What's included",
    incP: "Kitchens, baths and living spaces cleaned room by room, with the same attention to detail every visit.",
    cap: "Recent work · the Hamptons",
    quote: "Discreet, meticulous, and quietly thorough.",
    hasCollage: false,
  },
  {
    key: "painting",
    kicker: "Field Notes · No. 04",
    titlePre: "Painting ",
    titleEm: "and",
    titlePost: " Finishes",
    lede: "Clean lines and durable finishes, to a refined Hamptons standard.",
    intro:
      "Interior and exterior painting, staining, and kitchen and cabinet refinishing — with the prep done right, so the result lasts as long as it looks good.",
    incT: "What's included",
    incP: "Interiors and exteriors, stain and seal, kitchens and cabinetry, trim and detail work — finished clean.",
    cap: "Recent work · the Hamptons",
    quote: "Prep done right; finishes that last.",
    hasCollage: false,
    cover: IMG(13),
    coverContain: true,
    spread: IMG(14),
    full: IMG(15),
    duoA: IMG(16),
    duoB: IMG(17),
  },
];

export default function RenovaLanding() {
  const [selSvc, setSelSvc] = useState<ServiceKey | null>(null);
  const [selSize, setSelSize] = useState<Size | null>(null);
  const [magOpen, setMagOpen] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMagOpen(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = magOpen !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [magOpen]);

  function selectService(svc: ServiceKey) {
    setSelSvc(svc);
    setSelSize(null);
  }

  function goToEstimateWith(svc: ServiceKey) {
    setMagOpen(null);
    setTimeout(() => {
      document.getElementById("estimate")?.scrollIntoView({ behavior: "smooth" });
      selectService(svc);
    }, 520);
  }

  const svcData = selSvc ? SVC[selSvc] : null;
  const isRequest = svcData ? "request" in svcData && svcData.request : false;

  let estLabel = "";
  let estAmt = "";
  let estFine = "Season-close pricing · final price confirmed with a quick photo on WhatsApp.";
  let estWaHref = "";
  let estWaText = "Confirm and book on WhatsApp";
  let showEstOut = false;
  let hintText = "Pick a service to start.";

  if (svcData && isRequest) {
    const s = svcData as RequestService;
    showEstOut = true;
    estLabel = s.label;
    estAmt = "Free on-site estimate";
    estFine = "No obligation · we set up a quick free visit to give you an exact price.";
    estWaText = "Request a free estimate on WhatsApp";
    estWaHref = waLink(`Hi Renova, I'd like ${s.wa}. My address is ___.`);
  } else if (svcData && !isRequest) {
    const s = svcData as PricedService;
    if (!selSize) {
      hintText = "Now pick a size.";
    } else {
      const sqft = s.sizes[selSize];
      let lo = sqft * s.lo * (1 - s.band);
      let hi = sqft * s.hi * (1 + s.band);
      lo = Math.max(lo, s.min);
      hi = Math.max(hi, s.min);
      const loR = Math.max(Math.floor(lo / 25) * 25, s.min);
      const hiR = Math.max(Math.ceil(hi / 25) * 25, s.min);
      const priceStr = hiR <= loR ? `from ${money(loR)}` : `${money(loR)} – ${money(hiR)}`;
      showEstOut = true;
      estLabel = `${s.label} · ${SIZE_NAME[selSize]} (${s.sizeTxt[selSize]})`;
      estAmt = (hiR <= loR ? "" : "Estimated ") + priceStr;
      const msg = `Hi Renova, I'd like ${s.wa}, ${SIZE_NAME[selSize]} (${s.sizeTxt[selSize]}). Your estimator showed ${priceStr}. My address is ___.`;
      estWaHref = waLink(msg);
    }
  }

  const activeMag = magOpen !== null ? MAG[magOpen] : null;

  return (
    <div className="landing">
      <nav>
        <div className="wrap nav-in">
          <a href="#top" className="brand" translate="no">
            REN<span>O</span>VA
          </a>
          <div className="nav-cta">
            <a href="#services" className="btn ghost navbtn services">
              Services
            </a>
            <a href="#trends" className="btn ghost navbtn trends">
              Trends
            </a>
            <a href="#estimate" className="btn wa navbtn">
              Get an estimate
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${IMG(1)})`,
            backgroundSize: "cover",
            backgroundPosition: "center 42%",
          }}
        />
        <div className="inner">
          <div className="eyebrow">The Hamptons · Home Services</div>
          <h1>
            Get your home <em style={{ whiteSpace: "nowrap" }}>winter-ready</em>.
          </h1>
          <p>
            We power-wash and seal your deck, patios and stone before the first freeze — so
            summer grime and winter ice don&apos;t cost you a spring repair. Real local crews,
            licensed and insured.
          </p>
          <div className="hero-cta">
            <a href="#estimate" className="btn wa">
              Get your free estimate
            </a>
            <a href="#services" className="btn ghost">
              See services
            </a>
          </div>
          <div className="trust">
            <b>Licensed &amp; insured</b> crews · The Hamptons, NY
          </div>
          <div className="towns">
            Southampton · Sag Harbor · Sagaponack · Bridgehampton · Water Mill · East Hampton ·
            Amagansett · Montauk
          </div>
        </div>
      </header>

      <div className="offer">
        <div className="wrap in">
          <div>
            <div className="role">Limited fall booking</div>
            <h2>Winter-Ready: Power-Wash + Seal</h2>
            <p>
              Clean off the season, then seal to protect against freeze, ice and salt — done in
              the temperature window, before the first freeze.
            </p>
          </div>
          <a
            className="btn wa"
            href={waLink(
              "Hi Renova, I want the Winter-Ready service (power-wash + seal). Can you send me a quote?"
            )}
            target="_blank"
            rel="noopener"
          >
            Book Winter-Ready
          </a>
        </div>
      </div>

      <section className="est" id="estimate">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Free estimate</div>
            <h2>Your free estimate, no surprises.</h2>
            <p>
              Pick a service to start. We confirm the exact price by WhatsApp with a quick
              photo — no surprises.
            </p>
          </div>
          <div className="est-box">
            <p className="step-l">1 · What do you need?</p>
            <div className="chips" id="svcChips">
              <button
                type="button"
                className="chip"
                aria-pressed={selSvc === "powerwash"}
                onClick={() => selectService("powerwash")}
              >
                Power-Washing · Season Close-Down
                <small>Patios, decks, steps and stone</small>
              </button>
              <button
                type="button"
                className="chip"
                aria-pressed={selSvc === "maintenance"}
                onClick={() => selectService("maintenance")}
              >
                Home Maintenance and Repairs
                <small>Small repairs and upkeep</small>
              </button>
              <button
                type="button"
                className="chip"
                aria-pressed={selSvc === "cleaning"}
                onClick={() => selectService("cleaning")}
              >
                Home Cleaning
                <small>Detailed interior care</small>
              </button>
              <button
                type="button"
                className="chip"
                aria-pressed={selSvc === "painting"}
                onClick={() => selectService("painting")}
              >
                Painting and Finishes
                <small>Interior and exterior</small>
              </button>
            </div>

            {!isRequest && (
              <>
                <p className="step-l">2 · How big? (no measuring needed)</p>
                <div className="sizes" id="sizeChips">
                  {SIZES.map((size) => {
                    const s = svcData as PricedService | null;
                    return (
                      <button
                        key={size}
                        type="button"
                        className="chip"
                        aria-pressed={selSize === size}
                        disabled={!svcData}
                        onClick={() => setSelSize(size)}
                      >
                        {SIZE_NAME[size]}
                        <small>{s ? s.sizeTxt[size] : "—"}</small>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <div className="result">
              {!showEstOut && <div className="hint">{hintText}</div>}
              {showEstOut && (
                <div id="estOut">
                  <div className="fine">{estLabel}</div>
                  <div className="amt">{estAmt}</div>
                  <div className="fine">{estFine}</div>
                  <a className="btn wa" href={estWaHref} target="_blank" rel="noopener">
                    {estWaText}
                  </a>
                  <div className="bundle-note">
                    Need more than one service?{" "}
                    <a
                      href={waLink(
                        "Hi Renova, I'd like an estimate for more than one service at my home."
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      Tell us about your home
                    </a>{" "}
                    and we&apos;ll handle it in one coordinated visit.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div
          className="svc-cover"
          style={{
            height: 400,
            marginBottom: 6,
            backgroundImage: `linear-gradient(180deg,rgba(12,11,10,.20),rgba(12,11,10,.55) 62%,rgba(12,11,10,.94)), url(${IMG(2)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottom: "1px solid rgba(198,169,106,.15)",
          }}
        />
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">What we do</div>
            <h2>One trusted team, inside and out.</h2>
            <p>
              From power-washing and end-of-season prep to maintenance, cleaning and refined
              painting — the care a Hamptons home needs, under one name.
            </p>
          </div>
          <div className="grid">
            {SVC_ORDER.map((key, i) => {
              const s = SVC[key];
              const CARD_IMG: Partial<Record<ServiceKey, string>> = {
                powerwash: IMG(3),
                painting: IMG(4),
              };
              const cardCopy: Record<ServiceKey, string> = {
                powerwash:
                  "Power-wash patios, decks and walkways, then close the season right — outdoor furniture stored, tables and pieces covered and protected before winter.",
                maintenance:
                  "Small repairs, seasonal upkeep and on-call home assistance — the trusted hands that keep every part of the house working.",
                cleaning:
                  "Detailed interior cleaning by our dedicated all-female team — discreet, meticulous and respectful of your home.",
                painting:
                  "Professional interior and exterior painting, staining, kitchens and cabinetry — finished to a refined Hamptons standard.",
              };
              return (
                <a
                  key={key}
                  className="card gal"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    setMagOpen(i);
                  }}
                >
                  <div
                    className="ph"
                    style={{
                      backgroundImage: CARD_IMG[key] ? `url(${CARD_IMG[key]})` : PH[key],
                    }}
                  />
                  <div className="t">
                    <h3>{s.label}</h3>
                    <p>{cardCopy[key]}</p>
                    <div className="go">Free estimate &rarr;</div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="also">Every service under one trusted name — one message handles it all.</div>
        </div>
      </section>

      <div className="why">
        <div className="wrap" style={{ padding: "66px 24px" }}>
          <div className="why3">
            <div className="w">
              <div className="k">01</div>
              <h3>Beat the freeze</h3>
              <p>
                Water that soaks into wood, stone and joints freezes, expands and cracks.
                Sealing now prevents the expensive spring repair.
              </p>
            </div>
            <div className="w">
              <div className="k">02</div>
              <h3>Licensed and insured</h3>
              <p>
                Every crew is licensed and insured, and works across the Hamptons — from Sag
                Harbor to Montauk.
              </p>
            </div>
            <div className="w">
              <div className="k">03</div>
              <h3>Clear pricing</h3>
              <p>
                Get a ballpark online in seconds, one point of contact, and a firm price
                confirmed before we start.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="trends">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Trends &amp; tips</div>
            <h2>Ideas for a home well kept.</h2>
            <p>Seasonal notes from our crews across the Hamptons — shared freely, no sales pitch.</p>
          </div>
          <div className="three">
            <a
              className="tcard"
              href={waLink("Hi Renova, send me the winter home-close checklist.")}
              target="_blank"
              rel="noopener"
            >
              <div className="num">Seasonal</div>
              <h3>Closing the house for the season</h3>
              <p>
                The end-of-season walk-through our crews use across the Hamptons —
                power-wash and store what winter would ruin, and catch the small repairs before
                they turn expensive.
              </p>
              <div className="go">Get the checklist &rarr;</div>
            </a>
            <a
              className="tcard"
              href={waLink("Hi Renova, tell me about soft-wash vs power-wash.")}
              target="_blank"
              rel="noopener"
            >
              <div className="num">Interiors</div>
              <h3>Refresh the inside before winter</h3>
              <p>
                Why fall is the right window for interior painting, cabinet refinishing and a
                deep clean — so the home looks its best just as everyone moves indoors.
              </p>
              <div className="go">Learn more &rarr;</div>
            </a>
            <a
              className="tcard"
              href={waLink("Hi Renova, why should I seal before winter?")}
              target="_blank"
              rel="noopener"
            >
              <div className="num">Home care</div>
              <h3>One team, all year</h3>
              <p>
                How pairing seasonal exterior work with steady maintenance keeps a home
                effortless — power-washing, repairs, cleaning and painting under a single
                trusted name.
              </p>
              <div className="go">See why &rarr;</div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Our work</div>
            <h2>Real homes, real crews.</h2>
          </div>
          <div className="folio">
            <div className="tile" style={{ backgroundImage: `url(${IMG(5)})` }} />
            <div className="tile" style={{ backgroundImage: `url(${IMG(6)})` }}>
              <span className="lab">Before</span>
            </div>
            <div className="tile" style={{ backgroundImage: `url(${IMG(7)})` }}>
              <span className="lab">After</span>
            </div>
            <div className="tile" style={{ backgroundImage: `url(${IMG(8)})` }} />
          </div>
        </div>
      </section>

      <section id="contact" style={{ paddingTop: 20 }}>
        <div className="cta">
          <div className="eyebrow">Free quote</div>
          <h2>
            Let&apos;s get your home <em>handled</em>.
          </h2>
          <p>
            Get your instant estimate above, or message us directly. We reply within one
            business day — most Winter-Ready bookings start the same week.
          </p>
          <div className="row">
            <a
              className="btn wa"
              href={waLink("Hi Renova, I'd like a free quote.")}
              target="_blank"
              rel="noopener"
            >
              Message us on WhatsApp
            </a>
            <a className="btn ghost" href={`tel:+${WA_NUMBER}`}>
              Call us
            </a>
          </div>
          <div className="reach">
            Or email <a href="mailto:hello@renova.house">hello@renova.house</a> · The
            Hamptons, NY
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand" translate="no">
            REN<span>O</span>VA
          </div>
          <div className="tag">Home services for the Hamptons.</div>
          <div className="towns2">
            Southampton · Sag Harbor · Sagaponack · Bridgehampton · Water Mill · East Hampton ·
            Amagansett · Montauk
          </div>
          <div className="sm">
            Power-washing · Deck &amp; stone sealing · Winter-ready prep · Licensed &amp; insured
          </div>
        </div>
      </footer>

      <div className={`mag${activeMag ? " open" : ""}`} aria-hidden={!activeMag}>
        {activeMag && (
          <>
            <div className="mag-bar">
              <span className="mag-logo">
                RENO<span style={{ color: "var(--gold)" }}>V</span>A
              </span>
              <button className="mag-back" onClick={() => setMagOpen(null)}>
                &larr; Back to site
              </button>
            </div>
            <section
              className="mag-cover"
              style={{
                background: activeMag.cover ? `url(${activeMag.cover})` : PH[activeMag.key],
                backgroundColor: activeMag.coverContain ? "#0e0c09" : undefined,
                backgroundSize: activeMag.coverContain ? "contain" : "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="mag-cover-in">
                <span className="mag-kicker">{activeMag.kicker}</span>
                <h1>
                  {activeMag.titlePre}
                  {activeMag.titleEm && <em>{activeMag.titleEm}</em>}
                  {activeMag.titlePost}
                </h1>
                <p className="mag-lede">{activeMag.lede}</p>
              </div>
            </section>
            <div className="mag-body">
              <p className="mag-intro">{activeMag.intro}</p>
              <div className="mag-spread">
                <div
                  className="mag-img"
                  style={{ background: activeMag.spread ? `url(${activeMag.spread})` : PH[activeMag.key] }}
                />
                <div className="mag-txt">
                  <h3>{activeMag.incT}</h3>
                  <p>{activeMag.incP}</p>
                </div>
              </div>
              <figure className="mag-full">
                <div
                  className="mag-img"
                  style={{ background: activeMag.full ? `url(${activeMag.full})` : PH[activeMag.key] }}
                />
              </figure>
              <div className="mag-cap">{activeMag.cap}</div>
              {activeMag.hasCollage ? (
                <figure className="mag-collage">
                  <div
                    className="cimg"
                    style={{
                      backgroundImage: activeMag.collage ? `url(${activeMag.collage})` : PH[activeMag.key],
                    }}
                  />
                  <figcaption>Recent work · selected jobs · the Hamptons</figcaption>
                </figure>
              ) : (
                <div className="mag-duo">
                  <div
                    className="mag-img"
                    style={{ background: activeMag.duoA ? `url(${activeMag.duoA})` : PH[activeMag.key] }}
                  />
                  <div
                    className="mag-img"
                    style={{ background: activeMag.duoB ? `url(${activeMag.duoB})` : PH[activeMag.key] }}
                  />
                </div>
              )}
              <blockquote className="mag-quote">{activeMag.quote}</blockquote>
              <div className="mag-cta">
                <span className="k">Ready when you are</span>
                <a
                  className="btn wa"
                  href="#estimate"
                  onClick={(e) => {
                    e.preventDefault();
                    goToEstimateWith(activeMag.key);
                  }}
                >
                  Get your free estimate &rarr;
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
