import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Database,
  Info,
  Landmark,
  Languages,
  Mail,
  Menu,
  Phone,
  PhoneCall,
  ShieldCheck,
  Sprout,
  UserRound,
  Zap,
  X,
} from "lucide-react";

import headerVideo from "../Header/header-loop.mp4";
import logoFull from "../Header/logo.png";
import logoMark from "../Header/logo1.png";
import showcaseOne from "../Header/1.jpg";
import showcaseTwo from "../Header/2.jpg";
import showcaseThree from "../Header/3.jpg";
import showcaseFour from "../Header/4.jpg";
import showcaseFive from "../Header/5.jpg";
import showcaseSix from "../Header/6.jpg";
import showcaseSeven from "../Header/7.jpg";
import showcaseEight from "../Header/8.jpg";
import renewableImage from "../Header/Erneuerbare Energien.jpg";
import storageImage from "../Header/Speicherkraftwerke.jpg";
import balancingImage from "../Header/Bilanzkreise.jpg";
import dataCenterImage from "../Header/Data-Center .jpg";

const HERO_VIDEO_SRC = headerVideo;

const projects = [
  {
    icon: Sprout,
    image: renewableImage,
    title: "Renewable Energy",
    text: "Sustainable path to CO2 neutrality",
  },
  {
    icon: Zap,
    image: storageImage,
    title: "Storage Power Plants",
    text: "Industrial power solutions",
  },
  {
    icon: ShieldCheck,
    image: balancingImage,
    title: "Balancing Groups",
    text: "Foundation of the energy economy",
  },
  {
    icon: Database,
    image: dataCenterImage,
    title: "Data Centers",
    text: "Top-level data center infrastructure",
  },
];

const showcaseItems = [
  {
    image: showcaseOne,
    variant: "wide tall",
    title: "Investment expertise",
    text: "Proven operational insight for high-quality projects.",
  },
  {
    image: showcaseTwo,
    variant: "compact",
    title: "Global perspective",
    text: "Scale, expertise, and global reach for every group.",
  },
  {
    image: showcaseThree,
    variant: "compact",
    title: "Swiss management",
    text: "A clear management system at the heart of the company.",
  },
  {
    image: showcaseFour,
    variant: "wide",
    title: "Operational excellence",
    text: "Structured expertise for resilient execution.",
  },
  {
    image: showcaseFive,
    variant: "compact",
    title: "Long-term focus",
    text: "Built for sustainable value creation.",
  },
  {
    image: showcaseSix,
    variant: "compact",
    title: "Partner network",
    text: "Reliable collaboration across important markets.",
  },
  {
    image: showcaseSeven,
    variant: "tall",
    title: "Future projects",
    text: "High-quality opportunities with clear direction.",
  },
  {
    image: showcaseEight,
    variant: "compact",
    title: "ECO-PARK system",
    text: "A management system at the center of every project.",
  },
];

const team = [
  { name: "Werner Maier", role: "CEO", initials: "WM" },
  { name: "Martin Röthlisberger", role: "CFO", initials: "MR" },
  { name: "Detlef Kling", role: "CRO", initials: "DK" },
  { name: "Kai-Uwe Hartfiel", role: "CJO", initials: "KH" },
];

const steps = [
  {
    number: "01",
    title: "Explore opportunities",
    text: "We present all possibilities for your project.",
  },
  {
    number: "02",
    title: "Choose the ideal solution",
    text: "Evaluate our risk and profitability analysis and make your decision!",
  },
  {
    number: "03",
    title: "Implement desired projects",
    text: "Put your project into action!",
  },
];

const portfolioLinks = [
  "Renewable Energy",
  "Battery Power Plants",
  "Balancing Groups",
  "Data Centers",
];

const partnerLinks = ["WUMM", "Excello Battery Power Plants", "IKEM"];

