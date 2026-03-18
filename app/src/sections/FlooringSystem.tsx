import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3X3, Flame, Puzzle } from 'lucide-react';

const categories = [
  {
    name: '木地板',
    icon: Grid3X3,
    items: ['实木地板', '实木复合', '强化地板'],
    feature: '花色: 原木色/深色/灰色系',
  },
  {
    name: '地暖地板',
    icon: Flame,
    items: ['导热均匀', '稳定性强'],
    feature: '材质: 专用多层实木',
  },
  {
    name: '地材配件',
    icon: Puzzle,
    items: ['踢脚线', '收口条', '防潮垫'],
    feature: '材质: 实木/PVC/金属',
  },
];

export default function FlooringSystem() {
  return (
    <section id="flooring" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Flooring System
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              地板系统 · <span className="text-wood">脚下的质感</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              从实木到复合，从室内到地暖
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
