import diamondLogo from "@/assets/diamond-logo.png";

export default function Footer() {
  const footerLinks = [
    { label: "ANTI-TRAFFICKING STATEMENT", href: "#" },
    { label: "Пользовательское соглашение", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Поддержка", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={diamondLogo} alt="Ton.Place Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Ton.Place</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}