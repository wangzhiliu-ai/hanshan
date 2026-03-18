import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { DoorOpen, PanelTop, TreePine, Layers } from 'lucide-react';

const categories = [
  {
    name: '衣柜/立柜',
    icon: DoorOpen,
    items: ['步入式衣柜', '推拉门衣柜', '组合柜'],
    material: '材质: 实木/颗粒板/三聚氰胺板',
  },
  {
    name: '木作定制',
    icon: PanelTop,
    items: ['护墙板', '背景墙', '定制书柜'],
    material: '风格: 现代/轻奢/工业风',
  },
  {
    name: '实木类',
    icon: TreePine,
    items: ['纯实木家具', '实木复合'],
    material: '木材: 橡木/胡桃木/樱桃木',
  },
  {
    name: '基材类',
    icon: Layers,
    items: ['柜体板', '背板', '层板'],
    material: '规格: 18mm/25mm定制',
  },
];

export default function CustomFurniture() {
  return (
    <section id="custom-furniture" className="bg-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Custom Furniture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              全屋定制 · <span className="text-wood">空间整体解决方案</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              衣柜/书柜/榻榻米/木作，量身打造
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
                    <p className="text-wood text-sm">{category.material}</p>
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
