export default function FeaturesSection() {
  const features = [{
    title: "Ежедневные выплаты",
    description: "Получайте доход за активность под вашими публикациями",
    icon: "/lovable-uploads/heart.eded9572.png.png" // сердечки
  }, {
    title: "Платные сообщения",
    description: "Продавайте контент в личных сообщениях с фанатами",
    icon: "/lovable-uploads/message.3e710236 1.png.png" // сообщения
  }, {
    title: "Персональные подписки",
    description: "Подключите дополнительный уровень подписок для самой лояльной аудитории",
    icon: "/lovable-uploads/star.f139a2fe 1.png.png" // звезды
  }, {
    title: "Чаевые",
    description: "Получайте донаты в личных сообщениях и на отдельных постах",
    icon: "/lovable-uploads/wallet.43ed0936 1.png.png" // кошелек
  }];
  return <section className="pt-8 pb-20 px-6 features-section-bg">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">Зарегестрируйтесь, чтобы зарабатывать на своем эксклюзивном контенте</h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => <div key={index} className="feature-card-highlighted rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                {/* Feature Icon */}
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-20 h-20 object-contain" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}