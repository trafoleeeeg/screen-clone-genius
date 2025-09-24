import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-4 px-1 sm:px-6 pb-12 cta-section-bg overflow-hidden min-h-[200px] flex items-start justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/54.png.png)'}}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center pt-8">
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-0">
            Начните зарабатывать сегодня
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-0">
            Творите без границ, превращая ваш талант в стабильный доход.
          </p>
          <div className="pt-2">
            <Button 
              variant="default" 
              className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-full"
              onClick={() => window.open('https://ton.place/verification/apply&utm_campaign=models&utm_source=MetaAds&extra_param1=trafolka&extra_param2=apply', '_blank')}
            >
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}