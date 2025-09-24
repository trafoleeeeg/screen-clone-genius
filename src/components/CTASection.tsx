import { Button } from "@/components/ui/button";
import floatingPhotos from "@/assets/floating-photos.png";

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 cta-section-bg overflow-hidden">
      {/* Floating Photos Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={floatingPhotos} 
          alt="Content creators" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Начните зарабатывать сегодня
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Творите без границ, превращая ваш талант в стабильный доход.
          </p>
          <div className="pt-4">
            <Button variant="nav-light" className="text-lg px-10 py-4">
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}