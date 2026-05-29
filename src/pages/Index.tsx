import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "MessageCircle",
    title: "Индивидуальная терапия",
    desc: "Личные сессии один на один в безопасном пространстве",
  },
  {
    icon: "Users",
    title: "Семейная терапия",
    desc: "Работа с отношениями и семейной динамикой",
  },
  {
    icon: "Heart",
    title: "Поддержка в кризисе",
    desc: "Экстренная помощь и стабилизация состояния",
  },
  {
    icon: "Leaf",
    title: "Снижение тревоги",
    desc: "Техники осознанности и работа с тревожными состояниями",
  },
  {
    icon: "Moon",
    title: "Работа с травмой",
    desc: "Мягкий подход к проработке прошлого опыта",
  },
  {
    icon: "Star",
    title: "Личностный рост",
    desc: "Развитие самопонимания и жизненных ориентиров",
  },
]

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <Navbar />

      {/* WebGL Background */}
      <div className="fixed inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={["#051137", "#071a4f", "#0a2266", "#0d2d85", "#071a4f"]}
          angle={20}
          noise={0.18}
          blindCount={10}
          blindMinWidth={60}
          spotlightRadius={0.4}
          spotlightSoftness={2.0}
          spotlightOpacity={0.3}
          mouseDampening={0.08}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      {/* Abstract decorative circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-20%",
            right: "-15%",
            background: "radial-gradient(circle, rgba(90,180,224,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: "5%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(90,180,224,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Thin abstract lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="60%" stroke="rgba(90,180,224,0.3)" strokeWidth="0.5" />
          <line x1="0" y1="70%" x2="100%" y2="40%" stroke="rgba(90,180,224,0.2)" strokeWidth="0.5" />
          <circle cx="75%" cy="20%" r="120" fill="none" stroke="rgba(90,180,224,0.15)" strokeWidth="0.5" />
          <circle cx="75%" cy="20%" r="200" fill="none" stroke="rgba(90,180,224,0.08)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center pt-28 pb-12 px-5">
          <div className="max-w-2xl w-full flex flex-col items-center text-center gap-5">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: "rgba(90,180,224,0.08)", border: "1px solid rgba(90,180,224,0.2)", color: "var(--neon-cyan)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Онлайн · Конфиденциально
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl font-light leading-tight tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Пространство для
              <br />
              <span
                className="font-semibold neon-glow"
                style={{ color: "var(--neon-cyan)" }}
              >
                внутреннего баланса
              </span>
            </h1>

            <p className="text-base font-light max-w-md leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Профессиональная психологическая помощь в удобном формате.
              Выберите направление работы и запишитесь на первую сессию.
            </p>

            {/* CTA */}
            <button
              className="btn-primary mt-2 px-8 py-3 text-sm font-medium tracking-wide"
            >
              Записаться на приём
            </button>
          </div>

          {/* Services grid */}
          <div className="max-w-3xl w-full mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <button
                key={service.title}
                className="card-glass rounded-2xl p-5 text-left flex flex-col gap-3 group transition-all duration-200 hover:border-[rgba(90,180,224,0.3)] cursor-pointer"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: "rgba(90,180,224,0.1)", border: "1px solid rgba(90,180,224,0.2)" }}
                >
                  <Icon
                    name={service.icon}
                    size={18}
                    className="neon-icon-glow transition-all"
                    style={{ color: "var(--neon-cyan)" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {service.title}
                  </span>
                  <span className="text-xs font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {service.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-xs font-light tracking-wide" style={{ color: "rgba(180,200,240,0.35)" }}>
            Все данные защищены · Строгая конфиденциальность · Лицензированный специалист
          </p>
        </div>
      </div>
    </main>
  )
}