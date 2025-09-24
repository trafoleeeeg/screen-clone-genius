export default function FeaturesSection() {
  const features = [
    {
      title: "Ежедневные выплаты",
      description: "Получайте доход за активность под вашими публикациями"
    },
    {
      title: "Платные сообщения", 
      description: "Продавайте контент в личных сообщениях с фанатами"
    },
    {
      title: "Персональные подписки",
      description: "Подключите дополнительный уровень подписок для самой лояльной аудитории"
    },
    {
      title: "Чаевые",
      description: "Получайте донаты в личных сообщениях и на отдельных постах"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Пройдите верификацию, чтобы зарабатывать на своем эксклюзивном контенте
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                {/* Purple Icon Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}