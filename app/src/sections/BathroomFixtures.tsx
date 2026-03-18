import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { User, UserRound, Box, ShowerHead } from 'lucide-react';

const categories = [
  {
    name: '洁具（男款）',
    icon: User,
    items: ['男士专用马桶', '小便斗', '男士台盆'],
    feature: '设计: 符合人体工学',
  },
  {
    name: '洁具（女款）',
    icon: UserRound,
    items: ['女士专用马桶', '妇洗器', '化妆台盆'],
    feature: '设计: 贴心细节',
  },
  {
    name: '浴室柜/镜柜',
    icon: Box,
    items: ['实木', '多层板', 'PVC'],
    feature: '风格: 现代/轻奢/极简',
  },
  {
    name: '淋浴房/五金',
    icon: ShowerHead,
    items: ['淋浴隔断', '花洒', '龙头', '挂件'],
    feature: '材质: 不锈钢/铜/铝合金',
  },
];

export default function BathroomFixtures() {
  return (
    <section id="bathroom" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Bathroom Fixtures
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              洁具卫浴 · <span className="text-wood">私享空间</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              人性化设计，男女款细分
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.name} delay={index * 0.1}>
                <Card className="bg-white border-0 shadow-card card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-wood/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-wood" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-secondary text-dark/70 text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-wood text-sm">{category.feature}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
