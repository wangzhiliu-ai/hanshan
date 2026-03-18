import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Refrigerator, CookingPot, Home } from 'lucide-react';

const categories = [
  {
    name: '大家电',
    icon: Refrigerator,
    items: ['冰箱', '洗衣机', '电视', '空调'],
    feature: '品牌合作: 一线品牌直供',
  },
  {
    name: '厨房电器',
    icon: CookingPot,
    items: ['烟机', '灶具', '烤箱', '洗碗机'],
    feature: '嵌入式设计',
  },
  {
    name: '智能家居',
    icon: Home,
    items: ['智能灯光', '窗帘', '安防', '中控'],
    feature: '支持: 米家/华为鸿蒙',
  },
];

export default function HomeAppliances() {
  return (
    <section id="appliances" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Home Appliances
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              家电系统 · <span className="text-wood">智慧生活</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              大家电+厨房电器+智能家居
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.name} delay={index * 0.1}>
                <Card className="bg-dark-light border border-white/10 card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-wood/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-wood" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-dark-lighter text-white/70 text-sm rounded-full"
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