const navGroups = [
  {
    label: "Portfolio",
    items: portfolioLinks.map((item) => ({ label: item, href: "#portfolio" })),
  },
  {
    label: "Partner",
    items: partnerLinks.map((item) => ({ label: item, href: "#partners" })),
  },
  {
    label: "About",
    items: [
      { label: "Company", href: "#company" },
      { label: "Contact", href: "#contact" },
      { label: "Imprint", href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
    ],
  },
];

const categories = [
  { value: 130, prefix: "+", label: "Projects" },
  { value: 75, prefix: "+", label: "Customers" },
  { value: 7, prefix: "", label: "Partners" },
  { value: 6, prefix: "+", label: "Countries" },
];

const localizedContent = {
  EN: {
    portfolioLinks,
    partnerLinks,
    aboutLinks: ["Company", "Contact", "Imprint", "Privacy Policy"],
    navLabels: { portfolio: "Portfolio", partner: "Partner", about: "About" },
    categories,
    projects,
    showcaseItems,
    steps,
    hero: {
      title: "WE INVEST IN",
      accent: " THE FUTURE",
      text: "We support high-quality projects, always at the side of our customers and partners!",
    },
    intro: {
      kicker: "One step ahead",
      title: "Why we are better",
      text: "We are a leading global investment company that invests on behalf of institutions and private individuals around the world. Our success is based on our proven investment and operational expertise - and at the heart of it all is the ECO-PARK management system. The insights we gain from our scale, expertise, and global reach enable every group within ECO-PARK to benefit from being part of the whole.",
    },
    showcaseHeading: {
      kicker: "Company showcase",
      title: "Built around proven investment and operational expertise.",
    },
    servicesHeading: {
      kicker: "DISCOVER WHAT WE DO BETTER",
      title: "Working with ECO-PARK means becoming part of a results-oriented team.",
      label: "Projects",
    },
    team: { kicker: "Our", title: "TEAM", more: "MORE" },
    approach: {
      kicker: "3 steps to success",
      title: "We support you along the way",
      text: "We accompany you with every question throughout the process",
      learnMore: "Learn more",
    },
    contact: {
      kicker: "Contact",
      title: "International presence",
      text: "Established international offices enable us to invest where attractive opportunities arise. Our local presence in important locations around the world gives us knowledge of local market conditions and trends. This enables rapid scaling to put our investment ideas into action.",
      company: "ECO-PARK Management AG - Switzerland",
      country: "Switzerland",
    },
    form: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Tell Us More",
      send: "Send",
    },
    footer: {
      portfolio: "PORTFOLIO",
      partner: "PARTNER",
      about: "ABOUT",
      rights: "© 2025 All rights reserved",
    },
  },
  DE: {
    portfolioLinks: [
      "Erneuerbare Energien",
      "Batteriespeicherkraftwerke",
      "Ausgleichsenergie",
      "Rechenzentren",
    ],
    partnerLinks: ["WUMM", "Excello Batteriespeicherkraftwerke", "IKEM"],
    aboutLinks: ["Unternehmen", "Kontakt", "Impressum", "Datenschutz"],
    navLabels: { portfolio: "Portfolio", partner: "Partner", about: "Über uns" },
    categories: [
      { value: 130, prefix: "+", label: "Projekte" },
      { value: 75, prefix: "+", label: "Kunden" },
      { value: 7, prefix: "", label: "Partner" },
      { value: 6, prefix: "+", label: "Länder" },
    ],
    projects: [
      {
        icon: Sprout,
        image: renewableImage,
        title: "Erneuerbare Energien",
        text: "Nachhaltiger Weg zur CO2-Neutralität",
      },
      {
        icon: Zap,
        image: storageImage,
        title: "Speicherkraftwerke",
        text: "Industrielle Energielösungen",
      },
      {
        icon: ShieldCheck,
        image: balancingImage,
        title: "Ausgleichsenergie",
        text: "Basis einer stabilen Energiewirtschaft",
      },
      {
        icon: Database,
        image: dataCenterImage,
        title: "Rechenzentren",
        text: "Rechenzentrumsinfrastruktur auf höchstem Niveau",
      },
    ],
    showcaseItems: [
      {
        image: showcaseOne,
        variant: "wide tall",
        title: "Anlagekompetenz",
        text: "Langjährige Erfahrung und fundiertes Wissen für erstklassige Investitionen.",
      },
      {
        image: showcaseTwo,
        variant: "compact",
        title: "Globale Stärke",
        text: "Internationale Reichweite und umfassendes Fachwissen für jeden unserer Bereiche.",
      },
      {
        image: showcaseThree,
        variant: "compact",
        title: "Schweizer Management",
        text: "Das ECO-PARK-System als verlässliches Herzstück unseres gesamten Handelns.",
      },
      {
        image: showcaseFour,
        variant: "wide",
        title: "Operative Exzellenz",
        text: "Strukturierte und sichere Abläufe für die erfolgreiche Umsetzung vor Ort.",
      },
      {
        image: showcaseFive,
        variant: "compact",
        title: "Langfristiger Fokus",
        text: "Gezielte Ausrichtung auf nachhaltige und beständige Wertschöpfung.",
      },
      {
        image: showcaseSix,
        variant: "compact",
        title: "Partnernetzwerk",
        text: "Verlässliche und gewinnbringende Zusammenarbeit in allen wichtigen Märkten.",
      },
      {
        image: showcaseSeven,
        variant: "tall",
        title: "Zukunftsprojekte",
        text: "Hochwertige Chancen durch klare strategische Ausrichtung.",
      },
      {
        image: showcaseEight,
        variant: "compact",
        title: "ECO-PARK-Standard",
        text: "Unsere bewährte Methode als Fundament für jedes einzelne Projekt.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Möglichkeiten erkunden",
        text: "Wir präsentieren alle Möglichkeiten für Ihr Projekt.",
      },
      {
        number: "02",
        title: "Die ideale Lösung wählen",
        text: "Bewerten Sie unsere Risiko- und Rentabilitätsanalyse und treffen Sie Ihre Entscheidung!",
      },
      {
        number: "03",
        title: "Gewünschte Projekte umsetzen",
        text: "Bringen Sie Ihr Projekt in die Umsetzung!",
      },
    ],
    hero: {
      title: "WIR INVESTIEREN IN",
      accent: " DIE ZUKUNFT",
      text: "Wir unterstützen hochwertige Projekte und stehen unseren Kunden und Partnern jederzeit zur Seite!",
    },
    intro: {
      kicker: "Einen Schritt voraus",
      title: "Warum wir besser sind",
      text: "Wir sind eine führende globale Investmentgesellschaft, die im Auftrag von Institutionen und Privatpersonen weltweit investiert. Unser Erfolg basiert auf unserer bewährten Investment- und operativen Expertise - und im Zentrum steht das ECO-PARK Managementsystem. Die Erkenntnisse aus unserer Größe, Expertise und globalen Reichweite ermöglichen jeder Gruppe innerhalb von ECO-PARK, vom Ganzen zu profitieren.",
    },
    showcaseHeading: {
      kicker: "Unternehmensprofil",
      title: "Gebaut auf bewährter Anlagekompetenz und exzellentem Management.",
    },
    servicesHeading: {
      kicker: "ENTDECKEN SIE, WAS WIR BESSER MACHEN",
      title: "Mit ECO-PARK zu arbeiten bedeutet, Teil eines ergebnisorientierten Teams zu werden.",
      label: "Projekte",
    },
    team: { kicker: "Unser", title: "TEAM", more: "MEHR" },
    approach: {
      kicker: "3 Schritte zum Erfolg",
      title: "Wir begleiten Sie auf dem Weg",
      text: "Wir begleiten Sie bei jeder Frage während des gesamten Prozesses",
      learnMore: "Mehr erfahren",
    },
    contact: {
      kicker: "Kontakt",
      title: "Internationale Präsenz",
      text: "Etablierte internationale Standorte ermöglichen es uns, dort zu investieren, wo attraktive Chancen entstehen. Unsere lokale Präsenz an wichtigen Standorten weltweit gibt uns Wissen über lokale Marktbedingungen und Trends. Dies ermöglicht eine schnelle Skalierung, um unsere Investmentideen umzusetzen.",
      company: "ECO-PARK Management AG - Schweiz",
      country: "Schweiz",
    },
    form: {
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      subject: "Betreff",
      message: "Erzählen Sie uns mehr",
      send: "Senden",
    },
    footer: {
      portfolio: "PORTFOLIO",
      partner: "PARTNER",
      about: "ÜBER UNS",
      rights: "© 2025 Alle Rechte vorbehalten",
    },
  },
};

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({ value, prefix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1100;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <strong>
      {prefix}
      {count}
    </strong>
  );
}

