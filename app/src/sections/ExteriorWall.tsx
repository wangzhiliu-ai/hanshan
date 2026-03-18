import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { PanelsTopLeft, Thermometer, PaintBucket, BrickWall } from 'lucide-react';

const categories = [
  {
    name: '外墙装饰板',
    icon: PanelsTopLeft,
    items: ['金属板', '水泥板', '木纹板'],
    feature: '特性: 耐候/抗污/易安装',
  },
  {
    name: '保温材料',
    icon: Thermometer,
    items: ['岩棉', '挤塑板', '聚氨酯'],
    feature: '防火等级: A级/B1级',
  },
  {
    name: '外墙涂料',
    icon: PaintBucket,
    items: ['真石漆', '仿石漆', '艺术涂料'],
    feature: '效果: 花岗岩/砂岩/洞石',
  },
  {
    name: '石材/砖饰',
    icon: BrickWall,
    items: ['干挂石材', '文化砖', '仿古砖'],
    feature: '风格: 现代/中式/欧式',
  },
];

export default function ExteriorWall() {
  return (
    <section id="exterior-wall" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Exterior Wall System
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              外墙系统 · <span className="text-wood">建筑外立面整体解决方案</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              为别墅、自建房及旧改项目提供系统化服务
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
