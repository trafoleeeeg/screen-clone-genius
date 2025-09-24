import iconCoins from "@/assets/icon-coins.png";
import iconChat from "@/assets/icon-chat.png";
import iconStar from "@/assets/icon-star.png";
import iconWallet from "@/assets/icon-wallet.png";

export default function FeaturesSection() {
  const features = [
    {
      title: "Ежедневные выплаты",
      description: "Получайте доход за активность под вашими публикациями",
      icon: iconCoins
    },
    {
      title: "Платные сообщения", 
      description: "Продавайте контент в личных сообщениях с фанатами",
      icon: iconChat
    },
    {
      title: "Персональные подписки",
      description: "Подключите дополнительный уровень подписок для самой лояльной аудитории",
      icon: iconStar
    },
    {
      title: "Чаевые",
      description: "Получайте донаты в личных сообщениях и на отдельных постах",
      icon: iconWallet
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Пройдите верификацию, чтобы зарабатывать на своем эксклюзивном контенте
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Feature Icon */}
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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