function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
}

const HeroVideo = React.memo(function HeroVideo() {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const activeIndexRef = useRef(0);
  const frameRef = useRef();
  const transitionTimeoutRef = useRef();
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const videos = [firstVideoRef.current, secondVideoRef.current];
    const crossfadeLeadTime = 1.6;
    const crossfadeDuration = 1500;

    const resetVideo = (video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    };

    const startTransition = () => {
      if (isTransitioningRef.current) return;

      const activeIndex = activeIndexRef.current;
      const nextIndex = activeIndex === 0 ? 1 : 0;
      const activeVideo = videos[activeIndex];
      const nextVideo = videos[nextIndex];

      if (!activeVideo || !nextVideo) return;

      isTransitioningRef.current = true;
      nextVideo.currentTime = 0;
      nextVideo
        .play()
        .then(() => {
          nextVideo.classList.add("is-active");
          activeVideo.classList.remove("is-active");

          transitionTimeoutRef.current = window.setTimeout(() => {
            resetVideo(activeVideo);
            activeIndexRef.current = nextIndex;
            isTransitioningRef.current = false;
          }, crossfadeDuration);
        })
        .catch(() => {
          activeVideo.classList.add("is-active");
          nextVideo.classList.remove("is-active");
          isTransitioningRef.current = false;
        });
    };

    const monitorPlayback = () => {
      const activeVideo = videos[activeIndexRef.current];

      if (
        activeVideo?.duration &&
        activeVideo.currentTime >= activeVideo.duration - crossfadeLeadTime
      ) {
        startTransition();
      }

      frameRef.current = requestAnimationFrame(monitorPlayback);
    };

    firstVideoRef.current?.play().catch(() => {});
    frameRef.current = requestAnimationFrame(monitorPlayback);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.clearTimeout(transitionTimeoutRef.current);
      videos.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <div className="hero-video-wrap" aria-hidden="true">
      <video
        ref={firstVideoRef}
        className="hero-video is-active"
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={secondVideoRef}
        className="hero-video"
        src={HERO_VIDEO_SRC}
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
});

