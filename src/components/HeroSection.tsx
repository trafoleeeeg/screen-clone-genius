import { Button } from "@/components/ui/button";
import heroDiamond from "@/assets/hero-diamond-new.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-[#161C28]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Платформа для создателей контента и фанатов
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Ton.Place объединяет авторов и аудитории, превращая контент в доход.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero-primary"
                className="text-sm sm:text-base md:text-lg"
                onClick={() => window.open('https://ton.place/verification/apply&utm_campaign=models&utm_source=MetaAds&extra_param1=trafolka&extra_param2=apply', '_blank')}
              >
                Создать аккаунт
              </Button>
              <Button 
                variant="hero-secondary"
                className="text-sm sm:text-base md:text-lg"
                onClick={() => window.open('https://ton.place/verification/apply&utm_campaign=models&utm_source=MetaAds&extra_param1=trafolka&extra_param2=apply', '_blank')}
              >
                Войти
              </Button>
            </div>
          </div>

          {/* Diamond Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={heroDiamond} 
                alt="Diamond Illustration" 
                className="w-52 h-52 lg:w-64 lg:h-64 object-contain animate-diamond-sway"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}