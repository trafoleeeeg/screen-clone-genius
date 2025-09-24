import { Button } from "@/components/ui/button";
import diamondLogo from "@/assets/diamond-logo-new.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#161C28]/90 border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={diamondLogo} alt="Ton.Place Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Ton.Place</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              className="rounded-full"
              onClick={() => window.open('https://ton.place/verification/apply&utm_campaign=models&utm_source=MetaAds&extra_param1=trafolka&extra_param2=apply', '_blank')}
            >
              Создать аккаунт
            </Button>
            <Button 
              variant="nav-dark"
              onClick={() => window.open('https://ton.place/verification/apply&utm_campaign=models&utm_source=MetaAds&extra_param1=trafolka&extra_param2=apply', '_blank')}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}