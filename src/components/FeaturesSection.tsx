export default function FeaturesSection() {
  const features = [{
    title: "Ежедневные выплаты",
    description: "Получайте доход за активность под вашими публикациями",
    icon: "/lovable-uploads/heart-icon.png" // сердечки
  }, {
    title: "Платные сообщения", 
    description: "Продавайте контент в личных сообщениях с фанатами",
    icon: "/lovable-uploads/chat-icon.png" // сообщения
  }, {
    title: "Персональные подписки",
    description: "Подключите дополнительный уровень подписок для самой лояльной аудитории", 
    icon: "/lovable-uploads/star-icon.png" // звезды
  }, {
    title: "Чаевые",
    description: "Получайте донаты в личных сообщениях и на отдельных постах",
    icon: "/lovable-uploads/wallet-icon.png" // кошелек
  }];
  return <section className="pt-2 pb-20 px-2.5 sm:px-6 features-section-bg">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto px-0">Зарегестрируйтесь, чтобы зарабатывать на своем эксклюзивном контенте</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto px-0">
          {features.map((feature, index) => <div key={index} className="feature-card-highlighted rounded-2xl md:rounded-3xl p-4 md:p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 md:gap-6">
                {/* Feature Icon */}
                <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 md:w-20 md:h-20 object-contain" />
                </div>
                
                {/* Content */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}