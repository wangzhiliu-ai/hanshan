import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: '欧松板',
    nameEn: 'OSB Board',
    description: '定向结构刨花板，采用优质原木刨片定向铺装，具有强度高、稳定性好、环保等级高等特点。',
    specs: [
      { label: '厚度', value: '9-25mm' },
      { label: '规格', value: '1220×2440mm' },
      { label: '环保', value: 'E0/E1级' },
    ],
  },
  {
    name: '颗粒板',
    nameEn: 'Particle Board',
    description: '优质刨花板，表面平整光滑，内部结构均匀，是家具制造和装修工程的理想基材。',
    specs: [
      { label: '厚度', value: '12-25mm' },
      { label: '规格', value: '1220×2440mm' },
      { label: '密度', value: '650-750kg/m³' },
    ],
  },
  {
    name: '三聚氰胺板',
    nameEn: 'Melamine Board',
    description: '表面覆贴三聚氰胺浸渍纸，耐磨耐刮、防水防潮，多种花色可选，即装即用。',
    specs: [
      { label: '花色', value: '100+种' },
      { label: '耐磨', value: '≥350转' },
      { label: '耐污', value: '等级5' },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wood text-sm tracking-wider uppercase mb-4 block">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              我们的板材 · <span className="text-wood">品质基石</span>
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              精密工程板材，为整装系统提供坚实内核
            </p>
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.1}>
              <Card className="bg-white border-0 shadow-card card-hover h-full">
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-dark mb-1">{product.name}</h3>
                    <p className="text-wood text-sm">{product.nameEn}</p>
                  </div>
                  
                  <p className="text-dark/60 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="text-dark/50 text-sm">{spec.label}</span>
                        <span className="text-dark font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-wood hover:text-wood-dark font-medium text-sm transition-colors group">
                    了解详情
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
