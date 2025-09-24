import { Button } from "@/components/ui/button";
import heroDiamond from "@/assets/hero-diamond-new.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Платформа для создателей контента и фанатов
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Ton.Place объединяет авторов и аудитории, превращая контент в доход.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-primary">
                Создать аккаунт
              </Button>
              <Button variant="hero-secondary">
                Войти
              </Button>
            </div>
          </div>

          {/* Diamond Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroDiamond} 
                alt="Diamond Illustration" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}