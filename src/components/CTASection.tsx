import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-4 px-6 pb-12 cta-section-bg overflow-hidden min-h-[200px] flex items-start justify-center">
      {/* Floating Photos Background */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/54.png.png" 
          alt="Content creators" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center pt-8">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Начните зарабатывать сегодня
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Творите без границ, превращая ваш талант в стабильный доход.
          </p>
          <div className="pt-2">
            <Button 
              variant="default" 
              className="text-lg px-8 py-3 rounded-full"
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