function App() {
  useSmoothScroll();
  const serviceTrackRef = useRef(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("DE");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = localizedContent[activeLanguage];
  const navGroups = [
    {
      label: t.navLabels.portfolio,
      items: t.portfolioLinks.map((item) => ({ label: item, href: "#portfolio" })),
    },
    {
      label: t.navLabels.partner,
      items: t.partnerLinks.map((item) => ({ label: item, href: "#partners" })),
    },
    {
      label: t.navLabels.about,
      items: t.aboutLinks.map((item) => ({
        label: item,
        href: item === t.aboutLinks[0] ? "#company" : "#contact",
      })),
    },
  ];

  useEffect(() => {
    const updateNavState = () => {
      setIsNavScrolled(window.scrollY > 12);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = activeLanguage === "DE" ? "de" : "en";
  }, [activeLanguage]);

  useEffect(() => {
    const closeMobileMenu = () => {
      if (window.innerWidth > 980) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMobileMenu);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);

  useEffect(() => {
    let removeSliderListeners = () => {};

    const context = gsap.context(() => {
      const slider = gsap.to(".service-track", {
        xPercent: -50,
        duration: 24,
        ease: "none",
        repeat: -1,
      });

      gsap.from(".service-slider", {
        autoAlpha: 0,
        y: 70,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".team-grid article", {
        autoAlpha: 0,
        y: 56,
        scale: 0.92,
        duration: 0.82,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".showcase-card", {
        autoAlpha: 0,
        y: 64,
        scale: 0.94,
        duration: 0.86,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".company-showcase-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".approach-copy > *, .process-panel", {
        autoAlpha: 0,
        y: 54,
        duration: 0.86,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".approach-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      const track = serviceTrackRef.current;
      const pause = () => slider.pause();
      const play = () => slider.play();

      track?.addEventListener("mouseenter", pause);
      track?.addEventListener("mouseleave", play);
      track?.addEventListener("touchstart", pause, { passive: true });
      track?.addEventListener("touchend", play);

      removeSliderListeners = () => {
        track?.removeEventListener("mouseenter", pause);
        track?.removeEventListener("mouseleave", play);
        track?.removeEventListener("touchstart", pause);
        track?.removeEventListener("touchend", play);
      };
    });

    return () => {
      removeSliderListeners();
      context.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".topbar", {
          autoAlpha: 0,
          y: -32,
          duration: 0.85,
        })
        .from(
          ".hero-overlay",
          {
            autoAlpha: 0,
            duration: 1.1,
          },
          0
        )
        .from(
          ".hero .eyebrow",
          {
            autoAlpha: 0,
            y: 26,
            duration: 0.72,
          },
          "-=0.52"
        )
        .from(
          ".hero h1, .hero p",
          {
            autoAlpha: 0,
            y: 44,
            duration: 0.86,
            stagger: 0.16,
          },
          "-=0.34"
        )
        .from(
          ".fixed-rail",
          {
            autoAlpha: 0,
            x: 36,
            duration: 0.68,
          },
          "-=0.42"
        )
        .from(
          ".category-item",
          {
            autoAlpha: 0,
            y: 46,
            scale: 0.9,
            duration: 0.72,
            stagger: 0.1,
          },
          "-=0.28"
        );

      gsap.to(".hero-video-wrap", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <header className={`topbar${isNavScrolled ? " is-scrolled" : ""}${isMobileMenuOpen ? " is-menu-open" : ""}`}>
        <a className="brand brand-overlay" href="#home" aria-label="ECO-PARK home">
          <img className="navbar-logo" src={logoFull} alt="ECO-PARK Management AG" />
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className="nav-links" aria-label={activeLanguage === "DE" ? "Hauptnavigation" : "Primary navigation"}>
          {navGroups.map((group) => (
            <div className="nav-item" key={group.label}>
              <button className="nav-trigger" type="button">
                {group.label}
                <ChevronDown size={15} strokeWidth={2.4} />
              </button>
              <div className="nav-menu">
                {group.items.map((item) => (
                  <a href={item.href} key={item.label} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="language-switch" aria-label={activeLanguage === "DE" ? "Sprachauswahl" : "Language switcher"}>
            <Languages size={16} />
            {["EN", "DE"].map((language) => (
              <button
                className={activeLanguage === language ? "is-active" : ""}
                type="button"
                key={language}
                aria-pressed={activeLanguage === language}
                onClick={() => {
                  setActiveLanguage(language);
                  setIsMobileMenuOpen(false);
                }}
              >
                {language}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <aside className="fixed-rail" aria-label={activeLanguage === "DE" ? "Schnellzugriff" : "Quick actions"}>
        <a href="#company" aria-label={activeLanguage === "DE" ? "Unternehmensinformationen" : "Company information"}>
          <Info size={22} />
        </a>
        <a href="#partners" aria-label={activeLanguage === "DE" ? "Team und Partner" : "Team and partners"}>
          <UserRound size={22} />
        </a>
        <a href="#contact" aria-label={activeLanguage === "DE" ? "ECO-PARK kontaktieren" : "Contact ECO-PARK"}>
          <PhoneCall size={22} />
        </a>
      </aside>

      <main id="home">
        <section className="hero">
          <HeroVideo />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow">
              <Landmark size={18} />
              ECO-PARK Management AG
            </div>
            <h1>
              {t.hero.title}
              <span>{t.hero.accent}</span>
            </h1>
            <p>{t.hero.text}</p>
          </div>
        </section>

        <section className="category-band" aria-label={activeLanguage === "DE" ? "ECO-PARK Kategorien" : "ECO-PARK categories"}>
          {t.categories.map((item) => (
            <div className="category-item" key={item.label}>
              <AnimatedNumber value={item.value} prefix={item.prefix} />
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="intro-section" id="company">
          <div>
            <span className="section-kicker">{t.intro.kicker}</span>
            <h2>{t.intro.title}</h2>
          </div>
          <p>{t.intro.text}</p>
        </section>

        <section className="company-showcase-section" id="showcase">
          <div className="section-heading">
            <span className="section-kicker">{t.showcaseHeading.kicker}</span>
            <h2>{t.showcaseHeading.title}</h2>
          </div>
          <div className="showcase-grid">
            {t.showcaseItems.map((item) => (
              <article className={`showcase-card ${item.variant}`} key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="portfolio">
          <div className="section-heading">
            <span className="section-kicker">
              {t.servicesHeading.kicker}
            </span>
            <h2>{t.servicesHeading.title}</h2>
            <p className="projects-label">{t.servicesHeading.label}</p>
          </div>
          <div className="service-slider">
            <div className="service-track" ref={serviceTrackRef}>
              {[...t.projects, ...t.projects].map(({ icon: Icon, image, title, text }, index) => (
                <article
                  className="service-card"
                  key={`${title}-${index}`}
                  aria-hidden={index >= t.projects.length}
                >
                  <div className="service-card-media" aria-hidden="true">
                    <img src={image} alt="" />
                    <span>
                      <Icon size={24} />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section" id="partners">
          <div className="section-heading">
            <span className="section-kicker">{t.team.kicker}</span>
            <h2>{t.team.title}</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name}>
                <div className="team-photo-slot" aria-hidden="true">
                  <span>{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
          <a className="inline-more" href="#contact">
            {t.team.more} <ArrowRight size={22} />
          </a>
        </section>

        <section className="approach-section" id="process">
          <div className="approach-copy">
            <span className="section-kicker">{t.approach.kicker}</span>
            <h2>{t.approach.title}</h2>
            <p>{t.approach.text}</p>
            <div className="pillars">
              {t.portfolioLinks.map((item) => (
                <span key={item}>
                  <Check size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="process-panel">
            <div className="panel-topline">
              <BarChart3 size={22} />
              {t.approach.learnMore}
            </div>
            {t.steps.map((step) => (
              <div className="process-step" key={step.number}>
                <strong>{step.number}</strong>
                <span>
                  <b>{step.title}</b>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">{t.contact.kicker}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <address>
              <Building2 size={22} />
              <span>
                {t.contact.company}
                <br />
                Weinbergstr. 8
                <br />
                CH-8807 Freienbach
                <br />
                {t.contact.country}
              </span>
            </address>
            <div className="contact-lines">
              <span>
                <Mail size={18} />
                info@ecopark.one
              </span>
              <span>
                <Phone size={18} />
                +41 (0) 78 899 6 19
              </span>
            </div>
          </div>
          <form className="contact-form">
            <label>
              {t.form.name}
              <input type="text" name="name" />
            </label>
            <label>
              {t.form.email}
              <input type="email" name="email" />
            </label>
            <label>
              {t.form.phone}
              <input type="tel" name="phone" />
            </label>
            <label>
              {t.form.subject}
              <input type="text" name="subject" />
            </label>
            <label>
              {t.form.message}
              <textarea name="message" rows="5" />
            </label>
            <button type="button">{t.form.send}</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src={logoMark} alt="" />
          </span>
          <div>
            <strong>ECO-PARK</strong>
            <span>Management AG</span>
          </div>
        </div>
        <div>
          <strong>{t.footer.portfolio}</strong>
          <ul className="footer-list">
            {t.portfolioLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{t.footer.partner}</strong>
          <ul className="footer-list">
            {t.partnerLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{t.footer.about}</strong>
          <ul className="footer-list">
            {t.aboutLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  );
}

export default App;
