import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { PanelTop, Layers, TreePine, Wrench } from 'lucide-react';

const categories = [
  {
    name: '墙板',
    icon: PanelTop,
    items: ['实木墙板', '护墙板', '集成墙板'],
    feature: '风格: 格栅/平板/雕花',
  },
  {
    name: '基材类',
    icon: Layers,
    items: ['颗粒板', '欧松板', '密度板'],
    feature: '环保等级: E0/E1/ENF',
  },
  {
    name: '实木类',
    icon: TreePine,
    items: ['橡木', '胡桃木', '樱桃木', '松木'],
    feature: '规格: 直拼/指接/多层',
  },
  {
    name: '五金配件',
    icon: Wrench,
    items: ['铰链', '滑轨', '拉手', '连接件'],
    feature: '品牌: 百隆/海蒂诗/国产优质',
  },
];

export default function MaterialSelection() {
  return (
    <section id="materials" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Material Selection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              材料选配 · <span className="text-wood">自由搭配</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              墙板/基材/实木/五金，随心选
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
