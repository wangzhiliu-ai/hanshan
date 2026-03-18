import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Sofa, CircleDot, BedDouble, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    name: '沙发',
    icon: Sofa,
    items: ['皮艺', '布艺', '功能沙发'],
    style: '风格: 现代/意式/工业风',
  },
  {
    name: '软垫/靠垫',
    icon: CircleDot,
    items: ['坐垫', '抱枕', '腰靠'],
    style: '材质: 高弹海绵/羽绒/记忆棉',
  },
  {
    name: '床/床垫',
    icon: BedDouble,
    items: ['软床', '实木床', '榻榻米床'],
    style: '床垫: 弹簧/乳胶/棕垫',
  },
  {
    name: '餐桌椅/茶几',
    icon: UtensilsCrossed,
    items: ['餐桌', '餐椅', '茶几', '边几'],
    style: '材质: 岩板/实木/金属',
  },
];

export default function ReadyMadeFurniture() {
  return (
    <section id="ready-made" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Ready-made Furniture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              成品家具 · <span className="text-wood">即买即用</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              精选设计，为空间注入灵魂
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
                    <p className="text-wood text-sm">{category.style}</p>
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
