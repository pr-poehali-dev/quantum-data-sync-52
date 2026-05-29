import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2 border-white/10 shadow-lg" : "max-w-5xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          background: isScrolled ? "rgba(5, 17, 55, 0.85)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a className={`z-50 flex items-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""}`} href="/">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(90, 180, 224, 0.12)", border: "1px solid rgba(90, 180, 224, 0.3)" }}
            >
              <Icon name="Brain" size={16} className="neon-icon-glow" style={{ color: "var(--neon-cyan)" }} />
            </div>
            <span className="text-white font-medium text-base tracking-wide">Психолог онлайн</span>
          </div>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 md:flex">
          {["О приёме", "Услуги", "Стоимость", "Контакты"].map((item) => (
            <a
              key={item}
              className="px-4 py-2 text-sm font-normal transition-colors cursor-pointer rounded-full"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="btn-primary px-5 py-2 text-sm font-medium"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300"
        style={{
          background: "rgba(5, 17, 55, 0.85)",
          border: "1px solid rgba(90, 180, 224, 0.15)",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center gap-2" href="/">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(90, 180, 224, 0.12)", border: "1px solid rgba(90, 180, 224, 0.3)" }}
          >
            <Icon name="Brain" size={16} className="neon-icon-glow" style={{ color: "var(--neon-cyan)" }} />
          </div>
          <span className="text-white font-medium text-sm">Психолог онлайн</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          style={{ border: "1px solid rgba(90, 180, 224, 0.2)", background: "rgba(90, 180, 224, 0.05)" }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span className={`block w-4 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden" style={{ background: "rgba(5, 17, 55, 0.7)", backdropFilter: "blur(8px)" }}>
          <div
            className="absolute top-24 left-4 right-4 rounded-2xl p-6"
            style={{ background: "rgba(8, 22, 65, 0.95)", border: "1px solid rgba(90, 180, 224, 0.2)" }}
          >
            <nav className="flex flex-col space-y-1">
              {["О приёме", "Услуги", "Стоимость", "Контакты"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-normal rounded-xl transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 mt-2" style={{ borderTop: "1px solid rgba(90, 180, 224, 0.1)" }}>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-base font-medium rounded-full btn-primary"
                >
                  Записаться на приём
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
